import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ComponentPalette from "@/components/template-builder/component-palette";
import TemplateCanvas from "@/components/template-builder/template-canvas";
import PropertyPanel from "@/components/template-builder/property-panel";
import type { Template } from "@shared/schema";

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const { data: templates, isLoading } = useQuery<Template[]>({
    queryKey: ['/api/templates'],
  });

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Template Builder</h2>
        <p className="text-slate-600">Create and customize your report templates</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Template Builder</CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              Preview
            </Button>
            <Button size="sm">
              Save Template
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <ComponentPalette />
            <TemplateCanvas selectedTemplate={selectedTemplate} />
            <PropertyPanel selectedTemplate={selectedTemplate} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
