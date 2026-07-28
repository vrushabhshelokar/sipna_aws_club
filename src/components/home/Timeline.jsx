import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import { getUpcomingEvents } from '../../data/events';
import { HiCalendarDays, HiMapPin } from 'react-icons/hi2';
import { staggerContainer, fadeInUp } from '../../hooks/useScrollAnimation';

/**
 * Events Timeline Component with Staggered Framer Motion Reveals.
 * Renders upcoming club events chronologically in a clean timeline format.
 * Consumes data dynamically from src/data/events.js.
 */
function Timeline() {
  const upcomingEvents = getUpcomingEvents();

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle
          badge="Club Schedule"
          title="Upcoming Events & Workshops"
          subtitle="Stay updated with our latest sessions, technical bootcamps, and cloud computing events."
        />

        {upcomingEvents && upcomingEvents.length > 0 ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="relative max-w-3xl mx-auto mt-12 pl-6 sm:pl-8 border-l-2 border-amber-500/30 space-y-10"
          >
            {upcomingEvents.map((event) => (
              <motion.div key={event.id} variants={fadeInUp} className="relative group">
                {/* Timeline Bullet Node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-400 group-hover:bg-amber-400 transition-colors duration-200 shadow-md"></div>

                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                      <HiCalendarDays className="w-3.5 h-3.5" />
                      {event.date}
                    </span>
                    {event.location && (
                      <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                        <HiMapPin className="w-3.5 h-3.5 text-slate-500" />
                        {event.location}
                      </span>
                    )}
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold font-heading text-slate-100 mb-3 group-hover:text-amber-400 transition-colors">
                    {event.title}
                  </h4>

                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12 glass-panel rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-base">No upcoming events scheduled at the moment. Check back soon!</p>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Timeline;
