export default function OulfLogo({ size = 40, className = '' }) {
  return (
    <img
      src="/logo.jpg"
      alt="Oulf Logo"
      height={size}
      style={{ width: 'auto', display: 'block' }}
      className={className}
    />
  );
}
