import { motion } from "framer-motion";
import {
  Activity,
  User,
  Search,
  Filter,
  Clock,
  Shield,
  Code,
  Settings,
  LogIn,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const activityLogs = [
  {
    id: 1,
    user: "john.doe@company.com",
    action: "Security Scan Initiated",
    target: "frontend-app repository",
    type: "scan",
    time: "2 minutes ago",
    ip: "192.168.1.45",
  },
  {
    id: 2,
    user: "AI System",
    action: "Threat Blocked",
    target: "SQL injection from 45.33.12.89",
    type: "security",
    time: "5 minutes ago",
    ip: "System",
  },
  {
    id: 3,
    user: "sarah.smith@company.com",
    action: "User Login",
    target: "Dashboard access",
    type: "auth",
    time: "12 minutes ago",
    ip: "10.0.0.23",
  },
  {
    id: 4,
    user: "AI System",
    action: "Vulnerability Fixed",
    target: "CVE-2024-1234 in api-gateway",
    type: "fix",
    time: "25 minutes ago",
    ip: "System",
  },
  {
    id: 5,
    user: "mike.wilson@company.com",
    action: "Settings Updated",
    target: "Notification preferences",
    type: "config",
    time: "1 hour ago",
    ip: "192.168.1.78",
  },
  {
    id: 6,
    user: "AI System",
    action: "Risk Alert Generated",
    target: "Unusual access pattern detected",
    type: "alert",
    time: "2 hours ago",
    ip: "System",
  },
];

const ActivityLogs = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const getActionIcon = (type: string) => {
    switch (type) {
      case "scan":
        return <Code className="w-4 h-4 text-primary" />;
      case "security":
        return <Shield className="w-4 h-4 text-success" />;
      case "auth":
        return <LogIn className="w-4 h-4 text-info" />;
      case "fix":
        return <Shield className="w-4 h-4 text-success" />;
      case "config":
        return <Settings className="w-4 h-4 text-muted-foreground" />;
      case "alert":
        return <AlertTriangle className="w-4 h-4 text-warning" />;
      default:
        return <Activity className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "scan":
        return "bg-primary/20 text-primary";
      case "security":
        return "bg-success/20 text-success";
      case "auth":
        return "bg-info/20 text-info";
      case "fix":
        return "bg-success/20 text-success";
      case "config":
        return "bg-muted text-muted-foreground";
      case "alert":
        return "bg-warning/20 text-warning";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* Stats */}
      <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-card border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-heading font-bold text-foreground">
                  1,247
                </p>
                <p className="text-sm text-muted-foreground">Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-heading font-bold text-foreground">
                  847
                </p>
                <p className="text-sm text-muted-foreground">Security Events</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                <User className="w-5 h-5 text-info" />
              </div>
              <div>
                <p className="text-2xl font-heading font-bold text-foreground">
                  12
                </p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-heading font-bold text-foreground">
                  23
                </p>
                <p className="text-sm text-muted-foreground">Alerts</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Search and Filters */}
      <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input placeholder="Search activity logs..." className="pl-12" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">Export</Button>
        </div>
      </motion.div>

      {/* Activity Timeline */}
      <motion.div variants={item}>
        <Card className="glass-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-heading">Activity Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activityLogs.map((log, index) => (
                <div key={log.id} className="flex gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      {getActionIcon(log.type)}
                    </div>
                    {index < activityLogs.length - 1 && (
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-8 bg-border" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-foreground">
                            {log.action}
                          </span>
                          <Badge className={getTypeBadge(log.type)}>
                            {log.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {log.target}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {log.user}
                          </span>
                          <span>IP: {log.ip}</span>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground flex items-center gap-1 whitespace-nowrap">
                        <Clock className="w-3 h-3" />
                        {log.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline">Load More</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ActivityLogs;
