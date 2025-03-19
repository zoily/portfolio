import { Experience as ExperienceType } from '../types';
import { motion } from 'framer-motion';

interface ExperienceProps {
  experience: ExperienceType;
  index: number;
}

export const Experience = ({ experience, index }: ExperienceProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/95 hover:bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-8 mb-8"
    >
      <div className="flex items-center gap-6 mb-4">
        <div>
          <h3 className="text-2xl font-semibold text-emerald-800">
            {experience.title}
          </h3>
          <div className="text-lg">
            <span className="font-medium text-emerald-800/90">{experience.company}</span>
            {experience.location && (
              <span className="text-emerald-800/70"> • {experience.location}</span>
            )}
          </div>
        </div>
      </div>
      <div className="text-emerald-800/70 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{experience.startDate} - {experience.endDate}</span>
      </div>
      <p className="text-emerald-800/80 mb-6">
        {experience.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
};
