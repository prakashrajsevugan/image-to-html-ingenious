import { AlertCircle, Activity, Thermometer, Droplets, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const systemAlerts = [
  {
    id: 1,
    icon: Activity,
    title: "System Status",
    status: "Operational",
    severity: "success",
    details: "All systems running normally",
  },
  {
    id: 2,
    icon: Thermometer,
    title: "Temperature Sensors",
    status: "Active",
    severity: "success",
    details: "4/4 sensors reporting",
  },
  {
    id: 3,
    icon: Droplets,
    title: "Water Flow",
    status: "Normal",
    severity: "success",
    details: "All valves functioning",
  },
  {
    id: 4,
    icon: Zap,
    title: "Power Supply",
    status: "Stable",
    severity: "success",
    details: "100% battery, grid connected",
  },
];

export const AlertsDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-2 hover:bg-muted/20 rounded-lg transition-colors">
          <AlertCircle className="w-5 h-5 text-destructive" />
        </button>
      </DialogTrigger>
      <DialogContent className="bg-card border-border max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            System Alerts & Status
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-96">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {systemAlerts.map((alert) => {
              const Icon = alert.icon;
              return (
                <div
                  key={alert.id}
                  className="p-4 rounded-lg border border-border bg-card/50 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {alert.title}
                      </h4>
                      <Badge
                        variant="outline"
                        className="mb-2 bg-success/20 text-success border-success"
                      >
                        {alert.status}
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        {alert.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
