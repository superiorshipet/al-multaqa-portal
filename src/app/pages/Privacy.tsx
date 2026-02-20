export function Privacy() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">سياسة الخصوصية</h1>
        
        <div className="bg-card border rounded-lg p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">المقدمة</h2>
            <p className="text-muted-foreground leading-relaxed">
              نحن في منصة الملتقى نلتزم بحماية خصوصيتك. توضح هذه السياسة كيفية جمع واستخدام 
              وحماية معلوماتك الشخصية.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">المعلومات التي نجمعها</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              نقوم بجمع المعلومات التالية:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>معلومات التسجيل الأساسية (الاسم، البريد الإلكتروني، رقم الجوال)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>معلومات السيرة الذاتية للباحثين عن عمل</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>معلومات الشركة للحسابات المؤسسية</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">استخدام المعلومات</h2>
            <p className="text-muted-foreground leading-relaxed">
              نستخدم المعلومات لتوفير خدماتنا، تحسين تجربة المستخدم، والتواصل معك بخصوص 
              الفرص الوظيفية المناسبة.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">حماية المعلومات</h2>
            <p className="text-muted-foreground leading-relaxed">
              نتخذ إجراءات أمنية صارمة لحماية معلوماتك من الوصول غير المصرح به أو الإفصاح 
              أو التعديل أو الإتلاف.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">حقوقك</h2>
            <p className="text-muted-foreground leading-relaxed">
              لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها أو حذفها في أي وقت.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
