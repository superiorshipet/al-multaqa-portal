export function Terms() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">الشروط والأحكام</h1>
        
        <div className="bg-card border rounded-lg p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">1. قبول الشروط</h2>
            <p className="text-muted-foreground leading-relaxed">
              باستخدامك لمنصة الملتقى، فإنك توافق على الالتزام بهذه الشروط والأحكام. 
              إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام المنصة.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">2. استخدام المنصة</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>يجب أن تكون المعلومات المقدمة صحيحة ودقيقة</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>لا يجوز استخدام المنصة لأغراض غير قانونية</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <span>يجب الحفاظ على سرية معلومات الحساب</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">3. مسؤوليات الباحثين عن عمل</h2>
            <p className="text-muted-foreground leading-relaxed">
              يلتزم الباحثون عن عمل بتقديم معلومات صحيحة وتحديث سيرتهم الذاتية بانتظام 
              والتعامل بمهنية مع الشركات.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">4. مسؤوليات الشركات</h2>
            <p className="text-muted-foreground leading-relaxed">
              تلتزم الشركات بنشر وظائف حقيقية، التعامل بمهنية مع المتقدمين، وحماية 
              معلوماتهم الشخصية.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">5. الملكية الفكرية</h2>
            <p className="text-muted-foreground leading-relaxed">
              جميع حقوق الملكية الفكرية للمنصة محفوظة لمنصة الملتقى.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">6. تعديل الشروط</h2>
            <p className="text-muted-foreground leading-relaxed">
              نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطارك بأي تغييرات جوهرية.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">7. القانون الساري</h2>
            <p className="text-muted-foreground leading-relaxed">
              تخضع هذه الشروط لقوانين المملكة العربية السعودية.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
