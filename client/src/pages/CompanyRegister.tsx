import { useState } from 'react';
import { useLocation, Link } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cities } from '@/lib/mockData';
import { toast } from 'sonner';

export default function CompanyRegister() {
  const [, setLocation] = useLocation();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    city: '',
    description: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (!formData.companyName || !formData.email || !formData.password || !formData.phone || !formData.city) {
      toast.error('يرجى ملء جميع الحقول المطلوبة');
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('كلمات المرور غير متطابقة');
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      toast.error('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
      setIsLoading(false);
      return;
    }

    // محاكاة تأخير الطلب
    setTimeout(() => {
      register({
        name: formData.companyName,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        role: 'company',
      });
      toast.success('تم إنشاء حساب الشركة بنجاح! جاري انتظار الموافقة من المدير.');
      setLocation('/company/login');
      setIsLoading(false);
    }, 500);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-background border border-border rounded-lg p-8 shadow-sm">
            <h1 className="text-3xl font-bold mb-2 text-center">إنشاء حساب شركة</h1>
            <p className="text-center text-muted-foreground mb-8">
              انضم إلى منصة الملتقى وجد أفضل المواهب
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  اسم الشركة *
                </label>
                <Input
                  type="text"
                  name="companyName"
                  placeholder="اسم الشركة"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  البريد الإلكتروني *
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="company@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    رقم الجوال *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="0501234567"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    المدينة *
                  </label>
                  <Select value={formData.city} onValueChange={(value) => setFormData(prev => ({ ...prev, city: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المدينة" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  وصف الشركة (اختياري)
                </label>
                <Textarea
                  name="description"
                  placeholder="أخبرنا عن شركتك..."
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    كلمة المرور *
                  </label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    تأكيد كلمة المرور *
                  </label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'جاري الإنشاء...' : 'إنشاء حساب الشركة'}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              هل لديك حساب بالفعل؟{' '}
              <Link href="/company/login">
                <a className="text-primary hover:underline font-medium">
                  تسجيل الدخول
                </a>
              </Link>
            </p>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-medium text-blue-900 mb-2">ملاحظة مهمة:</p>
              <p className="text-xs text-blue-800">
                حسابك سيكون قيد الانتظار حتى يتم اعتماده من قبل مدير النظام. ستتلقى إشعاراً عند الموافقة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
