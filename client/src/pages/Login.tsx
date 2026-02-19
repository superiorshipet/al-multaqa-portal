import { useState } from 'react';
import { useLocation, Link } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function Login() {
  const [, setLocation] = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // محاكاة تأخير الطلب
    setTimeout(() => {
      if (email && password) {
        login(email, password, 'seeker');
        toast.success('تم تسجيل الدخول بنجاح!');
        setLocation('/');
      } else {
        toast.error('يرجى ملء جميع الحقول');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <MainLayout>
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center py-12 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F7A5C' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        {/* Decorative circles */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        
        <div className="w-full max-w-md relative z-10">
          <div className="bg-background/80 backdrop-blur-md border border-border rounded-2xl p-8 shadow-xl">
            <h1 className="text-3xl font-bold mb-2 text-center">تسجيل الدخول</h1>
            <p className="text-center text-muted-foreground mb-8">
              ادخل بيانات حسابك للمتابعة
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  البريد الإلكتروني
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  كلمة المرور
                </label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'جاري التحميل...' : 'تسجيل الدخول'}
              </Button>
            </form>

            <div className="mt-6 space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-background text-muted-foreground">
                    أو
                  </span>
                </div>
              </div>

              <Link href="/company/login">
                <Button variant="outline" className="w-full">
                  دخول الشركات
                </Button>
              </Link>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              ليس لديك حساب؟{' '}
              <Link href="/register">
                <a className="text-primary hover:underline font-medium">
                  إنشاء حساب جديد
                </a>
              </Link>
            </p>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-medium text-blue-900 mb-2">بيانات تجريبية:</p>
              <p className="text-xs text-blue-800">البريد: seeker@example.com</p>
              <p className="text-xs text-blue-800">كلمة المرور: أي كلمة</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
