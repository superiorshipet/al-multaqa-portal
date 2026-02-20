import { StatCard } from '../../components/StatCard';
import { Building2, Briefcase, Users, FolderOpen } from 'lucide-react';
import { companies, jobs, applications, categories } from '../../data/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function AdminDashboard() {
  const chartData = categories.map(cat => ({
    name: cat.name,
    jobs: cat.jobsCount,
  }));

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">لوحة المدير</h1>
          <p className="text-muted-foreground">نظرة عامة على المنصة</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="إجمالي الشركات"
            value={companies.length}
            icon={Building2}
            variant="primary"
          />
          <StatCard
            title="إجمالي الوظائف"
            value={jobs.length}
            icon={Briefcase}
            variant="primary"
          />
          <StatCard
            title="إجمالي المتقدمين"
            value={applications.length}
            icon={Users}
            variant="success"
          />
          <StatCard
            title="التصنيفات"
            value={categories.length}
            icon={FolderOpen}
            variant="default"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Jobs by Category Chart */}
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6">الوظائف حسب التصنيف</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="jobs" fill="#059669" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activity */}
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6">الإحصائيات السريعة</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-muted-foreground">شركات بانتظار الموافقة</span>
                <span className="font-bold text-lg text-yellow-600">
                  {companies.filter(c => c.status === 'pending').length}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-muted-foreground">شركات معتمدة</span>
                <span className="font-bold text-lg text-green-600">
                  {companies.filter(c => c.status === 'approved').length}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b">
                <span className="text-muted-foreground">وظائف نشطة</span>
                <span className="font-bold text-lg text-primary">
                  {jobs.filter(j => j.status === 'active').length}
                </span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-muted-foreground">متوسط الطلبات/وظيفة</span>
                <span className="font-bold text-lg">
                  {Math.round(applications.length / jobs.length)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
