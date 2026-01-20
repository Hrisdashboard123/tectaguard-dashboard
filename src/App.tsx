import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import SecurityOverview from "./pages/dashboard/SecurityOverview";
import VulnerabilityScanner from "./pages/dashboard/VulnerabilityScanner";
import InfrastructureMonitoring from "./pages/dashboard/InfrastructureMonitoring";
import ThreatIntelligence from "./pages/dashboard/ThreatIntelligence";
import ComplianceReports from "./pages/dashboard/ComplianceReports";
import AIInsights from "./pages/dashboard/AIInsights";
import ActivityLogs from "./pages/dashboard/ActivityLogs";
import TeamAccess from "./pages/dashboard/TeamAccess";
import SettingsPage from "./pages/dashboard/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<SecurityOverview />} />
            <Route path="vulnerabilities" element={<VulnerabilityScanner />} />
            <Route path="infrastructure" element={<InfrastructureMonitoring />} />
            <Route path="threats" element={<ThreatIntelligence />} />
            <Route path="compliance" element={<ComplianceReports />} />
            <Route path="insights" element={<AIInsights />} />
            <Route path="activity" element={<ActivityLogs />} />
            <Route path="team" element={<TeamAccess />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
