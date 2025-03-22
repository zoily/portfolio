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
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-16 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-8 tracking-widest" style={{
                WebkitTextStroke: '2px white',
                WebkitTextFillColor: 'transparent',
                textShadow: '4px 4px 0px rgba(255,255,255,0.1)'
              }}>
                {info.name.toUpperCase()}
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-12">
                {info.title}
              </p>
            </motion.div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-4 bg-white/10 rounded-full blur-3xl"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-48 h-48 sm:w-72 sm:h-72 mx-auto">
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-2xl"></div>
                <img
                  src="/portfolio/profile-photo.png"
                  alt={info.name}
                  className="relative w-full h-full rounded-full object-cover border-4 border-white/10"
                />
              </div>
              <div className="absolute -top-2 right-0 sm:top-0 sm:right-0 bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 shadow-xl">
                <div className="text-2xl sm:text-4xl font-bold">10+</div>
                <div className="text-sm sm:text-base text-white/80">Années de travail</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
