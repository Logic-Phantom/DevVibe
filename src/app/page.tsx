import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <PWAInstallPrompt />
    </main>
  );
}
