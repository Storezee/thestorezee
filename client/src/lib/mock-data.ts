import type { Integration, Template, Report, Project } from "@shared/schema";

export const mockIntegrations: Integration[] = [
  {
    id: "1",
    name: "Event Planning Board",
    type: "trello",
    status: "connected",
    itemCount: 23,
    lastSync: new Date(),
    config: { boardId: "board123" }
  },
  {
    id: "2", 
    name: "Marketing Tasks",
    type: "asana",
    status: "connected",
    itemCount: 15,
    lastSync: new Date(),
    config: { projectId: "project456" }
  },
  {
    id: "3",
    name: "Event Timeline", 
    type: "monday",
    status: "syncing",
    itemCount: 8,
    lastSync: new Date(Date.now() - 300000),
    config: { boardId: "board789" }
  }
];

export const mockTemplates: Template[] = [
  {
    id: "1",
    name: "Default Weekly Report",
    components: [
      { type: "header", config: { title: "Weekly Progress Report" } },
      { type: "progress-chart", config: {} },
      { type: "task-list", config: {} },
      { type: "issues", config: {} }
    ],
    brandConfig: {
      primaryColor: "#3B82F6",
      secondaryColor: "#8B5CF6",
      fontSize: "medium",
      logo: null
    },
    isDefault: true,
    createdAt: new Date()
  }
];

export const mockReports: Report[] = [
  {
    id: "1",
    title: "Week 42 Progress",
    templateId: "1",
    status: "complete",
    data: {
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
        { title: "Catering vendor delay", description: "Menu finalization behind schedule by 3 days", severity: "warning" }
      ]
    },
    pdfPath: "/reports/week-42-2024.pdf",
    weekNumber: 42,
    year: 2024,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  },
  {
    id: "2",
    title: "Week 41 Progress",
    templateId: "1", 
    status: "complete",
    data: {
      weekNumber: 41,
      year: 2024,
      completed: 8,
      inProgress: 7,
      overdue: 1
    },
    pdfPath: "/reports/week-41-2024.pdf",
    weekNumber: 41,
    year: 2024,
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
  },
  {
    id: "3",
    title: "Week 43 Progress",
    templateId: "1",
    status: "generating", 
    data: null,
    pdfPath: null,
    weekNumber: 43,
    year: 2024,
    createdAt: new Date()
  }
];
