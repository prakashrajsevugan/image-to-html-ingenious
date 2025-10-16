interface WaterTankProps {
  level: number;
  maxLevel?: number;
}

export const WaterTank = ({ level, maxLevel = 100 }: WaterTankProps) => {
  const fillPercentage = Math.min(Math.max((level / maxLevel) * 100, 0), 100);

  const scaleMarkers = Array.from({ length: 5 }, (_, i) => ((maxLevel / 4) * i).toFixed(1)).reverse();

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-end gap-4">
        {/* Meter Scale */}
        <div className="flex flex-col justify-between h-64" style={{ paddingBottom: '2px' }}>
          {scaleMarkers.map((marker) => (
            <div key={marker} className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground w-10 text-right">
                {marker} L
              </span>
              <div className="w-4 h-0.5 bg-muted-foreground"></div>
            </div>
          ))}
        </div>

        {/* Water Tank */}
        <div className="relative w-48 h-64 overflow-hidden bg-card/30 backdrop-blur-sm rounded-3xl">
          {/* 3 Vertical Sections */}
          <div className="absolute top-0 w-full h-1/3 border-b-2 border-red-500" />
          <div className="absolute top-1/3 w-full h-1/3 border-b-2 border-green-500" />
          <div className="absolute top-2/3 w-full h-1/3 border-b-2 border-yellow-500" />

          {/* Water Fill */}
          <div
            className="absolute bottom-0 w-full transition-all duration-700 ease-out"
            style={{ height: `${fillPercentage}%` }}
          >
            <div className="h-full w-full bg-gradient-to-b from-primary/80 to-primary animate-pulse" />
            <div className="absolute top-0 w-full h-8 bg-primary/40 animate-[wave_3s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      {/* Water Level Text */}
      <p className="text-lg font-semibold text-foreground">
        Water Level: {fillPercentage.toFixed(0)}%
      </p>
    </div>
  );
};
