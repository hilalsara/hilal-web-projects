# SprintDesk — Görev ve proje otomasyonu

Üç sütunlu Kanban görev yönetimi: yapılacak / devam ediyor / tamamlandı.

## Özellikler
- Yeni görev oluşturma, düzenleme, silme
- Görevleri aşamalar arasında taşıma; tamamlanan ve geciken görev sayıları
- Öncelik filtresi ve metin araması
- Hedef tarih, sorumlu ve açıklama
- CSV dışa aktarma; tarayıcıda localStorage kalıcılığı

## Çalıştır
Depo kökünden bir HTTP sunucusu başlat (\`python -m http.server 8000\`) ve \`/sprintdesk/\` adresini aç. \`index.html\` dosyası da doğrudan açılabilir.

**Sınırlama:** Demo uygulamasıdır; ekipler arası senkronizasyon, sunucu, giriş ve yetkilendirme içermez. Gerçek müşteri verisi girilmemelidir.

**Designed & Developed by Hilal**
