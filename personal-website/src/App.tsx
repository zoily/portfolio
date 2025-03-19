import { Header } from './components/Header';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { personalInfo, experiences, education } from './data';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-emerald-800 dark:bg-emerald-900 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-emerald-800/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold">LM</div>
            <div className="flex items-center gap-8">
              <a href="#" className="text-emerald-100/80 hover:text-emerald-100 transition-colors">Home</a>
              <a href="#about" className="text-emerald-100/80 hover:text-emerald-100 transition-colors">About</a>
              <a href="#experience" className="text-emerald-100/80 hover:text-emerald-100 transition-colors">Experience</a>
              <a href="#education" className="text-emerald-100/80 hover:text-emerald-100 transition-colors">Education</a>
              <a href="#contact" className="text-emerald-100/80 hover:text-emerald-100 transition-colors">Contact</a>
              <a 
                href="/cv.pdf" 
                className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full hover:bg-white transition-colors"
                download
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      </nav>

      <Header info={personalInfo} />

      <main className="container mx-auto px-4 max-w-6xl py-16">
        <section id="about" className="mb-16">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-lg text-white/80 mb-8">
                Développeur web passionné avec plus de 10 ans d'expérience dans la création de solutions innovantes.
                Spécialisé dans le développement full-stack et l'architecture de systèmes complexes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-white/80">Années d'expérience</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-white/80">Projets complétés</div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-2xl font-bold mb-2">Frontend</div>
                  <div className="w-full bg-white/20 h-2 rounded-full">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-2xl font-bold mb-2">Backend</div>
                  <div className="w-full bg-white/20 h-2 rounded-full">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-2xl font-bold mb-2">DevOps</div>
                  <div className="w-full bg-white/20 h-2 rounded-full">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-2xl font-bold mb-2">Design</div>
                  <div className="w-full bg-white/20 h-2 rounded-full">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold mb-12">Expériences</h2>
          {experiences.map((exp, index) => (
            <Experience key={exp.title} experience={exp} index={index} />
          ))}
        </section>

        <section id="education" className="mb-16">
          <h2 className="text-3xl font-bold mb-12">Formation</h2>
          {education.map((edu, index) => (
            <Education key={edu.degree} education={edu} index={index} />
          ))}
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
            <div>
              <h3 className="text-2xl font-bold mb-4">Social</h3>
              <div className="flex gap-4">
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
