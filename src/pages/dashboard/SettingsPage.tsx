import { motion } from "framer-motion";
import {
  Settings,
  User,
  Bell,
  Key,
  Link,
  Shield,
  Globe,
  Mail,
  Smartphone,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

const integrations = [
  { name: "GitHub", status: "connected", icon: "github" },
  { name: "GitLab", status: "not-connected", icon: "gitlab" },
  { name: "Slack", status: "connected", icon: "slack" },
  { name: "Jira", status: "not-connected", icon: "jira" },
  { name: "AWS", status: "connected", icon: "aws" },
  { name: "Azure", status: "not-connected", icon: "azure" },
];

const SettingsPage = () => {
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
      {/* Profile Settings */}
      <motion.div variants={item}>
        <Card className="glass-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-heading flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Profile Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/30">
                <span className="text-2xl font-heading font-bold text-primary">
                  JD
                </span>
              </div>
              <div>
                <Button variant="outline" size="sm">
                  Upload Photo
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  JPG, PNG or GIF. Max 2MB.
                </p>
              </div>
            </div>
            <Separator />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="john.doe@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" defaultValue="TectaPro Inc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input id="role" defaultValue="Admin" disabled />
              </div>
            </div>
            <Button variant="gold">Save Changes</Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Notification Settings */}
      <motion.div variants={item}>
        <Card className="glass-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-heading flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">
                      Email Notifications
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Receive security alerts via email
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">
                      Push Notifications
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Real-time alerts on mobile
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">
                      Critical Alerts Only
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Only notify for high-priority threats
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">Weekly Digest</p>
                    <p className="text-sm text-muted-foreground">
                      Summary of security status
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* API Keys */}
      <motion.div variants={item}>
        <Card className="glass-card border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-heading flex items-center gap-2">
              <Key className="w-5 h-5 text-primary" />
              API Keys
            </CardTitle>
            <Button variant="gold-outline" size="sm">
              Generate New Key
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">
                    Production API Key
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Created Jan 15, 2024
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-sm bg-muted p-2 rounded font-mono">
                    sk_live_••••••••••••••••••••••••
                  </code>
                  <Button variant="outline" size="sm">
                    Copy
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive">
                    Revoke
                  </Button>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">
                    Development API Key
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Created Jan 10, 2024
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-sm bg-muted p-2 rounded font-mono">
                    sk_dev_••••••••••••••••••••••••
                  </code>
                  <Button variant="outline" size="sm">
                    Copy
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive">
                    Revoke
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Integrations */}
      <motion.div variants={item}>
        <Card className="glass-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-heading flex items-center gap-2">
              <Link className="w-5 h-5 text-primary" />
              Integrations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-border/50 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <Settings className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {integration.name}
                      </p>
                      <p
                        className={`text-xs ${
                          integration.status === "connected"
                            ? "text-success"
                            : "text-muted-foreground"
                        }`}
                      >
                        {integration.status === "connected"
                          ? "Connected"
                          : "Not connected"}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant={
                      integration.status === "connected" ? "outline" : "gold-outline"
                    }
                    size="sm"
                  >
                    {integration.status === "connected" ? "Manage" : "Connect"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default SettingsPage;
