# BBEducation — Landing Page 2: Primary & Middle School

## Scopo del documento

Questo file definisce le specifiche di contenuto, UX/CRO, struttura, comportamento responsive e identità visiva della seconda landing page BBEducation:

**Primary & Middle School**

La landing riguarda:
- **Primary School**
- **Middle School**
- sede attuale degli Open Day: **Cesano Maderno**
- trasferimento nel **nuovo Campus di Seveso nel 2027**
- apertura della **Middle School a settembre 2027**

La pagina deve comunicare soprattutto:
- innovazione;
- continuità educativa;
- preparazione al futuro;
- eccellenza didattica;
- bilinguismo;
- sviluppo delle competenze;
- solidità del progetto BBEducation;
- valore del nuovo Campus di Seveso.

Il nuovo Campus e l'apertura della Middle School sono i principali elementi di attrazione.

---

# 0. REGOLA CRITICA — NON SOVRASCRIVERE LA LANDING ESISTENTE

Questa è la **Landing Page 2** e deve essere aggiunta come pagina indipendente.

**Per nessun motivo deve sovrascrivere, sostituire, eliminare o trasformare la landing già esistente.**

La landing originale deve rimanere:
- presente;
- funzionante;
- visivamente invariata;
- con gli stessi contenuti;
- con le stesse immagini;
- con gli stessi colori;
- con la stessa route;
- con gli stessi comportamenti responsive.

La nuova pagina deve avere una propria route, indicativamente:

`/primary-middle-school`

Prima di implementare verificare comunque la naming convention già adottata nel repository.

Se vengono modificati componenti condivisi:
1. verificare dove sono utilizzati;
2. non introdurre regressioni sulla landing originale;
3. usare `props`, `variant`, theme o CSS variables quando possibile;
4. se la condivisione comporta un rischio per la landing originale, creare una variante dedicata alla nuova pagina.

Priorità:
1. preservare integralmente la landing originale;
2. mantenere coerenza di brand;
3. evitare duplicazioni inutili.

---

# 1. OBIETTIVI DI CONVERSIONE

## KPI primario

**Prenotazione a un Open Day**

Primary e Middle School condividono le stesse date di Open Day.

Capienza:
- massimo **20 famiglie per data**.

## KPI secondario

**Richiesta informazioni**

Per utenti non ancora pronti a prenotare.

## Micro-conversione aggiuntiva

Download del lead magnet dedicato alla Middle School:

**“Il Piano Formativo della Middle School 2027”**

---

# 2. TARGET E MESSAGGI CHIAVE

## Target generale

Genitori indicativamente tra i 28 e i 50 anni, con reddito medio / medio-alto, residenti in Brianza e zone limitrofe.

## Target Primary

Famiglie che cercano:
- percorso bilingue;
- qualità didattica;
- continuità;
- innovazione;
- ambiente educativo strutturato;
- preparazione internazionale.

## Target Middle School — primario

Famiglie già iscritte alla Primary BBEducation.

Per questo pubblico la comunicazione deve puntare fortemente su:
- continuità;
- stesso metodo;
- stesso staff;
- assenza di una rottura nel percorso;
- naturale evoluzione dalla Primary alla Middle School.

L'accesso alla Middle School è condizionato a un livello linguistico adeguato.

## Target Middle School — secondario

Famiglie esterne provenienti anche da:
- BDC Meda;
- Junior College Seregno;
- scuole primarie con inglese rafforzato.

Per gli studenti esterni può essere previsto un test d'ingresso.

## Obiezione principale

> “È una scuola nuova, senza storico.”

La pagina deve rispondere a questa obiezione con:
- continuità con la Primary BBEducation già consolidata;
- stesso staff;
- stesso metodo;
- esperienza bilingue già esistente;
- competenze del corpo docente;
- elementi concreti e verificabili;
- nuovo Campus presentato come evoluzione, non come sperimentazione.

Non far mai percepire le prime famiglie della Middle School come “cavie” di un progetto sperimentale.

---

# 3. IDENTITÀ VISIVA

Le specifiche visive devono seguire il documento **VI** BBEducation.

## Font

Font ufficiale:

**Nunito**

