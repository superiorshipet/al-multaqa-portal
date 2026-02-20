import { StatCard } from '../../components/StatCard';
import { FileText, CheckCircle, XCircle, Clock } from 'lucide-react';
import { applications } from '../../data/mockData';
import { Link } from 'react-router';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';

export function SeekerDashboard() {
  const myApplications = applications.slice(0, 5);
  const pendingCount = applications.filter(app => app.status === 'pending').length;
  const acceptedCount = applications.filter(app => app.status === 'accepted').length;
  const rejectedCount = applications.filter(app => app.status === 'rejected').length;

  const getStatusBadge = (status: string) => {
    const statusMap = {
      pending: { label: 'قيد المراجعة', variant: 'secondary' as const },
      accepted: { label: 'مقبول', variant: 'default' as const },
      rejected: { label: 'مرفوض', variant: 'destructive' as const },
    };
    return statusMap[status as keyof typeof statusMap] || statusMap.pending;
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">لوحة الباحث عن عمل</h1>
          <p className="text-muted-foreground">مرحباً بك في لوحة التحكم الخاصة بك</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="الطلبات قيد المراجعة"
            value={pendingCount}
            icon={Clock}
            variant="warning"
          />
          <StatCard
            title="الطلبات المقبولة"
            value={acceptedCount}
            icon={CheckCircle}
            variant="success"
          />
          <StatCard
            title="الطلبات المرفوضة"
            value={rejectedCount}
            icon={XCircle}
            variant="danger"
          />
        </div>

        {/* Recent Applications */}
        <div className="bg-card border rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">طلباتي الأخيرة</h2>
            <Button variant="outline" size="sm" asChild>
              <Link to="/seeker/applications">عرض الكل</Link>
            </Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-right py-3 px-4 font-medium">الوظيفة</th>
                  <th className="text-right py-3 px-4 font-medium">الشركة</th>
                  <th className="text-right py-3 px-4 font-medium">تاريخ التقديم</th>
                  <th className="text-right py-3 px-4 font-medium">الحالة</th>
                  <th className="text-right py-3 px-4 font-medium">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {myApplications.map((app) => {
                  const status = getStatusBadge(app.status);
                  return (
                    <tr key={app.id} className="border-b last:border-0 hover:bg-muted/50">
                      <td className="py-4 px-4">{app.jobTitle}</td>
                      <td className="py-4 px-4 text-muted-foreground">{app.company}</td>
                      <td className="py-4 px-4 text-muted-foreground">{app.date}</td>
                      <td className="py-4 px-4">
                        <Badge variant={status.variant}>{status.label}</Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Link
                          to={`/jobs/${app.jobId}`}
                          className="text-primary hover:underline text-sm"
                        >
                          عرض التفاصيل
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
