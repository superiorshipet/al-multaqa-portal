import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Jobs } from './pages/Jobs';
import { JobDetails } from './pages/JobDetails';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

// Seeker pages
import { SeekerDashboard } from './pages/seeker/Dashboard';
import { SeekerApplications } from './pages/seeker/Applications';
import { SeekerProfile } from './pages/seeker/Profile';

// Company pages
import { CompanyDashboard } from './pages/company/Dashboard';
import { CompanyJobs } from './pages/company/Jobs';
import { AddJob } from './pages/company/AddJob';
import { Applicants } from './pages/company/Applicants';

// Admin pages
import { AdminDashboard } from './pages/admin/Dashboard';
import { AdminCompanies } from './pages/admin/Companies';
import { AdminJobs } from './pages/admin/Jobs';
import { AdminCategories } from './pages/admin/Categories';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'jobs', Component: Jobs },
      { path: 'jobs/:id', Component: JobDetails },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'privacy', Component: Privacy },
      { path: 'terms', Component: Terms },
      
      // Seeker routes
      { path: 'seeker/dashboard', Component: SeekerDashboard },
      { path: 'seeker/applications', Component: SeekerApplications },
      { path: 'seeker/profile', Component: SeekerProfile },
      
      // Company routes
      { path: 'company/dashboard', Component: CompanyDashboard },
      { path: 'company/jobs', Component: CompanyJobs },
      { path: 'company/add-job', Component: AddJob },
      { path: 'company/edit-job/:id', Component: AddJob },
      { path: 'company/applicants/:jobId', Component: Applicants },
      
      // Admin routes
      { path: 'admin/dashboard', Component: AdminDashboard },
      { path: 'admin/companies', Component: AdminCompanies },
      { path: 'admin/jobs', Component: AdminJobs },
      { path: 'admin/categories', Component: AdminCategories },
      
      // 404
      { path: '*', Component: NotFound },
    ],
  },
]);