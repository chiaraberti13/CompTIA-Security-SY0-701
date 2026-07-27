# CompTIA Security+ SY0-701 – Training Studio & AI Simulator

> Documento di presentazione del progetto, pensato per accompagnare il curriculum.
> Spiega **cosa fa l'applicazione**, **come è stata costruita** e **qual è stato il mio ruolo** nello sviluppo.

---

## 1. In una frase

È un'**applicazione web** che aiuta chi studia a prepararsi all'esame di certificazione informatica **CompTIA Security+ (SY0-701)**. Non è un semplice quiz online: è un vero e proprio *ambiente di studio* che unisce materiale didattico, un glossario consultabile, un simulatore d'esame e un **assistente basato su intelligenza artificiale** che risponde alle domande dello studente come farebbe un tutor esperto.

---

## 2. A cosa serve (spiegato in modo semplice)

L'esame Security+ è diviso in **5 grandi aree** (chiamate "domini"), che coprono tutti gli argomenti della sicurezza informatica. Studiare significa dover gestire tantissimi concetti, sigle e formule.

Questa app raccoglie tutto in un unico posto e trasforma lo studio in un percorso guidato. L'utente può:

- **leggere e ripassare** gli argomenti, spuntando ciò che ha già imparato;
- **cercare velocemente** il significato di un termine o di una sigla nel glossario;
- **mettersi alla prova** con domande d'esame realistiche;
- **farsi spiegare** i dubbi da un assistente AI, in linguaggio naturale, come se chattasse con un insegnante.

Il tutto in italiano, con un'interfaccia moderna e curata.

---

## 3. Cosa fa l'app, sezione per sezione

L'applicazione è organizzata in **quattro funzionalità principali**, accessibili da un menù a schede.

### 🧭 Studio
Una **checklist interattiva** che copre tutti e 5 i domini dell'esame.
Ogni argomento ha una scheda dedicata con:
- una **definizione** chiara e sintetica;
- una **spiegazione dettagliata**;
- eventuali **formule chiave** (ad esempio il calcolo del rischio economico, `ALE = SLE × ARO`);
- **tabelle comparative** per distinguere concetti simili;
- un **"exam tip"**, cioè un consiglio mirato per l'esame.

Man mano che l'utente spunta gli argomenti completati, una **barra di avanzamento** mostra a colpo d'occhio quanto manca alla fine del programma.

### 📖 Glossario
Un **glossario completo** di tutta la terminologia SY0-701. Permette di:
- **cercare** un termine mentre si digita;
- **filtrare** per dominio o per categoria (Acronimi e Protocolli, Concetti Cardine, Controlli e Architetture, Attacchi e Minacce, Metriche e Formule, Governance e Normative);
- **salvare segnalibri** sui termini più importanti da rivedere.

È la parte pensata per il ripasso veloce, quando serve ritrovare al volo il significato di una sigla.

### 🎯 Simulatore d'esame (Quiz)
Un **simulatore di domande** in stile esame reale. L'utente:
- sceglie un **preset** (concentrarsi su un singolo dominio, un mini-test, un test bilanciato o completo) oppure crea un **quiz personalizzato** decidendo quante domande prendere da ciascun dominio;
- risponde a **domande basate su scenari concreti**, dove più risposte sembrano corrette ma solo una è la "migliore";
- riceve un **feedback immediato** con la spiegazione del perché una risposta è giusta e le altre no.

Al termine, l'app individua gli **argomenti più deboli** dello studente e — usando l'intelligenza artificiale — **genera nuove domande di recupero** mirate proprio su quei punti. In pratica il test si adatta alla persona e la aiuta a colmare le lacune.

### 🤖 Assistente AI (Trainer)
Una **chat** in cui l'utente può fare domande libere sui temi dell'esame e ricevere risposte approfondite, con esempi e tabelle, da un assistente che si comporta come un *formatore senior di cybersecurity*.
Le risposte sono generate da un **modello di intelligenza artificiale generativa (LLM)**, guidato da istruzioni specifiche che lo mantengono focalizzato sul programma d'esame e sulla terminologia ufficiale.

---

## 4. Come è stata costruita (parte tecnica, spiegata semplice)

L'applicazione è **full-stack**: ha una parte visibile all'utente (il *frontend*) e una parte "dietro le quinte" che lavora sul server (il *backend*).

### La parte visibile (Frontend)
È l'interfaccia con cui l'utente interagisce, costruita con:
- **React** (con **TypeScript**): la tecnologia che permette di creare interfacce a "componenti", cioè blocchi riutilizzabili (la scheda di un argomento, una domanda del quiz, un messaggio della chat…);
- **Tailwind CSS**: per lo stile grafico moderno e coerente;
- una libreria di **animazioni** e un set di **icone**, che rendono l'esperienza fluida e piacevole.

