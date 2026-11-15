"use client";

import { useState } from "react";
import {
  ArrowLeft, Search, Menu, X, Bell, UserRound, BriefcaseBusiness,
  Palette, Code2, Megaphone, Video, PenTool, ShoppingBag, Star,
  ArrowUpLeft, ShieldCheck, Zap, Globe2, Play, ChevronLeft
} from "lucide-react";

const categories = [
  { icon: Code2, title: "برمجة وتطوير", count: "2,450 خدمة" },
  { icon: Palette, title: "تصميم وإبداع", count: "1,820 خدمة" },
  { icon: Megaphone, title: "تسويق رقمي", count: "960 خدمة" },
  { icon: Video, title: "فيديو وموشن", count: "740 خدمة" },
  { icon: PenTool, title: "كتابة وترجمة", count: "1,130 خدمة" },
  { icon: ShoppingBag, title: "منتجات رقمية", count: "520 منتج" },
];

const services = [
  { tag: "الأكثر طلباً", title: "تصميم هوية بصرية متكاملة لعلامتك التجارية", seller: "استوديو الإبداع", rating: "4.9", reviews: "128", price: "35", initials: "VA", color: "violet" },
  { tag: "اختيار مميز", title: "تطوير موقع إلكتروني احترافي ومتجاوب", seller: "محمد للتطوير", rating: "5.0", reviews: "86", price: "80", initials: "MD", color: "blue" },
  { tag: "جديد", title: "مونتاج فيديوهات Reels و Shorts بجودة عالية", seller: "Frame Studio", rating: "4.8", reviews: "64", price: "20", initials: "FS", color: "orange" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <main>
      <div className="topline"><span>منصة واحدة، فرص بلا حدود</span><span>اكتشف عالم VYRA <ArrowLeft size={13}/></span></div>
      <header className="header">
        <a className="brand" href="#"><span className="brand-mark">V</span><span>VYRA<span className="brand-dot">.</span></span></a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a className="active" href="#home">الرئيسية</a><a href="#categories">استكشف الخدمات</a><a href="#projects">المشاريع</a><a href="#reels">ريلز</a><a href="#digital">المتجر الرقمي</a>
        </nav>
        <div className="header-actions"><button className="icon-btn" aria-label="الإشعارات"><Bell size={19}/><i/></button><button className="login">تسجيل الدخول</button><button className="signup">ابدأ الآن <ArrowUpLeft size={16}/></button><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="القائمة">{menuOpen ? <X/> : <Menu/>}</button></div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"/> مساحة جديدة للعمل والإبداع <span className="eyebrow-line"/></div>
          <h1>مهاراتك تستحق<br/><span>منصة أكبر.</span></h1>
          <p className="hero-desc">اجمع فرصك، اعرض مهاراتك، وأنجز مشاريعك في مكان واحد. VYRA تربط أصحاب الأعمال بالمواهب التي تصنع الفرق.</p>
          <div className="searchbox"><Search size={20}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="ما الخدمة التي تبحث عنها اليوم؟"/><button onClick={()=>document.getElementById("categories")?.scrollIntoView({behavior:"smooth"})}>ابحث الآن <ArrowLeft size={16}/></button></div>
          <div className="popular"><b>الأكثر بحثاً:</b><a href="#categories">تصميم شعار</a><a href="#categories">متجر إلكتروني</a><a href="#categories">مونتاج فيديو</a></div>
          <div className="hero-proof"><div className="avatar-stack"><span>م</span><span>س</span><span>ع</span><span>+</span></div><div><strong>مجتمع يصنع الفرص</strong><small>انضم إلى شبكة المواهب والعملاء</small></div><div className="proof-divider"/><div className="proof-stat"><strong>24/7</strong><small>مساحة عملك متاحة</small></div></div>
        </div>
        <div className="hero-art">
          <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
          <div className="art-core"><span className="core-v">V</span><span className="core-caption">CREATE YOUR NEXT</span></div>
          <div className="float-card card-project"><span className="mini-icon orange-bg"><BriefcaseBusiness size={18}/></span><div><b>مشروع جديد</b><small>فرصة تنتظرك الآن</small></div><span className="card-arrow"><ArrowUpLeft size={15}/></span></div>
          <div className="float-card card-rating"><span className="rating-star"><Star size={16} fill="currentColor"/></span><div><b>5.0 / 5</b><small>تقييمات مميزة</small></div></div>
          <div className="float-card card-talent"><span className="talent-avatar">A</span><div><b>موهبة جديدة</b><small>متاحة للعمل الآن</small></div><span className="online-dot"/></div>
          <div className="art-spark spark-a">✳</div><div className="art-spark spark-b">✦</div>
        </div>
      </section>

      <section className="trust-strip"><div><ShieldCheck/><span><b>تجربة أكثر أماناً</b><small>بيئة عمل موثوقة</small></span></div><div><Zap/><span><b>إنجاز أسرع</b><small>من الفكرة إلى النتيجة</small></span></div><div><Globe2/><span><b>فرص بلا حدود</b><small>مجتمع رقمي متصل</small></span></div><div className="trust-note">كل ما تحتاجه لتنمو أعمالك <span>في مكان واحد.</span></div></section>

      <section className="section categories-section" id="categories">
        <div className="section-heading"><div><span className="section-kicker">اكتشف إمكانياتك</span><h2>كل مهارة لها <em>مكان.</em></h2><p>ابدأ من المجال الأقرب إلى فكرتك.</p></div><a className="text-link" href="#categories">جميع التصنيفات <ArrowLeft size={16}/></a></div>
        <div className="category-grid">{categories.map((c,i)=><a className="category-card" href="#services" key={c.title}><span className={"category-icon cat-"+i}><c.icon size={22}/></span><b>{c.title}</b><small>{c.count}</small><span className="cat-arrow"><ArrowUpLeft size={16}/></span></a>)}</div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading"><div><span className="section-kicker">اختيارات المجتمع</span><h2>خدمات تستحق <em>الاهتمام.</em></h2><p>ابدأ بخطوة صغيرة نحو نتيجة كبيرة.</p></div><a className="text-link" href="#services">استكشف الخدمات <ArrowLeft size={16}/></a></div>
        <div className="service-grid">{services.map((s,i)=><article className="service-card" key={s.title}><div className={"service-visual visual-"+s.color}><span className="service-tag">{s.tag}</span><div className="visual-shape"><span>{["VY","<>","▶"][i]}</span></div><span className="visual-index">0{i+1}</span></div><div className="service-body"><div className="seller"><span className={"seller-avatar "+s.color}>{s.initials}</span><span>{s.seller}</span><span className="verified">✓</span></div><h3>{s.title}</h3><div className="service-meta"><span><Star size={14} fill="currentColor"/> {s.rating} <small>({s.reviews})</small></span><span>يبدأ من <b>{s.price}$</b></span></div></div></article>)}</div>
      </section>

      <section className="project-banner" id="projects"><div><span className="section-kicker">لديك فكرة؟</span><h2>حوّل مشروعك إلى <em>إنجاز.</em></h2><p>انشر تفاصيل مشروعك واستقبل عروضاً من مستقلين محترفين.</p><button>انشر مشروعك الآن <ArrowLeft size={16}/></button></div><div className="banner-graphic"><div className="banner-ring"/><div className="banner-icon"><BriefcaseBusiness size={42}/></div><span className="banner-pill">فرصتك تبدأ هنا ↗</span></div></section>

      <section className="reels-preview section" id="reels"><div className="section-heading"><div><span className="section-kicker">أفكار تتحرك</span><h2>شاهد الإبداع في <em>ريلز.</em></h2><p>مقاطع قصيرة تعرض أعمال المجتمع وإلهامه.</p></div><a className="text-link" href="#reels">اكتشف الريلز <ArrowLeft size={16}/></a></div><div className="reels-row"><div className="reel-tile reel-one"><Play fill="currentColor"/><span>تصميم يحكي قصة</span></div><div className="reel-tile reel-two"><Play fill="currentColor"/><span>من الفكرة إلى المنتج</span></div><div className="reel-tile reel-three"><Play fill="currentColor"/><span>لقطات من الإبداع</span></div></div></section>

      <footer id="digital"><div className="footer-brand"><a className="brand" href="#"><span className="brand-mark">V</span><span>VYRA<span className="brand-dot">.</span></span></a><p>مساحة تجمع المهارات، المشاريع، والإبداع الرقمي.</p></div><div className="footer-links"><a href="#categories">الخدمات</a><a href="#projects">المشاريع</a><a href="#reels">الريلز</a><a href="#digital">المتجر الرقمي</a><a href="#digital">الدعم والمساعدة</a></div><span className="copyright">© 2026 VYRA. جميع الحقوق محفوظة.</span></footer>
    </main>
  );
}