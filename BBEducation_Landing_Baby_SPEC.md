# BBEducation — Landing Page Baby
## Specifica di implementazione per Claude Code / Visual Studio Code / GitHub

> **Stato:** specifica operativa per la prima delle 2 landing page BBEducation.  
> **Scope attuale:** realizzare **solo la Landing Page Baby — Nido & Scuola dell'Infanzia, sede di Biassono**.  
> **Non implementare ancora:** Landing Page Primary & Middle School.  
> La struttura del progetto deve però restare riutilizzabile per la seconda landing in una fase successiva.

---

# 0. Istruzione principale

Realizza una landing page ad alte performance per gli Open Day di **BBEducation — Brianza Bilingual Education**, dedicata a:

- Asilo Nido
- Scuola dell'Infanzia
- sede di **Biassono**
- fascia educativa **0–6 anni**

La pagina deve essere:

- coerente con la Visual Identity ufficiale BBEducation;
- mobile-first;
- accessibile;
- veloce;
- orientata alla conversione;
- costruita con componenti riutilizzabili;
- pronta per essere collegata a backend/API/CMS senza simulare dati non disponibili;
- fedele al copy e alla struttura strategica forniti.

**KPI primario:** prenotazione a un Open Day.  
**KPI secondario:** richiesta di informazioni.

Non trasformare la pagina in una brochure istituzionale. Ogni sezione deve contribuire a portare l'utente verso una CTA o a rimuovere un'obiezione prima della conversione.

---

# 1. Gerarchia delle fonti e gestione dei conflitti

Per qualsiasi decisione, applicare questo ordine di priorità:

1. **Le istruzioni contenute in questo file**
2. **VI.pdf — Visual Identity ufficiale**
3. **BBEducation_Landing_OpenDay.pdf — strategia UX/CRO, copy e struttura**
4. Convenzioni già presenti nel repository
5. Scelte tecniche autonome solo dove i documenti non specificano nulla

## Regola critica

Nel documento strategico sono presenti alcune **UI Suggestions** che propongono:
- verde profondo/petrolio;
- oro/senape;
- serif elegante per i titoli.

**NON applicarle alla Landing Baby**, perché sono in conflitto con la Visual Identity ufficiale e con l'indicazione progettuale corrente.

Per la Landing Baby sono vincolanti:

- **Font: Nunito**
- **Verde Nido: `#70DDA0`**
- **Blu Scuola dell'Infanzia: `#80A9D5`**
- **Gradiente Baby: blu → verde**
- Bianco e nero come colori neutri

Il rosa `#FF788D` e l'arancione `#FFAC59` appartengono rispettivamente a Primary e Middle e **non devono diventare colori UI della Landing Baby**. Possono comparire solo se inevitabilmente presenti nel logo ufficiale full-color.

---

# 2. Contesto brand

BBEducation è una realtà scolastica paritaria bilingue nata per offrire un percorso educativo innovativo, internazionale e centrato sullo sviluppo delle competenze.

Elementi distintivi da comunicare:

- apprendimento immersivo italiano/inglese;
- centralità del bambino;
- dimensione familiare e di cura;
- classi a numero contenuto;
- attenzione alla crescita individuale;
- collaborazione con le famiglie;
- approccio pedagogico moderno;
- continuità del percorso educativo;
- bilinguismo vissuto nella quotidianità, non trattato come semplice materia.

La Landing Baby deve concentrarsi sulla sede di **Biassono** e non deve spostare il focus sul futuro Campus di Seveso o sulla Middle School, salvo un riferimento molto leggero alla continuità del percorso 0–14 anni dove previsto dal copy.

---

# 3. Target e problema da risolvere

## Target

Genitori indicativamente tra 28 e 50 anni, reddito medio/medio-alto, residenti in Brianza e zone limitrofe, con bambini 0–6 anni.

Sono spesso alla prima esperienza di scelta scolastica e possono avere una conoscenza limitata del metodo bilingue.

## Pain point principale

La prima necessità non è ricevere molte informazioni, ma percepire:

- sicurezza emotiva;
- cura;
- fiducia;
- serenità;
- qualità delle relazioni;
- adeguatezza dell'ambiente per un bambino molto piccolo.

Obiezioni principali:

- “È il posto giusto per un bambino così piccolo?”
- “Posso fidarmi di questa scuola?”
- “Il bilinguismo precoce può confondere o rallentare il bambino?”
- “Come funziona l'ambientamento?”
- “Quali sono le rette e cosa comprendono?”
- dubbi pratici su distanza e partecipazione all'Open Day.

La progressione emotiva della pagina deve essere:

**attenzione → fiducia → desiderio → azione → rassicurazione finale**

---

# 4. Visual Identity — regole non negoziabili

## 4.1 Font

Usare esclusivamente **Nunito** come famiglia tipografica principale.

Consentiti:
- Regular / testo normale
- Bold / enfasi e titoli

Non introdurre serif o altri font per “rendere premium” il progetto.

Se Nunito non è già presente nel repository:
- integrarlo con la soluzione già usata dal progetto;
- evitare richieste di rete bloccanti se il font è disponibile localmente nel progetto;
- prevedere fallback sans-serif coerente.

