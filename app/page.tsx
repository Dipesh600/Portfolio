import Header from './components/Header'
import Hero from './components/Hero'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import CertificationsSection from './components/CertificationsSection'
import ProjectsSection from './components/ProjectsSection'
import GitHubSection from './components/GitHubSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <ProjectsSection />
      <GitHubSection />
      <ContactSection />
      <Footer />
    </main>
  )
} 