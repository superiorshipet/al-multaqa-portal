import { useState } from 'react';
import { useRoute, Link } from 'wouter';
import { mockJobs } from '@/lib/mockData';
import { useAuth } from '@/contexts/AuthContext';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { MapPin, Briefcase, Calendar, Users, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export default function JobDetail() {
  const [, params] = useRoute('/jobs/:id');
  const { user, role } = useAuth();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [coverLetter, setCoverLetter] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);

  const job = mockJobs.find((j) => j.id === params?.id);

  if (!job) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">الوظيفة غير موجودة</h1>
          <Link href="/jobs">
            <Button>العودة للوظائف</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  const handleApply = () => {
    if (!user || role !== 'seeker') {
      toast.error('يجب تسجيل الدخول كباحث عن عمل أولاً');
      return;
    }
    toast.success('تم إرسال طلب التقديم بنجاح!');
    setShowApplicationForm(false);
    setCoverLetter('');
    setCvFile(null);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <section className="bg-secondary/30 py-4">
          <div className="container mx-auto px-4 flex items-center gap-2">
            <Link href="/jobs">
              <a className="text-primary hover:underline">الوظائف</a>
            </Link>
            <ArrowRight size={16} className="text-muted-foreground" />
            <span className="text-muted-foreground">{job.title}</span>
          </div>
        </section>

        {/* Job Header */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              {job.companyLogo && (
                <img
                  src={job.companyLogo}
                  alt={job.company}
                  className="w-24 h-24 rounded-lg object-cover"
                />
              )}
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{job.title}</h1>
                <p className="text-xl text-primary mb-4">{job.company}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} className="text-primary" />
                    <span>{job.city}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase size={16} className="text-primary" />
                    <span>
                      {job.jobType === 'full-time'
                        ? 'دوام كامل'
                        : job.jobType === 'part-time'
                          ? 'دوام جزئي'
                          : 'تدريب'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} className="text-primary" />
                    <span>{job.postedDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users size={16} className="text-primary" />
                    <span>{job.applicantsCount} متقدم</span>
                  </div>
                </div>
              </div>
              {role === 'seeker' && (
                <Button
                  size="lg"
                  onClick={() => setShowApplicationForm(!showApplicationForm)}
                  className="self-start md:self-center"
                >
                  {showApplicationForm ? 'إلغاء' : 'تقديم على الوظيفة'}
                </Button>
              )}
            </div>

            {/* Application Form */}
            {showApplicationForm && role === 'seeker' && (
              <div className="bg-secondary/30 rounded-lg p-6 mb-8 border border-border">
                <h3 className="text-xl font-bold mb-4">نموذج التقديم</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      رسالة التقديم (اختياري)
                    </label>
                    <Textarea
                      placeholder="أخبرنا عن نفسك وعن اهتمامك بهذه الوظيفة..."
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                      rows={4}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      السيرة الذاتية
                    </label>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setCvFile(e.target.files?.[0] || null)}
                    />
                  </div>
                  <Button onClick={handleApply} className="w-full">
                    إرسال الطلب
                  </Button>
                </div>
              </div>
            )}

            {!user && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <p className="text-blue-900 mb-4">
                  يجب تسجيل الدخول لتقديم طلب على هذه الوظيفة
                </p>
                <Link href="/login">
                  <Button>تسجيل الدخول</Button>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Job Details */}
        <section className="py-8 border-t border-border">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">وصف الوظيفة</h2>
                <p className="text-muted-foreground whitespace-pre-wrap">{job.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">المتطلبات</h2>
                <ul className="space-y-2">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-secondary/30 rounded-lg p-6 border border-border sticky top-24">
                <h3 className="text-lg font-bold mb-4">معلومات الوظيفة</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">التصنيف</p>
                    <p className="font-semibold">{job.category}</p>
                  </div>
                  {job.salary && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">الراتب</p>
                      <p className="font-semibold text-primary">{job.salary}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">تاريخ النشر</p>
                    <p className="font-semibold">{job.postedDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">عدد المتقدمين</p>
                    <p className="font-semibold">{job.applicantsCount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