Esempio:

```css
font-family: "Nunito", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

## 4.2 Palette ufficiale

```css
:root {
  --bbe-baby-green: #70DDA0;
  --bbe-baby-blue: #80A9D5;

  --bbe-primary-pink: #FF788D;   /* riservato alla futura Primary */
  --bbe-middle-orange: #FFAC59; /* riservato alla futura Middle */

  --bbe-white: #FFFFFF;
  --bbe-black: #000000;

  --bbe-baby-gradient: linear-gradient(
    90deg,
    #80A9D5 0%,
    #70DDA0 100%
  );
}
```

### Utilizzo Landing Baby

Colori principali:
- `#80A9D5`
- `#70DDA0`

Neutri:
- `#FFFFFF`
- `#000000`

Il gradiente Baby deve fondere **blu e verde**.  
Non usare il gradiente completo a quattro colori come gradiente principale di questa landing.

## 4.3 Logo

La VI mostra varianti ufficiali:

- logo BBEducation completo full-color su fondo chiaro;
- simbolo compatto “BBE” full-color;
- variante nera;
- variante bianca;
- varianti adatte a fondo nero o gradiente.

Regole:

- utilizzare **asset ufficiali**, se presenti nel repository;
- non ridisegnare il logo in HTML/CSS;
- non alterare proporzioni, colori o lettering;
- su fondo bianco/chiaro preferire il logo full-color;
- su gradiente Baby usare la variante bianca solo se il contrasto è migliore e se l'asset ufficiale è disponibile;
- il simbolo compatto può essere usato su mobile o in elementi secondari, non come sostituzione arbitraria del logo completo.

Se gli asset non sono presenti, inserire un placeholder tecnico chiaramente nominato e una `TODO`, senza inventare un logo.

## 4.4 Pattern BBE

La VI mostra un pattern costruito ripetendo il segno grafico BBE.

Può essere usato come elemento decorativo:

- in una porzione dell'hero;
- in una fascia;
- come texture molto leggera;
- come sfondo di un blocco CTA.

Non deve compromettere:
- leggibilità;
- contrasto;
- performance;
- fotografia.

**Non ricostruire il pattern in modo approssimativo.** Usare l'asset ufficiale se disponibile. In assenza dell'asset, lasciare una predisposizione CSS/markup e una TODO.

## 4.5 Linguaggio visivo

Dagli esempi della campagna Open Day mantenere:

- ampio uso del bianco;
- layout pulito;
- fotografia protagonista;
- elementi arrotondati/pill;
- linee o bordi sottili;
- gradienti come accento, non come rumore visivo;
- tipografia chiara e diretta;
- rapporto visivo forte tra contenuto reale della scuola e identità grafica.

La Landing Baby deve sembrare:
- accogliente;
- contemporanea;
- affidabile;
- curata;
- non infantile in modo stereotipato.

Evitare:
- grafiche da “asilo generico”;
- illustrazioni stock;
- eccesso di pastelli;
- arcobaleni arbitrari;
- emoji;
- icone cartoon;
- ombre pesanti;
- glassmorphism;
- gradienti non presenti nella VI;
- visual “tech” freddi.

---

# 5. Fotografia e video

Usare **solo foto/video autentici della scuola, degli spazi, delle attività e delle persone**, se disponibili.

Non usare immagini stock generiche di bambini.

## Hero desktop

Preferenza:
- video breve autentico;
- autoplay;
- muted;
- loop;
- `playsinline`;
- nessun audio automatico;
- eventuali sottotitoli se c'è parlato.

## Hero mobile

Sostituire il video con:
- immagine statica autentica;
- ottimizzata;
- responsive;
- compressa;
- senza compromettere LCP.

Se gli asset reali non sono ancora presenti:
- usare placeholder neutri con aspect ratio definito;
- NON scaricare automaticamente immagini stock da internet;
- lasciare nomi asset chiari, ad esempio:
  - `hero-baby-placeholder`
  - `method-baby-placeholder`
  - `spaces-baby-placeholder`

---

# 6. Struttura completa della Landing Baby

La pagina deve avere esattamente questi 10 blocchi principali:

1. Header sticky
2. Hero
3. Trust bar
4. Perché BBEducation
5. Il metodo educativo
6. Open Day — selettore date + form prenotazione
7. Cosa troverete
8. FAQ
9. Form richiesta informazioni
10. Footer

Non inserire sezioni aggiuntive che spostino il selettore Open Day troppo in basso.

---

# 7. Header sticky

## Obiettivo

Orientamento immediato + accesso costante alla prenotazione.

## Contenuti

Sinistra:
- logo BBEducation
- label contestuale: **“Nido & Infanzia Bilingue”**

Menu minimale, solo anchor utili:
- Metodo
- Open Day
- FAQ
- Contatti

Destra:
- CTA primaria **“Prenota Open Day”**

## Comportamento

- sticky/fixed quando necessario;
- sempre leggibile;
- non occupare troppo spazio verticale;
- CTA sempre visibile su desktop;
- su mobile usare header compatto e la sticky CTA inferiore descritta più avanti.

CTA → scroll fluido a `#open-day`.

---

# 8. Hero

