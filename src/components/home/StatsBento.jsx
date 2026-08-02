import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import { HiOutlineUserGroup, HiOutlineAcademicCap, HiOutlineCloud, HiOutlineRocketLaunch } from 'react-icons/hi2';

const stats = [
  {
    id: 'members',
    icon: HiOutlineUserGroup,
    value: '120+',
    label: 'Active Student Members',
    description: 'Enthusiastic builders across IT, CSE, AI & DS departments.'
  },
  {
    id: 'workshops',
    icon: HiOutlineAcademicCap,
    value: '15+',
    label: 'Hands-on Workshops',
    description: 'Cloud bootcamps covering S3, EC2, Lambda & Serverless.'
  },
  {
    id: 'certifications',
    icon: HiOutlineCloud,
    value: '50+',
    label: 'AWS Cloud Aspirants',
    description: 'Students actively preparing for Cloud Practitioner & Solutions Architect.'
  },
  {
    id: 'projects',
    icon: HiOutlineRocketLaunch,
    value: '20+',
    label: 'Cloud Solutions Built',
    description: 'Full-stack applications deployed on AWS infrastructure.'
  }
];

function StatsBento() {
  return (
    <section className="py-12 sm:py-16 relative">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-16 h-16 text-purple-400" />
                </div>
                
                <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight mb-1">
                  {stat.value}
                </div>
                
                <div className="text-xs font-semibold uppercase tracking-wider text-purple-300 mb-2">
                  {stat.label}
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default StatsBento;
