export default function OulfLogo({ size = 40, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none"
      xmlns="http://www.w3.org/2000/svg" aria-label="Oulf Logo" className={className}>
      <circle cx="30" cy="30" r="28" fill="var(--color-primary-highlight)"
        stroke="var(--color-primary-soft)" strokeWidth="1"/>
      <path d="M19 28 Q19 20 30 18 Q41 20 41 28 Q41 36 30 38 Q19 36 19 28Z"
        fill="none" stroke="var(--color-primary)" strokeWidth="1.2" opacity="0.4"/>
      <text x="30" y="36" textAnchor="middle"
        fontFamily="'Cormorant Garamond',serif"
        fontSize="20" fontWeight="500" fill="var(--color-primary)">أ</text>
      <circle cx="22" cy="47" r="1.8" fill="var(--color-secondary)" opacity="0.7"/>
      <circle cx="30" cy="49" r="1.8" fill="var(--color-primary)" opacity="0.7"/>
      <circle cx="38" cy="47" r="1.8" fill="var(--color-secondary)" opacity="0.7"/>
    </svg>
  );
}
