import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { categories } from '../../data/mockData';
import { Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';

export function AdminCategories() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">إدارة التصنيفات</h1>
            <p className="text-muted-foreground">إضافة وتعديل تصنيفات الوظائف</p>
          </div>
          <Button onClick={() => setShowAddForm(!showAddForm)}>
            {showAddForm ? 'إلغاء' : 'إضافة تصنيف جديد'}
          </Button>
        </div>

        {/* Add Category Form */}
        {showAddForm && (
          <div className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">إضافة تصنيف جديد</h2>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              setShowAddForm(false);
            }}>
              <div>
                <Label htmlFor="categoryName">اسم التصنيف</Label>
                <Input
                  id="categoryName"
                  placeholder="مثال: التصميم والإبداع"
                  required
                />
              </div>
              <div className="flex gap-3">
                <Button type="submit">حفظ</Button>
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                  إلغاء
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Categories List */}
        <div className="bg-card border rounded-lg p-6">
          <div className="space-y-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50"
              >
                <div className="flex-1">
                  <h3 className="font-bold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.jobsCount} وظيفة
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
