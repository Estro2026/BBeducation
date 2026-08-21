# BBEducation — Landing Page Primary + Middle School

## Specifica operativa per Claude Code / Visual Studio Code / GitHub Pages

> **Obiettivo:** costruire/reimpostare la landing page combinata **Primary School + Middle School** prendendo come reference diretta e vincolante la landing Baby attualmente pubblicata.
>
> **Reference live Baby:** `https://estro2026.github.io/BBeducation/`
>
> **Route nuova pagina Primary + Middle:** `https://estro2026.github.io/BBeducation/primary-middle-school.html`
>
> La landing Baby deve restare disponibile e invariata al suo URL. La nuova landing deve essere una seconda pagina autonoma, raggiungibile tramite il proprio URL, senza redirect e senza sostituire `index.html`.

---

# 0. ISTRUZIONE PRINCIPALE — NON REINTERPRETARE IL DESIGN

Realizza la pagina **Primary + Middle School** usando la landing Baby come **reference UI/UX diretta**.

Non creare un nuovo linguaggio grafico e non ridisegnare componenti già esistenti.

Devi riutilizzare il più possibile:

- stessa struttura di layout;
- stessa griglia;
- stessi container e max-width;
- stessi spacing token;
- stessa tipografia Nunito;
- stessa gerarchia tipografica;
- stesso stile di header e footer;
- stessi bottoni e dimensioni CTA;
- stessi border-radius;
- stessi form control;
- stessi stati hover/focus/active;
- stessi comportamenti sticky;
- stessi reveal on-scroll;
- stesso stagger degli elementi;
- stesso comportamento reverse quando gli elementi escono dalla viewport;
- stessa logica responsive;
- stessa attenzione a viewport e overflow;
- stessa accessibilità;
- stessa gestione `prefers-reduced-motion`;
- stessa logica JavaScript già utilizzata dalla landing Baby.

**La pagina deve sembrare appartenere allo stesso identico sistema visivo della landing Baby, cambiando contenuti e palette, non il design system.**

Prima di scrivere nuovo CSS o JS verifica se la soluzione esiste già in:

- `css/tokens.css`
- `css/style.css`
- `js/app.js`
- componenti/markup di `index.html`

Riusa classi, componenti e funzioni esistenti. Crea override dedicati alla Primary + Middle solo dove strettamente necessario.

---

# 1. FILE E ROUTING

## File da mantenere

### Landing Baby

- file: `index.html`
- URL: `https://estro2026.github.io/BBeducation/`
- **NON deve essere sovrascritta o trasformata nella nuova landing.**

### Landing Primary + Middle

- file: `primary-middle-school.html`
- URL: `https://estro2026.github.io/BBeducation/primary-middle-school.html`

Se `primary-middle-school.html` esiste già, **aggiornalo/recostruiscilo in base a questa specifica**, eliminando copy, sezioni, date o impostazioni precedenti che entrano in conflitto con questo documento.

## Accesso alle due pagine

Al termine devono essere raggiungibili direttamente entrambi gli URL:

1. `https://estro2026.github.io/BBeducation/`
2. `https://estro2026.github.io/BBeducation/primary-middle-school.html`

Non introdurre redirect tra le due pagine.

Nel footer o in un punto coerente con la navigazione già esistente, prevedi collegamenti discreti tra i percorsi:

- **Nido + Infanzia** → `/BBeducation/`
- **Primary + Middle School** → `/BBeducation/primary-middle-school.html`

Non trasformare questo collegamento in una nuova sezione invasiva.

---

# 2. PALETTE PRIMARY + MIDDLE SCHOOL

Questa landing NON deve utilizzare il blu/verde Baby come palette dominante.

## Colori ufficiali

```css
:root {
  --bbe-primary-pink: #FF788D;
  --bbe-middle-orange: #FFAC59;

  --bbe-primary-middle-gradient: linear-gradient(
    90deg,
    #FF788D 0%,
    #FFAC59 100%
  );

  --bbe-primary-middle-gradient-135: linear-gradient(
    135deg,
    #FF788D 0%,
    #FFAC59 100%
  );

  --bbe-primary-middle-gradient-180: linear-gradient(
    180deg,
    #FF788D 0%,
    #FFAC59 100%
  );

  --bbe-white: #FFFFFF;
  --bbe-black: #000000;
}
```

