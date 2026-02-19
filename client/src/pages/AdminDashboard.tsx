import { useAuth } from '@/contexts/AuthContext';
import { useLocation, Link } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { mockCompanies, mockJobs } from '@/lib/mockData';
import { Building2, Briefcase, Users } from 'lucide-react';

export default function AdminDashboard() {
  const { role } = useAuth();
  const [, setLocation] = useLocation();

  if (role !== 'admin') {
    setLocation('/admin/login');
    return null;
  }

  const pendingCompanies = mockCompanies.filter((c) => c.status === 'pending').length;
  const approvedCompanies = mockCompanies.filter((c) => c.status === 'approved').length;

  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/10 to-transparent py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              لوحة تحكم المدير
            </h1>
            <p className="text-muted-foreground">
              إدارة النظام والشركات والوظائف
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">الشركات المعتمدة</p>
                    <p className="text-3xl font-bold">{approvedCompanies}</p>
                  </div>
                  <Building2 className="w-12 h-12 text-primary/20" />
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">الوظائف النشطة</p>
                    <p className="text-3xl font-bold">{mockJobs.length}</p>
                  </div>
                  <Briefcase className="w-12 h-12 text-primary/20" />
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">طلبات الاعتماد</p>
                    <p className="text-3xl font-bold text-orange-600">{pendingCompanies}</p>
                  </div>
                  <Users className="w-12 h-12 text-orange-600/20" />
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">الإجراءات السريعة</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/admin/companies">
                  <Button variant="outline" className="w-full h-12 text-base">
                    إدارة الشركات
                  </Button>
                </Link>
                <Link href="/admin/jobs">
                  <Button variant="outline" className="w-full h-12 text-base">
                    مراجعة الوظائف
                  </Button>
                </Link>
                <Link href="/admin/categories">
                  <Button variant="outline" className="w-full h-12 text-base">
                    إدارة التصنيفات
                  </Button>
                </Link>
              </div>
            </div>

            {/* Pending Companies */}
            {pendingCompanies > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">طلبات الاعتماد المعلقة</h2>
                <div className="space-y-4">
                  {mockCompanies
                    .filter((c) => c.status === 'pending')
                    .map((company) => (
                      <div
                        key={company.id}
                        className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-bold">{company.name}</h3>
                            <p className="text-sm text-muted-foreground">{company.email}</p>
                          </div>
                          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                            قيد الانتظار
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          {company.description || 'لا يوجد وصف'}
                        </p>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            اعتماد
                          </Button>
                          <Button size="sm" variant="destructive">
                            رفض
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
