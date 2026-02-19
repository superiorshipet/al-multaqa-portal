export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  description: string;
  requirements: string[];
  city: string;
  jobType: 'full-time' | 'part-time' | 'internship';
  category: string;
  salary?: string;
  postedDate: string;
  applicantsCount: number;
}

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  company: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  appliedDate: string;
  status: 'pending' | 'accepted' | 'rejected' | 'under-review';
  cvUrl?: string;
  coverLetter?: string;
}

export interface Company {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  logo?: string;
  description?: string;
  status: 'pending' | 'approved' | 'rejected';
  registrationDate: string;
}

// Using local image for company logos
const companyLogoUrl = '/images/image.png';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'مهندس برمجيات أول',
    company: 'شركة التقنية المتقدمة',
    companyLogo: companyLogoUrl,
    description: 'نبحث عن مهندس برمجيات ذو خبرة في تطوير تطبيقات الويب والجوال باستخدام التقنيات الحديثة.',
    requirements: [
      'خبرة 3+ سنوات في تطوير البرمجيات',
      'إتقان React و Node.js',
      'معرفة بقواعد البيانات',
      'مهارات اتصال جيدة',
    ],
    city: 'الرياض',
    jobType: 'full-time',
    category: 'برمجة',
    salary: '8000 - 12000 ريال',
    postedDate: '2026-02-15',
    applicantsCount: 24,
  },
  {
    id: '2',
    title: 'مصمم واجهات المستخدم',
    company: 'ستوديو التصميم الإبداعي',
    companyLogo: companyLogoUrl,
    description: 'نبحث عن مصمم UI/UX موهوب لإنشاء تجارب مستخدم استثنائية.',
    requirements: [
      'خبرة في Figma و Adobe XD',
      'فهم عميق لمبادئ التصميم',
      'محفظة قوية',
      'مهارات تصميم متقدمة',
    ],
    city: 'جدة',
    jobType: 'full-time',
    category: 'تصميم',
    salary: '6000 - 9000 ريال',
    postedDate: '2026-02-14',
    applicantsCount: 18,
  },
  {
    id: '3',
    title: 'متخصص محاسبة',
    company: 'شركة الاستشارات المالية',
    companyLogo: companyLogoUrl,
    description: 'نبحث عن محاسب ذو خبرة للعمل في قسم المحاسبة المالية.',
    requirements: [
      'شهادة البكالوريوس في المحاسبة',
      'خبرة 2+ سنوات',
      'معرفة بالأنظمة المحاسبية',
      'إتقان اللغة الإنجليزية',
    ],
    city: 'الدمام',
    jobType: 'full-time',
    category: 'محاسبة',
    salary: '5000 - 7000 ريال',
    postedDate: '2026-02-13',
    applicantsCount: 12,
  },
  {
    id: '4',
    title: 'متدرب تطوير ويب',
    company: 'أكاديمية البرمجة',
    companyLogo: companyLogoUrl,
    description: 'برنامج تدريب مكثف لمتدربين جدد في مجال تطوير الويب.',
    requirements: [
      'شهادة ثانوية على الأقل',
      'شغف بالبرمجة',
      'مهارات أساسية في HTML و CSS',
      'القدرة على التعلم السريع',
    ],
    city: 'الرياض',
    jobType: 'internship',
    category: 'برمجة',
    salary: '2000 - 3000 ريال',
    postedDate: '2026-02-12',
    applicantsCount: 45,
  },
  {
    id: '5',
    title: 'مدير موارد بشرية',
    company: 'شركة الموارد البشرية المتقدمة',
    companyLogo: companyLogoUrl,
    description: 'نبحث عن مدير موارد بشرية ذو خبرة لقيادة فريق الموارد البشرية.',
    requirements: [
      'خبرة 5+ سنوات في إدارة الموارد البشرية',
      'شهادة جامعية في الموارد البشرية',
      'مهارات قيادة قوية',
      'معرفة بالقوانين العمالية',
    ],
    city: 'الرياض',
    jobType: 'full-time',
    category: 'موارد بشرية',
    salary: '10000 - 15000 ريال',
    postedDate: '2026-02-11',
    applicantsCount: 8,
  },
];

export const mockApplications: Application[] = [
  {
    id: '1',
    jobId: '1',
    jobTitle: 'مهندس برمجيات أول',
    company: 'شركة التقنية المتقدمة',
    applicantName: 'أحمد محمد',
    applicantEmail: 'ahmed@example.com',
    applicantPhone: '0501234567',
    appliedDate: '2026-02-18',
    status: 'under-review',
    coverLetter: 'أنا مهتم جداً بهذه الوظيفة...',
  },
  {
    id: '2',
    jobId: '2',
    jobTitle: 'مصمم واجهات المستخدم',
    company: 'ستوديو التصميم الإبداعي',
    applicantName: 'فاطمة علي',
    applicantEmail: 'fatima@example.com',
    applicantPhone: '0559876543',
    appliedDate: '2026-02-17',
    status: 'accepted',
    coverLetter: 'أتطلع للعمل معكم...',
  },
  {
    id: '3',
    jobId: '3',
    jobTitle: 'متخصص محاسبة',
    company: 'شركة الاستشارات المالية',
    applicantName: 'محمود سالم',
    applicantEmail: 'mahmoud@example.com',
    applicantPhone: '0505555555',
    appliedDate: '2026-02-16',
    status: 'pending',
    coverLetter: 'أمتلك الخبرة المطلوبة...',
  },
];

export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'شركة التقنية المتقدمة',
    email: 'info@techco.com',
    phone: '0114567890',
    city: 'الرياض',
    logo: companyLogoUrl,
    description: 'شركة متخصصة في تطوير البرمجيات والحلول التقنية',
    status: 'approved',
    registrationDate: '2025-06-15',
  },
  {
    id: '2',
    name: 'ستوديو التصميم الإبداعي',
    email: 'contact@designstudio.com',
    phone: '0124567890',
    city: 'جدة',
    logo: companyLogoUrl,
    description: 'ستوديو متخصص في التصميم الجرافيكي والواجهات',
    status: 'approved',
    registrationDate: '2025-07-20',
  },
  {
    id: '3',
    name: 'شركة جديدة',
    email: 'new@company.com',
    phone: '0134567890',
    city: 'الدمام',
    description: 'شركة جديدة تبحث عن موظفين',
    status: 'pending',
    registrationDate: '2026-02-10',
  },
];

export const jobCategories = [
  'برمجة',
  'تصميم',
  'محاسبة',
  'موارد بشرية',
  'تسويق',
  'مبيعات',
  'إدارة',
  'تدريب',
];

export const cities = [
  'الرياض',
  'جدة',
  'الدمام',
  'الخبر',
  'الكويت',
  'الدوحة',
  'أبو ظبي',
  'دبي',
];

export const jobTypes = [
  { value: 'full-time', label: 'دوام كامل' },
  { value: 'part-time', label: 'دوام جزئي' },
  { value: 'internship', label: 'تدريب' },
];
