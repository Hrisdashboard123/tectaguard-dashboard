import { motion } from "framer-motion";
import {
  FileCheck,
  Download,
  Shield,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const complianceFrameworks = [
  { name: "SOC 2 Type II", score: 94, status: "compliant", lastAudit: "Jan 15, 2024" },
  { name: "ISO 27001", score: 89, status: "compliant", lastAudit: "Dec 10, 2023" },
  { name: "GDPR", score: 96, status: "compliant", lastAudit: "Jan 20, 2024" },
  { name: "HIPAA", score: 72, status: "in-progress", lastAudit: "Nov 5, 2023" },
  { name: "PCI DSS", score: 85, status: "compliant", lastAudit: "Jan 8, 2024" },
];

const auditHistory = [
  { date: "Jan 20, 2024", type: "GDPR Assessment", result: "passed", findings: 2 },
  { date: "Jan 15, 2024", type: "SOC 2 Audit", result: "passed", findings: 5 },
  { date: "Jan 8, 2024", type: "PCI DSS Scan", result: "passed", findings: 8 },
  { date: "Dec 10, 2023", type: "ISO 27001 Review", result: "passed", findings: 3 },
];

const ComplianceReports = () => {
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
      {/* Overall Score */}
      <motion.div variants={item} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="glass-card border-border/50 lg:col-span-1">
          <CardContent className="p-6 flex flex-col items-center justify-center h-full">
            <div className="relative w-36 h-36">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-muted"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="263.89"
                  strokeDashoffset={263.89 * (1 - 0.87)}
                  strokeLinecap="round"
                  className="text-success"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl font-heading font-bold text-foreground">
                    87%
                  </span>
                  <p className="text-sm text-muted-foreground">Compliance</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <div className="text-center">
                <p className="text-2xl font-heading font-bold text-success">4</p>
                <p className="text-xs text-muted-foreground">Compliant</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-heading font-bold text-warning">1</p>
                <p className="text-xs text-muted-foreground">In Progress</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-heading font-bold text-destructive">0</p>
                <p className="text-xs text-muted-foreground">Failed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-border/50 lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-heading">
              Compliance Frameworks
            </CardTitle>
            <Button variant="gold">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">
                          {framework.name}
                        </span>
                        <Badge
                          className={
                            framework.status === "compliant"
                              ? "bg-success/20 text-success"
                              : "bg-warning/20 text-warning"
                          }
                        >
                          {framework.status === "compliant" ? (
                            <CheckCircle className="w-3 h-3 mr-1" />
                          ) : (
                            <Clock className="w-3 h-3 mr-1" />
                          )}
                          {framework.status}
                        </Badge>
                      </div>
                      <span
                        className={`font-semibold ${
                          framework.score >= 90
                            ? "text-success"
                            : framework.score >= 80
                              ? "text-primary"
                              : "text-warning"
                        }`}
                      >
                        {framework.score}%
                      </span>
                    </div>
                    <Progress
                      value={framework.score}
                      className={`h-2 ${
                        framework.score >= 90
                          ? "[&>div]:bg-success"
                          : framework.score >= 80
                            ? ""
                            : "[&>div]:bg-warning"
                      }`}
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Last audit: {framework.lastAudit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Audit History */}
      <motion.div variants={item}>
        <Card className="glass-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-heading">Audit History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {auditHistory.map((audit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        audit.result === "passed"
                          ? "bg-success/20"
                          : "bg-destructive/20"
                      }`}
                    >
                      {audit.result === "passed" ? (
                        <CheckCircle className="w-5 h-5 text-success" />
                      ) : (
                        <XCircle className="w-5 h-5 text-destructive" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{audit.type}</h4>
                      <p className="text-sm text-muted-foreground">{audit.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline">{audit.findings} findings</Badge>
                    <Button variant="ghost" size="sm">
                      View Report
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Risk Scoring */}
      <motion.div variants={item}>
        <Card className="glass-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-heading flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Risk Scoring
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border border-success/30 bg-success/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Data Protection
                  </span>
                  <Badge className="bg-success/20 text-success">Low Risk</Badge>
                </div>
                <p className="text-2xl font-heading font-bold text-success">A</p>
              </div>
              <div className="p-4 rounded-lg border border-warning/30 bg-warning/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Access Control
                  </span>
                  <Badge className="bg-warning/20 text-warning">Medium Risk</Badge>
                </div>
                <p className="text-2xl font-heading font-bold text-warning">B</p>
              </div>
              <div className="p-4 rounded-lg border border-success/30 bg-success/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Network Security
                  </span>
                  <Badge className="bg-success/20 text-success">Low Risk</Badge>
                </div>
                <p className="text-2xl font-heading font-bold text-success">A</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ComplianceReports;
