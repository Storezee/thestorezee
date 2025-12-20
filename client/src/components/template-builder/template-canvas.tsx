import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading, PieChart, Plus, Edit, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Template } from "@shared/schema";

interface TemplateCanvasProps {
  selectedTemplate: Template | null;
}

export default function TemplateCanvas({ selectedTemplate }: TemplateCanvasProps) {
  return (
    <div className="lg:col-span-2">
      <h4 className="font-semibold text-slate-900 mb-4">Template Canvas</h4>
      <div className="min-h-96 bg-white border-2 border-dashed border-slate-300 rounded-lg p-4">
        <div className="space-y-4">
          {/* Sample header component */}
          <div className="p-4 border border-slate-200 rounded-lg bg-slate-50 relative group">
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 mr-1">
                <Edit className="w-3 h-3" />
              </Button>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-red-600 hover:text-red-700">
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Heading className="w-4 h-4 text-primary" />
              <span className="font-medium text-slate-900">Report Header</span>
            </div>
            <p className="text-sm text-slate-600">Weekly Progress Report - Week {"{week_number}"}</p>
          </div>

          {/* Sample progress chart component */}
          <div className="p-4 border border-slate-200 rounded-lg bg-slate-50 relative group">
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 mr-1">
                <Edit className="w-3 h-3" />
              </Button>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-red-600 hover:text-red-700">
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <PieChart className="w-4 h-4 text-secondary" />
              <span className="font-medium text-slate-900">Progress Overview</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="text-center p-2 bg-white rounded">
                <div className="text-lg font-bold text-green-600">12</div>
                <div className="text-xs text-slate-600">Completed</div>
              </div>
              <div className="text-center p-2 bg-white rounded">
                <div className="text-lg font-bold text-yellow-600">5</div>
                <div className="text-xs text-slate-600">In Progress</div>
              </div>
              <div className="text-center p-2 bg-white rounded">
                <div className="text-lg font-bold text-red-600">2</div>
                <div className="text-xs text-slate-600">Overdue</div>
              </div>
            </div>
          </div>

          {/* Drop zone */}
          <div className="border-2 border-dashed border-primary/30 bg-primary/5 rounded-lg p-8 text-center">
            <Plus className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-primary font-medium">Drop components here</p>
            <p className="text-sm text-slate-600 mt-1">Drag and drop from the component palette</p>
          </div>
        </div>
      </div>
    </div>
  );
}
