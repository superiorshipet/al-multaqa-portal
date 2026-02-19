import { useRoute, Link } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { mockApplications, mockJobs } from '@/lib/mockData';
import { ArrowRight, Download } from 'lucide-react';

export default function CompanyApplicants() {
  const [, params] = useRoute('/company/jobs/:id/applicants');
  const { role } = useAuth();

  const job = mockJobs.find((j) => j.id === params?.id);
  const applicants = mockApplications.filter((a) => a.jobId === params?.id);

  if (role !== 'company') {
    return null;
  }

  if (!job) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">الوظيفة غير موجودة</h1>
          <Link href="/company/jobs">
            <Button>العودة للوظائف</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <section className="bg-secondary/30 py-4">
          <div className="container mx-auto px-4 flex items-center gap-2">
            <Link href="/company/jobs">
              <a className="text-primary hover:underline">وظائفي</a>
            </Link>
            <ArrowRight size={16} className="text-muted-foreground" />
            <span className="text-muted-foreground">{job.title}</span>
          </div>
        </section>

        {/* Header */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              المتقدمون للوظيفة
            </h1>
            <p className="text-muted-foreground">
              {job.title} - {applicants.length} متقدم
            </p>
          </div>
        </section>

        {/* Applicants Table */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {applicants.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-right py-4 px-4 font-semibold">اسم المتقدم</th>
                      <th className="text-right py-4 px-4 font-semibold">البريد الإلكتروني</th>
                      <th className="text-right py-4 px-4 font-semibold">الهاتف</th>
                      <th className="text-right py-4 px-4 font-semibold">تاريخ التقديم</th>
                      <th className="text-right py-4 px-4 font-semibold">الحالة</th>
                      <th className="text-right py-4 px-4 font-semibold">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applicants.map((applicant) => (
                      <tr
                        key={applicant.id}
                        className="border-b border-border hover:bg-secondary/30 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <p className="font-semibold">{applicant.applicantName}</p>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-muted-foreground">{applicant.applicantEmail}</p>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-muted-foreground">{applicant.applicantPhone}</p>
                        </td>
                        <td className="py-4 px-4">
                          <p className="text-muted-foreground">{applicant.appliedDate}</p>
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            قيد المراجعة
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <button className="p-2 hover:bg-secondary rounded-md transition-colors">
                              <Download size={18} className="text-primary" />
                            </button>
                            <Button size="sm" variant="outline">
                              تحديث الحالة
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
                <p className="text-muted-foreground mb-4">لا يوجد متقدمون لهذه الوظيفة حتى الآن</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
