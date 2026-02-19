import { useAuth } from '@/contexts/AuthContext';
import { useLocation, Link } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { mockJobs } from '@/lib/mockData';
import { Briefcase, Users, Plus } from 'lucide-react';

export default function CompanyDashboard() {
  const { user, role } = useAuth();
  const [, setLocation] = useLocation();

  if (role !== 'company') {
    setLocation('/company/login');
    return null;
  }

  const companyJobs = mockJobs.slice(0, 2);
  const totalApplications = companyJobs.reduce((sum, job) => sum + job.applicantsCount, 0);

  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/10 to-transparent py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              لوحة تحكم الشركة
            </h1>
            <p className="text-muted-foreground">
              أهلاً وسهلاً {user?.companyName || user?.name}
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">الوظائف النشطة</p>
                    <p className="text-3xl font-bold">{companyJobs.length}</p>
                  </div>
                  <Briefcase className="w-12 h-12 text-primary/20" />
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">الطلبات الجديدة</p>
                    <p className="text-3xl font-bold">{totalApplications}</p>
                  </div>
                  <Users className="w-12 h-12 text-primary/20" />
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">الإجراءات السريعة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/company/jobs/create">
                  <Button className="w-full h-12 text-base">
                    <Plus size={20} className="ml-2" />
                    إضافة وظيفة جديدة
                  </Button>
                </Link>
                <Link href="/company/jobs">
                  <Button variant="outline" className="w-full h-12 text-base">
                    عرض وظائفي
                  </Button>
                </Link>
              </div>
            </div>

            {/* Recent Jobs */}
            <div>
              <h2 className="text-2xl font-bold mb-6">الوظائف الأخيرة</h2>
              <div className="space-y-4">
                {companyJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.city}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{job.applicantsCount}</p>
                        <p className="text-xs text-muted-foreground">متقدم</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {job.description}
                    </p>
                    <div className="flex gap-2">
                      <Link href={`/company/jobs/${job.id}/applicants`}>
                        <Button size="sm" variant="outline">
                          عرض المتقدمين
                        </Button>
                      </Link>
                      <Link href={`/company/jobs/${job.id}/edit`}>
                        <Button size="sm" variant="ghost">
                          تعديل
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
