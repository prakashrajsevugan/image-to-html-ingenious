import React from "react";

interface WaterTankProps {
  level: number;       // Current water level
  maxLevel?: number;   // Maximum tank capacity (default: 100)
}

// Scale component
const Scale = ({ maxLevel }: { maxLevel: number }) => {
  // Dynamic markers at 0%, 25%, 50%, 75%, 100%
  const markers = Array.from({ length: 5 }, (_, i) => (maxLevel / 4) * i).reverse();

  return (
    <div className="flex flex-col justify-between h-64">
      {markers.map((marker) => (
        <div key={marker} className="flex items-center gap-2">
          <span className="text-sm font-semibold text-foreground w-10 text-right">
            {marker.toFixed(1)}L
          </span>
          <div className="w-4 h-0.5 bg-muted-foreground"></div>
        </div>
      ))}
    </div>
  );
};

// WaterTank component
export const WaterTank = ({ level, maxLevel = 100 }: WaterTankProps) => {
  // Clamp level to [0, maxLevel] and calculate percentage
  const fillPercentage = Math.min(Math.max((level / maxLevel) * 100, 0), 100);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-end gap-4">
        {/* Left Scale */}
        <Scale maxLevel={maxLevel} />

        {/* Tank Container */}
        <div
          className="relative w-48 h-64 rounded-3xl border-4 border-muted overflow-hidden bg-card/30 backdrop-blur-sm"
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={maxLevel}
          aria-label="Water Tank Level"
        >
          {/* Water Fill */}
          <div
            className="absolute bottom-0 w-full transition-all duration-700 ease-out"
            style={{ height: `${fillPercentage}%` }}
          >
            {/* Static fill gradient */}
            <div className="h-full w-full bg-gradient-to-b from-primary/80 to-primary animate-pulse" />

            {/* Moving wave */}
            <div className="absolute top-0 w-full h-8 bg-primary/40 animate-[wave_3s_linear_infinite] rounded-t-full" />
          </div>
        </div>
      </div>

      {/* Level Display */}
      <p className="text-lg font-semibold text-foreground">
        {level.toFixed(1)} / {maxLevel} L ({fillPercentage.toFixed(0)}%)
      </p>
    </div>
  );
};
