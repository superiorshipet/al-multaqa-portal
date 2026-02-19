import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { mockApplications } from '@/lib/mockData';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

export default function SeekerApplications() {
  const { role } = useAuth();
  const [, setLocation] = useLocation();

  if (role !== 'seeker') {
    setLocation('/login');
    return null;
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Clock className="w-5 h-5 text-orange-600" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'مقبول';
      case 'rejected':
        return 'مرفوض';
      case 'under-review':
        return 'قيد المراجعة';
      default:
        return 'قيد الانتظار';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'under-review':
        return 'bg-blue-100 text-blue-800';
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
              طلبات التقديم الخاصة بي
            </h1>
            <p className="text-muted-foreground">
              تابع حالة طلبات التقديم الخاصة بك
            </p>
          </div>
        </section>

        {/* Applications Table */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {mockApplications.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-right py-4 px-4 font-semibold">الوظيفة</th>
                      <th className="text-right py-4 px-4 font-semibold">الشركة</th>
                      <th className="text-right py-4 px-4 font-semibold">تاريخ التقديم</th>
                      <th className="text-right py-4 px-4 font-semibold">الحالة</th>
                      <th className="text-right py-4 px-4 font-semibold">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockApplications.map((app) => (
                      <tr
                        key={app.id}
                        className="border-b border-border hover:bg-secondary/30 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div>
                            <p className="font-semibold">{app.jobTitle}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-muted-foreground">{app.company}</p>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-muted-foreground">{app.appliedDate}</p>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(app.status)}
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                              {getStatusLabel(app.status)}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <button className="text-primary hover:underline text-sm font-medium">
                            عرض التفاصيل
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">لم تقدم على أي وظيفة حتى الآن</p>
                <a href="/jobs" className="text-primary hover:underline font-medium">
                  تصفح الوظائف المتاحة
                </a>
              </div>
            )}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
