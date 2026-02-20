import { StatCard } from '../../components/StatCard';
import { Briefcase, Users, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Link } from 'react-router';
import { jobs, applications } from '../../data/mockData';

export function CompanyDashboard() {
  const companyJobs = jobs.filter(job => job.company === 'شركة التقنية المتقدمة');
  const companyApplications = applications.filter(app => 
    companyJobs.some(job => job.id === app.jobId)
  );
  
  const activeJobs = companyJobs.filter(job => job.status === 'active').length;
  const newApplications = companyApplications.filter(app => app.status === 'pending').length;
  const underReview = companyApplications.filter(app => app.status === 'pending').length;

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">لوحة الشركة</h1>
          <p className="text-muted-foreground">مرحباً بك في لوحة إدارة شركتك</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="وظائف منشورة"
            value={companyJobs.length}
            icon={Briefcase}
            variant="primary"
          />
          <StatCard
            title="طلبات جديدة"
            value={newApplications}
            icon={Users}
            variant="success"
          />
          <StatCard
            title="قيد المراجعة"
            value={underReview}
            icon={Clock}
            variant="warning"
          />
          <StatCard
            title="وظائف نشطة"
            value={activeJobs}
            icon={CheckCircle}
            variant="primary"
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-xl font-bold mb-4">إجراءات سريعة</h2>
            <div className="space-y-3">
              <Button className="w-full" size="lg" asChild>
                <Link to="/company/add-job">
                  <Briefcase className="ml-2 h-5 w-5" />
                  إضافة وظيفة جديدة
                </Link>
              </Button>
              <Button variant="outline" className="w-full" size="lg" asChild>
                <Link to="/company/jobs">عرض جميع الوظائف</Link>
              </Button>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-xl font-bold mb-4">آخر الإحصائيات</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-muted-foreground">إجمالي المتقدمين</span>
                <span className="font-bold text-lg">{companyApplications.length}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-muted-foreground">طلبات اليوم</span>
                <span className="font-bold text-lg text-primary">3</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">متوسط الطلبات/وظيفة</span>
                <span className="font-bold text-lg">
                  {Math.round(companyApplications.length / companyJobs.length)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
