import { PersonalInfo } from '../types';
import { motion } from 'framer-motion';

interface HeaderProps {
  info: PersonalInfo;
}

export const Header = ({ info }: HeaderProps) => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 max-w-6xl py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-6xl lg:text-8xl font-bold mb-8 tracking-widest" style={{
                WebkitTextStroke: '2px white',
                WebkitTextFillColor: 'transparent',
                textShadow: '4px 4px 0px rgba(255,255,255,0.1)'
              }}>
                {info.name.toUpperCase()}
              </h2>
              <p className="text-xl lg:text-2xl text-white/80 mb-12">
                {info.title}
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-white text-emerald-800 rounded-full text-lg font-medium hover:bg-emerald-100 transition-colors"
                >
                  START CONSULTING
                </a>
                <div className="flex items-center gap-4">
                  <a
                    href={`https://${info.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-white/10 rounded-full blur-3xl"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-72 h-72 mx-auto">
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-2xl"></div>
                <img
                  src="/profile-photo.png"
                  alt={info.name}
                  className="relative w-full h-full rounded-full object-cover border-4 border-white/10"
                />
              </div>
              <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="text-4xl font-bold">10K+</div>
                <div className="text-white/80">Heures de dev</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
