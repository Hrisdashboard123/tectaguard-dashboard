import { motion } from "framer-motion";
import {
  AlertTriangle,
  Shield,
  Globe,
  Clock,
  TrendingUp,
  XCircle,
  CheckCircle,
  Eye,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const activeThreats = [
  {
    id: 1,
    type: "DDoS Attack",
    severity: "critical",
    source: "Multiple IPs",
    target: "api.tectapro.com",
    status: "mitigating",
    time: "Active for 5 min",
  },
  {
    id: 2,
    type: "Brute Force",
    severity: "high",
    source: "45.33.12.89",
    target: "auth.tectapro.com",
    status: "blocked",
    time: "2 min ago",
  },
  {
    id: 3,
    type: "SQL Injection",
    severity: "medium",
    source: "92.128.45.12",
    target: "/api/users",
    status: "blocked",
    time: "15 min ago",
  },
];

const predictions = [
  {
    threat: "Credential Stuffing",
    probability: 78,
    timeframe: "Next 24h",
    recommendation: "Enable rate limiting on login endpoints",
  },
  {
    threat: "Data Exfiltration",
    probability: 45,
    timeframe: "Next 7 days",
    recommendation: "Review database access patterns",
  },
  {
    threat: "Ransomware",
    probability: 12,
    timeframe: "Next 30 days",
    recommendation: "Verify backup integrity",
  },
];

const ThreatIntelligence = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
      {/* Stats */}
      <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-card border-destructive/30 bg-destructive/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <div>
                <p className="text-3xl font-heading font-bold text-foreground">
                  3
                </p>
                <p className="text-sm text-muted-foreground">Active Threats</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-success" />
              <div>
                <p className="text-3xl font-heading font-bold text-foreground">
                  847
                </p>
                <p className="text-sm text-muted-foreground">Blocked Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-info" />
              <div>
                <p className="text-3xl font-heading font-bold text-foreground">
                  23
                </p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-border/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-primary" />
              <div>
                <p className="text-3xl font-heading font-bold text-foreground">
                  &lt;50ms
                </p>
                <p className="text-sm text-muted-foreground">Response Time</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Active Threats */}
      <motion.div variants={item}>
        <Card className="glass-card border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-heading flex items-center gap-2">
              <span className="relative">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-destructive animate-pulse" />
              </span>
              Real-time Alerts
            </CardTitle>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeThreats.map((threat) => (
                <div
                  key={threat.id}
                  className={`p-4 rounded-lg border ${
                    threat.severity === "critical"
                      ? "border-destructive/50 bg-destructive/5 threat-glow-high"
                      : threat.severity === "high"
                        ? "border-destructive/30"
                        : "border-warning/30"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          threat.status === "mitigating"
                            ? "bg-warning/20"
                            : "bg-success/20"
                        }`}
                      >
                        {threat.status === "mitigating" ? (
                          <div className="w-5 h-5 border-2 border-warning border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-success" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-foreground">
                            {threat.type}
                          </h4>
                          <Badge
                            className={
                              threat.severity === "critical"
                                ? "bg-destructive/20 text-destructive"
                                : threat.severity === "high"
                                  ? "bg-destructive/10 text-destructive"
                                  : "bg-warning/20 text-warning"
                            }
                          >
                            {threat.severity}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span>Source: {threat.source}</span>
                          <span>Target: {threat.target}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {threat.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <XCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* AI Predictions */}
      <motion.div variants={item}>
        <Card className="glass-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-heading flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              AI Threat Predictions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {predictions.map((pred, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border/50"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-foreground">{pred.threat}</h4>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm font-semibold ${
                          pred.probability > 60
                            ? "text-destructive"
                            : pred.probability > 30
                              ? "text-warning"
                              : "text-success"
                        }`}
                      >
                        {pred.probability}% likely
                      </span>
                      <Badge variant="outline">{pred.timeframe}</Badge>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-3">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        pred.probability > 60
                          ? "bg-destructive"
                          : pred.probability > 30
                            ? "bg-warning"
                            : "bg-success"
                      }`}
                      style={{ width: `${pred.probability}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    {pred.recommendation}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ThreatIntelligence;
