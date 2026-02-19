import { useState } from 'react';
import { useLocation, Link } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import backgroundImage from '@/images/image.png';

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
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url(${backgroundImage})`,
        }}></div>
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/90"></div>
        
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
