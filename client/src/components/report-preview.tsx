import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Send, ChartLine, CheckCircle, AlertTriangle } from "lucide-react";

interface ReportPreviewProps {
  reportData?: any;
}

export default function ReportPreview({ reportData }: ReportPreviewProps) {
  const data = reportData || {
    weekNumber: 42,
    year: 2024,
    completed: 12,
    inProgress: 5,
    overdue: 2,
    achievements: [
      "Venue booking confirmed for main event",
      "Marketing campaign launched successfully",
      "Speaker confirmations received (8/10)"
    ],
    issues: [
      { 
        title: "Catering vendor delay", 
        description: "Menu finalization behind schedule by 3 days", 
        severity: "warning" 
      }
    ]
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Report Preview</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-1" />
            Export PDF
          </Button>
          <Button size="sm">
            <Send className="w-4 h-4 mr-1" />
            Send Report
          </Button>
        </div>
      </CardHeader>
      <CardContent className="bg-slate-50">
        {/* Mock PDF Preview */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <div className="space-y-6">
            {/* Report Header */}
            <div className="text-center border-b border-slate-200 pb-4">
              <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-3 flex items-center justify-center">
                <ChartLine className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900">Weekly Progress Report</h1>
              <p className="text-slate-600">Week {data.weekNumber} • October {data.year}</p>
            </div>

            {/* Progress Overview */}
            <div>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">Progress Overview</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{data.completed}</div>
                  <div className="text-sm text-slate-600">Completed Tasks</div>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{data.inProgress}</div>
                  <div className="text-sm text-slate-600">In Progress</div>
                </div>
                <div className="text-center p-3 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{data.overdue}</div>
                  <div className="text-sm text-slate-600">Overdue</div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h2 className="text-lg font-semibold text-slate-900 mb-3">Key Achievements</h2>
              <ul className="space-y-2">
                {data.achievements?.map((achievement: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Issues & Risks */}
            {data.issues?.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-3">Issues & Risks</h2>
                <div className="space-y-2">
                  {data.issues.map((issue: any, index: number) => (
                    <div key={index} className="flex items-start space-x-2 p-3 bg-yellow-50 rounded-lg">
                      <AlertTriangle className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-slate-900">{issue.title}</p>
                        <p className="text-sm text-slate-600">{issue.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