Utilizzare Nunito in tutta la landing.

Gerarchia:
- titoli: Nunito Bold / peso coerente con il design system esistente;
- testo normale: Nunito Regular;
- eventuali label, CTA e micro-copy: mantenere la stessa famiglia tipografica.

Non introdurre altri font.

---

# 4. COLORI PRIMARY & MIDDLE SCHOOL

Questa landing deve utilizzare specificamente i colori assegnati dal Visual Identity alle due scuole.

## Primary School

**#FF788D**

RGB:
- R: 255
- G: 120
- B: 141

Uso suggerito nel sistema:
- accenti Primary;
- badge;
- label;
- elementi selezionati legati alla Primary;
- bordi;
- micro-elementi grafici;
- parti del gradiente.

## Middle School

**#FFAC59**

RGB:
- R: 255
- G: 172
- B: 89

Uso suggerito nel sistema:
- accenti Middle;
- badge;
- label;
- elementi selezionati legati alla Middle;
- bordi;
- micro-elementi grafici;
- parti del gradiente.

## Colori neutri ufficiali

Bianco:

`#FFFFFF`

Nero:

`#000000`

Utilizzarli per garantire contrasto, leggibilità e pulizia.

---

# 5. GRADIENTE PRIMARY / MIDDLE

Per questa landing utilizzare il gradiente dedicato:

**PRIMARY → MIDDLE**

Colori:
- Primary: `#FF788D`
- Middle: `#FFAC59`

Riferimento CSS:

```css
background: linear-gradient(
  90deg,
  #FF788D 0%,
  #FFAC59 100%
);
```

La direzione può adattarsi al componente e al breakpoint quando necessario, ma deve rimanere riconoscibile come gradiente **rosa Primary → arancio Middle**.

Il gradiente deve essere utilizzato come elemento di identità e non come decorazione casuale.

Possibili applicazioni:
- hero;
- separatori;
- bordi;
- CTA speciali;
- background di blocchi evidenziati;
- elementi della timeline;
- badge Primary/Middle;
- piccoli glow o dettagli visivi;
- elementi di raccordo tra sezioni.

Evitare di saturare tutta la pagina con il gradiente.

La pagina deve mantenere sufficiente spazio bianco e una gerarchia leggibile.

---

# 6. LOGO E LINGUAGGIO GRAFICO

Usare le versioni del logo BBEducation previste dalla Visual Identity in base al contrasto del fondo:

- logo a colori su fondo bianco/chiaro;
- logo nero quando richiesto dal layout;
- logo bianco su fondo scuro o gradiente;
- versione compatta BBE quando necessaria in spazi ridotti.

Non ricostruire manualmente il logo.

Se gli asset originali sono già presenti nel repository, riutilizzarli.

La Visual Identity mostra anche:
- utilizzo del gradiente;
- pattern grafico basato sul segno BBE;
- layout puliti;
- forte uso di bianco;
- immagini autentiche;
- elementi grafici morbidi e contemporanei.

Se il pattern ufficiale è già disponibile negli asset, può essere utilizzato con moderazione come texture o elemento di background.

Non creare una versione arbitraria del pattern se non esiste l'asset ufficiale.

---

# 7. STRUTTURA COMPLETA DELLA LANDING

Ordine delle sezioni:

1. Header sticky
2. Hero
3. Trust bar
4. Il nuovo Campus di Seveso
5. Percorso educativo continuo
6. La Middle School: la novità
7. Perché BBEducation
8. Open Day — selettore date
9. Cosa troverete
10. FAQ
11. Form richiesta informazioni
12. Footer

La progressione UX deve essere:

**attenzione → fiducia → desiderio → azione → rassicurazione finale**

---

# 8. HEADER STICKY

## Obiettivo

Orientamento immediato e accesso costante alla prenotazione.

## Contenuto

- logo BBEducation;
- dicitura: **Primary & Middle School**;
- menu minimale;
- CTA sempre visibile.

## CTA

**Prenota Open Day**

## Comportamento

- sticky;
- coerente con il comportamento dell'header della prima landing;
- non deve occupare troppo spazio verticale;
- CTA sempre facilmente raggiungibile;
- su mobile utilizzare la soluzione già prevista dal design system.

