/**
 * BBEducation — Analytics Adapter
 *
 * Adapter no-op: non genera errori se GA4/Meta non sono configurati.
 * Per attivare il tracking reale, passare le funzioni gtag/fbq prima
 * del caricamento di questo file, oppure integrare nel blocco "push".
 *
 * IMPORTANTE: non inviare mai PII (nome, email, telefono) agli analytics.
 *
 * TODO: collegare GA4 Measurement ID e/o Meta Pixel ID in produzione.
 */

(function () {
  "use strict";

  var _queue = [];
  var _initialized = false;

  function push(eventName, params) {
    var payload = Object.assign({ event: eventName }, params || {});

    // No-op if no provider is available — no console errors
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params || {});
    }

    if (typeof window.fbq === "function") {
      window.fbq("trackCustom", eventName, params || {});
    }

    // Debug in development (non-production)
    if (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1" ||
        window.location.hostname === "") {
      console.debug("[BBE Analytics]", payload);
    }
  }

  window.BBE_Analytics = {
    /**
     * view_open_day_section
     * Chiamato una volta per sessione quando la sezione Open Day entra nel viewport.
     */
    viewOpenDaySection: function () {
      push("view_open_day_section");
    },

    /**
     * select_date
     * Chiamato quando l'utente seleziona una data.
     * @param {object} event - { id, type, dateLabel, time, status }
     */
    selectDate: function (event) {
      push("select_date", {
        event_type:  event.type  || undefined,
        date_label:  event.dateLabel || undefined,
        time:        event.time  || undefined,
        status:      event.status || undefined,
      });
    },

    /**
     * lead_openday
     * Chiamato SOLO dopo submit Open Day effettivamente riuscito (risposta 2xx dal server).
     */
    leadOpenDay: function () {
      push("lead_openday");
    },

    /**
     * lead_info
     * Chiamato SOLO dopo submit del form informazioni effettivamente riuscito.
     */
    leadInfo: function () {
      push("lead_info");
    },

    /**
     * faq_open
     * Chiamato quando una FAQ viene aperta.
     * @param {string} faqId
     * @param {string} faqQuestion
     */
    faqOpen: function (faqId, faqQuestion) {
      push("faq_open", {
        faq_id:       faqId,
        faq_question: faqQuestion,
      });
    },
  };
})();
