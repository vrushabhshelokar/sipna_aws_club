import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { getUpcomingEvents } from '../../data/events';
import { HiCalendarDays, HiMapPin, HiSparkles } from 'react-icons/hi2';

function Timeline() {
  const upcomingEvents = getUpcomingEvents();

  return (
    <section id="events" className="py-16 sm:py-24 relative overflow-hidden">
      <Container>
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
            <HiSparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Club Roadmap & Workshops</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Upcoming Events & Bootcamps
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Gain hands-on experience, learn serverless architecture, and master AWS cloud fundamentals.
          </p>
        </div>

        {upcomingEvents && upcomingEvents.length > 0 ? (
          <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12">
            {/* Animated Glowing Vertical Line */}
            <div className="absolute left-[11px] sm:left-[19px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-purple-500 via-indigo-500 to-transparent" />

            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Bullet Node */}
                <div className="absolute -left-[24px] sm:-left-[32px] top-1.5 w-6 h-6 rounded-full bg-[#0D0D0E] border-2 border-purple-500 flex items-center justify-center group-hover:border-purple-400 group-hover:scale-110 transition-transform duration-200 shadow-lg shadow-purple-500/30">
                  <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:bg-white transition-colors" />
                </div>

                <div className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-600/15 transition-all duration-300" />

                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 bg-purple-600/15 border border-purple-500/30 px-3 py-1 rounded-full">
                      <HiCalendarDays className="w-3.5 h-3.5 text-purple-400" />
                      {event.date}
                    </span>
                    
                    {event.location && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                        <HiMapPin className="w-3.5 h-3.5 text-purple-400" />
                        {event.location}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 glass-panel rounded-3xl border border-white/10 max-w-xl mx-auto">
            <p className="text-zinc-400 text-sm">No upcoming events scheduled at the moment. Check back soon!</p>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Timeline;
