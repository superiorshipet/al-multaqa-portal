import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Briefcase, Users, TrendingUp } from 'lucide-react';
import { mockJobs } from '@/lib/mockData';
import JobCard from '@/components/JobCard';
import MainLayout from '@/layouts/MainLayout';
import backgroundImage from '@/images/image.png';

export default function Home() {
  const featuredJobs = mockJobs.slice(0, 3);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-16 md:py-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url(${backgroundImage})`,
        }}></div>
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              منصة الملتقى للتوظيف
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              ربط الشركات بأفضل المواهب والباحثين عن عمل بفرص وظيفية مميزة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/jobs">
                <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                  تصفح الوظائف
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                  إنشاء حساب
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-secondary/20 to-secondary/40"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #1F7A5C 2px, transparent 2px), radial-gradient(circle at 75% 75%, #1F7A5C 2px, transparent 2px)`,
          backgroundSize: '40px 40px',
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">120+</h3>
              <p className="text-muted-foreground">وظيفة متاحة</p>
            </div>
            <div className="text-center bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">45+</h3>
              <p className="text-muted-foreground">شركة موثوقة</p>
            </div>
            <div className="text-center bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">980+</h3>
              <p className="text-muted-foreground">طلب توظيف</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
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
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                عرض جميع الوظائف
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Background with pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-secondary/20 to-secondary/30"></div>
        <div className="absolute inset-0 opacity-25" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H22v-2h-2z' fill='%231F7A5C' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">كيف تعمل المنصة؟</h2>
            <p className="text-muted-foreground text-lg">
              خطوات بسيطة للعثور على الوظيفة المناسبة
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 text-white rounded-xl flex items-center justify-center font-bold mb-4 text-xl shadow-md">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">إنشاء حساب</h3>
              <p className="text-muted-foreground">
                قم بإنشاء حساب مجاني وأكمل ملفك الشخصي
              </p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 text-white rounded-xl flex items-center justify-center font-bold mb-4 text-xl shadow-md">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">تصفح الوظائف</h3>
              <p className="text-muted-foreground">
                ابحث عن الوظائف المناسبة حسب تخصصك والمدينة
              </p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 text-white rounded-xl flex items-center justify-center font-bold mb-4 text-xl shadow-md">
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
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            هل أنت شركة تبحث عن موظفين؟
          </h2>
          <p className="text-lg mb-8 text-white/90">
            انضم إلى منصة الملقى وجد أفضل المواهب لشركتك
          </p>
          <Link href="/company/login">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg">
              دخول الشركات
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
