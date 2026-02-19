import { useAuth } from '@/contexts/AuthContext';
import { useLocation, Link } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { mockJobs } from '@/lib/mockData';
import { Plus, Edit, Eye, EyeOff } from 'lucide-react';

export default function CompanyJobs() {
  const { role } = useAuth();
  const [, setLocation] = useLocation();

  if (role !== 'company') {
    setLocation('/company/login');
    return null;
  }

  const companyJobs = mockJobs.slice(0, 2);

  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/10 to-transparent py-8 md:py-12">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                وظائفي
              </h1>
              <p className="text-muted-foreground">
                إدارة الوظائف المنشورة
              </p>
            </div>
            <Link href="/company/jobs/create">
              <Button>
                <Plus size={20} className="ml-2" />
                إضافة وظيفة جديدة
              </Button>
            </Link>
          </div>
        </section>

        {/* Jobs Table */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {companyJobs.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-right py-4 px-4 font-semibold">المسمى الوظيفي</th>
                      <th className="text-right py-4 px-4 font-semibold">المدينة</th>
                      <th className="text-right py-4 px-4 font-semibold">نوع الدوام</th>
                      <th className="text-right py-4 px-4 font-semibold">الحالة</th>
                      <th className="text-right py-4 px-4 font-semibold">المتقدمون</th>
                      <th className="text-right py-4 px-4 font-semibold">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {companyJobs.map((job) => (
                      <tr
                        key={job.id}
                        className="border-b border-border hover:bg-secondary/30 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <p className="font-semibold">{job.title}</p>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-muted-foreground">{job.city}</p>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-muted-foreground">
                            {job.jobType === 'full-time'
                              ? 'دوام كامل'
                              : job.jobType === 'part-time'
                                ? 'دوام جزئي'
                                : 'تدريب'}
                          </p>
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            منشورة
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <p className="font-semibold">{job.applicantsCount}</p>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <Link href={`/company/jobs/${job.id}/applicants`}>
                              <button className="p-2 hover:bg-secondary rounded-md transition-colors">
                                <Eye size={18} className="text-primary" />
                              </button>
                            </Link>
                            <button className="p-2 hover:bg-secondary rounded-md transition-colors">
                              <Edit size={18} className="text-muted-foreground" />
                            </button>
                            <button className="p-2 hover:bg-secondary rounded-md transition-colors">
                              <EyeOff size={18} className="text-muted-foreground" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">لم تنشر أي وظيفة حتى الآن</p>
                <Link href="/company/jobs/create">
                  <Button>إضافة وظيفة جديدة</Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
