import React from 'react';
import { 
  SiReact, 
  SiLaravel, 
  SiPython, 
  SiFlutter, 
  SiDotnet, 
  SiMysql, 
  SiBootstrap, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss, 
  SiGit, 
  SiGithub, 
  SiFigma, 
  SiScikitlearn, 
  SiPandas,
  SiPhp,
  SiSharp
} from 'react-icons/si';
import { DiAndroid } from 'react-icons/di';
import { FaJava } from 'react-icons/fa';

interface TechChipProps {
  tech: string;
}

export const TechChip: React.FC<TechChipProps> = ({ tech }) => {
  const getIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('react')) return <SiReact className="w-3 h-3 text-steel" />;
    if (lower.includes('laravel')) return <SiLaravel className="w-3 h-3 text-steel" />;
    if (lower.includes('python')) return <SiPython className="w-3 h-3 text-steel" />;
    if (lower.includes('flutter')) return <SiFlutter className="w-3 h-3 text-steel" />;
    if (lower.includes('asp.net') || lower.includes('.net')) return <SiDotnet className="w-3 h-3 text-steel" />;
    if (lower.includes('oracle')) return null;
    if (lower.includes('mysql')) return <SiMysql className="w-3 h-3 text-steel" />;
    if (lower.includes('bootstrap')) return <SiBootstrap className="w-3 h-3 text-steel" />;
    if (lower.includes('tailwind')) return <SiTailwindcss className="w-3 h-3 text-steel" />;
    if (lower.includes('html')) return <SiHtml5 className="w-3 h-3 text-steel" />;
    if (lower.includes('css')) return <SiCss className="w-3 h-3 text-steel" />;
    if (lower.includes('git') && !lower.includes('hub')) return <SiGit className="w-3 h-3 text-steel" />;
    if (lower.includes('github')) return <SiGithub className="w-3 h-3 text-steel" />;
    if (lower.includes('vs code') || lower.includes('vscode')) return null;
    if (lower.includes('figma')) return <SiFigma className="w-3 h-3 text-steel" />;
    if (lower.includes('scikit')) return <SiScikitlearn className="w-3 h-3 text-steel" />;
    if (lower.includes('pandas')) return <SiPandas className="w-3 h-3 text-steel" />;
    if (lower.includes('android')) return <DiAndroid className="w-3.5 h-3.5 text-steel" />;
    if (lower.includes('java') && !lower.includes('android')) return <FaJava className="w-3.5 h-3.5 text-steel" />;
    if (lower.includes('php')) return <SiPhp className="w-3 h-3 text-steel" />;
    if (lower.includes('c#')) return <SiSharp className="w-3 h-3 text-steel" />;
    return null;
  };

  const icon = getIcon(tech);

  return (
    <span className="inline-flex items-center gap-1.5 border-hairline bg-ink-800 text-mute label-mono py-1 px-2.5 rounded-[3px] select-none hover:border-steel hover:text-bone transition-colors duration-200">
      {icon}
      <span>{tech}</span>
    </span>
  );
};
export default TechChip;