## Regola di utilizzo

- **Primary School:** accento rosa `#FF788D`.
- **Middle School:** accento arancione `#FFAC59`.
- **Sezioni che raccontano il percorso comune Primary → Middle:** gradiente rosa → arancione.
- Bianco e nero restano i neutri principali.
- Tint molto leggere dei due colori possono essere usate negli sfondi secondari, esattamente come avviene nella Baby con i suoi colori.

### Vietato

- usare il gradiente Baby blu → verde come colore dominante;
- introdurre nuovi colori arbitrari;
- introdurre gradienti viola, blu, verdi o multicolor non previsti;
- cambiare la logica cromatica dei componenti solo per “rendere diversa” la pagina.

## Pattern / texture

Mantieni **la stessa logica visiva e la stessa intensità del pattern della Baby**, ma il risultato deve essere coerente con i colori Primary + Middle.

- Se nel repository esiste un asset ufficiale Primary/Middle, usalo.
- Se NON esiste, non lasciare visibile il pattern Baby blu/verde.
- In assenza di asset ufficiale adatto, usa il gradiente rosa → arancione con la stessa composizione/layout dell'hero, senza inventare un pattern differente.

---

# 3. TIPOGRAFIA

Usare **Nunito** già presente nel repository.

Non introdurre altri font.

Replica dalla landing Baby:

- dimensioni H1/H2/H3;
- font-weight;
- line-height;
- tracking;
- larghezza massima delle righe;
- comportamento responsive;
- gestione delle interruzioni di riga;
- gerarchia eyebrow → title → body → CTA.

I titoli devono mantenere lo stesso carattere morbido, contemporaneo e leggibile della landing Baby.

---

# 4. REGOLE DI ANIMAZIONE E SCROLL — VINCOLANTI

La nuova pagina deve utilizzare **gli stessi effetti della landing Baby**.

## Reveal generale

Riusa la logica `fade-up` / `in-view` esistente in `js/app.js`.

Comportamento previsto:

- elemento iniziale leggermente spostato verso il basso + opacity 0;
- entrata morbida verso posizione naturale + opacity 1;
- easing uguale alla reference;
- stagger progressivo tra titolo, testo, card, immagini, CTA;
- quando una sezione esce dalla viewport, gli elementi devono poter tornare allo stato iniziale secondo la stessa logica reverse già utilizzata;
- su mobile usare le soglie già previste dal progetto;
- rispettare `prefers-reduced-motion`.

**Non creare un secondo sistema di animazioni.**

## Card

Le card devono entrare con lo stesso linguaggio delle card della landing Baby:

- fade-up;
- lieve translateY;
- eventuale scale iniziale dove già previsto dal componente;
- stagger tra card;
- stesso hover delle card analoghe;
- stessa durata e curva di easing.

## Immagini / visual

Quando la reference usa reveal, zoom, sticky visual o transizione sincronizzata allo scroll, riusa esattamente quella logica nel blocco analogo della nuova pagina.

Non aggiungere parallax gratuiti o animazioni differenti.

## Hero

Replica le animazioni di entrata della hero Baby:

- background/visual in entrata;
- pannello copy;
- elementi interni in stagger;
- immagine/visual laterale;
- nessun movimento aggressivo;
- nessun contenuto deve uscire dalla viewport.

---

# 5. HEADER

Replica lo stesso header della landing Baby per:

- altezza;
- allineamenti;
- larghezza;
- logo;
- nav;
- CTA;
- comportamento sticky/fixed;
- shadow on scroll;
- hamburger/mobile menu;
- accessibilità;
- smooth scroll verso le anchor.

Adatta solamente i colori alla palette Primary + Middle.

## Separatore header

Il separatore/linea brand sotto l'header deve utilizzare:

```css
linear-gradient(90deg, #FF788D 0%, #FFAC59 100%)
```

## Navigazione consigliata

- Percorso
- Primary
- Middle School
- Campus
- Open Day
- FAQ

CTA header:

**PRENOTA IL TUO OPEN DAY**

→ `#open-day`

---

# 6. HERO

## Obiettivo