## Obiettivo

Generare in pochi secondi una sensazione di sicurezza, affetto e qualità, prima della spiegazione razionale.

## Copy da utilizzare nella prima implementazione

### Eyebrow / label
**Baby School · Nido & Scuola dell'Infanzia · Biassono**

### H1 SEO
**Nido e Scuola dell'Infanzia Bilingue a Biassono**

### Messaggio emozionale principale
**Il bilinguismo comincia con un abbraccio.**

Il messaggio emozionale deve avere forte rilevanza visiva ma l'H1 semantico indicato sopra deve restare presente, visibile e correttamente gerarchizzato.

### Sottotitolo
**Nido e Scuola dell'Infanzia bilingue a Biassono: un ambiente sicuro, familiare e stimolante dove il tuo bambino impara italiano e inglese giocando.**

### CTA
**Prenota il tuo Open Day**

Link → `#open-day`

## Visual

- foto/video autentico;
- luce naturale;
- bambini in attività reale;
- evitare pose pubblicitarie;
- possibilità di usare una shape/overlay con gradiente Baby;
- se si usa il pattern BBE, mantenerlo secondario.

## Varianti copy approvate da conservare per eventuali A/B test

Headline:
1. Il bilinguismo comincia con un abbraccio.
2. Dove ogni bambino cresce sentendosi a casa, in due lingue.
3. La prima scuola dovrebbe sembrare famiglia. La nostra lo è.
4. Cura, gioco e due lingue: il primo passo del suo futuro.
5. Non è solo un nido. È dove inizia la sicurezza di tutta la vita.

Sottotitoli:
1. Nido e Scuola dell'Infanzia bilingue a Biassono: un ambiente sicuro, familiare e stimolante dove il tuo bambino impara italiano e inglese giocando.
2. Un metodo educativo che mette il bambino al centro, in un contesto internazionale pensato per la sua crescita serena.
3. Scopri di persona i nostri spazi, il nostro staff e il nostro metodo: prenota il tuo Open Day.
4. Posti limitati per garantire un'accoglienza su misura per ogni famiglia.
5. Dalla prima infanzia, un percorso educativo bilingue che continua fino alla Middle School.

CTA approvate:
1. Prenota il tuo Open Day
2. Scopri le prossime date
3. Vieni a conoscerci
4. Prenota la tua visita
5. Riserva il tuo posto all'Open Day

Per la prima versione usare **“Prenota il tuo Open Day”**.

---

# 9. Trust bar

## Obiettivo

Validare immediatamente la promessa emotiva con elementi concreti.

## Contenuti

Mostrare in forma compatta 3 elementi:

1. **Al fianco delle famiglie della Brianza**
2. **Recensioni Google**
3. **Metodo bilingue**

### Importante — non inventare proof

Nel brief compare anche la formulazione “Metodo bilingue certificato”, ma in un altro punto la certificazione viene indicata come eventuale.

Quindi:
- mostrare **“Metodo bilingue certificato” solo se nel repository o nei dati cliente è presente una certificazione verificabile**;
- in assenza di prova, usare semplicemente **“Metodo bilingue”**;
- non inventare rating Google, numero recensioni, anni di attività o numero di famiglie;
- se i dati reali non sono disponibili, predisporre i componenti senza numeri falsi.

## Mobile

La trust bar può diventare una riga orizzontale scrollabile, con scroll-snap leggero.

Non usare autoplay.

---

# 10. Sezione “Perché BBEducation”

## Titolo

**Perché scegliere BBEducation**

## Obiettivo

Fornire quattro ancore visive immediate.

## 4 card

1. **Bilingue dalla culla**
2. **Una famiglia, non solo una scuola**
3. **Ogni bambino al centro**
4. **Spazi pensati per crescere sereni**

## UI

- 4 card desktop;
- 2×2 tablet se appropriato;
- stack verticale o 1 colonna mobile;
- icone custom coerenti con il brand;
- se non esistono icone ufficiali, usare icone lineari semplici dalla libreria già presente nel repo;
- non aggiungere nuove librerie solo per questa sezione se non necessario;
- evitare icone stock decorative che sembrino infantili.

Usare blu e verde in modo bilanciato:
- non assegnare un colore diverso a ogni card;
- alternare accenti Baby;
- mantenere base chiara.

---

# 11. Sezione “Il metodo educativo”

## Titolo

**Il nostro metodo educativo bilingue**

## Copy principale

**“Non insegniamo l'inglese: lo viviamo. Le maestre madrelingua accompagnano ogni gesto della giornata, dal gioco al pasto.”**

## Obiettivo

Spiegare in modo concreto:
- come il bilinguismo entra nella quotidianità;
- la relazione tra lingua, gioco e routine;
- il ruolo delle figure professionali;
- il contesto di cura.

Non aggiungere claim scientifici o percentuali non presenti nei materiali.

## Layout consigliato

Desktop:
- testo e visual autentico affiancati;
- alternanza rispetto all'hero;
- possibile accento gradiente Baby sul contenitore.

Mobile:
- testo prima;
- immagine dopo;
- CTA immediatamente successiva.

## CTA dopo il metodo

**Prenota il tuo Open Day**

