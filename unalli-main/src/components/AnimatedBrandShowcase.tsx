import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';

export const AnimatedBrandShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const [animationKey, setAnimationKey] = useState(0);
  const controls = useAnimation();

  // Sayfa her açıldığında veya bu bölüme her kaydırıldığında efekti tekrardan tetikle
  useEffect(() => {
    if (isInView) {
      setAnimationKey((prev) => prev + 1);
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#111315] via-[#15191E] to-[#111315] border-y border-white/10 overflow-hidden select-none"
    >
      {/* Background Subtle Architectural Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C59A3D_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Subtle Glow Behind the Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C59A3D]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Dedicated Brand Showcase Card */}
      <div className="relative max-w-4xl mx-auto bg-[#181C21]/90 backdrop-blur-md border border-white/10 hover:border-[#C59A3D]/40 rounded-sm p-8 sm:p-12 shadow-2xl transition-colors duration-500">
        
        {/* Architectural Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C59A3D]/60" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C59A3D]/60" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C59A3D]/60" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C59A3D]/60" />

        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Top Indicator */}
          <motion.div
            key={`kicker-${animationKey}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#C59A3D] mb-8"
          >
            <span>Kuruluş 1994</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span>Mimarlık & Mühendislik</span>
          </motion.div>

          {/* Animated Logo Graphic (Vector SVG with Staggered Layers) */}
          <div className="relative mb-6">
            <svg
              key={`logo-svg-${animationKey}`}
              width="140"
              height="105"
              viewBox="0 0 200 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            >
              {/* 1. Left Tower Rising Effect */}
              <motion.polygon
                points="46,110 46,58 64,48 64,110"
                fill="#4A5565"
                initial={{ opacity: 0, y: 40, scaleY: 0.3 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ originY: 1 }}
              />

              {/* 2. Center Tallest Tower Rising Effect */}
              <motion.polygon
                points="65,110 65,30 84,18 84,110"
                fill="#343E4B"
                initial={{ opacity: 0, y: 50, scaleY: 0.2 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ originY: 1 }}
              />

              {/* 3. Right Tower Rising Effect */}
              <motion.polygon
                points="85,110 85,34 104,46 104,110"
                fill="#262F3B"
                initial={{ opacity: 0, y: 40, scaleY: 0.3 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ originY: 1 }}
              />

              {/* 4. House Chimney */}
              <motion.polygon
                points="126,75 126,52 134,52 134,80"
                fill="#C59A3D"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              />

              {/* 5. Golden House Gable Roof Sliding in */}
              <motion.polygon
                points="82,68 114,40 150,68 141,74 114,51 89,74"
                fill="#C59A3D"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* 6. House Base Solid Wall */}
              <motion.polygon
                points="88,74 88,110 140,110 140,74 114,52"
                fill="#C59A3D"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />

              {/* 7. Inner White Facade */}
              <motion.polygon
                points="94,78 94,110 134,110 134,78 114,60"
                fill="#FFFFFF"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              />

              {/* 8. 4-Pane Window Illuminating */}
              <motion.g
                fill="#2B343F"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                style={{ originX: 0.5, originY: 0.5 }}
              >
                <rect x="106" y="80" width="7" height="7" rx="0.5" />
                <rect x="115" y="80" width="7" height="7" rx="0.5" />
                <rect x="106" y="89" width="7" height="7" rx="0.5" />
                <rect x="115" y="89" width="7" height="7" rx="0.5" />
              </motion.g>

              {/* 9. Curved Foundation Wave Sweeping Across */}
              <motion.path
                d="M32,118 C70,108 120,108 168,114 C124,127 72,126 32,118 Z"
                fill="#2B343F"
                initial={{ pathLength: 0, opacity: 0, x: -20 }}
                animate={{ pathLength: 1, opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.65, ease: 'easeOut' }}
              />
            </svg>

            {/* Radiant Ambient Ring around Logo */}
            <motion.div
              key={`ring-${animationKey}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.45, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-4 rounded-full border border-[#C59A3D]/30 pointer-events-none"
            />
          </div>

          {/* Animated Company Brand Name: ÜNALLI İNŞAAT */}
          <div className="overflow-hidden py-1 mb-2">
            <motion.div
              key={`brand-${animationKey}`}
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-baseline justify-center tracking-tight font-extrabold text-3xl sm:text-5xl lg:text-6xl font-sans"
            >
              <span className="text-white tracking-wider drop-shadow-md">
                ÜNALLI
              </span>
              <span className="text-[#C59A3D] ml-3 sm:ml-4 tracking-wider drop-shadow-[0_2px_15px_rgba(197,154,61,0.35)]">
                İNŞAAT
              </span>
            </motion.div>
          </div>

          {/* Animated Subtitle Tagline: İNŞAAT · TADİLAT */}
          <div className="overflow-hidden py-1 mb-6">
            <motion.div
              key={`sub-${animationKey}`}
              initial={{ letterSpacing: '0.1em', opacity: 0 }}
              animate={{ letterSpacing: '0.35em', opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
              className="text-xs sm:text-sm font-semibold uppercase text-white/70"
            >
              İNŞAAT <span className="text-[#C59A3D] font-bold">·</span> TADİLAT
            </motion.div>
          </div>

          {/* Elegant Gold Hairline Divider with Light Beam Reflection */}
          <div className="relative w-48 sm:w-72 h-[1px] bg-gradient-to-r from-transparent via-[#C59A3D] to-transparent my-2 overflow-hidden">
            <motion.div
              key={`beam-${animationKey}`}
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 1.8, delay: 0.8, ease: 'easeInOut' }}
              className="w-16 h-full bg-white blur-[1px]"
            />
          </div>

          {/* Description & Heritage Note */}
          <motion.p
            key={`desc-${animationKey}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-xs sm:text-sm text-white/60 max-w-lg mt-4 font-normal leading-relaxed"
          >
            30 yıllık köklü mühendislik birikimi ve çağdaş mimari vizyonla, hayallerinizi sağlam temeller üzerine inşa ediyoruz.
          </motion.p>
        </div>
      </div>
    </div>
  );
};