Comunicare immediatamente che BBEducation offre un unico percorso bilingue che continua dalla Primary alla Middle School.

## Copy esatto

### Eyebrow / label

**SCUOLA ELEMENTARE E MEDIA BILINGUE ITALIANO E INGLESE**

### H1

**Il suo prossimo passo inizia qui.**

### Testo

Un percorso bilingue che accompagna gli studenti dalla scuola primaria alla Middle School, unendo apprendimento, innovazione e crescita personale.

### CTA

**PRENOTA IL TUO OPEN DAY**

→ `#open-day`

## UI

Replica la composizione della hero Baby:

- stessa altezza relativa alla viewport;
- stessa logica immagine + copy;
- stessa proporzione delle colonne;
- stesso pannello copy;
- stesso comportamento desktop/mobile;
- stesso crop e object-fit del visual;
- stesso sistema di animazioni in ingresso.

Il visual deve essere pertinente a Primary/Middle e non alla fascia 0–6.

Se manca un asset definitivo, usare un placeholder locale chiaramente nominato, senza scaricare immagini stock automaticamente.

---

# 7. SEZIONE — IL PERCORSO BBE

ID consigliato: `#percorso`

### Eyebrow

**IL PERCORSO BBE**

### Titolo

**Un percorso che cresce con loro.**

## Due blocchi principali

### PRIMARY

Imparare facendo, attraverso esperienze, progetti e collaborazione.

### MIDDLE SCHOOL

Sviluppare autonomia, pensiero critico e competenze per il futuro.

### Testo conclusivo

Un unico progetto educativo, bilingue italiano e inglese, che accompagna gli studenti nelle diverse fasi della crescita.

### CTA

**PARTECIPA ALL’OPENDAY**

→ `#open-day`

## UI

Questa sezione deve rendere visivamente chiara la continuità:

**PRIMARY → MIDDLE SCHOOL**

- Primary con accento rosa;
- Middle con accento arancione;
- collegamento/percorso con gradiente rosa → arancione;
- stessa logica di card, spacing e reveal dei componenti analoghi della landing Baby;
- niente timeline complessa se non necessaria.

---

# 8. SEZIONE — COSA CI RENDE DIVERSI

ID consigliato: `#why`

### Eyebrow

**COSA CI RENDE DIVERSI**

### Titolo se utile per mantenere la stessa gerarchia della reference

Usare la stessa struttura `section__header` della landing Baby senza inventare un claim aggiuntivo che alteri il copy fornito.

## Card 1 — Bilinguismo autentico

Italiano e inglese fanno parte della quotidianità.

## Card 2 — Imparare facendo

Esperienze, progetti e attività stimolano curiosità e autonomia.

## Card 3 — Studente al centro

Attenzione alla persona, alle sue caratteristiche e alla sua crescita.

## Card 4 — Continuità educativa

Un percorso coerente dalla Primary alla Middle School.

### CTA

**VIENI A CONOSCERCI**

→ `#open-day`

## UI

Usa lo stesso componente/card system della sezione equivalente della landing Baby:

- 4 card;
- stessa griglia desktop/tablet/mobile;
- stesso border radius;
- stesso bordo;
- stesso hover;
- stesso reveal + stagger;
- icone semplici coerenti con quelle già presenti nel repository.

Non aggiungere nuove librerie di icone se non necessario.

---

# 9. SEZIONE — LA PRIMARY SCHOOL

ID consigliato: `#primary`

### Eyebrow

**LA PRIMARY SCHOOL**

### Titolo

**Imparare facendo. Crescere insieme.**

### Intro

Alla Primary BBEducation l'apprendimento nasce dall'esperienza. Italiano e inglese fanno parte della quotidianità, mentre attività, progetti e percorsi interdisciplinari aiutano ogni studente a sviluppare curiosità, creatività, collaborazione e pensiero critico.

## Punto 1 — Un apprendimento attivo

Gli studenti imparano attraverso esperienze concrete, attività coinvolgenti e progetti che li aiutano a collegare conoscenze e competenze.

## Punto 2 — Il bilinguismo nella quotidianità

L'inglese diventa uno strumento quotidiano di apprendimento e comunicazione, integrato nelle diverse attività scolastiche.

## Punto 3 — Ogni studente al centro

