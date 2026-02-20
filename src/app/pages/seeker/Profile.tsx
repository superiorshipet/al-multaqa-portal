import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { cities } from '../../data/mockData';

export function SeekerProfile() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">حسابي</h1>
          <p className="text-muted-foreground">إدارة معلومات حسابك الشخصي</p>
        </div>

        <div className="bg-card border rounded-lg p-8 space-y-8">
          {/* Personal Information */}
          <div>
            <h2 className="text-xl font-bold mb-6">المعلومات الشخصية</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">الاسم الكامل</Label>
                <Input
                  id="fullName"
                  placeholder="أدخل اسمك الكامل"
                  defaultValue="محمد أحمد الغامدي"
                />
              </div>

              <div>
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="البريد الإلكتروني"
                  defaultValue="mohammed@example.com"
                />
              </div>

              <div>
                <Label htmlFor="phone">رقم الجوال</Label>
                <Input
                  id="phone"
                  placeholder="05xxxxxxxx"
                  defaultValue="0501234567"
                />
              </div>

              <div>
                <Label htmlFor="city">المدينة</Label>
                <Select defaultValue="الرياض">
                  <SelectTrigger id="city">
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
          </div>

          {/* Password Change */}
          <div className="pt-8 border-t">
            <h2 className="text-xl font-bold mb-6">تغيير كلمة المرور</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="currentPassword">كلمة المرور الحالية</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  placeholder="أدخل كلمة المرور الحالية"
                />
              </div>

              <div>
                <Label htmlFor="newPassword">كلمة المرور الجديدة</Label>
                <Input
                  id="newPassword"
                  type="password"
                  placeholder="أدخل كلمة المرور الجديدة"
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="أعد إدخال كلمة المرور الجديدة"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-6 border-t">
            <Button size="lg">حفظ التغييرات</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