→ `#open-day`

---

# 12. Open Day — sezione principale di conversione

ID obbligatorio:

```html
<section id="open-day">
```

## Titolo

**Prenota il tuo Open Day a Biassono**

## Intro

**Scegli la data che preferisci: ogni incontro accoglie un numero limitato di famiglie per garantire un'accoglienza su misura.**

## Capienza

**Massimo 15 famiglie per data.**

Non mostrare un numero di posti residui se non proviene da una fonte dati reale.

---

# 13. Date Open Day Baby

Utilizzare le date indicate nel brief.

> Il documento non esplicita l'anno direttamente nella tabella delle date.  
> Non inventare l'anno nel codice, nelle email o nello structured data: gestirlo tramite configurazione/dato confermato.

## Open Day del sabato

| Data visualizzata | Orario | Capienza |
|---|---:|---:|
| Sabato 3 ottobre | 15:00 | max 15 famiglie |
| Sabato 17 ottobre | 10:00 | max 15 famiglie |
| Sabato 14 novembre | 10:00 | max 15 famiglie |
| Sabato 28 novembre | 15:00 | max 15 famiglie |

Micro-CTA:
**Prenota questa data →**

## Open School infrasettimanali

Formato più breve e informativo per chi non può partecipare il sabato:

- **Venerdì 30 ottobre · ore 10:30**
- **Venerdì 20 novembre · ore 10:30**

Etichetta UI:
**Open School**

Spiegazione:
**Visita più breve, formato informativo, per chi non può il sabato.**

---

# 14. Componente Date Selector

Il selettore deve essere un vero controllo interattivo accessibile.

## Desktop

Card/pill cliccabili con:

- giorno;
- data;
- ora;
- eventuale label Open School;
- capienza massima o disponibilità reale;
- CTA.

## Mobile

- card impilate verticalmente;
- prima data **disponibile** pre-evidenziata solo se la disponibilità reale è nota;
- se non è disponibile una fonte dati, non fingere che una data sia selezionata “perché ha posti”.

## Stato selezionato

Usare:
- bordo/outline Baby;
- leggero fondo Baby;
- contrasto WCAG sufficiente;
- check o stato `aria-checked=true`.

Il documento strategico cita un “bordo oro”, ma questa indicazione è superata dalla VI.  
Per la Landing Baby utilizzare **blu/verde/gradiente Baby**, non oro.

## Stati consentiti

```ts
type OpenDayStatus =
  | "available"
  | "last-seats"
  | "full";
```

### `available`
CTA attiva.

### `last-seats`
Badge **“Ultimi posti”** SOLO se il dato è reale.

### `full`
- card disabilitata per la prenotazione;
- badge **“Al completo”**;
- CTA alternativa **“Avvisami per la prossima data”**.

**Mai simulare scarsità.**

---

# 15. Flusso selezione data → form

Quando l'utente seleziona una data:

1. aggiornare lo stato del Date Selector;
2. valorizzare automaticamente il campo data nel form;
3. rendere chiaro quale data è stata scelta;
4. portare il focus o lo scroll al form in modo accessibile;
5. mantenere la selezione se l'utente corregge altri campi;
6. non perdere lo stato in caso di errore di validazione.

Se il form è immediatamente sotto le card, evitare scroll aggressivi o salti inutili.

---

# 16. Form prenotazione Open Day

Il form primario deve essere breve.

## Campi

Obbligatori:

1. Nome
2. Telefono
3. Email
4. Età del bambino

Campo tecnico/hidden:
- data selezionata
- tipo evento: Open Day / Open School

Aggiungere solo gli elementi privacy/legal già previsti dal progetto o forniti dal cliente.  
Non inventare testo legale.

## UX

- label sempre visibili;
- non usare placeholder come unica label;
- `autocomplete` corretto;
- `inputmode="tel"` per telefono;
- messaggi di errore inline;
- mantenere i valori dopo un errore;
- CTA disabilitata solo quando necessario;
- stato loading durante submit;
- prevenire double submit.

## CTA submit

**Prenota questa data**

oppure, se il contesto della data è già molto evidente:

**Prenota il tuo Open Day**

## Success state

Il brief richiede:
- conferma immediata via email;
- promemoria SMS 24h prima.

Queste azioni richiedono integrazione backend/CRM/provider.

### Regola

Se endpoint/provider non sono presenti:
- non simulare l'invio reale;
- predisporre un adapter/service configurabile;
- usare variabili ambiente;
- lasciare TODO esplicita per integrazione;
- non mostrare “Email inviata” o “SMS programmato” se non è vero.

---

# 17. “Cosa troverete”

## Titolo

**Cosa troverete durante l'Open Day**

## Copy introduttivo

**Accoglienza, presentazione del metodo, visita degli spazi e un laboratorio dedicato ai più piccoli.**

## Agenda in 4 step

1. **Accoglienza**
2. **Presentazione del metodo**
3. **Visita degli spazi**
4. **Laboratorio dedicato ai più piccoli**

Visualizzazione:
- timeline/step orizzontale desktop;
- stack verticale mobile;
- icone semplici;
- micro-copy breve.

Non aggiungere durate o dettagli operativi non presenti nel brief.

