export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  city: string;
  type: string;
  salary?: string;
  description: string;
  requirements: string[];
  status: 'active' | 'inactive' | 'pending';
  postedDate: string;
  categoryId: string;
}

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  company: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  date: string;
  status: 'pending' | 'accepted' | 'rejected';
  resume?: string;
}

export interface Company {
  id: string;
  name: string;
  email: string;
  status: 'pending' | 'approved' | 'rejected';
  jobsCount: number;
  joinDate: string;
}

export interface Category {
  id: string;
  name: string;
  jobsCount: number;
}

export const cities = [
  'الرياض',
  'جدة',
  'الدمام',
  'مكة المكرمة',
  'المدينة المنورة',
  'الخبر',
  'الطائف',
  'تبوك',
  'أبها',
  'بريدة',
];

export const jobTypes = [
  { value: 'full-time', label: 'دوام كامل' },
  { value: 'part-time', label: 'دوام جزئي' },
  { value: 'internship', label: 'تدريب' },
  { value: 'contract', label: 'عقد مؤقت' },
];

export const categories: Category[] = [
  { id: '1', name: 'البرمجة وتقنية المعلومات', jobsCount: 45 },
  { id: '2', name: 'المحاسبة والمالية', jobsCount: 23 },
  { id: '3', name: 'الموارد البشرية', jobsCount: 18 },
  { id: '4', name: 'التسويق والمبيعات', jobsCount: 34 },
  { id: '5', name: 'الهندسة', jobsCount: 28 },
  { id: '6', name: 'الخدمات الطبية', jobsCount: 19 },
];

export const jobs: Job[] = [
  {
    id: '1',
    title: 'مطور واجهات أمامية - React',
    company: 'شركة التقنية المتقدمة',
    city: 'الرياض',
    type: 'دوام كامل',
    salary: '8,000 - 12,000 ريال',
    description: 'نبحث عن مطور واجهات أمامية ذو خبرة في React و TypeScript للانضمام إلى فريقنا المتنامي. ستكون مسؤولاً عن تطوير وصيانة تطبيقات الويب الحديثة.',
    requirements: [
      'خبرة لا تقل عن 3 سنوات في React',
      'إتقان TypeScript و JavaScript الحديث',
      'خبرة في Tailwind CSS أو CSS-in-JS',
      'فهم جيد لـ RESTful APIs',
      'القدرة على العمل ضمن فريق',
    ],
    status: 'active',
    postedDate: '2026-02-15',
    categoryId: '1',
  },
  {
    id: '2',
    title: 'محاسب قانوني',
    company: 'مكتب الاستشارات المالية',
    city: 'جدة',
    type: 'دوام كامل',
    salary: '7,000 - 10,000 ريال',
    description: 'مطلوب محاسب قانوني للعمل في مكتب استشارات مالية رائد. سيكون المرشح مسؤولاً عن إعداد القوائم المالية والتدقيق.',
    requirements: [
      'شهادة بكالوريوس في المحاسبة',
      'ترخيص SOCPA',
      'خبرة 2-5 سنوات',
      'إتقان برامج المحاسبة',
      'مهارات تحليلية قوية',
    ],
    status: 'active',
    postedDate: '2026-02-14',
    categoryId: '2',
  },
  {
    id: '3',
    title: 'مدير موارد بشرية',
    company: 'المجموعة التجارية الدولية',
    city: 'الرياض',
    type: 'دوام كامل',
    salary: '10,000 - 15,000 ريال',
    description: 'نبحث عن مدير موارد بشرية محترف لقيادة قسم الموارد البشرية وتطوير استراتيجيات الموظفين.',
    requirements: [
      'خبرة لا تقل عن 5 سنوات في الموارد البشرية',
      'شهادة في إدارة الموارد البشرية',
      'مهارات قيادية قوية',
      'إتقان أنظمة HRIS',
      'معرفة بقوانين العمل السعودية',
    ],
    status: 'active',
    postedDate: '2026-02-13',
    categoryId: '3',
  },
  {
    id: '4',
    title: 'أخصائي تسويق رقمي',
    company: 'وكالة الإبداع الرقمي',
    city: 'الدمام',
    type: 'دوام كامل',
    salary: '6,000 - 9,000 ريال',
    description: 'مطلوب أخصائي تسويق رقمي لإدارة حملات التسويق عبر وسائل التواصل الاجتماعي ومحركات البحث.',
    requirements: [
      'خبرة في إدارة حملات Google Ads و Facebook Ads',
      'فهم جيد لـ SEO و SEM',
      'مهارات تحليل البيانات',
      'خبرة في أدوات التسويق الرقمي',
      'إبداع وابتكار',
    ],
    status: 'active',
    postedDate: '2026-02-12',
    categoryId: '4',
  },
  {
    id: '5',
    title: 'مهندس مدني - مشاريع كبرى',
    company: 'شركة الإنشاءات الرائدة',
    city: 'مكة المكرمة',
    type: 'دوام كامل',
    salary: '9,000 - 14,000 ريال',
    description: 'فرصة للانضمام إلى فريق هندسي متميز في تنفيذ مشاريع البنية التحتية الكبرى.',
    requirements: [
      'بكالوريوس هندسة مدنية',
      'خبرة 3-7 سنوات في المشاريع الكبرى',
      'إتقان AutoCAD و Revit',
      'عضوية الهيئة السعودية للمهندسين',
      'مهارات إدارة المشاريع',
    ],
    status: 'active',
    postedDate: '2026-02-11',
    categoryId: '5',
  },
  {
    id: '6',
    title: 'ممرض/ة - قسم الطوارئ',
    company: 'مستشفى النور الطبي',
    city: 'جدة',
    type: 'دوام كامل',
    salary: '5,500 - 8,500 ريال',
    description: 'مطلوب ممرض/ة للعمل في قسم الطوارئ بمستشفى متخصص.',
    requirements: [
      'بكالوريوس تمريض',
      'ترخيص مزاولة مهنة التمريض',
      'خبرة في قسم الطوارئ مفضل',
      'القدرة على العمل تحت الضغط',
      'مهارات تواصل ممتازة',
    ],
    status: 'active',
    postedDate: '2026-02-10',
    categoryId: '6',
  },
  {
    id: '7',
    title: 'مطور تطبيقات جوال',
    company: 'شركة التقنية المتقدمة',
    city: 'الرياض',
    type: 'دوام كامل',
    salary: '9,000 - 13,000 ريال',
    description: 'نبحث عن مطور تطبيقات جوال محترف بخبرة في Flutter أو React Native.',
    requirements: [
      'خبرة في Flutter أو React Native',
      'معرفة بـ iOS و Android',
      'إتقان Dart أو JavaScript',
      'خبرة في REST APIs',
      'محفظة أعمال قوية',
    ],
    status: 'active',
    postedDate: '2026-02-09',
    categoryId: '1',
  },
  {
    id: '8',
    title: 'متدرب في البرمجة',
    company: 'شركة البرمجيات الذكية',
    city: 'الخبر',
    type: 'تدريب',
    salary: '3,000 ريال',
    description: 'برنامج تدريبي لمدة 6 أشهر في تطوير البرمجيات مع فرصة للتوظيف الدائم.',
    requirements: [
      'طالب في السنة النهائية أو خريج حديث',
      'معرفة أساسية بالبرمجة',
      'شغف بالتعلم والتطوير',
      'القدرة على العمل ضمن فريق',
      'التزام بفترة التدريب كاملة',
    ],
    status: 'active',
    postedDate: '2026-02-08',
    categoryId: '1',
  },
];

