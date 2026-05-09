"use client"

import React, { useEffect } from 'react';
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
    image: '/assets/industry/real_estate.png',
    icon: <Building2 className="w-12 h-12" />,
    color: '#D4AF37'
  },
  {
    id: 2,
    title: 'IT & Software',
    desc: 'Futuristic Holograms. Digital Evolution.',
    image: '/assets/industry/it_software.png',
    icon: <Cpu className="w-12 h-12" />,
    color: '#00F3FF'
  },
  {
    id: 3,
    title: 'Loan',
    desc: 'Wealth Growth. Corporate Excellence.',
    image: '/assets/industry/Loan.png',
    icon: <PieChart className="w-12 h-12" />,
    color: '#D4AF37'
  },
  {
    id: 4,
    title: 'Insurance',
    desc: 'Unwavering Protection. Total Security.',
    image: '/assets/industry/insurence.png',
    icon: <ShieldCheck className="w-12 h-12" />,
    color: '#FFA500'
  },
  {
    id: 5,
    title: 'Investment',
    desc: 'Strategic Growth. Premium Returns.',
    image: '/assets/industry/investment.png',
    icon: <Coins className="w-12 h-12" />,
    color: '#FFD700'
  },
  {
    id: 6,
    title: 'Travel',
    desc: 'Dreamy Vistas. Cinematic Horizons.',
    image: '/assets/industry/travel.png',
    icon: <Plane className="w-12 h-12" />,
    color: '#87CEEB'
  },
  {
    id: 7,
    title: 'Grocery',
    desc: 'Unparalleled Freshness. Premium Quality.',
    image: '/assets/industry/grocery.png',
    icon: <Apple className="w-12 h-12" />,
    color: '#32CD32'
  },
  {
    id: 8,
    title: 'Medicine',
    desc: 'Sentient Wellness. Precise Care.',
    image: '/assets/industry/medicine.png',
    icon: <HeartPulse className="w-12 h-12" />,
    color: '#FF1493'
  },
  {
    id: 9,
    title: 'Manpower',
    desc: 'Global Teams. Elite Talent.',
    image: '/assets/industry/man_power.png',
    icon: <Users className="w-12 h-12" />,
    color: '#4169E1'
  },
  {
    id: 10,
    title: 'E-Commerce',
    desc: 'Direct Delivery. Luxury Logistics.',
    image: '/assets/industry/e-commerce.png',
    icon: <ShoppingBag className="w-12 h-12" />,
    color: '#D4AF37'
  }
];

type IndustryShowcaseProps = {
  currentScene: number;
}

const IndustryShowcase: React.FC<IndustryShowcaseProps> = ({ currentScene }) => {

  useEffect(() => {
    industries.forEach((industry) => {
      const img = new window.Image();
      img.src = industry.image;
    });
  }, []);

  return (
    <div className="showcase-container">
      {industries.map((industry, index) => (
        <motion.div
          key={industry.id}
          animate={{ opacity: currentScene === index ? 1 : 0 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className="scene active"
          aria-hidden={currentScene !== index}
        >
          <MotionImage
            src={industry.image}
            alt={industry.title}
            fill
            priority={index === 0}
            loading={index === 0 ? undefined : index <= 2 ? 'eager' : 'lazy'}
            unoptimized
            sizes="100vw"
            className="scene-image"
            quality={85}
            animate={{ scale: currentScene === index ? 1.12 : 1.04 }}
            transition={{ scale: { duration: 6, ease: 'linear' } }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </motion.div>
      ))}

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
