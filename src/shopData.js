// Replace placeholders with your actual book catalog, image files and Telegram URL.
export const shop = {
 address:'အမှတ် (၁) သာယာအေးကွန်ဒို၊ သာယာအေးလမ်း၊ (၃) ရပ်ကွက်၊ မရမ်းကုန်းမြို့နယ်။',
 directions:'လိုင်းကားစီးပါက သမိုင်းမှတ်တိုင်နှင့် ကျိုက်ဝိုင်းမှတ်တိုင်ကြား ရဲရန်အောင်မှတ်တိုင်တွင် ဆင်းရပါမည်။',
 hours:'မနက် ၉:၀၀ မှ ညနေ ၅:၀၀ အထိ',
 phone:'09965138347',
 telegram:'', // e.g. https://t.me/YOUR_SHOP_USERNAME — leave empty until verified
 books:[
  {id:'book-01', level:'N5',title:'Minna no Nihongo I',description:'初級 I · Main textbook',price:null,image:'/images/books/book-01.jpg',available:true},
  {id:'book-02', level:'N5',title:'N5 Speed Master – Reading & Listening',description:'N5 読解・聴解',price:null,image:'/images/books/book-02.jpg',available:true},
  {id:'book-03', level:'N5',title:'N5 Nihongo Challenge – Kanji',description:'N5 漢字',price:null,image:'/images/books/book-03.jpg',available:true},
  {id:'book-04', level:'N5',title:'N5 JLPT Old Questions',description:'Online video class',price:null,image:'/images/books/book-04.jpg',available:true},
  {id:'book-05', level:'N5',title:'N5 Mock Exam Practice',description:'Practice test · 3 sets',price:null,image:'/images/books/book-05.jpg',available:true},
  {id:'book-06', level:'N4',title:'N4 Meaning · Kanji · Grammar',description:'N4 study materials',price:null,image:'/images/books/book-06.jpg',available:true},
  {id:'book-07', level:'N4',title:'N4 Shinkanzen – Reading & Listening',description:'N4 読解・聴解',price:null,image:'/images/books/book-07.jpg',available:true},
  {id:'book-08', level:'N4',title:'N4 Quick Master – Reading & Listening',description:'N4 読解・聴解',price:null,image:'/images/books/book-08.jpg',available:true},
  {id:'book-09', level:'N4',title:'N4 JLPT Old Questions',description:'Online video class',price:null,image:'/images/books/book-09.jpg',available:true},
  {id:'book-10', level:'N4',title:'N4 Mock Exam Practice',description:'Practice test · 3 sets',price:null,image:'/images/books/book-10.jpg',available:true},
  {id:'book-11', level:'N4',title:'N4 Minna / Challenge Grammar',description:'N4 Meaning · Kanji · Grammar',price:null,image:'/images/books/book-11.jpg',available:true},
  {id:'book-12', level:'N3',title:'N3 Kanji & Grammar – No. 1',description:'N3 study materials',price:null,image:'/images/books/book-12.jpg',available:true},
  {id:'book-13', level:'N3',title:'N3 Speed Master – Standard 2400',description:'Vocabulary',price:null,image:'/images/books/book-13.jpg',available:true},
  {id:'book-14', level:'N3',title:'N3 Shinkanzen – Reading & Listening',description:'N3 読解・聴解',price:null,image:'/images/books/book-14.jpg',available:true},
  {id:'book-15', level:'N3',title:'N3 Quick Master – Reading & Listening',description:'N3 読解・聴解',price:null,image:'/images/books/book-15.jpg',available:true},
  {id:'book-16', level:'N3',title:'N3 Super Exam Practice',description:'Practice tests',price:null,image:'/images/books/book-16.jpg',available:true},
  {id:'book-17', level:'N3',title:'N3 Grammar Exercise Book',description:'Grammar exercises',price:null,image:'/images/books/book-17.jpg',available:true},
  {id:'book-18', level:'N2',title:'N2 Kanji & Irasuto Grammar',description:'N2 study materials',price:null,image:'/images/books/book-18.jpg',available:true},
  {id:'book-19', level:'N2',title:'N2 Speed Master – Intermediate 2500',description:'Vocabulary',price:null,image:'/images/books/book-19.jpg',available:true},
  {id:'book-20', level:'N2',title:'N2 Shinkanzen – Reading & Listening',description:'N2 読解・聴解',price:null,image:'/images/books/book-20.jpg',available:true},
  {id:'book-21',level:'N2',title:'N2 Super Exam Practice',description:'日本語能力試験 スーパー模試 · Practice tests',price:null,image:'/images/books/book-21.jpg',available:true},
  {id:'book-22',level:'N2',title:'N2 Grammar Exercise',description:'N2 Grammar Exercise Book',price:null,image:'/images/books/book-22.jpg',available:true},
 ]
}
// Never publish actual payment details or QR codes without verifying them.
export const payments = [
  {
    id: 'kbz',
    name: 'KBZPay',
    account : 'Kpay acc name - Yamin',
    qr: '/images/kbz-qr.jpg',
    enabled: true
  },
  {
    id: 'wave',
    name: 'WavePay',
    account: 'Name - Yamin Japanese Language Center',
    qr: '/images/wave-qr.jpg',
    enabled: true
  }
];
