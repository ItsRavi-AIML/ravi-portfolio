import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`group relative inline-flex items-center justify-center gap-2 p-2 rounded-lg border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-interactive)] cursor-pointer ${
        isDark
          ? 'bg-[#111718] border-[#26302E] text-[#A6AEAA] hover:text-[#C6F432] hover:border-[#C6F432]/50'
          : 'bg-[#FFFFFF] border-[#DDE2DA] text-[#626B65] hover:text-[#789B13] hover:border-[#789B13]/60 shadow-sm'
      } ${className}`}
    >
      <span className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 text-[#C6F432]" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-12 text-[#789B13]" />
        )}
      </span>

      {showLabel && (
        <span className="text-xs font-mono font-medium uppercase tracking-wider">
          {isDark ? 'LIGHT' : 'DARK'}
        </span>
      )}
    </button>
  );
};
