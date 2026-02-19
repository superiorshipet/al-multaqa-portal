import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";

// Pages
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CompanyLogin from "./pages/CompanyLogin";
import CompanyRegister from "./pages/CompanyRegister";
import CompanyDashboard from "./pages/CompanyDashboard";
import CompanyJobs from "./pages/CompanyJobs";
import CompanyJobCreate from "./pages/CompanyJobCreate";
import CompanyApplicants from "./pages/CompanyApplicants";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminCompanies from "./pages/AdminCompanies";
import AdminJobs from "./pages/AdminJobs";
import AdminCategories from "./pages/AdminCategories";
import SeekerApplications from "./pages/SeekerApplications";
import SeekerProfile from "./pages/SeekerProfile";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/jobs/:id" component={JobDetail} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/company/login" component={CompanyLogin} />
      <Route path="/company/register" component={CompanyRegister} />
      <Route path="/company/dashboard" component={CompanyDashboard} />
      <Route path="/company/jobs" component={CompanyJobs} />
      <Route path="/company/jobs/create" component={CompanyJobCreate} />
      <Route path="/company/jobs/:id/applicants" component={CompanyApplicants} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/companies" component={AdminCompanies} />
      <Route path="/admin/jobs" component={AdminJobs} />
      <Route path="/admin/categories" component={AdminCategories} />
      <Route path="/seeker/applications" component={SeekerApplications} />
      <Route path="/seeker/profile" component={SeekerProfile} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
