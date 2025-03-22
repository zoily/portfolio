import { Header } from './components/Header';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { personalInfo, experiences, education } from './data';
import './index.css';
import { Navbar } from './components/Navbar';
import { About } from './components/About';

function App() {

  return (
    <div className="min-h-screen bg-emerald-800 dark:bg-emerald-900 text-white">
      <Navbar/>

      <Header info={personalInfo} />

      <main className="container mx-auto px-4 max-w-6xl py-16">
        <About/>
        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold mb-12">Expériences</h2>
          <div className="relative">
            {experiences.map((exp, index) => (
              <Experience 
                key={exp.title} 
                experience={exp} 
                index={index}
              />
            ))}
          </div>
        </section>

        <section id="education" className="mb-16">
          <h2 className="text-3xl font-bold mb-12">Formation</h2>
          <div className="md:flex gap-4">
            {education.map((edu, index) => (
              <Education key={edu.degree} education={edu} index={index}/>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-emerald-900/50 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {personalInfo.email}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {personalInfo.phone}
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
