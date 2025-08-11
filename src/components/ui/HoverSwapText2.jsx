export default function HoverSwapText2({ text, href, className = "" }) {
  const Inner = () => (
    <>
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {text}
      </span>
      <span className="block absolute top-full left-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
        {text}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`group relative inline-block overflow-hidden ${className}`}
      >
        <Inner />
      </a>
    );
  }

  // No href → just a span for wrapping in div/button
  return (
    <span
      className={`group relative inline-block overflow-hidden ${className}`}
    >
      <Inner />
    </span>
  );
}
