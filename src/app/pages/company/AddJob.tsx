import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { cities, jobTypes, categories } from '../../data/mockData';
import { useNavigate } from 'react-router';

export function AddJob() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, save the job here
    navigate('/company/jobs');
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">إضافة وظيفة جديدة</h1>
          <p className="text-muted-foreground">قم بملء البيانات لنشر وظيفة جديدة</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border rounded-lg p-8 space-y-6">
          {/* Job Title */}
          <div>
            <Label htmlFor="title">المسمى الوظيفي *</Label>
            <Input
              id="title"
              placeholder="مثال: مطور واجهات أمامية"
              required
            />
          </div>

          {/* City */}
          <div>
            <Label htmlFor="city">المدينة *</Label>
            <Select required>
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

          {/* Job Type */}
          <div>
            <Label htmlFor="type">نوع الدوام *</Label>
            <Select required>
              <SelectTrigger id="type">
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

          {/* Category */}
          <div>
            <Label htmlFor="category">تصنيف الوظيفة *</Label>
            <Select required>
              <SelectTrigger id="category">
                <SelectValue placeholder="اختر التصنيف" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Salary */}
          <div>
            <Label htmlFor="salary">الراتب (اختياري)</Label>
            <Input
              id="salary"
              placeholder="مثال: 8,000 - 12,000 ريال"
            />
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description">الوصف الوظيفي *</Label>
            <Textarea
              id="description"
              placeholder="اكتب وصف تفصيلي للوظيفة..."
              rows={6}
              required
            />
          </div>

          {/* Requirements */}
          <div>
            <Label htmlFor="requirements">المتطلبات *</Label>
            <Textarea
              id="requirements"
              placeholder="اكتب المتطلبات، كل متطلب في سطر جديد..."
              rows={6}
              required
            />
            <p className="text-sm text-muted-foreground mt-1">
              اكتب كل متطلب في سطر منفصل
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-6 border-t">
            <Button type="submit" size="lg">
              نشر الوظيفة
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => navigate('/company/jobs')}
            >
              إلغاء
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
