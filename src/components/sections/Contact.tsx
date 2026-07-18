import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { profile } from '../../data/profile';
import { FiMail, FiMessageSquare, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';

export const Contact: React.FC = () => {
  // Format WhatsApp value if it is a placeholder or number
  const waUrl = profile.kontak.whatsapp.startsWith('ISI') 
    ? '#' 
    : `https://wa.me/${profile.kontak.whatsapp}`;

  const emailUrl = profile.kontak.email.startsWith('ISI')
    ? '#'
    : `mailto:${profile.kontak.email}`;

  const linkedinUrl = profile.kontak.linkedin.startsWith('ISI')
    ? '#'
    : profile.kontak.linkedin;

  return (
    <section id="kontak" className="py-16 scroll-mt-14">
      <SectionHeader 
        title="Hubungi Saya" 
        eyebrow="KONTAK · KONEKSI SISTEM · ONLINE" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-hairline bg-ink-800 p-6 md:p-8 rounded-[4px]">
        {/* Left Column: Specific call to action */}
        <div className="lg:col-span-6 space-y-4">
          <h3 className="font-display text-lg md:text-xl text-bone tracking-tight uppercase leading-snug">
            HUBUNGI SAYA UNTUK KOLABORASI TEKNIS
          </h3>
          <p className="text-sm text-mute leading-relaxed font-sans max-w-md">
            Saya siap berkontribusi sebagai Software Engineer atau Machine Learning Specialist untuk membangun 
            sistem pemantauan, pelacakan, dan pengolahan data yang presisi di perusahaan Anda.
          </p>
          <div className="font-mono text-[9px] text-steel uppercase tracking-widest mt-6 select-none">
            TELEMETRY // SYS_ID: {profile.nama.replace(/\s+/g, '_').toUpperCase()}
          </div>
        </div>

        {/* Right Column: 5 Link Rows */}
        <div className="lg:col-span-6 divide-y divide-line text-xs font-mono select-none">
          {/* Email */}
          <div className="flex items-center justify-between py-3">
            <span className="text-mute flex items-center gap-2">
              <FiMail className="text-steel" />
              <span>EMAIL</span>
            </span>
            <a 
              href={emailUrl}
              className="text-phosphor hover:text-bone transition-colors duration-150 text-right select-all"
            >
              {profile.kontak.email}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center justify-between py-3">
            <span className="text-mute flex items-center gap-2">
              <FiMessageSquare className="text-steel" />
              <span>WHATSAPP</span>
            </span>
            <a 
              href={waUrl}
              className="text-phosphor hover:text-bone transition-colors duration-150 text-right select-all"
            >
              {profile.kontak.whatsapp}
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-between py-3">
            <span className="text-mute flex items-center gap-2">
              <FiLinkedin className="text-steel" />
              <span>LINKEDIN</span>
            </span>
            <a 
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-phosphor hover:text-bone transition-colors duration-150 text-right select-all truncate max-w-[200px]"
            >
              {profile.kontak.linkedin.replace('https://', '')}
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center justify-between py-3">
            <span className="text-mute flex items-center gap-2">
              <FiGithub className="text-steel" />
              <span>GITHUB</span>
            </span>
            <a 
              href={profile.kontak.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-phosphor hover:text-bone transition-colors duration-150 text-right select-all"
            >
              {profile.kontak.github.replace('https://', '')}
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-between py-3">
            <span className="text-mute flex items-center gap-2">
              <FiMapPin className="text-steel" />
              <span>LOKASI</span>
            </span>
            <span className="text-bone text-right text-[10px] select-all">
              {profile.kontak.koordinat}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
