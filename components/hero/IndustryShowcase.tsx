"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Building2,
  Cpu,
  PieChart,
  ShieldCheck,
  Coins,
  Plane,
  Apple,
  HeartPulse,
  Users,
  ShoppingBag,
} from 'lucide-react';

const MotionImage = motion(Image);

const industries = [
  {
    id: 1,
    title: 'Real Estate',
    desc: 'Luxury Skyscrapers. Golden Skies.',
    image: '/assets/industry/real_estate.webp',
    icon: <Building2 className="w-12 h-12" />,
    color: '#D4AF37'
  },
  {
    id: 2,
    title: 'IT & Software',
    desc: 'Futuristic Holograms. Digital Evolution.',
    image: '/assets/industry/it_software.webp',
    icon: <Cpu className="w-12 h-12" />,
    color: '#00F3FF'
  },
  {
    id: 3,
    title: 'Loan',
    desc: 'Wealth Growth. Corporate Excellence.',
    image: '/assets/industry/Loan.webp',
    icon: <PieChart className="w-12 h-12" />,
    color: '#D4AF37'
  },
  {
    id: 4,
    title: 'Insurance',
    desc: 'Unwavering Protection. Total Security.',
    image: '/assets/industry/insurence.webp',
    icon: <ShieldCheck className="w-12 h-12" />,
    color: '#FFA500'
  },
  {
    id: 5,
    title: 'Investment',
    desc: 'Strategic Growth. Premium Returns.',
    image: '/assets/industry/investment.webp',
    icon: <Coins className="w-12 h-12" />,
    color: '#FFD700'
  },
  {
    id: 6,
    title: 'Travel',
    desc: 'Dreamy Vistas. Cinematic Horizons.',
    image: '/assets/industry/travel.webp',
    icon: <Plane className="w-12 h-12" />,
    color: '#87CEEB'
  },
  {
    id: 7,
    title: 'Grocery',
    desc: 'Unparalleled Freshness. Premium Quality.',
    image: '/assets/industry/grocery.webp',
    icon: <Apple className="w-12 h-12" />,
    color: '#32CD32'
  },
  {
    id: 8,
    title: 'Medicine',
    desc: 'Sentient Wellness. Precise Care.',
    image: '/assets/industry/medicine.webp',
    icon: <HeartPulse className="w-12 h-12" />,
    color: '#FF1493'
  },
  {
    id: 9,
    title: 'Manpower',
    desc: 'Global Teams. Elite Talent.',
    image: '/assets/industry/man_power.webp',
    icon: <Users className="w-12 h-12" />,
    color: '#4169E1'
  },
  {
    id: 10,
    title: 'E-Commerce',
    desc: 'Direct Delivery. Luxury Logistics.',
    image: '/assets/industry/e-Commerce.webp',
    icon: <ShoppingBag className="w-12 h-12" />,
    color: '#D4AF37'
  }
];

type IndustryShowcaseProps = {
  currentScene: number;
}

const IndustryShowcase: React.FC<IndustryShowcaseProps> = ({ currentScene }) => {
  return (
    <div className="showcase-container">
      {industries.map((industry, sceneIndex) => {
        const isActive = currentScene === sceneIndex;

        return (
        <motion.div
          key={industry.id}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{ duration: 1.45, ease: [0.4, 0, 0.2, 1] }}
          className={`scene ${isActive ? 'active' : ''}`}
          style={{ zIndex: isActive ? 2 : 1 }}
          aria-hidden={!isActive}
        >
          <MotionImage
            src={industry.image}
            alt={industry.title}
            fill
            priority={sceneIndex === 0}
            loading={sceneIndex === 0 ? undefined : 'eager'}
            sizes="100vw"
            className="scene-image"
            quality={82}
            animate={{ scale: isActive ? 1.1 : 1.03 }}
            transition={{ scale: { duration: 6.2, ease: 'linear' } }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </motion.div>
        );
      })}

      <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '5px', background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          animate={{ width: `${((currentScene + 1) / industries.length) * 100}%` }}
          transition={{ duration: 0.5 }}
          style={{ height: '100%', background: 'var(--gold)', boxShadow: '0 0 20px var(--gold)' }}
        />
      </div>
    </div>
  );
};

export default IndustryShowcase;
