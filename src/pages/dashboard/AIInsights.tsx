import { motion } from "framer-motion";
import {
  Brain,
  Lightbulb,
  TrendingUp,
  Shield,
  AlertTriangle,
  ArrowRight,
  Zap,
  Target,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const insights = [
  {
    type: "security",
    priority: "high",
    title: "Enable MFA for Admin Accounts",
    description:
      "3 admin accounts lack multi-factor authentication. This exposes critical access points to credential-based attacks.",
    impact: "Reduces breach risk by 99%",
    action: "Configure MFA",
  },
  {
    type: "optimization",
    priority: "medium",
    title: "Update Outdated Dependencies",
    description:
      "15 npm packages have known vulnerabilities. Automated updates available for 12 of them.",
    impact: "Eliminates 8 CVEs",
    action: "Update Now",
  },
  {
    type: "prediction",
    priority: "high",
    title: "Potential Data Exposure Risk",
    description:
      "AI detected unusual query patterns that could indicate improper data access configuration.",
    impact: "Prevents data leak",
    action: "Review Access",
  },
  {
    type: "optimization",
    priority: "low",
    title: "Optimize Firewall Rules",
    description:
      "47 redundant firewall rules detected. Consolidation would improve performance and reduce complexity.",
    impact: "15% faster processing",
    action: "Optimize",
  },
];

const predictiveAlerts = [
  {
    threat: "Account Takeover",
    likelihood: "High",
    timeframe: "Next 48 hours",
    indicators: ["Failed login spike", "Unusual IP patterns", "Password spray detected"],
  },
  {
    threat: "Data Exfiltration",
    likelihood: "Medium",
    timeframe: "Next 7 days",
    indicators: ["Large query volumes", "After-hours access", "New API integrations"],
  },
];

const AIInsights = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "security":
        return <Shield className="w-5 h-5 text-destructive" />;
      case "optimization":
        return <Zap className="w-5 h-5 text-primary" />;
      case "prediction":
        return <Target className="w-5 h-5 text-warning" />;
      default:
        return <Lightbulb className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* Header */}
      <motion.div variants={item}>
        <Card className="glass-card border-primary/30 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center gold-glow">
                <Brain className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold text-foreground">
                  AI Security Intelligence
                </h2>
                <p className="text-muted-foreground">
                  Powered by machine learning analysis of your security posture
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Insights Grid */}
      <motion.div variants={item}>
        <Card className="glass-card border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-heading flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              AI Recommendations
            </CardTitle>
            <Badge variant="outline">{insights.length} Active</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-colors hover:border-primary/30 ${
                    insight.priority === "high"
                      ? "border-destructive/30 bg-destructive/5"
                      : "border-border/50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          insight.type === "security"
                            ? "bg-destructive/10"
                            : insight.type === "prediction"
                              ? "bg-warning/10"
                              : "bg-primary/10"
                        }`}
                      >
                        {getTypeIcon(insight.type)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-foreground">
                            {insight.title}
                          </h4>
                          <Badge
                            className={
                              insight.priority === "high"
                                ? "bg-destructive/20 text-destructive"
                                : insight.priority === "medium"
                                  ? "bg-warning/20 text-warning"
                                  : "bg-muted text-muted-foreground"
                            }
                          >
                            {insight.priority} priority
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {insight.description}
                        </p>
                        <p className="text-sm text-success mt-2 flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {insight.impact}
                        </p>
                      </div>
                    </div>
                    <Button variant="gold-outline" size="sm">
                      {insight.action}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Predictive Alerts */}
      <motion.div variants={item}>
        <Card className="glass-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-heading flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              Predictive Risk Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {predictiveAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-warning/30 bg-warning/5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-foreground">{alert.threat}</h4>
                    <Badge
                      className={
                        alert.likelihood === "High"
                          ? "bg-destructive/20 text-destructive"
                          : "bg-warning/20 text-warning"
                      }
                    >
                      {alert.likelihood} Likelihood
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Expected: {alert.timeframe}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-foreground">
                      Key Indicators:
                    </p>
                    {alert.indicators.map((indicator, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-warning" />
                        {indicator}
                      </div>
                    ))}
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

export default AIInsights;
