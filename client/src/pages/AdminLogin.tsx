import { useState } from 'react';
import { useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      if (email && password) {
        login(email, password, 'admin');
        toast.success('تم تسجيل الدخول بنجاح!');
        setLocation('/admin/dashboard');
      } else {
        toast.error('يرجى ملء جميع الحقول');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-background border border-border rounded-lg p-8 shadow-sm">
            <h1 className="text-3xl font-bold mb-2 text-center">تسجيل دخول المدير</h1>
            <p className="text-center text-muted-foreground mb-8">
              ادخل بيانات حسابك الإداري
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  البريد الإلكتروني
                </label>
                <Input
                  type="email"
                  placeholder="admin@email.com"
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

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-medium text-blue-900 mb-2">بيانات تجريبية:</p>
              <p className="text-xs text-blue-800">البريد: admin@example.com</p>
              <p className="text-xs text-blue-800">كلمة المرور: أي كلمة</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
