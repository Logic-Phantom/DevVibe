'use client';

import { useState } from 'react';

const EMAIL = 'dlacoaud92@naver.com';
const empty = { name: '', email: '', subject: '', message: '' };

const channels = [
  { label: '이메일', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'GitHub', value: 'Logic-Phantom', href: 'https://github.com/Logic-Phantom' },
  {
    label: 'LinkedIn',
    value: '임채명',
    href: 'https://www.linkedin.com/in/%EC%B1%84%EB%AA%85-%EC%9E%84-a8b456379/',
  },
  { label: '블로그', value: 'logic-phantom.github.io', href: 'https://logic-phantom.github.io/' },
];

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('sending');
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || '전송하지 못했습니다. 이메일로 직접 보내 주세요.');
      }
      setForm(empty);
      setState('sent');
    } catch (err) {
      setError(err instanceof Error ? err.message : '전송하지 못했습니다.');
      setState('idle');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="h2">연락</h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted">
            채용, 외주, 앱인토스 미니앱 협업 제안 모두 반갑습니다. 이메일이 가장 빨리 닿습니다.
          </p>
          <dl className="mt-10 border-t border-line">
            {channels.map((c) => (
              <div key={c.label} className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                <dt className="eyebrow">{c.label}</dt>
                <dd className="min-w-0 truncate">
                  <a
                    href={c.href}
                    target={c.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {c.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="card p-6 md:p-8">
          {state === 'sent' ? (
            <div className="flex min-h-[22rem] flex-col justify-center" role="status">
              <p className="text-xl font-medium">메시지를 받았습니다.</p>
              <p className="mt-2 text-muted">적어 주신 이메일로 답장 드리겠습니다.</p>
              <button type="button" className="btn-ghost mt-8 self-start" onClick={() => setState('idle')}>
                메시지 하나 더 쓰기
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="이름" value={form.name} onChange={onChange} autoComplete="name" />
                <Field
                  id="email"
                  label="이메일"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  autoComplete="email"
                />
              </div>
              <Field id="subject" label="제목" value={form.subject} onChange={onChange} />
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-muted">
                  내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={onChange}
                  className="field resize-none"
                />
              </div>

              {error && (
                <p className="rounded-md border border-[#5a2a2a] bg-[#1f1213] px-3.5 py-3 text-sm text-[#f0a3a3]" role="alert">
                  {error}
                </p>
              )}

              <button type="submit" disabled={state === 'sending'} className="btn-primary w-full disabled:opacity-60">
                {state === 'sending' ? '보내는 중…' : '메시지 보내기'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = 'text',
  value,
  onChange,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-muted">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="field"
      />
    </div>
  );
}
