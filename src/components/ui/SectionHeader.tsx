import React from 'react';
import DecryptedText from '../reactbits/DecryptedText';

interface SectionHeaderProps {
  title: string;
  eyebrow: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  eyebrow,
}) => {
  return (
    <div className="mb-8 border-hairline-b pb-4">
      <div className="label-mono text-steel mb-2 select-none">
        <DecryptedText text={eyebrow} animateOn="view" delay={0.1} />
      </div>
      <h2 className="font-display text-3xl md:text-4xl text-bone">
        {title}
      </h2>
    </div>
  );
};
export default SectionHeader;
