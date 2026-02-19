import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
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
import { cities, jobCategories, jobTypes } from '@/lib/mockData';
import { toast } from 'sonner';

export default function CompanyJobCreate() {
  const { role } = useAuth();
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirements: '',
    city: '',
    jobType: '',
    category: '',
    salary: '',
  });

  if (role !== 'company') {
    setLocation('/company/login');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.city || !formData.jobType || !formData.category) {
      toast.error('يرجى ملء جميع الحقول المطلوبة');
      return;
    }
    toast.success('تم إضافة الوظيفة بنجاح!');
    setLocation('/company/jobs');
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/10 to-transparent py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              إضافة وظيفة جديدة
            </h1>
            <p className="text-muted-foreground">
              أضف وظيفة جديدة لشركتك
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-background border border-border rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    المسمى الوظيفي *
                  </label>
                  <Input
                    type="text"
                    name="title"
                    placeholder="مثال: مهندس برمجيات أول"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    وصف الوظيفة *
                  </label>
                  <Textarea
                    name="description"
                    placeholder="اكتب وصفاً مفصلاً للوظيفة..."
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    المتطلبات *
                  </label>
                  <Textarea
                    name="requirements"
                    placeholder="اكتب المتطلبات مفصولة بأسطر جديدة"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      نوع الدوام *
                    </label>
                    <Select value={formData.jobType} onValueChange={(value) => setFormData(prev => ({ ...prev, jobType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر نوع الدوام" />
                      </SelectTrigger>
                      <SelectContent>
                        {jobTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      التصنيف *
                    </label>
                    <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر التصنيف" />
                      </SelectTrigger>
                      <SelectContent>
                        {jobCategories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      الراتب (اختياري)
                    </label>
                    <Input
                      type="text"
                      name="salary"
                      placeholder="مثال: 5000 - 8000 ريال"
                      value={formData.salary}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    حفظ الوظيفة
                  </Button>
                  <Button type="button" variant="outline" className="flex-1" onClick={() => setLocation('/company/jobs')}>
                    إلغاء
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
