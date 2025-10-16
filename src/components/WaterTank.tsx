interface WaterTankProps {
  level: number;
  maxLevel?: number;
}

export const WaterTank = ({ level, maxLevel = 100 }: WaterTankProps) => {
  const fillPercentage = (level / maxLevel) * 100;
  
  // Scale markers at 0%, 25%, 50%, 75%, 100%
  const scaleMarkers = [10, 7.5, 5.0, 2.5, 0];
  
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-end gap-4">
        {/* Meter Scale on the Left */}
        <div className="flex flex-col justify-between h-64" style={{ paddingBottom: '2px' }}>
          {scaleMarkers.map((marker) => (
            <div key={marker} className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground w-10 text-right">
                {marker}%
              </span>
              <div className="w-4 h-0.5 bg-muted-foreground"></div>
            </div>
          ))}
        </div>

        {/* Water Tank Container */}
        <div className="relative w-48 h-64 rounded-3xl border-4 border-muted overflow-hidden bg-card/30 backdrop-blur-sm">
          <div 
            className="absolute bottom-0 w-full transition-all duration-700 ease-out"
            style={{ height: `${fillPercentage}liter` }}
          >
            <div className="h-full w-full bg-gradient-to-b from-primary/80 to-primary animate-pulse" />
            <div className="absolute top-0 w-full h-8 bg-primary/40 animate-[wave_3s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
      
      <p className="text-lg font-semibold text-foreground">
        Water Level: {fillPercentage.toFixed(0)}%
      </p>
    </div>
  );
};
