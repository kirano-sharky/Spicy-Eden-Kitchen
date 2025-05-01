
import { Progress } from "@/components/ui/progress";
import { Flame } from "lucide-react";

const heatLevels = [
  {
    id: 1,
    name: "Mild",
    description: "Subtle warmth that enhances flavor without overwhelming heat.",
    percentage: 20,
    examples: "Poblano Peppers, Anaheim Peppers",
  },
  {
    id: 2,
    name: "Medium",
    description: "A pleasant kick that builds gradually with a comfortable burn.",
    percentage: 40,
    examples: "Jalapeños, Chipotle, Sriracha",
  },
  {
    id: 3,
    name: "Hot",
    description: "Significant heat that's intense but still enjoyable for heat lovers.",
    percentage: 60,
    examples: "Cayenne, Thai Chilis, Tabasco",
  },
  {
    id: 4,
    name: "Extra Hot",
    description: "Serious heat that commands respect and brings tears to your eyes.",
    percentage: 80,
    examples: "Habanero, Scotch Bonnet",
  },
  {
    id: 5,
    name: "Extreme",
    description: "Not for the faint of heart. Only for true spice aficionados.",
    percentage: 100,
    examples: "Ghost Pepper, Carolina Reaper, Trinidad Scorpion",
  },
];

const HeatLevelSection = () => {
  return (
    <section id="levels" className="section-padding bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-flex items-center justify-center mb-4">
            <Flame className="h-6 w-6 text-spicy-red mr-2" />
            <span className="text-spicy-red font-semibold">Know Your Heat</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Spice Level Guide</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From mild tingling to eye-watering intensity, discover your perfect level of heat.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {heatLevels.map((level) => (
            <div key={level.id} className="p-6 bg-white rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                <h3 className="font-bold text-xl">{level.name}</h3>
                <div className="text-sm bg-slate-100 px-3 py-1 rounded-full">
                  Examples: {level.examples}
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{level.description}</p>
              
              <div className="flex items-center gap-2">
                <Progress 
                  value={level.percentage} 
                  className={`h-2 ${
                    level.percentage >= 80 ? "bg-slate-200" :
                    level.percentage >= 60 ? "bg-slate-200" :
                    "bg-slate-200"
                  }`}
                />
                <span className="text-sm font-medium">{level.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeatLevelSection;
