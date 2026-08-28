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
    name:    "BBEducation Primary & Middle School",
    tagline: "Scuola Primaria e Media bilingue | Brianza",
    address: "Via Lega Lombarda n.11, Biassono (MB) 20853",
    phone:   "039 491 864",
    email:   "info@bbeducation.it",
    mapsUrl: null   /* TODO: impostare URL mappa verificato */
  },

  /* ----------------------------------------------------------
     OPEN DAY — date anno scolastico 2026/2027
     Orari non disponibili: time: null (non mostrato nel frontend)
     type: "open-day" | "open-school"
     status: "available" | "last-seats" | "full"
  ---------------------------------------------------------- */
  openDayEvents: [
    {
      id:        "od-pms-2026-10-03",
      type:      "open-day",
      dayLabel:  "Sabato",
      dateLabel: "3 ottobre",
      year:      2026,
      time:      "10.00",
      capacity:  null,
      status:    "available"
    },
    {
      id:        "od-pms-2026-10-17",
      type:      "open-day",
      dayLabel:  "Sabato",
      dateLabel: "17 ottobre",
      year:      2026,
      time:      "15.00",
      capacity:  null,
      status:    "available"
    },
    {
      id:        "od-pms-2026-10-27",
      type:      "open-day",
      dayLabel:  "Martedì",
      dateLabel: "27 ottobre",
      year:      2026,
      time:      "10.00",
      capacity:  null,
      status:    "available"
    },
    {
      id:        "od-pms-2026-11-14",
      type:      "open-day",
      dayLabel:  "Sabato",
      dateLabel: "14 novembre",
      year:      2026,
      time:      "15.00",
      capacity:  null,
      status:    "available"
    },
    {
      id:        "od-pms-2026-11-28",
      type:      "open-day",
      dayLabel:  "Sabato",
      dateLabel: "28 novembre",
      year:      2026,
      time:      "10.00",
      capacity:  null,
      status:    "available"
    },
    {
      id:        "od-pms-2026-12-12",
      type:      "open-day",
      dayLabel:  "Sabato",
      dateLabel: "12 dicembre",
      year:      2026,
      time:      "15.00",
      capacity:  null,
      status:    "available"
    },
    {
      id:        "od-pms-2027-01-23",
      type:      "open-day",
      dayLabel:  "Sabato",
      dateLabel: "23 gennaio",
      year:      2027,
      time:      "10.00",
      capacity:  null,
      status:    "available"
    }
  ],

  /* ----------------------------------------------------------
     FAQ — 6 domande specifiche per Primary & Middle School
     Formato: { id, question, body } — letto da app.js initFaqAccordion()
  ---------------------------------------------------------- */
  faqs: [
    {
      id:       "pms-faq-1",
      question: "Dove si svolge l'Open Day?",
      body:     "L'Open Day si svolge presso la sede BBEducation di Cesano Maderno."
    },
    {
      id:       "pms-faq-2",
      question: "Quando sarà operativo il nuovo Campus di Seveso?",
      body:     "Il nuovo Campus di Seveso sarà operativo dal 2027 e ospiterà i percorsi Primary e Middle School."
    },
    {
      id:       "pms-faq-3",
      question: "Se mio figlio frequenta la Primary, poi potrà continuare il percorso nella Middle School?",
      body:     "Sì. La nuova Middle School nasce per dare continuità al percorso educativo BBEducation, permettendo agli studenti della Primary di proseguire, se lo desiderano, all'interno dello stesso progetto educativo fino ai 14 anni. La scelta resta libera: al termine della Primary, ogni famiglia potrà decidere se continuare il percorso in BBEducation o scegliere una scuola diversa per la Middle School."
    },
    {
      id:       "pms-faq-4",
      question: "La Middle School sarà bilingue?",
      body:     "Sì. La Middle School farà parte del percorso bilingue italiano e inglese di BBEducation. L'inglese sarà integrato nel percorso educativo come strumento di apprendimento e comunicazione, in continuità con il progetto bilingue della Primary."
    },
    {
      id:       "pms-faq-5",
      question: "Quali metodi educativi caratterizzano la Middle School?",
      body:     "La Middle School svilupperà un approccio basato su Inquiry Based Learning e Gameful Learning, con esperienze interdisciplinari orientate a sviluppare autonomia, pensiero critico, creatività e collaborazione. L'obiettivo è accompagnare gli studenti verso competenze utili per affrontare le sfide del futuro."
    },
    {
      id:       "pms-faq-6",
      question: "Posso partecipare sia all'Open Day Primary sia a quello Middle?",
      body:     "Sì. Nel form di prenotazione sarà possibile indicare l'interesse per Primary School, Middle School oppure entrambi i percorsi. In questo modo potrai conoscere sia il percorso attuale sia il progetto della nuova Middle School."
    }
  ],

  /* ----------------------------------------------------------
     ENDPOINTS — da configurare quando disponibili
  ---------------------------------------------------------- */
  bookingEndpoint: null,   /* TODO: URL endpoint prenotazione Open Day */
  infoEndpoint:    null    /* TODO: URL endpoint richiesta informazioni */

};
