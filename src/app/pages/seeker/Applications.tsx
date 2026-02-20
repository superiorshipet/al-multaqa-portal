import { applications } from '../../data/mockData';
import { Link } from 'react-router';
import { Badge } from '../../components/ui/badge';

export function SeekerApplications() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">طلباتي</h1>
          <p className="text-muted-foreground">جميع طلبات التقديم على الوظائف</p>
        </div>

        <div className="bg-card border rounded-lg p-6">
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
                {applications.map((app) => {
                  const status = getStatusBadge(app.status);
                  return (
                    <tr key={app.id} className="border-b last:border-0 hover:bg-muted/50">
                      <td className="py-4 px-4 font-medium">{app.jobTitle}</td>
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
