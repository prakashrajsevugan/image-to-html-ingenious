import { FileText, Download, Calendar } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface ReportDialogProps {
  areaData: {
    level: number;
    ph: string;
    temp: string;
    turbidity: string;
    conductivity: string;
  };
  activeArea: string;
}

export const ReportDialog = ({ areaData, activeArea }: ReportDialogProps) => {
  const handleDownload = () => {
    toast({
      title: "Report Generated",
      description: `Full water quality report for Area ${activeArea} has been downloaded.`,
    });
  };
  
  const handleEmail = () => {
    toast({
      title: "Report Sent",
      description: "Report has been sent to your registered email address.",
    });
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-glow-primary">
          Generate Full Report
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-card border-border max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Water Quality Report - Area {activeArea}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Generated on: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-card/50 border border-border">
              <h4 className="text-sm text-muted-foreground mb-1">Water Level</h4>
              <p className="text-2xl font-bold text-foreground">{areaData.level}%</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border">
              <h4 className="text-sm text-muted-foreground mb-1">pH Level</h4>
              <p className="text-2xl font-bold text-foreground">{areaData.ph}</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border">
              <h4 className="text-sm text-muted-foreground mb-1">Temperature</h4>
              <p className="text-2xl font-bold text-foreground">{areaData.temp}</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border">
              <h4 className="text-sm text-muted-foreground mb-1">Turbidity</h4>
              <p className="text-2xl font-bold text-foreground">{areaData.turbidity}</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border col-span-2">
              <h4 className="text-sm text-muted-foreground mb-1">Conductivity</h4>
              <p className="text-2xl font-bold text-foreground">{areaData.conductivity}</p>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-success/10 border border-success">
            <h4 className="font-semibold text-success mb-2">Quality Assessment</h4>
            <p className="text-sm text-foreground">
              All parameters are within acceptable ranges. Water quality is excellent and safe for consumption.
              No immediate action required.
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button 
              onClick={handleDownload}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button 
              onClick={handleEmail}
              variant="outline"
              className="flex-1"
            >
              Email Report
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
