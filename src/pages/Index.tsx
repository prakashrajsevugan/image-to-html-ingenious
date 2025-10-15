import { useState } from "react";
import { Header } from "@/components/Header";
import { WaterTank } from "@/components/WaterTank";
import { MetricCard } from "@/components/MetricCard";
import { QualityGauge } from "@/components/QualityGauge";
import { PowerToggle } from "@/components/PowerToggle";
import { ReportDialog } from "@/components/ReportDialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [activeArea, setActiveArea] = useState("1");
  
  const areaData = {
    "1": { level: 75, ph: "7.2", temp: "24°C", turbidity: "2.3 NTU", conductivity: "450 µS/cm" },
    "2": { level: 82, ph: "7.4", temp: "23°C", turbidity: "2.1 NTU", conductivity: "445 µS/cm" },
    "3": { level: 68, ph: "7.1", temp: "25°C", turbidity: "2.5 NTU", conductivity: "455 µS/cm" },
    "4": { level: 91, ph: "7.3", temp: "24°C", turbidity: "2.0 NTU", conductivity: "448 µS/cm" },
  };
  
  const currentData = areaData[activeArea as keyof typeof areaData];
  
  return (
    <div className="min-h-screen bg-gradient-main">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Water Tank */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card backdrop-blur-md border-border p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-foreground tracking-wide">
                AREA {activeArea}
              </h2>
              
              <div className="flex justify-center mb-8">
                <WaterTank level={currentData.level} />
              </div>
              
              <Tabs value={activeArea} onValueChange={setActiveArea} className="w-full">
                <TabsList className="grid grid-cols-4 w-full max-w-md mx-auto mb-8 bg-secondary">
                  <TabsTrigger value="1" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    AREA 1
                  </TabsTrigger>
                  <TabsTrigger value="2" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    AREA 2
                  </TabsTrigger>
                  <TabsTrigger value="3" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    AREA 3
                  </TabsTrigger>
                  <TabsTrigger value="4" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    AREA 4
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value={activeArea} className="mt-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <MetricCard label="pH Level" value={currentData.ph} />
                    <MetricCard label="Temperature" value={currentData.temp} />
                    <MetricCard label="Turbidity" value={currentData.turbidity} />
                    <MetricCard label="Conductivity" value={currentData.conductivity} />
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
          
          {/* Right Section - Quality Status */}
          <div className="space-y-6">
            <Card className="bg-gradient-card backdrop-blur-md border-border p-6">
              <div className="flex justify-center mb-4">
                <QualityGauge percentage={92} status="Excellent" />
              </div>
            </Card>
            
            <Card className="bg-gradient-card backdrop-blur-md border-border p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-success mt-1 animate-pulse shadow-glow-success"></div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Water Quality Status
                  </h3>
                  <p className="text-sm text-success font-semibold mb-3">● Excellent</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All parameters within acceptable range. Water quality is optimal for consumption.
                  </p>
                </div>
              </div>
              
              <ReportDialog areaData={currentData} activeArea={activeArea} />
            </Card>
          </div>
        </div>
      </main>
      
      <PowerToggle />
    </div>
  );
};

export default Index;
