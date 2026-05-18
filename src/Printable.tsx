import React from 'react';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { PrintableHeader } from './components/Header';
import { personalInfo, education, experiences } from './data';

// Composant Printable à imprimer
export const Printable = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="printable-content">
      <div className="grid grid-cols-3">
        <div className="bg-emerald-800 text-white p-4">
          <PrintableHeader info={personalInfo} />
          <About />
          <section id="education" className="mb-16 print:mb-12">
            <h2 className="text-3xl font-bold mb-12 print:mb-3 print:text-xl">Formation</h2>
            <div className="screen:md:flex gap-4 print:gap-0">
              {education.map((edu, index) => (
                <Education key={edu.degree} education={edu} index={index} />
              ))}
            </div>
          </section>
        </div>
        <main className="col-span-2 container px-4 py-16 print:py-6">
          <section id="experience" className="mb-16 print:mb-6">
            <h2 className="text-3xl print:text-2xl font-bold mb-12 print:mb-3">Expériences</h2>
            <div className="relative">
              {experiences.map((exp, index) => (
                <Experience
                  key={exp.title}
                  experience={exp}
                  index={index} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
});
