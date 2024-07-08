export default function Card({
  heading,
  children,
  className,
}: {
  heading?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border border-gray-200 rounded-md px-6 py-3 relative ${className}`}
    >
      {heading && <p className="text-2xl font-semibold">{heading}</p>}
      {children}
    </div>
  );
}
