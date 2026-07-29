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
  /* ---------------- Domain 1 · Group 1: Exam Fundamentals ---------------- */
  CIATriad: {
    name: "CIA Triad",
    definition: "The three fundamental pillars of information security: Confidentiality, Integrity and Availability.",
    details: "A deep understanding of the three key concepts:\n* **Confidentiality:** Preventing unauthorized access to data. Enabling techniques: data encryption (AES/RSA), access control lists (ACL), multi-factor authentication (MFA) and role-based access control.\n* **Integrity:** Ensuring that data is not modified, corrupted or destroyed in an unauthorized or accidental way throughout its lifecycle. Enabling techniques: hash functions (SHA-256), digital signatures, checksums and version control.\n* **Availability:** Ensuring constant, timely and reliable access to systems, networks and information for all legitimate and authorized users. Enabling techniques: hardware redundancy (RAID, redundant power supplies), server clustering, geographic backups, uninterruptible power supplies (UPS) and automatic failover plans.\n\n* **Focused Mini-Example:** In a banking application, **Confidentiality** prevents other customers from reading your account balance; **Integrity** prevents malware from altering the amount of a transfer in transit from €10 to €10,000; **Availability** ensures the home-banking app stays up and running even under a DDoS attack thanks to dedicated network filters.",
    examTip: "In a ransomware attack, the attack compromises Availability (by encrypting files), but potentially also Integrity and Confidentiality in a multi-extortion scenario.",
  },
  AAAFramework: {
    name: "AAA",
    definition: "Authentication, Authorization, and Accounting: the standard framework for access control.",
    details: "The AAA framework governs the entire lifecycle of identity and security-permission management:\n* **Authentication:** The process of verifying the identity claimed by a subject (user, service or device). It relies on classic factors: something you know (password, PIN), something you have (smart card, OTP token), something you are (biometrics), where you are (geolocation) or what you do.\n* **Authorization:** The process of determining which specific privileges, permissions and resources are granted to the previously authenticated identity (e.g. read-only access, write permissions, script execution).\n* **Accounting (Audit/Traceability):** The chronological and systematic recording of all activities performed by users within the systems (e.g. who logged in, which files they modified, what time they logged out) inside protected audit logs.\n\n* **Focused Mini-Example:** When an employee swipes their RFID badge to enter a secured research office, the reader verifies that the badge is valid (**Authentication**), unlocks the door only if the user belongs to the senior researchers group (**Authorization**), and records the exact time of entry and the employee ID in the central electronic log (**Accounting**).",
    examTip: "Logs must be write-protected and stored separately to guarantee the effectiveness of Accounting.",
  },
  NonRepudiation: {
    name: "Non-Repudiation",
    definition: "The impossibility for a user to deny having sent a message or performed a specific action.",
    details: "Non-repudiation is guaranteed by combining asymmetric cryptography and hashing to create unbreakable digital signatures:\n* **Digital Signature:** The sender generates the hash of a document and encrypts it using their own private key (secret and exclusive). Anyone who receives the document can decrypt the signature using the sender's corresponding public key.\n* **Trust Infrastructure:** Because only the owner possesses their own private key (assuming it is protected), they cannot deny having signed the document or transmitted the transaction.\n\n* **Focused Mini-Example:** An investor buys a high-risk stock package by pressing the button on their PIN-protected hardware token. If the stock collapses and they suffer losses, the investor cannot sue the bank claiming they never sent that order, because the transaction was digitally signed with their unique and personal private key, guaranteeing non-repudiation.",
    examTip: "Symmetric cryptography does not provide non-repudiation because the key is shared between the parties.",
  },
  GapAnalysis: {
    name: "Gap Analysis",
    definition: "Assessment of the gap between the current security posture and the ideal or required state.",
    details: "A formal analysis used to compare the organization's current security posture against international standards or legal regulatory requirements:\n* **Systematic Comparison:** The current state (As-Is state) is analyzed against recognized standards (e.g. ISO 27001, NIST CSF, PCI DSS) or internal corporate policies (To-Be state).\n* **Identification of Gaps:** It highlights missing, ineffective or partially implemented controls.\n* **Strategic Planning:** It provides a prioritized and structured roadmap to guide budgets and cybersecurity investments.\n\n* **Focused Mini-Example:** A medical clinic wants to align with the HIPAA privacy standard. It performs a Gap Analysis and discovers that all the nurses' computers stay active without a password after 5 minutes of inactivity. Having identified this 'gap', the clinic mandates via policy an automatic screen lock after 60 seconds.",
    examTip: "Gap Analysis is performed before defining the budget or a new strategic security plan.",
  },
  ZeroTrustIntro: {
    name: "Zero Trust",
    definition: "The modern security framework based on the principle 'Never Trust, Always Verify'.",
    details: "Zero Trust forever eliminates the obsolete concept of implicit trust based simply on the physical network perimeter:\n* **Continuous Verification:** Every access request must be explicitly authenticated, authorized and encrypted before access is granted, regardless of whether the request comes from inside or outside the office.\n* **Least Privilege:** Restricting the access of users and systems exclusively to the minimum level needed to perform the active task at that specific moment.\n* **Assume Breach:** Designing, monitoring and defending the infrastructure on the assumption that attackers have already infiltrated the internal network.\n\n* **Focused Mini-Example:** An employee sits at their desk in the office and turns on the company PC. Even though they are connected to the internal wired network, to access the finance department's shared folder they must pass an MFA check and the system verifies that their operating system has all active security patches installed.",
    examTip: "In Zero Trust, every access request must be authenticated, authorized and encrypted before access is granted.",
  },
  PolicyDrivenAccessControl: {
    name: "Policy-driven access control",
    definition: "An access control model in which permissions are evaluated dynamically in real time based on predefined rules and policies.",
    details: "Characteristics of Policy-driven Access Control:\n* **Dynamic Evaluation:** Unlike static role-based models (RBAC), it evaluates multiple factors (identity, device, location, time) against centralized corporate policies.\n* **Flexibility and Granularity:** It allows precise rules to be defined (e.g. 'Allow access to sensitive customer data only if the user is an authorized account manager, connects through the corporate VPN and uses a compliant device').\n* **Zero Trust Integration:** It represents the decision-making pillar of the Control Plane (managed by the Policy Engine and Policy Administrator).",
    examTip: "In the Zero Trust architecture, Policy-driven Access Control is the Control Plane mechanism that makes access decisions by examining a set of corporate rules and policies before authorizing the connection.",
  },
  ControlPlaneZTA: {
    name: "Control Plane",
    definition: "The logical area of the Zero Trust architecture that hosts the decision engines responsible for receiving, evaluating and authorizing or denying access requests.",
    details: "The role of the Control Plane in Zero Trust:\n* **Decision-Making Brain:** It receives connection requests and gathers context information (threat telemetry, identity, device state).\n* **Key Components:** It contains the **Policy Engine** (which evaluates the request against policies) and the **Policy Administrator** (which issues the decision and orders the Data Plane to establish or close the connection).\n* **Isolation:** The control and decision functions are logically separated from the actual transit of data.",
    examTip: "The Control Plane acts as the decision-making brain of the Zero Trust architecture: it receives the access request, compares it with the policies and decides whether to authorize the session.",
  },
  ImplicitTrustZones: {
    name: "Implicit trust zones",
    definition: "Network areas or logical segments where all devices inside are considered inherently secure and trusted by default.",
    details: "The concept of Implicit Trust Zones:\n* **Classic Perimeter Model:** It is based on the 'castle-and-moat' idea, where the outside is hostile but the inside is completely secure.\n* **Key Vulnerability:** If an attacker manages to breach the outer perimeter (e.g. through phishing or malware), they gain unlimited and uncontrolled access to the entire internal zone (lateral movement).\n* **Elimination in Zero Trust:** The Zero Trust philosophy aims to abolish or minimize implicit trust zones to the absolute minimum, requiring continuous verification for every single transaction or request.",
    examTip: "Implicit trust zones are typical of the old perimeter security models. Zero Trust aims to abolish them through continuous verification and microsegmentation.",
  },
  DataPlaneZTA: {
    name: "Data Plane",
    definition: "The logical area of the network architecture responsible for the actual transport, transit and routing of users' data packets.",
    details: "How the Data Plane works:\n* **Operational Arm:** It does not make autonomous decisions. It simply materially applies the block or allow commands received from the Control Plane.\n* **Communication Channel:** Once the Control Plane has validated the handshake and approved the request, it establishes a tunnel or protected connection to route data traffic between the client and the resource.\n* **Efficiency:** Optimized for very high-speed processing of data packets (Layer 2, Layer 3, Layer 4).",
    examTip: "The Data Plane handles the actual transport of users' data packets once the session has been authorized and allowed by the Control Plane.",
  },

  /* ---------------- Domain 1 · Group 2: Security Controls ---------------- */
  TechnicalControls: {
    name: "Technical",
    definition: "Security controls implemented through hardware, software or firmware solutions.",
    details: "Also called logical controls, they use IT and network technologies to enforce the organization's security requirements:\n* **Firewalls and IDS/IPS:** Network filters and systems that automatically block threats.\n* **Data Encryption:** Encryption of information in transit (TLS) and at rest (AES).\n* **Identity Management:** Single Sign-On (SSO) systems, multi-factor authentication (MFA) agents and digital biometric access control.\n* **Endpoint Agents:** Antivirus, antimalware and Endpoint Detection and Response (EDR).\n\n* **Focused Mini-Example:** Enabling a rule on a corporate firewall that automatically detects and blocks unencrypted traffic on TCP port 80, forcing the use of HTTPS port 443, is a technical control.",
    examTip: "Any security measure that acts directly on computer systems and is managed by code or physical network devices is a technical control.",
  },
  OperationalControls: {
    name: "Operational",
    definition: "Security controls focused on human aspects, personnel and day-to-day procedures.",
    details: "They are carried out operationally by people (users, administrators or security teams) in compliance with corporate requirements:\n* **Security Awareness Training:** Periodic awareness courses and phishing attack simulations aimed at employees.\n* **Exercises and Simulations:** Testing of Disaster Recovery plans, incident response simulations and backup restores.\n* **Log Review:** The manual or supervised human activity of examining and inspecting system logs looking for anomalies.\n* **Physical-Operational Management:** Hardware inventory control, physical labeling of servers and secure shredding of paper documents.\n\n* **Focused Mini-Example:** An office employee receives a phone call from someone claiming to be from IT support asking for their password. Thanks to the social engineering training they received (operational control), the employee refuses to share the password and reports the incident to the SOC.",
    examTip: "User training (Awareness Training) is classified as an Operational control, not a Managerial one.",
  },
  ManagerialControls: {
    name: "Managerial",
    definition: "Administrative controls focused on governance, risk management and organizational policies.",
    details: "They guide the strategic and administrative direction of corporate security, providing a formal framework of rules and assessments:\n* **Risk Assessments:** Formalized processes for identifying, quantitatively or qualitatively analyzing and treating corporate risks.\n* **Security Policies:** Official documents drafted and signed by management (e.g. Acceptable Use Policy - AUP, password policy, clean desk policy).\n* **Vendor Risk Management:** Security audit and inspection procedures applied to third parties and external suppliers.\n* **Change Management Policy:** Formal definition of the rules and boards (CAB) responsible for approving infrastructure changes.\n\n* **Focused Mini-Example:** The drafting and approval by company directors of a formal 'Acceptable Use Policy' (AUP) document, which establishes the permitted websites and prohibits the use of file-sharing software on work computers, is a managerial control.",
    examTip: "Risk Assessments and written policies always represent Managerial/Administrative controls on the exam.",
  },
  PhysicalControls: {
    name: "Physical",
    definition: "Tangible, real-world security measures designed to prevent unauthorized physical access or protect against structural damage.",
    details: "They protect the real perimeter of the premises, the offices, the employees and the data center hardware:\n* **Barriers and Boundaries:** Metal fences, perimeter walls, security gates and street bollards.\n* **Physical Access Control:** Mechanical locks, RFID electronic badges, biometric readers (iris, fingerprints) and entrance turnstiles.\n* **Environmental Security:** Automatic fire-suppression systems, smoke sensors, data center air conditioners and emergency generators.\n* **Real Surveillance:** Armed security guards on duty and CCTV camera systems positioned at access points.\n\n* **Focused Mini-Example:** A reinforced metal grille with a security padlock mounted in front of the window of the room housing the centralized backup servers is a physical control to prevent theft of storage media.",
    examTip: "A padlock on a server rack is a physical control on the exam, essential for preventing theft or tampering of hardware.",
  },

  /* ---------------- Domain 1 · Group 3: Control Types ---------------- */
  PreventiveControl: {
    name: "Preventive",
    definition: "Controls designed to proactively prevent a security breach or incident from occurring.",
    details: "They intervene before the harmful event can materialize or begin:\n* **System Hardening:** Disabling unused services, closing open ports and applying patches.\n* **Security Barriers:** Network firewalls that block illicit traffic, MFA systems to prevent abusive access.\n* **Physical Measures:** Armored locks that prevent physical intrusion into the premises.\n* **Staff Training:** Educating employees prevents human error or falling into social engineering traps.\n\n* **Focused Mini-Example:** Implementing automatic lockout of Active Directory accounts after 5 consecutive wrong password attempts is a preventive control that stops brute-force or dictionary attacks in their tracks.",
    examTip: "System hardening (e.g. disabling unused ports) is a key preventive control on the exam.",
  },
  DetectiveControl: {
    name: "Detective",
    definition: "Controls aimed at identifying and recording a security incident while it is occurring or after it has happened.",
    details: "They provide visibility and promptly alert the security staff to ongoing anomalies:\n* **Detection Systems:** Intrusion Detection Systems (IDS) that analyze attack patterns on the network.\n* **Log Auditing:** SIEM systems that collect logs from servers to correlate suspicious events retroactively.\n* **Physical Surveillance:** Volumetric motion sensors, volumetric anti-intrusion alarms and CCTV cameras.\n\n* **Focused Mini-Example:** An IDS installed on the corporate network detects a port scan coming from an internal IP and sends an immediate critical alert to the SOC team's dashboard, highlighting a possible reconnaissance attempt by an attacker.",
    examTip: "An IDS detects threats and raises alerts (Detective), while an IPS also acts actively to block them (Preventive).",
  },
  CorrectiveControl: {
    name: "Corrective",
    definition: "Controls implemented to remedy the damage caused by an incident and restore the systems to their original secure state.",
    details: "They act after the incident has occurred and aim to minimize its impact by working on recovery:\n* **Data Restoration:** Periodic backups (offline, cloud, incremental) to remedy data loss or encryption.\n* **Threat Removal:** Antivirus software that isolates and quarantines a detected malware.\n* **Patching Procedures:** Emergency updating of the systems exploited by the attacker to permanently close the flaw.\n* **Business Continuity:** Activation of Incident Response and disaster recovery plans to restart services on secondary nodes.\n\n* **Focused Mini-Example:** Following data corruption on a CRM server caused by a careless database administrator, the security team starts restoring the entire database from the last secure backup taken three hours earlier (corrective control).",
    examTip: "Restoring data from an offline or cloud backup after corruption is the most typical example of a corrective control.",
  },
  DeterrentControl: {
    name: "Deterrent",
    definition: "Controls designed to psychologically discourage potential attackers from attempting a security breach.",
    details: "They aim to influence the attacker's decision and perception, highlighting the high likelihood of capture or failure:\n* **Visible Signage:** Signs indicating 'Area Under 24/7 Video Surveillance' or 'Protected Property'.\n* **Physical Presence:** Cameras clearly exposed at the entrance, perimeter floodlights activated by sensors at night.\n* **Digital Banners:** Legal messages displayed before SSH or RDP login warning of criminal prosecution in case of unauthorized access.\n\n* **Focused Mini-Example:** A hacker intending to physically infiltrate a company's parking lots to piggyback notices an entrance barrier with a visibly staffed booth manned by a security guard and decides to give up the attempt.",
    examTip: "Deterrent controls do not physically block the attack, but reduce the likelihood that it will be attempted.",
  },
  CompensatingControl: {
    name: "Compensating",
    definition: "Alternative or fallback controls introduced to mitigate risk when a primary control is not feasible.",
    details: "They are used to compensate for structural shortcomings, budget limits or insurmountable technical constraints:\n* **Legacy Isolation:** An obsolete medical server does not support security patches (primary control); it is isolated in a dedicated VLAN protected by restrictive firewalls (compensating control).\n* **Alternative MFA:** If an employee cannot use a smartphone to receive the OTP, they are assigned an alternative physical hardware token.\n* **Substitute Administrative Controls:** Dual paper-based approval if a secure digital workflow is temporarily unavailable.\n\n* **Focused Mini-Example:** A bank branch has safes whose automatic timed locking mechanisms are broken. As a temporary compensating control, the bank requires that manual opening of the safes require the physical presence and simultaneous signature of two branch managers.",
    examTip: "Compensating controls must provide a level of protection equivalent to that of the missing original control.",
  },
  DirectiveControl: {
    name: "Directive",
    definition: "Administrative controls designed to direct, prescribe or mandate specific compliant behaviors.",
    details: "They are based on formal policies, written procedures and mandatory compliance imposed by the company or by law:\n* **Acceptable Use Policy (AUP):** Internal regulation on the correct use of corporate IT devices.\n* **Standard Operating Procedures (SOP):** Mandatory operational technical manuals for securely configuring servers or networks.\n* **External Regulations and Standards:** Non-negotiable regulatory compliance requirements, such as GDPR for personal data or PCI-DSS for cards.\n\n* **Focused Mini-Example:** At the entrance of the company headquarters, a clearly visible sign requires all employees and visitors to wear their identification badge on their chest clearly visible throughout working hours.",
    examTip: "Directive controls define the rules of the game; violating such controls usually results in disciplinary sanctions.",
  },

  /* ---------------- Domain 1 · Group 4: Change Management ---------------- */
  ApprovalProcess: {
    name: "Approval Process",
    definition: "The structured formal approval flow required before any change is implemented in production.",
    details: "It guarantees traceability, governance and formal control over all infrastructure and application changes:\n* **RFC Submission:** Every change must be documented through a formal Request for Change (RFC), describing its reasons and steps.\n* **Change Advisory Board (CAB):** A multidisciplinary committee made up of network experts, system administrators, security and business staff that evaluates the request.\n* **Authorizing Signature:** No change can be applied to the real perimeter without prior formal and documented approval.\n\n* **Focused Mini-Example:** A network engineer wants to change the routing rules on the central router. They fill out an RFC describing the activity; the CAB meets, assesses the impact on the business, and grants formal authorization to proceed over the weekend.",
    examTip: "The Change Advisory Board (CAB) is responsible for facilitating the formal evaluation and approval, not for implementing the change.",
  },
  ImpactAnalysis: {
    name: "Impact Analysis",
    definition: "The systematic assessment of the potential risks, disruptions and dependencies that a change could cause.",
    details: "It is conducted in the preliminary phase of the RFC to map the side effects of the update:\n* **Hardware/Software Interdependencies:** Analyzing which systems, databases, ports or legacy applications depend on the resource we are modifying.\n* **Security and Compliance:** Assessing whether introducing the new version alters the active security controls or compromises compliance (e.g. HIPAA, GDPR).\n* **Operational Downtime:** Estimating the out-of-service time and the impact on customers.\n\n* **Focused Mini-Example:** Before updating the version of Java on the production server of the corporate ERP, a system administrator simulates the update in staging and discovers that the new compiler crashes the shipping API. The installation is suspended, preventing an operational block of commercial deliveries.",
    examTip: "Impact analysis prevents cascading incidents due to a failure to understand system dependencies.",
  },
  BackoutPlan: {
    name: "Backout Plan",
    definition: "A detailed procedure to quickly undo a failed change and restore the system to its previous secure state.",
    details: "Commonly called a Rollback Plan, it must be documented before receiving approval from the CAB:\n* **Pre-Activity Snapshots and Backups:** Making complete copies of the system state an instant before starting maintenance.\n* **Technical Revert Steps:** The steps and commands needed to uninstall the patch or restore the old configurations.\n* **Rollback Triggers:** Precise rules based on time (e.g. 'if the update takes more than 2 hours') or on detected anomalies (e.g. 'if database latency exceeds 500ms') that decree stopping the work and starting the restore.\n\n* **Focused Mini-Example:** An administrator updates the firmware of the corporate firewall. On reboot, VPN traffic does not work. Following the Backout Plan, the administrator instantly loads the old firmware saved on the secondary memory bank and restores connectivity for remote workers in three minutes.",
    examTip: "A Change Management plan is NEVER considered complete on the exam without a tested and documented backout plan.",
  },
  MaintenanceWindow: {
    name: "Maintenance Window",
    definition: "A pre-established, agreed-upon time interval during which changes or maintenance are permitted.",
    details: "It schedules lower-impact activities to preserve operational availability agreements (SLA):\n* **Smart Scheduling:** Maintenance is carried out at times when system usage is minimal (e.g. at night, on weekends or during company closures).\n* **Advance Communication:** Warning employees and external customers well in advance of possible downtime or performance degradation.\n* **SLA Maximization:** It allows updates to be completed without impacting the contractual corporate uptime index.\n\n* **Focused Mini-Example:** A fintech platform establishes that all updates to the transaction servers must occur exclusively within the agreed maintenance window, namely Sunday morning from 02:00 to 05:00, minimizing the impact on merchants.",
    examTip: "Even emergency patches should ideally be coordinated, but regularly scheduled changes belong strictly to maintenance windows.",
  },
  VersionControl: {
    name: "Version Control",
    definition: "The formal management and tracking of the different versions of software, configurations or security policies.",
    details: "It guarantees the integrity, audit trail and secure recovery of source code and infrastructure configuration files:\n* **Centralized Versioning (e.g. Git):** Records every single change commit in an immutable log.\n* **Author Traceability:** It stores the identity of the operator who made the change, the reasons and the exact date of the modification.\n* **Instant Revert:** The ability to compare and instantly restore a specific past configuration should the current code introduce bugs or security vulnerabilities.\n\n* **Focused Mini-Example:** A security technician modifies the AWS cloud configuration script (Terraform). The code has a syntax error that blocks the creation of the VMs. Using Git version control, the technician runs a `git revert` to the last working version, restoring the automated deployment in a few seconds.",
    examTip: "Version control is essential for software integrity and prevents untracked changes or accidental overwrites.",
  },

  /* ---------------- Domain 1 · Group 5: Cryptography ---------------- */
  SymmetricEncryption: {
    name: "Symmetric Encryption",
    definition: "Encryption algorithms that use a single shared key to both encrypt and decrypt data.",
    details: "Main characteristics of symmetric-key cryptography:\n* **Computational Efficiency:** Extremely fast. It requires few computing resources, making it ideal for encrypting large volumes of static data.\n* **Distribution Problem:** Both parties must securely exchange the secret key in advance before they can communicate, a difficult process over public channels.\n* **Common Algorithms:** **AES (Advanced Encryption Standard - the global reference standard)**, 3DES (obsolete), Blowfish, Twofish and ChaCha20.\n\n* **Focused Mini-Example:** To protect users' personal data stored on a corporate hard disk, the administrator enables BitLocker. The system encrypts the entire disk at rest using the symmetric AES-256 algorithm: accessing the data requires the correct symmetric key entered at boot.",
    examTip: "AES-256 is the symmetric algorithm recommended worldwide for protecting data at rest.",
  },
  AsymmetricEncryption: {
    name: "Asymmetric Encryption",
    definition: "Encryption algorithms that use a pair of mathematically related keys: a public key and a private key.",
    details: "It solves the key-exchange problem by exploiting unique, one-way mathematical relationships:\n* **Public Key:** Can be freely shared with anyone. It is used to encrypt data intended for the owner or to verify their digital signature.\n* **Private Key:** Must be kept strictly secret by the owner. It is used to decrypt data encrypted with the corresponding public key or to generate digital signatures.\n* **Computational Slowness:** It requires significantly more processing power than symmetric cryptography, which is why it is used mainly to sign or to exchange the initial symmetric session key.\n* **Common Algorithms:** **RSA**, Diffie-Hellman (DH - for key exchange) and ECC (Elliptic Curve Cryptography - for high performance on mobile devices).\n\n* **Focused Mini-Example:** If Alice wants to send her social security number to Bob securely over the internet, she encrypts it using Bob's public key. From that moment, only Bob can decrypt and read the message using his own secret private key.",
    examTip: "Asymmetric cryptography solves the key-distribution problem but is much slower than symmetric cryptography.",
  },
  PKIFundamentals: {
    name: "PKI",
    definition: "Public Key Infrastructure: the set of roles, policies, hardware, software and procedures needed to manage digital certificates.",
    details: "It provides the distributed trust structure to enable asymmetric cryptography on the internet:\n* **Certificate Authority (CA):** The trusted third-party entity that validates identities and digitally signs certificates (e.g. DigiCert, Let's Encrypt).\n* **Registration Authority (RA):** An auxiliary entity responsible for verifying the validity of the data and the identity of the applicant before the CA actually issues the certificate.\n* **CRL and OCSP:** Dynamic mechanisms to check whether a digital certificate has been revoked before its natural expiration (e.g. due to compromise of the private key).\n\n* **Focused Mini-Example:** When a browser connects to `https://bank.com`, it verifies through PKI that the SSL certificate presented by the server was signed by a trusted CA (e.g. Let's Encrypt) present in the operating system's root certificate database, ensuring the site is not a fraudulent clone.",
    examTip: "If a browser receives a certificate not signed by a trusted CA (or by a root CA present in its store), it will show a security warning.",
  },
  RootOfTrustConcept: {
    name: "Root of Trust",
    definition: "The primary, inherently trusted source within a cryptographic or hardware system, on which the entire security chain rests.",
    details: "Characteristics of the Root of Trust (RoT):\n* **Security Anchor:** It represents the unverifiable starting point (since it is inherently trusted) from which trust for all other components is derived.\n* **Hardware Implementation:** Often implemented through a physical, protected cryptographic chip (such as an HSM or a TPM chip) that stores the primary root cryptographic keys.\n* **Chain of Trust:** It allows the integrity of the bootloader, operating system and digitally signed applications to be validated during startup (Secure Boot).\n\n* **Focused Mini-Example:** During startup, a server's UEFI firmware reads the trusted root cryptographic key embedded in the hardware TPM chip (Root of Trust) to validate the bootloader and make sure it has not been infected by pre-boot malware.",
    examTip: "The Root of Trust is the unbreakable, inherently secure foundation of the entire cryptographic and hardware-boot chain of trust.",
  },
  CertificateAuthorityConcept: {
    name: "Certificate Authority",
    definition: "A trusted third-party entity responsible for issuing, cryptographically signing, managing and revoking digital certificates.",
    details: "The role of the Certificate Authority (CA) in a PKI:\n* **Identity Certification:** It associates a real identity (a web domain, a company or a user) with a public key through a digitally signed certificate.\n* **Public Trust:** The root certificates of the most authoritative CAs (e.g. Let's Encrypt, DigiCert) are preinstalled in operating systems and browsers worldwide.\n* **Trust Hierarchy:** Made up of a Root CA and one or more Subordinate CAs (Intermediate CAs) to limit the risks of compromising the main root certificate.\n\n* **Focused Mini-Example:** The company Sweet as Thyme buys an SSL certificate from DigiCert (an accredited CA). DigiCert verifies the company's identity and digitally signs its public key. From that moment, all browsers recognize the site as trusted and secure through HTTPS.",
    examTip: "The Certificate Authority is the trusted organization that digitally signs a subject's public key to certify its identity to the outside world.",
  },
  RegistrationAuthorityConcept: {
    name: "Registration Authority",
    definition: "An auxiliary entity within a PKI responsible for verifying the identity of applicants before the CA issues the certificate.",
    details: "The function of the Registration Authority (RA):\n* **Control Filter:** It acts as a reception and validation office on behalf of the CA, examining documents and making sure that the applicant is actually entitled to the claimed domain or identity.\n* **No Signing Power:** The RA does not sign or directly issue the final digital certificates; it only approves or rejects requests, forwarding approved ones to the CA for cryptographic generation.\n* **Operational Efficiency:** It relieves the CA of the bureaucratic burden of verifying applicants' documents.\n\n* **Focused Mini-Example:** A company requests an Extended Validation (EV) certificate. The Registration Authority (RA) performs rigorous legal and corporate checks to verify that the company really exists. Once the data is validated, it forwards the approval to the CA, which technically issues the signed certificate.",
    examTip: "The RA verifies and validates the identity of the certificate applicant, while only the CA has the technical authority to sign and issue it.",
  },
  PublicKeyConcept: {
    name: "Public Key",
    definition: "The component of the asymmetric key pair that is made public and distributed to encrypt or verify signatures.",
    details: "Primary properties and uses of the public key:\n* **Free Distribution:** It can be placed in public directories, on websites or sent in the clear.\n* **Confidentiality Guarantor:** It is used by anyone who wants to send an encrypted message to the key's owner.\n* **Integrity/Authenticity Guarantor:** It is used to decrypt and verify the validity of a digital signature created with the corresponding private key.\n\n* **Focused Mini-Example:** A citizen downloads the official public key of the Ministry of the Interior from the government portal in order to encrypt and transmit a confidential report securely, knowing that only the ministry's systems will be able to decrypt it.",
    examTip: "Anyone can access your public key; this in no way compromises the security of the communication.",
  },
  PrivateKeyConcept: {
    name: "Private Key",
    definition: "The secret component of the asymmetric key pair that must be guarded by the owner to decrypt or sign.",
    details: "It represents the user's absolute security anchor within asymmetric cryptography:\n* **Absolute Secrecy:** It must NEVER be shared, exported or transmitted over external networks. Usually stored in protected hardware chips (e.g. smart card, TPM).\n* **Decryption:** It is the only key able to reverse the computation and decrypt the information encrypted with the corresponding public key.\n* **Signature Generation:** It allows the owner to apply their own immutable digital signature to documents.\n\n* **Focused Mini-Example:** A system administrator keeps the cloud server's administration private key on a password-protected hardware dongle. If the administrator lost the dongle and the private key were stolen, the attacker could decrypt all of the company's session data traffic.",
    examTip: "In a security exam, any scenario in which a private key is exported or shared represents a serious violation.",
  },
  CSRConcept: {
    name: "CSR",
    definition: "Certificate Signing Request: a block of encoded text generated by the certificate applicant and sent to a CA.",
    details: "The formal file needed to start the issuance of an official SSL/TLS certificate:\n* **Key Content:** It includes the applicant's **public key** (generated locally on the server together with the private key) and the applicant's identifying details (e.g. Common Name - CN: `www.company.com`, locality, organization).\n* **Control Signature:** The CSR file is signed with the applicant's private key to prove to the CA that they actually control the asymmetric key set created.\n\n* **Focused Mini-Example:** A webmaster generates a cryptographic key pair locally on the IIS web server. They then generate the CSR file containing only the public key and upload it to the DigiCert portal to request the issuance of the official certificate, keeping the private key safe on the server.",
    examTip: "The private key is never included or sent to the CA inside the CSR file.",
  },
  CertificatesConcept: {
    name: "Certificates",
    definition: "Digital documents that securely bind a subject's identity to their public key through the signature of a trusted CA.",
    details: "Digital attestations conforming to the X.509 standard that serve to prevent impersonation attacks on the web:\n* **Internal Elements:** Identity of the holder (Subject, CN, SAN), holder's public key, digital signature of the Certificate Authority, supported encryption algorithms and validity dates.\n* **Use:** They provide mathematical certainty that a given server or web portal actually belongs to the legitimate organization and not to a fraudster.\n\n* **Focused Mini-Example:** When you access a government institution's site, the browser inspects the digital certificate sent by the server, verifying that the typed URL exactly matches the Common Name written in the certificate and that the Let's Encrypt CA signature is valid.",
    examTip: "An expired certificate or one with a mismatched domain name (Mismatched Name) will cause an immediate block of the client's connection.",
  },
  WildcardCertificates: {
    name: "Wildcard Certificates",
    definition: "A flexible type of digital certificate that protects a main domain and all its first-level subdomains.",
    details: "It optimizes certificate management in infrastructures with multiple web servers:\n* **Issuance Syntax:** It is issued using an asterisk before the main domain (e.g. `*.company.com`).\n* **Extended Coverage:** It simultaneously protects `mail.company.com`, `shop.company.com`, `portal.company.com` and any other first-level subdomain.\n* **Security Disadvantage:** If the private key associated with the wildcard certificate is compromised, all the associated subdomains become vulnerable to interception simultaneously.\n\n* **Focused Mini-Example:** A university with hundreds of departments buys a wildcard certificate `*.university.edu`. This allows secure HTTPS to be deployed on `engineering.university.edu` and `medicine.university.edu` using a single certificate file and saving significant purchase costs.",
    examTip: "Wildcard certificates cover only one subdomain level (e.g. they do not cover `sub.mail.company.com` if issued for `*.company.com`).",
  },
  HashingConcept: {
    name: "Hashing",
    definition: "The application of a one-way mathematical function to transform input data into a fixed-length output string.",
    details: "It guarantees the absolute Integrity of information and is characterized by rigorous mathematical properties:\n* **One-Way:** It is impossible to trace back to the original plaintext starting from the resulting hash.\n* **Deterministic:** The same input will always, mathematically, produce the same identical hash.\n* **Avalanche Effect:** A minimal variation in the input (e.g. changing a single character or space) completely upends the resulting hash.\n* **Collision Resistance:** It is impossible to find two different inputs that produce the same hash value.\n* **Common Algorithms:** **SHA-256 (SHA-2)**, SHA-3, MD5 (vulnerable and deprecated), SHA-1 (deprecated).\n\n* **Focused Mini-Example:** A user downloads a Linux operating system ISO file from an alternative mirror server. To make sure the file is intact and has not been modified by a hacker, they compute the SHA-256 hash of the file locally and compare it with the official hash published on the official Linux site.",
    examTip: "Hashing guarantees the Integrity of data, not Confidentiality.",
  },
  SaltingConcept: {
    name: "Salting",
    definition: "The practice of adding a unique random string of characters (salt) to the password before hashing.",
    details: "It protects corporate credential databases from massive offline computational attacks:\n* **Function of the Salt:** It prevents identical passwords chosen by different users ('Password123') from producing the same hash visible in the database.\n* **Rainbow Table Prevention:** It makes rainbow tables completely unusable, i.e. huge precomputed lists of common password combinations and their standard hashes.\n\n* **Focused Mini-Example:** Two colleagues choose the same password `Sun2026`. At save time, the system assigns a random salt `Xy3Z` to the first user and `K9pL` to the second. The hashes stored in the database will be completely different, preventing an attacker from realizing they have the same password.",
    examTip: "Salting increases the cryptographic robustness of password databases against offline brute-forcing attacks.",
  },
  DigitalSignaturesConcept: {
    name: "Digital Signatures",
    definition: "An asymmetric cryptographic mechanism used to verify the authenticity and integrity of a document.",
    details: "It simultaneously provides three key guarantees: sender Authenticity, data Integrity and Non-Repudiation:\n* **Creation Phase (Sender):** Computes the hash of the message and encrypts it using their own **private key** (this creates the digital signature).\n* **Verification Phase (Recipient):** Receives the message and the signature. Decrypts the signature using the **sender's public key** to extract the original hash. Recomputes the hash of the received message and compares them: if they match, the document is intact and actually comes from the sender.\n\n* **Focused Mini-Example:** A developer releases a software update. They digitally sign the executable file using the company's private key. When the user installs the software, the operating system decrypts the signature using the developer's public key, verifying that the software has not been infected with malware along the way.",
    examTip: "Remember well for the exam: to create a signature you use your own PRIVATE key; to verify it you use the sender's PUBLIC key.",
  },
  TPMHardware: {
    name: "TPM",
    definition: "Trusted Platform Module: a dedicated microchip, compliant with security standards, soldered onto the motherboard.",
    details: "A local hardware cryptographic module integrated into individual devices (laptops, servers):\n* **Secure Storage:** It securely and inaccessibly stores cryptographic keys (e.g. the BitLocker hard disk unlock key).\n* **Integrity Attestation:** It measures the state of the firmware and boot files to ensure the system has not been altered before startup (Secure Boot function).\n* **Random Number Generator:** It provides pure hardware entropy for cryptographic purposes.\n\n* **Focused Mini-Example:** A consultant loses their corporate laptop on a train. Anyone who finds the computer and tries to extract the hard disk to read its data will not be able to decrypt it, because the BitLocker cryptographic keys are stored and physically anchored inside the TPM chip soldered onto the laptop's motherboard.",
    examTip: "The TPM is a local hardware module integrated into individual client or server devices.",
  },
  HSMHardware: {
    name: "HSM",
    definition: "Hardware Security Module: a dedicated, enterprise-grade physical device for the protection and secure processing of cryptographic keys.",
    details: "High-performance, maximally physically protected devices intended for centralized enterprise environments:\n* **Physical Structure:** It comes as a standalone network rack module or a PCIe expansion card for servers.\n* **High Performance:** Designed to perform thousands of cryptographic operations per second (e.g. signing certificates for a Certificate Authority or processing banking transactions).\n* **Anti-Tamper Sensors (Tamper-Responsive):** It includes physical temperature, pressure or breach sensors that cause the instant and total destruction of all stored keys if the metal shell is opened or forced.\n\n* **Focused Mini-Example:** A central bank manages an armored network HSM to digitally sign all interbank payment flows. If a thief tries to physically dismount the HSM device from the rack to steal its secrets, the microchip instantly destroys the internal private keys.",
    examTip: "If the exam scenario requires enterprise protection and clustered certificate signing, the correct answer is the HSM.",
  },
  KeyEscrowConcept: {
    name: "Key Escrow",
    definition: "A security arrangement in which cryptographic keys are deposited and kept by a trusted authorized third party.",
    details: "It guarantees the recoverability of encrypted corporate data in the event of loss or emergencies:\n* **Fiduciary Backup Function:** Employees' private file-encryption keys are securely deposited in a centralized archive managed by an internal or external third party.\n* **Data Loss Prevention:** It prevents the sudden dismissal of an employee or the loss of a hardware smart card from rendering the encrypted corporate data lost and unreadable forever.\n* **Strict Release Controls:** Recovering the keys requires the joint approval of multiple guarantor figures (e.g. the two-man principle).\n\n* **Focused Mini-Example:** An engineer who encrypted the industrial designs of a new patent suddenly resigns, deleting their passwords. Company management, through a formal Key Escrow process, asks the fiduciary committee to recover the backup copy of the private key in order to decrypt and continue developing the designs.",
    examTip: "Key Escrow ensures that encrypted corporate data remains recoverable in emergency scenarios.",
  },
  BlockCipherConcept: {
    name: "Block cipher",
    definition: "A type of symmetric encryption that splits the plaintext into fixed-size blocks before encrypting them.",
    details: "Characteristics of block ciphers:\n* **Fixed Size:** They process data in fixed-size byte blocks (e.g. 128 bits for AES, 64 bits for DES).\n* **Padding:** If the last block of data is incomplete, the algorithm applies padding to reach the required fixed size.\n* **Modes of Operation:** They define how to encrypt multiple blocks (e.g. ECB, CBC, GCM).\n* **Examples:** AES, DES, 3DES, Blowfish.",
    examTip: "Block ciphers require padding algorithms to complete the last block of data if it is not of the required fixed size.",
  },
  AES256Concept: {
    name: "AES",
    definition: "Advanced Encryption Standard: a symmetric block encryption algorithm standardized by the US government, widely considered secure globally.",
    details: "Characteristics of AES-256:\n* **Military-Grade Security:** It uses 128-, 192- or 256-bit keys to encrypt 128-bit data blocks. To date, no practical or brute-force attacks capable of breaking it are known.\n* **Reference Standard:** It is the recommended algorithm for encrypting sensitive data at rest (Data at Rest).\n* **Broad Support:** Natively integrated into almost all modern processors through dedicated hardware instructions (AES-NI) for exceptional performance.",
    examTip: "AES-256 is the default and recommended choice to guarantee the confidentiality of data at rest and corporate databases.",
  },
  StreamCipherConcept: {
    name: "Stream cipher",
    definition: "A type of symmetric encryption that encrypts the plaintext one bit or byte at a time in real time.",
    details: "Characteristics of stream ciphers:\n* **Real-Time Efficiency:** They encrypt data continuously (one bit or byte at a time), making them ideal for audio/video streams or low-latency network communications.\n* **Keystream:** They combine the plaintext with a pseudo-random key stream (keystream) through an XOR operation.\n* **Examples:** RC4 (obsolete and vulnerable), ChaCha20.",
    examTip: "Stream ciphers are ideal for real-time data transmission or continuous streams where the total length of the message is not known in advance.",
  },
  KeyStretchingConcept: {
    name: "Key Stretching",
    definition: "A cryptographic technique designed to make passwords more resistant to offline brute-force attacks by increasing the computational cost of hashing.",
    details: "Mechanism and algorithms of Key Stretching:\n* **Repeated Iteration:** It consists of recursively performing thousands of hashing and salting cycles on a password (e.g. 10,000 iterations).\n* **Intentional Slowdown:** It increases the time needed to compute each single hash from nanoseconds to fractions of a second (e.g. 100ms). For a legitimate user the delay is imperceptible, but for an attacker trying billions of combinations offline via GPU, cracking becomes mathematically impractical.\n* **Common Algorithms:** **PBKDF2**, **bcrypt**, **scrypt**, **Argon2**.",
    examTip: "Key Stretching intentionally increases the effort and computational time required to compute a hash, countering offline GPU brute-force attacks.",
  },
  BlockchainConcept: {
    name: "Blockchain",
    definition: "A distributed, immutable and decentralized digital ledger in which transactions are grouped into cryptographically linked blocks.",
    details: "Characteristics of Blockchain technology:\n* **Decentralization:** Maintained by a peer-to-peer (P2P) network in which all nodes hold a matching copy of the ledger, eliminating the need for a central trusted authority.\n* **Immutability:** Each block contains the hash of the previous block, creating an unbreakable cryptographic chain. Modifying a single piece of data would require recomputing all subsequent blocks on more than 50% of the network's nodes.\n* **Transparency and Consensus:** Transactions are public, traceable and validated through consensus algorithms (e.g. Proof of Work, Proof of Stake).",
    examTip: "Blockchain guarantees the integrity and permanent immutability of records distributed over a peer-to-peer network without depending on trusted third parties.",
  },
  CodeSigningConcept: {
    name: "Code signing",
    definition: "The process of digitally signing scripts and executables through asymmetric cryptographic certificates to guarantee their authenticity and integrity.",
    details: "Code signing allows software developers to digitally sign their programs or updates before distribution:\n* **Authenticity:** The operating system or the end user's client verifies the signature using the manufacturer's public key, guaranteeing the trusted origin of the resource.\n* **Integrity:** It ensures that the file has not been altered, damaged or tampered with by third parties (for example by injecting malware) along the distribution chain.\n\n* **Focused Mini-Example:** A software company releases a critical security patch. Before distributing it, it signs the executable with its corporate private key (**Code signing**). When customers' systems download the update, they verify the cryptographic signature with the public key to validate the legitimate origin before running the automatic installation.",
    examTip: "Code signing ensures the trusted origin (authenticity) and the absence of unauthorized alterations (integrity) of software or updates during distribution.",
  },

  /* ---------------- Domain 1 · Group 6: Physical Security ---------------- */
  PhysicalBadge: {
    name: "Badge",
    definition: "Smart cards and physical ID cards used to authenticate individuals and control access.",
    details: "Tangible cards and credentials intended to regulate physical movements:\n* **Integrated Technologies:** NFC (Near Field Communication) and RFID allow armored doors to be opened by bringing the card close to the reader.\n* **Visual Identification:** They usually show the employee's photo, name and department for visual checks by guards.\n* **MFA Integration:** They can be combined with the entry of a PIN on the door's numeric keypad.\n\n* **Focused Mini-Example:** To enter the protected software development wing, an employee must bring their RFID badge close to the wall reader: the access control system unlocks the electric lock and records the entry in the audit log.",
    examTip: "The combination of a badge (something you have) with a PIN code on the door reader (something you know) constitutes physical two-factor authentication.",
  },
  SecurityGuards: {
    name: "Security Guards",
    definition: "Human personnel employed to watch over the perimeter, manage entrances and respond to physical anomalies.",
    details: "They represent the human element of on-site guarding and adaptive emergency response:\n* **Adaptive Factor:** Unlike automatic systems, guards can assess unusual threats, suspect anomalous behavior and make dynamic decisions.\n* **Visual Deterrence:** The visible presence of security personnel drastically reduces the risk of break-in attempts.\n* **Active Response:** Intervening to physically stop an intruder or provide help in case of fire.\n\n* **Focused Mini-Example:** A security guard on duty at the main entrance of the data center notices two people dressed as maintenance workers trying to sneak in by walking right behind an authorized employee (piggybacking). The guard stops them by requesting credentials and thwarting the intrusion.",
    examTip: "On the exam, security guards are classified as both a Physical and an Operational control.",
  },
  PhysicalCameras: {
    name: "Cameras",
    definition: "Video surveillance systems (CCTV) strategically positioned to monitor and record activity.",
    details: "Electronic systems for the continuous visual capture of sensitive areas:\n* **Investigative Function (Detective):** It allows events that occurred after a breach to be visually reviewed and analyzed.\n* **Active Deterrence:** Clearly visible cameras positioned along the fences discourage thieves.\n* **Modern Video Analytics:** Integrated algorithms able to automatically alert the SOC in case of perimeter climbing.\n\n* **Focused Mini-Example:** The morning after some monitors are stolen from the office, the security team examines the visual recordings of the internal CCTV cameras, identifying the exact time of the theft and the faces of those responsible to provide to law enforcement.",
    examTip: "CCTV is a classic investigative/detective control on the exam.",
  },
  PhysicalFencing: {
    name: "Fencing",
    definition: "Physical perimeter barriers designed to delimit the organization's property and hinder casual access.",
    details: "The first line of physical defense against intrusions coming from outside:\n* **Sizing:** The height of the fence determines the degree of security (e.g. 2.4-meter fences with barbed wire discourage almost all intruders).\n* **Vibration Sensors:** They can integrate microphonic cables to detect and alert in case of cutting or climbing attempts.\n\n* **Focused Mini-Example:** A chemical storage industrial plant is surrounded by a 3-meter-high galvanized steel fence topped with concertina barbed wire, which prevents the casual passage and intrusion of curious onlookers or malicious individuals.",
    examTip: "Fences act as a preventive physical control by clearly delimiting the boundaries of the property.",
  },
  PhysicalBollards: {
    name: "Bollards",
    definition: "Heavy metal or concrete street deterrents, installed to prevent vehicles from crashing into buildings.",
    details: "Very high-strength mechanical protection measures intended to stop vehicles:\n* **Stopping Resistance:** Designed to absorb the kinetic impact energy of cars or trucks launched at high speed.\n* **Ram-Raiding Prevention:** They prevent intentional break-in attempts aimed at knocking down entrances or windows to penetrate inside the structures.\n\n* **Focused Mini-Example:** In front of the glass doors on the ground floor of a prestigious bank data center, sturdy steel bollards filled with concrete and buried deep are installed, making it physically impossible for hostile cars or trucks to approach.",
    examTip: "If the exam scenario describes the threat of a vehicle trying to smash through the building's physical entrances, bollards are the correct countermeasure.",
  },
  PhysicalSensors: {
    name: "Sensors",
    definition: "Electronic devices designed to detect physical or environmental changes within a protected area.",
    details: "Sensors positioned to ensure the environmental stability and anti-intrusion protection of critical areas:\n* **Intrusion Detection:** Volumetric infrared (PIR) sensors or magnetic contacts positioned on the hinges of doors and windows.\n* **Environmental Detection:** Humidity sensors, smoke sensors, rapid-rise heat detectors and flood sensors under raised floors.\n\n* **Focused Mini-Example:** Inside the server room, under the raised floor where the electrical cables run, a flood sensor is installed. In the event of a water leak from the air conditioning system, the sensor sends an immediate emergency-shutdown notification before short circuits occur.",
    examTip: "Environmental sensors in the server room are essential for preserving the Availability of the hardware by mitigating damage from flooding or overheating.",
  },
  HVACPhysical: {
    name: "HVAC",
    definition: "Heating, Ventilation, and Air Conditioning: physical systems used to regulate temperature, humidity and air-purity parameters.",
    details: "The role of HVAC systems in data center security:\n* **Overheating Prevention:** Modern servers generate enormous amounts of heat; if the room temperature exceeds tolerated limits, the systems shut down automatically for thermal protection (violating availability) or suffer permanent hardware failures.\n* **Humidity Control:**\n  - *Too low:* Favors the buildup of static electricity, causing electrostatic discharges (ESD) that are lethal to memory chips and CPUs.\n  - *Too high:* Causes water condensation on electronic circuits, resulting in short circuits.\n* **Air Filtration:** Removes dust and particles that could clog the servers' cooling fans.\n* **Fire Containment:** HVAC systems must integrate with smoke and heat detectors to shut down instantly in case of fire, avoiding feeding the flames by supplying oxygen.",
    examTip: "In a data center, maintaining controlled humidity and temperature through HVAC systems is vital to prevent electrostatic discharges (ESD, caused by too-low humidity) and short circuits (caused by condensation from too-high humidity).",
  },

  /* ---------------- Domain 1 · Group 7: Deception Technologies ---------------- */
  HoneypotDeception: {
    name: "Honeypot",
    definition: "A single decoy computer system, server or resource configured to appear vulnerable and attract attackers.",
    details: "An isolated digital decoy whose purpose is to attract scans and active exploits:\n* **Zero Legitimate Traffic:** Because the machine hosts no real corporate service, any interaction, ping or login attempt is considered hostile by definition.\n* **Attack Study:** It allows the tactics and zero-days used by hackers to be safely captured and analyzed without compromising the real infrastructure.\n\n* **Focused Mini-Example:** The security team configures an obsolete virtual machine with an open, unpatched RDP port, fictitiously naming it 'Invoices_Server_2025'. Any hacker scanning the network will notice the vulnerable machine and attempt the attack, allowing the SOC team to block the threat's IP on the real network.",
    examTip: "The Honeypot is a deception technology that also acts as a detective control.",
  },
  HoneynetDeception: {
    name: "Honeynet",
    definition: "A complete decoy network made up of multiple simulated systems, databases and fake services.",
    details: "An entire simulated, fictitious ecosystem for an in-depth study of intruder behavior:\n* **High Interaction:** Made up of fake web servers, simulated databases and virtual routers that cooperate with each other.\n* **Lateral Movement Analysis:** It allows study of how the attacker moves within the network, which passwords they try to crack and which local exploration tools they download.\n\n* **Focused Mini-Example:** A telecommunications company deploys a fictitious subnet that mimics the control network of a power plant. The attackers, believing they have penetrated the real infrastructure, spend days scanning the fake industrial PLCs, while the researchers record their every single move and command.",
    examTip: "Honeynets capture an attacker's entire behavior at the network level.",
  },
  HoneyfileDeception: {
    name: "Honeyfile",
    definition: "Decoy files with enticing names containing bogus information, placed to detect unauthorized access.",
    details: "Decoy documents placed in shared folders or corporate file servers:\n* **Enticing Names:** Named so as to attract the curiosity of malicious insiders or hackers (e.g. `server_passwords.txt` or `salary_bonuses_2026.xlsx`).\n* **Silent Alarm:** Equipped with sensors or software scripts; if the file is opened, copied or downloaded, it instantly generates a very high-priority alert in the SIEM indicating the compromised account.\n\n* **Focused Mini-Example:** An administrator places the file `secret_projects.docx` in an accessible folder of the corporate cloud. The file contains only fictitious text but includes a web tracking pixel: when an unauthorized user opens the file, the pixel sends a silent HTTP request that immediately alerts the security team.",
    examTip: "Opening a honeyfile is an extremely precise indicator of compromise (IoC) because no legitimate user has any reason to open it.",
  },
  HoneytokenDeception: {
    name: "Honeytoken",
    definition: "Special fictitious data spread across systems to track and detect exfiltration.",
    details: "Fictitious data elements and strings inserted inside real databases or source code:\n* **Data Leak Detection:** Fictitious email addresses inserted into the customer database; if these addresses start receiving spam, the company has proof that the database has been exfiltrated.\n* **Credential Use Detection:** Fictitious API keys inserted into software code on GitHub; if someone tries to use them to query the cloud, an instant alert is triggered identifying the attacker's origin.\n\n* **Focused Mini-Example:** A developer inserts a fictitious, disabled AWS API key into public source code. A hacker's bot scans GitHub, finds the key and tries to use it to launch EC2 instances: the AWS CloudTrail system detects the attempt to use the fictitious honeytoken key and sends a real-time compromise alert.",
    examTip: "Honeytokens help detect data breaches even when the data leaves your network's perimeter control entirely.",
  },

  /* ---------------- Domain 1 · Group 8: Identity & Access Control Models ---------------- */
  AuthenticationConcept_New: {
    name: "Authentication",
    definition: "The process of verifying the identity claimed by a user, computer or IT service attempting to access a system.",
    details: "Details on Authentication:\n* **Purpose:** It answers the question: *'Who are you?'* or *'Are you who you claim to be?'*.\n* **Authentication Factors:** It relies on the validation of one or more factors, including passwords (something you know), tokens/smart cards (something you have) or biometric data (something you are).\n* **Practical Example:** Entering a username and password and passing a request for an OTP code sent via SMS to access the work email inbox.",
    examTip: "Authentication is always the first phase of the AAA framework; it validates and certifies a claimed identity before evaluating which access rights to assign to it.",
  },
  AuthorizationConcept_New: {
    name: "Authorization",
    definition: "The process of granting or denying specific access rights, permissions and privileges to an identity that has already been successfully authenticated.",
    details: "Details on Authorization:\n* **Purpose:** It answers the question: *'What are you allowed to do?'*.\n* **Enforcement Mechanisms:** It is controlled through access control lists (ACL), roles (RBAC), or dynamic attributes (ABAC) defined by the administrator.\n* **Practical Example:** An authenticated HR employee tries to open the payroll folder: the server examines the Windows ACLs and authorizes the access because the employee belongs to the 'HR Department' group.",
    examTip: "Authorization occurs exclusively *after* the user has been successfully authenticated; it defines and enforces the user's operational boundaries in a granular way.",
  },
  AccountingConcept_New: {
    name: "Accounting",
    definition: "The process of chronologically recording and monitoring all the activities carried out by an identity within the computer system.",
    details: "Details on Accounting:\n* **Purpose:** It answers the question: *'What did you do and when?'*.\n* **Application:** It collects detailed telemetry and logs (e.g. commands typed, files modified, login/logout times, IP addresses used).\n* **Non-Repudiation:** It ensures that a user cannot deny having performed a specific action (e.g. deleting a database), because there is an immutable, signed audit log.\n* **Practical Example:** A SIEM system records that the user 'j.smith' logged in at 03:00 in the morning and exported a 5 GB customer report, leaving an irrefutable audit trail.",
    examTip: "Accounting provides the traceability of actions needed for forensic analysis and to establish individual responsibility (Non-Repudiation) in the event of security incidents.",
  },
  AccessControlModels: {
    name: "Access Control Models & Directory Services",
    definition: "The authorization models (RBAC, ABAC, MAC, DAC) and the centralized directory services for Identity and Access Management.",
    details: "They define the mathematical/administrative logic and protocols through which to grant access permissions to information:\n* **RBAC (Role-Based Access Control):** Permissions are associated with corporate roles or job functions (e.g. 'Administration', 'HR') and inherited by users enrolled in the group, reducing the buildup of privileges (Privilege Creep).\n* **ABAC (Attribute-Based Access Control):** Extremely flexible contextual decisions based on the attributes of the subject (e.g. department), the resource (e.g. file sensitivity), the action (e.g. read) and the environment (e.g. working hours, VPN IP).\n* **MAC (Mandatory Access Control):** A rigid, military-style model based on classification labels (e.g. 'Top Secret', 'Confidential') and clearance levels associated with users. Permissions are centralized and cannot be modified by individual file owners.\n* **DAC (Discretionary Access Control):** A flexible model in which the original owner of the file (Owner) has full discretion to grant or revoke read/write permissions to any other user on the system.\n* **Directory Services:**\n  - **Active Directory (AD):** Microsoft's proprietary directory service for the centralized management of machines, identities, group policies (GPO) and domain permissions.\n  - **LDAP:** Open standardized protocol for querying and authenticating users within a directory service.\n\n* **Focused Mini-Example:** In a hospital, the front-desk staff belong to the 'Administrative' group (**RBAC**) and can enter patients' personal data, but only doctors can read clinical diagnoses. If a doctor tries to access the records from home outside working hours, the attribute-based system (**ABAC**) blocks the attempt by evaluating the time and the IP address.",
    examTip: "On the exam, memorize this very useful mnemonic scheme:\n* **DAC** → the owner **D**ecides.\n* **MAC** → **M**ilitary (mandatory classifications).\n* **RBAC** → **R**ole.\n* **ABAC** → **A**ttributes.\n\nAlso, remember that the MAC model is the most secure and restrictive because it is based on labels imposed by the system administrator, while DAC is the most permissive because it leaves control of the file in the hands of the individual creator.",
  },
  RBACConcept: {
    name: "RBAC (Role-Based Access Control)",
    definition: "Access control based on the roles defined within the organization (the user's Role).",
    details: "Characteristics of **RBAC (Role-Based Access Control)**:\n* **Association with Roles:** Permissions are not assigned to individual users, but to organizational roles or job functions (e.g. 'HR', 'Finance', 'Administrator'). Users inherit the permissions associated with the roles they belong to.\n* **Administrative Simplification:** It greatly reduces the complexity of managing permissions in medium-to-large organizations.\n* **Privilege Creep Prevention:** When an employee changes department or job function, it is enough to remove them from the old group and add them to the new one, eliminating obsolete privileges.\n\n* **Focused Mini-Example:** In a hospital, an employee is hired as a doctor. They are added to the 'Doctors' Active Directory group, instantly inheriting access to patients' clinical records, without the administrator having to configure individual permissions.",
    examTip: "On the exam, always associate **RBAC** with the **user's Role** (Role/Job function) and with inheritance through groups.",
  },
  RuleBasedAccessControlConcept: {
    name: "RuBAC (or Rule-Based Access Control)",
    definition: "Access control based on fixed rules and restrictions defined by the system (System-defined rules).",
    details: "Characteristics of **RuBAC (or Rule-Based Access Control)**:\n* **System Rules:** Access authorizations are determined by a set of logical rules predefined in the system, regardless of the specific identity or role of the user.\n* **Common Factors:** Typically based on objective parameters such as permitted access hours (e.g. Mon-Fri from 9:00 to 18:00), geolocation or source IP addresses.\n* **Difference from RBAC:** While RBAC focuses on the subject's job function (Who you are/What you do), RuBAC evaluates logical filters and objective constraints (Which rules apply).\n\n* **Focused Mini-Example:** A network administrator sets a rule on the firewall and VPN server whereby administrative SSH connections are allowed exclusively from the central IT office's IP range and only during standard working hours.",
    examTip: "On the exam, remember that **RuBAC / Rule-Based** refers to **System-defined rules** (e.g. IP filters, time schedules), not to corporate groups or roles.",
  },
  AttributeBasedConcept: {
    name: "ABAC (Attribute-Based Access Control)",
    definition: "Dynamic access control based on the attributes associated with the user, the resource and the environmental context (Attributes of user, resource and context).",
    details: "Characteristics of **ABAC (Attribute-Based Access Control)**:\n* **Dynamic Evaluation:** It is the most flexible and granular model. It allows complex authorization policies to be written by evaluating combinations of attributes in real time.\n* **Three main categories of attributes:**\n  - *Subject (User) Attributes:* Department, clearance level, job title, seniority.\n  - *Resource (Object) Attributes:* File name, owning department, confidentiality level, data type.\n  - *Environmental (Context) Attributes:* Current working hours, GPS geolocation, IP address, device update status.\n\n* **Focused Mini-Example:** A corporate policy establishes that: 'A doctor (subject) can modify a medical record (resource) with a Confidential classification only if they access through an encrypted corporate tablet (context) and the request comes from the hospital's Wi-Fi IP (context)'.",
    examTip: "Remember that **ABAC** is based on **Attributes of user, resource and context** (Subject, Object, Environment), offering the maximum granularity and contextual flexibility.",
  },
  DACConcept: {
    name: "DAC (Discretionary Access Control)",
    definition: "Access control in which the owner of the resource arbitrarily determines who can access it (Resource owner).",
    details: "Characteristics of **DAC (Discretionary Access Control)**:\n* **Owner's Discretion:** The creator of a resource (file, directory, database) is its owner and has the exclusive, discretionary power to grant, modify or revoke read, write or execute permissions to other users or groups.\n* **Flexibility and Simplicity:** Extremely common in consumer operating systems (folder-sharing permissions in Windows NTFS or chmod in Unix/Linux).\n* **Security Risk:** Because security is decentralized, the negligence of a single user (or malware running with their permissions) can easily expose confidential data by sharing it with unauthorized parties.\n\n* **Focused Mini-Example:** A marketing manager creates a folder on their desktop and uses Windows sharing settings to grant read-only access to two colleagues on their team, excluding all other users.",
    examTip: "On the exam, **DAC** is associated with the discretion of the **Resource owner** (Data Owner). It is the most permissive and decentralized model.",
  },
  MACConcept: {
    name: "MAC (Mandatory Access Control)",
    definition: "Rigid access control based on centralized security classifications and clearance levels (Security classifications).",
    details: "Characteristics of **MAC (Mandatory Access Control)**:\n* **Centralized Classifications:** A highly secure model of military origin. Subjects and objects receive centralized security labels imposed by the administrator (e.g. 'Public', 'Confidential', 'Secret', 'Top Secret').\n* **No Discretion:** Users and file owners CANNOT decide who accesses the data or modify the security labels of the files they create.\n* **Comparison Rule:** Access is authorized only if the user's clearance level is greater than or equal to the file's security label, and the user has a real work-related need (Need to Know).\n\n* **Focused Mini-Example:** An army analyst with a 'Secret' access level tries to open a document labeled 'Top Secret'. Even though the analyst may have taken part in drafting it, the secure operating system (e.g. SELinux with a MAC policy) immediately blocks access.",
    examTip: "On the exam, **MAC** is the most restrictive and secure model, based exclusively on **Security classifications** and clearances established centrally.",
  },
  LeastPrivilegeConcept: {
    name: "Least privilege",
    definition: "The fundamental security principle whereby every user receives only the permissions and privileges strictly necessary to perform their job.",
    details: "How the principle of Least Privilege works:\n* **Reduced Attack Surface:** It prevents the compromise of a single ordinary user account from giving the attacker administrative root privileges over the entire network.\n* **Damage Limitation:** It minimizes the impact of accidental human error or deliberate malicious actions by insiders.\n* **Rigorous Application:** It requires the separation of accounts (e.g. an administrator uses a normal account to read email and an admin account only when they need to make critical changes).\n\n* **Focused Mini-Example:** A network technician accesses the mail server to read their own email using an ordinary account without administrator privileges. When they need to update the mail server's security rules, they log out and log in with a separate, time-limited administrator account, reducing exposure.",
    examTip: "Least Privilege proactively limits the damage resulting from compromised accounts or insider threats by ensuring that every user receives only the strictly necessary permissions.",
  },
  NeedToKnowConcept: {
    name: "Need to Know",
    definition: "A security principle whereby, even with the correct authorizations, one accesses only the information needed to perform one's specific job.",
    details: "How the Need to Know principle works:\n* **Granular Control:** It provides that possessing a security level (e.g. a clearance) does not automatically give access to all the data at that level.\n* **Work-Related Necessity:** The user must demonstrate a specific operational need in order to consult a given sensitive file or document.\n* **Countering Data Leaks:** It prevents the mass consultation of confidential archives by personnel not directly involved in the relevant projects.",
    examTip: "Need to Know means that, even with the correct authorizations (e.g. clearance), the user accesses only the information needed for their specific job.",
  },
  JustInTimeConcept: {
    name: "Just-In-Time (JIT)",
    definition: "A security approach in which administrative and elevated privileges are granted only for the time strictly necessary to perform the task.",
    details: "Characteristics of Just-In-Time (JIT) access:\n* **Temporary Privileges:** Users normally operate with low-privilege accounts. When the need to perform administrative tasks arises, they request temporary elevated privileges.\n* **Automatic Expiration:** Once the pre-established time has elapsed (e.g. 1 or 2 hours), the privileges expire automatically.\n* **Risk Reduction:** It minimizes the time window in which an account with broad privileges can be compromised or abused.",
    examTip: "Just-In-Time (JIT) administrative privileges are granted only on request and for the time strictly necessary to perform the task.",
  },
  JustEnoughAdministrationConcept: {
    name: "Just-Enough Administration (JEA)",
    definition: "A principle and technology that allow only the minimum indispensable privileges to be granted to perform a specific task.",
    details: "Characteristics of Just-Enough Administration (JEA):\n* **Role and Command Limitation:** JEA allows administration to be delegated by limiting users to executing only specific commands, cmdlets or scripts.\n* **Non-Admin Administration:** It avoids granting full machine administrator rights to those who only need to perform limited routine operations (e.g. restarting a print service).\n* **Traceability:** It makes it extremely simple to monitor and record every single action performed in protected administrative sessions.",
    examTip: "Just-Enough Administration (JEA) ensures that only the minimum indispensable privileges are granted to perform a specific task (e.g. individual commands/scripts).",
  },
  ImplicitDenyConcept: {
    name: "Implicit deny",
    definition: "A basic security principle in which any access or communication that is not explicitly allowed is automatically blocked by default.",
    details: "The concept of Implicit Deny:\n* **Secure by Default:** Rather than listing what must be forbidden (blacklist), a rigid list of what is explicitly authorized (whitelist) is defined; everything else is rejected.\n* **Network Application:** In firewalls and network ACLs, it corresponds to the final invisible 'Deny All' (or 'Drop Any') rule that blocks all traffic not matching the previous rules.\n* **Gap Prevention:** It protects the system from omissions or oversights by the programmer or network administrator.\n\n* **Focused Mini-Example:** When configuring a corporate firewall, the administrator enables only TCP ports 80 and 443 for web traffic and TCP port 22 for SSH. Because the firewall applies Implicit Deny at the end of the rule list, any other connection attempt on different ports is automatically rejected.",
    examTip: "Implicit Deny ensures that everything not explicitly authorized is blocked by default, representing the cornerstone rule underlying firewalls and access control lists.",
  },
  MFA_SSO_Federation: {
    name: "MFA, SSO & Identity Federation",
    definition: "Multi-factor authentication, Single Sign-On and identity federation technologies across different domains.",
    details: "The three pillars for guaranteeing modern, secure and user-friendly access in the corporate environment:\n* **MFA (Multi-Factor Authentication):** Requires the convergent use of at least two or more distinct authentication factors chosen from:\n  - *Something you know:* password or PIN.\n  - *Something you have:* smart card, hardware token or app with OTP codes.\n  - *Something you are:* fingerprint, iris, facial recognition (biometrics).\n  - *Somewhere you are:* GPS position or IP.\n  - *Something you do:* typing pattern or signature.\n* **SSO (Single Sign-On):** Allows the user to authenticate only once and access multiple corporate applications and servers without having to re-enter credentials at each step.\n* **Identity Federation:** Extends the concept of SSO beyond the company's boundaries, allowing domains and portals of distinct organizations to trust each other's identities (IdP - Identity Provider vs SP - Service Provider).\n* **Standard Federated Protocols:** SAML (XML-based for enterprise), OAuth 2.0 (API authorization framework based on JWT tokens) and OIDC (OpenID Connect, an authentication layer built on top of OAuth 2.0).\n\n* **Focused Mini-Example:** An employee connects in the morning and logs in by entering a password and fingerprint on the centralized corporate portal (**MFA**). From that moment, thanks to **SSO**, they can navigate between the cloud sales application (Salesforce) and the external payroll portal (**Federation** through the SAML protocol) without having to type any additional credentials.",
    examTip: "Identity federation is based on a trust relationship established in advance between the Identity Provider (IdP), which actually authenticates the user, and the Service Provider (SP), which provides the final application.",
  },
  PasswordPoliciesAccount: {
    name: "Password Policies & Account Management",
    definition: "Administrative and technical rules for protecting credentials and controlling the account lifecycle.",
    details: "Security measures aimed at preventing credential theft and rigorously controlling the identity perimeter:\n* **Password Policies:** Mandatory definition of complexity rules (uppercase, lowercase, numbers, symbols), minimum length (at least 12-14 characters), history (preventing the reuse of the last 12-24 passwords) and account lockout after failed attempts.\n* **Privilege Creep:** The phenomenon whereby an employee accumulates excess permissions over the years by changing roles within the company. It is countered through periodic access reviews (User Access Reviews).\n* **Account Types:** Separation of standard user accounts from those with elevated administrative permissions (Privileged Accounts/Root) and from service accounts (Service Accounts) used by automated software.\n\n* **Focused Mini-Example:** A programmer is promoted to department manager. The security team performs a User Access Review and discovers that the employee still has write permissions on the source code of the old projects. The team promptly revokes the old obsolete permissions, averting the risk of 'Privilege Creep'.",
    examTip: "To avoid 'Privilege Creep' and ensure the application of the least-privilege principle, the organization must implement periodic formal access reviews (User Access Reviews) and revoke old permissions that are no longer needed.",
  },
  LDAPProtocol_New: {
    name: "LDAP",
    definition: "Lightweight Directory Access Protocol: an open standard protocol used to query, authenticate and manage information about users and resources in a central directory database.",
    details: "Main characteristics:\n* **Hierarchical Structure:** It organizes objects (users, computers, printers, groups) in a logical tree made up of organizational units (OU), domains (DC) and distinguished names (DN).\n* **Integration with Active Directory:** Microsoft Active Directory relies on LDAP as its main protocol to allow servers and clients to search for and authenticate identities in the domain.\n* **LDAPS (LDAP Secure):** The encrypted variant that uses TLS/SSL (standard TCP port 636) to protect credentials and data transmitted in the clear (TCP port 389) from sniffing attacks.",
    examTip: "To ensure the security of queries and user credentials transmitted to a directory service, disable cleartext LDAP (port 389) and implement LDAPS (port 636) encrypted with an SSL/TLS certificate.",
  },
  MFAConcept_New: {
    name: "MFA",
    definition: "Multi-Factor Authentication (MFA): a security process that requires the convergent use of two or more independent authentication factors belonging to different categories to verify the user's identity.",
    details: "The three primary factor categories provided for by the exam standards are:\n* **Something you know:** Memorized information (e.g. password, PIN or answers to security questions).\n* **Something you have:** Physical possession of an object (e.g. smart card, USB/NFC hardware token, OTP codes generated by an app on the phone).\n* **Something you are:** Biometric or physiological parameters of the user (e.g. fingerprint, iris scan, facial recognition or voice patterns).\n* **Auxiliary factors:** *Somewhere you are* (e.g. GPS geolocation, trusted IP subnet) and *Something you do* (e.g. typing pattern and rhythm on the keyboard).\n\n* **Focused Mini-Example:** To access the corporate VPN, a system administrator enters their personal password (**Something you know**) and inserts the YubiKey hardware key into their laptop (**Something you have**). Passing both independent checks constitutes true **MFA** authentication.",
    examTip: "To qualify as true MFA on the exam, the authentication factors provided must strictly belong to distinct categories (e.g. two passwords do NOT constitute MFA, whereas password + fingerprint do).",
  },
  FederationConcept: {
    name: "Federation",
    definition: "Identity Federation: a system that links the identity management systems of different organizations or domains, allowing users to use the same credentials to access multiple external networks or applications.",
    details: "Main characteristics:\n* **Mutual Trust:** It is based on a preconfigured trust relationship between an Identity Provider (IdP) and a Service Provider (SP).\n* **Cross-Domain SSO:** It enables Single Sign-On beyond corporate boundaries, eliminating the need to create separate accounts for each partner or external SaaS application.\n* **Open Standards:** Commonly implemented through protocols such as SAML 2.0 (enterprise) or OpenID Connect (OIDC, consumer/cloud).\n\n* **Focused Mini-Example:** An employee of a partner company accesses the customer portal of an external bank. Because a **Federation** through SAML is configured between the company and the bank, the browser redirects the user to the company's authentication server, which validates the identity and sends the user back to the bank already authenticated, without sharing the password.",
    examTip: "Identity federation extends Single Sign-On (SSO) beyond corporate boundaries through standard protocols such as SAML or OIDC and bilateral trust relationships.",
  },
  GeographicNetworkRestrictions: {
    name: "Geographic & Network Location Restrictions (Geofencing)",
    definition: "The restriction of logical or physical access based on the device's geographic location, the network it belongs to, or radio/GPS signals.",
    details: "These controls validate the contextual authentication factor **Somewhere you are**:\n* **Geographic Restrictions:** Criteria that allow or block access to systems based on the nationality or geographic region from which the connection originates (e.g. blocking login attempts from countries where the company has no operations).\n* **Network Location:** The logical distinction between connections coming from the internal corporate private network (trusted LAN/WLAN) and connections coming from outside (public Internet or guest networks).\n* **IP Subnet:** The logical division of an IP network address into smaller blocks to isolate sensitive corporate departments (e.g. isolating the finance department's subnet from the general offices' subnet).\n* **Geolocation:** The estimation of the device's real physical position through databases of public IP addresses, cell-tower IDs or the BSSIDs of nearby Wi-Fi networks.\n* **GPS (Global Positioning System):** Satellite technology integrated into mobile devices to determine the user's geographic coordinates (latitude and longitude) with maximum precision in real time.\n* **802.11 (Wi-Fi Standard):** The standard for local wireless networks; connecting to a specific 802.11 Access Point or the presence of its SSID/BSSID certifies the user's presence inside the building.\n* **IP Address:** The unique numeric identifier of the network node, used to validate the origin of the request and apply whitelist rules (e.g. allowing access to the administration panel only from static corporate IPs).\n* **Geofencing:** The creation of a virtual perimeter around a real geographic area (e.g. the data center perimeter). If the user leaves that area (detected through GPS, 802.11 or mobile network), access is revoked or an additional MFA validation is requested.",
    examTip: "On the exam, Geofencing and Network Location restrictions based on IP Subnet or GPS are used to strengthen contextual authentication (ABAC/Zero Trust) by validating the 'Somewhere you are' factor in real time to block external attacks at their inception.",
  },
  PermissionRestrictions: {
    name: "Permission Restrictions (ACL, RBAC, Least Privilege)",
    definition: "Logical security measures that rigidly and granularly define and enforce the operations users are allowed to perform on system resources.",
    details: "Permission restrictions ensure that identities cannot perform malicious or unauthorized actions:\n* **Permission Restrictions:** The application of constraints that specify which files, directories, databases or software features a subject can view, create, modify or delete.\n* **ACL (Access Control List):** Lists that granularly map user or group identifiers to their access rights (Read, Write, Execute) directly on File System objects or network nodes (Firewall ACL).\n* **RBAC (Role-Based Access Control):** A model that aligns permissions with organizational roles or employees' job functions (e.g. 'HR Manager'), avoiding the manual configuration of individual permissions for each user.\n* **Least Privilege:** The golden rule of cybersecurity that requires assigning to each user and process only the minimum indispensable set of privileges needed to complete the active task, drastically reducing the blast radius in case of compromise.",
    examTip: "On the exam, the rigorous application of Least Privilege supported by file-system-level ACLs and structured RBAC roles prevents privilege creep and neutralizes insider threats.",
  },
};

/* ------------------------------------------------------------------ *
 * Question overrides (keyed by numeric id)
 * Populated in batches. Anything missing falls back to Italian.
 * ------------------------------------------------------------------ */

export const QUESTION_EN: Record<number, QuestionOverride> = {
  // (populated incrementally — see translation batches)
};