Classi contenute e attenzione alla persona permettono di costruire un percorso educativo attento alle caratteristiche e ai tempi di ogni studente.

### CTA

**SCOPRI LA PRIMARY SCHOOL**

Se esiste la pagina `primary.html`, collega la CTA a:

`primary.html`

Se la pagina non è pronta/publicabile, mantieni la CTA predisposta ma non creare un URL fittizio.

## UI

Replica un blocco narrativo/visual della landing Baby già esistente, con:

- immagine autentica Primary;
- testo e visual affiancati su desktop;
- stack corretto su mobile;
- accent rosa `#FF788D`;
- reveal testo + visual coerente con la reference.

---

# 10. SEZIONE — IL METODO DELLA MIDDLE SCHOOL

ID consigliato: `#middle`

### Eyebrow

**IL METODO DELLA MIDDLE SCHOOL**

### Titolo

**Imparare a pensare. Prepararsi al futuro.**

### Intro

Nella Middle School il modo di imparare evolve insieme agli studenti, con un approccio che sviluppa autonomia, curiosità e pensiero critico.

## Punto 1 — Inquiry Based Learning

Partire dalle domande per ricercare, esplorare e costruire conoscenza.

## Punto 2 — Gameful Learning

Imparare attraverso esperienze coinvolgenti, sfide e collaborazione.

## Punto 3 — Future Skills

Pensiero critico, creatività, autonomia e capacità di collaborare.

### CTA

**SCOPRI LA MIDDLE SCHOOL**

Se esiste la pagina `middle.html`, collega la CTA a:

`middle.html`

Se la pagina non è pronta/publicabile, mantieni la CTA predisposta ma non creare un URL fittizio.

## UI

Deve essere chiaramente la continuazione della sezione Primary:

- stesso componente/layout di base;
- eventuale alternanza visual/testo come nella reference;
- accento arancione `#FFAC59`;
- stessa quantità di respiro;
- stesso reveal;
- stesso comportamento responsive.

---

# 11. SEZIONE — NUOVO CAMPUS

ID consigliato: `#campus`

### Eyebrow

**NUOVO CAMPUS**

### Titolo

**Dal 2027, il percorso continua a Seveso.**

### Testo

Il nuovo Campus ospiterà Primary e Middle School all'interno di un unico progetto educativo.

La Middle School estenderà il percorso BBEducation fino ai 14 anni, accompagnando gli studenti in una nuova fase di crescita e apprendimento.

### Elemento visuale

**PRIMARY → MIDDLE SCHOOL**

## UI

- usare il gradiente rosa → arancione come elemento di continuità;
- stessa logica di fascia/section highlight già presente nella landing Baby;
- non introdurre un look “real estate” o corporate separato;
- visual Campus solo se presente nel repository; altrimenti placeholder chiaramente segnalato.

---

# 12. SEZIONE — OPEN DAY

ID obbligatorio: `#open-day`

### Eyebrow

**OPEN DAY**

### Titolo

**La scuola giusta si sceglie vivendola.**

### Intro

Visita BBEducation, incontra il team e scopri il nostro modo di fare scuola.

## Cosa succede durante l'Open Day

### VISITA

Scopri gli spazi e l'ambiente.

### CONOSCI

Incontra il team educativo.

### SCOPRI

Approfondisci metodo, Primary e Middle School.

### CTA

**PRENOTA IL TUO OPEN DAY**

→ form di prenotazione nella stessa sezione / panel, mantenendo la stessa interaction della landing Baby.

## UI

Replica il componente Open Day della landing Baby:

- stessa struttura visuale;
- stessi badge/card;
- stessa tipografia;
- stessi reveal;
- stessa CTA;
- stessa transizione verso il form;
- stesso comportamento desktop/mobile.

---

# 13. DATE OPEN DAY — PRIMARY + MIDDLE

## REGOLA CRITICA

Sostituisci le eventuali date precedentemente presenti in `js/config-pms.js`.

**NON usare le vecchie date.**

Usare esclusivamente queste date e nell'ordine seguente:

1. **Sabato 3 ottobre 2026**
2. **Sabato 17 ottobre 2026**
3. **Martedì 27 ottobre 2026**
4. **Sabato 14 novembre 2026**
5. **Sabato 28 novembre 2026**
6. **Sabato 12 dicembre 2026**
7. **Sabato 23 gennaio 2027**

