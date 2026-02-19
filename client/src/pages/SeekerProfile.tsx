import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function SeekerProfile() {
  const { user, role, updateProfile } = useAuth();
  const [, setLocation] = useLocation();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    city: user?.city || '',
  });

  if (role !== 'seeker') {
    setLocation('/login');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateProfile(formData);
    toast.success('تم حفظ التعديلات بنجاح!');
    setIsEditing(false);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/10 to-transparent py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              حسابي الشخصي
            </h1>
            <p className="text-muted-foreground">
              إدارة معلومات حسابك الشخصية
            </p>
          </div>
        </section>

        {/* Profile Content */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-background border border-border rounded-lg p-8">
              {/* Profile Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold">{user?.name}</h2>
                  <p className="text-muted-foreground">{user?.email}</p>
                </div>
                <Button
                  variant={isEditing ? 'outline' : 'default'}
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? 'إلغاء' : 'تعديل'}
                </Button>
              </div>

              {/* Profile Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    الاسم الكامل
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    البريد الإلكتروني
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    رقم الجوال
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    المدينة
                  </label>
                  <Input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>

                {isEditing && (
                  <Button onClick={handleSave} className="w-full">
                    حفظ التعديلات
                  </Button>
                )}
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-lg font-bold mb-4">معلومات إضافية</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">تاريخ الانضمام:</span>
                    <span className="font-medium">منذ فترة قريبة</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">عدد الطلبات:</span>
                    <span className="font-medium">3 طلبات</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">الحالة:</span>
                    <span className="font-medium text-green-600">نشط</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
