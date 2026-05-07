"use client"

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
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
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';

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

const IndustryShowcase: React.FC = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [complete, setComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % industries.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="showcase-container" ref={containerRef}>
      <motion.div
        className="custom-cursor"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
        style={{ borderColor: industries[currentScene].color }}
      />
      <div className="scanlines"></div>
      <div className="noise"></div>

      {/* Dynamic Background Glow removed to avoid blooming effect */}
      {/* <motion.div
        className="glow-orb"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        style={{ top: '20%', left: '20%', background: industries[currentScene].color + '33' }}
      /> */}

      <AnimatePresence>
        <motion.div
          key={currentScene}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="scene active"
        >
          <MotionImage
            src={industries[currentScene].image}
            alt={industries[currentScene].title}
            fill
            priority={currentScene === 0}
            sizes="100vw"
            className="scene-image"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{
              scale: 1.25,
              opacity: 1,
              x: (mousePos.x - (typeof window !== 'undefined' ? window.innerWidth : 1920) / 2) / 40,
              y: (mousePos.y - (typeof window !== 'undefined' ? window.innerHeight : 1080) / 2) / 40
            }}
            transition={{
              scale: { duration: 8, ease: 'linear' },
              opacity: { duration: 1.5 },
              x: { type: 'spring', damping: 20 },
              y: { type: 'spring', damping: 20 }
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </motion.div>
      </AnimatePresence>

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
