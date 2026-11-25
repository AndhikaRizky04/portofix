export interface NavItem {
  label: string;
  hash: string;
}

/** Section utama halaman Home — dipakai Navbar & Footer agar selalu sinkron. */
export const navItems: NavItem[] = [
  { label: 'Tentang', hash: '#tentang' },
  { label: 'Pengalaman', hash: '#pengalaman' },
  { label: 'Portofolio', hash: '#portofolio' },
  { label: 'Keahlian', hash: '#keahlian' },
  { label: 'Sertifikasi', hash: '#sertifikasi' },
];
