# WordLoop — İngilizce Kelime Koçu

HTML + CSS + JavaScript ile yazılmış, aralıklı tekrar kullanan Türkçe arayüzlü kelime öğrenme uygulaması.

## Özellikler

- 177 kelimelik İngilizce–Türkçe başlangıç paketi, İngilizce ve Türkçe örnek cümleler
- Her gün Türkiye saatinde 09:00 / 12:00 / 15:00 / 18:00 / 21:00 yeni oturumlar
- Her oturumda önceki oturumun kelimesini açık uçlu cevapla sınama
- Dün öğrendiğin kelimeler için ters çevrilebilir kartlar
- Aralıklı tekrar: ilk kayıt sonrası 1 gün; doğru yanıtlarla 3, 7, 14 ve 30 günlük aralıklara geçiş. Yanlışta 1 güne dönüş
- Günlük ilerleme, toplam kelime, tekrar sayısı, çalışma serisi
- Tarayıcının desteklediği cihazlarda İngilizce sesli okuma
- İlerlemeyi JSON ile yedekleme / geri yükleme

## Kurulum

`index.html` dosyasını açmak yeterlidir. Kurulum ve internet gerektirmez. Yazı tipi için isteğe bağlı Google Fonts kullanılır; ağ yoksa sistem fontu kullanılır.

## Önemli sınırlamalar

- Veriler yalnızca kullanılan tarayıcının `localStorage` alanında tutulur. Tarayıcı verileri silinirse ilerleme de kaybolur; JSON yedeklemeyi kullanın.
- ChatGPT'deki tekrarlayan hatırlatmalar **ayrı bir mekanizmadır**; ChatGPT oturum mesajları uygulamanın localStorage kayıtlarını doğrudan okuyamaz, ilerleme ve kelime seçimi otomatik senkronize olmaz.
- Web uygulaması kapalıyken tarayıcı üzerinden güvenilir 3 saatlik push bildirimi yapılamaz; bunun için sunucu/push servis altyapısı gerekir.
- Bu paket 177 kelime içerir: 5 yeni kelime/gün ile yaklaşık 35 gün. Sonrasında yeni kelime paketi eklemek gerekir.

## Geliştirme yolu

Kimlik doğrulama, PostgreSQL/Supabase ile cihazlar arası senkronizasyon, VAPID web-push ve servis çalışanı, yönetim ekranından kelime paketi yükleme, otomatik telaffuz/değerlendirme entegrasyonları eklenebilir.
