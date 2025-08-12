export default function HoverSwapText({ text, href, className = "" }) {
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

  const baseClasses = `group relative inline-block overflow-hidden ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        <Inner />
      </a>
    );
  }

  return <span className={baseClasses}><Inner /></span>;
}
