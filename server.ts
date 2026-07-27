import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoints FIRST

  // Chat endpoint with Senior Cybersecurity Trainer
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(200).json({ 
          reply: `⚠️ **GEMINI_API_KEY non configurata nei Secrets.**
          
          Per usufruire dell'assistente AI in tempo reale, aggiungi la chiave nei Secrets di AI Studio (in alto a destra). 
          
          Nel frattempo, puoi procedere alla **Fase Studio** consultando il materiale e mettendo alla prova la tua preparazione con l'**High-Stakes Simulator** (10 domande complete con spiegazioni integrate!).`
        });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      // Format history into a cohesive prompt to prevent API-level state issues
      let conversationHistory = "";
      if (history && Array.isArray(history)) {
        conversationHistory = history
          .map((h: { role: string; content: string }) => `${h.role === "user" ? "Studente" : "Trainer"}: ${h.content}`)
          .join("\n\n");
      }

      const systemPrompt = `Sei un Senior Cybersecurity Trainer e Question Writer certificato CompTIA, specializzato nel creare esami "High-Stakes" (ad alto rischio). Il tuo obiettivo è preparare l'utente su tutti i domini chiave del syllabus, incluse le novità del Security+ SY0-701:
      - Dominio 1 ("General Security Concepts")
      - Dominio 2 ("Threats, Vulnerabilities, and Mitigations")
      - Dominio 3 ("Security Architecture")
      - Dominio 4 ("Security Operations")
      - Dominio 5 ("Security Program Management and Oversight")
      Rispondi in modo professionale ed estremamente dettagliato, usando la terminologia e le metriche ufficiali CompTIA (es. SLE = AV * EF, ALE = SLE * ARO, RTO, RPO, MTD, MTBF, MTTR, MOU, MOA, BPA, SLA, NDA, SOW, Due Care vs Due Diligence, SIEM, SOAR, EDR, XDR, Vulnerability Management, Incident Response, Backup Strategies, Threat Actors, Mitigations, ecc.).
      Le tue spiegazioni devono essere rigorose, strutturate, ed orientate a superare l'esame. 
      Usa sempre la lingua italiana per rispondere. Includi tabelle comparative markdown se l'utente chiede chiarimenti tra concetti simili. Non divagare. Mantieni un tono calmo, assertivo ed estremamente competente.`;

      const prompt = `Conversazione precedente:
${conversationHistory}

Nuova domanda dello studente: ${message}

Fornisci una risposta approfondita, CompTIA-style, focalizzandoti sulle best practice ufficiali.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.3,
        },
      });

      res.json({ reply: response.text });
    } catch (error: any) {
      console.error("Error calling Gemini API:", error);
      res.status(500).json({ error: "Errore durante la generazione della risposta dell'assistente AI: " + error.message });
    }
  });

  // Remediation endpoint to generate 3 hard questions based on weak topics
  app.post("/api/quiz/remediation", async (req, res) => {
    try {
      const { weakTopics } = req.body;
      if (!weakTopics || !Array.isArray(weakTopics) || weakTopics.length === 0) {
        return res.status(400).json({ error: "Weak topics are required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(400).json({ error: "GEMINI_API_KEY non configurata" });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const topicsString = weakTopics.join(", ");
      const systemInstruction = `Sei un Senior Cybersecurity Trainer e Question Writer certificato CompTIA, specializzato nel creare esami "High-Stakes". 
      Il tuo compito è scrivere esattamente 3 domande d'esame inedite di livello ANALISI (estremamente difficili, equivalenti alle domande d'esame più complesse) specificamente sui seguenti argomenti deboli riscontrati nello studente: ${topicsString}.
      
      Regole mandatorie per la scrittura delle domande:
      1. Livello ANALISI: Ogni domanda deve presentare uno scenario aziendale complesso (minimo 3-4 righe) con vincoli contrastanti (es. limiti di budget, legacy systems, normative come GDPR/PCI-DSS/HIPAA, carenza di personale o breach recenti).
      2. No definizioni dirette: La risposta non deve testare se l'utente conosce un termine, ma la sua applicazione corretta in uno scenario critico.
      3. Il "Best" Dilemma: Tutte e 4 le opzioni devono essere plausibili o tecnicamente corrette in senso generale, ma solo una deve essere la "MIGLIORE" (BEST) o la "PRIMA" (FIRST) da compiere secondo le best practice CompTIA.
      4. Struttura dell'Output: Devi rispondere in formato JSON valido, aderente allo schema richiesto.
      5. Scrivi tutto l'output in lingua ITALIANA.`;

      const prompt = `Genera esattamente 3 domande d'esame di livello ANALISI in formato JSON sugli argomenti deboli: ${topicsString}.
      Ogni domanda deve focalizzarsi sull'applicazione in contesti complessi e contenere una spiegazione approfondita (CompTIA-style) che spieghi perché la risposta corretta è la BEST e perché le altre tre sono distrattori plausibili ma sub-ottimali.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              questions: {
                type: Type.ARRAY,
                description: "Lista di 3 domande di recupero",
                items: {
                  type: Type.OBJECT,
                  required: ["id", "topic", "level", "scenario", "question", "options", "answerIndex", "explanation"],
                  properties: {
                    id: { type: Type.INTEGER, description: "ID univoco sequenziale" },
                    topic: { type: Type.STRING, description: "Argomento specifico del Dominio 1, 2, 3, 4 o 5" },
                    level: { type: Type.STRING, description: "ANALISI" },
                    scenario: { type: Type.STRING, description: "Scenario aziendale dettagliato con vincoli (minimo 3-4 righe)" },
                    question: { type: Type.STRING, description: "La domanda specifica, focalizzata su BEST, MOST o FIRST" },
                    options: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description: "Esattamente 4 opzioni plausibili, di cui solo una è la migliore"
                    },
                    answerIndex: { type: Type.INTEGER, description: "Indice a base 0 della risposta corretta (0-3)" },
                    explanation: { type: Type.STRING, description: "Spiegazione estremamente approfondita e formattata con markdown che dettaglia il motivo della scelta migliore rispetto a ciascun distrattore." }
                  }
                }
              }
            },
            required: ["questions"]
          }
        }
      });

      if (!response.text) {
        throw new Error("No response text from Gemini");
      }

      const result = JSON.parse(response.text.trim());
      res.json(result);
    } catch (error: any) {
      console.error("Error generating remediation questions:", error);
      res.status(500).json({ error: "Errore durante la generazione delle domande adattive di recupero: " + error.message });
    }
  });

  // Vite development integration or production static files
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
