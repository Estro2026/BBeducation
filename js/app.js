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
    initFormPanel();
    initScrollStory();
    initMetodo();
    initGiornataFilm();
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
    var headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 110;

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var targetId = link.getAttribute("href");

        // Logo / link senza target → scroll to top
        if (targetId === "#") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        var target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();

        // Calcola posizione assoluta dell'elemento meno l'header sticky
        var rect = target.getBoundingClientRect();
        var absoluteTop = window.scrollY + rect.top - headerH;
        window.scrollTo({ top: Math.max(0, absoluteTop), behavior: "smooth" });

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
     SCROLL REVEAL — stagger per sezione, fade-up / fade-out
     ============================================================ */
  function initFadeUpObserver() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".fade-up").forEach(function(el) { el.classList.add("in-view"); });
      return;
    }

    var STAGGER = 80; // ms tra un elemento e il successivo
    var isMobile = window.matchMedia("(max-width: 767px)").matches;
    var THRESHOLD = isMobile ? 0.1 : 0.3;

    // Selettori di elementi animabili dentro ogni sezione
    var childSelectors = [
      ".section__header",
      ".section__eyebrow:not([aria-hidden])",
      ".oda-panel--agenda .section__eyebrow",
      ".section__title",
      ".section__subtitle",
      ".value-card",
      ".oda-badge",
      ".faq-item",
      ".method__content",
      ".method__image",
      ".open-day-agenda__photo-hero",
      ".famiglie-grid",
      ".famiglie-grid__img",
      ".centro-grid",
      ".centro-grid__img",
      ".booking-form-wrapper",
      ".info-form-wrapper",
      ".giornata-film__header",
      ".giornata-film__stage",
      ".giornata-film__nav",
      ".footer__cta-block",
      ".section__cta",
      ".scroll-story__sticky",
      "section > .container > p",
      "section > .container > .btn",
      "section > .container > a.btn"
    ];


    // Aggiungi .fade-up a tutti gli elementi target
    childSelectors.forEach(function(sel) {
      document.querySelectorAll(sel).forEach(function(el) {
        if (!el.classList.contains("fade-up")) el.classList.add("fade-up");
      });
    });

    // Aggiunge/rimuove in-view con stagger ai .fade-up figli di un contenitore
    var EXCLUDE = ".scroll-story__img-inner, .scroll-story__img-track, .zoom-reveal";

    function getEls(container) {
      return Array.from(container.querySelectorAll(".fade-up")).filter(function(el) {
        return !el.matches(EXCLUDE);
      });
    }

    function staggerIn(container) {
      var els = getEls(container);
      if (container.classList && container.classList.contains("fade-up") && !container.matches(EXCLUDE)) els.unshift(container);
      var stickyIdx = els.findIndex(function(el) { return el.classList.contains("scroll-story__sticky"); });
      if (stickyIdx > 0) { els.unshift(els.splice(stickyIdx, 1)[0]); }
      els.forEach(function(el, i) {
        el.style.transitionDelay = (i * STAGGER) + "ms";
        el.classList.add("in-view");
      });
    }

    function staggerOut(container) {
      var els = getEls(container);
      if (container.classList && container.classList.contains("fade-up") && !container.matches(EXCLUDE)) els.unshift(container);
      var stickyIdx = els.findIndex(function(el) { return el.classList.contains("scroll-story__sticky"); });
      if (stickyIdx > 0) { els.unshift(els.splice(stickyIdx, 1)[0]); }
      els.reverse().forEach(function(el, i) {
        el.style.transitionDelay = (i * STAGGER) + "ms";
        el.classList.remove("in-view");
      });
    }

    // Osserva ogni <section>, il wrapper scroll-story e il footer al 30% di visibilità
    // #open-day escluso: osservato tramite i suoi panel separatamente
    var sections = Array.from(document.querySelectorAll("section, .scroll-story, footer.site-footer"))
      .filter(function(el) { return el.id !== "open-day" && !el.classList.contains("scroll-story"); });

    var sectionObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) staggerIn(entry.target);
        else staggerOut(entry.target);
      });
    }, { threshold: THRESHOLD });

    sections.forEach(function(sec) { sectionObs.observe(sec); });

    // #open-day: osserva i due panel separatamente (evita l'altezza doppia del section)
    [".oda-panel--agenda", ".oda-panel--form"].forEach(function(sel) {
      var panel = document.querySelector(sel);
      if (!panel) return;
      var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) staggerIn(entry.target);
          else staggerOut(entry.target);
        });
      }, { threshold: THRESHOLD });
      obs.observe(panel);
    });

    // #bilinguismo — threshold 80% desktop, 10% mobile
    var bilinguismo = document.getElementById("bilinguismo");
    if (bilinguismo) {
      var bilObs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) staggerIn(entry.target);
          else staggerOut(entry.target);
        });
      }, { threshold: isMobile ? 0.1 : 0.8 });
      bilObs.observe(bilinguismo);
    }