---

# 9. HERO

## Obiettivo

Comunicare la grande novità:

**Middle School + nuovo Campus di Seveso**

Il cambiamento deve essere presentato come:
- evoluzione;
- opportunità;
- crescita;
- investimento sul futuro.

Non come:
- rischio;
- instabilità;
- problema logistico;
- semplice trasferimento.

## Contenuti visuali

Utilizzare:
- render/foto del nuovo Campus di Seveso;
- foto autentiche degli studenti Primary;
- eventuale render/foto del cantiere;
- materiale reale BBEducation.

Evitare immagini stock.

È importante non mostrare esclusivamente contenuti “futuri”: il nuovo Campus deve essere ancorato alla credibilità della scuola già esistente attraverso fotografie reali degli studenti e della vita scolastica.

## Headline disponibili dal documento

1. **Il futuro di tuo figlio ha un nuovo indirizzo: Seveso.**
2. **Dalla Primary alla Middle School: un percorso che non si interrompe mai.**
3. **Il nuovo Campus che prepara i ragazzi al mondo che verrà.**
4. **Crescere non è solo imparare. È diventare cittadini del mondo.**
5. **La novità che aspettavi: apre la Middle School BBEducation.**

Non inventare nuove headline senza indicazione.

## Sottotitoli disponibili

1. **Dal 2027 un nuovo Campus a Seveso accoglie Primary e la nuova Middle School: continuità educativa, bilinguismo e innovazione in un unico percorso fino ai 14 anni.**

2. **Un metodo fondato su inquiry-based learning e gameful learning, per formare ragazzi curiosi, autonomi e pronti al futuro.**

3. **Vieni a scoprire il nuovo Campus e il progetto Middle School: Primary e Middle si incontrano nello stesso Open Day.**

4. **Posti limitati: prenota ora il tuo Open Day a Cesano Maderno.**

5. **Un'evoluzione pensata per accompagnare tuo figlio dalla Primary fino all'ingresso in Middle School.**

## CTA disponibili

1. **Prenota il tuo Open Day**
2. **Scopri il nuovo Campus**
3. **Riserva il tuo posto**
4. **Vieni a scoprire la Middle School**
5. **Prenota ora: posti limitati**

## CTA principale della Hero

La CTA deve portare direttamente alla sezione Open Day / selettore date.

Possibile anchor:

`#open-day`

---

# 10. TRUST BAR

## Obiettivo

Rassicurare immediatamente sulla solidità del progetto nonostante la novità della Middle School.

## Messaggi

Utilizzare elementi come:

**“Lo stesso metodo e lo stesso staff della Primary, ora fino ai 14 anni”**

Affiancare, se disponibili nel progetto/dati reali:
- recensioni;
- anni di esperienza bilingue;
- numero di famiglie seguite;
- competenze dello staff;
- altri numeri concreti.

Non inventare numeri.

## UI

Utilizzare:
- icone;
- numeri;
- badge;
- elementi sintetici e facilmente scansionabili.

Su mobile:
- carosello orizzontale / contenitore scrollabile se necessario;
- evitare compressione eccessiva.

---

# 11. SEZIONE — IL NUOVO CAMPUS DI SEVESO

## Obiettivo

Rendere il nuovo Campus uno dei principali elementi di attrazione della landing.

Non presentarlo come un semplice cambio di sede.

## Copy principale

**“Un nuovo Campus, pensato da zero per accompagnare la crescita dei vostri figli fino ai 14 anni.”**

## Contenuti

Quando disponibili:
- render 3D;
- video 3D;
- planimetrie;
- aule;
- laboratori;
- palestra;
- aree esterne;
- mappa del Campus.

## UI

Questa sezione deve avere maggiore forza visiva rispetto alle normali sezioni a card.

Preferire:
- blocco full-width;
- visual immersivo;
- galleria;
- video;
- composizione editoriale di grandi dimensioni.

Deve essere percepita come un momento importante della pagina.

## CTA dopo la sezione

Inserire nuovamente una CTA verso Open Day.

---

# 12. SEZIONE — PERCORSO EDUCATIVO CONTINUO

