import {classImages} from './classImages'
import React, {useEffect, useState, createContext, useContext} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Link, NavLink, Routes, Route, useParams, useLocation} from 'react-router-dom'
import {ArrowUpRight, ArrowRight, ArrowLeft, Menu, X, BookOpen, Globe2, GraduationCap, Heart, Sparkles, Flower2, Instagram, Facebook, Mail, MapPin, Phone, ChevronDown, CheckCircle2, Send, Leaf, Languages, MoveUpRight} from 'lucide-react'
import {academy, courses, reviews, copy} from './content'
import {courseDetails, shared, rules} from './courseDetails'
import {shop, payments} from './shopData'
import './style.css'

const LanguageContext = createContext(null)
const useLanguage = () => useContext(LanguageContext)
function LangProvider({children}) {
 const [lang,setLang] = useState(()=>{try{return localStorage.getItem('yamin-language')||'en'}catch{return 'en'}})
 useEffect(()=>{document.documentElement.lang=lang==='my'?'my':lang==='ja'?'ja':'en'; try{localStorage.setItem('yamin-language',lang)}catch{}},[lang])
 return <LanguageContext.Provider value={{lang,setLang,t:copy[lang]}}>{children}</LanguageContext.Provider>
}
function ScrollTop(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo({top:0,behavior:'instant'})},[pathname]);return null}
function Eyebrow({children,light=false}){return <div className={'eyebrow '+(light?'eyebrow-light':'')}><span className="eyebrow-line"/>{children}</div>}
function Brand({light=false}) {return <Link to="/" className={'brand '+(light?'brand-light':'')} aria-label="Yamin Japanese Language Center home"><span className="brand-mark brand-monogram"><svg viewBox="0 0 64 64" role="img" aria-label="YM monogram"><circle cx="32" cy="32" r="29"/><text x="32" y="41" textAnchor="middle" fontFamily="Georgia,serif" fontSize="25" fontWeight="700" stroke="none" fill="#f3e8c9">YM</text><path d="M44 13c5-5 11-3 10 2-1 4-7 5-10 2"/></svg></span><span className="brand-copy"><strong>YAMIN<span className="brand-dot">.</span></strong><small>JAPANESE LANGUAGE CENTER</small></span></Link>}
function Nav(){const {lang,setLang,t}=useLanguage(),[open,setOpen]=useState(false),[coursesOpen,setCoursesOpen]=useState(false);const loc=useLocation();useEffect(()=>{setOpen(false);setCoursesOpen(false)},[loc.pathname]);return <header className="site-header"><div className="nav-inner shell"><Brand/><nav className={'main-nav '+(open?'is-open':'')} aria-label="Main navigation"><NavLink end to="/">{t.home}</NavLink><div className="nav-course"><button className="nav-course-trigger" onClick={()=>setCoursesOpen(v=>!v)} aria-expanded={coursesOpen}>{t.courses}<ChevronDown size={15}/></button>{coursesOpen&&<div className="nav-drop"><Link to="/courses">{t.all}</Link>{courses.map(c=><Link key={c.level} to={'/courses/'+c.level.toLowerCase()}>JLPT {c.level}</Link>)}</div>}</div><NavLink to="/about">{t.about}</NavLink><NavLink to="/bookshop">{t.bookshop||"Bookshop"}</NavLink><NavLink to="/contact">{t.contact}</NavLink><div className="mobile-languages"><LanguageSelect lang={lang} setLang={setLang}/></div></nav><div className="nav-right"><div className="desktop-language"><LanguageSelect lang={lang} setLang={setLang}/></div>

<a
  className="nav-cta"
  href="https://t.me/YaminJapaneseLanguageCenter1"
  target="_blank"
  rel="noopener noreferrer"
>
  {t.connect}
  <ArrowUpRight size={16}/>
</a>

<button className="menu-toggle" aria-label={t.navMenu} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button></div></div></header>}
function LanguageSelect({lang,setLang}){return <label className="language-select"><Globe2 size={17}/><span className="sr-only">Language</span><select value={lang} onChange={e=>setLang(e.target.value)} aria-label="Language"><option value="en">EN</option><option value="my">မြန်မာ</option><option value="ja">日本語</option></select></label>}


