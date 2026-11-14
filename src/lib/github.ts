import { allProjects, fallbackActivity, GITHUB_USER } from '@/data/projects';

export interface Activity {
  repo: string;
  pushedAt: string; // YYYY-MM-DD
}

const known = new Set(allProjects.map((p) => p.repo));

// 최근에 푸시한 저장소 목록. 한 시간마다 다시 불러오고, 실패하면 저장해 둔 목록을 씁니다.
export async function getRecentActivity(limit = 7): Promise<Activity[]> {
  try {
    const headers: HeadersInit = { Accept: 'application/vnd.github+json' };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=30`,
      { headers, next: { revalidate: 3600 } },
    );
    if (!res.ok) throw new Error(String(res.status));

    const repos: { name: string; pushed_at: string; fork: boolean }[] = await res.json();
    const items = repos
      .filter((r) => !r.fork && known.has(r.name))
      .map((r) => ({ repo: r.name, pushedAt: r.pushed_at.slice(0, 10) }))
      .slice(0, limit);

    return items.length > 0 ? items : fallbackActivity.slice(0, limit);
  } catch {
    return fallbackActivity.slice(0, limit);
  }
}
