import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, RefreshCw, MoreHorizontal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { Integration } from "@shared/schema";

export default function Integrations() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: integrations, isLoading } = useQuery<Integration[]>({
    queryKey: ['/api/integrations'],
  });

  const syncMutation = useMutation({
    mutationFn: async (integrationId: string) => {
      const response = await apiRequest('POST', `/api/integrations/${integrationId}/sync`);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Sync Started",
        description: "Integration sync has been initiated.",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/integrations'] });
    },
    onError: () => {
      toast({
        title: "Sync Failed",
        description: "Failed to sync integration. Please try again.",
        variant: "destructive",
      });
    },
  });

  const getIntegrationIcon = (type: string) => {
    switch (type) {
      case 'trello': return '🔷';
      case 'asana': return '🔶';
      case 'monday': return '🟠';
      default: return '📊';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-green-100 text-green-700';
      case 'syncing': return 'bg-yellow-100 text-yellow-700';
      case 'error': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Integrations</h2>
            <p className="text-slate-600">Connect and manage your project management tools</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Integration
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="animate-pulse">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-lg"></div>
                    <div>
                      <div className="h-4 bg-slate-200 rounded w-24 mb-2"></div>
                      <div className="h-3 bg-slate-200 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-200 rounded w-full"></div>
                    <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          integrations?.map((integration) => (
            <Card key={integration.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-xl">
                      {getIntegrationIcon(integration.type)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{integration.name}</h3>
                      <p className="text-sm text-slate-600 capitalize">
                        {integration.type} • {integration.itemCount} items
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Status</span>
                    <Badge className={getStatusColor(integration.status)} variant="secondary">
                      <div className="w-2 h-2 rounded-full bg-current mr-1"></div>
                      {integration.status === 'connected' ? 'Connected' : 
                       integration.status === 'syncing' ? 'Syncing' : 'Error'}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Last Sync</span>
                    <span className="text-sm text-slate-900">
                      {integration.lastSync ? 
                        new Date(integration.lastSync).toLocaleDateString() : 
                        'Never'
                      }
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => syncMutation.mutate(integration.id)}
                      disabled={syncMutation.isPending || integration.status === 'syncing'}
                    >
                      <RefreshCw className={`w-4 h-4 mr-2 ${
                        syncMutation.isPending || integration.status === 'syncing' ? 'animate-spin' : ''
                      }`} />
                      {integration.status === 'syncing' ? 'Syncing...' : 'Sync Now'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
