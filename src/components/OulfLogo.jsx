export default function OulfLogo({ size = 40, className = '' }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 120 40" fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Oulf Logo"
      className={className}
    >
      {/* Pastry accent dot */}
      <circle cx="8" cy="20" r="4" fill="var(--color-primary)" opacity="0.85" />
      <circle cx="8" cy="20" r="2" fill="var(--color-primary-highlight)" />

      {/* Wordmark: Oulf */}
      <text
        x="18" y="26"
        fontFamily="'Cormorant Garamond', 'Georgia', serif"
        fontSize="22" fontWeight="600"
        fill="var(--color-text)"
        letterSpacing="0.5"
      >Oulf</text>

      {/* Separator dot */}
      <text
        x="62" y="25"
        fontFamily="sans-serif"
        fontSize="12"
        fill="var(--color-primary)"
        opacity="0.7"
      >·</text>

      {/* Arabic wordmark */}
      <text
        x="72" y="27"
        fontFamily="'Cormorant Garamond', 'Georgia', serif"
        fontSize="18" fontWeight="500"
        fill="var(--color-primary)"
      >أُلف</text>
    </svg>
  );
}
