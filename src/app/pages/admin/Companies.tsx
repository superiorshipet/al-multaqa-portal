import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { companies } from '../../data/mockData';

export function AdminCompanies() {
  const getStatusBadge = (status: string) => {
    const statusMap = {
      pending: { label: 'قيد الاعتماد', variant: 'secondary' as const },
      approved: { label: 'معتمدة', variant: 'default' as const },
      rejected: { label: 'مرفوضة', variant: 'destructive' as const },
    };
    return statusMap[status as keyof typeof statusMap] || statusMap.pending;
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">إدارة الشركات</h1>
          <p className="text-muted-foreground">مراجعة واعتماد الشركات المسجلة</p>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-right py-3 px-4 font-medium">اسم الشركة</th>
                  <th className="text-right py-3 px-4 font-medium">البريد الإلكتروني</th>
                  <th className="text-right py-3 px-4 font-medium">عدد الوظائف</th>
                  <th className="text-right py-3 px-4 font-medium">تاريخ التسجيل</th>
                  <th className="text-right py-3 px-4 font-medium">الحالة</th>
                  <th className="text-right py-3 px-4 font-medium">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((company) => {
                  const status = getStatusBadge(company.status);
                  return (
                    <tr key={company.id} className="border-b last:border-0 hover:bg-muted/50">
                      <td className="py-4 px-4 font-medium">{company.name}</td>
                      <td className="py-4 px-4 text-muted-foreground">{company.email}</td>
                      <td className="py-4 px-4 text-muted-foreground">{company.jobsCount}</td>
                      <td className="py-4 px-4 text-muted-foreground">{company.joinDate}</td>
                      <td className="py-4 px-4">
                        <Badge variant={status.variant}>{status.label}</Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Select defaultValue={company.status}>
                          <SelectTrigger className="w-40">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">قيد الاعتماد</SelectItem>
                            <SelectItem value="approved">اعتماد</SelectItem>
                            <SelectItem value="rejected">رفض</SelectItem>
                          </SelectContent>
                        </Select>
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
