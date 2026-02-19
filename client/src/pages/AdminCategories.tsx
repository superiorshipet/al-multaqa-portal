import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { jobCategories } from '@/lib/mockData';
import { Trash2, Plus } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminCategories() {
  const { role } = useAuth();
  const [, setLocation] = useLocation();
  const [categories, setCategories] = useState(jobCategories);
  const [newCategory, setNewCategory] = useState('');

  if (role !== 'admin') {
    setLocation('/admin/login');
    return null;
  }

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
      toast.success('تم إضافة التصنيف بنجاح');
    }
  };

  const handleDeleteCategory = (index: number) => {
    setCategories(categories.filter((_, i) => i !== index));
    toast.success('تم حذف التصنيف بنجاح');
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-gradient-to-b from-primary/10 to-transparent py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              إدارة التصنيفات
            </h1>
            <p className="text-muted-foreground">
              إدارة تصنيفات الوظائف
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-2xl">
            {/* Add Category Form */}
            <div className="bg-background border border-border rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">إضافة تصنيف جديد</h2>
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="اسم التصنيف الجديد"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleAddCategory();
                    }
                  }}
                />
                <Button onClick={handleAddCategory}>
                  <Plus size={20} className="ml-2" />
                  إضافة
                </Button>
              </div>
            </div>

            {/* Categories List */}
            <div className="bg-background border border-border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/30">
                    <th className="text-right py-4 px-6 font-semibold">اسم التصنيف</th>
                    <th className="text-right py-4 px-6 font-semibold">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category, index) => (
                    <tr key={index} className="border-b border-border hover:bg-secondary/20 transition-colors">
                      <td className="py-4 px-6">
                        <p className="font-medium">{category}</p>
                      </td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => handleDeleteCategory(index)}
                          className="p-2 hover:bg-red-100 rounded-md transition-colors text-red-600"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {categories.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">لا توجد تصنيفات</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