function Footer() {
  const {t} = useLanguage();

  return (
    <footer className="footer">
      <div className="shell">

        <div className="footer-main">

          {/* Brand and introduction */}
          <div className="footer-brand">
            <Brand light />

            <p className="footer-tagline">
              Learning Japanese, opening doors.
            </p>

            <span className="footer-kanji">
              未来はここから。
            </span>
          </div>

          {/* Courses */}
          <div className="footer-links">
            <strong>{t.courses}</strong>

            {courses.map(c => (
              <Link
                key={c.level}
                to={'/courses/' + c.level.toLowerCase()}
              >
                JLPT {c.level}
              </Link>
            ))}
          </div>

          {/* Explore */}
          <div className="footer-links">
            <strong>Explore</strong>

            <Link to="/">{t.home}</Link>
            <Link to="/about">{t.about}</Link>
            <Link to="/contact">{t.contact}</Link>
            <Link to="/bookshop">
              {t.bookshop || "Bookshop"}
            </Link>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {academy.name}.
            All rights reserved.
          </span>

          <span>
            Made for curious minds ✦
          </span>
        </div>

      </div>
    </footer>
  );
}



function CourseCard({course,compact=false}){const {t}=useLanguage();return <Link className={'course-card tone-'+course.tone} to={'/courses/'+course.level.toLowerCase()}><div className="course-card-top"><span className="course-number">JLPT / {course.level}</span><ArrowUpRight size={21}/></div><div className="course-glyph" aria-hidden="true">{course.level==='N5'?'あ':course.level==='N4'?'日':course.level==='N3'?'語':'夢'}</div><div className="course-card-bottom"><span className="course-label">{course.tag}</span><h3>{course.level}<span className="course-dot">.</span></h3><p className="course-japanese">{course.jl}</p>{!compact&&<p className="course-desc">{course.description}</p>}<div className="course-card-link">{t.details} <ArrowRight size={17}/></div></div></Link>}
function Hero(){const {t}=useLanguage();return <section className="hero"><div className="hero-text"><div className="hero-content"><Eyebrow>{t.eyebrow}</Eyebrow><h1>{t.hero1}<br/>{t.hero2}<br/><em>{t.heroAccent}</em></h1><p>{t.heroText}</p><div className="hero-actions"><Link to="/courses" className="btn btn-dark">{t.apply} <ArrowUpRight size={18}/></Link><Link className="text-link" to="/about">{t.discover}<ArrowRight size={17}/></Link></div></div><div className="hero-bottom"><span>日本語を学ぶ、未来が広がる。</span><span>{t.scroll} ↓</span></div></div><div className="hero-image" style={{backgroundImage:`linear-gradient(0deg, rgba(26,37,26,.18), rgba(26,37,26,.02)),url('${academy.heroImage}')`}}><div className="hero-image-stamp"><span>日本語</span><small>LEARN WITH HEART</small></div><div className="hero-float"><span className="float-icon">✿</span><div><strong>{t.heroBadge}</strong><small>JLPT N5 — N2</small></div></div><span className="hero-vertical">言葉で世界が広がる</span></div></section>}
function Intro(){const {t}=useLanguage();return <section className="intro-section section"><div className="shell intro-grid"><div className="intro-art"><div className="intro-art-box"><span className="intro-big-kanji">学</span><div className="intro-corner-quote">一期一会 <span>ichi-go ichi-e</span></div></div><div className="intro-art-badge"><Flower2 size={24}/><span>YAMIN<br/>LANGUAGE CENTER</span></div></div><div className="intro-copy"><Eyebrow>{t.smallIntro}</Eyebrow><h2 className="section-title">{t.introTitle}</h2><div className="thin-divider"/><p className="body-copy">{t.introText}</p><Link className="link-arrow" to="/about">{t.discover}<span><ArrowUpRight size={19}/></span></Link></div></div></section>}
function CoursesSection(){const {t}=useLanguage();return <section className="courses-section section" id="courses"><div className="shell"><div className="section-heading"><div><Eyebrow>{t.choose}</Eyebrow><h2 className="section-title">{t.courseTitle}</h2></div><p>{t.courseSub}</p></div><div className="course-grid">{courses.map(c=><CourseCard key={c.level} course={c}/>)}</div><p className="course-note">{t.disclaimer}</p></div></section>}
function Why(){const {t}=useLanguage();const arr=[{icon:<BookOpen/>,title:t.point1,body:t.point1body},{icon:<Flower2/>,title:t.point2,body:t.point2body},{icon:<Heart/>,title:t.point3,body:t.point3body}];return <section className="why-section section"><div className="shell why-grid"><div className="why-copy"><Eyebrow>{t.why}</Eyebrow><h2 className="section-title">{t.whyTitle}</h2><p className="body-copy">{t.whyText}</p><Link className="link-arrow" to="/about">{t.discover}<span><ArrowUpRight size={19}/></span></Link></div><div className="why-features">{arr.map((f,i)=><div className="feature" key={i}><div className="feature-icon">{f.icon}</div><div><h3>{f.title}</h3><p>{f.body}</p></div><span className="feature-count">0{i+1}</span></div>)}</div></div></section>}
function ReviewCard({review}){return <div className="review-card"><div className="review-stars">STUDENT REVIEW</div><p>“{review.quote}”</p><div className="review-person"><div className="review-avatar">{review.initials}</div><div><strong>{review.name}</strong><small>{review.level}</small></div></div></div>}
function ReviewColumn({items,reverse=false}){return <div className="review-track-wrapper"><div className={'review-track '+(reverse?'reverse':'')} aria-label="Student reviews"><div className="review-list">{items.map((r,i)=><ReviewCard key={i} review={r}/>)}</div><div className="review-list" aria-hidden="true">{items.map((r,i)=><ReviewCard key={'repeat-'+i} review={r}/>)}</div></div></div>}
function Reviews(){const {t}=useLanguage();return <section className="reviews-section section"><div className="shell reviews-layout"><div className="reviews-copy"><Eyebrow>{t.testimonials}</Eyebrow><h2 className="section-title">{t.reviewsTitle}</h2><p className="reviews-warning">{t.reviewsNote}</p><div className="reviews-deco">“</div></div><div className="reviews-moving"><ReviewColumn items={reviews.slice(0,6)}/><ReviewColumn items={reviews.slice(6)} reverse/></div></div></section>}
function BottomCTA(){const {t}=useLanguage();return <section className="bottom-cta"><div className="shell cta-content"><span className="cta-decoration" aria-hidden="true">花</span><Eyebrow light>{t.connect}</Eyebrow><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p><Link className="btn btn-light" to="/contact">{t.connect}<ArrowUpRight size={18}/></Link></div></section>}
function Home(){return <><Hero/><Intro/><CoursesSection/><Why/><Reviews/><BottomCTA/></>}
function PageHeading({eyebrow,title,body,side}){return <section className="page-heading"><div className="shell"><Eyebrow>{eyebrow}</Eyebrow><div className="page-heading-row"><div><h1>{title}</h1>{body&&<p>{body}</p>}</div><span className="page-heading-mark" aria-hidden="true">{side||'学'}</span></div></div></section>}
function Courses(){const {t}=useLanguage();return <><PageHeading eyebrow={t.choose} title={t.courses} body={t.courseSub} side="道"/><section className="section"><div className="shell"><div className="course-grid">{courses.map(c=><CourseCard key={c.level} course={c}/>)}</div><p className="course-note">{t.disclaimer}</p></div></section><BottomCTA/></>}
function Money({value}){return <span className="money">{value.toLocaleString('en-US')} ကျပ်</span>}

