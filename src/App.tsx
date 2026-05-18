import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Header } from './components/Header';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { personalInfo, experiences, education } from './data';
import './index.css';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Printable } from './Printable';

const App = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    pageStyle: `
      @page {
        size: A4;
        margin: 0;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
      }
    `,
    documentTitle: 'CV - ' + personalInfo.name,
    removeAfterPrint: true
  } as any);

  return (
    <div className="min-h-screen bg-emerald-800 dark:bg-emerald-900 text-white">
      <Navbar onPrint={handlePrint} />
      <Header info={personalInfo} />
      <main className="container mx-auto px-4 py-16">
        <About />

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
          <div className="screen:md:flex gap-4">
            {education.map((edu, index) => (
              <Education key={edu.degree} education={edu} index={index}/>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-emerald-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-emerald-200"> {new Date().getFullYear()}</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-emerald-300 hover:text-white">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-emerald-300 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
      
      {/* Composant caché pour l'impression */}
      <div style={{ display: 'none' }}>
        <Printable ref={componentRef} />
      </div>
    </div>
  );
}

export default App;