// Frecce continuità — one-shot
    var pathEl = document.querySelector(".continuita-path");
    if (pathEl) {
      var pathObs = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) { pathEl.classList.add("path-in-view"); pathObs.disconnect(); }
      }, { threshold: 0.3 });
      pathObs.observe(pathEl);
    }

    // Steps continuità — stagger autonomo
    var stepObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll(".continuita-step--anim").forEach(function(el) { stepObs.observe(el); });
  }

  /* ============================================================
     SCROLL STORY — carosello verticale sticky
     ============================================================ */
  /* ============================================================
     FORM PANEL — slide-up dal basso su click CTA
     ============================================================ */
  function initFormPanel() {
    var formPanel = document.getElementById("odaFormPanel");
    var formClose = document.getElementById("odaFormClose");
    if (!formPanel) return;

    var originScrollY = 0;

    function blockBodyScroll(e) {
      // Permetti scroll solo all'interno del formPanel
      if (!formPanel.contains(e.target)) e.preventDefault();
    }

    var STAGGER_FORM = 80;
    function staggerFormIn() {
      var els = Array.from(formPanel.querySelectorAll(".fade-up"));
      els.forEach(function(el, i) {
        el.style.transitionDelay = (i * STAGGER_FORM) + "ms";
        el.classList.add("in-view");
      });
    }
    function staggerFormOut() {
      var els = Array.from(formPanel.querySelectorAll(".fade-up"));
      els.forEach(function(el) {
        el.style.transitionDelay = "0ms";
        el.classList.remove("in-view");
      });
    }

    function openFormFixed() {
      originScrollY = window.scrollY;
      formPanel.style.transform = "translateY(100%)";
      formPanel.style.transition = "none";
      formPanel.classList.add("is-fixed-open");
      formPanel.scrollTop = 0;
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", blockBodyScroll, { passive: false });
      formPanel.offsetHeight;
      formPanel.style.transition = "transform 0.65s cubic-bezier(0.32, 0, 0.16, 1)";
      formPanel.style.transform = "translateY(0)";
      // Reset → reveal elementi dopo che il pannello è entrato
      staggerFormOut();
      setTimeout(staggerFormIn, 500);
    }

    function closeFormFixed() {
      staggerFormOut();
      formPanel.style.transform = "translateY(100%)";
      document.body.style.overflow = "";
      document.removeEventListener("touchmove", blockBodyScroll);
      setTimeout(function() {
        formPanel.classList.remove("is-fixed-open");
        formPanel.style.transform = "";
        formPanel.style.transition = "";
        window.scrollTo({ top: originScrollY, behavior: "instant" });
      }, 650);
    }

    document.querySelectorAll('a[href="#booking-form-section"]').forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        e.preventDefault();
        openFormFixed();
      });
    });

    if (formClose) {
      formClose.addEventListener("click", closeFormFixed);
    }
  }

  function initScrollStory() {
    var story = document.getElementById("scroll-story-baby");
    if (!story) return;

    var imgInner = document.getElementById("ss-img-inner");
    var dots     = story.querySelectorAll(".scroll-story__dot");
    var imgs     = imgInner ? Array.from(imgInner.querySelectorAll(".scroll-story__img")) : [];
    var panelsEl = story.querySelector(".scroll-story__panels");
    var panelEls = story.querySelectorAll(".scroll-story__panel");
    var current  = 0;
    var mq = window.matchMedia("(max-width: 1023px)");
    var desktopActive = false;
    var headerH  = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 110;

    function triggerZoom(idx) {
      imgs.forEach(function(img, i) {
        if (i === idx) { img.classList.remove("in-view"); void img.offsetWidth; img.classList.add("in-view"); }
        else { img.classList.remove("in-view"); }
      });
    }

    function goTo(idx) {
      if (idx === current) return;
      current = idx;
      if (imgInner) imgInner.classList.toggle("at-panel-1", idx === 1);
      dots.forEach(function(d, i) { d.classList.toggle("is-active", i === idx); });
      triggerZoom(idx);
      // Gestisce il reveal del contenuto del pannello attivo
      panelEls.forEach(function(panel, i) {
        var content = panel.querySelector(".method__content");
        if (!content) return;
        content.style.transitionDelay = "";
        if (i === idx) { content.classList.add("in-view"); }
        else { content.classList.remove("in-view"); }
      });
    }

    // Zoom + reveal al primo ingresso nella sezione
    if ("IntersectionObserver" in window) {
      var enterObs = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
          triggerZoom(current);
          // Rivela tutti gli elementi .fade-up dentro scroll-story (sticky, immagini mobile, ecc.)
          story.querySelectorAll(".fade-up").forEach(function(el) {
            el.style.transitionDelay = "";
            el.classList.add("in-view");
          });
          // Il pannello 2 resta nascosto finché goTo(1) non lo porta in posizione
          var secondContent = panelEls[1] && panelEls[1].querySelector(".method__content");
          if (secondContent) secondContent.classList.remove("in-view");
          enterObs.disconnect();
        }
      }, { threshold: 0.1 });
      enterObs.observe(story);
    }

    // Riferimenti ai listener desktop per poterli rimuovere al deactivate
    var onDesktopScroll = null;
    var onDesktopResize = null;

    // IntersectionObserver per breakpoint mobile (immagine che cambia via IO)
    var mobObs = null;
    function setupMobile() {
      if (mobObs) return;
      if (!("IntersectionObserver" in window)) return;
      mobObs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) goTo(parseInt(entry.target.dataset.ssIdx, 10));
        });
      }, { threshold: 0.45 });
      panelEls.forEach(function(panel, i) { panel.dataset.ssIdx = i; mobObs.observe(panel); });
    }

    function teardownMobile() {
      if (mobObs) { mobObs.disconnect(); mobObs = null; }
    }

    function activateDesktop() {
      if (desktopActive) return;
      desktopActive = true;
      teardownMobile();
      // Reset immagine a pannello 0 prima di ricalcolare lo stato
      if (imgInner) imgInner.classList.remove("at-panel-1");
      current = 0;

      function getMax() { return Math.max(0, panelsEl.scrollHeight - panelsEl.clientHeight); }

      function updateIdx() {
        var p0h = panelEls[0] ? panelEls[0].offsetHeight : 0;
        var idx = (p0h > 0 && panelsEl.scrollTop >= p0h * 0.5) ? 1 : 0;
        if (idx !== current) goTo(idx);
      }

      function syncScroll() {
        var storyTop = story.getBoundingClientRect().top;
        var scrolled = headerH - storyTop;
        if (scrolled < 0) scrolled = 0;
        var max = getMax();
        if (scrolled > max) scrolled = max;
        panelsEl.scrollTop = scrolled;
        updateIdx();
      }

      function setupHeight() {
        story.style.height = "";
        var h = panelsEl.scrollHeight + headerH;
        story.style.height = h + "px";
      }

      onDesktopScroll = syncScroll;
      onDesktopResize = function() {
        requestAnimationFrame(function() {
          if (desktopActive) { setupHeight(); syncScroll(); }
        });
      };

      window.addEventListener("scroll", onDesktopScroll, { passive: true });
      window.addEventListener("resize", onDesktopResize, { passive: true });

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function() { if (desktopActive) { setupHeight(); syncScroll(); } });
      }
      window.addEventListener("load", function() { if (desktopActive) { setupHeight(); syncScroll(); } }, { once: true });

      requestAnimationFrame(function() {
        requestAnimationFrame(function() { setupHeight(); syncScroll(); });
      });
    }

    function deactivateDesktop() {
      if (!desktopActive) return;
      desktopActive = false;
      if (onDesktopScroll) { window.removeEventListener("scroll", onDesktopScroll); onDesktopScroll = null; }
      if (onDesktopResize) { window.removeEventListener("resize", onDesktopResize); onDesktopResize = null; }
      story.style.height = "";
      panelsEl.scrollTop = 0;
      // Reset immagine allo stato iniziale
      if (imgInner) imgInner.classList.remove("at-panel-1");
      dots.forEach(function(d, i) { d.classList.toggle("is-active", i === 0); });
      current = 0;
    }

    mq.addEventListener("change", function(e) {
      if (e.matches) { deactivateDesktop(); setupMobile(); }
      else { teardownMobile(); activateDesktop(); }
    });

    if (mq.matches) { setupMobile(); }
    else { activateDesktop(); }
  }

  /* ============================================================
     METODO — sticky viewer: testo e immagine cambiano allo scroll
     ============================================================ */
  function initMetodo() {
    var section = document.getElementById("metodo-section");
    if (!section) return;

    var panels = section.querySelectorAll(".metodo__panel");
    var imgs   = section.querySelectorAll(".metodo__img");
    var dots   = section.querySelectorAll(".metodo__dot");

    if (!panels.length) return;

    var current = 0;
    var total   = panels.length;
    var locked  = false;

    function goTo(idx) {
      if (idx === current) return;
      panels[current].classList.remove("is-active");
      if (imgs[current])  imgs[current].classList.remove("is-active");
      if (dots[current])  dots[current].classList.remove("is-active");
      current = idx;
      panels[current].classList.add("is-active");
      if (imgs[current])  imgs[current].classList.add("is-active");
      if (dots[current])  dots[current].classList.add("is-active");
      /* blocca ulteriori switch durante la transizione */
      locked = true;
      setTimeout(function() { locked = false; }, 500);
    }

    section.addEventListener("wheel", function(e) {
      /* Rilascia lo scroll di pagina se siamo già al bordo */
      if (e.deltaY > 0 && current === total - 1) return;
      if (e.deltaY < 0 && current === 0) return;

      /* Intercetta solo se la sezione è visibile nella viewport */
      var rect = section.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      e.preventDefault();
      if (locked) return;

      if (e.deltaY > 0) goTo(current + 1);
      else              goTo(current - 1);
    }, { passive: false });

    /* Touch: swipe verticale */
    var touchY = 0;
    section.addEventListener("touchstart", function(e) {
      touchY = e.touches[0].clientY;
    }, { passive: true });
    section.addEventListener("touchend", function(e) {
      var diff = touchY - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50 || locked) return;
      if (diff > 0 && current < total - 1) goTo(current + 1);
      else if (diff < 0 && current > 0)   goTo(current - 1);
    }, { passive: true });
  }

  /* ============================================================
     GIORNATA FILM — slideshow cinematico auto-play
     ============================================================ */
  function initGiornataFilm() {
    var stage    = document.getElementById("giornata-stage");
    if (!stage) return;

    var slides   = stage.querySelectorAll(".giornata-slide");
    var steps    = document.querySelectorAll(".giornata-film__step");
    var fill     = document.getElementById("giornata-progress-fill");
    var total    = slides.length;
    var current  = 0;
    var timer    = null;
    var INTERVAL = 4000;
    var paused   = false;

    function goTo(idx) {
      slides[current].classList.remove("is-active");
      steps[current].classList.remove("is-active");
      steps[current].setAttribute("aria-selected", "false");

      current = (idx + total) % total;

      slides[current].classList.add("is-active");
      steps[current].classList.add("is-active");
      steps[current].setAttribute("aria-selected", "true");

      if (fill) {
        fill.style.width = ((current + 1) / total * 100) + "%";
      }
    }

    function next() { goTo(current + 1); }

    function startTimer() {
      clearInterval(timer);
      if (!paused) timer = setInterval(next, INTERVAL);
    }

    /* click sui bottoni step */
    steps.forEach(function (btn) {
      btn.addEventListener("click", function () {
        goTo(parseInt(btn.dataset.goto, 10));
        startTimer();
      });
    });

    /* pausa su hover */
    stage.addEventListener("mouseenter", function () { paused = true;  clearInterval(timer); });
    stage.addEventListener("mouseleave", function () { paused = false; startTimer(); });

    /* swipe touch */
    var touchX = 0;
    stage.addEventListener("touchstart", function (e) { touchX = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener("touchend",   function (e) {
      var dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 40) { goTo(dx < 0 ? current + 1 : current - 1); startTimer(); }
    }, { passive: true });

    /* avvia solo quando la sezione è in view */
    if ("IntersectionObserver" in window) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { paused = false; startTimer(); }
          else                  { paused = true;  clearInterval(timer); }
        });
      }, { threshold: 0.25 });
      obs.observe(stage);
    } else {
      startTimer();
    }
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


    // Reveal drammatico del form
    var formReveal = document.querySelectorAll(".form-reveal");
    if (formReveal.length) {
      var revealObs = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      formReveal.forEach(function(el) { revealObs.observe(el); });
    }
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
