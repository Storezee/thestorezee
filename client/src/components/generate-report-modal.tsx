import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { Integration, Template } from "@shared/schema";

interface GenerateReportModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function GenerateReportModal({ open, onOpenChange }: GenerateReportModalProps) {
  const [period, setPeriod] = useState("this-week");
  const [templateId, setTemplateId] = useState("");
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([]);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: integrations } = useQuery<Integration[]>({
    queryKey: ['/api/integrations'],
  });

  const { data: templates } = useQuery<Template[]>({
    queryKey: ['/api/templates'],
  });

  const generateReportMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await apiRequest('POST', '/api/reports/generate', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Report Generation Started",
        description: "Your report is being generated. You'll be notified when it's ready.",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/reports'] });
      onOpenChange(false);
      resetForm();
    },
    onError: () => {
      toast({
        title: "Generation Failed",
        description: "Failed to start report generation. Please try again.",
        variant: "destructive",
      });
    },
  });

  const resetForm = () => {
    setPeriod("this-week");
    setTemplateId("");
    setSelectedIntegrations([]);
  };

  const handleSubmit = () => {
    const currentDate = new Date();
    const currentWeek = Math.ceil(
      ((currentDate.getTime() - new Date(currentDate.getFullYear(), 0, 1).getTime()) / 86400000 + 1) / 7
    );

    const data = {
      templateId: templateId || templates?.[0]?.id,
      weekNumber: period === "this-week" ? currentWeek : currentWeek - 1,
      year: currentDate.getFullYear(),
      integrationIds: selectedIntegrations.length > 0 ? selectedIntegrations : undefined,
    };

    generateReportMutation.mutate(data);
  };

  const handleIntegrationToggle = (integrationId: string, checked: boolean) => {
    if (checked) {
      setSelectedIntegrations(prev => [...prev, integrationId]);
    } else {
      setSelectedIntegrations(prev => prev.filter(id => id !== integrationId));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Generate New Report</DialogTitle>
          <DialogDescription>
            Create a weekly progress report from your connected integrations.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="period">Report Period</Label>
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="last-week">Last Week</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="template">Template</Label>
            <Select value={templateId} onValueChange={setTemplateId}>
              <SelectTrigger>
                <SelectValue placeholder="Select template" />
              </SelectTrigger>
              <SelectContent>
                {templates?.map((template) => (
                  <SelectItem key={template.id} value={template.id}>
                    {template.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Include Data From</Label>
            <div className="space-y-2 mt-2">
              {integrations?.filter(i => i.status === 'connected').map((integration) => (
                <div key={integration.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={integration.id}
                    checked={selectedIntegrations.includes(integration.id)}
                    onCheckedChange={(checked) => 
                      handleIntegrationToggle(integration.id, checked as boolean)
                    }
                  />
                  <Label htmlFor={integration.id} className="text-sm">
                    {integration.name} ({integration.type})
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={generateReportMutation.isPending}
          >
            {generateReportMutation.isPending ? "Generating..." : "Generate Report"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