---

# 18. FAQ

Accordion accessibile.

## Requisiti

- 6–8 domande complessive;
- solo una aperta alla volta su mobile;
- `button` reale per il trigger;
- `aria-expanded`;
- `aria-controls`;
- navigazione da tastiera;
- animazione breve e disattivabile con `prefers-reduced-motion`.

## Domande da includere

### 1
**Il bilinguismo precoce rallenta lo sviluppo del linguaggio?**

Non inventare una risposta clinica/scientifica.  
Inserire la risposta ufficiale del cliente/CMS quando disponibile.

### 2
**Come funziona l'ambientamento?**

Risposta da dati cliente. Non inventare durata o modalità.

### 3
**Quali sono le rette e cosa comprendono?**

Non mostrare prezzi o servizi se non forniti.

### 4
**Come si svolge l'Open Day?**

È possibile rispondere con i contenuti verificati:
- accoglienza;
- presentazione del metodo;
- visita degli spazi;
- laboratorio dedicato ai più piccoli.

### 5
**Quante famiglie possono partecipare a ogni Open Day?**

Risposta:
**Ogni data prevede un massimo di 15 famiglie.**

### 6
**Non posso partecipare il sabato: ci sono alternative?**

Risposta:
sono previsti Open School infrasettimanali:
- venerdì 30 ottobre, 10:30;
- venerdì 20 novembre, 10:30;
- visita più breve e informativa.

### FAQ opzionale 7
**A quale fascia d'età è dedicato il percorso Baby?**

Risposta coerente con il target:
**Nido e Scuola dell'Infanzia, percorso 0–6 anni.**

Le FAQ devono poter essere alimentate da CMS/config senza modificare il componente.

---

# 19. Form richiesta informazioni

Questa è la conversione secondaria.

## Titolo / copy

**Non puoi venire alle date proposte? Lasciaci i tuoi dati, ti ricontattiamo noi.**

## Campi

1. Nome
2. Telefono
3. Email
4. Età del bambino
5. Messaggio — facoltativo

CTA:

**Richiedi informazioni**

Applicare le stesse regole UX, privacy, validazione e integrazione del form Open Day.

Non trasformarlo nel form principale: deve essere chiaramente secondario rispetto alla prenotazione.

---

# 20. Footer

## Copy finale

**Vieni a scoprire il Nido e la Scuola dell'Infanzia BBEducation di Biassono.**

## Contenuti previsti

- indirizzo sede Biassono;
- mappa;
- telefono;
- email;
- social;
- privacy;
- eventuali note legali;
- CTA **“Prenota il tuo Open Day”**.

### Dati mancanti

L'indirizzo completo e i contatti non sono specificati nei materiali usati per questa specifica.

Quindi:
- recuperarli dal repository/config/CMS se già presenti;
- altrimenti usare token/TODO;
- **non inventare indirizzi, numeri di telefono o email**.

La mappa deve essere caricata in modo performance-friendly e, se possibile, dopo interazione o lazy load.

---

# 21. CTA strategy

CTA primaria standard:

**Prenota il tuo Open Day**

Posizioni:

- header;
- hero;
- dopo la sezione metodo;
- sezione date;
- footer.

Su mobile:
- sticky bar inferiore dopo circa **400 px di scroll**;
- singola CTA;
- non coprire contenuti o controlli;
- aggiungere padding-bottom al layout per compensare l'altezza della barra.

Tutte le CTA principali portano a `#open-day`.

Nessuna sezione importante deve lasciare l'utente senza un percorso evidente verso la prenotazione.

---

# 22. Mobile-first

Breakpoint: rispettare quelli già definiti nel repository.  
Non introdurre un sistema breakpoint parallelo se esiste già.

## Requisiti mobile specifici

- hero: immagine statica ottimizzata al posto del video;
- headline/H1 e CTA visibili senza scroll, per quanto ragionevolmente possibile sui viewport standard;
- trust bar scrollabile orizzontalmente;
- date card in stack verticale;
- form a un campo per riga;
- tastiera telefonica per il telefono;
- autocomplete;
- sticky CTA dopo il primo tratto di scroll;
- FAQ con una sola domanda aperta;
- tap target >= 44×44 px;
- nessun hover necessario per comprendere un contenuto;
- nessun elemento orizzontale che generi overflow pagina.

---

# 23. Accessibilità

Target minimo: **WCAG 2.2 AA** per quanto applicabile.

Obbligatorio:

- HTML semantico;
- landmark `header`, `main`, `section`, `footer`;
- heading hierarchy coerente;
- focus visibile;
- contrasto sufficiente;
- label form esplicite;
- errori associati ai campi;
- controlli data accessibili da tastiera;
- accordion accessibile;
- `alt` utili per immagini informative;
- `alt=""` per decorative;
- rispetto `prefers-reduced-motion`;
- niente testo importante incorporato nelle immagini;
- niente interazioni solo-hover;
- stato selezionato non comunicato solo dal colore.

Verificare in particolare il contrasto del testo sopra il gradiente Baby.

---

# 24. Motion

Consentito:

- fade-in molto leggero;
- reveal semplice;
- micro-sollevamento card;
- transizione bordo/fondo selezione data.

