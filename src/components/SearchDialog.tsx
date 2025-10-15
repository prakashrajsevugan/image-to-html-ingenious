import { useState } from "react";
import { Search, TrendingUp, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const searchResults = [
  { id: 1, title: "Area 1 Water Level", category: "Monitoring", icon: TrendingUp },
  { id: 2, title: "pH Level History", category: "Analytics", icon: Clock },
  { id: 3, title: "Temperature Trends", category: "Reports", icon: TrendingUp },
  { id: 4, title: "Conductivity Analysis", category: "Analytics", icon: Clock },
];

export const SearchDialog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
  const filteredResults = searchResults.filter(result =>
    result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    result.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="relative cursor-pointer">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none" />
          <Input 
            placeholder="Search..." 
            className="pl-10 w-48 h-9 bg-input border-border text-sm cursor-pointer"
            readOnly
          />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-card border-border max-w-2xl p-0">
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search areas, metrics, reports..."
              className="pl-10 w-full bg-input border-border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
        </div>
        
        <ScrollArea className="max-h-96">
          <div className="p-4">
            {searchQuery === "" ? (
              <div className="text-center text-muted-foreground py-8">
                <Search className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Type to search areas, metrics, and reports</p>
              </div>
            ) : filteredResults.length > 0 ? (
              <div className="space-y-2">
                {filteredResults.map((result) => {
                  const Icon = result.icon;
                  return (
                    <div
                      key={result.id}
                      className="p-3 rounded-lg hover:bg-muted/20 cursor-pointer transition-all border border-transparent hover:border-primary/30"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{result.title}</h4>
                          <p className="text-sm text-muted-foreground">{result.category}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-8">
                <p>No results found for "{searchQuery}"</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
