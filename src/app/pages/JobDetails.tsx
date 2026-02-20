import { useParams, Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { jobs } from '../data/mockData';
import { Building2, MapPin, Clock, Briefcase, AlertCircle } from 'lucide-react';
import { useUser } from '../context/UserContext';

export function JobDetails() {
  const { id } = useParams();
  const { userType } = useUser();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">الوظيفة غير موجودة</h1>
          <p className="text-muted-foreground mb-6">لم نتمكن من العثور على الوظيفة المطلوبة</p>
          <Button asChild>
            <Link to="/jobs">العودة إلى الوظائف</Link>
          </Button>
        </div>
      </div>
    );
  }

  const canApply = userType === 'seeker';

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">الرئيسية</Link>
          {' / '}
          <Link to="/jobs" className="hover:text-primary">الوظائف</Link>
          {' / '}
          <span className="text-foreground">{job.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <div className="bg-card border rounded-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                  <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      <span>{job.city}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      <Badge variant="secondary">{job.type}</Badge>
                    </div>
                  </div>
                  {job.salary && (
                    <div className="text-lg">
                      <span className="text-muted-foreground">الراتب: </span>
                      <span className="font-bold text-primary">{job.salary}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t">
                <Clock className="h-4 w-4" />
                <span>نشر في {job.postedDate}</span>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-card border rounded-lg p-8">
              <h2 className="text-xl font-bold mb-4">الوصف الوظيفي</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {job.description}
              </p>
            </div>

            {/* Job Requirements */}
            <div className="bg-card border rounded-lg p-8">
              <h2 className="text-xl font-bold mb-4">المتطلبات</h2>
              <ul className="space-y-3">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border rounded-lg p-6 sticky top-20 space-y-6">
              {/* Company Info */}
              <div>
                <h3 className="font-bold mb-4">معلومات الشركة</h3>
                <div className="space-y-3">
                  <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-bold">{job.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      شركة رائدة في مجال التقنية والابتكار
                    </p>
                  </div>
                </div>
              </div>

              {/* Apply Section */}
              <div className="pt-6 border-t space-y-4">
                {canApply ? (
                  <Button className="w-full" size="lg">
                    تقديم على هذه الوظيفة
                  </Button>
                ) : (
                  <>
                    <Button className="w-full" size="lg" disabled>
                      تقديم على هذه الوظيفة
                    </Button>
                    <div className="flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                      <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-yellow-800">
                        يرجى تسجيل الدخول كباحث عن عمل للتقديم على هذه الوظيفة
                      </p>
                    </div>
                  </>
                )}
                
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/jobs">العودة إلى الوظائف</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
