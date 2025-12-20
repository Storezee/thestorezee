import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, Plus, FileText, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import GenerateReportModal from "@/components/generate-report-modal";
import type { Report } from "@shared/schema";

export default function Reports() {
  const [showGenerateModal, setShowGenerateModal] = useState(false);

  const { data: reports, isLoading } = useQuery<Report[]>({
    queryKey: ['/api/reports'],
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'generating': return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default: return <FileText className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete': return 'bg-green-100 text-green-700';
      case 'generating': return 'bg-yellow-100 text-yellow-700';
      case 'error': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Reports</h2>
            <p className="text-slate-600">View and manage your generated reports</p>
          </div>
          <Button onClick={() => setShowGenerateModal(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="animate-pulse">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-slate-200 rounded w-24 mb-2"></div>
                      <div className="h-3 bg-slate-200 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-200 rounded w-full"></div>
                    <div className="h-8 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          reports?.map((report) => (
            <Card key={report.id}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {getStatusIcon(report.status)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 truncate">{report.title}</h3>
                    <p className="text-sm text-slate-600">
                      {report.createdAt ? new Date(report.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      }) : 'N/A'}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Status</span>
                    <Badge className={getStatusColor(report.status)} variant="secondary">
                      {report.status === 'complete' ? 'Complete' :
                       report.status === 'generating' ? 'Generating' : 'Error'}
                    </Badge>
                  </div>

                  {report.weekNumber && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Week</span>
                      <span className="text-sm text-slate-900">
                        Week {report.weekNumber}, {report.year}
                      </span>
                    </div>
                  )}

                  {report.data && (
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">
                          {report.data.completed || 0}
                        </div>
                        <div className="text-xs text-slate-600">Done</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-yellow-600">
                          {report.data.inProgress || 0}
                        </div>
                        <div className="text-xs text-slate-600">Progress</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-red-600">
                          {report.data.overdue || 0}
                        </div>
                        <div className="text-xs text-slate-600">Overdue</div>
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    {report.status === 'complete' && (
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <GenerateReportModal 
        open={showGenerateModal} 
        onOpenChange={setShowGenerateModal}
      />
    </div>
  );
}
