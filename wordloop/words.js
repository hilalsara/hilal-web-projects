const WORDS = [
  {
    "id": 1,
    "en": "achieve",
    "tr": "başarmak",
    "example": "You can achieve your goals.",
    "exampleTr": "Hedeflerine ulaşabilirsin."
  },
  {
    "id": 2,
    "en": "improve",
    "tr": "geliştirmek",
    "example": "I want to improve my English.",
    "exampleTr": "İngilizcemi geliştirmek istiyorum."
  },
  {
    "id": 3,
    "en": "confident",
    "tr": "özgüvenli",
    "example": "She feels confident today.",
    "exampleTr": "Bugün kendine güveniyor."
  },
  {
    "id": 4,
    "en": "opportunity",
    "tr": "fırsat",
    "example": "This is a great opportunity.",
    "exampleTr": "Bu harika bir fırsat."
  },
  {
    "id": 5,
    "en": "challenge",
    "tr": "zorluk",
    "example": "Learning takes effort and challenge.",
    "exampleTr": "Öğrenmek emek ve zorluk gerektirir."
  },
  {
    "id": 6,
    "en": "manage",
    "tr": "yönetmek",
    "example": "I manage my daily tasks.",
    "exampleTr": "Günlük görevlerimi yönetiyorum."
  },
  {
    "id": 7,
    "en": "reliable",
    "tr": "güvenilir",
    "example": "This source is reliable.",
    "exampleTr": "Bu kaynak güvenilirdir."
  },
  {
    "id": 8,
    "en": "consider",
    "tr": "değerlendirmek",
    "example": "Please consider my idea.",
    "exampleTr": "Lütfen fikrimi değerlendir."
  },
  {
    "id": 9,
    "en": "necessary",
    "tr": "gerekli",
    "example": "Practice is necessary.",
    "exampleTr": "Pratik yapmak gereklidir."
  },
  {
    "id": 10,
    "en": "maintain",
    "tr": "sürdürmek",
    "example": "Maintain a healthy routine.",
    "exampleTr": "Sağlıklı bir rutini sürdür."
  },
  {
    "id": 11,
    "en": "attend",
    "tr": "katılmak",
    "example": "I will attend the meeting.",
    "exampleTr": "Toplantıya katılacağım."
  },
  {
    "id": 12,
    "en": "avoid",
    "tr": "kaçınmak",
    "example": "Try to avoid mistakes.",
    "exampleTr": "Hatalardan kaçınmaya çalış."
  },
  {
    "id": 13,
    "en": "benefit",
    "tr": "fayda",
    "example": "Reading has many benefits.",
    "exampleTr": "Okumanın birçok faydası vardır."
  },
  {
    "id": 14,
    "en": "compare",
    "tr": "karşılaştırmak",
    "example": "Compare the two options.",
    "exampleTr": "İki seçeneği karşılaştır."
  },
  {
    "id": 15,
    "en": "confirm",
    "tr": "doğrulamak",
    "example": "Please confirm the date.",
    "exampleTr": "Lütfen tarihi doğrula."
  },
  {
    "id": 16,
    "en": "decide",
    "tr": "karar vermek",
    "example": "I need to decide today.",
    "exampleTr": "Bugün karar vermem gerekiyor."
  },
  {
    "id": 17,
    "en": "deliver",
    "tr": "teslim etmek",
    "example": "They deliver the package tomorrow.",
    "exampleTr": "Paketi yarın teslim edecekler."
  },
  {
    "id": 18,
    "en": "describe",
    "tr": "tarif etmek",
    "example": "Describe what happened.",
    "exampleTr": "Ne olduğunu tarif et."
  },
  {
    "id": 19,
    "en": "develop",
    "tr": "geliştirmek",
    "example": "We develop new software.",
    "exampleTr": "Yeni yazılımlar geliştiriyoruz."
  },
  {
    "id": 20,
    "en": "discover",
    "tr": "keşfetmek",
    "example": "I want to discover new places.",
    "exampleTr": "Yeni yerler keşfetmek istiyorum."
  },
  {
    "id": 21,
    "en": "discuss",
    "tr": "tartışmak",
    "example": "We can discuss the plan.",
    "exampleTr": "Planı tartışabiliriz."
  },
  {
    "id": 22,
    "en": "efficient",
    "tr": "verimli",
    "example": "This process is efficient.",
    "exampleTr": "Bu süreç verimlidir."
  },
  {
    "id": 23,
    "en": "effort",
    "tr": "çaba",
    "example": "Success requires effort.",
    "exampleTr": "Başarı çaba gerektirir."
  },
  {
    "id": 24,
    "en": "encourage",
    "tr": "cesaretlendirmek",
    "example": "My friends encourage me.",
    "exampleTr": "Arkadaşlarım beni cesaretlendiriyor."
  },
  {
    "id": 25,
    "en": "environment",
    "tr": "çevre",
    "example": "Protect the environment.",
    "exampleTr": "Çevreyi koru."
  },
  {
    "id": 26,
    "en": "essential",
    "tr": "temel",
    "example": "Sleep is essential for health.",
    "exampleTr": "Uyku sağlık için temeldir."
  },
  {
    "id": 27,
    "en": "evidence",
    "tr": "kanıt",
    "example": "We need more evidence.",
    "exampleTr": "Daha fazla kanıta ihtiyacımız var."
  },
  {
    "id": 28,
    "en": "expect",
    "tr": "beklemek",
    "example": "I expect an answer soon.",
    "exampleTr": "Yakında bir cevap bekliyorum."
  },
  {
    "id": 29,
    "en": "experience",
    "tr": "deneyim",
    "example": "This job gave me experience.",
    "exampleTr": "Bu iş bana deneyim kazandırdı."
  },
  {
    "id": 30,
    "en": "explain",
    "tr": "açıklamak",
    "example": "Can you explain the problem?",
    "exampleTr": "Sorunu açıklayabilir misin?"
  },
  {
    "id": 31,
    "en": "familiar",
    "tr": "tanıdık",
    "example": "This voice sounds familiar.",
    "exampleTr": "Bu ses tanıdık geliyor."
  },
  {
    "id": 32,
    "en": "flexible",
    "tr": "esnek",
    "example": "My work hours are flexible.",
    "exampleTr": "Çalışma saatlerim esnektir."
  },
  {
    "id": 33,
    "en": "focus",
    "tr": "odaklanmak",
    "example": "Focus on one task at a time.",
    "exampleTr": "Bir seferde tek bir işe odaklan."
  },
  {
    "id": 34,
    "en": "fortunately",
    "tr": "neyse ki",
    "example": "Fortunately, nobody was hurt.",
    "exampleTr": "Neyse ki kimse yaralanmadı."
  },
  {
    "id": 35,
    "en": "gather",
    "tr": "toplamak",
    "example": "We gather useful information.",
    "exampleTr": "Faydalı bilgiler topluyoruz."
  },
  {
    "id": 36,
    "en": "goal",
    "tr": "hedef",
    "example": "My goal is to speak fluently.",
    "exampleTr": "Hedefim akıcı konuşmak."
  },
  {
    "id": 37,
    "en": "handle",
    "tr": "ele almak",
    "example": "I can handle this situation.",
    "exampleTr": "Bu durumla başa çıkabilirim."
  },
  {
    "id": 38,
    "en": "hesitate",
    "tr": "tereddüt etmek",
    "example": "Do not hesitate to ask.",
    "exampleTr": "Sormaktan çekinme."
  },
  {
    "id": 39,
    "en": "identify",
    "tr": "belirlemek",
    "example": "Identify the main problem.",
    "exampleTr": "Ana sorunu belirle."
  },
  {
    "id": 40,
    "en": "increase",
    "tr": "artırmak",
    "example": "We need to increase sales.",
    "exampleTr": "Satışları artırmamız gerekiyor."
  },
  {
    "id": 41,
    "en": "independent",
    "tr": "bağımsız",
    "example": "She wants to be independent.",
    "exampleTr": "Bağımsız olmak istiyor."
  },
  {
    "id": 42,
    "en": "influence",
    "tr": "etkilemek",
    "example": "Weather can influence mood.",
    "exampleTr": "Hava durumu ruh halini etkileyebilir."
  },
  {
    "id": 43,
    "en": "instead",
    "tr": "yerine",
    "example": "Drink water instead of soda.",
    "exampleTr": "Gazlı içecek yerine su iç."
  },
  {
    "id": 44,
    "en": "involve",
    "tr": "içermek",
    "example": "This project involves teamwork.",
    "exampleTr": "Bu proje ekip çalışması içerir."
  },
  {
    "id": 45,
    "en": "issue",
    "tr": "sorun",
    "example": "We solved the issue quickly.",
    "exampleTr": "Sorunu hızlıca çözdük."
  },
  {
    "id": 46,
    "en": "knowledge",
    "tr": "bilgi",
    "example": "Knowledge grows with practice.",
    "exampleTr": "Bilgi pratikle gelişir."
  },
  {
    "id": 47,
    "en": "likely",
    "tr": "muhtemel",
    "example": "It is likely to rain.",
    "exampleTr": "Yağmur yağması muhtemel."
  },
  {
    "id": 48,
    "en": "limit",
    "tr": "sınır",
    "example": "Set a daily time limit.",
    "exampleTr": "Günlük zaman sınırı koy."
  },
  {
    "id": 49,
    "en": "local",
    "tr": "yerel",
    "example": "Visit a local market.",
    "exampleTr": "Yerel bir pazarı ziyaret et."
  },
  {
    "id": 50,
    "en": "method",
    "tr": "yöntem",
    "example": "This method works well.",
    "exampleTr": "Bu yöntem iyi işe yarıyor."
  },
  {
    "id": 51,
    "en": "notice",
    "tr": "fark etmek",
    "example": "Did you notice the change?",
    "exampleTr": "Değişikliği fark ettin mi?"
  },
  {
    "id": 52,
    "en": "obtain",
    "tr": "elde etmek",
    "example": "You can obtain a certificate.",
    "exampleTr": "Sertifika elde edebilirsin."
  },
  {
    "id": 53,
    "en": "organize",
    "tr": "düzenlemek",
    "example": "Organize your files clearly.",
    "exampleTr": "Dosyalarını düzenli şekilde organize et."
  },
  {
    "id": 54,
    "en": "outcome",
    "tr": "sonuç",
    "example": "The outcome was positive.",
    "exampleTr": "Sonuç olumluydu."
  },
  {
    "id": 55,
    "en": "participate",
    "tr": "katılmak",
    "example": "Everyone can participate.",
    "exampleTr": "Herkes katılabilir."
  },
  {
    "id": 56,
    "en": "patient",
    "tr": "sabırlı",
    "example": "Be patient with yourself.",
    "exampleTr": "Kendine karşı sabırlı ol."
  },
  {
    "id": 57,
    "en": "perform",
    "tr": "yerine getirmek",
    "example": "She performs her duties well.",
    "exampleTr": "Görevlerini iyi yerine getiriyor."
  },
  {
    "id": 58,
    "en": "prevent",
    "tr": "önlemek",
    "example": "Strong passwords prevent attacks.",
    "exampleTr": "Güçlü şifreler saldırıları önler."
  },
  {
    "id": 59,
    "en": "priority",
    "tr": "öncelik",
    "example": "Safety is our priority.",
    "exampleTr": "Güvenlik önceliğimizdir."
  },
  {
    "id": 60,
    "en": "progress",
    "tr": "ilerleme",
    "example": "I see progress every week.",
    "exampleTr": "Her hafta ilerleme görüyorum."
  },
  {
    "id": 61,
    "en": "provide",
    "tr": "sağlamak",
    "example": "We provide technical support.",
    "exampleTr": "Teknik destek sağlıyoruz."
  },
  {
    "id": 62,
    "en": "purpose",
    "tr": "amaç",
    "example": "What is the purpose of this tool?",
    "exampleTr": "Bu aracın amacı nedir?"
  },
  {
    "id": 63,
    "en": "recognize",
    "tr": "tanımak",
    "example": "I recognize that pattern.",
    "exampleTr": "Bu deseni tanıyorum."
  },
  {
    "id": 64,
    "en": "reduce",
    "tr": "azaltmak",
    "example": "Reduce unnecessary costs.",
    "exampleTr": "Gereksiz maliyetleri azalt."
  },
  {
    "id": 65,
    "en": "reflect",
    "tr": "yansıtmak",
    "example": "Your work reflects your effort.",
    "exampleTr": "İşin çabanı yansıtıyor."
  },
  {
    "id": 66,
    "en": "refuse",
    "tr": "reddetmek",
    "example": "He refused the offer.",
    "exampleTr": "Teklifi reddetti."
  },
  {
    "id": 67,
    "en": "regular",
    "tr": "düzenli",
    "example": "Regular study helps learning.",
    "exampleTr": "Düzenli çalışma öğrenmeye yardımcı olur."
  },
  {
    "id": 68,
    "en": "remind",
    "tr": "hatırlatmak",
    "example": "Remind me to practice.",
    "exampleTr": "Bana pratik yapmayı hatırlat."
  },
  {
    "id": 69,
    "en": "require",
    "tr": "gerektirmek",
    "example": "This task requires patience.",
    "exampleTr": "Bu görev sabır gerektirir."
  },
  {
    "id": 70,
    "en": "research",
    "tr": "araştırma",
    "example": "I did research before buying.",
    "exampleTr": "Satın almadan önce araştırma yaptım."
  },
  {
    "id": 71,
    "en": "resolve",
    "tr": "çözmek",
    "example": "We will resolve the error.",
    "exampleTr": "Hatayı çözeceğiz."
  },
  {
    "id": 72,
    "en": "respond",
    "tr": "yanıtlamak",
    "example": "Please respond by Monday.",
    "exampleTr": "Lütfen pazartesiye kadar yanıt ver."
  },
  {
    "id": 73,
    "en": "responsible",
    "tr": "sorumlu",
    "example": "I am responsible for this task.",
    "exampleTr": "Bu görevden ben sorumluyum."
  },
  {
    "id": 74,
    "en": "result",
    "tr": "sonuç",
    "example": "The result surprised everyone.",
    "exampleTr": "Sonuç herkesi şaşırttı."
  },
  {
    "id": 75,
    "en": "review",
    "tr": "gözden geçirmek",
    "example": "Review your notes tonight.",
    "exampleTr": "Bu gece notlarını gözden geçir."
  },
  {
    "id": 76,
    "en": "schedule",
    "tr": "programlamak",
    "example": "Schedule your next lesson.",
    "exampleTr": "Bir sonraki dersini planla."
  },
  {
    "id": 77,
    "en": "secure",
    "tr": "güvenli",
    "example": "Keep your account secure.",
    "exampleTr": "Hesabını güvende tut."
  },
  {
    "id": 78,
    "en": "separate",
    "tr": "ayırmak",
    "example": "Separate work and personal files.",
    "exampleTr": "İş ve kişisel dosyaları ayır."
  },
  {
    "id": 79,
    "en": "significant",
    "tr": "önemli",
    "example": "There was a significant improvement.",
    "exampleTr": "Önemli bir gelişme oldu."
  },
  {
    "id": 80,
    "en": "solution",
    "tr": "çözüm",
    "example": "We found a simple solution.",
    "exampleTr": "Basit bir çözüm bulduk."
  },
  {
    "id": 81,
    "en": "specific",
    "tr": "belirli",
    "example": "Give me a specific example.",
    "exampleTr": "Bana belirli bir örnek ver."
  },
  {
    "id": 82,
    "en": "strategy",
    "tr": "strateji",
    "example": "We need a clear strategy.",
    "exampleTr": "Açık bir stratejiye ihtiyacımız var."
  },
  {
    "id": 83,
    "en": "succeed",
    "tr": "başarılı olmak",
    "example": "You can succeed with practice.",
    "exampleTr": "Pratikle başarılı olabilirsin."
  },
  {
    "id": 84,
    "en": "suggest",
    "tr": "önermek",
    "example": "Can you suggest a book?",
    "exampleTr": "Bir kitap önerebilir misin?"
  },
  {
    "id": 85,
    "en": "support",
    "tr": "desteklemek",
    "example": "My team supports my idea.",
    "exampleTr": "Ekibim fikrimi destekliyor."
  },
  {
    "id": 86,
    "en": "surround",
    "tr": "çevrelemek",
    "example": "Trees surround the house.",
    "exampleTr": "Ağaçlar evi çevreliyor."
  },
  {
    "id": 87,
    "en": "suitable",
    "tr": "uygun",
    "example": "This time is suitable for me.",
    "exampleTr": "Bu saat benim için uygun."
  },
  {
    "id": 88,
    "en": "summary",
    "tr": "özet",
    "example": "Write a short summary.",
    "exampleTr": "Kısa bir özet yaz."
  },
  {
    "id": 89,
    "en": "target",
    "tr": "hedeflemek",
    "example": "We target better results.",
    "exampleTr": "Daha iyi sonuçlar hedefliyoruz."
  },
  {
    "id": 90,
    "en": "temporary",
    "tr": "geçici",
    "example": "This is a temporary problem.",
    "exampleTr": "Bu geçici bir sorun."
  },
  {
    "id": 91,
    "en": "therefore",
    "tr": "bu nedenle",
    "example": "It was late; therefore, we left.",
    "exampleTr": "Geç olmuştu; bu nedenle ayrıldık."
  },
  {
    "id": 92,
    "en": "thorough",
    "tr": "ayrıntılı",
    "example": "Do a thorough check.",
    "exampleTr": "Ayrıntılı bir kontrol yap."
  },
  {
    "id": 93,
    "en": "transfer",
    "tr": "aktarmak",
    "example": "Transfer the file to the server.",
    "exampleTr": "Dosyayı sunucuya aktar."
  },
  {
    "id": 94,
    "en": "trust",
    "tr": "güvenmek",
    "example": "I trust your judgment.",
    "exampleTr": "Senin kararına güveniyorum."
  },
  {
    "id": 95,
    "en": "typical",
    "tr": "tipik",
    "example": "This is a typical mistake.",
    "exampleTr": "Bu tipik bir hata."
  },
  {
    "id": 96,
    "en": "update",
    "tr": "güncellemek",
    "example": "Update the application regularly.",
    "exampleTr": "Uygulamayı düzenli olarak güncelle."
  },
  {
    "id": 97,
    "en": "useful",
    "tr": "faydalı",
    "example": "This shortcut is useful.",
    "exampleTr": "Bu kısayol faydalı."
  },
  {
    "id": 98,
    "en": "validate",
    "tr": "doğrulamak",
    "example": "Validate the form inputs.",
    "exampleTr": "Form girdilerini doğrula."
  },
  {
    "id": 99,
    "en": "valuable",
    "tr": "değerli",
    "example": "Your time is valuable.",
    "exampleTr": "Zamanın değerlidir."
  },
  {
    "id": 100,
    "en": "variety",
    "tr": "çeşitlilik",
    "example": "We need a variety of examples.",
    "exampleTr": "Çeşitli örneklere ihtiyacımız var."
  },
  {
    "id": 101,
    "en": "visible",
    "tr": "görünür",
    "example": "The button is clearly visible.",
    "exampleTr": "Düğme açıkça görülebiliyor."
  },
  {
    "id": 102,
    "en": "warning",
    "tr": "uyarı",
    "example": "The system showed a warning.",
    "exampleTr": "Sistem bir uyarı gösterdi."
  },
  {
    "id": 103,
    "en": "worth",
    "tr": "değer",
    "example": "This course is worth your time.",
    "exampleTr": "Bu kurs zamanına değer."
  },
  {
    "id": 104,
    "en": "ability",
    "tr": "yetenek",
    "example": "She has the ability to learn fast.",
    "exampleTr": "Hızlı öğrenme yeteneği var."
  },
  {
    "id": 105,
    "en": "accurate",
    "tr": "doğru",
    "example": "We need accurate data.",
    "exampleTr": "Doğru verilere ihtiyacımız var."
  },
  {
    "id": 106,
    "en": "adapt",
    "tr": "uyum sağlamak",
    "example": "I can adapt to new tools.",
    "exampleTr": "Yeni araçlara uyum sağlayabilirim."
  },
  {
    "id": 107,
    "en": "advantage",
    "tr": "avantaj",
    "example": "Experience is an advantage.",
    "exampleTr": "Deneyim bir avantajdır."
  },
  {
    "id": 108,
    "en": "approach",
    "tr": "yaklaşım",
    "example": "Try a different approach.",
    "exampleTr": "Farklı bir yaklaşım dene."
  },
  {
    "id": 109,
    "en": "approve",
    "tr": "onaylamak",
    "example": "The manager approved the request.",
    "exampleTr": "Yönetici talebi onayladı."
  },
  {
    "id": 110,
    "en": "arrange",
    "tr": "düzenlemek",
    "example": "Arrange the meeting for Friday.",
    "exampleTr": "Toplantıyı cuma gününe ayarla."
  },
  {
    "id": 111,
    "en": "assume",
    "tr": "varsaymak",
    "example": "Do not assume everyone knows.",
    "exampleTr": "Herkesin bildiğini varsayma."
  },
  {
    "id": 112,
    "en": "available",
    "tr": "müsait",
    "example": "Is this room available?",
    "exampleTr": "Bu oda müsait mi?"
  },
  {
    "id": 113,
    "en": "aware",
    "tr": "farkında",
    "example": "I am aware of the risk.",
    "exampleTr": "Riskin farkındayım."
  },
  {
    "id": 114,
    "en": "balance",
    "tr": "denge",
    "example": "Find a balance between work and rest.",
    "exampleTr": "İş ve dinlenme arasında denge kur."
  },
  {
    "id": 115,
    "en": "behaviour",
    "tr": "davranış",
    "example": "Her behaviour was polite.",
    "exampleTr": "Davranışı kibardı."
  },
  {
    "id": 116,
    "en": "brief",
    "tr": "kısa",
    "example": "Give me a brief answer.",
    "exampleTr": "Bana kısa bir cevap ver."
  },
  {
    "id": 117,
    "en": "capacity",
    "tr": "kapasite",
    "example": "The room has limited capacity.",
    "exampleTr": "Odanın kapasitesi sınırlı."
  },
  {
    "id": 118,
    "en": "cause",
    "tr": "neden olmak",
    "example": "What caused the delay?",
    "exampleTr": "Gecikmeye ne sebep oldu?"
  },
  {
    "id": 119,
    "en": "clarify",
    "tr": "netleştirmek",
    "example": "Can you clarify the question?",
    "exampleTr": "Soruyu netleştirebilir misin?"
  },
  {
    "id": 120,
    "en": "combine",
    "tr": "birleştirmek",
    "example": "Combine these two files.",
    "exampleTr": "Bu iki dosyayı birleştir."
  },
  {
    "id": 121,
    "en": "communicate",
    "tr": "iletişim kurmak",
    "example": "Teams need to communicate clearly.",
    "exampleTr": "Ekiplerin açıkça iletişim kurması gerekir."
  },
  {
    "id": 122,
    "en": "complete",
    "tr": "tamamlamak",
    "example": "Complete the task before lunch.",
    "exampleTr": "Görevi öğle yemeğinden önce tamamla."
  },
  {
    "id": 123,
    "en": "concern",
    "tr": "endişe",
    "example": "Security is a major concern.",
    "exampleTr": "Güvenlik önemli bir endişe kaynağıdır."
  },
  {
    "id": 124,
    "en": "conduct",
    "tr": "yürütmek",
    "example": "We conduct user tests.",
    "exampleTr": "Kullanıcı testleri yürütüyoruz."
  },
  {
    "id": 125,
    "en": "consistent",
    "tr": "tutarlı",
    "example": "Be consistent with your practice.",
    "exampleTr": "Pratiğinde tutarlı ol."
  },
  {
    "id": 126,
    "en": "contribute",
    "tr": "katkıda bulunmak",
    "example": "Everyone can contribute ideas.",
    "exampleTr": "Herkes fikirlerle katkıda bulunabilir."
  },
  {
    "id": 127,
    "en": "convenient",
    "tr": "uygun, pratik",
    "example": "Online lessons are convenient.",
    "exampleTr": "Çevrimiçi dersler pratiktir."
  },
  {
    "id": 128,
    "en": "cooperate",
    "tr": "iş birliği yapmak",
    "example": "We cooperate on this project.",
    "exampleTr": "Bu projede iş birliği yapıyoruz."
  },
  {
    "id": 129,
    "en": "correct",
    "tr": "düzeltmek",
    "example": "Correct the spelling mistake.",
    "exampleTr": "Yazım hatasını düzelt."
  },
  {
    "id": 130,
    "en": "critical",
    "tr": "kritik",
    "example": "This is a critical update.",
    "exampleTr": "Bu kritik bir güncelleme."
  },
  {
    "id": 131,
    "en": "curious",
    "tr": "meraklı",
    "example": "I am curious about technology.",
    "exampleTr": "Teknolojiyi merak ediyorum."
  },
  {
    "id": 132,
    "en": "define",
    "tr": "tanımlamak",
    "example": "Define the project requirements.",
    "exampleTr": "Proje gereksinimlerini tanımla."
  },
  {
    "id": 133,
    "en": "demand",
    "tr": "talep",
    "example": "Demand for the service is high.",
    "exampleTr": "Hizmete talep yüksek."
  },
  {
    "id": 134,
    "en": "depend",
    "tr": "bağlı olmak",
    "example": "It depends on the weather.",
    "exampleTr": "Bu hava durumuna bağlı."
  },
  {
    "id": 135,
    "en": "design",
    "tr": "tasarlamak",
    "example": "Design a clean interface.",
    "exampleTr": "Temiz bir arayüz tasarla."
  },
  {
    "id": 136,
    "en": "detect",
    "tr": "tespit etmek",
    "example": "The tool can detect errors.",
    "exampleTr": "Araç hataları tespit edebilir."
  },
  {
    "id": 137,
    "en": "detail",
    "tr": "ayrıntı",
    "example": "Check every detail carefully.",
    "exampleTr": "Her ayrıntıyı dikkatlice kontrol et."
  },
  {
    "id": 138,
    "en": "determine",
    "tr": "belirlemek",
    "example": "Determine the best option.",
    "exampleTr": "En iyi seçeneği belirle."
  },
  {
    "id": 139,
    "en": "distribute",
    "tr": "dağıtmak",
    "example": "We distribute tasks fairly.",
    "exampleTr": "Görevleri adilce dağıtıyoruz."
  },
  {
    "id": 140,
    "en": "diverse",
    "tr": "çeşitli",
    "example": "Our team has diverse skills.",
    "exampleTr": "Ekibimizin çeşitli yetenekleri var."
  },
  {
    "id": 141,
    "en": "ensure",
    "tr": "sağlamak",
    "example": "Ensure the backup is complete.",
    "exampleTr": "Yedeğin tamamlandığından emin ol."
  },
  {
    "id": 142,
    "en": "estimate",
    "tr": "tahmin etmek",
    "example": "Estimate the project cost.",
    "exampleTr": "Proje maliyetini tahmin et."
  },
  {
    "id": 143,
    "en": "evaluate",
    "tr": "değerlendirmek",
    "example": "Evaluate the test results.",
    "exampleTr": "Test sonuçlarını değerlendir."
  },
  {
    "id": 144,
    "en": "expand",
    "tr": "genişletmek",
    "example": "We will expand the system.",
    "exampleTr": "Sistemi genişleteceğiz."
  },
  {
    "id": 145,
    "en": "frequent",
    "tr": "sık",
    "example": "Frequent reviews improve memory.",
    "exampleTr": "Sık tekrarlar hafızayı güçlendirir."
  },
  {
    "id": 146,
    "en": "generate",
    "tr": "üretmek",
    "example": "Generate a new report.",
    "exampleTr": "Yeni bir rapor oluştur."
  },
  {
    "id": 147,
    "en": "impact",
    "tr": "etki",
    "example": "Small changes have an impact.",
    "exampleTr": "Küçük değişikliklerin etkisi vardır."
  },
  {
    "id": 148,
    "en": "implement",
    "tr": "uygulamak",
    "example": "Implement the new feature.",
    "exampleTr": "Yeni özelliği uygula."
  },
  {
    "id": 149,
    "en": "indicate",
    "tr": "belirtmek",
    "example": "The icon indicates an error.",
    "exampleTr": "Simge bir hatayı belirtir."
  },
  {
    "id": 150,
    "en": "initial",
    "tr": "ilk, başlangıç",
    "example": "This is the initial version.",
    "exampleTr": "Bu ilk sürüm."
  },
  {
    "id": 151,
    "en": "intend",
    "tr": "niyet etmek",
    "example": "I intend to study tonight.",
    "exampleTr": "Bu gece çalışmayı düşünüyorum."
  },
  {
    "id": 152,
    "en": "interrupt",
    "tr": "kesintiye uğratmak",
    "example": "Do not interrupt the speaker.",
    "exampleTr": "Konuşmacının sözünü kesme."
  },
  {
    "id": 153,
    "en": "investigate",
    "tr": "incelemek",
    "example": "We need to investigate the bug.",
    "exampleTr": "Hatayı incelememiz gerekiyor."
  },
  {
    "id": 154,
    "en": "measure",
    "tr": "ölçmek",
    "example": "Measure your progress weekly.",
    "exampleTr": "İlerlemeni haftalık ölç."
  },
  {
    "id": 155,
    "en": "monitor",
    "tr": "izlemek",
    "example": "Monitor system performance.",
    "exampleTr": "Sistem performansını izle."
  },
  {
    "id": 156,
    "en": "negotiate",
    "tr": "müzakere etmek",
    "example": "We need to negotiate the terms.",
    "exampleTr": "Şartları müzakere etmemiz gerekiyor."
  },
  {
    "id": 157,
    "en": "observe",
    "tr": "gözlemlemek",
    "example": "Observe how users interact.",
    "exampleTr": "Kullanıcıların nasıl etkileştiğini gözlemle."
  },
  {
    "id": 158,
    "en": "overcome",
    "tr": "üstesinden gelmek",
    "example": "We can overcome this problem.",
    "exampleTr": "Bu sorunun üstesinden gelebiliriz."
  },
  {
    "id": 159,
    "en": "predict",
    "tr": "tahmin etmek",
    "example": "Can you predict the outcome?",
    "exampleTr": "Sonucu tahmin edebilir misin?"
  },
  {
    "id": 160,
    "en": "prefer",
    "tr": "tercih etmek",
    "example": "I prefer learning with examples.",
    "exampleTr": "Örneklerle öğrenmeyi tercih ederim."
  },
  {
    "id": 161,
    "en": "prepare",
    "tr": "hazırlamak",
    "example": "Prepare for the interview.",
    "exampleTr": "Görüşmeye hazırlan."
  },
  {
    "id": 162,
    "en": "principle",
    "tr": "ilke",
    "example": "Honesty is an important principle.",
    "exampleTr": "Dürüstlük önemli bir ilkedir."
  },
  {
    "id": 163,
    "en": "process",
    "tr": "süreç",
    "example": "Follow the process step by step.",
    "exampleTr": "Süreci adım adım takip et."
  },
  {
    "id": 164,
    "en": "promote",
    "tr": "teşvik etmek",
    "example": "We promote good habits.",
    "exampleTr": "İyi alışkanlıkları teşvik ediyoruz."
  },
  {
    "id": 165,
    "en": "protect",
    "tr": "korumak",
    "example": "Protect your personal data.",
    "exampleTr": "Kişisel verilerini koru."
  },
  {
    "id": 166,
    "en": "recover",
    "tr": "kurtarmak",
    "example": "Recover the deleted file.",
    "exampleTr": "Silinen dosyayı kurtar."
  },
  {
    "id": 167,
    "en": "relevant",
    "tr": "ilgili",
    "example": "Choose relevant examples.",
    "exampleTr": "İlgili örnekler seç."
  },
  {
    "id": 168,
    "en": "replace",
    "tr": "değiştirmek",
    "example": "Replace the old battery.",
    "exampleTr": "Eski pili değiştir."
  },
  {
    "id": 169,
    "en": "request",
    "tr": "istek, talep",
    "example": "Send a support request.",
    "exampleTr": "Bir destek talebi gönder."
  },
  {
    "id": 170,
    "en": "resource",
    "tr": "kaynak",
    "example": "Time is a limited resource.",
    "exampleTr": "Zaman sınırlı bir kaynaktır."
  },
  {
    "id": 171,
    "en": "restrict",
    "tr": "kısıtlamak",
    "example": "Restrict access to this folder.",
    "exampleTr": "Bu klasöre erişimi kısıtla."
  },
  {
    "id": 172,
    "en": "retain",
    "tr": "akılda tutmak",
    "example": "Review words to retain them.",
    "exampleTr": "Kelimeleri akılda tutmak için tekrar et."
  },
  {
    "id": 173,
    "en": "select",
    "tr": "seçmek",
    "example": "Select the correct answer.",
    "exampleTr": "Doğru cevabı seç."
  },
  {
    "id": 174,
    "en": "share",
    "tr": "paylaşmak",
    "example": "Share the report with the team.",
    "exampleTr": "Raporu ekiple paylaş."
  },
  {
    "id": 175,
    "en": "solve",
    "tr": "çözmek",
    "example": "Solve the problem together.",
    "exampleTr": "Sorunu birlikte çöz."
  },
  {
    "id": 176,
    "en": "submit",
    "tr": "göndermek",
    "example": "Submit the form before Friday.",
    "exampleTr": "Formu cumadan önce gönder."
  },
  {
    "id": 177,
    "en": "verify",
    "tr": "doğrulamak",
    "example": "Verify your email address.",
    "exampleTr": "E-posta adresini doğrula."
  }
];
