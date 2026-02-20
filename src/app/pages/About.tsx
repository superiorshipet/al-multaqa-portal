export function About() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">عن منصة الملتقى</h1>
        
        <div className="bg-card border rounded-lg p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">من نحن</h2>
            <p className="text-muted-foreground leading-relaxed">
              منصة الملتقى هي منصة وظائف سعودية رائدة تهدف إلى تسهيل عملية البحث عن الوظائف 
              للباحثين عن عمل، وتوفير حلول فعالة للشركات لإدارة عمليات التوظيف.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">رؤيتنا</h2>
            <p className="text-muted-foreground leading-relaxed">
              نسعى لأن نكون المنصة الأولى للتوظيف في المملكة العربية السعودية، من خلال توفير 
              تجربة استخدام سلسة وفعالة لجميع الأطراف.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">قيمنا</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>الشفافية في جميع التعاملات</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>السهولة والبساطة في الاستخدام</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>الجودة في الخدمات المقدمة</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>الالتزام بمعايير التوظيف السعودية</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
