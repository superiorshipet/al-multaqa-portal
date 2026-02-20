import { Link } from 'react-router';
import { Badge } from './ui/badge';
import { Building2, MapPin, Clock } from 'lucide-react';
import { Job } from '../data/mockData';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">{job.title}</h3>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Building2 className="h-4 w-4" />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{job.city}</span>
            </div>
          </div>
        </div>
        <Badge variant="secondary">{job.type}</Badge>
      </div>

      {job.salary && (
        <div className="mb-4 text-sm">
          <span className="text-muted-foreground">الراتب: </span>
          <span className="font-semibold text-primary">{job.salary}</span>
        </div>
      )}

      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
        {job.description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>نشر في {job.postedDate}</span>
        </div>
        <Link
          to={`/jobs/${job.id}`}
          className="text-sm text-primary hover:underline font-medium"
        >
          عرض التفاصيل ←
        </Link>
      </div>
    </div>
  );
}
