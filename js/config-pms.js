/* ================================================================
   BBEducation — Config Primary & Middle School
   Questo file definisce window.BBE_CONFIG per primary-middle-school.html.
   Non modifica né dipende da config.js (landing Baby).
   ================================================================ */

window.BBE_CONFIG = {

  /* ----------------------------------------------------------
     SCUOLA
  ---------------------------------------------------------- */
  school: {
    name:        "BBEducation Primary & Middle School",
    tagline:     "Scuola Primaria e Media bilingue a Biassono",
    address:     "Via Lega Lombarda n.11, Biassono (MB) 20853",
    phone:       "039 491 864",
    email:       "info@bbeducation.it",
    mapsUrl:     null   /* TODO: impostare URL mappa verificato */
  },

  /* ----------------------------------------------------------
     OPEN DAY — date da aggiornare ogni anno scolastico
     eventType: "open-day" | "open-school"
  ---------------------------------------------------------- */
  events: [
    {
      id:        "od-pms-2025-10-11",
      label:     "Sabato 11 ottobre 2025",
      time:      "10:00 – 12:00",
      eventType: "open-day",
      available: true
    },
    {
      id:        "od-pms-2025-10-25",
      label:     "Sabato 25 ottobre 2025",
      time:      "10:00 – 12:00",
      eventType: "open-day",
      available: true
    },
    {
      id:        "od-pms-2025-11-22",
      label:     "Sabato 22 novembre 2025",
      time:      "10:00 – 12:00",
      eventType: "open-day",
      available: true
    },
    {
      id:        "od-pms-2025-12-06",
      label:     "Sabato 6 dicembre 2025",
      time:      "10:00 – 12:00",
      eventType: "open-day",
      available: true
    },
    {
      id:        "os-pms-2025-11-06",
      label:     "Giovedì 6 novembre 2025",
      time:      "18:00 – 19:30",
      eventType: "open-school",
      available: true
    },
    {
      id:        "os-pms-2025-11-27",
      label:     "Giovedì 27 novembre 2025",
      time:      "18:00 – 19:30",
      eventType: "open-school",
      available: true
    }
  ],

  /* ----------------------------------------------------------
     FAQ — domande specifiche per Primary & Middle School
  ---------------------------------------------------------- */
  faq: [
    {
      q: "Cos'è il metodo CLIL e come funziona nella pratica?",
      a: "CLIL (Content and Language Integrated Learning) è un approccio in cui alcune discipline vengono insegnate anche in inglese. La lingua diventa così uno strumento per studiare e ragionare, non solo un oggetto di studio separato. I ragazzi acquisiscono competenze linguistiche in modo naturale e contestuale."
    },
    {
      q: "Il percorso rispetta i programmi ministeriali?",
      a: "Sì. Il curricolo è allineato alle Indicazioni Nazionali per la Scuola Primaria e Secondaria di Primo Grado. Il percorso bilingue si integra con i programmi italiani senza sostituirli, ampliando le competenze dei ragazzi."
    },
    {
      q: "Mio figlio non ha mai studiato in inglese. Può comunque iscriversi?",
      a: "Sì. Il percorso è pensato per accompagnare ogni ragazzo dal suo livello di partenza. L'approccio CLIL favorisce un apprendimento progressivo e contestuale, adatto anche a chi ha poca esperienza con la lingua inglese."
    },
    {
      q: "Posso visitare la scuola prima di decidere?",
      a: "Certamente. L'Open Day è l'occasione ideale: puoi visitare gli spazi, incontrare il team docenti e ricevere tutte le informazioni sul percorso accademico. Puoi prenotare il tuo posto direttamente su questa pagina."
    }
  ],

  /* ----------------------------------------------------------
     ENDPOINTS — da configurare quando disponibili
  ---------------------------------------------------------- */
  bookingEndpoint: null,   /* TODO: URL endpoint prenotazione Open Day */
  infoEndpoint:    null    /* TODO: URL endpoint richiesta informazioni */

};