function PackageBlock({data,accent}) {
  return (
    <article className={'study-package '+(accent?'featured':'')}>

      {data.sectionTitle && (
        <h3 className="course-section-title">
          {data.sectionTitle}
        </h3>
      )}

      <div className="study-package-head">
        <h3>{data.title}</h3>
        <Money value={data.price}/>
      </div>

      <ol className="course-syllabus">
        {data.items.map((item,i)=><li key={i}>{item}</li>)}
      </ol>

      {data.notes?.map((note,i)=>
        <p className="course-mini-note" key={i}>{note}</p>
      )}

    </article>
  )
}

function RulesBlock(){return <section className="rules-card" id="rules"><div className="card-heading"><span>IMPORTANT</span><h2>သင်တန်းစည်းကမ်းချက်များ</h2></div><ol>{rules.map((rule,i)=><li key={i}>{rule}</li>)}</ol></section>}
function PaymentBlock(){return <section className="payments-card" id="payment"><div className="card-heading">
    <span>PAYMENT METHODS</span><h2>သင်တန်းကြေးပေးသွင်းရန်</h2></div><p>KBZPay နှင့် WavePay ဖြင့် ငွေပေးချေနိုင်ရန် အောက်တွင် QR code များကို ထည့်သွင်းနိုင်ပါသည်။ ငွေလွှဲမပြုမီ အကောင့်အမည်နှင့် ဖုန်းနံပါတ်ကို သင်တန်း Page မှတစ်ဆင့် အတည်ပြုပါ။</p>
    <div className="payment-grid">{payments.map(p=><div className="payment-item" key={p.id}><strong>{p.name}</strong>{p.enabled?<><p>{p.account}</p><img className="qr-img" src={p.qr} alt={p.name+' payment QR code'}/></>:<div className="qr-placeholder"><BookOpen size={26}/><span>{p.name} QR image ထည့်ရန်</span><small>public/images/{p.id}-qr.png</small></div>}</div>)}</div>
    
    </section>}