export const applications: Application[] = [
  {
    id: '1',
    jobId: '1',
    jobTitle: 'مطور واجهات أمامية - React',
    company: 'شركة التقنية المتقدمة',
    applicantName: 'محمد أحمد الغامدي',
    applicantEmail: 'mohammed@example.com',
    applicantPhone: '0501234567',
    date: '2026-02-16',
    status: 'pending',
    resume: 'محمد_أحمد_السيرة_الذاتية.pdf',
  },
  {
    id: '2',
    jobId: '2',
    jobTitle: 'محاسب قانوني',
    company: 'مكتب الاستشارات المالية',
    applicantName: 'فاطمة علي القحطاني',
    applicantEmail: 'fatima@example.com',
    applicantPhone: '0509876543',
    date: '2026-02-15',
    status: 'accepted',
    resume: 'فاطمة_علي_السيرة_الذاتية.pdf',
  },
  {
    id: '3',
    jobId: '3',
    jobTitle: 'مدير موارد بشرية',
    company: 'المجموعة التجارية الدولية',
    applicantName: 'خالد سعد العتيبي',
    applicantEmail: 'khaled@example.com',
    applicantPhone: '0505555555',
    date: '2026-02-14',
    status: 'rejected',
    resume: 'خالد_سعد_السيرة_الذاتية.pdf',
  },
];

export const companies: Company[] = [
  {
    id: '1',
    name: 'شركة التقنية المتقدمة',
    email: 'hr@advanced-tech.sa',
    status: 'approved',
    jobsCount: 12,
    joinDate: '2025-10-15',
  },
  {
    id: '2',
    name: 'مكتب الاستشارات المالية',
    email: 'info@financial-consult.sa',
    status: 'approved',
    jobsCount: 5,
    joinDate: '2025-11-22',
  },
  {
    id: '3',
    name: 'وكالة الإبداع الرقمي',
    email: 'contact@digital-creative.sa',
    status: 'pending',
    jobsCount: 0,
    joinDate: '2026-02-10',
  },
  {
    id: '4',
    name: 'شركة البناء السريع',
    email: 'hr@quick-build.sa',
    status: 'rejected',
    jobsCount: 0,
    joinDate: '2026-02-05',
  },
];
