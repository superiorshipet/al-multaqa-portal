import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('تم إرسال رسالتك بنجاح!');
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">تواصل معنا</h1>
          <p className="text-muted-foreground text-lg">
            نحن هنا للإجابة على استفساراتك ومساعدتك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">الاسم</Label>
                <Input id="name" placeholder="اسمك الكامل" required />
              </div>
              <div>
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <Label htmlFor="subject">الموضوع</Label>
                <Input id="subject" placeholder="موضوع الرسالة" required />
              </div>
              <div>
                <Label htmlFor="message">الرسالة</Label>
                <Textarea
                  id="message"
                  placeholder="اكتب رسالتك هنا..."
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                إرسال الرسالة
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">معلومات الاتصال</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">البريد الإلكتروني</h3>
                    <p className="text-muted-foreground">info@multaqa.sa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">الهاتف</h3>
                    <p className="text-muted-foreground">920012345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">العنوان</h3>
                    <p className="text-muted-foreground">
                      الرياض، المملكة العربية السعودية
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <h3 className="font-bold mb-3">ساعات العمل</h3>
              <p className="text-muted-foreground">
                الأحد - الخميس: 9:00 صباحاً - 5:00 مساءً
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
