import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import type { Template } from "@shared/schema";

interface PropertyPanelProps {
  selectedTemplate: Template | null;
}

export default function PropertyPanel({ selectedTemplate }: PropertyPanelProps) {
  return (
    <div className="lg:col-span-1">
      <h4 className="font-semibold text-slate-900 mb-4">Properties</h4>
      <div className="space-y-4">
        <div>
          <Label htmlFor="template-name">Template Name</Label>
          <Input 
            id="template-name"
            defaultValue="Default Weekly Report"
            className="mt-1"
          />
        </div>

        <div>
          <Label>Brand Colors</Label>
          <div className="flex space-x-2 mt-1">
            <div className="w-8 h-8 bg-primary rounded-md border border-slate-300 cursor-pointer"></div>
            <div className="w-8 h-8 bg-secondary rounded-md border border-slate-300 cursor-pointer"></div>
            <div className="w-8 h-8 bg-green-500 rounded-md border border-slate-300 cursor-pointer"></div>
          </div>
        </div>

        <div>
          <Label>Logo</Label>
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center cursor-pointer hover:border-primary transition-colors mt-1">
            <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
            <p className="text-sm text-slate-600">Upload logo</p>
          </div>
        </div>

        <div>
          <Label htmlFor="font-size">Font Size</Label>
          <Select defaultValue="medium">
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="large">Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
