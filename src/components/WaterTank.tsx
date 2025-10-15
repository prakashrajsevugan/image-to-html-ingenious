interface WaterTankProps {
  level: number;
  maxLevel?: number;
}

export const WaterTank = ({ level, maxLevel = 100 }: WaterTankProps) => {
  const fillPercentage = (level / maxLevel) * 100;
  
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-48 h-64 rounded-3xl border-4 border-muted overflow-hidden bg-card/30 backdrop-blur-sm">
        <div 
          className="absolute bottom-0 w-full transition-all duration-700 ease-out"
          style={{ height: `${fillPercentage}%` }}
        >
          <div className="h-full w-full bg-gradient-to-b from-primary/80 to-primary animate-pulse" />
          <div className="absolute top-0 w-full h-8 bg-primary/40 animate-[wave_3s_ease-in-out_infinite]" />
        </div>
      </div>
      <p className="text-lg font-semibold text-foreground">
        Water Level: {fillPercentage.toFixed(0)}%
      </p>
    </div>
  );
};
