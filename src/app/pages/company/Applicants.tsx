import { useParams } from 'react-router';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { applications, jobs } from '../../data/mockData';
import { Download } from 'lucide-react';

export function Applicants() {
  const { jobId } = useParams();
  const job = jobs.find(j => j.id === jobId);
  const jobApplications = applications.filter(app => app.jobId === jobId);

  const getStatusBadge = (status: string) => {
    const statusMap = {
      pending: { label: 'قيد المراجعة', variant: 'secondary' as const },
      accepted: { label: 'مقبول', variant: 'default' as const },
      rejected: { label: 'مرفوض', variant: 'destructive' as const },
    };
    return statusMap[status as keyof typeof statusMap] || statusMap.pending;
  };

  if (!job) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">الوظيفة غير موجودة</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">المتقدمين للوظيفة</h1>
          <p className="text-muted-foreground">{job.title}</p>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <div className="mb-6">
            <p className="text-muted-foreground">
              إجمالي المتقدمين: <span className="font-bold text-foreground">{jobApplications.length}</span>
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-right py-3 px-4 font-medium">اسم المتقدم</th>
                  <th className="text-right py-3 px-4 font-medium">البريد الإلكتروني</th>
                  <th className="text-right py-3 px-4 font-medium">رقم الجوال</th>
                  <th className="text-right py-3 px-4 font-medium">تاريخ التقديم</th>
                  <th className="text-right py-3 px-4 font-medium">الحالة</th>
                  <th className="text-right py-3 px-4 font-medium">السيرة الذاتية</th>
                  <th className="text-right py-3 px-4 font-medium">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {jobApplications.map((app) => {
                  const status = getStatusBadge(app.status);
                  return (
                    <tr key={app.id} className="border-b last:border-0 hover:bg-muted/50">
                      <td className="py-4 px-4 font-medium">{app.applicantName}</td>
                      <td className="py-4 px-4 text-muted-foreground">{app.applicantEmail}</td>
                      <td className="py-4 px-4 text-muted-foreground">{app.applicantPhone}</td>
                      <td className="py-4 px-4 text-muted-foreground">{app.date}</td>
                      <td className="py-4 px-4">
                        <Badge variant={status.variant}>{status.label}</Badge>
                      </td>
                      <td className="py-4 px-4">
                        {app.resume && (
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4 ml-1" />
                            تحميل
                          </Button>
                        )}
                      </td>
                      <td className="py-4 px-4">
                        <Select defaultValue={app.status}>
                          <SelectTrigger className="w-40">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">قيد المراجعة</SelectItem>
                            <SelectItem value="accepted">قبول</SelectItem>
                            <SelectItem value="rejected">رفض</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {jobApplications.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">لا توجد طلبات تقديم حتى الآن</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
