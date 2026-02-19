import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { user, role, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getNavItems = () => {
    if (role === 'guest') {
      return [
        { label: 'الرئيسية', href: '/' },
        { label: 'الوظائف', href: '/jobs' },
        { label: 'تسجيل الدخول', href: '/login' },
        { label: 'إنشاء حساب', href: '/register' },
      ];
    }
    if (role === 'seeker') {
      return [
        { label: 'الرئيسية', href: '/' },
        { label: 'الوظائف', href: '/jobs' },
        { label: 'طلباتي', href: '/seeker/applications' },
        { label: 'حسابي', href: '/seeker/profile' },
      ];
    }
    if (role === 'company') {
      return [
        { label: 'لوحة الشركة', href: '/company/dashboard' },
        { label: 'وظائفي', href: '/company/jobs' },
        { label: 'إضافة وظيفة', href: '/company/jobs/create' },
      ];
    }
    if (role === 'admin') {
      return [
        { label: 'لوحة المدير', href: '/admin/dashboard' },
        { label: 'الشركات', href: '/admin/companies' },
        { label: 'الوظائف', href: '/admin/jobs' },
        { label: 'التصنيفات', href: '/admin/categories' },
      ];
    }
    return [];
  };

  const navItems = getNavItems();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                  م
                </div>
                <span>الملتقى</span>
              </a>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a className="px-4 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors">
                    {item.label}
                  </a>
                </Link>
              ))}
            </nav>

            {/* Logout Button */}
            {user && (
              <div className="hidden md:flex items-center gap-4">
                <span className="text-sm text-muted-foreground">{user.name}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    logout();
                  }}
                >
                  تسجيل الخروج
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-2 border-t border-border pt-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className="px-4 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              {user && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                >
                  تسجيل الخروج
                </Button>
              )}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">منصة الملتقى</h3>
              <p className="text-sm text-muted-foreground">
                منصة توظيف حديثة تربط الشركات بأفضل المواهب في المنطقة.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">للباحثين</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/jobs"><a className="hover:text-primary">تصفح الوظائف</a></Link></li>
                <li><Link href="/register"><a className="hover:text-primary">إنشاء حساب</a></Link></li>
                <li><Link href="/login"><a className="hover:text-primary">تسجيل الدخول</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">للشركات</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/company/login"><a className="hover:text-primary">دخول الشركات</a></Link></li>
                <li><Link href="/company/register"><a className="hover:text-primary">إنشاء حساب شركة</a></Link></li>
                <li><a href="#" className="hover:text-primary">عن الخدمة</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">التواصل</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>البريد: info@almultaqa.com</li>
                <li>الهاتف: +966 11 4567890</li>
                <li>العنوان: الرياض، السعودية</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 منصة الملتقى. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
