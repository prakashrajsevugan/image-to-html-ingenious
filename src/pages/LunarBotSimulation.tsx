import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const LunarBotSimulation = () => {
  const repositories = [
    {
      name: "Space ROS",
      description: "ROS 2 packages for space robotics applications including lunar rover simulations",
      url: "https://github.com/space-ros",
      topics: ["ROS2", "Space Robotics", "Gazebo"]
    },
    {
      name: "NASA's VIPER Rover Simulation",
      description: "Simulation environment for NASA's Volatiles Investigating Polar Exploration Rover",
      url: "https://github.com/nasa/viper-rover-simulation",
      topics: ["Lunar Rover", "Ignition Gazebo", "NASA"]
    },
    {
      name: "Lunar Robotics Toolkit",
      description: "Tools and simulations for lunar robot development using Ignition Gazebo",
      url: "https://github.com/lunar-robotics/lunar-toolkit",
      topics: ["Lunar Simulation", "Robotics", "Gazebo"]
    },
    {
      name: "OpenRover Lunar",
      description: "Open-source lunar rover platform with Ignition Gazebo support",
      url: "https://github.com/openrover/lunar-simulation",
      topics: ["Open Source", "Rover", "Simulation"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-main">
      <header className="border-b border-border bg-gradient-card backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Lunar Bot Simulation Resources</h1>
            <a href="/" className="text-primary hover:text-primary/80 transition-colors">
              Back to Dashboard
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <Card className="bg-gradient-card backdrop-blur-md border-border p-8 mb-6">
          <h2 className="text-3xl font-bold text-foreground mb-4">About Ignition Gazebo for Lunar Bot Simulation</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            Ignition Gazebo (now known as Gazebo) is a powerful open-source robotics simulator that provides 
            realistic environments for testing and developing robotic systems. It's particularly well-suited 
            for lunar bot simulations due to its advanced physics engine, sensor simulation capabilities, and 
            support for complex terrains.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Below you'll find repositories and projects related to lunar bot simulation using Ignition Gazebo 
            and related technologies. These resources provide frameworks, models, and tools for developing and 
            testing lunar rovers and other space robotics applications.
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repositories.map((repo, index) => (
            <Card key={index} className="bg-gradient-card backdrop-blur-md border-border p-6 hover:border-primary/50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-foreground">{repo.name}</h3>
                <a 
                  href={repo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label={`Visit ${repo.name} repository`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {repo.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {repo.topics.map((topic, topicIndex) => (
                  <span 
                    key={topicIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-card backdrop-blur-md border-border p-8 mt-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Getting Started with Lunar Simulation</h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">1. Install Gazebo</h3>
              <p className="leading-relaxed">
                Download and install the latest version of Gazebo from the official website. 
                Ensure your system meets the hardware requirements for physics simulation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">2. Choose a Framework</h3>
              <p className="leading-relaxed">
                Select a simulation framework from the repositories listed above based on your 
                project requirements and preferred programming language (ROS 2, Python, C++).
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">3. Model Your Environment</h3>
              <p className="leading-relaxed">
                Create or import lunar terrain models, configure lighting conditions to simulate 
                lunar surface characteristics, and add necessary sensors to your robot model.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">4. Test and Iterate</h3>
              <p className="leading-relaxed">
                Run simulations to test navigation algorithms, sensor performance, and robot 
                behavior in various lunar scenarios before deploying to physical hardware.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default LunarBotSimulation;
