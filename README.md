# athar-web

الموقع التعريفي وسياسة الخصوصية لتطبيق **أثر** — رفيقك الروحي اليومي.

🔗 **الموقع:** https://ahmedmostafa147.github.io/athar-web/
🔒 **سياسة الخصوصية:** https://ahmedmostafa147.github.io/athar-web/privacy.html

---

## ليه ريبو منفصل؟

ريبو التطبيق (`ahmedmostafa147/Ather`) **خاص**، وGitHub Pages على ريبو خاص
يحتاج اشتراك مدفوع. ورابط سياسة الخصوصية **لازم** يكون عامًا لأن Google Play
يطلبه في نموذج Data Safety.

نفس السبب اللي خلّى خطوط المصحف في ريبو عام منفصل
(`ahmedmostafa147/athar-mushaf-fonts`).

## المصدر

الملفات دي **نسخة** من `landing_page/` في ريبو التطبيق. عدّل هناك أولًا،
وبعدين انسخ التغيير هنا — عشان النسختين ما يفرقوش.

## البنية

```
index.html      الصفحة الرئيسية (نبذة، مزايا، خصوصية، أسئلة شائعة، تحميل)
privacy.html    سياسة الخصوصية الكاملة — الرابط المطلوب لـ Play
css/            base · layout · components · demo · sections
js/             features.js (المزايا) · main.js (المسبحة، السكرول)
assets/         الشعار وصورة الواجهة
```

## نشر تحديث

```bash
git add . && git commit -m "update" && git push
```

GitHub Pages بينشر تلقائيًا من فرع `main` خلال دقيقة تقريبًا.
