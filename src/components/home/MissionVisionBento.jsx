import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { homeContent } from '../../data/site';
import { HiRocketLaunch, HiLightBulb, HiCheckCircle, HiAcademicCap, HiWrenchScrewdriver, HiUserGroup, HiBriefcase } from 'react-icons/hi2';

function MissionVisionBento() {
  const { mission, vision, about, benefits } = homeContent;

  const benefitIcons = [
    HiAcademicCap,
    HiWrenchScrewdriver,
    HiUserGroup,
    HiBriefcase
  ];

  return (
    <section className="py-16 sm:py-24 relative">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
            <span>Our Foundation & Values</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Empowering Cloud Engineering Excellence
          </h2>
          <p className="text-zinc-400 text-sm sm:text-lg leading-relaxed">
            {about?.overview || 'Bridging academia and cloud industry practices through hands-on AWS training, community mentorship, and architectural innovation.'}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Mission Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 glass-card p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-purple-600/20 transition-all duration-500" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-600/15 border border-purple-500/30 text-purple-300 flex items-center justify-center mb-6">
                <HiRocketLaunch className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-purple-300 mb-2">
                {mission.badge || 'Mission'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {mission.title}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                {mission.description}
              </p>
            </div>

            {/* Core Objectives List */}
            {about?.objectives && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/5">
                {about.objectives.slice(0, 2).map((obj, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                    <HiCheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Vision Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 glass-card p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-indigo-600/20 transition-all duration-500" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/15 border border-indigo-500/30 text-indigo-300 flex items-center justify-center mb-6">
                <HiLightBulb className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-indigo-300 mb-2">
                {vision.badge || 'Vision'}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {vision.title}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {vision.description}
              </p>
            </div>
          </motion.div>

          {/* Benefits Cards Row (12 cols grid of 4 cards) */}
          {benefits.map((benefit, index) => {
            const Icon = benefitIcons[index % benefitIcons.length];
            return (
              <motion.div
                key={benefit.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                className="md:col-span-3 glass-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-purple-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default MissionVisionBento;
