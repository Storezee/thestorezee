import { Home, Plug, FileText, BarChart3, Palette, Settings } from "lucide-react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Integrations", href: "/integrations", icon: Plug },
  { name: "Templates", href: "/templates", icon: FileText },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Branding", href: "/branding", icon: Palette },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const [location] = useLocation();

  return (
    <aside className="w-64 bg-white shadow-sm border-r border-slate-200 hidden lg:block">
      <div className="p-6">
        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <div className={cn(
                  "flex items-center space-x-3 rounded-lg px-3 py-2 transition-colors font-medium",
                  isActive 
                    ? "text-primary bg-primary/10" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                )}>
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