## Orari

L'utente non ha fornito gli orari.

**Non inventare orari.**

Se il componente attuale richiede obbligatoriamente un campo `time`, rendilo opzionale/null e non mostrarlo nel frontend finché il dato non viene fornito.

## Capienza/posti

Non inventare capienza o posti residui se non sono stati confermati.

Se il sistema esistente prevede campi di configurazione, possono restare `null`, ma il frontend non deve mostrare dati fittizi.

## Configurazione consigliata

Aggiorna `js/config-pms.js` o una configurazione equivalente, mantenendo i dati separati dal markup.

Esempio concettuale:

```js
openDayEvents: [
  {
    id: "od-pms-2026-10-03",
    type: "open-day",
    dayLabel: "Sabato",
    dateLabel: "3 ottobre",
    year: 2026,
    time: null,
    capacity: null,
    status: "available"
  },
  // ...altre date
]
```

Non hardcodare le date in più punti diversi del progetto.

---

# 14. FORM — PRENOTA IL TUO OPEN DAY

### Titolo

**Prenota il tuo Open Day**

## Campi — ordine esatto

### Nome e cognome *

Placeholder:

`es. Marco Rossi`

### Quale percorso vuoi conoscere? *

Scelte:

- Primary School
- Middle School
- Entrambi

Usare radio button accessibili oppure il componente equivalente già presente nel design system.

### Data Open Day *

Select popolata esclusivamente con le date definite nella configurazione.

Placeholder:

`Seleziona una data`

### Anno di nascita figlio/i

Campo aperto.

Placeholder:

`es. 2015 - 2019`

### Telefono *

Placeholder:

`es. 333 000 0000`

### Email *

Placeholder:

`es. marco@email.it`

### Messaggio

Textarea facoltativa.

### Privacy *

Testo:

**Ho letto e accetto la Privacy Policy di BBEducation e acconsento al trattamento dei dati per la gestione della prenotazione.**

La dicitura **Privacy Policy** deve essere un link reale se l'URL è disponibile in configurazione.

### Submit

**PRENOTA IL TUO OPEN DAY**

## Stati form

Riusa integralmente la logica della landing Baby:

- required;
- error message accessibili;
- `aria-live` dove già presente;
- focus state;
- disabled/loading state se previsto;
- success/error state;
- nessun fake submit se non esiste backend.

Se il backend/API non è disponibile, lascia una TODO tecnica chiara senza simulare una prenotazione avvenuta.

---

# 15. FAQ

ID: `#faq`

### Eyebrow

**FAQ**

### Titolo

**Tutto quello che vuoi sapere prima di scegliere.**

Usa lo stesso accordion FAQ della landing Baby.

## FAQ 1

### Dove si svolge l'Open Day?

L'Open Day si svolge presso la sede BBEducation di Cesano Maderno.

## FAQ 2

### Quando sarà operativo il nuovo Campus di Seveso?

Il nuovo Campus di Seveso sarà operativo dal 2027 e ospiterà i percorsi Primary e Middle School.

## FAQ 3

### Se mio figlio frequenta la Primary, poi potrà continuare il percorso nella Middle School?

Sì. La nuova Middle School nasce per dare continuità al percorso educativo BBEducation, permettendo agli studenti della Primary di proseguire, se lo desiderano, all'interno dello stesso progetto educativo fino ai 14 anni. La scelta resta libera: al termine della Primary, ogni famiglia potrà decidere se continuare il percorso in BBEducation o scegliere una scuola diversa per la Middle School.

## FAQ 4

### La Middle School sarà bilingue?

Sì. La Middle School farà parte del percorso bilingue italiano e inglese di BBEducation. L'inglese sarà integrato nel percorso educativo come strumento di apprendimento e comunicazione, in continuità con il progetto bilingue della Primary.

## FAQ 5

### Quali metodi educativi caratterizzano la Middle School?

La Middle School svilupperà un approccio basato su Inquiry Based Learning e Gameful Learning, con esperienze interdisciplinari orientate a sviluppare autonomia, pensiero critico, creatività e collaborazione. L'obiettivo è accompagnare gli studenti verso competenze utili per affrontare le sfide del futuro.