## Obiettivo

Rassicurare sulla continuità Primary → Middle ed eliminare l'ansia del “cambio scuola”.

## Copy

**“Chi cresce con noi, continua con noi: dalla Primary alla Middle School, senza interruzioni.”**

## Visual

Creare una timeline del percorso:

**Nido → Infanzia → Primary → Middle**

Età complessiva comunicata:

**0–14 anni**

## Comportamento

Desktop:
- timeline orizzontale.

Mobile:
- timeline verticale.

## Animazione

La timeline può animarsi progressivamente allo scroll, step-by-step.

Animazione:
- leggera;
- chiara;
- funzionale al concetto di continuità;
- non invasiva.

Utilizzare i colori delle diverse scuole solo quando coerenti con gli asset e il design system; per questa landing dare priorità visiva a:
- Primary `#FF788D`
- Middle `#FFAC59`

---

# 13. SEZIONE — LA MIDDLE SCHOOL: LA NOVITÀ

## Obiettivo

Presentare la Middle School come naturale evoluzione del percorso BBEducation.

Non deve apparire come un esperimento.

## Copy principale

**“Da settembre 2027, il percorso bilingue continua con la Middle School: inquiry-based learning e gameful learning per ragazzi pronti al futuro.”**

## Contenuti da trattare

- metodo;
- materie;
- lingue;
- competenze del XXI secolo;
- inquiry-based learning;
- gameful learning;
- continuità con la Primary;
- preparazione al futuro.

## Visual

Utilizzare:
- fotografie;
- illustrazioni coerenti;
- icone custom;
- elementi dedicati alle materie/competenze.

Non utilizzare iconografia stock generica.

## CTA

Inserire una CTA verso:
- Open Day;
- oppure lead magnet “Il Piano Formativo della Middle School 2027”.

---

# 14. SEZIONE — PERCHÉ BBEDUCATION

## Obiettivo

Sintetizzare i principali differenzianti.

## Copy introduttivo

**“Avanguardia didattica, comunità attiva, progetti internazionali sociali, ecologici e culturali.”**

## 4 card

1. **Bilinguismo**
2. **Innovazione**
3. **Community**
4. **Progetti internazionali**

## UI

- quattro card;
- icone custom;
- stesso sistema di card della landing originale;
- adattamento dei colori alla palette Primary/Middle;
- nessun redesign arbitrario del componente.

---

# 15. OPEN DAY — SELETTORE DATE

Questa è la sezione di conversione principale.

ID consigliato:

`open-day`

## Titolo

**Prenota il tuo Open Day a Cesano Maderno**

## Intro

**Primary e Middle School condividono le stesse date: scegli quando venire e indica il percorso di tuo interesse nel form.**

## Date

| Data | Orario | Disponibilità |
|---|---:|---|
| Sabato 3 ottobre | 10:00 | Max 20 famiglie |
| Sabato 17 ottobre | 15:00 | Max 20 famiglie |
| Sabato 14 novembre | 15:00 | Max 20 famiglie |
| Sabato 28 novembre | 10:00 | Max 20 famiglie |

Micro-CTA per ogni card:

**Prenota questa data →**

## Alternativa infrasettimanale — Open School

**Martedì 27 ottobre, ore 10:00**

Visita più breve, formato informativo, per chi non può partecipare il sabato.

> Le date provengono dal documento di specifica. Non modificarle o sostituirle senza indicazione.

---

# 16. COMPORTAMENTO DEL SELETTORE DATE

Utilizzare card cliccabili / pill / chip.

Ogni data deve essere chiaramente selezionabile.

Al click:

1. la card si evidenzia;
2. la data viene salvata nello stato;
3. il form di prenotazione si aggiorna con la data precompilata;
4. l'utente viene accompagnato al form senza perdere il contesto.

## Stato selezionato

Per questa Landing NON usare il precedente “bordo oro” come colore principale.

Adattare lo stato selezionato all'identità Primary/Middle:
- gradiente `#FF788D → #FFAC59`;
- oppure bordo / highlight coerente con la palette;
- testo sempre ad alto contrasto.

## Stati disponibilità

Prevedere:

