/**
 * BBEducation — Landing Baby
 * Configurazione dati: modificare qui per aggiornare contenuti senza toccare il codice UI.
 *
 * TODO per il team / integrazione CMS:
 *   - Confermare anno degli Open Day e impostare openDayYear
 *   - Impostare bookingEndpoint e infoEndpoint con URL reali
 *   - Aggiungere indirizzo, telefono, email, social, privacy URL
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
     DATE OPEN DAY BABY
     ============================================================= */
  openDayEvents: [
    {
      id: "od-sat-1",
      type: "open-day",
      dayLabel: "Sabato",
      dateLabel: "3 ottobre",
      time: "15:00",
      capacity: 15,
      status: "available",   // "available" | "last-seats" | "full"
      spotsRemaining: null,  // null = non mostrare numero residuo
    },
    {
      id: "od-sat-2",
      type: "open-day",
      dayLabel: "Sabato",
      dateLabel: "17 ottobre",
      time: "10:00",
      capacity: 15,
      status: "available",
      spotsRemaining: null,
    },
    {
      id: "od-sat-3",
      type: "open-day",
      dayLabel: "Sabato",
      dateLabel: "14 novembre",
      time: "10:00",
      capacity: 15,
      status: "available",
      spotsRemaining: null,
    },
    {
      id: "od-sat-4",
      type: "open-day",
      dayLabel: "Sabato",
      dateLabel: "28 novembre",
      time: "15:00",
      capacity: 15,
      status: "available",
      spotsRemaining: null,
    },
  ],

  openSchoolEvents: [
    {
      id: "os-1",
      type: "open-school",
      dayLabel: "Venerdì",
      dateLabel: "30 ottobre",
      time: "10:30",
      capacity: 15,
      status: "available",
      spotsRemaining: null,
    },
    {
      id: "os-2",
      type: "open-school",
      dayLabel: "Venerdì",
      dateLabel: "20 novembre",
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
    mapsUrl:   null, // TODO: URL Google Maps
    phone:     null, // TODO: es. "+39 039 000 0000"
    email:     null, // TODO: es. "info@bbeducation.it"
    instagram: null, // TODO: URL profilo Instagram
    facebook:  null, // TODO: URL pagina Facebook
    privacyUrl: null, // TODO: URL privacy policy
  },

  /* =============================================================
     TRUST BAR — proof verificabile
     ============================================================= */
  trust: {
    googleRating:       null, // TODO: es. 4.9 — solo se verificato
    googleReviewCount:  null, // TODO: es. 48 — solo se verificato
    googleReviewUrl:    null, // TODO: URL profilo Google
    familyCount:        null, // TODO: numero famiglie seguite — se verificato
  },

  /* =============================================================
     FAQ — risposte ufficiali
     Impostare body = null per domande senza risposta approvata.
     ============================================================= */
  faqs: [
    {
      id: "faq-1",
      question: "È necessario che mio figlio conosca già l'inglese?",
      body: "No. Il percorso bilingue è pensato per accompagnare i bambini nell'apprendimento della lingua in modo naturale e progressivo.",
      placeholderText: null,
    },
    {
      id: "faq-2",
      question: "Come viene gestito l'inserimento?",
      body: "L'ambientamento viene accompagnato con attenzione, nel rispetto dei tempi e delle esigenze di ogni bambino.",
      placeholderText: null,
    },
    {
      id: "faq-3",
      question: "Posso visitare la scuola prima di iscrivermi?",
      body: "Certo. L'Open Day è l'occasione per conoscere da vicino BBEducation, il team e il progetto educativo.",
      placeholderText: null,
    },
    {
      id: "faq-4",
      question: "Come posso ricevere maggiori informazioni?",
      body: "Prenota il tuo Open Day: avrai la possibilità di confrontarti direttamente con il nostro team e approfondire tutto ciò che ti interessa.",
      placeholderText: null,
    },
  ],

};
