# 🛡️ CompTIA Security+ SY0-701 Training Studio & AI Simulator

> **Language Selection / Selezione Lingua:**
> - 🇬🇧 [English Version](#-english-version)
> - 🇮🇹 [Versione Italiana](#-versione-italiana)

---

<a id="english-version"></a>
# 🇬🇧 English Version

A full-stack web application designed for intensive preparation for the **CompTIA Security+ SY0-701** certification exam. It includes an interactive checklist for all 5 official domains, a complete SY0-701 Glossary with search and category filters, an Exam Simulator, and an integrated **AI Assistant** powered by Google Gemini acting as a Senior Cybersecurity Trainer.

---

## 📋 Table of Contents (English)
1. [Main Features](#features-en)
2. [System Prerequisites](#prerequisites-en)
3. [Obtaining a Google Gemini API Key](#api-key-en)
4. [Environment Variables Configuration](#env-en)
5. [Installation Guide by Operating System](#installation-en)
   - [Linux (Ubuntu, Debian, Fedora, Arch)](#linux-en)
   - [macOS (Intel & Apple Silicon)](#macos-en)
   - [Windows (PowerShell, CMD, WSL2)](#windows-en)
6. [Available Scripts and Commands](#scripts-en)
7. [Application Architecture](#architecture-en)
8. [Troubleshooting](#troubleshooting-en)

---

<a id="features-en"></a>
## ✨ Main Features

- **Interactive SY0-701 Checklist**: Track your learning progress across all 5 CompTIA domains (General Security Concepts, Threats/Vulnerabilities, Architecture, Operations, Management).
- **Comprehensive SY0-701 Glossary**: Searchable glossary with acronyms, core concepts, security controls, threats, and metrics/formulas with domain and category filtering.
- **AI Senior Cybersecurity Trainer**: Powered by **Google Gemini API** (`gemini-3.5-flash` model) to deliver step-by-step explanations, scenario analysis, and exam-focused insights.
- **High-Stakes Exam Simulator**: Scenario-based exam questions with comprehensive rationale and distractor analysis.
- **AI Remediation Question Generator**: Dynamically generates targeted remediation questions focused on your weakest topics after completing exam practice sets.

---

<a id="prerequisites-en"></a>
## ⚡ System Prerequisites

Before starting the installation, ensure your system meets the following requirements:

- **Node.js**: Version `18.x` or higher (recommended LTS `20.x` or `22.x`).
- **npm**: Version `9.x` or higher (comes bundled with Node.js).
- **Git**: Required to clone the project repository.

---

<a id="api-key-en"></a>
## 🔑 Obtaining a Google Gemini API Key

The AI assistant and adaptive question features utilize the official `@google/genai` SDK and require a free **GEMINI_API_KEY**:

1. Visit **Google AI Studio**: [https://aistudio.google.com/](https://aistudio.google.com/)
2. Log in using your Google account.
3. Click on **"Get API key"** in the navigation menu.
4. Click **"Create API key"** (select an existing or new Google Cloud project).
5. Copy the generated alphanumeric string (e.g. `AIzaSy...`). You will place it in your `.env` configuration file.

---

<a id="env-en"></a>
## ⚙️ Environment Variables Configuration

In the root directory of the project, locate `.env.example`. Create a new file named `.env` in the same folder by copying its contents:

### `.env` File Template:

```env
# Required API Key for Google Gemini AI Assistant & Remediation Engine
GEMINI_API_KEY="Paste_Your_Gemini_API_Key_Here"

# (Optional) Application base URL
APP_URL="http://localhost:3000"
```

> **Security Warning**: Never commit your `.env` file to public repositories. It contains sensitive API credentials.

---

<a id="installation-en"></a>
## 🚀 Installation Guide by Operating System

<a id="linux-en"></a>
### 🐧 Linux (Ubuntu, Debian, Fedora, Arch)

#### 1. Install System Prerequisites
- **Ubuntu / Debian**:
  ```bash
  sudo apt update
  sudo apt install -y curl git
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs
  ```
- **Fedora / RHEL**:
  ```bash
  sudo dnf install -y git nodejs
  ```
- **Arch Linux**:
  ```bash
  sudo pacman -S git nodejs npm
  ```

#### 2. Verify Versions
```bash
node -v   # Must show v18.x.x or higher
npm -v    # Must show v9.x.x or higher
```

#### 3. Clone and Install
```bash
# Clone the repository and enter directory
git clone <REPOSITORY_URL>
cd <PROJECT_FOLDER_NAME>

# Install npm dependencies
npm install

# Create .env configuration file
cp .env.example .env
```

#### 4. Configure `.env`
Open `.env` in a text editor (e.g. `nano .env`) and add your Gemini API Key:
```env
GEMINI_API_KEY="AIzaSyYourActualKeyHere"
```

#### 5. Launch Application
- **Development Mode** (Hot Reload enabled):
  ```bash
  npm run dev
  ```
  Open your browser at `http://localhost:3000`.

- **Production Build & Execution**:
  ```bash
  npm run build
  npm start
  ```

---

<a id="macos-en"></a>
### 🍎 macOS (Intel & Apple Silicon M1/M2/M3)

#### 1. Install Prerequisites via Homebrew
If Homebrew is not installed, install it via Terminal:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Install Node.js and Git:
```bash
brew install node git
```

#### 2. Verify Installation
```bash
node -v
npm -v
```

#### 3. Setup Project
Open **Terminal** (`/Applications/Utilities/Terminal.app`):
```bash
cd ~/Documents
git clone <REPOSITORY_URL>
cd <PROJECT_FOLDER_NAME>

npm install
cp .env.example .env
```

#### 4. Configure API Key
Open `.env` using TextEdit or Nano:
```bash
nano .env
```
Paste your key into `GEMINI_API_KEY="AIzaSyYourActualKeyHere"`, press `CTRL + O` to save, `ENTER`, then `CTRL + X` to exit.

#### 5. Launch
- **Development Mode**:
  ```bash
  npm run dev
  ```
- **Production Mode**:
  ```bash
  npm run build
  npm start
  ```
Access the application at `http://localhost:3000`.

---

<a id="windows-en"></a>
### 🪟 Windows (PowerShell, Command Prompt, WSL2)

#### Method 1: Windows Native (PowerShell / CMD)

##### 1. Install Prerequisites
1. Download Node.js LTS installer from [nodejs.org](https://nodejs.org/).
2. Download Git for Windows from [git-scm.com](https://git-scm.com/).
3. Alternatively, install via **winget** in PowerShell (Admin):
   ```powershell
   winget install OpenJS.NodeJS.LTS
   winget install Git.Git
   ```

##### 2. Verify Versions in PowerShell
```powershell
node -v
npm -v
```

##### 3. Clone and Setup Project
```powershell
cd C:\Users\YourUsername\Documents
git clone <REPOSITORY_URL>
cd <PROJECT_FOLDER_NAME>

npm install
Copy-Item .env.example .env
```

##### 4. Edit `.env`
Open `.env` in Notepad:
```powershell
notepad .env
```
Set your API key:
```env
GEMINI_API_KEY="AIzaSyYourActualKeyHere"
```
Save and close Notepad.

##### 5. Run Application
- **Development Mode**:
  ```powershell
  npm run dev
  ```
- **Production Mode**:
  ```powershell
  npm run build
  npm start
  ```
Open your browser at `http://localhost:3000`.

---

#### Method 2: WSL2 (Windows Subsystem for Linux)
1. Open your WSL terminal (e.g. Ubuntu).
2. Follow the instructions under the [Linux section](#linux-en).
3. The app will automatically map and run on `http://localhost:3000` in your Windows browser.

---

<a id="scripts-en"></a>
## 🛠️ Available Scripts and Commands

| Script | Description |
| :--- | :--- |
| `npm run dev` | Launches Express server in development mode using `tsx` with Vite middleware and Hot Reload on `http://localhost:3000`. |
| `npm run build` | Builds React frontend with Vite and bundles Express backend with `esbuild` into `dist/server.cjs`. |
| `npm start` | Executes compiled production server (`node dist/server.cjs`). |
| `npm run lint` | Performs TypeScript type checks (`tsc --noEmit`). |
| `npm run clean` | Cleans build artifacts (`dist`, `server.js`). |

---

<a id="architecture-en"></a>
## 📐 Application Architecture

The application uses an integrated **Full-Stack Architecture**:

```
├── server.ts             # Express server & Gemini API proxy
├── src/
│   ├── App.tsx           # Main React component (Studio, Glossary, Quiz, AI Assistant)
│   ├── components/
│   │   └── GlossarySection.tsx # SY0-701 Glossary with search & filtering
│   ├── main.tsx          # React 19 entry point
│   ├── data.ts           # SY0-701 official 5 domains data & question bank
│   ├── types.ts          # TypeScript interfaces
│   └── index.css         # Tailwind CSS v4 styles
├── .env.example          # Environment variables template
├── package.json          # Dependencies & scripts
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

---

<a id="troubleshooting-en"></a>
## ❓ Troubleshooting

### 1. AI Error: *"GEMINI_API_KEY is not configured"*
- **Cause**: Missing `.env` file or invalid `GEMINI_API_KEY`.
- **Fix**: Verify `.env` exists in the project root with a valid API Key from Google AI Studio, then restart server (`npm run dev`).

### 2. Error: `Error: listen EADDRINUSE: address already in use :::3000`
- **Cause**: Port 3000 is occupied by another process.
- **Fix**:
  - **Linux / macOS**: `npx kill-port 3000`
  - **Windows PowerShell**: `Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process`

---
---

<a id="versione-italiana"></a>
# 🇮🇹 Versione Italiana

Un'applicazione web full-stack professionale pensata per la preparazione intensiva all'esame di certificazione **CompTIA Security+ SY0-701**. Integra una checklist completa di tutti i 5 Domini ufficiali, un glossario terminologico completo con ricerca e filtri, un simulatore d'esame (*High-Stakes Simulator*), e un **Assistente AI integrato** che veste i panni di un *Senior Cybersecurity Trainer* accreditato.

---

## 📋 Indice (Italiano)
1. [Caratteristiche Principali](#features-it)
2. [Prerequisiti di Sistema](#prerequisites-it)
3. [Ottenere la Chiave API di Google Gemini](#api-key-it)
4. [Configurazione delle Variabili d'Ambiente](#env-it)
5. [Guida all'Installazione per Sistema Operativo](#installation-it)
   - [Linux (Ubuntu, Debian, Fedora, Arch)](#linux-it)
   - [macOS (Intel & Apple Silicon)](#macos-it)
   - [Windows (PowerShell, CMD, WSL2)](#windows-it)
6. [Script e Comandi Disponibili](#scripts-it)
7. [Architettura dell'Applicazione](#architecture-it)
8. [Risoluzione dei Problemi (Troubleshooting)](#troubleshooting-it)

---

<a id="features-it"></a>
## ✨ Caratteristiche Principali

- **Checklist Interattiva SY0-701**: Tracciamento dei progressi per tutti i 5 domini (General Security Concepts, Threats/Vulnerabilities, Architecture, Operations, Management).
- **Glossario Completo SY0-701**: Sezione glossario con ricerca istantanea, filtri per dominio, categoria (Acronimi, Controlli, Attacchi, Metriche, Governance), indice alfabetico A-Z e segnalibri.
- **Assistente AI Senior Trainer**: Integrazione con **Google Gemini API** (modello `gemini-3.5-flash`) per spiegazioni approfondite, confronti concettuali e chiarimenti sulle metriche d'esame (ALE, SLE, ARO, RTO, RPO, ecc.).
- **Simulatore d'Esame High-Stakes**: Domande basate su scenari complessi di livello Analisi/Applicazione con feedback dettagliati e motivazioni d'esame.
- **Generatore di Domande di Recupero (Remediation)**: L'AI genera dinamicamente 3 domande mirate sugli argomenti in cui lo studente ha riscontrato lacune durante il test.

---

<a id="prerequisites-it"></a>
## ⚡ Prerequisiti di Sistema

Prima di procedere con l'installazione, assicurati che sul tuo sistema siano installati:

- **Node.js**: Versione `18.x` o superiore (consigliata versione LTS `20.x` o `22.x`).
- **npm**: Versione `9.x` o superiore (installato automaticamente con Node.js).
- **Git**: Per clonare il repository del progetto.

---

<a id="api-key-it"></a>
## 🔑 Ottenere la Chiave API di Google Gemini

L'assistente AI e il sistema di generazione domande adattive utilizzano l'SDK ufficiale `@google/genai` e richiedono una **GEMINI_API_KEY** gratuita:

1. Visita la piattaforma ufficiale **Google AI Studio**: [https://aistudio.google.com/](https://aistudio.google.com/)
2. Effettua l'accesso con il tuo account Google.
3. Fai clic su **"Get API key"** nel menu di navigazione.
4. Fai clic su **"Create API key"** (selezionando un progetto Google Cloud nuovo o esistente).
5. Copia la stringa alfanumerica generata (es. `AIzaSy...`). La userai nel file di configurazione `.env`.

---

<a id="env-it"></a>
## ⚙️ Configurazione delle Variabili d'Ambiente

Nella cartella radice del progetto è presente un file di esempio chiamato `.env.example`. Crea un nuovo file chiamato `.env` copiando la struttura:

### Contenuto del file `.env`:

```env
# Chiave API obbligatoria per l'Assistente AI e le domande di recupero
GEMINI_API_KEY="Incolla_Qui_La_Tua_Chiave_Gemini"

# (Opzionale) URL dell'applicazione se pubblicata in cloud
APP_URL="http://localhost:3000"
```

> **Nota di Sicurezza**: Non committare mai il file `.env` su repository pubblici. Il file `.env` contiene chiavi private e segreti.

---

<a id="installation-it"></a>
## 🚀 Guida all'Installazione per Sistema Operativo

<a id="linux-it"></a>
### 🐧 Linux (Ubuntu, Debian, Fedora, Arch)

#### 1. Verifica/Installazione dei prerequisiti
- **Ubuntu / Debian**:
  ```bash
  sudo apt update
  sudo apt install -y curl git
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs
  ```
- **Fedora / RHEL**:
  ```bash
  sudo dnf install -y git nodejs
  ```
- **Arch Linux**:
  ```bash
  sudo pacman -S git nodejs npm
  ```

#### 2. Verifica versioni
```bash
node -v   # Deve mostrare v18.x.x o superiore
npm -v    # Deve mostrare v9.x.x o superiore
```

#### 3. Clonazione e installazione
```bash
git clone <URL_DEL_REPOSITORY>
cd <NOME_CARTELLA_PROGETTO>

npm install
cp .env.example .env
```

#### 4. Modifica del file `.env`
Apri il file `.env` con un editor di testo (es. `nano .env`) e inserisci la tua API key:
```env
GEMINI_API_KEY="AIzaSyYourActualKeyHere"
```

#### 5. Avvio dell'applicazione
- **Modalità Sviluppo** (Hot Reload attivo):
  ```bash
  npm run dev
  ```
  Apri il browser su `http://localhost:3000`.

- **Build e Avvio in Produzione**:
  ```bash
  npm run build
  npm start
  ```

---

<a id="macos-it"></a>
### 🍎 macOS (Intel & Apple Silicon M1/M2/M3)

#### 1. Installazione prerequisiti tramite Homebrew
Se non hai [Homebrew](https://brew.sh/) installato, aprilo nel Terminale ed eseguilo:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Installa Node.js e Git:
```bash
brew install node git
```

#### 2. Verifica installazione
```bash
node -v
npm -v
```

#### 3. Clonazione e installazione del progetto
Apri il **Terminale** (`/Applications/Utilities/Terminal.app`):
```bash
cd ~/Documents
git clone <URL_DEL_REPOSITORY>
cd <NOME_CARTELLA_PROGETTO>

npm install
cp .env.example .env
```

#### 4. Configura la chiave API
Apri e modifica il file `.env` tramite Nano o TextEdit:
```bash
nano .env
```
Inserisci la tua chiave Gemini e salva con `CTRL + O` seguito da `ENTER`, poi esci con `CTRL + X`.

#### 5. Avvio
- **Modalità Sviluppo**:
  ```bash
  npm run dev
  ```
- **Modalità Produzione**:
  ```bash
  npm run build
  npm start
  ```
Accedi da browser all'indirizzo `http://localhost:3000`.

---

<a id="windows-it"></a>
### 🪟 Windows (PowerShell, Command Prompt o WSL2)

#### Metodo 1: PowerShell o Command Prompt (Nativo Windows)

##### 1. Installazione Prerequisiti
1. Scarica e installa l'installer **Node.js LTS** da [nodejs.org](https://nodejs.org/).
2. Scarica e installa **Git for Windows** da [git-scm.com](https://git-scm.com/).
3. Alternativamente, puoi installarli via **winget** da PowerShell (eseguito come amministratore):
   ```powershell
   winget install OpenJS.NodeJS.LTS
   winget install Git.Git
   ```

##### 2. Riavvia la finestra di PowerShell
Verifica le versioni installate:
```powershell
node -v
npm -v
```

##### 3. Clonazione e Configurazione Progetto
```powershell
cd C:\Utenti\TuoNome\Documenti
git clone <URL_DEL_REPOSITORY>
cd <NOME_CARTELLA_PROGETTO>

npm install
Copy-Item .env.example .env
```

##### 4. Modifica del file `.env`
Puoi aprire il file `.env` con **Blocco Note**:
```powershell
notepad .env
```
Sostituisci la chiave temporanea con la tua API key reale:
```env
GEMINI_API_KEY="AIzaSyYourActualKeyHere"
```
Salva e chiudi il file.

##### 5. Avvio dell'Applicazione
- **Sviluppo**:
  ```powershell
  npm run dev
  ```
- **Produzione**:
  ```powershell
  npm run build
  npm start
  ```
Apri il browser web su `http://localhost:3000`.

---

#### Metodo 2: WSL2 (Windows Subsystem for Linux)
1. Apri la shell di WSL (es. Ubuntu).
2. Segui i passaggi indicati nella [sezione Linux](#linux-it).
3. L'applicazione risponderà all'indirizzo `http://localhost:3000` anche nel browser principale di Windows.

---

<a id="scripts-it"></a>
## 🛠️ Script e Comandi Disponibili

| Comando | Descrizione |
| :--- | :--- |
| `npm run dev` | Avvia il server Express in sviluppo con `tsx` e Vite middleware con Hot Reload attivo su `http://localhost:3000`. |
| `npm run build` | Compila il frontend React con Vite e impacchetta il server Node/Express con `esbuild` in un unico file `dist/server.cjs`. |
| `npm start` | Avvia il server compilato in modalità produzione (`node dist/server.cjs`). |
| `npm run lint` | Esegue il controllo della sintassi e della sicurezza dei tipi TypeScript via `tsc --noEmit`. |
| `npm run clean` | Rimuove le cartelle e i file temporanei di build (`dist`, `server.js`). |

---

<a id="architecture-it"></a>
## 📐 Architettura dell'Applicazione

L'applicazione adotta un'architettura **Full-Stack integrata**:

```
├── server.ts             # Server Node.js / Express (Gestione endpoint API e proxy Gemini)
├── src/
│   ├── App.tsx           # Componente principale React (Studio, Glossario, Quiz, AI Assistant)
│   ├── components/
│   │   └── GlossarySection.tsx # Sezione Glossario SY0-701 con ricerca e filtri
│   ├── main.tsx          # Entry point frontend React 19
│   ├── data.ts           # Dataset ufficiale dei 5 Domini CompTIA e banca domande
│   ├── types.ts          # Interfaccia dei Tipi TypeScript
│   └── index.css         # Styling globale Tailwind CSS v4
├── .env.example          # Modello per le variabili d'ambiente
├── package.json          # Dipendenze e script del progetto
├── vite.config.ts        # Configurazione build Vite
└── tsconfig.json         # Configurazione TypeScript
```

---

<a id="troubleshooting-it"></a>
## ❓ Risoluzione dei Problemi (Troubleshooting)

### 1. Risposta dell'AI: *"GEMINI_API_KEY non configurata nei Secrets"*
- **Causa**: Il file `.env` non è presente o la variabile `GEMINI_API_KEY` è vuota o errata.
- **Soluzione**: Assicurati di aver creato il file `.env` nella radice del progetto con una chiave valida generata da [Google AI Studio](https://aistudio.google.com/). Riavvia il server (`CTRL+C` e poi `npm run dev`).

### 2. Errore: `Error: listen EADDRINUSE: address already in use :::3000`
- **Causa**: La porta 3000 è già occupata da un altro processo in esecuzione.
- **Soluzione**:
  - **Linux / macOS**: `npx kill-port 3000`
  - **Windows (PowerShell)**: `Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process`

---

## 📄 Licenza / License

Progetto ad uso educativo per la preparazione alla certificazione **CompTIA Security+ SY0-701**. Tutti i marchi registrati CompTIA appartengono ai rispettivi proprietari.
