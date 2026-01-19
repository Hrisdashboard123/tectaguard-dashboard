import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  HardDrive,
  Cpu,
  Activity,
  CheckCircle,
  AlertTriangle,
  XCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const infraItems = [
  {
    name: "Production Cluster",
    type: "Kubernetes",
    status: "healthy",
    region: "US-East",
    cpu: 45,
    memory: 62,
    nodes: 12,
    icon: Cloud,
  },
  {
    name: "Database Primary",
    type: "PostgreSQL",
    status: "healthy",
    region: "US-East",
    cpu: 28,
    memory: 74,
    connections: 156,
    icon: HardDrive,
  },
  {
    name: "API Gateway",
    type: "Kong",
    status: "warning",
    region: "US-East",
    cpu: 82,
    memory: 55,
    requests: "12.5k/min",
    icon: Server,
  },
  {
    name: "Cache Layer",
    type: "Redis",
    status: "healthy",
    region: "US-East",
    cpu: 15,
    memory: 45,
    hitRate: "98.5%",
    icon: Cpu,
  },
];

const riskIndicators = [
  { label: "Unpatched Systems", value: 2, severity: "high" },
  { label: "Open Ports", value: 5, severity: "medium" },
  { label: "SSL Expiring Soon", value: 1, severity: "low" },
  { label: "Outdated Configs", value: 3, severity: "medium" },
];

const InfrastructureMonitoring = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "healthy":
        return <CheckCircle className="w-5 h-5 text-success" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-warning" />;
      case "critical":
        return <XCircle className="w-5 h-5 text-destructive" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* Overview Stats */}
      <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-card border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-heading font-bold text-foreground">
                  24
                </p>
                <p className="text-sm text-muted-foreground">Healthy</p>
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
                  3
                </p>
                <p className="text-sm text-muted-foreground">Warnings</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-heading font-bold text-foreground">
                  0
                </p>
                <p className="text-sm text-muted-foreground">Critical</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-heading font-bold text-foreground">
                  99.9%
                </p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Infrastructure Grid */}
      <motion.div variants={item}>
        <Card className="glass-card border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-heading">
              Infrastructure Status
            </CardTitle>
            <Button variant="gold">Add Resource</Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {infraItems.map((infra, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <infra.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">
                          {infra.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {infra.type} • {infra.region}
                        </p>
                      </div>
                    </div>
                    {getStatusIcon(infra.status)}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">CPU</span>
                        <span
                          className={`font-medium ${infra.cpu > 80 ? "text-warning" : "text-foreground"}`}
                        >
                          {infra.cpu}%
                        </span>
                      </div>
                      <Progress
                        value={infra.cpu}
                        className={`h-2 ${infra.cpu > 80 ? "[&>div]:bg-warning" : ""}`}
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Memory</span>
                        <span className="font-medium text-foreground">
                          {infra.memory}%
                        </span>
                      </div>
                      <Progress value={infra.memory} className="h-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Risk Indicators */}
      <motion.div variants={item}>
        <Card className="glass-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-heading">Risk Indicators</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {riskIndicators.map((risk, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    risk.severity === "high"
                      ? "border-destructive/30 bg-destructive/5"
                      : risk.severity === "medium"
                        ? "border-warning/30 bg-warning/5"
                        : "border-border/50"
                  }`}
                >
                  <p className="text-sm text-muted-foreground">{risk.label}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-2xl font-heading font-bold text-foreground">
                      {risk.value}
                    </span>
                    <Badge
                      className={
                        risk.severity === "high"
                          ? "bg-destructive/20 text-destructive"
                          : risk.severity === "medium"
                            ? "bg-warning/20 text-warning"
                            : "bg-muted text-muted-foreground"
                      }
                    >
                      {risk.severity}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default InfrastructureMonitoring;