function ClassSetGallery({items=[],heading=''}){const [preview,setPreview]=useState(null);useEffect(()=>{if(!preview)return;const handle=e=>{if(e.key==='Escape')setPreview(null)};document.addEventListener('keydown',handle);return()=>document.removeEventListener('keydown',handle)},[preview]);if(!items.length)return null;return <section className="class-set-gallery" aria-label={heading||'Course class-set images'}>{heading&&<h3 className="class-set-heading">{heading}</h3>}<p className="class-gallery-desc">သင်တန်းအလိုက် အသုံးပြုမည့် စာအုပ်များနှင့် သင်ရိုးများကို ပုံတွင် ကြည့်ရှုနိုင်ပါသည်။ ပုံကိုနှိပ်ပြီး အကြီးချဲ့ကြည့်နိုင်ပါသည်။</p><div className={'class-set-grid '+(items.length===1?'single':'')}>{items.map(item=><button key={item.image} className="class-set-card" type="button" onClick={()=>setPreview(item)} aria-label={`View larger ${item.title} image`}><img src={item.image} alt={item.title+' books and online video class materials'} loading="lazy"/><span className="class-set-info"><strong>{item.title}</strong><small>{item.description}</small><span>View full image ↗</span></span></button>)}</div>{preview&&<div className="book-modal-backdrop" onMouseDown={()=>setPreview(null)}><div className="class-set-modal" role="dialog" aria-modal="true" aria-label={preview.title} onMouseDown={e=>e.stopPropagation()}><button type="button" onClick={()=>setPreview(null)} aria-label="Close preview" className="book-modal-close"><X size={22}/></button><img src={preview.image} alt={preview.title}/><h3>{preview.title}</h3><p>{preview.description}</p></div></div>}</section>}
function CourseDeliveryBlock({delivery,level}){return <section className="class-group delivery-card"><div className="card-heading"><span>READY COMPLETE VIDEO CLASS</span><h2>{level} Complete Video Ready Class</h2></div><h3 className="delivery-subheading">သင်ကြားပုံအသေးစိတ်</h3><div className="delivery-intro"><p>{delivery[0]}</p><p>{delivery[1]}</p></div>

<ol className="course-syllabus">
  {delivery.slice(2).map((item,i)=>(
    <li
      key={i}
      className={i === 5 ? 'highlight-red' : ''}
    >
      {item}
    </li>
  ))}
</ol>

</section>}

function RequiredBooksBlock({data,items,heading,id='books'}){return <section className="required-books-block" id={id}><div className="card-heading"><span>REQUIRED TEXTBOOKS</span><h2>{data.booksTitle||'လိုအပ်သော စာအုပ်များ'}</h2></div><p>{data.booksNotice}</p><ClassSetGallery items={items||[]} /><Link className="link-arrow" to="/bookshop">စာအုပ်များကို Bookshop တွင် ကြည့်ရှုရန် <span><ArrowUpRight size={18}/></span></Link></section>}