## FAQ 6

### Posso partecipare sia all'Open Day Primary sia a quello Middle?

Sì. Nel form di prenotazione sarà possibile indicare l'interesse per Primary School, Middle School oppure entrambi i percorsi. In questo modo potrai conoscere sia il percorso attuale sia il progetto della nuova Middle School.

## Comportamento accordion

- stesso stile della Baby;
- stesso open/close;
- stessa animazione;
- stessa icona/marker;
- stato open colorato secondo palette Primary + Middle;
- tastiera e focus accessibili.

---

# 16. FORM — RICHIESTA INFORMAZIONI

Dopo le FAQ inserire anche il form di richiesta informazioni, coerente con il form secondario della landing Baby.

### Titolo consigliato

**Vuoi maggiori informazioni?**

### Testo breve

Lasciaci i tuoi dati e ti ricontatteremo per approfondire il percorso più adatto.

## Campi

- Nome e cognome *
- Telefono *
- Email *
- Percorso di interesse *
  - Primary School
  - Middle School
  - Entrambi
- Anno di nascita figlio/i
- Messaggio
- Privacy *

### Privacy

**Ho letto e accetto la Privacy Policy di BBEducation e acconsento al trattamento dei dati per ricevere informazioni.**

### CTA

**RICHIEDI INFORMAZIONI**

## UI

Riusa il componente `info-form-wrapper` / equivalente della landing Baby.

Adatta esclusivamente:

- copy;
- opzioni percorso;
- colori accent.

Non ridisegnare il form.

---

# 17. FOOTER

Replica il footer della landing Baby per:

- struttura;
- colonne;
- spacing;
- logo;
- CTA block;
- privacy/legal;
- responsive;
- reveal.

Il blocco CTA può usare il gradiente Primary → Middle:

`#FF788D → #FFAC59`

Inserire un accesso discreto ai due percorsi:

- Nido + Infanzia
- Primary + Middle School

Non cambiare il design complessivo del footer.

---

# 18. RESPONSIVE — NON È UNA VERSIONE RIDOTTA DEL DESKTOP

La pagina deve essere rifinita almeno per:

- mobile small;
- mobile;
- tablet;
- desktop;
- desktop wide.

## Regole

- nessun overflow orizzontale;
- nessuna CTA tagliata;
- nessun titolo fuori viewport;
- nessuna immagine deformata;
- nessuna riga di form impossibile da compilare;
- touch target adeguati;
- menu mobile identico per logica alla Baby;
- card impilate o trasformate secondo i breakpoint della reference;
- hero completamente leggibile;
- ordine contenuti logico su mobile;
- mantenere gli effetti di reveal, con threshold adatto al mobile già gestito da `app.js`.

Non inventare breakpoint arbitrari se quelli della landing Baby risolvono già il problema.

---

# 19. ACCESSIBILITÀ

Mantenere lo stesso livello della landing Baby:

- HTML semantico;
- un solo H1;
- heading hierarchy corretta;
- skip link;
- `aria-label` dove necessario;
- focus visibile;
- form label reali;
- messaggi di errore collegati ai campi;
- accordion accessibile;
- contrasto sufficiente;
- immagini decorative con `alt=""`;
- immagini informative con alt descrittivo;
- supporto tastiera;
- `prefers-reduced-motion`.

---

# 20. PERFORMANCE

Seguire le stesse regole della landing Baby:

- niente nuove dipendenze pesanti;
- niente framework aggiunti inutilmente;
- immagini WebP/AVIF quando possibile;
- `loading="lazy"` fuori dalla hero;
- hero asset prioritario;
- dimensioni width/height dichiarate;
- evitare layout shift;
- CSS/JS riusabili;
- niente immagini stock scaricate automaticamente;
- niente video pesanti se non già disponibili e ottimizzati.

---

# 21. SEO E META

Per `primary-middle-school.html` usare meta coerenti con il nuovo contenuto.

## Title consigliato

`Scuola Elementare e Media Bilingue | BBEducation`

## Meta description consigliata

`Scopri il percorso bilingue italiano e inglese di BBEducation dalla Primary alla Middle School. Prenota l'Open Day e conosci metodo, team e nuovo Campus.`

