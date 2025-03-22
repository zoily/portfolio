import { Education as EducationType } from '../types';
import { motion } from 'framer-motion';

interface EducationProps {
  education: EducationType;
  index: number;
}

export const Education = ({ education, index }: EducationProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-1 bg-white/95 hover:bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-4 sm:p-8 mb-6 sm:mb-8"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold text-emerald-800">
            {education.degree}
          </h3>
          <div className="text-base sm:text-lg mb-1">
            <span className="font-medium text-emerald-800/90">{education.school}</span>
            <span className="text-emerald-800/70"> • {education.location}</span>
          </div>
          <div className="text-emerald-800/70 flex items-center gap-2 text-sm sm:text-base">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{education.startDate} - {education.endDate}</span>
          </div>
        </div>
      </div>
      <div className="pl-0 sm:pl-[calc(16px+1.5rem)] mt-4">
        <p className="text-emerald-800/70 text-sm sm:text-base">
          {education.description}
        </p>
      </div>
    </motion.article>
  );
};
