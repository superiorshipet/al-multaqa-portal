import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Briefcase, Building2, RefreshCw, Search, FileCheck, Bell } from 'lucide-react';

const heroImageUrl = 'https://images.unsplash.com/photo-1758798219572-512a03a60ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYXVkaSUyMEFyYWJpYSUyMGNpdHklMjBza3lsaW5lJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MTUzNTE0MHww&ixlib=rb-4.1.0&q=80&w=1080';

export function Home() {
  const stats = [
    { label: 'أكثر من 120 وظيفة نشطة', icon: Briefcase },
    { label: '45 شركة مسجلة', icon: Building2 },
    { label: 'تحديث يومي للفرص', icon: RefreshCw },
  ];

  const steps = [
    {
      number: '1',
      title: 'إنشاء حساب',
      description: 'سجل حسابك كباحث عن عمل في دقائق معدودة',
      icon: FileCheck,
    },
    {
      number: '2',
      title: 'تصفح الوظائف',
      description: 'استعرض مئات الفرص الوظيفية المتاحة',
      icon: Search,
    },
    {
      number: '3',
      title: 'التقديم على الوظيفة',
      description: 'قدم على الوظائف المناسبة بنقرة واحدة',
      icon: Briefcase,
    },
    {
      number: '4',
      title: 'تتبع حالة طلبك',
      description: 'راقب حالة طلباتك من لوحة التحكم',
      icon: Bell,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/40"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block bg-white/95 text-primary px-6 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">ابحث عن وظيفتك الآن</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              فرص وظيفية أقرب… وخطوات تقديم أسهل
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              منصة الملتقى تساعدك في العثور على وظائف مناسبة، وتتيح للشركات إدارة طلبات 
              التقديم بسهولة وشفافية.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/jobs">استعراض الوظائف</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/jobs">إنشاء حساب باحث عن عمل</Link>
              </Button>
            </div>

            {/* Statistics */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 flex items-center gap-2"
                >
                  <stat.icon className="h-5 w-5 text-white" />
                  <span className="text-white text-sm font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">كيف تعمل منصة الملتقى؟</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              خطوات بسيطة للوصول إلى وظيفة أحلامك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            هل أنت شركة تبحث عن موظفين؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            انضم إلى منصة الملتقى وابدأ في نشر الوظائف واستقبال طلبات المتقدمين
          </p>
          <Button asChild size="lg">
            <Link to="/company/dashboard">تسجيل حساب شركة</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
