import { cn } from "@/lib/utils";

interface LogoSechenovAITMProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LogoSechenovAITM({ className, ...props }: LogoSechenovAITMProps) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)} {...props}>
      <span className="text-xl font-bold tracking-tight">
        Sechenov AI<sup className="text-xs">TM</sup>
      </span>
    </div>
  );
}