Non consentito:

- parallax invasivo;
- animazioni continue;
- bounce;
- elementi che si muovono senza interazione;
- effetti che rallentano la conversione.

Durate brevi e sobrie.

Con `prefers-reduced-motion: reduce`, rimuovere tutte le animazioni non essenziali.

---

# 25. Performance

Obiettivo indicato nel brief:
**tempo di caricamento / Core Web Vitals con LCP sotto 2,5 s come riferimento progettuale.**

Azioni:

- niente asset stock remoti;
- immagini AVIF/WebP se pipeline disponibile;
- `srcset` e `sizes`;
- lazy loading sotto la fold;
- preload solo dell'asset LCP realmente necessario;
- font loading ottimizzato;
- video desktop compresso;
- niente video hero su mobile;
- evitare JS non necessario;
- evitare nuove dipendenze pesanti;
- lazy load della mappa;
- evitare slider library per la trust bar: preferire CSS overflow;
- ridurre layout shift riservando dimensioni media.

---

# 26. SEO

## `<title>`

**Nido e Scuola dell'Infanzia Bilingue a Biassono | Open Day BBEducation**

## Meta description

**Scopri il Nido e la Scuola dell'Infanzia bilingue BBEducation a Biassono. Prenota il tuo Open Day: metodo educativo, spazi e staff qualificato.**

## H1

**Nido e Scuola dell'Infanzia Bilingue a Biassono**

## H2 suggeriti

- Il nostro metodo educativo bilingue
- Perché scegliere BBEducation
- Prenota il tuo Open Day
- Cosa troverete durante l'Open Day
- Domande frequenti

## Keyword principali

- nido bilingue Brianza
- scuola infanzia bilingue Biassono
- open day nido Biassono

## Keyword secondarie

- scuola bilingue 0-6 anni
- nido inglese Brianza
- metodo educativo bilingue bambini

Non fare keyword stuffing.

---

# 27. Structured data

Predisporre, se compatibile con lo stack:

- `EducationalOrganization`
- `Event` per ogni data Open Day
- `FAQPage`
- `LocalBusiness`
- `Review` / `AggregateRating` **solo con dati reali verificati**

## Importante

Per `Event` servono:
- anno;
- indirizzo;
- disponibilità;
- eventuale URL specifica.

Se questi dati non sono confermati:
- non generare JSON-LD falso;
- strutturare il codice affinché venga alimentato da config/CMS;
- attivare lo schema solo quando i campi obbligatori sono reali.

---

# 28. Tracking

Predisporre una funzione/adapter unico per analytics.

Eventi richiesti:

```txt
view_open_day_section
select_date
lead_openday
lead_info
faq_open
```

## Trigger

### `view_open_day_section`
Una volta per sessione/page view quando la sezione Open Day entra realmente in viewport.

### `select_date`
Quando viene selezionata una data:
- `event_type`
- `date_label`
- `time`
- eventuale `status`

### `lead_openday`
Solo dopo submit effettivamente riuscito.

### `lead_info`
Solo dopo submit effettivamente riuscito.

### `faq_open`
Quando una FAQ viene aperta:
- `faq_id`
- `faq_question`

Non inviare PII come nome, email o telefono a GA4/Meta Pixel.

L'implementazione deve funzionare anche se GA4/Meta non sono ancora configurati:
- adapter no-op;
- nessun errore console.

---

# 29. Remarketing readiness

La pagina deve rendere tracciabili le micro-conversioni senza cambiare la UX.

Segnali utili:
- visita sezione Open Day;
- selezione data;
- apertura FAQ;
- submit form.

Il brief cita anche un lead magnet:
**“Come scegliere la scuola bilingue giusta per il tuo bambino”**.

Per questa prima implementazione:
- non aggiungerlo automaticamente se il file non esiste;
- predisporre eventualmente uno slot/componente disattivato;
- non creare un PDF fittizio.

---

# 30. Modello dati consigliato

Adattare alla tecnologia già usata nel repository.

Esempio concettuale:

```ts
type OpenDayType = "open-day" | "open-school";
type OpenDayStatus = "available" | "last-seats" | "full";

type OpenDayEvent = {
  id: string;
  label: string;          // es. "Sabato 3 ottobre"
  time: string;           // "15:00"
  type: OpenDayType;
  capacity: 15;
  status?: OpenDayStatus;
  spotsRemaining?: number | null;
  year?: number | null;   // da confermare, non inventare
  startDateISO?: string | null;
};

type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  childAge: string;
  selectedEventId?: string;
  message?: string;
};
```

Date, contatti e proof devono stare in config/data e non essere sparsi hardcoded in più componenti.

---

# 31. Componentizzazione

Se lo stack lo consente, separare almeno:

```txt
BrandLogo
StickyHeader
HeroBaby
TrustBar
ValueCard
WhyBBEducation
EducationMethod
OpenDaySection
OpenDayDateSelector
OpenDayDateCard
OpenDayBookingForm
OpenDayAgenda
FaqAccordion
InfoForm
StickyMobileCTA
SiteFooter
AnalyticsAdapter
```