function CourseDetail(){const {level}=useParams(),{t}=useLanguage(),c=courses.find(c=>c.level.toLowerCase()===level);if(!c)return <section className="shell section"><h1>Course not found</h1><Link to="/courses">{t.back}</Link></section>;
const d = courseDetails[c.level];

const sets = d.booksImages
  ? d.booksImages.map((image, i) => ({
      image,
      title: i === 0
        ? 'N4 Challenge Grammar'
        : 'N4 Minna Grammar',
      description: 'Books and online video class materials'
    }))
  : classImages[c.level] || [];

  
  
return <><section className={'detail-hero tone-'+c.tone}><div className="shell"><Link to="/courses" className="back-link"><ArrowLeft size={17}/>{t.back}</Link><div className="detail-hero-content"><div><Eyebrow>YAMIN / CLASS INFORMATION</Eyebrow><h1>{c.level}<span>.</span></h1><p className="detail-jl">JLPT {c.level} · သင်ရိုးအသေးစိတ်</p><p className="detail-intro">Ready Complete အတန်း၊ တစ်ပိုင်းချင်းအတန်းများနှင့် Video Exam Practice များကို အောက်တွင် ကြည့်ရှုနိုင်ပါသည်။</p><a href="#course-information" className="btn btn-dark">Class information <ArrowRight size={17}/></a></div><div className="detail-symbol" aria-hidden="true">{c.level==='N5'?'あ':c.level==='N4'?'日':c.level==='N3'?'語':'夢'}</div></div></div></section><section className="class-details-section section" id="course-information"><div className="shell class-layout"><div className="class-main"><Eyebrow>COURSE OPTIONS</Eyebrow><h2 className="section-title">{c.level} Class Information</h2><div className="class-quicknav"><a href="#complete">Ready Complete</a><a href="#individual">တစ်ပိုင်းချင်း</a><a href="#exam">JLPT Old Questions</a><a href="#rules">စည်းကမ်းချက်များ</a><a href="#payment">Payment</a></div><CourseDeliveryBlock delivery={d.delivery} level={c.level}/>{d.explanation&&<div className="course-highlight n4-explanation"><strong>N4 သင်ရိုးရှင်းလင်းချက်</strong><p>{d.explanation}</p></div>}<section className="class-group" id="complete"><div className="card-heading"><span>01 / FULL COURSES</span><h2>သင်ရိုးနှင့် သင်တန်းကြေးအသေးစိတ်</h2></div>{d.packages.map((item,i)=><React.Fragment key={i}><PackageBlock data={item} accent/>{c.level==='N4'&&
<RequiredBooksBlock data={{ booksTitle: i === 0
      ? 'သင်ရိုး (1) Challenge Grammar သင်ရိုးအတွက် လိုအပ်သော စာအုပ်များ'
      : 'သင်ရိုး (2) Minna Grammar သင်ရိုးအတွက် လိုအပ်သော စာအုပ်များ', 
booksNotice:'သင်တန်းကြေးတွင် ဖတ်စာအုပ်ဖိုးမပါသောကြောင့် စာအုပ်၊ PDF files မပေးပါ။ သီးသန့်ထပ်ဝယ်ရပါမည်။'}} items={[sets[i]]}  id={i===0?'books-challenge':'books-minna'}/>}</React.Fragment>)}{c.level!=='N4'&&
<RequiredBooksBlock data={d} items={sets} heading={`${c.level} Online Set`}/>}</section><section className="class-group" id="individual"><div className="card-heading"><span>02 / CHOOSE A MODULE</span><h2>{c.level} Level အတွက် တစ်ပိုင်းချင်းရွေးတက်နိုင်သောအတန်းများ</h2></div>{d.bundles?.map((x,i)=><PackageBlock data={x} key={i}/>)}<div className="module-list">{d.individual.map(([title,price],i)=><div className="module-row" key={i}><span className="module-index">{String(i+1).padStart(2,'0')}</span><strong>{title}</strong><Money value={price}/></div>)}</div>{d.individualNote&&<p className="course-highlight">{d.individualNote}</p>}<p className="course-mini-note">{shared.video}</p></section><section className="class-group" id="exam"><div className="card-heading"><span>03 / VIDEO LESSONS</span><h2>JLPT Old Question Video Classes</h2></div><div className="exam-grid">{d.exams.map((exam,i)=><article className="exam-card" key={i}><span className="video-label">VIDEO CLASS</span><h3>{exam.title}</h3><Money value={exam.price}/><div className="exam-years"><span>သင်ကြားမည့် ခုနှစ်များ</span><p>{exam.years}</p></div><p>{shared.oldQuestion}</p><p className="course-mini-note">{shared.noFiles}</p></article>)}</div></section><RulesBlock/><PaymentBlock/></div><aside className="class-side"><div className="class-side-inner"><span className="mini-kicker">JLPT {c.level}</span><h3>Find your class</h3><p>သင်တန်းအမျိုးအစား၊ သင်တန်းကြေးနှင့် စည်းကမ်းချက်များကို ဖတ်ရှုပြီးမှ အပ်နှံပါ။</p><div className="side-price"><small>Ready Complete from</small><Money value={Math.min(...d.packages.map(x=>x.price))}/></div><Link to={'/contact?course='+c.level} className="btn btn-dark">{t.inquire}<ArrowUpRight size={17}/></Link><a className="side-text-link" href="#payment">KBZPay / WavePay payment information ↓</a></div></aside></div></section></>}
function BookCover({book}){const [broken,setBroken]=useState(false);return book.image&&!broken?<img className="book-cover" src={book.image} alt={book.title} loading="lazy" onError={()=>setBroken(true)}/>:<div className="book-art"><BookOpen size={65}/><span>IMAGE PLACEHOLDER</span></div>}


