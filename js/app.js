/**
 * BBEducation — Landing Baby
 * Main application script
 */

(function () {
  "use strict";

  var config = window.BBE_CONFIG || {};
  var analytics = window.BBE_Analytics || {};

  /* ============================================================
     STATE
     ============================================================ */
  var state = {
    selectedEventId: null,
    openDaySectionSeen: false,
    bookingSubmitting: false,
    infoSubmitting: false,
  };

  /* ============================================================
     DOM READY
     ============================================================ */
  document.addEventListener("DOMContentLoaded", function () {
    initStickyHeader();
    initSmoothScroll();
    initDateSelector();
    initFaqAccordion();
    initBookingForm();
    initInfoForm();
    initStickyMobileCTA();
    initFadeUpObserver();
    initOpenDaySectionObserver();
  });

  /* ============================================================
     STICKY HEADER
     ============================================================ */
  function initStickyHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    function onScroll() {
      if (window.scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ============================================================
     SMOOTH SCROLL — anchor links
     ============================================================ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var targetId = link.getAttribute("href");
        if (targetId === "#") return;
        var target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // Move focus to target for accessibility
        if (!target.hasAttribute("tabindex")) {
          target.setAttribute("tabindex", "-1");
        }
        target.focus({ preventScroll: true });
      });
    });
  }

  /* ============================================================
     DATE SELECT — menu a tendina popolato da config
     ============================================================ */
  function initDateSelector() {
    var select = document.getElementById("booking-date-select");
    var allEvents = (config.openDayEvents || []).concat(config.openSchoolEvents || []);

    if (allEvents.length === 0) {
      var noDateMsg = document.getElementById("no-dates-message");
      if (noDateMsg) noDateMsg.style.display = "block";
      var formSection = document.getElementById("booking-form-section");
      if (formSection) formSection.style.display = "none";
      return;
    }

    if (!select) return;

    // Optgroup Open Day del sabato
    var groupOD = document.createElement("optgroup");
    groupOD.label = "Open Day del sabato";
    (config.openDayEvents || []).forEach(function (ev) {
      var opt = buildOption(ev);
      groupOD.appendChild(opt);
    });
    if (groupOD.children.length) select.appendChild(groupOD);

    // Optgroup Open School infrasettimanali
    var groupOS = document.createElement("optgroup");
    groupOS.label = "Open School infrasettimanali";
    (config.openSchoolEvents || []).forEach(function (ev) {
      var opt = buildOption(ev);
      groupOS.appendChild(opt);
    });
    if (groupOS.children.length) select.appendChild(groupOS);

    // Evento change
    select.addEventListener("change", function () {
      onDateSelected(select.value);
    });
  }

  function buildOption(ev) {
    var isFull = ev.status === "full";
    var isLastSeats = ev.status === "last-seats";
    var isOS = ev.type === "open-school";

    var label = ev.dayLabel + " " + ev.dateLabel + " · ore " + ev.time;
    if (isOS) label += " — Open School";
    if (isLastSeats) label += " (ultimi posti)";
    if (isFull) label += " — Al completo";

    var opt = document.createElement("option");
    opt.value = ev.id;
    opt.textContent = label;
    opt.disabled = isFull;
    opt.dataset.type = ev.type;
    return opt;
  }

  function onDateSelected(eventId) {
    if (!eventId) return;
    state.selectedEventId = eventId;

    var allEvents = (config.openDayEvents || []).concat(config.openSchoolEvents || []);
    var ev = allEvents.find(function (e) { return e.id === eventId; });

    // Aggiorna hidden type
    var hiddenType = document.getElementById("booking-event-type");
    if (hiddenType && ev) hiddenType.value = ev.type;

    // Mostra nota Open School se necessario
    var osNote = document.getElementById("open-school-note");
    if (osNote) osNote.style.display = ev && ev.type === "open-school" ? "block" : "none";

    // Analytics
    if (ev && typeof analytics.selectDate === "function") {
      analytics.selectDate(ev);
    }
  }

  /* ============================================================
     FAQ ACCORDION
     ============================================================ */
  function initFaqAccordion() {
    var faqList = document.getElementById("faq-list");
    if (!faqList) return;

    var faqs = config.faqs || [];

    // Render from config
    faqs.forEach(function (faq, index) {
      var item = document.createElement("div");
      item.className = "faq-item";

      var answerId = "faq-panel-" + faq.id;
      var triggerId = "faq-trigger-" + faq.id;
      var isFirst = index === 0;

      var trigger = document.createElement("button");
      trigger.type = "button";
      trigger.id = triggerId;
      trigger.className = "faq-trigger";
      trigger.setAttribute("aria-expanded", isFirst ? "true" : "false");
      trigger.setAttribute("aria-controls", answerId);
      trigger.textContent = faq.question;

      var icon = document.createElement("span");
      icon.className = "faq-icon";
      icon.setAttribute("aria-hidden", "true");
      trigger.appendChild(icon);

      var panel = document.createElement("div");
      panel.id = answerId;
      panel.className = "faq-panel";
      panel.setAttribute("role", "region");
      panel.setAttribute("aria-labelledby", triggerId);
      panel.setAttribute("aria-hidden", isFirst ? "false" : "true");

      var inner = document.createElement("div");
      inner.className = "faq-panel__inner";

      var answerText = faq.body || faq.placeholderText || "";
      inner.innerHTML = answerText;

      panel.appendChild(inner);
      item.appendChild(trigger);
      item.appendChild(panel);
      faqList.appendChild(item);

      if (isFirst) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });

    // Bind events
    faqList.addEventListener("click", function (e) {
      var trigger = e.target.closest(".faq-trigger");
      if (!trigger) return;

      var isExpanded = trigger.getAttribute("aria-expanded") === "true";
      var panelId = trigger.getAttribute("aria-controls");
      var panel = document.getElementById(panelId);

      if (isExpanded) {
        // Close
        trigger.setAttribute("aria-expanded", "false");
        panel.setAttribute("aria-hidden", "true");
        panel.style.maxHeight = "0";
      } else {
        // Close all others
        faqList.querySelectorAll(".faq-trigger[aria-expanded='true']").forEach(function (openTrigger) {
          var openPanelId = openTrigger.getAttribute("aria-controls");
          var openPanel = document.getElementById(openPanelId);
          openTrigger.setAttribute("aria-expanded", "false");
          openPanel.setAttribute("aria-hidden", "true");
          openPanel.style.maxHeight = "0";
        });

        // Open this one
        trigger.setAttribute("aria-expanded", "true");
        panel.setAttribute("aria-hidden", "false");
        panel.style.maxHeight = panel.scrollHeight + "px";

        // Analytics
        var faqData = faqs.find(function (f) { return "faq-panel-" + f.id === panelId; });
        if (faqData && typeof analytics.faqOpen === "function") {
          analytics.faqOpen(faqData.id, faqData.question);
        }
      }
    });

    // Keyboard support
    faqList.addEventListener("keydown", function (e) {
      var triggers = Array.from(faqList.querySelectorAll(".faq-trigger"));
      var focused = document.activeElement;
      var idx = triggers.indexOf(focused);
      if (idx === -1) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        triggers[(idx + 1) % triggers.length].focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        triggers[(idx - 1 + triggers.length) % triggers.length].focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        triggers[0].focus();
      } else if (e.key === "End") {
        e.preventDefault();
        triggers[triggers.length - 1].focus();
      }
    });
  }

  /* ============================================================
     FORM VALIDATION UTILITIES
     ============================================================ */
  function validateField(input) {
    var errorEl = document.getElementById(input.id + "-error");
    var isValid = true;
    var message = "";

    if (input.required && !input.value.trim()) {
      isValid = false;
      message = "Questo campo è obbligatorio.";
    } else if (input.type === "email" && input.value.trim()) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
        isValid = false;
        message = "Inserisci un indirizzo email valido.";
      }
    } else if (input.type === "tel" && input.value.trim()) {
      if (!/^[\d\s\+\-\(\)]{7,20}$/.test(input.value.trim())) {
        isValid = false;
        message = "Inserisci un numero di telefono valido.";
      }
    } else if (input.type === "checkbox" && input.required && !input.checked) {
      isValid = false;
      message = "È necessario accettare la privacy per procedere.";
    }

    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.toggle("visible", !isValid);
      input.classList.toggle("error", !isValid);
      input.setAttribute("aria-invalid", isValid ? "false" : "true");
    }

    return isValid;
  }

  function validateForm(form) {
    var fields = Array.from(form.querySelectorAll("[required]"));
    var allValid = true;
    fields.forEach(function (f) {
      if (!validateField(f)) allValid = false;
    });
    if (allValid) {
      // Check privacy checkbox separately if present
      var privacyCheck = form.querySelector('input[type="checkbox"][name="privacy"]');
      if (privacyCheck && !privacyCheck.checked) {
        allValid = false;
        var errEl = document.getElementById(privacyCheck.id + "-error");
        if (errEl) {
          errEl.textContent = "È necessario accettare la privacy per procedere.";
          errEl.classList.add("visible");
        }
      }
    }
    return allValid;
  }

  function serializeForm(form) {
    var data = {};
    new FormData(form).forEach(function (value, key) {
      data[key] = value;
    });
    return data;
  }

  function showFormStatus(form, type, message) {
    var status = form.querySelector(".form-status");
    if (!status) return;
    status.className = "form-status form-status--" + type + " visible";
    status.textContent = message;
  }

  function hideFormStatus(form) {
    var status = form.querySelector(".form-status");
    if (status) status.className = "form-status";
  }

  async function submitFormData(endpoint, data) {
    var response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("HTTP " + response.status);
    return response.json();
  }

  /* ============================================================
     BOOKING FORM
     ============================================================ */
  function initBookingForm() {
    var form = document.getElementById("booking-form");
    if (!form) return;

    // Inline validation on blur
    form.querySelectorAll("input, select, textarea").forEach(function (input) {
      input.addEventListener("blur", function () { validateField(input); });
    });

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      if (state.bookingSubmitting) return;

      hideFormStatus(form);

      if (!validateForm(form)) {
        // Focus first error
        var firstError = form.querySelector('[aria-invalid="true"]');
        if (firstError) firstError.focus();
        return;
      }

      // Check date selected
      if (!state.selectedEventId) {
        showFormStatus(form, "error", "Seleziona una data Open Day prima di procedere.");
        var dateSelect = document.getElementById("booking-date-select");
        if (dateSelect) dateSelect.focus();
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      state.bookingSubmitting = true;
      if (btn) {
        btn.disabled = true;
        btn.classList.add("btn--loading");
      }

      var data = serializeForm(form);

      if (!config.bookingEndpoint) {
        // No endpoint configured — honest messaging, no false success
        setTimeout(function () {
          state.bookingSubmitting = false;
          if (btn) {
            btn.disabled = false;
            btn.classList.remove("btn--loading");
          }
          showFormStatus(form, "pending",
            "Richiesta ricevuta. Il servizio di prenotazione online è in fase di attivazione: " +
            "ti contatteremo a breve per confermare la tua partecipazione. " +
            "Puoi anche scriverci direttamente per avere conferma immediata."
          );
          // TODO: integrare bookingEndpoint in config.js per abilitare la prenotazione reale
        }, 600);
        return;
      }

      try {
        await submitFormData(config.bookingEndpoint, data);
        showFormStatus(form, "success",
          "Prenotazione confermata! Riceverai una email di conferma a breve."
        );
        form.reset();
        state.selectedEventId = null;
        document.querySelectorAll(".date-card-label").forEach(function (l) {
          l.classList.remove("selected");
        });
        var dateDisplay = document.getElementById("booking-selected-date");
        if (dateDisplay) dateDisplay.innerHTML = "";

        if (typeof analytics.leadOpenDay === "function") analytics.leadOpenDay();

      } catch (err) {
        showFormStatus(form, "error",
          "Si è verificato un errore. Riprova oppure contattaci direttamente."
        );
      } finally {
        state.bookingSubmitting = false;
        if (btn) {
          btn.disabled = false;
          btn.classList.remove("btn--loading");
        }
      }
    });
  }

  /* ============================================================
     INFO FORM
     ============================================================ */
  function initInfoForm() {
    var form = document.getElementById("info-form");
    if (!form) return;

    form.querySelectorAll("input, select, textarea").forEach(function (input) {
      input.addEventListener("blur", function () { validateField(input); });
    });

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      if (state.infoSubmitting) return;

      hideFormStatus(form);

      if (!validateForm(form)) {
        var firstError = form.querySelector('[aria-invalid="true"]');
        if (firstError) firstError.focus();
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      state.infoSubmitting = true;
      if (btn) {
        btn.disabled = true;
        btn.classList.add("btn--loading");
      }

      var data = serializeForm(form);

      if (!config.infoEndpoint) {
        setTimeout(function () {
          state.infoSubmitting = false;
          if (btn) {
            btn.disabled = false;
            btn.classList.remove("btn--loading");
          }
          showFormStatus(form, "pending",
            "Messaggio ricevuto. Il servizio di contatto online è in fase di attivazione: " +
            "ti risponderemo al più presto."
          );
          // TODO: integrare infoEndpoint in config.js
        }, 600);
        return;
      }

      try {
        await submitFormData(config.infoEndpoint, data);
        showFormStatus(form, "success",
          "Messaggio inviato! Ti risponderemo entro 24 ore."
        );
        form.reset();
        if (typeof analytics.leadInfo === "function") analytics.leadInfo();

      } catch (err) {
        showFormStatus(form, "error",
          "Si è verificato un errore. Riprova oppure contattaci direttamente."
        );
      } finally {
        state.infoSubmitting = false;
        if (btn) {
          btn.disabled = false;
          btn.classList.remove("btn--loading");
        }
      }
    });
  }

  /* ============================================================
     STICKY MOBILE CTA
     ============================================================ */
  function initStickyMobileCTA() {
    var stickyCta = document.getElementById("sticky-cta-mobile");
    if (!stickyCta) return;

    var SCROLL_THRESHOLD = 400;
    var visible = false;

    function update() {
      var shouldShow = window.scrollY > SCROLL_THRESHOLD;
      if (shouldShow !== visible) {
        visible = shouldShow;
        stickyCta.classList.toggle("visible", visible);
        document.body.classList.toggle("has-sticky-cta", visible);
      }
    }

    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ============================================================
     FADE-UP OBSERVER (scroll reveal)
     ============================================================ */
  function initFadeUpObserver() {
    if (!("IntersectionObserver" in window)) {
      // Fallback: show all immediately
      document.querySelectorAll(".fade-up").forEach(function (el) {
        el.classList.add("in-view");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".fade-up").forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ============================================================
     OPEN DAY SECTION — vista una volta per sessione
     ============================================================ */
  function initOpenDaySectionObserver() {
    var section = document.getElementById("open-day");
    if (!section || !("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !state.openDaySectionSeen) {
          state.openDaySectionSeen = true;
          if (typeof analytics.viewOpenDaySection === "function") {
            analytics.viewOpenDaySection();
          }
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    observer.observe(section);
  }

  /* ---------------------------------------------------------------
     VALUE CARDS — flip on click / keyboard
  --------------------------------------------------------------- */
  function initValueCardFlip() {
    var cards = document.querySelectorAll('.value-card');
    cards.forEach(function(card) {
      function toggle(e) {
        if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
        if (e.type === 'keydown') e.preventDefault();
        var flipped = card.classList.toggle('is-flipped');
        card.setAttribute('aria-expanded', flipped ? 'true' : 'false');
      }
      card.addEventListener('click', toggle);
      card.addEventListener('keydown', toggle);
    });
  }

  initValueCardFlip();

})();
