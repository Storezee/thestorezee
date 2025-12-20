import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Plus, Edit, Link as LinkIcon, FileText, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import GenerateReportModal from "@/components/generate-report-modal";
import type { Integration, Report } from "@shared/schema";

export default function Dashboard() {
  const [showGenerateModal, setShowGenerateModal] = useState(false);

  const { data: integrations, isLoading: integrationsLoading } = useQuery<Integration[]>({
    queryKey: ['/api/integrations'],
  });

  const { data: reports, isLoading: reportsLoading } = useQuery<Report[]>({
    queryKey: ['/api/reports'],
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

  const getReportStatusIcon = (status: string) => {
    switch (status) {
      case 'complete': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'generating': return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default: return <FileText className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h2>
        <p className="text-slate-600">Generate and manage your weekly progress reports</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Button
          variant="outline"
          className="h-auto p-6 border-2 border-dashed border-primary hover:border-primary/70 hover:bg-primary/5"
          onClick={() => setShowGenerateModal(true)}
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
              <Plus className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Generate New Report</h3>
            <p className="text-sm text-slate-600">Create a weekly progress report</p>
          </div>
        </Button>

        <Button variant="outline" className="h-auto p-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Edit className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Customize Template</h3>
            <p className="text-sm text-slate-600">Edit your report template</p>
          </div>
        </Button>

        <Button variant="outline" className="h-auto p-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <LinkIcon className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">Add Integration</h3>
            <p className="text-sm text-slate-600">Connect PM tools</p>
          </div>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Connected Integrations */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Connected Integrations</CardTitle>
              <Button variant="ghost" size="sm">
                <Plus className="w-4 h-4 mr-1" />
                Add New
              </Button>
            </CardHeader>
            <CardContent>
              {integrationsLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg animate-pulse">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
                        <div>
                          <div className="h-4 bg-slate-200 rounded w-32 mb-2"></div>
                          <div className="h-3 bg-slate-200 rounded w-24"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {integrations?.map((integration) => (
                    <div key={integration.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-lg">
                          {getIntegrationIcon(integration.type)}
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-900">{integration.name}</h4>
                          <p className="text-sm text-slate-600">
                            {integration.type} • {integration.itemCount} items
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(integration.status)} variant="secondary">
                          <div className="w-2 h-2 rounded-full bg-current mr-1"></div>
                          {integration.status === 'connected' ? 'Connected' : 
                           integration.status === 'syncing' ? 'Syncing' : 'Error'}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          ⋯
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recent Reports */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
            </CardHeader>
            <CardContent>
              {reportsLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start space-x-3 animate-pulse">
                      <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-slate-200 rounded w-24 mb-2"></div>
                        <div className="h-3 bg-slate-200 rounded w-16"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {reports?.slice(0, 3).map((report) => (
                    <div key={report.id} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        {getReportStatusIcon(report.status)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-slate-900 truncate">{report.title}</h4>
                        <p className="text-sm text-slate-600">
                          {report.createdAt ? new Date(report.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          }) : 'N/A'}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge 
                            variant="secondary" 
                            className={
                              report.status === 'complete' ? 'bg-green-100 text-green-700' :
                              report.status === 'generating' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }
                          >
                            {report.status === 'complete' ? 'Complete' :
                             report.status === 'generating' ? 'Generating' : 'Error'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-6">
                    <Button variant="outline" className="w-full">
                      View All Reports
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <GenerateReportModal 
        open={showGenerateModal} 
        onOpenChange={setShowGenerateModal}
      />
    </div>
  );
}
