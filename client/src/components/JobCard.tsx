import { Link } from 'wouter';
import { MapPin, Briefcase, Users } from 'lucide-react';
import { Job } from '@/lib/mockData';
import { Button } from '@/components/ui/button';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/jobs/${job.id}`}>
      <a className="block h-full">
        <div className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-shadow h-full flex flex-col hover:border-primary/50">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-1 line-clamp-2">
                {job.title}
              </h3>
              <p className="text-sm text-muted-foreground">{job.company}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
            {job.description}
          </p>

          {/* Details */}
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              <span>{job.city}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Briefcase size={16} className="text-primary" />
              <span>
                {job.jobType === 'full-time'
                  ? 'دوام كامل'
                  : job.jobType === 'part-time'
                    ? 'دوام جزئي'
                    : 'تدريب'}
              </span>
            </div>
            {job.salary && (
              <div className="flex items-center gap-2 text-primary font-semibold">
                <span>💰</span>
                <span>{job.salary}</span>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users size={14} />
              <span>{job.applicantsCount} متقدم</span>
            </div>
            <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10">
              عرض التفاصيل
            </Button>
          </div>
        </div>
      </a>
    </Link>
  );
}
