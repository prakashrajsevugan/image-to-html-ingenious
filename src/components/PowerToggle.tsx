import { useState } from "react";
import { Power } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export const PowerToggle = () => {
  const [isOn, setIsOn] = useState(true);
  
  return (
    <div className="fixed bottom-8 right-8 bg-card/80 backdrop-blur-md border border-border rounded-lg px-6 py-3 flex items-center gap-4 shadow-lg">
      <div className="flex items-center gap-2">
        <Power className={`w-5 h-5 ${isOn ? 'text-success' : 'text-muted-foreground'}`} />
        <span className="font-semibold text-foreground">POWER</span>
      </div>
      <div className="flex items-center gap-2">
        <span className={`text-sm ${!isOn ? 'text-foreground' : 'text-muted-foreground'}`}>OFF</span>
        <Switch checked={isOn} onCheckedChange={setIsOn} />
        <span className={`text-sm ${isOn ? 'text-foreground' : 'text-muted-foreground'}`}>ON</span>
      </div>
    </div>
  );
};
