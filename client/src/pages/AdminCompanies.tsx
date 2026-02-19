import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { mockCompanies } from '@/lib/mockData';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

export default function AdminCompanies() {
  const { role } = useAuth();
  const [, setLocation] = useLocation();

  if (role !== 'admin') {
    setLocation('/admin/login');
    return null;
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Clock className="w-5 h-5 text-orange-600" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'approved':
        return 'معتمدة';
      case 'rejected':
        return 'مرفوضة';
      default:
        return 'قيد الانتظار';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-orange-100 text-orange-800';
    }
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/10 to-transparent py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              إدارة الشركات
            </h1>
            <p className="text-muted-foreground">
              عدد الشركات: {mockCompanies.length}
            </p>
          </div>
        </section>

        {/* Companies Table */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {mockCompanies.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-right py-4 px-4 font-semibold">اسم الشركة</th>
                      <th className="text-right py-4 px-4 font-semibold">البريد الإلكتروني</th>
                      <th className="text-right py-4 px-4 font-semibold">المدينة</th>
                      <th className="text-right py-4 px-4 font-semibold">الحالة</th>
                      <th className="text-right py-4 px-4 font-semibold">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockCompanies.map((company) => (
                      <tr
                        key={company.id}
                        className="border-b border-border hover:bg-secondary/30 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <p className="font-semibold">{company.name}</p>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-muted-foreground">{company.email}</p>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-muted-foreground">{company.city}</p>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(company.status)}
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(company.status)}`}>
                              {getStatusLabel(company.status)}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              عرض
                            </Button>
                            {company.status === 'pending' && (
                              <>
                                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                  اعتماد
                                </Button>
                                <Button size="sm" variant="destructive">
                                  رفض
                                </Button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">لا توجد شركات</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