function Bookshop(){ 
 const {t}=useLanguage();
 const [filter,setFilter]=useState('All');
 const [selected,setSelected]=useState(null);
 const visible = shop.books.filter(book => {
  if (filter === 'All') return true;

  if (filter === 'N4-Challenge') {
    return book.level === 'N4' &&
      (book.set === 'Challenge' || book.sets?.includes('Challenge'));
  }

  if (filter === 'N4-Minna') {
    return book.level === 'N4' &&
      (book.set === 'Minna' || book.sets?.includes('Minna'));
  }

  return book.level === filter;
});


 
 useEffect(()=>{if(!selected)return;const onKey=e=>{if(e.key==='Escape')setSelected(null)};document.addEventListener('keydown',onKey);return()=>document.removeEventListener('keydown',onKey)},[selected]);
 return <><PageHeading eyebrow="YAMIN BOOKSHOP" title={t.bookshop||'Bookshop'} body="စာအုပ်များ၊ လိပ်စာနှင့် ဆက်သွယ်ရန်အချက်အလက်များ" side="本"/>
 <section className="section"><div className="shell">
 <div className="section-heading"><div><Eyebrow>OUR COLLECTION</Eyebrow><h2 className="section-title">Japanese Learning Books</h2></div><p>JLPT N5 – N2 စာအုပ်များကို အဆင့်လိုက်ကြည့်ရှုနိုင်ပါသည်။ စာအုပ်ပုံကိုနှိပ်ပြီး အကြီးချဲ့ကြည့်ပါ။ ဈေးနှုန်းနှင့် လက်ကျန်ကို ဆိုင်သို့ဆက်သွယ်မေးမြန်းပါ။</p></div>

 
<div className="bookshop-social-pages">
  <h2>Our Bookshop Pages</h2>
  <p>Connect with our official bookshops on Facebook.</p>

 
<div className="bookshop-social-grid">

  <div className="bookshop-social-card">
    <h3>Yamin Book Store</h3>
    <p className="bookshop-location">
      နယ်နှင့် ပြည်ပအမှာများအတွက်
    </p>
    <img
      src="/images/Social/Book_qr1.png"
      alt="Yamin Book Store"
    />

    <a
  href="https://www.facebook.com/share/1EAJYAtkDF/?mibextid=wwXIfr"
  target="_blank"
  rel="noopener noreferrer"
  className="bookshop-facebook-link"
>
  Visit Facebook Page ↗
</a>

  </div>

  <div className="bookshop-social-card">
    <h3>Yamin Book Shop</h3>
    <p className="bookshop-location">
      ရန်ကုန်မြို့တွင်း
    </p>
    <img
      src="/images/Social/Book_qr2.png"
      alt="Yamin Book Shop"
    />
    <a
  href="https://www.facebook.com/share/1EAD2VDWAA/?mibextid=wwXIfr"
  target="_blank"
  rel="noopener noreferrer"
  className="bookshop-facebook-link"
>
  Visit Facebook Page ↗
</a>
  </div>

</div>


<p className="bookshop-vpn-note">
  VPN အခက်အခဲများကြောင့် Link တိုက်ရိုက်မရောက်ပါက
  Page name ကို Facebook တွင် ရိုက်ရှာနိုင်ပါသည်။
</p>


</div>

<div className="book-filters" role="group" aria-label="Filter books by JLPT level">
  {[
    { value: 'All', label: 'All books' },
    { value: 'N5', label: 'JLPT N5' },
    { value: 'N4-Challenge', label: 'N4 Challenge Set' },
    { value: 'N4-Minna', label: 'N4 Minna Set' },
    { value: 'N3', label: 'JLPT N3' },
    { value: 'N2', label: 'JLPT N2' }
  ].map(item => (
    <button
      key={item.value}
      type="button"
      className={'book-filter ' + (filter === item.value ? 'active' : '')}
      aria-pressed={filter === item.value}
      onClick={() => setFilter(item.value)}
    >
      {item.label}
    </button>
  ))}
</div>

 <div className="books-grid">{visible.map(book=><article key={book.id} className="book-card">
 <button type="button" className="book-image-button" onClick={()=>book.image&&setSelected(book)} disabled={!book.image} aria-label={book.image?`Enlarge ${book.title}`:`Image not yet available for ${book.title}`}><BookCover book={book}/>{book.image&&<span className="book-zoom"><BookOpen size={14}/> View cover</span>}</button>
 <div className="book-body"><span className="book-level">{book.level==='Coming soon'?'COMING SOON':`JLPT ${book.level}`}</span><h3>{book.title}</h3><p>{book.description}</p><strong>{book.price?book.price.toLocaleString('en-US')+' ကျပ်':book.available?'ဈေးနှုန်း ဆက်သွယ်မေးမြန်းရန်':'စာအုပ်အချက်အလက် ထပ်ထည့်ရန်'}</strong></div>
 </article>)}</div>
 
 <div className="shop-info"><div><Eyebrow>VISIT OUR SHOP</Eyebrow><h2>စာအုပ်ဆိုင်လိပ်စာ</h2><p><MapPin size={19}/>{shop.address}</p><p><ArrowRight size={19}/>{shop.directions}</p><p><Phone size={19}/><a href={'tel:'+shop.phone}>{shop.phone}</a></p><p><BookOpen size={19}/>{shop.hours}</p></div>

 
 </div>
 </div>
 </section>
 {selected&&<div className="book-modal-backdrop" onMouseDown={()=>setSelected(null)}><div className="book-modal" role="dialog" aria-modal="true" aria-label={selected.title} onMouseDown={e=>e.stopPropagation()}><button className="book-modal-close" onClick={()=>setSelected(null)} aria-label="Close book preview"><X size={22}/></button><img src={selected.image} alt={selected.title}/><div><span className="book-level">JLPT {selected.level}</span><h2>{selected.title}</h2><p>{selected.description}</p><small>Original uploaded image · resolution depends on source file</small></div></div></div>}
 </>}


