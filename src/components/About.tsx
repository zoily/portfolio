
export function About() {
    return (
        <section id="about" className="mb-16 print:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-1 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 print:mb-3 print:text-xl">A propos de moi</h2>
              <p className="text-lg text-white/80 mb-8">
                Développeur web passionné avec plus de 10 ans d'expérience dans la création de solutions innovantes.
                Spécialisé dans le développement full-stack et l'architecture de systèmes complexes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-6 screen:hidden">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-white/80">Années d'expérience</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 print:hidden">
                  <div className="text-4xl font-bold mb-2">10K+</div>
                  <div className="text-white/80">Heures de développement</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">6+</div>
                  <div className="text-white/80">Secteurs d'activité</div>
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
    )
}