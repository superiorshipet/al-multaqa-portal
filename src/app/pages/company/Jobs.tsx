import { Link } from 'react-router';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { jobs } from '../../data/mockData';
import { Eye, Edit, EyeOff } from 'lucide-react';

export function CompanyJobs() {
  const companyJobs = jobs.filter(job => job.company === 'شركة التقنية المتقدمة');

  const getStatusBadge = (status: string) => {
    const statusMap = {
      active: { label: 'نشط', variant: 'default' as const },
      inactive: { label: 'متوقف', variant: 'secondary' as const },
      pending: { label: 'قيد المراجعة', variant: 'secondary' as const },
    };
    return statusMap[status as keyof typeof statusMap] || statusMap.active;
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">وظائفي</h1>
            <p className="text-muted-foreground">إدارة جميع الوظائف المنشورة</p>
          </div>
          <Button asChild>
            <Link to="/company/add-job">إضافة وظيفة جديدة</Link>
          </Button>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-right py-3 px-4 font-medium">المسمى الوظيفي</th>
                  <th className="text-right py-3 px-4 font-medium">المدينة</th>
                  <th className="text-right py-3 px-4 font-medium">نوع الدوام</th>
                  <th className="text-right py-3 px-4 font-medium">الحالة</th>
                  <th className="text-right py-3 px-4 font-medium">تاريخ النشر</th>
                  <th className="text-right py-3 px-4 font-medium">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {companyJobs.map((job) => {
                  const status = getStatusBadge(job.status);
                  return (
                    <tr key={job.id} className="border-b last:border-0 hover:bg-muted/50">
                      <td className="py-4 px-4 font-medium">{job.title}</td>
                      <td className="py-4 px-4 text-muted-foreground">{job.city}</td>
                      <td className="py-4 px-4 text-muted-foreground">{job.type}</td>
                      <td className="py-4 px-4">
                        <Badge variant={status.variant}>{status.label}</Badge>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">{job.postedDate}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/company/edit-job/${job.id}`}>
                              <Edit className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button variant="ghost" size="sm">
                            <EyeOff className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/company/applicants/${job.id}`}>
                              <Eye className="h-4 w-4 ml-1" />
                              المتقدمين
                            </Link>
                          </Button>
                        </div>
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
