/**
 * BBEducation — Landing Primary & Middle School
 * Configurazione dati: modificare qui per aggiornare contenuti senza toccare il codice UI.
 *
 * TODO per il team / integrazione CMS:
 *   - Confermare anno degli Open Day e impostare openDayYear
 *   - Impostare bookingEndpoint e infoEndpoint con URL reali
 *   - Aggiungere telefono, email, social, privacy URL
 *   - Aggiungere rating Google verificato (non inventarlo)
 *   - Completare risposte FAQ dove indicato con [TODO]
 */

window.BBE_CONFIG = {

  /* =============================================================
     ENDPOINTS — impostare con URL reali prima del go-live
     ============================================================= */
  bookingEndpoint: null, // TODO: es. "https://api.bbeducation.it/open-day/book"
  infoEndpoint:    null, // TODO: es. "https://api.bbeducation.it/contact"

  /* =============================================================
     ANNO OPEN DAY — non inventato; null finché non confermato
     ============================================================= */
  openDayYear: null, // TODO: impostare es. 2025

  /* =============================================================
     DATE OPEN DAY PRIMARY & MIDDLE SCHOOL
     ============================================================= */
  openDayEvents: [
    {
      id: "od-pms-sat-1",
      type: "open-day",
      dayLabel: "Sabato",
      dateLabel: "10 ottobre",
      time: "10:00",
      capacity: 15,
      status: "available",
      spotsRemaining: null,
    },
    {
      id: "od-pms-sat-2",
      type: "open-day",
      dayLabel: "Sabato",
      dateLabel: "24 ottobre",
      time: "10:00",
      capacity: 15,
      status: "available",
      spotsRemaining: null,
    },
    {
      id: "od-pms-sat-3",
      type: "open-day",
      dayLabel: "Sabato",
      dateLabel: "21 novembre",
      time: "10:00",
      capacity: 15,
      status: "available",
      spotsRemaining: null,
    },
    {
      id: "od-pms-sat-4",
      type: "open-day",
      dayLabel: "Sabato",
      dateLabel: "5 dicembre",
      time: "10:00",
      capacity: 15,
      status: "available",
      spotsRemaining: null,
    },
  ],

  openSchoolEvents: [
    {
      id: "os-pms-1",
      type: "open-school",
      dayLabel: "Venerdì",
      dateLabel: "6 novembre",
      time: "10:30",
      capacity: 15,
      status: "available",
      spotsRemaining: null,
    },
    {
      id: "os-pms-2",
      type: "open-school",
      dayLabel: "Venerdì",
      dateLabel: "27 novembre",
      time: "10:30",
      capacity: 15,
      status: "available",
      spotsRemaining: null,
    },
  ],

  /* =============================================================
     CONTATTI SEDE — TODO: inserire dati reali
     ============================================================= */
  contact: {
    address:   "Via Lega Lombarda n.11, 20853 Biassono (MB)",
    mapsUrl:   null,
    phone:     null,
    email:     null,
    instagram: null,
    facebook:  null,
    privacyUrl: null,
  },

  /* =============================================================
     TRUST BAR — proof verificabile
     ============================================================= */
  trust: {
    googleRating:       null,
    googleReviewCount:  null,
    googleReviewUrl:    null,
    familyCount:        null,
  },

  /* =============================================================
     FAQ — risposte ufficiali
     ============================================================= */
  faqs: [
    {
      id: "faq-pms-1",
      question: "È necessario che mio figlio conosca già l'inglese?",
      body: "No. Il percorso è strutturato per accogliere studenti a diversi livelli. L'inglese viene sviluppato progressivamente con un metodo rigoroso e personalizzato.",
      placeholderText: null,
    },
    {
      id: "faq-pms-2",
      question: "Come funziona la metodologia CLIL?",
      body: "Il CLIL (Content and Language Integrated Learning) permette di studiare materie curricolari direttamente in inglese. Le discipline vengono apprese nella lingua, non tradotte da essa.",
      placeholderText: null,
    },
    {
      id: "faq-pms-3",
      question: "Il percorso è riconosciuto dal Ministero dell'Istruzione?",
      body: null,
      placeholderText: "[TODO: inserire risposta verificata dal team]",
    },
    {
      id: "faq-pms-4",
      question: "Come posso iscrivere mio figlio?",
      body: "Il primo passo è partecipare all'Open Day: potrai conoscere il team, il programma e capire se BBEducation è la scelta giusta per tuo figlio.",
      placeholderText: null,
    },
  ],

};