### Disponibile
CTA normale.

### Ultimi posti
Badge:

**Ultimi posti**

Utilizzare solo se il dato è reale.

### Al completo
Card disabilitata.

Badge:

**Al completo**

CTA alternativa:

**Avvisami per la prossima data**

Non creare scarsità artificiale.

---

# 17. STEP — PERCORSO DI INTERESSE

Dopo la selezione della data deve essere presente un secondo step.

Domanda:

**A quale percorso sei interessato?**

Opzioni:

- **Primary**
- **Middle School**
- **Entrambi**

## UI

Utilizzare:
- toggle;
- radio;
- pill selezionabili.

La distinzione visiva può usare:

### Primary
`#FF788D`

### Middle School
`#FFAC59`

### Entrambi
gradiente Primary → Middle.

La scelta deve diventare parte dei dati del lead.

---

# 18. FORM PRENOTAZIONE OPEN DAY

Il form deve essere breve.

Campi essenziali:
- Nome;
- Telefono;
- Email;
- età del bambino;
- data Open Day selezionata;
- percorso di interesse: Primary / Middle / Entrambi.

Campo facoltativo consigliato dal documento:

**“Il tuo bambino frequenta già la Primary BBEducation?”**

Questo campo serve per distinguere:
- famiglie BBEducation già iscritte;
- famiglie esterne.

## UX form

- un solo campo per riga su mobile;
- autocomplete attivo;
- tastiera numerica per telefono;
- validazione chiara;
- nessun campo superfluo;
- data scelta già precompilata;
- percorso già precompilato se selezionato;
- conferma immediata dopo l'invio.

Se l'infrastruttura lo consente:
- email di conferma immediata;
- reminder SMS 24h prima.

Non simulare funzionalità backend non disponibili.

---

# 19. SEZIONE — COSA TROVERETE

## Obiettivo

Spiegare come si svolgerà l'Open Day e ridurre l'incertezza.

## Copy

**“Presentazione della scuola, visita degli spazi del nuovo Campus e un momento dedicato alla Middle School.”**

## UI

Agenda in step con:
- icone;
- micro-copy;
- eventuale distinzione tra momenti comuni e momenti Primary/Middle.

Indicare chiaramente se sono previsti percorsi paralleli.

La struttura specifica dell'Open Day Primary/Middle è indicata nel documento originario come ancora da ridefinire: non inventare dettagli operativi non approvati.

---

# 20. FAQ

## Obiettivo

Gestire proattivamente le obiezioni specifiche legate a:
- nuova Middle School;
- assenza di storico;
- trasferimento a Seveso;
- continuità;
- test d'ingresso.

## Quantità

Prevedere circa **7–9 FAQ**.

Almeno 3 devono essere dedicate specificamente alla Middle School.

## Domande obbligatorie / prioritarie

- **La Middle School è una scuola nuova: come garantite la qualità?**
- **Cosa cambia con il trasferimento a Seveso?**
- **Come funziona il test d'ingresso per la Middle?**

## UI

Accordion.

Desktop:
- interazione pulita;
- massimo focus sulla leggibilità.

Mobile:
- una sola FAQ aperta alla volta;
- mettere le domande sulla Middle in cima.

Non inventare risposte fattuali non presenti nei materiali approvati: se le risposte non sono disponibili, predisporre il componente e lasciare un placeholder editoriale chiaramente identificato nel codice/dati.

---

# 21. LEAD MAGNET

Titolo:

**Il Piano Formativo della Middle School 2027**

## Obiettivo

Catturare famiglie che:
- sono interessate;
- desiderano approfondire;
- non sono ancora pronte a prenotare.

Il download deve essere tracciabile come micro-conversione.

Evento tracking consigliato:

`download_piano_formativo`

Non creare un PDF fittizio se il file reale non è disponibile.

---

# 22. FORM RICHIESTA INFORMAZIONI

## Copy

**“Vuoi saperne di più sulla Middle School o sul nuovo Campus prima di prenotare?”**

## Campi

- Nome;
- Telefono;
- Email;
- Percorso di interesse;
- Messaggio facoltativo.

## CTA

**Richiedi informazioni**

