export default function OulfLogo({ size = 40, className = '' }) {
  return (
    <img
      src="/logo.jpg"
      alt="Oulf Logo"
      height={size}
      width="auto"
      style={{
        height: size,
        width: 'auto',
        maxHeight: size,
        maxWidth: '160px',
        display: 'block',
        objectFit: 'contain',
      }}
      className={className}
    />
  );
}
