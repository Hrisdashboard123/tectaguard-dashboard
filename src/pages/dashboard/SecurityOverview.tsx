import { motion } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  Server,
  Code,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  XCircle,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const securityMetrics = [
  {
    title: "Security Score",
    value: "87",
    suffix: "/100",
    change: "+5",
    trend: "up",
    icon: Shield,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    title: "Active Threats",
    value: "3",
    suffix: "",
    change: "-2",
    trend: "down",
    icon: AlertTriangle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    title: "Infrastructure Health",
    value: "98",
    suffix: "%",
    change: "+1.2",
    trend: "up",
    icon: Server,
    color: "text-info",
    bgColor: "bg-info/10",
  },
  {
    title: "Vulnerabilities",
    value: "12",
    suffix: "",
    change: "-8",
    trend: "down",
    icon: Code,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
];

const recentScans = [
  {
    name: "frontend-app",
    status: "completed",
    vulnerabilities: 2,
    severity: "medium",
    time: "5 min ago",
  },
  {
    name: "api-gateway",
    status: "completed",
    vulnerabilities: 0,
    severity: "low",
    time: "15 min ago",
  },
  {
    name: "auth-service",
    status: "scanning",
    vulnerabilities: null,
    severity: null,
    time: "In progress",
  },
  {
    name: "database-cluster",
    status: "completed",
    vulnerabilities: 5,
    severity: "high",
    time: "1 hour ago",
  },
];

const threatTimeline = [
  {
    type: "blocked",
    message: "SQL injection attempt blocked",
    source: "104.28.12.45",
    time: "2 min ago",
  },
  {
    type: "warning",
    message: "Unusual login pattern detected",
    source: "user@company.com",
    time: "12 min ago",
  },
  {
    type: "resolved",
    message: "DDoS mitigation completed",
    source: "Multiple sources",
    time: "45 min ago",
  },
];

const SecurityOverview = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* Metrics Grid */}
      <motion.div
        variants={item}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {securityMetrics.map((metric, index) => (
          <Card
            key={index}
            className="glass-card border-border/50 hover:border-primary/30 transition-colors"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div
                  className={`w-12 h-12 rounded-xl ${metric.bgColor} flex items-center justify-center`}
                >
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm ${
                    metric.trend === "up" ? "text-success" : "text-destructive"
                  }`}
                >
                  {metric.trend === "up" ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>{metric.change}</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-heading font-bold text-foreground">
                    {metric.value}
                  </span>
                  <span className="text-lg text-muted-foreground">
                    {metric.suffix}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {metric.title}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Security Score Card */}
        <motion.div variants={item} className="lg:col-span-2">
          <Card className="glass-card border-border/50 h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-heading">
                AI Security Analysis
              </CardTitle>
              <Button variant="gold-outline" size="sm">
                Run Full Scan
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Overall Score */}
              <div className="flex items-center gap-6">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-muted"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 * (1 - 0.87)}
                      strokeLinecap="round"
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-2xl font-heading font-bold text-foreground">
                        87
                      </span>
                      <p className="text-xs text-muted-foreground">Score</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">
                        Code Security
                      </span>
                      <span className="text-foreground font-medium">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">
                        Infrastructure
                      </span>
                      <span className="text-foreground font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Compliance</span>
                      <span className="text-foreground font-medium">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </div>
              </div>

              {/* Recent Scans */}
              <div>
                <h4 className="text-sm font-medium text-foreground mb-3">
                  Recent Scans
                </h4>
                <div className="space-y-2">
                  {recentScans.map((scan, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {scan.status === "completed" ? (
                          scan.vulnerabilities === 0 ? (
                            <CheckCircle className="w-5 h-5 text-success" />
                          ) : (
                            <AlertTriangle
                              className={`w-5 h-5 ${
                                scan.severity === "high"
                                  ? "text-destructive"
                                  : "text-warning"
                              }`}
                            />
                          )
                        ) : (
                          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        )}
                        <span className="font-medium text-foreground">
                          {scan.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        {scan.vulnerabilities !== null && (
                          <span
                            className={`text-sm ${
                              scan.vulnerabilities === 0
                                ? "text-success"
                                : scan.severity === "high"
                                  ? "text-destructive"
                                  : "text-warning"
                            }`}
                          >
                            {scan.vulnerabilities} issues
                          </span>
                        )}
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {scan.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Threat Timeline */}
        <motion.div variants={item}>
          <Card className="glass-card border-border/50 h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-heading">
                Live Threats
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-primary">
                View All
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {threatTimeline.map((threat, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="relative">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          threat.type === "blocked"
                            ? "bg-destructive/20"
                            : threat.type === "warning"
                              ? "bg-warning/20"
                              : "bg-success/20"
                        }`}
                      >
                        {threat.type === "blocked" ? (
                          <XCircle className="w-5 h-5 text-destructive" />
                        ) : threat.type === "warning" ? (
                          <AlertTriangle className="w-5 h-5 text-warning" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-success" />
                        )}
                      </div>
                      {index < threatTimeline.length - 1 && (
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-8 bg-border" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="text-sm font-medium text-foreground">
                        {threat.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {threat.source}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {threat.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div variants={item}>
        <Card className="glass-card border-border/50">
          <CardContent className="py-4">
            <div className="flex flex-wrap gap-3">
              <Button variant="gold" size="lg">
                <Shield className="w-5 h-5 mr-2" />
                Start Security Scan
              </Button>
              <Button variant="outline" size="lg">
                <Code className="w-5 h-5 mr-2" />
                Connect Repository
              </Button>
              <Button variant="outline" size="lg">
                <Server className="w-5 h-5 mr-2" />
                Add Infrastructure
              </Button>
              <Button variant="subtle" size="lg">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Configure Alerts
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default SecurityOverview;