## H1

Deve restare:

**Il suo prossimo passo inizia qui.**

L'eyebrow sopra l'H1 deve contenere:

**SCUOLA ELEMENTARE E MEDIA BILINGUE ITALIANO E INGLESE**

Non usare vecchi copy SEO presenti nella pagina se in conflitto con questo documento.

---

# 22. STRUTTURA FINALE DELLA PAGINA

L'ordine deve essere:

1. Header
2. Hero
3. Il percorso BBE
4. Cosa ci rende diversi
5. La Primary School
6. Il metodo della Middle School
7. Nuovo Campus
8. Open Day
9. Form Prenota il tuo Open Day
10. FAQ
11. Form Richiesta informazioni
12. Footer

Non inserire sezioni aggiuntive senza necessità.

---

# 23. CTA — DESTINAZIONI

| CTA | Destinazione |
|---|---|
| PRENOTA IL TUO OPEN DAY | `#open-day` / form prenotazione |
| PARTECIPA ALL’OPENDAY | `#open-day` |
| VIENI A CONOSCERCI | `#open-day` |
| SCOPRI LA PRIMARY SCHOOL | `primary.html` se disponibile |
| SCOPRI LA MIDDLE SCHOOL | `middle.html` se disponibile |
| RICHIEDI INFORMAZIONI | submit form informazioni |

Tutte le anchor interne devono usare lo smooth scroll già implementato nel progetto.

---

# 24. CHECKLIST DI IMPLEMENTAZIONE

Prima di considerare il lavoro concluso verifica tutti i punti:

- [ ] `index.html` Baby è rimasta invariata e funzionante.
- [ ] `primary-middle-school.html` è raggiungibile direttamente.
- [ ] Entrambi gli URL GitHub Pages funzionano.
- [ ] La nuova pagina usa Nunito.
- [ ] Primary usa `#FF788D`.
- [ ] Middle usa `#FFAC59`.
- [ ] Le sezioni comuni usano il gradiente rosa → arancione.
- [ ] Non è rimasto il gradiente Baby blu → verde in elementi dominanti della nuova landing.
- [ ] Header identico per logica/dimensioni alla Baby.
- [ ] Footer identico per logica/dimensioni alla Baby.
- [ ] CTA riusano le stesse classi/componenti della Baby.
- [ ] Card riusano lo stesso sistema UI della Baby.
- [ ] Reveal on-scroll riusa `fade-up` / `in-view`.
- [ ] Lo stagger è coerente con `app.js`.
- [ ] Il reverse reveal funziona quando si torna indietro con lo scroll.
- [ ] `prefers-reduced-motion` è rispettato.
- [ ] Hero è interamente leggibile a tutti i breakpoint.
- [ ] Nessun overflow orizzontale.
- [ ] Le date Open Day sono solo quelle fornite in questa specifica.
- [ ] Le vecchie date di `config-pms.js` sono state sostituite.
- [ ] Non sono stati inventati orari.
- [ ] Non sono stati inventati posti residui/capienza.
- [ ] Il form permette Primary / Middle / Entrambi.
- [ ] Il campo anno di nascita è aperto.
- [ ] FAQ copy corrisponde a questa specifica.
- [ ] Dopo le FAQ è presente il form richiesta informazioni.
- [ ] `primary.html` e `middle.html` vengono linkate solo se realmente disponibili.
- [ ] Focus, tastiera, label ed errori form sono accessibili.
- [ ] Nessun contenuto fittizio viene presentato come dato reale.

---

# 25. REGOLA FINALE PER CLAUDE CODE

**Non limitarti a “ispirarti” alla landing Baby. Usala come sistema sorgente.**

La priorità è:

1. conservare la stessa UI/UX della landing Baby;
2. sostituire i contenuti con quelli di questa specifica;
3. sostituire la palette Baby con Primary + Middle;
4. riutilizzare classi, componenti, token ed effetti già presenti;
5. evitare duplicazioni di CSS/JS;
6. mantenere entrambe le landing pubblicate e accessibili su URL distinti.

Se una scelta può essere risolta copiando/riusando un componente già funzionante della Baby, **riusalo invece di crearne uno nuovo**.
