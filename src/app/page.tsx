import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getRecentActivity } from '@/lib/github';

export const revalidate = 3600;

export default async function Home() {
  const activity = await getRecentActivity();

  return (
    <>
      <Header />
      <main>
        <Hero activity={activity} />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
