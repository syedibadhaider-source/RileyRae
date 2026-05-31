interface EyebrowProps {
  children: React.ReactNode;
  withOrnaments?: boolean;
  className?: string;
}

function DiamondOrnament({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="h-px w-6 bg-rose/40 sm:w-8" />
      <span className="h-px w-6 bg-rose/40 sm:w-8" />
    </span>
  );
}

export function Eyebrow({ children, withOrnaments = false, className = "" }: EyebrowProps) {
  if (withOrnaments) {
    return (
      <div className={`flex max-w-full flex-wrap items-center gap-3 sm:gap-4 ${className}`}>
        <DiamondOrnament className="hidden sm:inline-flex" />
        <span className="text-eyebrow max-w-full text-balance">{children}</span>
        <DiamondOrnament className="hidden sm:inline-flex" />
      </div>
    );
  }

  return <span className={`text-eyebrow ${className}`}>{children}</span>;
}
