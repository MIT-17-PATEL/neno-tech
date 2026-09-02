import React from 'react';

export const SectionDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden my-6 md:my-12 ${className}`} aria-hidden="true">
      <div className="laser-divider" />
    </div>
  );
};

export default SectionDivider;
