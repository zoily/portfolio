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
      className="relative screen:min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-16 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {titre(info)}
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
              {photo(info)}
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

export const PrintableHeader = ({ info }: HeaderProps) => {
  return (
    <header className="py-2 pb-4">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl pb-4">
        <div className="gap-8 sm:gap-16 items-center">
          {photo(info)}
          <div className="text-center mt-8  items-center">
            {titre(info)}
          </div>
        </div>
      </div>
      <section>
        <p className="text-left flex text-lg text-white/80">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 pr-2 pt-1" fill='currentColor'>
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
          </svg>
          {info.email}
        </p>
        {info.phone && <p className="text-left flex text-lg text-white/80">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 pr-2 pt-1" fill='currentColor'>
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
          </svg>
          {info.phone}
        </p>}
      </section>
      
    </header>
  );
}

const titre = (info: PersonalInfo) => {
  return (<>
        <h2 className="text-4xl print:text-3xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-8 print:m-0 tracking-widest" style={{
          WebkitTextStroke: '2px white',
          WebkitTextFillColor: 'transparent',
          textShadow: '4px 4px 0px rgba(255,255,255,0.1)'
        }}>
          {info.name.toUpperCase()}
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-12 print:m-0">
          {info.title}
        </p>
      </>
  );
};

const photo = (info: PersonalInfo) => {
  return (
    <div className="relative w-48 h-48 sm:w-72 sm:h-72 print:w-24 print:h-24 mx-auto">
      <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-2xl"></div>
      <img
        src="/portfolio/profile-photo.png"
        alt={info.name}
        className="relative w-full h-full rounded-full object-cover border-4 border-white/10"
      />
    </div>
  );
};
  