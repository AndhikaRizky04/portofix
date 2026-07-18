export interface SkillCategory {
  kategori: string;
  tools: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    kategori: 'Front-End',
    tools: ['React JS', 'React TSX', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS']
  },
  {
    kategori: 'Back-End',
    tools: ['Laravel', 'ASP.NET', 'Java', 'PHP']
  },
  {
    kategori: 'Mobile',
    tools: ['Flutter', 'Java Android']
  },
  {
    kategori: 'Database',
    tools: ['MySQL', 'Oracle Database']
  },
  {
    kategori: 'Machine Learning',
    tools: ['Python', 'CatBoost', 'XGBoost', 'Scikit-Learn', 'Pandas']
  },
  {
    kategori: 'Tools',
    tools: ['Git', 'GitHub', 'VS Code', 'Figma']
  }
];

export const softSkills: string[] = [
  'Komunikasi',
  'Public Speaking',
  'Kerja Sama Tim',
  'Kolaborasi',
  'Problem Solving',
  'Manajemen Waktu',
  'Adaptasi',
  'Tanggung Jawab'
];