Il form deve essere breve e non competere visivamente con la CTA primaria di prenotazione.

---

# 23. FOOTER

## Copy

**“Vieni a scoprire il nuovo Campus di Seveso e la Middle School BBEducation.”**

## Contenuti

- indirizzo;
- distinzione Cesano Maderno / Seveso quando necessaria;
- mappa;
- contatti;
- social;
- privacy;
- informazioni legali;
- CTA finale.

## CTA

**Prenota il tuo Open Day**

Attenzione:
gli Open Day indicati nel documento sono a **Cesano Maderno**, mentre il nuovo Campus sarà a **Seveso** nel 2027.

Non creare informazioni di indirizzo non presenti nei dati reali del repository / materiale fornito.

---

# 24. POSIZIONE DELLE CTA

La CTA deve essere raggiungibile frequentemente.

Posizioni richieste:

1. Hero;
2. dopo la sezione Campus;
3. dopo la sezione Middle School;
4. selettore date;
5. footer.

Nessun tratto importante della pagina dovrebbe obbligare l'utente a cercare dove prenotare.

---

# 25. STICKY CTA MOBILE

Dopo il primo scroll mostrare una barra fissa in basso.

CTA:

**Prenota il tuo Open Day**

Il comportamento deve essere coerente con la Landing 1 già esistente.

Non deve:
- coprire campi del form;
- coprire accordion;
- interferire con cookie banner;
- coprire elementi di navigazione;
- generare layout shift.

Quando l'utente entra nell'area del form o del footer, valutare una gestione intelligente della sticky CTA per evitare sovrapposizioni.

---

# 26. MOBILE FIRST

La pagina deve essere progettata e testata realmente su mobile.

## Hero

- utilizzare immagine/render statico ottimizzato se il video è troppo pesante;
- headline e CTA devono risultare visibili rapidamente;
- mantenere priorità sul messaggio Campus + Middle.

## Campus

Su mobile:
- galleria swipe orizzontale;
- evitare griglie troppo dense.

## Timeline

Desktop:
- orizzontale.

Mobile:
- verticale.

## Selettore date

Mobile:
- card impilate;
- touch target ampi;
- stato selezionato evidente;
- toggle Primary / Middle / Entrambi immediatamente sotto.

## FAQ

- una domanda aperta alla volta.

## Form

- un campo per riga;
- input adeguati;
- autocomplete;
- tastiera numerica per telefono;
- nessun overflow orizzontale.

---

# 27. RESPONSIVE

Verificare almeno:

- desktop large;
- desktop;
- laptop;
- tablet landscape;
- tablet portrait;
- mobile;
- mobile piccolo.

Mantenere i breakpoint già presenti nel progetto quando possibile.

Non creare breakpoint arbitrari se il design system esistente è sufficiente.

Controllare in particolare:
- header;
- hero;
- gradienti;
- fotografie;
- gallery Campus;
- timeline;
- card;
- selettore date;
- toggle percorso;
- form;
- FAQ;
- sticky CTA;
- footer.

---

# 28. RITMO VISIVO

La pagina deve mantenere la coerenza strutturale della prima landing, ma con una personalità più matura legata a Primary e Middle.

Utilizzare:
- molto spazio bianco;
- alternanza controllata tra sezioni neutre e sezioni più caratterizzate;
- gradiente Primary/Middle come elemento identitario;
- fotografie autentiche;
- card coerenti con il design system;
- grandi visual per il Campus;
- gerarchia chiara.

La sezione Campus deve interrompere volutamente il ritmo a card con una composizione più immersiva.

---

# 29. ANIMAZIONI E MICROINTERAZIONI

Consentite:
- fade-in leggero degli elementi in viewport;
- micro-hover sulle card;
- leggero sollevamento delle card;
- transizioni morbide;
- timeline progressiva allo scroll;
- cambio di stato fluido per i toggle Primary/Middle;
- feedback immediato sul selettore date.

Evitare:
- animazioni invasive;
- parallax aggressivi;
- effetti gratuiti;
- animazioni che rallentano l'accesso alla CTA;
- movimento continuo non necessario.

Rispettare `prefers-reduced-motion`.

---

