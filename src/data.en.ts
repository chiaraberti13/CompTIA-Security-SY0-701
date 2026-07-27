/**
 * English translation layer for the study content.
 *
 * Translations are stored as *keyed overrides* rather than full parallel
 * arrays: the localizer (see `localizedData.ts`) clones the Italian source
 * structure and overlays any English fields present here, falling back to the
 * Italian text for anything not yet translated. This keeps translation purely
 * additive and guarantees the app never breaks while coverage grows.
 *
 *  - GROUP_EN     : keyed by the Italian TopicGroup `title`
 *  - SUBTOPIC_EN  : keyed by the subtopic `checklistKey`
 *  - QUESTION_EN  : keyed by the numeric question `id`
 */

export interface GroupOverride {
  title?: string;
  description?: string;
}

export interface SubtopicOverride {
  name?: string;
  definition?: string;
  details?: string;
  examTip?: string;
  keyFormulas?: string[];
  comparativeTable?: { headers: string[]; rows: string[][] };
}

export interface QuestionOverride {
  topic?: string;
  scenario?: string;
  question?: string;
  options?: string[];
  explanation?: string;
}

/* ------------------------------------------------------------------ *
 * Topic-group titles & descriptions
 * ------------------------------------------------------------------ */

export const GROUP_EN: Record<string, GroupOverride> = {
  // Domain 1
  "1. Fondamentali d'Esame": {
    title: "1. Exam Fundamentals",
    description: "Core principles and cornerstone concepts of information security.",
  },
  "2. Security Controls": {
    title: "2. Security Controls",
    description: "Categories of security controls based on how they are implemented.",
  },
  "3. Control Types": {
    title: "3. Control Types",
    description: "Functional classification of controls based on the timing of the action.",
  },
  "4. Change Management": {
    title: "4. Change Management",
    description: "Standardized processes to introduce production changes without outages or gaps.",
  },
  "5. Cryptography": {
    title: "5. Cryptography",
    description: "Algorithms, cryptographic mechanisms and Public Key Infrastructure (PKI).",
  },
  "6. Physical Security": {
    title: "6. Physical Security",
    description: "Physical controls to protect facilities and tangible assets.",
  },
  "7. Deception Technologies": {
    title: "7. Deception Technologies",
    description: "Deception-based technologies to detect attackers early.",
  },
  "8. Identity & Access Control Models (Obj 1.3 & 3.3)": {
    title: "8. Identity & Access Control Models (Obj 1.3 & 3.3)",
    description: "Identity management, multi-factor authentication, directory services and access authorization models.",
  },

  // Domain 2
  "1. Threat Actors (Obj 2.1)": {
    title: "1. Threat Actors (Obj 2.1)",
    description: "The parties responsible for cyber threats, their capabilities and resources.",
  },
  "2. Motivations (Obj 2.1)": {
    title: "2. Motivations (Obj 2.1)",
    description: "The psychological, strategic and economic drivers behind cyberattacks.",
  },
  "3. Threat Vectors & Attack Surfaces (Obj 2.2)": {
    title: "3. Threat Vectors & Attack Surfaces (Obj 2.2)",
    description: "The channels or paths used by threat actors to access or compromise a system.",
  },
  "4. Malware (Obj 2.4)": {
    title: "4. Malware (Obj 2.4)",
    description: "The different types of malicious software designed to compromise systems and data.",
  },
  "5. Social Engineering (Obj 2.4)": {
    title: "5. Social Engineering (Obj 2.4)",
    description: "Psychological manipulation techniques used to trick people into taking actions or revealing sensitive data.",
  },
  "6. Password Attacks (Obj 2.4)": {
    title: "6. Password Attacks (Obj 2.4)",
    description: "The methods used to breach credential-based authentication systems.",
  },
  "7. Network, Wireless & App Attacks (Obj 2.4)": {
    title: "7. Network, Wireless & App Attacks (Obj 2.4)",
    description: "Attacks aimed at data transmission channels, network protocols and web applications.",
  },
  "8. Vulnerabilities (Obj 2.3)": {
    title: "8. Vulnerabilities (Obj 2.3)",
    description: "Identification, assessment and cataloging of weaknesses in computer systems.",
  },
  "9. Mitigations (Obj 2.5)": {
    title: "9. Mitigations (Obj 2.5)",
    description: "Techniques and countermeasures to reduce risk, shrink the attack surface and counter threats.",
  },
  "10. Threat Intelligence (Obj 2.1 & 2.2)": {
    title: "10. Threat Intelligence (Obj 2.1 & 2.2)",
    description: "Threat information sources, OSINT, information sharing and dark web intelligence.",
  },

  // Domain 3
  "1. Cloud (Obj 3.1)": {
    title: "1. Cloud (Obj 3.1)",
    description: "Cloud service and deployment models, the split of security responsibilities and data governance.",
  },
  "2. Network Security (Obj 3.2)": {
    title: "2. Network Security (Obj 3.2)",
    description: "Network security architecture and protocols, encrypted tunneling and centralized access management.",
  },
  "3. Firewalls (Obj 3.3)": {
    title: "3. Firewalls (Obj 3.3)",
    description: "Appliances for inspecting and filtering traffic at various layers of the OSI model.",
  },
  "4. Data Security (Obj 3.2 & 3.3)": {
    title: "4. Data Security (Obj 3.2 & 3.3)",
    description: "Protecting digital information across its various states, and encryption and obfuscation techniques.",
  },
  "5. Resilience & Recovery (Obj 3.4)": {
    title: "5. Resilience & Recovery (Obj 3.4)",
    description: "Business continuity systems, load and power redundancy, backup methods and alternate sites.",
  },
  "6. Dispositivi Speciali & IoT (Obj 3.2)": {
    title: "6. Specialized Devices & IoT (Obj 3.2)",
    description: "Security in industrial, embedded and specialized systems and Internet of Things networks.",
  },
  "7. PBQ Dominio 3 Scenarios": {
    title: "7. Domain 3 PBQ Scenarios",
    description: "Practical scenarios and Performance-Based Questions on Domain 3.",
  },

  // Domain 4
  "1. Hardening (Obj 4.1)": {
    title: "1. Hardening (Obj 4.1)",
    description: "Process of hardening systems, networks, servers, mobile devices and IoT to reduce the attack surface.",
  },
  "2. Mobile Security (Obj 4.1)": {
    title: "2. Mobile Security (Obj 4.1)",
    description: "Organizational provisioning models and centralized control tools for mobile devices.",
  },
  "3. Vulnerability Management (Obj 4.2)": {
    title: "3. Vulnerability Management (Obj 4.2)",
    description: "Methods to identify, classify, assess and mitigate security weaknesses.",
  },
  "4. Monitoring Tools (Obj 4.2)": {
    title: "4. Monitoring Tools (Obj 4.2)",
    description: "Systems, protocols and agents to analyze flows, centralize events and prevent information exfiltration.",
  },
  "5. Log Analysis (Obj 4.2)": {
    title: "5. Log Analysis (Obj 4.2)",
    description: "Technical analysis and forensic interpretation of logs generated by various devices and defensive appliances.",
  },
  "6. Incident Response (Obj 4.3)": {
    title: "6. Incident Response (Obj 4.3)",
    description: "Structured phases of the security incident management lifecycle to limit damage.",
  },
  "7. Digital Forensics (Obj 4.3)": {
    title: "7. Digital Forensics (Obj 4.3)",
    description: "Preservation, acquisition and scientific analysis of digital evidence to ensure its legal admissibility.",
  },
  "8. Automation (Obj 4.4)": {
    title: "8. Automation (Obj 4.4)",
    description: "Integration, scripting and orchestration of coordinated defensive responses.",
  },
  "9. PBQ Dominio 4 (Obj 4.2 / 4.3)": {
    title: "9. Domain 4 PBQ (Obj 4.2 / 4.3)",
    description: "Practical scenarios and Performance-Based Questions on log triage, investigation and host isolation.",
  },

  // Domain 5
  "1. Governance": {
    title: "1. Governance",
    description: "The decision-making structure, organizational oversight and alignment of security goals with business strategy.",
  },
  "2. Policies": {
    title: "2. Policies",
    description: "The documentary foundations of security: policies, standards, procedures and lifecycle and change management.",
  },
  "3. Risk Management": {
    title: "3. Risk Management",
    description: "Methods to identify, quantify and document the organization's risk exposure.",
  },
  "4. Risk Responses": {
    title: "4. Risk Responses",
    description: "The four fundamental strategies established by best practice to handle identified risk.",
  },
  "5. Compliance": {
    title: "5. Compliance",
    description: "Meeting legal requirements, protecting privacy and exercising professional responsibility.",
  },
  "6. Third Party Risk": {
    title: "6. Third Party Risk",
    description: "Managing and mitigating risks arising from vendors, business partners and supply chains.",
  },
  "7. Agreements": {
    title: "7. Agreements",
    description: "Types of formal agreements and contracts governing operational and commercial relationships with third parties.",
  },
  "8. Audits": {
    title: "8. Audits",
    description: "Formal, independent processes to evaluate the effectiveness of security controls and the organization's defensive posture.",
  },
  "9. Security Awareness": {
    title: "9. Security Awareness",
    description: "The human factor as the organization's first line of defense through ongoing training and exercise programs.",
  },
  "10. Secure Deconstruction & Disposal": {
    title: "10. Secure Deconstruction & Disposal",
    description: "Methods for the secure disposal of hardware, elimination of sensitive data and physical destruction of media.",
  },
};

/* ------------------------------------------------------------------ *
 * Subtopic overrides (keyed by checklistKey)
 * Populated in batches. Anything missing falls back to Italian.
 * ------------------------------------------------------------------ */

export const SUBTOPIC_EN: Record<string, SubtopicOverride> = {
  // (populated incrementally — see translation batches)
};

/* ------------------------------------------------------------------ *
 * Question overrides (keyed by numeric id)
 * Populated in batches. Anything missing falls back to Italian.
 * ------------------------------------------------------------------ */

export const QUESTION_EN: Record<number, QuestionOverride> = {
  // (populated incrementally — see translation batches)
};