Preparare componenti condivisibili con la futura Landing Primary & Middle, ma senza introdurre logiche Primary/Middle nella UI Baby.

---

# 32. CSS / Design tokens

Non usare valori arbitrari ripetuti.

Creare o integrare token per:

- colori;
- gradiente;
- font;
- border radius;
- shadow;
- spacing;
- container width;
- transition;
- focus ring.

## Valori di layout

Se il repository possiede già un design system, utilizzare quello.

Se non esiste, usare un sistema coerente e sobrio senza spacciarlo per parte della VI ufficiale.

Default tecnici consigliati, modificabili in base al progetto:

```css
:root {
  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2rem;
  --space-5: 3rem;
  --space-6: 4rem;

  --radius-sm: 0.75rem;
  --radius-md: 1.25rem;
  --radius-pill: 999px;

  --content-max: 1200px;
}
```

Questi valori sono **default di implementazione**, non dati ricavati dalla VI.

---

# 33. Bottoni

CTA primaria:

- molto leggibile;
- contrasto alto;
- pill/rounded;
- coerente con gli esempi Open Day;
- stato hover/focus/active/disabled;
- no gradient text;
- no microcopy aggressivo.

Possibile trattamento:

### Su fondo bianco
- fill blu o gradiente Baby;
- testo nero o bianco solo dopo verifica contrasto;
- focus ring ben visibile.

### Su gradiente
- bottone bianco;
- testo nero;
- bordo discreto;
- ombra molto leggera se necessaria.

Non usare rosa/arancione per una CTA Baby.

---

# 34. Regole copy

Tono:
- caldo;
- rassicurante;
- semplice;
- umano;
- competente;
- mai paternalistico;
- mai freddo o burocratico.

Evitare:
- “la scuola migliore”;
- “risultati garantiti”;
- claim assoluti;
- urgenza falsa;
- countdown;
- “ultimissimi posti” senza dati;
- pressione sulla retta;
- formule da vendita aggressiva.

Usare “posti limitati” solo nel senso reale della capienza massima di 15 famiglie.

---

# 35. Dati da NON inventare

Non creare autonomamente:

- rating Google;
- numero recensioni;
- numero famiglie seguite;
- anni di esperienza;
- certificazioni;
- rette;
- servizi non documentati;
- indirizzo;
- telefono;
- email;
- numero di posti residui;
- anno degli Open Day;
- testimonianze;
- nomi docenti;
- percentuali di apprendimento;
- claim scientifici sul bilinguismo.

Se un dato manca:
- cercarlo solo nelle fonti locali/repository/config già disponibili;
- se non esiste, inserire TODO chiaramente identificata.

---

# 36. Stato vuoto / errori

Prevedere:

## Nessuna data disponibile
Messaggio neutro:
**Al momento non ci sono nuove date disponibili. Lasciaci i tuoi dati e ti avviseremo appena apriremo il prossimo Open Day.**

CTA:
**Richiedi informazioni** o **Avvisami per la prossima data**

## Errore caricamento date
Non fingere “nessun posto”.

Mostrare:
**Non riusciamo a caricare le date in questo momento. Puoi riprovare o lasciarci i tuoi dati.**

## Errore form
- non cancellare i dati;
- descrivere il problema;
- permettere retry.

---

# 37. Repository e workflow

Prima di modificare il progetto:

1. leggere `README`, package manager e configurazioni;
2. identificare framework e convenzioni;
3. verificare se esistono componenti, token, font e asset BBEducation;
4. non sostituire lo stack esistente;
5. non modificare file non pertinenti;
6. non introdurre una UI library nuova se non necessaria;
7. non introdurre dipendenze pesanti solo per animazioni, accordion o carousel;
8. riutilizzare infrastruttura analytics/form già esistente quando presente.

A fine implementazione:

- eseguire build;
- eseguire lint;
- eseguire test esistenti;
- correggere warning/errori introdotti;
- verificare console browser;
- verificare layout responsive;
- verificare keyboard navigation.

---

# 38. Se il repository è vuoto

Se non esiste ancora un progetto:

- non scegliere arbitrariamente un framework se la richiesta corrente non lo specifica;
- predisporre prima una struttura di progetto compatibile con la decisione tecnica concordata;
- separare dati, componenti, stili e integrazioni;
- evitare una singola pagina monolitica con tutto hardcoded.

Se è già presente uno stack, **adattarsi allo stack esistente**.

---

# 39. Responsive QA minimo

Verificare almeno:

- 320 px
- 375 px
- 390 px
- 768 px
- 1024 px
- 1280 px
- 1440 px

Controllare:

- nessun overflow orizzontale;
- sticky CTA non sovrapposta ai form;
- card data leggibili;
- navbar gestibile;
- hero non troppo alta;
- testo non troppo largo;
- immagini non deformate;
- mappa/footer non spezzati;
- focus visibile;
- accordion funzionante.

---

# 40. Browser QA

Testare almeno i browser supportati dal progetto.

In assenza di policy:
- Chrome recente;
- Safari recente;
- Firefox recente;
- Edge recente;
- Safari iOS;
- Chrome Android.

---

# 41. Acceptance criteria — funzionali

La task è completata solo se:

