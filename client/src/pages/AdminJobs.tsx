import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { mockJobs } from '@/lib/mockData';

export default function AdminJobs() {
  const { role } = useAuth();
  const [, setLocation] = useLocation();

  if (role !== 'admin') {
    setLocation('/admin/login');
    return null;
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/10 to-transparent py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              مراجعة الوظائف
            </h1>
            <p className="text-muted-foreground">
              عدد الوظائف: {mockJobs.length}
            </p>
          </div>
        </section>

        {/* Jobs Table */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {mockJobs.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-right py-4 px-4 font-semibold">المسمى الوظيفي</th>
                      <th className="text-right py-4 px-4 font-semibold">الشركة</th>
                      <th className="text-right py-4 px-4 font-semibold">المدينة</th>
                      <th className="text-right py-4 px-4 font-semibold">الحالة</th>
                      <th className="text-right py-4 px-4 font-semibold">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockJobs.map((job) => (
                      <tr
                        key={job.id}
                        className="border-b border-border hover:bg-secondary/30 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <p className="font-semibold">{job.title}</p>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-muted-foreground">{job.company}</p>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-muted-foreground">{job.city}</p>
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            معتمدة
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              عرض
                            </Button>
                            <Button size="sm" variant="destructive">
                              إخفاء
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">لا توجد وظائف</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
