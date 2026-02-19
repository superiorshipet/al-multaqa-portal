import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Briefcase, Users, TrendingUp } from 'lucide-react';
import { mockJobs } from '@/lib/mockData';
import JobCard from '@/components/JobCard';
import MainLayout from '@/layouts/MainLayout';

export default function Home() {
  const featuredJobs = mockJobs.slice(0, 3);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              منصة الملتقى للتوظيف
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              ربط الشركات بأفضل المواهب والباحثين عن عمل بفرص وظيفية مميزة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/jobs">
                <Button size="lg" className="w-full sm:w-auto">
                  تصفح الوظائف
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  إنشاء حساب
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Briefcase className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">120+</h3>
              <p className="text-muted-foreground">وظيفة متاحة</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">45+</h3>
              <p className="text-muted-foreground">شركة موثوقة</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">980+</h3>
              <p className="text-muted-foreground">طلب توظيف</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">الوظائف المميزة</h2>
            <p className="text-muted-foreground text-lg">
              اكتشف أفضل الفرص الوظيفية المتاحة حالياً
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/jobs">
              <Button variant="outline" size="lg">
                عرض جميع الوظائف
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">كيف تعمل المنصة؟</h2>
            <p className="text-muted-foreground text-lg">
              خطوات بسيطة للعثور على الوظيفة المناسبة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">إنشاء حساب</h3>
              <p className="text-muted-foreground">
                قم بإنشاء حساب مجاني وأكمل ملفك الشخصي
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">تصفح الوظائف</h3>
              <p className="text-muted-foreground">
                ابحث عن الوظائف المناسبة حسب تخصصك والمدينة
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">قدم على الوظيفة</h3>
              <p className="text-muted-foreground">
                قدم على الوظائف وتابع حالة طلبات التقديم
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            هل أنت شركة تبحث عن موظفين؟
          </h2>
          <p className="text-lg mb-8 opacity-90">
            انضم إلى منصة الملتقى وجد أفضل المواهب لشركتك
          </p>
          <Link href="/company/login">
            <Button size="lg" variant="secondary">
              دخول الشركات
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
