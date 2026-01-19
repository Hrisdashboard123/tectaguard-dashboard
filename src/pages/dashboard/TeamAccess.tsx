import { motion } from "framer-motion";
import {
  Users,
  UserPlus,
  Shield,
  Mail,
  MoreVertical,
  Check,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const teamMembers = [
  {
    name: "John Doe",
    email: "john.doe@company.com",
    role: "Admin",
    status: "active",
    lastActive: "Now",
    permissions: ["full_access"],
  },
  {
    name: "Sarah Smith",
    email: "sarah.smith@company.com",
    role: "Security Analyst",
    status: "active",
    lastActive: "5 min ago",
    permissions: ["view_reports", "manage_scans"],
  },
  {
    name: "Mike Wilson",
    email: "mike.wilson@company.com",
    role: "Developer",
    status: "active",
    lastActive: "1 hour ago",
    permissions: ["view_vulnerabilities", "view_code"],
  },
  {
    name: "Emily Chen",
    email: "emily.chen@company.com",
    role: "DevOps",
    status: "pending",
    lastActive: "Invitation sent",
    permissions: ["view_infrastructure", "manage_deployments"],
  },
];

const roles = [
  {
    name: "Admin",
    description: "Full access to all features",
    count: 2,
    color: "text-primary",
  },
  {
    name: "Security Analyst",
    description: "View and manage security reports",
    count: 3,
    color: "text-success",
  },
  {
    name: "Developer",
    description: "View vulnerabilities and code analysis",
    count: 5,
    color: "text-info",
  },
  {
    name: "DevOps",
    description: "Infrastructure and deployment access",
    count: 2,
    color: "text-warning",
  },
];

const TeamAccess = () => {
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
      {/* Header */}
      <motion.div
        variants={item}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
      >
        <div>
          <h2 className="text-xl font-heading font-bold text-foreground">
            Team Members
          </h2>
          <p className="text-muted-foreground">
            Manage your team and their access permissions
          </p>
        </div>
        <Button variant="gold">
          <UserPlus className="w-4 h-4 mr-2" />
          Invite Member
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {roles.map((role, index) => (
          <Card key={index} className="glass-card border-border/50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-2xl font-heading font-bold ${role.color}`}>
                    {role.count}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {role.name}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Shield className={`w-5 h-5 ${role.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Team List */}
      <motion.div variants={item}>
        <Card className="glass-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-heading">All Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                      <span className="text-sm font-semibold text-primary">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-foreground">
                          {member.name}
                        </h4>
                        {member.status === "active" ? (
                          <span className="w-2 h-2 rounded-full bg-success" />
                        ) : (
                          <Badge variant="outline" className="text-xs">
                            Pending
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {member.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <Badge
                        className={
                          member.role === "Admin"
                            ? "bg-primary/20 text-primary"
                            : member.role === "Security Analyst"
                              ? "bg-success/20 text-success"
                              : member.role === "Developer"
                                ? "bg-info/20 text-info"
                                : "bg-warning/20 text-warning"
                        }
                      >
                        {member.role}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        {member.lastActive}
                      </p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Permissions</DropdownMenuItem>
                        <DropdownMenuItem>Change Role</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Remove Member
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Roles & Permissions */}
      <motion.div variants={item}>
        <Card className="glass-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-heading">
              Roles & Permissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border/50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className={`font-medium ${role.color}`}>{role.name}</h4>
                    <Badge variant="outline">{role.count} members</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {role.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {role.name === "Admin" && (
                      <>
                        <Badge variant="outline" className="text-xs">
                          <Check className="w-3 h-3 mr-1" />
                          Full Access
                        </Badge>
                      </>
                    )}
                    {role.name === "Security Analyst" && (
                      <>
                        <Badge variant="outline" className="text-xs">
                          <Check className="w-3 h-3 mr-1" />
                          View Reports
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Check className="w-3 h-3 mr-1" />
                          Manage Scans
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <X className="w-3 h-3 mr-1" />
                          Settings
                        </Badge>
                      </>
                    )}
                    {role.name === "Developer" && (
                      <>
                        <Badge variant="outline" className="text-xs">
                          <Check className="w-3 h-3 mr-1" />
                          View Code
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Check className="w-3 h-3 mr-1" />
                          Vulnerabilities
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <X className="w-3 h-3 mr-1" />
                          Infrastructure
                        </Badge>
                      </>
                    )}
                    {role.name === "DevOps" && (
                      <>
                        <Badge variant="outline" className="text-xs">
                          <Check className="w-3 h-3 mr-1" />
                          Infrastructure
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Check className="w-3 h-3 mr-1" />
                          Deployments
                        </Badge>
                      </>
                    )}
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

export default TeamAccess;