Tutti i **contenuti didattici** (i 5 domini e le centinaia di domande d'esame) sono organizzati in modo strutturato e ordinato, così da poter essere facilmente ampliati o aggiornati senza toccare il resto dell'applicazione.

### La parte nascosta (Backend)
Un piccolo **server** (realizzato con **Express**, su ambiente Node.js) che si occupa di dialogare con l'intelligenza artificiale. Espone due "sportelli" (API):
- uno per la **chat** con l'assistente;
- uno per la **generazione delle domande di recupero**.

Una scelta importante: **la chiave di accesso all'AI resta sempre sul server e non viene mai esposta al browser dell'utente.** Questo è un accorgimento di sicurezza fondamentale, del tutto coerente con il tema stesso dell'app.

### Come viene assemblata e pubblicata
- In fase di sviluppo, un unico comando avvia insieme server e interfaccia.
- Per la pubblicazione, il progetto viene "compilato" e ottimizzato: la parte visibile e quella server vengono impacchettate in file pronti per essere messi online su un servizio cloud.

### Schema a colpo d'occhio

```
┌──────────────────────────────┐        ┌───────────────────────────┐        ┌─────────────────────┐
│         UTENTE (Browser)     │        │      SERVER (Backend)     │        │   Modello AI (LLM)  │
│  Interfaccia React + Tailwind│ ─────► │   Express + API sicure    │ ─────► │  Genera risposte e  │
│  Studio · Glossario · Quiz   │ ◄───── │  (chiave protetta lato    │ ◄───── │  domande su misura  │
│  · Chat AI                   │        │   server)                 │        │                     │
└──────────────────────────────┘        └───────────────────────────┘        └─────────────────────┘
```

---

## 5. Il mio ruolo e il mio contributo

Mi sono occupato dello **sviluppo dell'applicazione e dell'integrazione con l'intelligenza artificiale**, curando il progetto dall'idea fino alla versione funzionante. In concreto:

- **Ho progettato l'architettura dell'applicazione**, separando in modo chiaro la parte di interfaccia, i contenuti didattici e la logica lato server: una struttura modulare che rende il progetto facile da mantenere ed estendere.
- **Ho sviluppato l'interfaccia utente** con React e TypeScript, costruendo le quattro sezioni (Studio, Glossario, Simulatore, Assistente AI) come componenti riutilizzabili e realizzando una navigazione fluida e responsiva.
- **Ho gestito la logica di rendering dei contenuti**, ad esempio la trasformazione del testo formattato (markdown) in elementi grafici e la visualizzazione dinamica di schede, tabelle e barre di avanzamento.
- **Ho integrato l'intelligenza artificiale** costruendo il server e le API dedicate, e progettando le "istruzioni di sistema" (prompt) che indirizzano il modello a rispondere in modo pertinente, professionale e coerente con il programma d'esame.
- **Ho implementato la funzione di recupero adattiva**, cioè il meccanismo che, in base agli errori dello studente, chiede all'AI di generare nuove domande mirate sugli argomenti più deboli.
- **Ho applicato criteri di sicurezza di base**, mantenendo le credenziali sensibili protette lato server e fuori dalla portata del browser.
- **Ho curato l'organizzazione dei contenuti didattici** (domini, glossario e domande d'esame), predisposti — anche con il supporto di strumenti di AI — e poi strutturati e validati per essere corretti, coerenti e facili da aggiornare.

---

## 6. Competenze dimostrate

| Ambito | Competenze messe in pratica |
|---|---|
| **Sviluppo Frontend** | React, TypeScript, progettazione a componenti, interfacce responsive, gestione dello stato dell'applicazione |
| **Sviluppo Backend** | Creazione di un server e di API, gestione delle richieste, comunicazione client–server |
| **Integrazione AI** | Collegamento a un modello di AI generativa, progettazione dei prompt, generazione di contenuti dinamici e adattivi |
| **Architettura software** | Progettazione modulare, separazione delle responsabilità, codice mantenibile e scalabile |
| **Sicurezza** | Protezione delle credenziali lato server, buone pratiche di gestione dei dati sensibili |
| **UX / Design** | Interfaccia curata, navigazione intuitiva, feedback immediato all'utente |
| **Dominio di settore** | Solida conoscenza degli argomenti CompTIA Security+ (SY0-701), tradotta in materiale didattico strutturato |

---

## 7. In sintesi

Un progetto che unisce **sviluppo software moderno** e **integrazione dell'intelligenza artificiale** al servizio di un obiettivo concreto: rendere più efficace lo studio per una certificazione professionale. Dimostra la capacità di **ideare, costruire e completare** un'applicazione full-stack reale, dalla progettazione dell'architettura fino all'esperienza finale dell'utente.
