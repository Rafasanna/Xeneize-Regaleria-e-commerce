export function InstagramLogo({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <rect width="17" height="17" x="3.5" y="3.5" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  );
}
