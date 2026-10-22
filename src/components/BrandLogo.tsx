import React from 'react';

interface BrandLogoProps {
  className?: string;
  theme?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  theme = 'light',
  showTagline = false,
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official TuWeb Monitor + Arrow Cursor Icon */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          className="w-8 h-8 md:w-9 md:h-9"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Monitor Screen Frame */}
          <rect
            x="4"
            y="6"
            width="32"
            height="22"
            rx="5"
            stroke="#00BFB3"
            strokeWidth="3.2"
            fill="none"
          />
          {/* Monitor Stand */}
          <path
            d="M16 28L13 34H27L24 28"
            stroke="#00BFB3"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Monitor UI lines */}
          <path
            d="M11 12H18"
            stroke="#00BFB3"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 12H28"
            stroke="#00BFB3"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 16H28"
            stroke="#00BFB3"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 20H26"
            stroke="#00BFB3"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Cursor Pointer overlay */}
          <path
            d="M17 19L24 28L20.5 28.5L24 33L21.5 34L18 29.5L14 32.5L17 19Z"
            fill="#00BFB3"
            stroke={isDark ? '#1A2830' : '#FFFFFF'}
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-baseline tracking-tight font-extrabold text-xl md:text-2xl">
          <span className="text-[#00BFB3]">Tu</span>
          <span
            className={`ml-1 transition-colors ${
              isDark ? 'text-white' : 'text-[#253740]'
            }`}
          >
            Web Studio
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00BFB3] ml-1 mb-0.5 inline-block"></span>
        </div>
        {showTagline && (
          <span
            className={`text-[10px] uppercase tracking-wider font-semibold mt-0.5 ${
              isDark ? 'text-neutral-400' : 'text-[#52646C]'
            }`}
          >
            Diseñamos tu presencia online
          </span>
        )}
      </div>
    </div>
  );
};
