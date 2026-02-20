import { useState } from 'react';
import { JobCard } from '../components/JobCard';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { jobs, cities, jobTypes, categories } from '../data/mockData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Jobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = selectedCity === 'all' || job.city === selectedCity;
    const matchesType = selectedType === 'all' || job.type === jobTypes.find(t => t.value === selectedType)?.label;
    const matchesCategory = selectedCategory === 'all' || job.categoryId === selectedCategory;

    return matchesSearch && matchesCity && matchesType && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">الوظائف المتاحة</h1>
          <p className="text-muted-foreground">تصفح جميع الفرص الوظيفية المتاحة</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-card border rounded-lg p-6 sticky top-20">
              <h2 className="font-bold text-lg mb-6">تصفية النتائج</h2>

              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium mb-2">البحث عن وظيفة</label>
                  <Input
                    placeholder="ابحث..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* City Filter */}
                <div>
                  <label className="block text-sm font-medium mb-2">المدينة</label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المدينة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع المدن</SelectItem>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Job Type Filter */}
                <div>
                  <label className="block text-sm font-medium mb-2">نوع الدوام</label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر نوع الدوام" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع الأنواع</SelectItem>
                      {jobTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium mb-2">تصنيف الوظيفة</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر التصنيف" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع التصنيفات</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full" onClick={() => {
                  setSearchQuery('');
                  setSelectedCity('all');
                  setSelectedType('all');
                  setSelectedCategory('all');
                }}>
                  إعادة تعيين الفلاتر
                </Button>
              </div>
            </div>
          </aside>

          {/* Jobs List */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                تم العثور على {filteredJobs.length} وظيفة
              </p>
            </div>

            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))
              ) : (
                <div className="text-center py-12 bg-card border rounded-lg">
                  <p className="text-muted-foreground text-lg">لا توجد وظائف متاحة بناءً على الفلاتر المحددة</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredJobs.length > 0 && (
              <div className="flex justify-center gap-2 mt-8">
                <Button variant="outline" size="sm">
                  <ChevronRight className="h-4 w-4 ml-1" />
                  السابق
                </Button>
                <Button variant="outline" size="sm">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  التالي
                  <ChevronLeft className="h-4 w-4 mr-1" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
