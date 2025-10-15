interface QualityGaugeProps {
  percentage: number;
  status: string;
}

export const QualityGauge = ({ percentage, status }: QualityGaugeProps) => {
  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="relative w-64 h-64">
      <svg className="transform -rotate-90 w-full h-full">
        {/* Background circle */}
        <circle
          cx="128"
          cy="128"
          r="90"
          stroke="hsl(var(--muted))"
          strokeWidth="16"
          fill="none"
        />
        {/* Red segment (bottom) */}
        <circle
          cx="128"
          cy="128"
          r="90"
          stroke="hsl(0 70% 55%)"
          strokeWidth="16"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * 0.75}
          strokeLinecap="round"
        />
        {/* Orange segment */}
        <circle
          cx="128"
          cy="128"
          r="90"
          stroke="hsl(38 92% 50%)"
          strokeWidth="16"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * 0.5}
          strokeLinecap="round"
        />
        {/* Green segment (top) */}
        <circle
          cx="128"
          cy="128"
          r="90"
          stroke="hsl(var(--success))"
          strokeWidth="16"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out drop-shadow-glow-success"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-5xl font-bold text-foreground">{percentage}%</div>
        <div className="text-lg font-semibold text-success">{status}</div>
        <div className="text-sm text-muted-foreground">Water Quality</div>
      </div>
    </div>
  );
};
