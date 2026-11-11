import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SelectedProjects } from './components/SelectedProjects';
import { AboutSection } from './components/AboutSection';
import { ToolkitSection } from './components/ToolkitSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectItem } from './types/portfolio';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('work');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Track active section as user scrolls
  useEffect(() => {
    const sectionIds = ['work', 'about', 'toolkit', 'contact'];
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] flex flex-col selection:bg-[var(--selection-bg)] selection:text-[var(--selection-text)] transition-colors duration-300">
        {/* Navigation Header */}
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

        {/* Main Content Flow */}
        <main className="flex-1 w-full" id="main-content">
          <HeroSection
            onViewWork={() => handleNavigate('work')}
            onContactClick={() => handleNavigate('contact')}
            onSelectProject={(project) => setSelectedProject(project)}
          />

          <SelectedProjects
            onContactClick={() => handleNavigate('contact')}
            selectedProject={selectedProject}
            onSelectProject={setSelectedProject}
          />

          <AboutSection />

          <ToolkitSection />

          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onBackToTop={() => handleNavigate('top')} />
      </div>
    </ThemeProvider>
  );
}