# 30. FOTOGRAFIA E VIDEO

Utilizzare esclusivamente, quando disponibili:
- fotografie autentiche BBEducation;
- studenti reali;
- ambienti reali;
- render ufficiali del Campus;
- video ufficiali.

Evitare:
- stock generico;
- immagini stereotipate da scuola;
- visual AI che fingono di rappresentare il Campus reale;
- render inventati.

La pagina deve combinare:
- **futuro** → Campus;
- **credibilità presente** → studenti Primary e attività reali.

---

# 31. ACCESSIBILITÀ

Assicurare:
- contrasto sufficiente;
- focus state visibile;
- navigazione da tastiera;
- label reali per i form;
- `aria-expanded` per le FAQ;
- stati selected accessibili;
- alt text per immagini informative;
- elementi decorativi esclusi dalla lettura assistiva;
- touch target adeguati su mobile;
- testo leggibile su gradiente.

Non affidare la distinzione Primary/Middle esclusivamente al colore.

Accompagnare i colori con label testuali:
- Primary;
- Middle School;
- Entrambi.

---

# 32. PERFORMANCE

Obiettivo:
- caricamento percepito rapido;
- LCP ottimizzato;
- immagini responsive;
- lazy loading sotto la fold;
- video caricati in modo non bloccante;
- render compressi;
- evitare dipendenze inutili.

Il documento indica come riferimento una landing ad alte performance con tempi di caricamento sotto circa 2.5s.

Non sacrificare la performance per effetti decorativi.

---

# 33. SEO

## Title

**Scuola Primaria e Middle School Bilingue | Nuovo Campus Seveso — BBEducation**

## Meta Description

**Dal 2027 un nuovo Campus a Seveso: Scuola Primaria bilingue e la nuova Middle School BBEducation. Prenota il tuo Open Day.**

## H1

**Primary e Middle School Bilingue: il nuovo Campus di Seveso**

## H2 suggeriti dal documento

- Il nuovo Campus di Seveso
- La Middle School: la grande novità
- Un percorso educativo continuo
- Prenota il tuo Open Day

## Keyword principali

- scuola primaria bilingue Brianza
- middle school bilingue Seveso
- open day primaria Cesano Maderno

## Keyword secondarie

- scuola media bilingue Brianza
- campus Seveso 2027
- inquiry based learning scuola
- gameful learning scuola media

## Schema markup consigliato

Quando tecnicamente applicabile:
- `EducationalOrganization`
- `Event`
- `FAQPage`
- `LocalBusiness`
- `BreadcrumbList`

Ogni data Open Day può essere gestita come evento solo se i dati sono effettivamente pubblicati e corretti.

---

# 34. TRACKING

Se il progetto possiede già GA4 / Meta Pixel o una data layer, prevedere eventi coerenti con:

- `view_campus_section`
- `view_middle_section`
- `select_date`
- `select_percorso`
- `lead_openday`
- `lead_info`
- `download_piano_formativo`

Per `select_percorso`, registrare:
- Primary;
- Middle;
- Entrambi.

Non installare nuovi sistemi di tracking se non sono già previsti dal progetto senza approvazione esplicita.

---

# 35. COERENZA CON LE CAMPAGNE

La landing deve essere coerente con la comunicazione BBEducation Open Day mostrata nella Visual Identity.

Principi:
- uso autentico delle fotografie;
- forte presenza di bianco;
- logo BBEducation;
- gradiente di brand;
- headline semplici;
- CTA molto chiare;
- bordi e forme morbide;
- linguaggio contemporaneo e non istituzionale.

Per Primary & Middle applicare specificamente il gradiente:

**#FF788D → #FFAC59**

---

# 36. COSA NON FARE

Non:
- sovrascrivere la landing originale;
- modificare la route della landing originale;
- sostituire i suoi contenuti;
- sostituire i suoi asset;
- cambiare globalmente colori che altererebbero la Landing 1;
- usare la palette Baby come palette principale della nuova landing;
- usare “oro” come accento dominante se è una conseguenza della prima specifica e non della VI attuale;
- introdurre font diversi da Nunito;
- usare fotografie stock;
- inventare render del Campus;
- inventare numeri, recensioni o certificazioni;
- inventare risposte FAQ non approvate;
- creare scarsità artificiale;
- creare dettagli non confermati sulla struttura dell'Open Day;
- ridisegnare da zero componenti già esistenti senza motivo;
- introdurre animazioni invasive;
- fare refactoring massivi non necessari.

