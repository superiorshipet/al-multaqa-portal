import { Link, useNavigate } from 'react-router';
import { Button } from './ui/button';
import { useUser } from '../context/UserContext';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const { userType, setUserType, isLoggedIn } = useUser();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    setUserType('guest');
    navigate('/');
  };

  const handleCompanyLogin = () => {
    setUserType('company');
    navigate('/company/dashboard');
  };

  const handleSeekerSignup = () => {
    setUserType('seeker');
    navigate('/seeker/dashboard');
  };

  const handleAdminAccess = () => {
    setUserType('admin');
    navigate('/admin/dashboard');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Right side in RTL */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full">
                <span className="font-bold text-lg">منصة ملتقى</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex items-center gap-8">
            {!isLoggedIn && (
              <>
                <Link to="/" className="text-foreground hover:text-primary transition-colors">
                  الرئيسية
                </Link>
                <Link to="/jobs" className="text-foreground hover:text-primary transition-colors">
                  الوظائف
                </Link>
                <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                  عن المنصة
                </Link>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                  تواصل معنا
                </Link>
              </>
            )}

            {userType === 'seeker' && (
              <>
                <Link to="/jobs" className="text-foreground hover:text-primary transition-colors">
                  الوظائف
                </Link>
                <Link to="/seeker/applications" className="text-foreground hover:text-primary transition-colors">
                  طلباتي
                </Link>
                <Link to="/seeker/profile" className="text-foreground hover:text-primary transition-colors">
                  حسابي
                </Link>
              </>
            )}

            {userType === 'company' && (
              <>
                <Link to="/company/dashboard" className="text-foreground hover:text-primary transition-colors">
                  لوحة الشركة
                </Link>
                <Link to="/company/jobs" className="text-foreground hover:text-primary transition-colors">
                  وظائفي
                </Link>
                <Link to="/company/add-job" className="text-foreground hover:text-primary transition-colors">
                  إضافة وظيفة
                </Link>
              </>
            )}

            {userType === 'admin' && (
              <>
                <Link to="/admin/dashboard" className="text-foreground hover:text-primary transition-colors">
                  لوحة المدير
                </Link>
                <Link to="/admin/companies" className="text-foreground hover:text-primary transition-colors">
                  الشركات
                </Link>
                <Link to="/admin/jobs" className="text-foreground hover:text-primary transition-colors">
                  الوظائف
                </Link>
                <Link to="/admin/categories" className="text-foreground hover:text-primary transition-colors">
                  التصنيفات
                </Link>
              </>
            )}
          </div>

          {/* Auth Buttons - Left side in RTL */}
          <div className="hidden md:flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                <Button variant="outline" onClick={handleCompanyLogin}>
                  دخول حساب شركة
                </Button>
                <Button onClick={handleSeekerSignup}>
                  إنشاء حساب باحث
                </Button>
                {/* Hidden admin button for demo */}
                <button
                  onClick={handleAdminAccess}
                  className="text-xs text-muted-foreground opacity-30 hover:opacity-100"
                >
                  مدير
                </button>
              </>
            ) : (
              <Button variant="outline" onClick={handleLogout}>
                تسجيل الخروج
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-3">
            {!isLoggedIn && (
              <>
                <Link to="/" className="block py-2 text-foreground hover:text-primary">
                  الرئيسية
                </Link>
                <Link to="/jobs" className="block py-2 text-foreground hover:text-primary">
                  الوظائف
                </Link>
                <Link to="/about" className="block py-2 text-foreground hover:text-primary">
                  عن المنصة
                </Link>
                <Link to="/contact" className="block py-2 text-foreground hover:text-primary">
                  تواصل معنا
                </Link>
                <div className="pt-3 space-y-2">
                  <Button variant="outline" className="w-full" onClick={handleCompanyLogin}>
                    دخول حساب شركة
                  </Button>
                  <Button className="w-full" onClick={handleSeekerSignup}>
                    إنشاء حساب باحث
                  </Button>
                </div>
              </>
            )}

            {userType === 'seeker' && (
              <>
                <Link to="/jobs" className="block py-2 text-foreground hover:text-primary">
                  الوظائف
                </Link>
                <Link to="/seeker/applications" className="block py-2 text-foreground hover:text-primary">
                  طلباتي
                </Link>
                <Link to="/seeker/profile" className="block py-2 text-foreground hover:text-primary">
                  حسابي
                </Link>
                <Button variant="outline" className="w-full mt-3" onClick={handleLogout}>
                  تسجيل الخروج
                </Button>
              </>
            )}

            {userType === 'company' && (
              <>
                <Link to="/company/dashboard" className="block py-2 text-foreground hover:text-primary">
                  لوحة الشركة
                </Link>
                <Link to="/company/jobs" className="block py-2 text-foreground hover:text-primary">
                  وظائفي
                </Link>
                <Link to="/company/add-job" className="block py-2 text-foreground hover:text-primary">
                  إضافة وظيفة
                </Link>
                <Button variant="outline" className="w-full mt-3" onClick={handleLogout}>
                  تسجيل الخروج
                </Button>
              </>
            )}

            {userType === 'admin' && (
              <>
                <Link to="/admin/dashboard" className="block py-2 text-foreground hover:text-primary">
                  لوحة المدير
                </Link>
                <Link to="/admin/companies" className="block py-2 text-foreground hover:text-primary">
                  الشركات
                </Link>
                <Link to="/admin/jobs" className="block py-2 text-foreground hover:text-primary">
                  الوظائف
                </Link>
                <Link to="/admin/categories" className="block py-2 text-foreground hover:text-primary">
                  التصنيفات
                </Link>
                <Button variant="outline" className="w-full mt-3" onClick={handleLogout}>
                  تسجيل الخروج
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
