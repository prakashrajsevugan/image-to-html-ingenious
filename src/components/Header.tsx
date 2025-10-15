import { Search, Bell, AlertCircle, User, Battery, Wifi } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <header className="bg-card/30 backdrop-blur-md border-b border-border">
      <div className="px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">G</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground tracking-wide">GEFORZE</h1>
          </div>
          
          <nav className="flex items-center gap-6 ml-4">
            <a href="#" className="text-foreground font-medium hover:text-primary transition-colors text-sm">
              Dashboard
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Analytics
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Reports
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Settings
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search..." 
              className="pl-10 w-48 h-9 bg-input border-border text-sm"
            />
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1.5 bg-success/20 border border-success rounded-md">
            <Battery className="w-4 h-4 text-success" />
            <span className="text-success font-semibold text-xs">100%</span>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1.5 bg-success/20 border border-success rounded-md">
            <Wifi className="w-4 h-4 text-success" />
            <span className="text-success font-semibold text-xs">GOOD</span>
          </div>
          
          <button className="relative p-2 hover:bg-muted/20 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-warning" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-warning rounded-full"></span>
          </button>
          
          <button className="p-2 hover:bg-muted/20 rounded-lg transition-colors">
            <AlertCircle className="w-5 h-5 text-destructive" />
          </button>
          
          <div className="flex items-center gap-2 pl-3 border-l border-border">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=prakash" 
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-foreground font-medium text-sm">prakash</span>
          </div>
          
          <div className="text-right text-xs pl-3 border-l border-border">
            <div className="text-foreground font-medium">2025-10-15</div>
            <div className="text-muted-foreground">13:40:37 UTC</div>
          </div>
        </div>
      </div>
    </header>
  );
};