function About(){
  const {t}=useLanguage();

  return <>
    <PageHeading
      eyebrow={t.aboutEyebrow}
      title={t.aboutTitle}
      side="心"
    />

    <section className="section">
      <div className="shell about-grid">

       
<div className="about-reviews">
  <div className="about-reviews-heading">
    STUDENT REVIEWS
  </div>

  <div className="reviews-moving">
    <ReviewColumn items={reviews.slice(0,6)}/>

    <ReviewColumn
      items={reviews.slice(6)}
      reverse
    />
  </div>
</div>


        <div className="about-main">
          <Eyebrow>{academy.name}</Eyebrow>

          <h2 className="section-title">
            私たちについて
          </h2>

          <p className="body-copy">{t.aboutBody}</p>

          <div className="about-rule"/>

          <div className="about-point">
            <Flower2/>
            <div>
              <h3>{t.mission}</h3>
              <p>{t.missionText}</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* JLPT Student Achievements */}
    <section className="section achievements-section">
      <div className="shell">
        <div className="achievements-card">

          <Eyebrow>OUR STUDENTS' ACHIEVEMENTS</Eyebrow>

          <h2 className="section-title">
            Success worth celebrating.
          </h2>

         <p>
  Every achievement represents dedication, hard work, and progress.
  Follow our official Telegram channel to explore the JLPT examination
  results of Yamin Japanese Language Center students.
</p>

<p className="achievement-myanmar">
  JLPT Results Reviews များကို ဖတ်ရှုလိုပါက အောက်ပါ Telegram Channel
  မှတစ်ဆင့် ဝင်ရောက်ဖတ်ရှုနိုင်ပါသည်။
</p>

          <div className="achievement-channel">
            <div className="achievement-icon">
              <Send size={27}/>
            </div>

            <div className="achievement-details">
              <h3>JLPT Results By Yamin JLC</h3>
              <span>OFFICIAL TELEGRAM CHANNEL</span>
            </div>

            <a
              href="https://t.me/JlptResltsByYamin"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              View JLPT Results
              <ArrowUpRight size={17}/>
            </a>
          </div>

        </div>
      </div>
    </section>

    <Why/>
    <BottomCTA/>
  </>
}




