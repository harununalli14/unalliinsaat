import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'dark' | 'light';
}

export const LogoEmblem: React.FC<{ size?: number; className?: string }> = ({
  size = 46,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 200 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Ünallı İnşaat Logo Simgesi"
    >
      {/* 1. Skyscraper Towers (Antrasit / Slate Dark: #38424E) */}
      {/* Left Tower */}
      <polygon
        points="46,110 46,58 64,48 64,110"
        fill="#4A5565"
      />
      {/* Center Tallest Tower */}
      <polygon
        points="65,110 65,30 84,18 84,110"
        fill="#343E4B"
      />
      {/* Right Tower (behind house) */}
      <polygon
        points="85,110 85,34 104,46 104,110"
        fill="#262F3B"
      />

      {/* 2. House Structure in Front (Gold / Ochre: #C59A3D) */}
      {/* Chimney on the right of the roof */}
      <polygon
        points="126,75 126,52 134,52 134,80"
        fill="#C59A3D"
      />

      {/* Outer Gable Roof and Overhang */}
      <polygon
        points="82,68 114,40 150,68 141,74 114,51 89,74"
        fill="#C59A3D"
      />

      {/* House Base Body */}
      <polygon
        points="88,74 88,110 140,110 140,74 114,52"
        fill="#C59A3D"
      />

      {/* Inner White Facade */}
      <polygon
        points="94,78 94,110 134,110 134,78 114,60"
        fill="#FFFFFF"
      />

      {/* 4-Pane Window (2x2 Grid) */}
      <g fill="#2B343F">
        <rect x="106" y="80" width="7" height="7" rx="0.5" />
        <rect x="115" y="80" width="7" height="7" rx="0.5" />
        <rect x="106" y="89" width="7" height="7" rx="0.5" />
        <rect x="115" y="89" width="7" height="7" rx="0.5" />
      </g>

      {/* 3. Base Curved Foundation Wave (Dark Slate: #2B343F) */}
      <path
        d="M32,118 C70,108 120,108 168,114 C124,127 72,126 32,118 Z"
        fill="#2B343F"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  theme = 'dark',
}) => {
  const iconHeight = size === 'sm' ? 32 : size === 'lg' ? 52 : size === 'xl' ? 68 : 42;

  if (variant === 'icon') {
    return <LogoEmblem size={iconHeight} className={className} />;
  }

  const textColor = theme === 'dark' ? 'text-white' : 'text-[#2B343F]';
  const subtextColor = theme === 'dark' ? 'text-white/60' : 'text-[#5A6574]';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Logo Graphic Symbol */}
      <LogoEmblem size={iconHeight} />

      {/* Brand Typography Lockup */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline tracking-tight font-extrabold text-lg sm:text-xl md:text-2xl font-sans">
          <span className={`${textColor} tracking-wider`}>ÜNALLI</span>
          <span className="text-[#C59A3D] ml-1.5 tracking-wider">İNŞAAT</span>
        </div>
        <div
          className={`text-[9px] sm:text-[10px] md:text-[11px] font-medium tracking-[0.22em] uppercase ${subtextColor} mt-1`}
        >
          İNŞAAT <span className="text-[#C59A3D]">·</span> TADİLAT
        </div>
      </div>
    </div>
  );
};

