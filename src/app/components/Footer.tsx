import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-muted mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full inline-block mb-4">
              <span className="font-bold">منصة الملتقى</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              منصة الملتقى هي منصة وظائف سعودية تهدف إلى ربط الباحثين عن عمل بالشركات المتميزة، 
              وتوفير تجربة بحث وتوظيف سلسة وفعالة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/jobs" className="text-muted-foreground hover:text-primary transition-colors">
                  الوظائف المتاحة
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  عن المنصة
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">الشروط والسياسات</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  الشروط والأحكام
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 منصة الملتقى. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
