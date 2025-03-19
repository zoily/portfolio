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
      className="bg-card-light dark:bg-card-dark rounded-xl shadow-lg hover:shadow-xl transition-all p-8 mb-8"
    >
      <h3 className="text-2xl font-semibold text-primary dark:text-primary-dark mb-3">
        {education.degree}
      </h3>
      <div className="text-lg mb-2">
        <span className="font-medium text-text-light dark:text-text-dark">{education.school}</span>
        <span className="text-gray-600 dark:text-gray-400"> • {education.location}</span>
      </div>
      <div className="text-gray-600 dark:text-gray-400 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{education.startDate} - {education.endDate}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300">
        {education.description}
      </p>
    </motion.article>
  );
};