---

# 37. DESIGN TOKENS CONSIGLIATI

Adattare i nomi alla struttura effettiva del progetto.

```css
:root {
  --bbe-primary-school: #FF788D;
  --bbe-middle-school: #FFAC59;

  --bbe-white: #FFFFFF;
  --bbe-black: #000000;

  --bbe-primary-middle-gradient:
    linear-gradient(90deg, #FF788D 0%, #FFAC59 100%);
}
```

Se il progetto usa già token o theme variables, integrare questi valori nel sistema esistente invece di creare un secondo sistema parallelo.

---

# 38. ARCHITETTURA COMPONENTI

Riutilizzare i componenti della Landing 1 quando possibile, mantenendo il risultato originale invariato.

Possibili componenti condivisi:

```text
Header
Hero
TrustBar
Section
Card
CTA
OpenDayDateSelector
LeadForm
FAQAccordion
Footer
StickyMobileCTA
```

Nuovi componenti / variant possibili:

```text
CampusShowcase
EducationTimeline
MiddleSchoolSection
PathSelector
PrimaryMiddleTheme
```

Preferire configurazione tramite dati:

```text
theme
content
images
dates
schoolPath
```

rispetto a duplicazione di intere strutture.

---

# 39. DATI DA TENERE SEPARATI DALLA LANDING 1

La Landing 2 deve avere configurazioni autonome per:

- testi;
- immagini;
- date Open Day;
- capienza;
- palette;
- gradiente;
- route;
- SEO;
- FAQ;
- lead magnet;
- percorso di interesse;
- eventuali tracking metadata.

Non utilizzare oggetti dati condivisi se questo comporta la modifica involontaria della Landing 1.

---

# 40. CONTROLLO FINALE

Prima di considerare il lavoro concluso verificare:

## Landing originale

- esiste ancora;
- route invariata;
- colori invariati;
- contenuti invariati;
- immagini invariate;
- responsive invariato;
- nessuna regressione.

## Primary & Middle School

- route dedicata;
- font Nunito;
- Primary `#FF788D`;
- Middle `#FFAC59`;
- gradiente Primary → Middle;
- logo corretto;
- hero corretta;
- Campus in evidenza;
- timeline 0–14;
- sezione Middle;
- differenzianti;
- selettore date;
- scelta Primary / Middle / Entrambi;
- form funzionante;
- FAQ;
- lead magnet predisposto solo se disponibile;
- footer;
- sticky CTA mobile;
- desktop/tablet/mobile;
- nessun overflow;
- nessun errore console;
- nessun errore build;
- focus state;
- contrasto;
- immagini ottimizzate.

---

# 41. PRIORITÀ DI IMPLEMENTAZIONE

Ordine consigliato:

1. proteggere la Landing 1;
2. creare route / struttura Landing 2;
3. impostare theme Primary/Middle;
4. integrare contenuti e visual reali;
5. costruire Hero;
6. costruire Campus;
7. costruire timeline;
8. costruire sezione Middle;
9. costruire Open Day selector + percorso;
10. form;
11. FAQ / lead magnet;
12. responsive;
13. accessibilità;
14. performance;
15. SEO / tracking;
16. regression test sulla Landing 1.

---

# 42. PRINCIPIO GUIDA

La landing **Primary & Middle School** deve essere percepita come una naturale evoluzione di BBEducation:

**più matura, orientata al futuro e all'innovazione, ma chiaramente parte dello stesso brand.**

La distinzione visiva principale rispetto alle altre aree BBEducation deve essere costruita attraverso:

- il colore Primary `#FF788D`;
- il colore Middle `#FFAC59`;
- il gradiente Primary → Middle;
- i contenuti dedicati;
- le immagini specifiche;
- il Campus;
- il racconto della continuità Primary → Middle.

Non attraverso un redesign completo del linguaggio visivo.
