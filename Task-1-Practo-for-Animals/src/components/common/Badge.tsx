import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'forest' | 'mint' | 'coral' | 'outline' | 'neutral' | 'emergency';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = ''
}) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs font-medium';
  
  const variantClasses = {
    primary: 'bg-[#E7F4EC] text-[#23866B] border border-[#23866B]/20',
    forest: 'bg-[#153D35] text-white',
    mint: 'bg-[#E7F4EC] text-[#153D35]',
    coral: 'bg-[#FDF2F0] text-[#D95338] border border-[#F28C75]/30',
    emergency: 'bg-[#F28C75] text-white font-semibold shadow-coral-glow',
    outline: 'border border-slate-200 text-slate-700 bg-white',
    neutral: 'bg-slate-100 text-slate-700'
  }[variant];

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full transition-colors ${sizeClasses} ${variantClasses} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
