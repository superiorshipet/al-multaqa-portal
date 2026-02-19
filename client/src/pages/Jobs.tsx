import { useState } from 'react';
import { mockJobs, cities, jobCategories, jobTypes } from '@/lib/mockData';
import JobCard from '@/components/JobCard';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, X } from 'lucide-react';

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      job.title.includes(searchTerm) ||
      job.company.includes(searchTerm) ||
      job.description.includes(searchTerm);
    const matchesCity = !selectedCity || job.city === selectedCity;
    const matchesJobType = !selectedJobType || job.jobType === selectedJobType;
    const matchesCategory = !selectedCategory || job.category === selectedCategory;

    return matchesSearch && matchesCity && matchesJobType && matchesCategory;
  });

  const hasFilters = searchTerm || selectedCity || selectedJobType || selectedCategory;

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCity('');
    setSelectedJobType('');
    setSelectedCategory('');
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="relative py-8 md:py-12 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/5 to-transparent"></div>
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231F7A5C' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">الوظائف المتاحة</h1>
            <p className="text-muted-foreground">
              ابحث عن الوظيفة المناسبة لك من بين {mockJobs.length} وظيفة
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="relative py-8 sticky top-16 z-40 border-b border-border overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-secondary/30 to-secondary/40"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #1F7A5C 1px, transparent 1px), radial-gradient(circle at 75% 75%, #1F7A5C 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}></div>
          <div className="container mx-auto px-4 relative z-10">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute right-3 top-3 text-muted-foreground" size={20} />
                <Input
                  type="text"
                  placeholder="ابحث عن وظيفة أو شركة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-4 pr-10"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Select value={selectedCity} onValueChange={setSelectedCity}>
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

              <Select value={selectedJobType} onValueChange={setSelectedJobType}>
                <SelectTrigger>
                  <SelectValue placeholder="نوع الدوام" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="التصنيف" />
                </SelectTrigger>
                <SelectContent>
                  {jobCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasFilters && (
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="w-full"
                >
                  <X size={16} className="ml-2" />
                  مسح الفلاتر
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredJobs.length > 0 ? (
              <>
                <p className="text-muted-foreground mb-6">
                  تم العثور على {filteredJobs.length} وظيفة
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">لم يتم العثور على وظائف</h3>
                <p className="text-muted-foreground mb-6">
                  حاول تغيير معايير البحث والفلترة
                </p>
                <Button onClick={clearFilters}>مسح جميع الفلاتر</Button>
              </div>
            )}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
