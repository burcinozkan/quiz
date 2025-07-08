# 📚 Konu Bazlı Bilgi Testi (Quiz Uygulaması)

Bu proje, Next.js App Router ve TypeScript kullanılarak geliştirilmiş bir quiz uygulamasıdır. Kullanıcılar seçilen konuda 10 soruluk bir test çözerek sonuçlarını anında görebilir.

---

## 🚀 Kullanılan Teknolojiler

- ✅ Next.js 14 (App Router)
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ React Context API
- ✅ Statik veri ile çalışma (veritabanı veya API kullanılmadı)

---

## 🎯 Uygulama Özellikleri

- 📍 `/quiz` rotasında quiz başlar
- 🔁 Sorular tek tek gösterilir, kullanıcı her soruya cevap verir
- 🧠 Veriler `context` ile tutulur
- 🧾 `/result` ekranında:
  - Toplam doğru sayısı
  - Başarı yüzdesi
  - Zorluk bazlı başarı
  - Genel seviye değerlendirmesi ("Başlangıç", "Orta Seviye", "Uzman") gösterilir

---

## 🧪 Soru Zorluk Dağılımı

- 3 adet kolay (`easy`)
- 4 adet orta (`medium`)
- 3 adet zor (`hard`)

---

## 📁 Proje Yapısı

quiz-app/
├── app/
│ ├── page.tsx # Anasayfa (/quiz yönlendirmesi)
│ ├── quiz/page.tsx # Quiz sayfası
│ └── result/page.tsx # Sonuç sayfası
├── components/ # (İsteğe bağlı bileşenler)
├── context/QuizContext.tsx # Kullanıcı cevapları için context
├── data/questions.ts # Statik soru verisi
├── types/types.ts # Tip tanımlamaları
├── public/
├── styles/ # Tailwind (globals.css)

---

## ⚙️ Kurulum ve Çalıştırma

1. Bu repoyu klonlayın:

```bash
git clone https://github.com/kullaniciadi/quiz-app.git
cd quiz-app

npm install

npm run dev

Uygulama statik veriyle çalışır. Tüm sorular data/questions.ts içinde tanımlıdır.

Tip güvenliği types.ts dosyasında sağlanmıştır.

Context yapısı tüm sayfalarda ortak veri yönetimi sağlar.

```