function Contact() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeading
        eyebrow={t.contactEyebrow}
        title={t.contactTitle}
        body={t.contactBody}
        side="縁"
      />

      <section className="section">
        <div className="shell contact-grid contact-grid-simple">

          {/* Contact Information */}
          <div className="contact-left">
            <Eyebrow>{t.connect}</Eyebrow>

            <h2 className="section-title">Stay Connected with Yamin.</h2>

            <p className="body-copy">
             သင်တန်းအပ်နှံခြင်း၊ သင်ရိုးအသေးစိတ်၊ သင်ခန်းစာများနှင့် JLPT စာမေးပွဲဆိုင်ရာ အချက်အလက်များကို Yamin Japanese Language Center ၏ Official Facebook Page မှတစ်ဆင့် မေးမြန်းလေ့လာနိုင်ပါသည်။
            </p>

            
<div className="contact-item">
  <span><BookOpen /></span>
  <div>
    <small>COURSE INFORMATION</small>
    <p>JLPT N5 – N2</p>
    <p>Course details and learning materials.</p>
  </div>
</div>

<div className="contact-item">
  <span><GraduationCap /></span>
  <div>
    <small>STUDENT SUPPORT</small>
    <p>Learning Assistance</p>
    <p>Course registration and learning inquiries.</p>
  </div>
</div>



            <div className="social-row">
              {academy.facebook && (
                <a
                  aria-label="Facebook"
                  href={academy.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook />
                </a>
              )}

              {academy.instagram && (
                <a
                  aria-label="Instagram"
                  href={academy.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram />
                </a>
              )}
            </div>
          </div>

          {/* Direct Contact */}
          <div className="contact-direct-card">
            <span className="mini-kicker">
              YAMIN JAPANESE LANGUAGE CENTER
            </span>

            <h3>သင်တန်းအကြောင်း တိုက်ရိုက်မေးမြန်းရန်</h3>

            <p>
              သင်တန်း Page Chat မှတစ်ဆင့် ဆက်သွယ်မေးမြန်းနိုင်ပါသည်။
              မေးမြန်းလိုသော Level (N5 / N4 / N3 / N2) နှင့်
              သင်ရိုးအမျိုးအစားကို တစ်ပါတည်း ဖော်ပြပေးပါ။
            </p>
          </div>

        </div>

        {/* Official Facebook QR Code */}
        <div className="shell contact-facebook-section">

          <div className="contact-facebook-heading">
            <Eyebrow>CONNECT WITH US</Eyebrow>
            <h2 className="section-title">
              Find us on Facebook.
            </h2>
            <p>
              Scan the QR code below to visit the official
              Yamin Japanese Language Center Facebook Page.
            </p>
          </div>

         

<div className="contact-facebook-card">
  <img
    src="/images/Social/Yamin_FB_Scan.png"
    alt="Yamin Japanese Language Center Facebook QR Code"
  />

  <h3>Yamin Japanese Language Center</h3>

  <p>
    Scan to visit our Facebook Page for course
    information, announcements and updates.
  </p>

  <a
    href="https://www.facebook.com/share/1FBvECWgJe/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Visit Facebook Page <ArrowUpRight size={16} />
  </a>

  <p className="contact-vpn-note">
    VPN အခက်အခဲများကြောင့် Link တိုက်ရိုက်မရောက်ပါက
    Page name ကို Facebook တွင် ရိုက်ရှာနိုင်ပါသည်။
  </p>
</div>



        </div>
      </section>
    </>
  );
}




function App(){return <LangProvider><BrowserRouter><ScrollTop/><Nav/><main><Routes><Route path="/" element={<Home/>}/><Route path="/courses" element={<Courses/>}/><Route path="/courses/:level" element={<CourseDetail/>}/><Route path="/about" element={<About/>}/><Route path="/bookshop" element={<Bookshop/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<section className="shell section"><h1>Page not found</h1><Link to="/">Go home</Link></section>}/></Routes></main><Footer/></BrowserRouter></LangProvider>}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>)

/**N4 information */
{p.sectionTitle && (
  <h3 className="course-section-title">
    {p.sectionTitle}
  </h3>
)}