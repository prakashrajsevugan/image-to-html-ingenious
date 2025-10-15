import { Search, Bell, AlertCircle, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <header className="bg-card/30 backdrop-blur-md border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">G</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground tracking-wide">GEFORCE</h1>
          </div>
          
          <nav className="flex items-center gap-6">
            <a href="#" className="text-foreground font-medium hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Analytics
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Reports
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Settings
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search..." 
              className="pl-10 w-64 bg-input border-border"
            />
          </div>
          
          <Badge variant="outline" className="bg-success/20 text-success border-success">
            100% GOOD
          </Badge>
          
          <button className="relative p-2 hover:bg-muted/20 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-warning" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-warning rounded-full"></span>
          </button>
          
          <button className="p-2 hover:bg-muted/20 rounded-lg transition-colors">
            <AlertCircle className="w-5 h-5 text-destructive" />
          </button>
          
          <div className="flex items-center gap-2">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=prakash" 
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-foreground font-medium">prakash</span>
          </div>
          
          <div className="text-right text-sm">
            <div className="text-foreground font-medium">2025-10-15</div>
            <div className="text-muted-foreground">13:40:37 UTC</div>
          </div>
        </div>
      </div>
    </header>
  );
};
