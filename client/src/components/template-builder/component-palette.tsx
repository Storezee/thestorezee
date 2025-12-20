import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading, PieChart, List, Clock, Users, AlertTriangle } from "lucide-react";

const components = [
  { id: "header", name: "Header", icon: Heading },
  { id: "progress-chart", name: "Progress Chart", icon: PieChart },
  { id: "task-list", name: "Task List", icon: List },
  { id: "timeline", name: "Timeline", icon: Clock },
  { id: "team-summary", name: "Team Summary", icon: Users },
  { id: "issues", name: "Issues", icon: AlertTriangle },
];

export default function ComponentPalette() {
  return (
    <div className="lg:col-span-1">
      <h4 className="font-semibold text-slate-900 mb-4">Components</h4>
      <div className="space-y-2">
        {components.map((component) => (
          <div
            key={component.id}
            className="p-3 bg-slate-50 border border-slate-200 rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors"
            draggable
          >
            <div className="flex items-center space-x-2">
              <component.icon className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-900">{component.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
