/* ==========================================================================
   ATHAR LANDING PAGE - DYNAMIC FEATURES RENDER
   ========================================================================== */

const featuresData = [
  {
    title: "القرآن الكريم",
    desc: "قراءة وتلاوة برسم المصحف العثماني مع نظام متكامل للاستماع ومتابعة الحفظ ومزامنة موضع القراءة.",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M6 6h10M6 10h10"></path></svg>`
  },
  {
    title: "مواقيت الصلاة الدقيقة",
    desc: "حساب دقيق لمواقيت الصلاة بناءً على موقعك الجغرافي (GPS) مع إشعارات الأذان المخصصة لكل صلاة.",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M12 2v4M12 9a6 6 0 0 0-6 6v6h12v-6a6 6 0 0 0-6-6Z"></path></svg>`
  },
  {
    title: "حصن المسلم والأذكار",
    desc: "مجموعة شاملة من أذكار اليوم والليلة (الصباح، المساء، النوم، الاستيقاظ) مع عداد تفاعلي للتكرار.",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path><path d="M19 3v4M21 5h-4"></path></svg>`
  },
  {
    title: "الأدعية المأثورة",
    desc: "أدعية قرآنية ونبوية مأثورة مرتبة ومبوبة في أقسام لتسهل عليك التقرب إلى الله ومناجاته في كل وقت.",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>`
  },
  {
    title: "مسبحة إلكترونية متطورة",
    desc: "مسبحة تفاعلية داخل التطبيق وخارجه مع مؤثرات اهتزازية وحسية تحاكي المسبحة التقليدية بدقة.",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="6" r="1.5"></circle><circle cx="17.2" cy="9" r="1.5"></circle><circle cx="17.2" cy="15" r="1.5"></circle><circle cx="12" cy="18" r="1.5"></circle><circle cx="6.8" cy="15" r="1.5"></circle><circle cx="6.8" cy="9" r="1.5"></circle></svg>`
  },
  {
    title: "تحديد اتجاه القبلة",
    desc: "بوصلة تفاعلية سريعة وموثوقة تعتمد على مستشعرات الهاتف الداخلية لتوجيهك بدقة نحو الكعبة المشرفة.",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`
  },
  {
    title: "الإذاعات الإسلامية",
    desc: "بث مباشر مستمر لإذاعات القرآن الكريم بصوت كبار القراء، وقنوات التفسير، والرقية الشرعية.",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5M19.1 4.9C23 8.8 23 15.2 19.1 19.1"></path></svg>`
  },
  {
    title: "قصص الأنبياء والسيرة",
    desc: "مكتبة روحية تضم قصص الأنبياء كاملة وسيرة النبي محمد ﷺ العطرة لتعميق الفهم والتأسي به.",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76Z"></path><path d="M16 8 2 22M17.5 15H9"></path></svg>`
  },
  {
    title: "التقويم الهجري",
    desc: "متابعة دقيقة للتقويم الهجري والمناسبات الإسلامية، مع إمكانية التحويل بين التاريخ الهجري والميلادي.",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`
  },
  {
    title: "أجندة رمضان المبارك",
    desc: "ركن خاص يحتوي على إمساكية رمضان، وأدعية الإفطار والسحور، وتنبيهات مخصصة للشهر الكريم.",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9h14M8 5h8M12 2v3M12 19v3M6 9v7a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9H6Z"></path></svg>`
  },
  {
    title: "نظام تنبيهات ذكي",
    desc: "إشعارات تلقائية تذكرك بالأذكار والسنن ومواعيد الصلوات وقيام الليل لتظل على اتصال دائم بالطاعة.",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9Z"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`
  },
  {
    title: "إعدادات وتخصيص كامل",
    desc: "تخصيص كامل للخطوط وأحجام النصوص، مع دعم الوضع الداكن (Dark Mode) المريح للعين أثناء القراءة الليلية.",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('features-container');
  if (!container) return;

  // Render cards dynamically
  featuresData.forEach((feat, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = `card-feat-${index}`;
    card.innerHTML = `
      <div class="card-icon" id="icon-feat-${index}">${feat.svg}</div>
      <h3 class="card-title" id="title-feat-${index}">${feat.title}</h3>
      <p class="card-text" id="desc-feat-${index}">${feat.desc}</p>
    `;
    container.appendChild(card);
  });
});
