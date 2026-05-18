import { Experience as ExperienceType } from '../types';
import { motion } from 'framer-motion';

interface ExperienceProps {
  experience: ExperienceType;
  index: number;
}

export const Experience = ({ experience, index}: ExperienceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 sm:pl-32 print:pl-8 pt-6 print:pt-2 group"
    >
      {/* Timeline line */}
      <div className={`absolute left-[10px] sm:left-[86px] print:left-[10px] top-0 h-full w-0.5 bg-emerald-100 group-hover:bg-emerald-200 transition-colors`} />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1/2 sm:left-[77px] print:left-1 top-[28px] h-5 w-5 rounded-full border-4 border-emerald-400 bg-white screen:shadow group-hover:border-emerald-500 transition-colors" />

      {/* Content */}
      <div className="bg-white/95 hover:bg-white rounded-xl print:shadow-none screen:shadow-lg hover:shadow-xl transition-all p-4 sm:p-6 print:p-2">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-semibold text-emerald-800 mb-1">
              {experience.title}
            </h3>
            <div className="text-base">
              <span className="font-medium text-emerald-800/90">{experience.company}</span>
              {experience.location && (
                <span className="text-emerald-800/70"> • {experience.location}</span>
              )}
            </div>
            <div className="text-emerald-800/70 mt-1 flex items-center gap-2 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{experience.startDate} - {experience.endDate}</span>
            </div>
          </div>

          <p className="text-emerald-800/80 text-sm sm:text-base">
            {experience.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs border border-emerald-100 group-hover:border-emerald-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
