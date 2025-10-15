import { Bell, X, CheckCircle, AlertTriangle, Info } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const notifications = [
  {
    id: 1,
    type: "warning",
    title: "Water Level Alert",
    message: "Area 3 water level below 70%",
    time: "5 mins ago",
    read: false,
  },
  {
    id: 2,
    type: "success",
    title: "Quality Check Complete",
    message: "All areas passed quality inspection",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    type: "info",
    title: "System Update",
    message: "Sensor calibration scheduled for tonight",
    time: "2 hours ago",
    read: true,
  },
  {
    id: 4,
    type: "success",
    title: "Tank Refilled",
    message: "Area 1 water tank refilled to 100%",
    time: "3 hours ago",
    read: true,
  },
];

export const NotificationPanel = () => {
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const getIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-warning" />;
      case "success":
        return <CheckCircle className="w-5 h-5 text-success" />;
      default:
        return <Info className="w-5 h-5 text-primary" />;
    }
  };
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative p-2 hover:bg-muted/20 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-warning" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-warning rounded-full animate-pulse"></span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-96 bg-card border-border">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <span>Notifications</span>
            {unreadCount > 0 && (
              <Badge variant="outline" className="bg-warning/20 text-warning border-warning">
                {unreadCount} new
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-100px)] mt-4">
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border transition-all ${
                  notification.read
                    ? "bg-card/50 border-border/50"
                    : "bg-card border-primary/30"
                }`}
              >
                <div className="flex gap-3">
                  <div className="mt-1">{getIcon(notification.type)}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {notification.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {notification.message}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {notification.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