- [ ] esiste una sola Landing Baby completa;
- [ ] non è stata implementata la Landing Primary & Middle;
- [ ] header sticky funzionante;
- [ ] CTA header/hero/metodo/footer portano a Open Day;
- [ ] date Baby visualizzate correttamente;
- [ ] Open School differenziate dalle date del sabato;
- [ ] selezione data funzionante;
- [ ] data selezionata passa al form;
- [ ] form mantiene lo stato dopo errori;
- [ ] nessuna scarsità finta;
- [ ] FAQ accordion accessibile;
- [ ] form informazioni separato dal form prenotazione;
- [ ] sticky mobile CTA dopo lo scroll;
- [ ] tracking adapter non genera errori se analytics è assente;
- [ ] nessuna PII inviata agli analytics;
- [ ] footer predisposto per dati reali;
- [ ] nessun link/asset placeholder porta a 404 in produzione;
- [ ] build e lint passano.

---

# 42. Acceptance criteria — Visual Identity

- [ ] Nunito è il font principale;
- [ ] Baby usa `#70DDA0` e `#80A9D5`;
- [ ] gradiente Baby blu → verde;
- [ ] rosa e arancione non sono usati come colori UI Baby;
- [ ] logo ufficiale non è ricostruito;
- [ ] pattern BBE solo da asset ufficiale;
- [ ] prevalenza di bianco e layout pulito;
- [ ] CTA rounded/pill coerenti;
- [ ] fotografia autentica o placeholder neutro, mai stock generica;
- [ ] nessuna serif;
- [ ] nessun petrolio/oro della vecchia UI suggestion;
- [ ] niente stile cartoon/asilo stereotipato.

---

# 43. Acceptance criteria — CRO

- [ ] KPI primario evidente: prenotazione Open Day;
- [ ] CTA raggiungibile facilmente;
- [ ] hero comunica sicurezza e cura;
- [ ] trust bar non inventa proof;
- [ ] value proposition scansionabile;
- [ ] metodo spiega il “come”;
- [ ] selettore date è il cuore della conversione;
- [ ] massimo 15 famiglie comunicato correttamente;
- [ ] FAQ prima del form informazioni;
- [ ] form Open Day massimo 4 campi utente principali;
- [ ] form info breve;
- [ ] nessuna urgenza artificiale;
- [ ] mobile conversion flow semplice.

---

# 44. Acceptance criteria — SEO / Performance / A11y

- [ ] title corretto;
- [ ] meta description corretta;
- [ ] H1 corretto;
- [ ] gerarchia heading valida;
- [ ] schema markup non contiene dati inventati;
- [ ] immagini responsive;
- [ ] hero mobile senza video pesante;
- [ ] mappa lazy;
- [ ] nessun CLS evidente;
- [ ] focus keyboard visibile;
- [ ] contrasto verificato;
- [ ] form con label;
- [ ] accordion con ARIA;
- [ ] `prefers-reduced-motion` rispettato;
- [ ] target LCP < 2.5 s considerato nella progettazione.

---

# 45. Ordine di implementazione consigliato

1. Audit repository
2. Token Visual Identity
3. Asset logo/font
4. Layout shell + container
5. Header
6. Hero
7. Trust bar
8. Perché BBEducation
9. Metodo
10. Data model Open Day
11. Date Selector
12. Booking Form
13. Agenda “Cosa troverete”
14. FAQ
15. Info Form
16. Footer
17. Sticky mobile CTA
18. SEO / structured data
19. Tracking
20. Performance optimization
21. Accessibility QA
22. Responsive QA
23. Build / lint / test

---

# 46. Nota per la futura Landing 2

Il progetto complessivo prevede due landing page:

1. **Baby — Nido & Scuola dell'Infanzia**
2. **Primary & Middle School**

In questa task sviluppare solo la prima.

Preparare:
- token condivisi;
- shell;
- header;
- form primitives;
- Date Selector;
- FAQ;
- analytics;
- footer.

Non:
- inserire copy Primary/Middle nella pagina Baby;
- usare rosa/arancione come accenti Baby;
- aggiungere Campus Seveso all'hero Baby;
- duplicare anticipatamente una seconda pagina incompleta.

---

# 47. Risultato atteso

Il risultato deve comunicare subito:

> **BBEducation Baby è un ambiente bilingue, familiare, sicuro e contemporaneo in cui il bambino è accompagnato nella crescita con cura e continuità.**

La conversione deve essere semplice:

> **vedo → mi fido → capisco il metodo → scelgo una data → prenoto**

La Visual Identity deve essere immediatamente riconoscibile:

> **Nunito + bianco + blu Infanzia + verde Nido + gradiente Baby + fotografia autentica + logo BBEducation.**

---

# 48. Fonti progettuali

Questa specifica è stata costruita a partire da:

- `VI.pdf` — utilizzi logo, palette, font Nunito, colori dei quattro percorsi, gradienti, pattern ed esempi campagna Open Day.
- `BBEducation_Landing_OpenDay.pdf` — strategia UX/CRO, struttura, copy, date Open Day, target, SEO, mobile, tracking e performance.

In caso di futura modifica ai documenti sorgente, aggiornare questa specifica prima di cambiare la UI.
