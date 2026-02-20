import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
}

export function StatCard({ title, value, icon: Icon, variant = 'default' }: StatCardProps) {
  const variants = {
    default: 'bg-card border',
    primary: 'bg-primary/10 border-primary/20',
    success: 'bg-green-50 border-green-200',
    warning: 'bg-yellow-50 border-yellow-200',
    danger: 'bg-red-50 border-red-200',
  };

  const iconColors = {
    default: 'text-muted-foreground',
    primary: 'text-primary',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    danger: 'text-red-600',
  };

  return (
    <div className={`${variants[variant]} rounded-lg p-6`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        {Icon && (
          <div className={`${iconColors[variant]} opacity-50`}>
            <Icon className="h-8 w-8" />
          </div>
        )}
      </div>
    </div>
  );
}
