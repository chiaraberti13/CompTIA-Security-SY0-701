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
  41: {
    topic: "Compliance & Auditing",
    scenario: "A financial services company is required to regularly submit formal documentation proving its full adherence to the applicable regulatory security standards. This documentation includes audit results, risk assessments and evidence of the effectiveness of the implemented data-protection measures.",
    question: "What is this process called?",
    options: [
      "A) Compliance Reporting",
      "B) Incident Response",
      "C) Risk Management",
      "D) Configuration Management",
    ],
    explanation: "The correct answer is **A) Compliance Reporting**.\n\n* **Why it's correct:** **Compliance Reporting** consists of gathering and presenting structured evidence (such as audit results, configurations, logs, assessments) to demonstrate to a regulator or oversight body that the organization complies with certain legal requirements or industry standards (e.g. PCI DSS, GDPR).\n* **Analysis of the distractors:**\n  * **B) Incident Response** is the process aimed at detecting, containing and remediating an ongoing security breach, not the submission of ordinary compliance reports.\n  * **C) Risk Management** is the overall process of identifying, analyzing and responding to risks, which can inform compliance but is not the same as periodic regulatory reporting.\n  * **D) Configuration Management** concerns the traceability and control of the configuration state of corporate servers, networks and software to keep them secure and standardized.\n\n* **Focused Mini-Example:** A banking institution must submit a PCI DSS (QSA) compliance report every year proving that all credit-card transaction logs are encrypted and securely stored, avoiding multimillion-dollar penalties from the financial oversight body.\n\n*Question ID: 67224be6dbfc5a71d6d19c6a*",
  },
  42: {
    topic: "Control Functional Types",
    scenario: "The network administrator of a remote branch must install a legacy operating system essential for the diagnostics of old industrial machinery. Because the operating system no longer receives patches from the manufacturer and has critical vulnerabilities, the administrator configures the local firewall to block any inbound and outbound traffic from that host to the internet, allowing only the local connection to a specific control workstation.",
    question: "Which functional type of security control does this firewall configuration represent?",
    options: [
      "A) Preventive Control",
      "B) Detective Control",
      "C) Compensating Control",
      "D) Deterrent Control",
    ],
    explanation: "The correct answer is **C) Compensating Control**. \n\n* **Why it's the BEST:** A compensating control is an alternative or supplementary control implemented when the primary control (in this case, applying security patches to the operating system) is not feasible or possible. Isolating the vulnerable host through restrictive firewall rules reduces the risk associated with the known vulnerability without directly resolving it.\n* **Why the others are incorrect:**\n  * **A) A preventive control** aims to directly prevent an attack under normal conditions, but here an ad-hoc substitute countermeasure is applied to mitigate the lack of patches.\n  * **B) A detective control** serves to detect a breach that has occurred or is in progress (e.g. an IDS or log review).\n  * **D) A deterrent control** psychologically discourages the attacker from attempting a harmful action.\n\n* **Focused Mini-Example:** An old industrial control server does not support WPA3 encryption. Because it cannot be updated, the security team implements a compensating control by isolating the server in a protected VLAN with MAC filters and active IPS monitoring.",
  },
  43: {
    topic: "The CIA Triad & Non-Repudiation",
    scenario: "During the night, a group of hackers penetrates the database of a well-known e-commerce site. Instead of stealing users' credit-card data or taking down the site, the attackers slightly modify the prices of hundreds of high-end electronics items in the database records, reducing them by 90%. The following morning, the administrative staff detects inconsistencies in the totals of the orders received.",
    question: "Which pillar of the CIA model was directly compromised by this attack?",
    options: [
      "A) Confidentiality",
      "B) Integrity",
      "C) Availability",
      "D) Accounting",
    ],
    explanation: "The correct answer is **B) Integrity**. \n\n* **Why it's the BEST:** Integrity ensures that data is not altered, modified or destroyed in an unauthorized or accidental way. The unauthorized modification of item prices in the e-commerce database directly compromises the accuracy and reliability of the information stored in the system.\n* **Why the others are incorrect:**\n  * **A) Confidentiality** concerns unauthorized access to data (e.g. theft of sensitive information or a leak), which was not the primary purpose described.\n  * **C) Availability** ensures that services or data are accessible to authorized users when needed; the site remained up and accessible.\n  * **D) Accounting** is part of the AAA framework and is a recording process; it is not part of the primary CIA triad.\n\n* **Focused Mini-Example:** A malicious user performs an SQL injection on a medical database, changing a patient's blood type from '0+' to 'AB-'. Even though the data remained confidential and accessible, the loss of integrity endangers the patient's life.",
  },
  44: {
    topic: "The CIA Triad & Non-Repudiation",
    scenario: "A customer of an online trading platform claims to have never made a high-risk sell transaction that caused significant losses on their account, arguing that the order was generated by a technical error of the platform. The forensic team examines the logs and demonstrates that the order was transmitted from the customer's browser, digitally signed with the private key stored in their personal hardware smart token.",
    question: "Which security concept ensures that the customer cannot deny having sent the transaction?",
    options: [
      "A) Confidentiality",
      "B) Non-Repudiation",
      "C) Two-factor authentication (MFA)",
      "D) Role-Based Access Control (RBAC)",
    ],
    explanation: "The correct answer is **B) Non-Repudiation**. \n\n* **Why it's the BEST:** Non-repudiation prevents a user or sender from denying the authenticity of a signature or an action performed on a resource. In asymmetric cryptography, because only the legitimate owner possesses their own private key (kept in this case in the hardware smart token), a digital signature generated with that key irrefutably proves the origin of the message or transaction.\n* **Why the others are incorrect:**\n  * **A) Confidentiality** hides information from those who are not authorized but does not prove the origin of a specific action.\n  * **C) Two-factor authentication** verifies the user's identity at login, but the act of digitally signing the individual transaction specifically guarantees the non-repudiation of the transaction itself.\n  * **D) RBAC** defines which actions a user is authorized to perform based on their role; it does not provide mathematical evidence to prevent denial of the actions performed.\n\n* **Focused Mini-Example:** A financial trader sends a stock-purchase order signing it with their HSM private key. Later, when the stock's value collapses, the trader tries to disown the operation, but the asymmetric digital signature makes the action legally non-repudiable.",
  },
  45: {
    topic: "AAA Framework & Zero Trust Intro",
    scenario: "A security auditor finds that the audit and access logs of the main production server are stored in a network path where the network administrators have full write and delete permissions.",
    question: "Which specific phase of the AAA framework is severely compromised if the activity logs can be modified or deleted by the very users whose actions they should track?",
    options: [
      "A) Authentication",
      "B) Authorization",
      "C) Accounting",
      "D) Encryption",
    ],
    explanation: "The correct answer is **C) Accounting**. \n\n* **Why it's the BEST:** The **Accounting** (Traceability/Audit) component requires not only the correct generation of activity logs but also the guarantee of their integrity and immutability. If the logs are accessible for writing or deletion by IT staff, an insider or an attacker with compromised IT credentials could delete or alter the evidence of their own actions (e.g. illicit transactions), destroying the reliability of the entire audit process.\n* **Why the others are incorrect:**\n  * **A) Authentication** concerns the verification of identity at login, which is assumed here to be working.\n  * **B) Authorization** defines the user's access rights, but the critical vulnerability concerns the protection of the integrity of the audit records (Accounting).\n  * **D) Encryption** is an enabling technical control, not a logical phase of the AAA framework.\n\n* **Focused Mini-Example:** If a database administrator has write access to the log files, they could delete a specific record to hide a diversion of funds. Protecting the logs in 'WORM' (Write Once, Read Many) mode ensures accounting and prevents alterations.",
  },
  46: {
    topic: "Social Engineering & Awareness",
    scenario: "The financial institution 'Rico Financials' has introduced a global Security Awareness training program. During one of the latest teaching sessions, employees analyzed in detail the risks and signals associated with malicious activities carried out by current or former employees, or by trusted business partners.",
    question: "Which specific threat does this lesson focus on?",
    options: [
      "A) Phishing",
      "B) Reporting and monitoring",
      "C) Anomalous behavior recognition",
      "D) Insider threat",
    ],
    explanation: "The correct answer is **D) Insider threat**.\n\n* **Why it's correct:** Insider threat awareness aims to educate staff on the risks arising from individuals operating within the organization (employees, collaborators, administrators) who could cause harm (deliberate, such as sabotage or data theft, or unintentional, such as negligence).\n* **Analysis of the distractors:**\n  * **A) Phishing** focuses on recognizing deceptive emails coming from outside that aim to steal credentials, not on direct internal threats.\n  * **B) Reporting and monitoring** is a cross-cutting, procedural practice aimed at notifying generic security incidents, not a specific threat.\n  * **C) Anomalous behavior recognition** supports the identification of strange behaviors but represents a technical/operational detection method and not the threat category itself covered in the lesson.\n\n* **Focused Mini-Example:** A system administrator, disgruntled over a denied raise, downloads the entire corporate patent database onto a USB stick before resigning, planning to resell the intellectual property to a competitor.\n\n*Question ID: 64c353dd006636d14b206140*",
  },
  47: {
    topic: "Cryptographic Foundations",
    scenario: "A security engineer is evaluating a proprietary application developed by a third party. They notice that the application stores the API keys of cloud services in cleartext inside a configuration file, merely masking them by applying an invertible XOR algorithm and encoding the final result in Base64 format.",
    question: "How should this protection method be assessed according to the cryptographic principles of Domain 1?",
    options: [
      "A) It is a secure method equivalent to asymmetric encryption since it requires a key to reverse the XOR",
      "B) It represents an obfuscation technique that provides no real confidentiality and is easily decipherable",
      "C) It is a secure one-way hashing function that prevents reading the keys",
      "D) It ensures the integrity of the API keys by preventing their accidental alteration",
    ],
    explanation: "The correct answer is **B) It represents an obfuscation technique that provides no real confidentiality and is easily decipherable**. \n\n* **Why it's the BEST:** Obfuscation aims to make code or a file hard for a human to understand at a glance, but it relies on weak, standardized methods (such as Base64, XOR or character rotation) that are easily reversible without the need for a strong cryptographic secret. It provides no confidentiality and must never be used to protect credentials or secrets.\n* **Why the others are incorrect:**\n  * **A)** Simple XOR is not equivalent to asymmetric cryptography (which uses complex mathematical relationships between public/private key pairs).\n  * **C)** Hashing is one-way and non-invertible, whereas XOR combined with Base64 is fully invertible to recover the original keys.\n  * **D)** Obfuscation provides no mathematical mechanism (such as a hash or a MAC) to detect or prevent accidental modification of the data.\n\n* **Focused Mini-Example:** A developer encodes database passwords in Base64 format in the `config.ini` file. Any user with access to the file can instantly decode the passwords using a trivial command, because Base64 is mere obfuscation and not real encryption.",
  },
  48: {
    topic: "Security Standards",
    scenario: "Organizations adopt different technological standards to ensure that data is protected based on its state (at rest, in transit, in use).",
    question: "Which type of standard defines the methods, protocols and control algorithms used specifically to protect information during its transit over networks?",
    options: [
      "A) Physical security standard",
      "B) Encryption standard",
      "C) Access control standard",
      "D) Password standard",
    ],
    explanation: "The correct answer is **B) Encryption standard**.\n\n* **Why it's correct:** **Encryption standards** (such as the use of TLS for transit, or AES for data at rest) establish the mathematical algorithms and protocols needed to transform readable data into an encrypted, unintelligible format for anyone without the decryption key, ensuring confidentiality in transit.\n* **Analysis of the distractors:**\n  * **A) Physical security standard** refers to securing physical assets, technical rooms and data centers (e.g. fences, badges, guards), not network flows.\n  * **C) Access control standard** establishes the processes and rules for identifying, authenticating and authorizing users on systems (e.g. RBAC, ABAC), but does not deal with the encryption of transmission channels.\n  * **D) Password standard** defines specific complexity, expiration and length requirements for user credentials, not the protocols for data traffic.\n\n* **Focused Mini-Example:** To protect web transactions, the PCI DSS standard mandates the adoption of TLS 1.2 or higher with strong encryption algorithms such as AES-GCM, prohibiting deprecated and vulnerable protocols such as SSLv3.\n\n*Question ID: 64b758fd527f0f59c61e8213*",
  },
  49: {
    topic: "Change Management Processes",
    scenario: "A junior system administrator receives an urgent support request from the sales department, which states it cannot access a new CRM database due to a network block. To resolve the situation quickly, the administrator manually modifies a rule of the central production firewall, allowing access from any branch IP address. The connection works, but two days later the company suffers an attack coming from an unauthorized subnet that exploited that same open port.",
    question: "Which critical phase of the Change Management process was completely omitted and would have avoided the incident?",
    options: [
      "A) Drafting the emergency recovery plan (Rollback Plan)",
      "B) Impact Analysis and formal approval by the Change Advisory Board (CAB) or the security team",
      "C) Notifying external users of the firewall rule change",
      "D) Running a vulnerability scan before modifying the rule",
    ],
    explanation: "The correct answer is **B) Impact Analysis and formal approval by the Change Advisory Board (CAB) or the security team**.\n\n* **Why it's correct:** The formal Change Management process requires that any change made to production systems (such as firewall rules) be preceded by an impact analysis to assess the associated potential security risks and must be formally approved by the CAB or the responsible team. Had the administrator followed this procedure, the hasty change would have been blocked or amended to avoid the indiscriminate opening of the port.\n* **Analysis of the distractors:**\n  * **A) Drafting the recovery plan** (Rollback Plan) allows returning to the previous configuration in case of problems while applying the change, but does not prevent the introduction of the flaw itself.\n  * **C) Notifying external users** is an informational and operational-courtesy measure, of no value for preventing technical vulnerabilities.\n  * **D) Running a vulnerability scan** detects existing flaws but does not replace the formal assessment and approval of the change before it is implemented.\n\n* **Focused Mini-Example:** A technician opens a TCP port in production without a formal ticket to test an application. The ticket is never recorded, the port stays open and forgotten, and three months later it is exploited by ransomware to infiltrate.",
  },
  50: {
    topic: "Security Consequences",
    scenario: "The company 'Horizon Security', specialized in cybersecurity training, suffers a serious data breach due to the negligence of one of its third-party suppliers. The incident causes the loss of a large volume of sensitive customer information.",
    question: "Which type of immediate consequence is Horizon MOST likely to face?",
    options: [
      "A) Reputational damage",
      "B) Sanctions",
      "C) Loss of license",
      "D) Fines",
    ],
    explanation: "The correct answer is **A) Reputational damage**.\n\n* **Why it's correct:** Because Horizon Security is a *cybersecurity training* company, suffering a data breach directly hits the credibility of its own core business. Customers might conclude that the company is not qualified to protect information, causing devastating and immediate damage to its image and reputation in the market.\n* **Analysis of the distractors:**\n  * **B) Sanctions** and **C) Loss of license** are extreme regulatory or legal measures applicable in highly regulated sectors or in cases of direct willful misconduct/gross negligence by the company itself; in this case, the primary fault lies with the negligence of the external supplier.\n  * **D) Fines** are imposed by regulatory authorities (e.g. the Data Protection Authority for a GDPR violation), but usually require investigations and formal proceedings that develop over time; the reputational impact and loss of customer trust, however, are instantaneous.\n\n* **Focused Mini-Example:** A renowned cryptographic consulting firm suffers the theft of its source code. Although there are no immediate monetary fines, the news alarms the financial partners, who terminate their contracts for fear of cascading vulnerabilities.\n\n*Question ID: 64c07b3d6eac6c96dcf007a1*",
  },
  131: {
    topic: "Cryptographic Foundations",
    scenario: "A network engineer must design a symmetric encryption solution for a real-time industrial application. The application transmits continuous telemetry streams in which the total length of the data packet is not known in advance and requires minimal latency, encrypting the data one byte or bit at a time.",
    question: "Which type of symmetric encryption is the MOST suitable to meet these operational requirements?",
    options: [
      "A) Block cipher",
      "B) Stream cipher",
      "C) Initialization Vector (IV)",
      "D) AES-256 (Advanced Encryption Standard)",
    ],
    explanation: "The correct answer is **B) Stream cipher**.\n\n* **Why it's correct:** **Stream ciphers** encrypt the plaintext one bit or byte at a time, unlike block ciphers. This makes them ideal for real-time transmission scenarios (such as audio/video streams or continuous industrial telemetry) where the total length of the message is not predetermined and latency must be kept to a minimum.\n* **Analysis of the distractors:**\n  * **A) Block cipher** encrypts data by dividing it into fixed-size blocks (e.g. 64 or 128 bits) and requires the use of padding algorithms if the message does not fit perfectly into the block size, introducing additional latency.\n  * **C) Initialization Vector (IV)** is not a type of symmetric encryption, but rather a random value used in combination with ciphers to ensure that identical plaintexts produce different ciphertexts.\n  * **D) AES-256** is a widely secure symmetric algorithm, but it is a block cipher (operating on 128-bit blocks with 256-bit keys), not a native stream cipher.\n\n* **Focused Mini-Example:** A military surveillance camera transmits a continuous video stream at 30 FPS. To protect the channel with near-zero latency, the encryption algorithm encrypts each single video bit as it leaves the sensor using a stream cipher.\n\n*Question ID: 6525878ba8b3b77bfb418cae*",
  },
  132: {
    topic: "Cryptographic Foundations",
    scenario: "The company 'Sweet as Thyme', a food flavoring supplier, wants to track the shipments and payments of its production supply chain. The company decides to adopt a decentralized peer-to-peer network based on a distributed, public ledger to guarantee the immutability, integrity and transparency of all its commercial transactions.",
    question: "What is this distributed public ledger technology called?",
    options: [
      "A) Salting",
      "B) Key Stretching",
      "C) Blockchain",
      "D) Digital Signatures",
    ],
    explanation: "The correct answer is **C) Blockchain**.\n\n* **Why it's correct:** **Blockchain** is a distributed ledger technology based on a peer-to-peer network in which records (transactions) are grouped into cryptographically chained blocks. It provides a permanent, transparent and tamper-resistant record to guarantee the integrity of transactions without depending on a central trusted authority.\n* **Analysis of the distractors:**\n  * **A) Salting** is a cryptographic technique that consists of adding random data (salt) to a password before hashing it to protect it from dictionary or rainbow-table attacks.\n  * **B) Key Stretching** is a method to make password hashing more secure by performing it multiple times (e.g. with PBKDF2 or bcrypt) to increase the computational time needed to crack it.\n  * **D) Digital Signatures** are used to authenticate the origin and integrity of a single file or message, but do not represent a peer-to-peer network or a shared ledger of transactions.\n\n* **Focused Mini-Example:** A winery records every step of the bottle (from the grape harvest, to the sea shipment, to the distributor) on a public blockchain. Because the blocks are cryptographically linked, no intermediate distributor can falsify the date or storage temperature.\n\n*Question ID: 64c3dd9646cada5acd7b5a98*",
  },
  133: {
    topic: "Zero Trust Framework",
    scenario: "In a company that adopts the Zero Trust security model, the system administrator must configure the components responsible for deciding whether a request to access internal resources should be authorized or denied, based on corporate policies, risk analysis and real-time verification of credentials and device state.",
    question: "In which architectural plane does the component responsible for making these access decisions reside in the Zero Trust model?",
    options: [
      "A) Policy-driven access control",
      "B) Implicit trust zones",
      "C) Control Plane",
      "D) Data Plane",
    ],
    explanation: "The correct answer is **C) Control Plane**.\n\n* **Why it's correct:** In the Zero Trust model, the **Control Plane** is the logical area that contains the decision engines (such as the Policy Engine and the Policy Administrator). This plane evaluates access requests by analyzing security policies, user identity, device context and threat signals, deciding whether to establish or deny a connection.\n* **Analysis of the distractors:**\n  * **A) Policy-driven access control** is the philosophy or the applied access control mechanism, but it does not represent an architectural plane of the network infrastructure itself.\n  * **B) Implicit trust zones** are typical of the old perimeter models in which internal devices are considered inherently secure, a concept that Zero Trust aims to abolish entirely.\n  * **D) Data Plane** is the operational layer responsible for the routing, transport and actual forwarding of users' data packets once the session has been authorized by the Control Plane.\n\n* **Focused Mini-Example:** An employee requests access to a shared folder at 3 a.m. from an unusual IP in Asia. The Policy Engine and the Policy Administrator (components of the Control Plane) analyze the threat and deny access, ordering the Data Plane to block the packets.\n\n*Question ID: 65245f47db866f2dfdab26cf*",
  },
  134: {
    topic: "Cryptographic Foundations",
    scenario: "The international organization 'Trust Us' offers security and trust services on the web. The company validates the identities of servers and domains, issues digital cryptographic credentials and signs public keys by associating them with specific entities to enable secure encrypted communications over HTTPS.",
    question: "Which type of organization best describes the work of 'Trust Us'?",
    options: [
      "A) Root of Trust",
      "B) Blockchain",
      "C) Certificate Authority (CA)",
      "D) Registration Authority (RA)",
    ],
    explanation: "The correct answer is **C) Certificate Authority (CA)**.\n\n* **Why it's correct:** A **Certificate Authority (CA)** is a trusted third-party entity responsible for issuing, signing, managing and revoking digital certificates. It attests to the association between a public key and the identity of the certificate owner by means of its own digital signature.\n* **Analysis of the distractors:**\n  * **A) Root of Trust** refers to an inherently trusted hardware or software cryptographic source on which the security of an entire operating system or device rests, not to a commercial organization that issues digital credentials on the web.\n  * **B) Blockchain** is a distributed ledger technology, not an organization tasked with issuing and validating SSL/TLS certificates.\n  * **D) Registration Authority (RA)** is an auxiliary entity that assists the CA by verifying the identity of applicants, but does not have the authority to directly sign and issue the final digital certificates.\n\n* **Focused Mini-Example:** When you connect to `https://google.com`, a recognized third-party CA (such as DigiCert or Google Trust Services) digitally guarantees that the public key used actually belongs to Google LLC, preventing Man-in-the-Middle attacks.\n\n*Question ID: 64c3df3bec55f15597b20773*",
  },
  135: {
    topic: "Change Management Processes",
    scenario: "Kevin, an experienced systems analyst at a financial services company, receives a change request to apply a major cumulative update to the corporate ERP system. Before the change is approved or implemented, Kevin carefully analyzes how the update will impact the hardware performance of the production servers, the daily operations of the staff and the active API integrations.",
    question: "Which Change Management term BEST describes the assessment conducted by Kevin?",
    options: [
      "A) Approval process",
      "B) Backout plan",
      "C) Version control",
      "D) Impact analysis",
    ],
    explanation: "The correct answer is **D) Impact analysis**.\n\n* **Why it's correct:** **Impact analysis** is the critical phase of Change Management in which all the potential side effects, associated risks and operational repercussions that a proposed change could cause to the IT infrastructure, business processes and security of the organization are systematically studied.\n* **Analysis of the distractors:**\n  * **A) Approval process** is the subsequent phase conducted by the Change Advisory Board (CAB) to formally approve or reject the change based on the data that emerged from the impact analysis.\n  * **B) Backout plan** (Rollback plan) is the planning of the technical actions to be taken to restore the systems to their original state should the implemented change cause blocking anomalies.\n  * **C) Version control** is the practice of tracking and managing the revisions of code or configuration files, unrelated to the overall operational impact assessment of a release.\n\n* **Focused Mini-Example:** Before installing a critical patch on the ERP server, the analyst simulates the update in a pre-production environment, discovering that the new version crashes the shipping API. The installation is suspended, saving the company from an order block.\n\n*Question ID: 64c137e23837c7dbc550d89a*",
  },
  136: {
    topic: "Cryptographic Foundations",
    scenario: "The e-learning company 'Reason and Rhyme' wants to raise the storage security of its students' credentials. Instead of merely applying a standard hash algorithm once, the company introduces an encryption mechanism that recursively performs thousands of mathematical hashing iterations, with the aim of significantly slowing down the brute-force computation by an external attacker.",
    question: "What is this cryptographic method of password protection called?",
    options: [
      "A) Hashing",
      "B) Salting",
      "C) Key Stretching",
      "D) Digital Signatures",
    ],
    explanation: "The correct answer is **C) Key Stretching**.\n\n* **Why it's correct:** **Key Stretching** is a technique that consists of repeatedly and recursively running a hash or encryption algorithm (e.g. PBKDF2, bcrypt, scrypt) on a password for a high number of iterations. This process deliberately increases the computational time needed to verify each password, making brute-force or dictionary attacks incredibly slow and resource-costly for attackers.\n* **Analysis of the distractors:**\n  * **A) Hashing** is the standard single-pass conversion of a string into a fixed-length sequence, without the iterative application aimed at intentionally slowing down cracking attempts.\n  * **B) Salting** is the addition of a unique random string before the hashing process to prevent identical passwords from having identical hashes, countering the use of rainbow tables.\n  * **D) Digital Signatures** ensure the authenticity and non-repudiation of messages; they have no bearing on the cryptographic hardening of stored passwords.\n\n* **Focused Mini-Example:** Instead of saving the password `Sun123` by applying a simple instant MD5 hash, the system uses the bcrypt algorithm configured with 12,000 iterations. This forces the server to take 100 milliseconds to verify the login, making high-speed GPU brute-force attacks impractical.\n\n*Question ID: 64c3dd26cecaf5b2df5d3111*",
  },
  137: {
    topic: "Zero Trust Framework",
    scenario: "The tech company 'Novus Technologies' is redesigning its network architecture following the guidelines of the Zero Trust framework. To manage employees' access to corporate resources securely and flexibly, the IT team decides to implement a control-plane solution that verifies the user's identity, analyzes their active job functions and dynamically applies precise security policies.",
    question: "Which component or approach of the Zero Trust architecture describes this centralized access management on the control plane?",
    options: [
      "A) Role-based access control",
      "B) Least privilege",
      "C) Implicit deny",
      "D) Policy-driven access control",
    ],
    explanation: "The correct answer is **D) Policy-driven access control**.\n\n* **Why it's correct:** In the Zero Trust architecture, **Policy-driven access control** is the pillar of the Control Plane that makes access decisions by examining a set of corporate rules and policies (e.g. user identity, device state, time, department requirements) before granting access to sensitive resources.\n* **Analysis of the distractors:**\n  * **A) Role-based access control (RBAC)** is a classic access control method based exclusively on membership in static groups or job roles, not representing the entire adaptive, dynamic system driven by complex policies of the Control Plane in Zero Trust.\n  * **B) Least privilege** is the general security principle of granting users only the permissions strictly necessary to perform their tasks, not the software module that evaluates access rules.\n  * **C) Implicit deny** is a network configuration principle (if a connection is not explicitly allowed, it is blocked), unrelated to the adaptive logic of policy management.\n\n* **Focused Mini-Example:** In a company, access to sensitive customer data simultaneously requires that the user be an authorized account manager, connect through the corporate VPN and use a device with up-to-date antivirus: this adaptive, multi-factor control is driven by policies.\n\n*Question ID: 6523910e707b96d3205a83a2*",
  },
  138: {
    topic: "Change Management Processes",
    scenario: "During the installation of a new corporate accounting software application on a centralized Linux server at 'Kelly Innovations LLC', the installer receives a blocking error: the application cannot be started because it requires the prior installation of a specific open-source cryptographic library not present in the system.",
    question: "Which technical term BEST describes the blocking relationship between the accounting application and the missing library?",
    options: [
      "A) Running a legacy application",
      "B) Compatibility issue",
      "C) Unrestricted user access",
      "D) Software dependency",
    ],
    explanation: "The correct answer is **D) Software dependency**.\n\n* **Why it's correct:** A **software dependency** occurs when a given application or module requires the existence, installation or prior execution of another software resource (library, package, framework or service) in order to function correctly and complete its execution.\n* **Analysis of the distractors:**\n  * **A) Running a legacy application** refers to the operational use of obsolete or no-longer-supported systems or software, but does not express a blocking prerequisite between packages.\n  * **B) Compatibility issue** refers to the inability or difficulty of two or more pieces of software or hardware to function correctly in the same environment, whereas in this scenario the accounting application would work perfectly if the library were present.\n  * **C) Unrestricted user access** concerns users' operational privileges on system files, not the functional interdependencies of the code.\n\n* **Focused Mini-Example:** To start the accounting application, the Linux operating system requires the presence of the `openssl-devel` package. If this software dependency is not installed first via `apt-get` or `yum`, the application will refuse to start, throwing a blocking error.\n\n*Question ID: 6524d5e09eb2e17ced10c45f*",
  },
  139: {
    topic: "Cryptographic Foundations",
    scenario: "A financial organization adopts a complex public key infrastructure (PKI) to encrypt all internal documents and confidential databases. To prevent the irreversible loss of sensitive data should employees lose their own private decryption key, the company decides to securely deposit a backup copy of all private keys with a trusted third party authorized for recovery.",
    question: "Which PKI component or process allows cryptographic keys to be deposited and recovered through trusted third parties?",
    options: [
      "A) Public Key Infrastructure",
      "B) Key Exchange",
      "C) Key Escrow",
      "D) Key Generation",
    ],
    explanation: "The correct answer is **C) Key Escrow**.\n\n* **Why it's correct:** **Key Escrow** is an arrangement or process in which a trusted third party securely stores and safeguards encryption keys (usually private keys). This mechanism makes it possible to recover the keys and decrypt data in emergency scenarios, such as the accidental loss of credentials by the legitimate user or legal requests for data access.\n* **Analysis of the distractors:**\n  * **A) Public Key Infrastructure (PKI)** is the entire organizational, technical and procedural framework that governs asymmetric cryptography, not the single process of fiduciary backup storage of keys.\n  * **B) Key Exchange** is the cryptographic protocol used to securely negotiate or transmit symmetric keys between two communicating parties (e.g. Diffie-Hellman).\n  * **D) Key Generation** is the preliminary mathematical phase of creating a cryptographic key pair (public and private).\n\n* **Focused Mini-Example:** An engineer tasked with signing a company's software releases loses their hardware private key. Thanks to Key Escrow, the CEO and the legal auditor can recover a protected copy of the key from the corporate digital vault so as not to interrupt the releases.\n\n*Question ID: 64c27848281353282d57ef4*",
  },
  140: {
    topic: "Cryptographic Foundations",
    scenario: "The professional training school 'Dion Training' wants to increase the trust and security of its web portal for external students, eliminating the annoying security warnings generated by modern browsers when users connect to it over HTTPS. To this end, the company needs a digital certificate signed and validated by an authoritative, globally recognized certificate authority.",
    question: "Which type of certificate best meets this organizational need?",
    options: [
      "A) Self-signed certificate",
      "B) CSR (Certificate Signing Request)",
      "C) Wildcard certificate",
      "D) Third-party certificate",
    ],
    explanation: "The correct answer is **D) Third-party certificate**.\n\n* **Why it's correct:** A **third-party certificate** (issued by a trusted commercial Certificate Authority, such as DigiCert, Let's Encrypt or Sectigo) is signed by a CA whose root certificates are preinstalled and trusted by all modern browsers. This eliminates any security warning for external users and increases the credibility of the site.\n* **Analysis of the distractors:**\n  * **A) Self-signed certificate** is generated and signed internally by the organization itself. Because it is not backed by a trusted public CA, it causes conspicuous error warnings to appear in the browsers of external visitors.\n  * **B) CSR (Certificate Signing Request)** is not a security certificate, but rather the formal text file containing the organization's information and public key, sent to the CA to request the issuance of the actual certificate.\n  * **C) Wildcard certificate** allows a main domain and all its first-level subdomains (e.g. *.diontraining.com) to be protected, but by itself does not guarantee authoritativeness unless it has been signed by a third-party CA.\n\n* **Focused Mini-Example:** An academy's student portal decides to replace the old self-signed certificate with one issued by Let's Encrypt. From that moment, all browsers natively recognize the HTTPS connection as trusted and secure, eliminating the threatening red warning message.",
  },
  141: {
    topic: "Security Controls",
    scenario: "The company 'Lexicon', specialized in developing artificial intelligence systems, intends to implement a structured, company-wide measure to systematically identify, quantify and classify all potential cyber risks related to the storage of language-model data.",
    question: "Which of the following measures represents an example of a managerial security control suitable to achieve this objective?",
    options: [
      "A) Security guards",
      "B) Intrusion detection system",
      "C) Centralized network firewall",
      "D) Risk assessments",
    ],
    explanation: "The correct answer is **D) Risk assessments**.\n\n* **Why it's correct:** **Risk assessments** are a classic managerial (or administrative) security control. They define the formal processes, policies and methodologies approved by corporate governance to examine and quantify the organization's risks, guiding investments and general policies.\n* **Analysis of the distractors:**\n  * **A) Security guards** represent a physical security control that protects the physical access to servers and corporate facilities.\n  * **B) Intrusion detection system (IDS)** is a technical (or logical) security control implemented through software or hardware to detect malicious traffic on the network.\n  * **C) Firewall** is another technical security control tasked with filtering network traffic based on predefined rules.\n\n* **Focused Mini-Example:** Before launching a new generative AI model, Lexicon conducts a formal Risk Assessment to map the prompt-injection attack vectors and evaluate the risk of the model's weights leaking, estimating the reputational impact in case of a breach.\n\n*Question ID: 64bd55d28ecaa950633d569c*",
  },
  142: {
    topic: "Cryptographic Foundations",
    scenario: "A user decides to book an online appointment for a haircut on the website of the salon 'Dye My Darling'. When they fill out the form with their personal data, this is transmitted to the secure corporate database and immediately associated with a random, non-sensitive string of characters (called a token) that replaces the real data. The salon staff will see only this fictitious identifier to manage bookings, reducing the exposure of customer data in the event of a data breach.",
    question: "Which method of concealing and protecting sensitive data is the 'Dye My Darling' website using?",
    options: [
      "A) Steganography",
      "B) Encryption",
      "C) Tokenization",
      "D) Data Masking",
    ],
    explanation: "The correct answer is **C) Tokenization**.\n\n* **Why it's correct:** **Tokenization** consists of replacing a piece of sensitive data (such as personal or financial data) with a non-sensitive equivalent called a 'token'. The original sensitive data is removed from the system and stored separately in a secure centralized database (the 'token vault'), while in the local operating system only the token, which has no independent value, is used.\n* **Analysis of the distractors:**\n  * **A) Steganography** consists of hiding the very existence of a message or file by concealing it inside another innocuous file (e.g. text hidden in the pixels of an image).\n  * **B) Encryption** mathematically transforms plaintext into ciphertext readable only by those who possess the correct decryption key, but does not involve the systematic replacement of the data with a token recorded in an external archive.\n  * **D) Data Masking** consists of partially hiding portions of the data for display purposes (e.g. showing a credit card as ****-****-****-1234), but the original value nonetheless remains stored within the same application database.\n\n* **Focused Mini-Example:** When you enter your credit card into a ride-hailing app, the real number is stored in a certified digital vault and replaced in the local application with a unique random token. The app uses only the token to charge for rides, reducing exposure in the event of a data breach.\n\n*Question ID: 64c3d5eececaf5b2df5d307*",
  },
  143: {
    topic: "Cryptographic Foundations",
    scenario: "A network administrator must temporarily implement an SSL/TLS certificate for an internal web server used exclusively to conduct diagnostic tests by the software development team. Because the system is not exposed to external users and the company wants to avoid the costs of commercial CAs, the administrator decides to sign the certificate using their own local root private key.",
    question: "Which type of certificate is issued and self-signed by an entity for local use?",
    options: [
      "A) Extended validation certificate",
      "B) Self-signed certificate",
      "C) CSR (Certificate Signing Request)",
      "D) Root certificate",
    ],
    explanation: "The correct answer is **B) Self-signed certificate**.\n\n* **Why it's correct:** A **self-signed certificate** is a digital certificate signed directly by the creating subject that owns it, without going through a trusted third-party Certificate Authority (CA). Although it provides channel encryption, it has no native trustworthiness in external computers' browsers, which will display a security error. It is ideal for closed development and test environments.\n* **Analysis of the distractors:**\n  * **A) Extended validation certificate (EV)** is a commercial certificate with very high public trust that requires strict, rigorous legal checks on the company's identity by the issuing CA.\n  * **C) CSR (Certificate Signing Request)** is solely the file sent to request the signing of a certificate; it does not constitute a finished certificate operable on the server.\n  * **D) Root certificate** is the main certificate held by a trusted CA and used to sign all the subordinate certificates of the PKI.\n\n* **Focused Mini-Example:** A developer configures a local web server `https://localhost:8080` to test a payment module. Because it is an internal test, they generate a self-signed certificate. The browser will show a security warning (which is ignored by proceeding), but the communication channel will remain encrypted and secure.\n\n*Question ID: 6524e5389e22f124a23e7938*",
  },
  144: {
    topic: "Change Management Processes",
    scenario: "Carlos is hired as an external cybersecurity consultant at Dion Training Solutions with the task of mapping the flaws and vulnerabilities of the data center infrastructure. Carlos formally requests an up-to-date diagram of the network architecture and physical servers, but the technical support team provides him with a floor plan dating back more than a year.",
    question: "Why is the use of this old architecture diagram potentially problematic for Carlos's assigned task?",
    options: [
      "A) It might not reflect the current topology and servers, leading to overlooking critical vulnerabilities introduced recently.",
      "B) It would show an excessive number of complex, unwanted technical details that could confuse Carlos.",
      "C) It would contain an outdated list of employees with their physical access permissions to the data center.",
      "D) It would show only the old corporate expansion plans approved last year.",
    ],
    explanation: "The correct answer is **A) It might not reflect the current topology and servers, leading to overlooking critical vulnerabilities introduced recently.**\n\n* **Why it's correct:** Data center infrastructures are extremely dynamic; over the course of a year new servers are regularly installed, new firewall ports are opened and routing flows are modified. Conducting a vulnerability assessment based on an obsolete diagram will lead Carlos to ignore the presence of new hosts or network changes that could harbor critical, uncatalogued flaws.\n* **Analysis of the distractors:**\n  * **B) It would show an excessive number of technical details** is incorrect because Carlos, as a security expert, needs precisely all the possible technical details of the architecture in order to analyze it accurately.\n  * **C) It would contain an outdated list of employees** is incorrect because network architecture diagrams describe devices, protocols and physical/logical interconnection topologies, not personnel records and rosters.\n  * **D) It would show only the old expansion plans** is incorrect because the diagram describes the state of the past active infrastructure, not future commercial development plans.\n\n* **Focused Mini-Example:** During a security inspection, an auditor detects a critical RDP vulnerability on a staging server. This specific server had been introduced three months earlier for a marketing department pilot test, but was absent from the year-old network architecture provided to the auditor.\n\n*Question ID: 64c15363528e3065c1379718*",
  },
  145: {
    topic: "Zero Trust Framework",
    scenario: "Neville, an experienced security engineer, suggests to management that a fictitious document titled 'admin_passwords.xlsx' be created and placed in a highly visible network share folder. The document contains fake credentials specifically designed to trigger an immediate intrusion alarm should an attacker decide to open or copy it.",
    question: "What type of decoy resource did Neville suggest creating?",
    options: [
      "A) Honeynet",
      "B) Honeypot",
      "C) Honeytoken",
      "D) Honeyfile",
    ],
    explanation: "The correct answer is **D) Honeyfile**.\n\n* **Why it's correct:** A **Honeyfile** is a decoy file or document specifically placed within corporate systems to attract the attention of possible intruders or cyber attackers. Because no legitimate user or process has any operational reason to access this file, any attempt to read, copy or modify it instantly generates a very high-priority security alert.\n* **Analysis of the distractors:**\n  * **A) Honeynet** is an entire fictitious decoy network containing multiple simulated hosts and systems to confuse and study attackers over time.\n  * **B) Honeypot** is a single decoy host, computer or service connected to the network to attract active attacks.\n  * **C) Honeytoken** refers to specific decoy records or data fragments (e.g. a fake SQL record or a decoy email address to detect spam) rather than an entire structured file stored on the filesystem as in this scenario.\n\n* **Focused Mini-Example:** A network administrator places a spreadsheet named `executive_salaries_2026.xlsx` in an open shared folder. The file contains fictitious data but is protected by a software sensor; if a curious employee or a hacker opens it, an immediate notification is sent to the SOC team.\n\n*Question ID: 64c04411e9668a02c0dfe0b*",
  },
  146: {
    topic: "Cryptographic Foundations",
    scenario: "The financial company 'Kelly Innovations LLC' intends to protect its digital transactions against any risk of forgery or retroactive alteration. The requirements mandate that each transaction record be protected through chained cryptographic algorithms, so that the hash value of each block is incorporated into the computation of the hash of the next block.",
    question: "Which of the following technologies fits this scenario perfectly?",
    options: [
      "A) Public Key Infrastructure (PKI)",
      "B) Blockchain",
      "C) Digital Watermarking",
      "D) Symmetric Encryption",
    ],
    explanation: "The correct answer is **B) Blockchain**.\n\n* **Why it's correct:** **Blockchain** is structured precisely as a sequence of data blocks linked in chronological order. Each block contains a group of transactions and includes the cryptographic hash of the previous block. This sequential linking means that any minimal modification to a past transaction breaks the chain of subsequent hashes, guaranteeing the absolute integrity of the historical data.\n* **Analysis of the distractors:**\n  * **A) Public Key Infrastructure (PKI)** manages digital identities and asymmetric certificates, but does not define a mechanism of chronological cryptographic chaining of financial records.\n  * **C) Digital Watermarking** is a technology for embedding hidden information inside multimedia files (e.g. images or audio) for copyright purposes, unrelated to the history of transactions.\n  * **D) Symmetric Encryption** serves to encrypt a piece of data to preserve its confidentiality using a shared secret key, but does not provide a distributed ledger architecture chained through hashing.\n\n* **Focused Mini-Example:** In a port logistics system, each digital customs stamp contains the cryptographic hash of the departure port's approval. If a customs officer tries to falsify the origin port's approval, the cryptographic chain breaks, instantly highlighting the anomaly.\n\n*Question ID: 6524cca4c4116404f67d29d*",
  },
  147: {
    topic: "Cryptographic Foundations",
    scenario: "An external client wants to transmit a highly confidential sensitive order to the headquarters of 'Dion Training' using asymmetric cryptography, ensuring that only and exclusively Dion Training is able to decrypt and read the content of the message.",
    question: "Which cryptographic key must the client use to encrypt the message so as to guarantee its maximum confidentiality?",
    options: [
      "A) Dion Training's public key",
      "B) The client's private key",
      "C) The escrow key",
      "D) The wildcard certificate",
    ],
    explanation: "The correct answer is **A) Dion Training's public key**.\n\n* **Why it's correct:** In asymmetric cryptography, to guarantee the **confidentiality** of a communication, the sender must always encrypt the message using the **recipient's public key** (in this case Dion Training's). Because a message encrypted with the public key can be decrypted exclusively through the corresponding secret, uniquely paired private key, and only Dion Training possesses that private key, no one else will be able to decrypt the message.\n* **Analysis of the distractors:**\n  * **B) The client's private key** must not be used for encryption if the goal is confidentiality: if the client encrypted with their own private key, anyone could decrypt it using the client's public key (which is in the public domain), guaranteeing only authenticity and non-repudiation (digital signature) but no confidentiality.\n  * **C) The escrow key** is not an operational key used in direct encryption flows, but rather a backup procedure for private keys.\n  * **D) The wildcard certificate** is used to protect web domains and HTTPS connections; it does not represent the asymmetric key to encrypt a text message.\n\n* **Focused Mini-Example:** If Alice wants to send her confidential bank IBAN to Dion Training, she encrypts it using Dion Training's public key. Only the academy, through its exclusive private key, will be able to decrypt and read that IBAN.\n\n*Question ID: 65257f22f1de9bff7fa68806*",
  },
  148: {
    topic: "Zero Trust Framework",
    scenario: "A government organization intends to implement a highly flexible and dynamic access control system that can evaluate in real time the unusual behavior of users (e.g. anomalous connection times or geographically impossible movements in time), requiring additional MFA authentication or blocking access if the calculated risk exceeds the allowed threshold.",
    question: "Which of the following solutions and technologies BEST meets this need?",
    options: [
      "A) Adaptive identity",
      "B) Security zones",
      "C) MAC (Mandatory Access Control)",
      "D) Policy-driven access control",
    ],
    explanation: "The correct answer is **A) Adaptive identity**.\n\n* **Why it's correct:** **Adaptive identity** (or risk-based authentication) allows multiple factors to be contextually evaluated in real time (such as geolocation, device type, past behavioral patterns, time) to dynamically determine the trust level of a login, adapting the authentication requests (e.g. requesting a second MFA verification or rejecting the connection in case of anomalies).\n* **Analysis of the distractors:**\n  * **B) Security zones** divide the physical or logical network into segments (e.g. DMZ, LAN) but do not dynamically analyze the behavioral changes of individual users.\n  * **C) MAC (Mandatory Access Control)** is an extremely rigid and centralized access control model based on fixed security labels and classifications, entirely lacking flexibility or the ability to automatically adapt to behavior.\n  * **D) Policy-driven access control** defines access controls based on preset corporate policies on the Control Plane, but the specific technology tasked with analyzing and adapting in real time to the user's identity and behavioral risk is Adaptive Identity.\n\n* **Focused Mini-Example:** A user usually authenticates from Milan at 9:00 using their corporate laptop. If the same user attempts a login from Singapore at 9:15, Adaptive Identity detects a geographically impossible inconsistency in time and blocks the attempt, requiring a double verification.\n\n*Question ID: 64c03b8a3a8522a3b5997a5a*",
  },
  149: {
    topic: "Security Controls",
    scenario: "The physical security department of 'Horizon Labs' must protect the main vehicle entrance and the sensitive perimeter of the central data center, physically preventing hostile high-speed cars or vehicles from ramming the glass entrances or the external barriers.",
    question: "Which street physical security measure is the MOST suitable for stopping moving vehicles?",
    options: [
      "A) Security checkpoint",
      "B) Intrusion Detection System",
      "C) Bollards",
      "D) Wire fencing",
    ],
    explanation: "The correct answer is **C) Bollards**.\n\n* **Why it's correct:** Street **bollards** are short, sturdy steel or concrete posts, solidly anchored underground, strategically positioned outside buildings to block and stop the physical impact of vehicles and vans, protecting the structures from ramming or accidental vehicle collisions.\n* **Analysis of the distractors:**\n  * **A) Security checkpoint** is a station for identifying and verifying drivers, but by itself it does not constitute a high-mechanical-strength barrier against ramming.\n  * **B) Intrusion Detection System** is a digital network logical control, ineffective against cars and physical land-based threats.\n  * **D) Wire fencing** delimits the corporate boundaries and slows down pedestrians, but has no stopping resistance against the impact mass of a motor vehicle.\n\n* **Focused Mini-Example:** At the main vehicle entrance of a bank data center, sturdy steel posts buried three meters deep are installed. If a hostile vehicle attempts an attack by ramming the perimeter, the bollards absorb the impact, destroying the vehicle but keeping the building intact.\n\n*Question ID: 65245928ae19f8bdaee92dc6*",
  },
  150: {
    topic: "Zero Trust Framework",
    scenario: "A security engineer designs the placement of a seemingly vulnerable, unpatched decoy machine inside an isolated subnet of the company, in order to study the hacking techniques used by attackers and capture valuable logs without exposing the real servers.",
    question: "Which of the following options BEST describes the primary function of a honeypot in a network architecture?",
    options: [
      "A) To detect and divert potential attackers",
      "B) To block unauthorized access to the real servers",
      "C) To recover data lost following a ransomware attack",
      "D) To prevent malware from executing automatically",
    ],
    explanation: "The correct answer is **A) To detect and divert potential attackers**.\n\n* **Why it's correct:** The fundamental purpose of a **honeypot** is to act as an appealing decoy within the network to attract and divert the attackers' activities away from the real production resources. This allows security teams to detect intrusions promptly and gather detailed telemetry on the attacker's techniques and tools.\n* **Analysis of the distractors:**\n  * **B) To block access** is the task of active prevention and filtering systems, such as Firewalls, IPS or EDR, whereas the honeypot on the contrary deliberately invites the connection.\n  * **C) To recover data** is the function of backup and disaster recovery procedures, not of network decoys.\n  * **D) To prevent malware from executing** is handled by antivirus, anti-malware software and EDR through signatures or local behavioral analysis.\n\n* **Focused Mini-Example:** A seemingly vulnerable, obsolete server with no real valuable data is placed within the corporate perimeter. Any attempt to scan or exploit this machine (honeypot) makes it possible to immediately identify and isolate the attacker's IP address on the LAN.\n\n*Question ID: 6720ff1fe8b5ca200ac63846*",
  },
  151: {
    topic: "Symmetric Encryption",
    scenario: "A security engineer must select a symmetric encryption algorithm to protect a continuous stream of real-time data transmitted over a network connection, where the total length of the message is not predetermined at the start of the transmission.",
    question: "Which type of symmetric encryption is the MOST suitable for scenarios in which the total length of the message is not predetermined and the data is encrypted a single byte or bit at a time?",
    options: [
      "A) Block cipher",
      "B) Stream cipher",
      "C) Initialization Vector (IV)",
      "D) AES-256",
    ],
    explanation: "The correct answer is **B) Stream cipher**.\n\n* **Why it's correct:** **Stream ciphers** encrypt the plaintext one byte or bit at a time, making them ideal for scenarios in which the total length of the message is not known or for continuous real-time data streams. They combine the plaintext with a pseudo-randomly generated key stream (keystream) derived from the symmetric key.\n* **Analysis of the distractors:**\n  * **A) Block cipher** divides the data into fixed-size blocks (e.g. 128 bits) before encrypting them, requiring padding if the last block is incomplete.\n  * **C) Initialization Vector (IV)** is a random input value used to ensure the uniqueness of the resulting ciphertext even with identical plaintexts, but it is not a type of encryption in its own right.\n  * **D) AES-256** is a widely used standard 256-bit symmetric algorithm, but it is specifically a block cipher and not the general category required.\n\n* **Focused Mini-Example:** During an encrypted phone call over a messaging app or an SSH session, a stream cipher encrypts the voice or control packets one bit at a time as soon as they are captured by the microphone, guaranteeing very low latency without having to wait for entire memory blocks to fill.\n\n*Question ID: 6525878ba8b3b77bfb418cae*",
  },
  152: {
    topic: "Emerging Technologies",
    scenario: "The company 'Sweet as Thyme', a food flavoring supplier, wants to track its supply chain using a decentralized peer-to-peer network that relies on a shared, immutable public ledger to guarantee the integrity of transactions and provide a permanent record of all the exchanges made.",
    question: "What is the technology they are using called?",
    options: [
      "A) Salting",
      "B) Key Stretching",
      "C) Blockchain",
      "D) Digital Signatures",
    ],
    explanation: "The correct answer is **C) Blockchain**.\n\n* **Why it's correct:** **Blockchain** is a technology based on a distributed public ledger maintained by a peer-to-peer network. It allows the transparent and public verification of all transactions, guaranteeing the integrity and permanent immutability of the recorded data.\n* **Analysis of the distractors:**\n  * **A) Salting** is a cryptographic technique that consists of adding random data (salt) to passwords before hashing them to prevent attacks via precomputed tables (rainbow tables).\n  * **B) Key Stretching** is a method used to lengthen the computation time of a password's hash, making brute-force attacks much slower and ineffective.\n  * **D) Digital signatures** serve to guarantee the authenticity and integrity of a single message or document, but do not by themselves constitute a network of distributed ledgers for the public verification of transactions.\n\n* **Focused Mini-Example:** A winery records every step of the bottle (from the grape harvest, to the sea shipment, to the distributor) on a public blockchain. Because the blocks are cryptographically linked, no intermediate distributor can falsify the date or storage temperature.\n\n*Question ID: 64c3dd9646cada5acd7b5a98*",
  },
  153: {
    topic: "Zero Trust Architecture",
    scenario: "A company is implementing a Zero Trust architecture to protect its cloud resources. The administrator must configure the logical component responsible for evaluating users' access requests, processing them based on defined security policies, verification of the requester's identity and real-time threat telemetry before granting or denying access.",
    question: "In the Zero Trust model, which component focuses on making decisions about who can access which resources based on policies, identity verification and threat analysis?",
    options: [
      "A) Policy-driven access control",
      "B) Implicit trust zones",
      "C) Control Plane",
      "D) Data Plane",
    ],
    explanation: "The correct answer is **C) Control Plane**.\n\n* **Why it's correct:** In the Zero Trust architecture, the **Control Plane** acts as the decision-making brain. Its task is to receive and evaluate access requests by analyzing identity, policies, threat telemetry and risk level, dynamically authorizing or denying the connection.\n* **Analysis of the distractors:**\n  * **A) Policy-driven access control** is a strategy or criterion used by the Control Plane, but does not represent the entire infrastructure component responsible for the overall decision-making process.\n  * **B) Implicit trust zones** are areas where communication is allowed without further checks, a concept that the Zero Trust philosophy aims to minimize, and they perform no decision-making functions.\n  * **D) The Data Plane** deals exclusively with the actual transport of data packets once access has been validated and allowed by the Control Plane.\n\n* **Focused Mini-Example:** An employee requests access to a shared folder at 3 a.m. from an unusual IP in Asia. The Policy Engine and the Policy Administrator (components of the Control Plane) analyze the threat and deny access, ordering the Data Plane to block the packets.\n\n*Question ID: 65245f47db866f2dfdab26cf*",
  },
  154: {
    topic: "Public Key Infrastructure",
    scenario: "The company 'Trust Us' operates in the cybersecurity sector as a trusted third-party entity. It issues and manages cryptographic security credentials and applies digitally signed wrappers to public keys to enable message encryption and secure web authentication.",
    question: "What type of entity or company is 'Trust Us'?",
    options: [
      "A) Root of Trust",
      "B) Blockchain",
      "C) Certificate Authority (CA)",
      "D) Registration Authority (RA)",
    ],
    explanation: "The correct answer is **C) Certificate Authority (CA)**.\n\n* **Why it's correct:** A **Certificate Authority (CA)** is a trusted third-party entity responsible for issuing, managing and revoking digital certificates. It applies a digital signature to the public keys of users or companies to certify their identity within a Public Key Infrastructure (PKI).\n* **Analysis of the distractors:**\n  * **A) The Root of Trust (RoT)** is the primary source of trust in a hardware or software system (e.g. a TPM chip or a self-signed root certificate), but it does not represent the organization or company that manages and issues certificates to third parties.\n  * **B) Blockchain** is a decentralized technology based on peer-to-peer distributed ledgers to track transactions, not a centralized key-management authority.\n  * **D) The Registration Authority (RA)** verifies the identity of users requesting a certificate and forwards the approved request to the CA, but does not have the technical power to sign and issue the final certificate.\n\n* **Focused Mini-Example:** The company Sweet as Thyme buys an SSL certificate from DigiCert (an accredited CA). DigiCert verifies the company's identity and digitally signs its public key. From that moment, all browsers recognize the site as trusted and secure through HTTPS.\n\n*Question ID: 64c3df3bec55f15597b20773*",
  },
  155: {
    topic: "Change Management",
    scenario: "After the IT department proposed installing a critical software update on the corporate ERP, Kevin, a systems analyst, examines in detail the potential side effects of this change on system performance, user productivity and corporate operational workflows.",
    question: "Which term BEST describes the assessment conducted by Kevin?",
    options: [
      "A) Approval process",
      "B) Backout plan",
      "C) Version control",
      "D) Impact analysis",
    ],
    explanation: "The correct answer is **D) Impact analysis**.\n\n* **Why it's correct:** **Impact Analysis** is a crucial phase of Change Management in which the possible consequences, both positive and negative, of a proposed change on information systems, personnel and business processes are studied in advance to prevent unexpected disruptions.\n* **Analysis of the distractors:**\n  * **A) The approval process** is the formal procedure in which the Change Advisory Board (CAB) or a manager signs off to authorize the change, an operation carried out *after* analyzing the impact.\n  * **B) The backout plan (rollback plan)** describes the technical steps needed to undo the change and return to the previous stable configuration in case of malfunctions in production.\n  * **C) Version control** is a system that records the changes made to files over time (e.g. Git), allowing past versions of code or documents to be traced.\n\n* **Focused Mini-Example:** Kevin receives the request to update the version of Java on the ERP. Before proceeding, he performs an Impact Analysis, discovering that the update would break compatibility with a legacy module used by the accounting department for electronic invoicing.\n\n*Question ID: 64c137e23837c7dbc550d89a*",
  },
  156: {
    topic: "Cryptographic Methods",
    scenario: "The company 'Reason and Rhyme', an online tutoring service, wants to strengthen the security of its members' passwords. Although they have always used functions to convert passwords into fixed-length sequences (hashes), they now decide to repeat this mathematical process thousands of times to increase the computing power and time needed for a malicious user to crack the secret codes through brute-force.",
    question: "What is this strengthening method called?",
    options: [
      "A) Standard hashing",
      "B) Salting",
      "C) Key Stretching",
      "D) Digital Signatures",
    ],
    explanation: "The correct answer is **C) Key Stretching**.\n\n* **Why it's correct:** **Key Stretching** (such as PBKDF2 or bcrypt) is a cryptographic technique that consists of subjecting a password or key to a repeated hashing process (e.g. thousands of cycles) to make it deliberately slow from a computational standpoint, drastically hindering brute-force or dictionary attacks.\n* **Analysis of the distractors:**\n  * **A) Standard hashing** merely converts the input once, an instantaneous operation that does not slow down modern GPU-based cracking systems sufficiently.\n  * **B) Salting** consists of adding a unique random value to the password before hashing to prevent the use of rainbow tables, but by itself it does not involve the iterative repetition of the hashing process described in the scenario.\n  * **D) Digital signatures** are used to guarantee the authenticity and integrity of the sender of a file or message, with no bearing on protecting the database of user passwords.\n\n* **Focused Mini-Example:** When a user sets a password on a site, it is passed to an algorithm like bcrypt that performs the hashing 10,000 consecutive times (Key Stretching). If a hacker steals the database, each brute-force attempt will take fractions of a second instead of nanoseconds, making cracking impossible.\n\n*Question ID: 64c3dd26cecaf5b2df5d311*",
  },
  157: {
    topic: "Zero Trust Architecture",
    scenario: "While planning a transition to the Zero Trust philosophy, the security team must configure a mechanism on the Control Plane that manages access authorizations to corporate resources by strictly relying on centralized policies, organizational roles and corporate compliance requirements.",
    question: "Which of the following options is a component of the Zero-Trust architecture that manages user access based on their roles and responsibilities on the Control Plane?",
    options: [
      "A) Role-based access control (RBAC)",
      "B) Least privilege",
      "C) Implicit deny",
      "D) Policy-driven access control",
    ],
    explanation: "The correct answer is **D) Policy-driven access control**.\n\n* **Why it's correct:** In the Zero Trust architecture, **Policy-driven access control** is the pillar of the Control Plane that dynamically regulates access at a granular level based on well-defined corporate requirements and policies, validating access authorizations against the real-time context.\n* **Analysis of the distractors:**\n  * **A) RBAC (Role-based access control)** assigns permissions to predefined roles, but it is a generic authorization model applicable to any legacy system, not specific or exclusive to the Zero Trust architecture.\n  * **B) The least-privilege principle** is a general security best practice that provides for assigning only the minimum permissions needed to perform a task.\n  * **C) Implicit deny** is a basic security rule (everything not explicitly allowed is forbidden) commonly applied to traditional firewalls and ACLs.\n\n* **Focused Mini-Example:** In a hospital adopting Zero Trust, a corporate rule establishes that doctors can access clinical records only if connected from the department's Wi-Fi network. If a doctor attempts access from home, the policy-based system (Policy-driven Access Control) intervenes by denying authorization.\n\n*Question ID: 6523910e707b96d3205a83a2*",
  },
  158: {
    topic: "Software Management",
    scenario: "During the installation of a new software application within the systems of 'Kelly Innovations LLC', the IT team finds that a specific module does not start and generates errors unless another specific software package is already installed and configured in the operating system.",
    question: "Which of the following options BEST describes this situation?",
    options: [
      "A) Running a legacy application",
      "B) Hardware compatibility issue",
      "C) Enabling unrestricted user access",
      "D) Presence of a software dependency",
    ],
    explanation: "The correct answer is **D) Presence of a software dependency**.\n\n* **Why it's correct:** A **software dependency** occurs when an application or software module mandatorily requires another program, library (e.g. a DLL or an NPM library) or service in order to function correctly.\n* **Analysis of the distractors:**\n  * **A) A legacy application** refers to obsolete or outdated software still in use in the organization for business-continuity reasons, not to an installation constraint between modules.\n  * **B) A compatibility issue** is a more generic term relating to the inability of software to run on certain operating systems, processors or different versions, but it does not precisely express the direct prerequisite relationship.\n  * **C) Unrestricted access** concerns users' authorizations and privileges in logical access control systems, with no relation to software requirements.\n\n* **Focused Mini-Example:** When you try to install a video editor on Linux, the installation package stops, indicating that the presence of `ffmpeg` is required to encode the videos. The video editor has a direct software dependency on `ffmpeg`.\n\n*Question ID: 6524d5e09eb2e17ced10c45f*",
  },
  159: {
    topic: "Public Key Infrastructure",
    scenario: "In a high-security organization that uses public-key cryptography, management wants to ensure that, should an employee lose their private decryption key for sensitive corporate files, the company can recover the key through an authorized trusted third-party entity to avoid the permanent loss of data.",
    question: "Which PKI component or process allows a copy of the cryptographic keys to be deposited and kept with a third party to enable their recovery in case of loss?",
    options: [
      "A) Public Key Infrastructure (PKI)",
      "B) Key exchange",
      "C) Key escrow",
      "D) Key generation",
    ],
    explanation: "The correct answer is **C) Key escrow**.\n\n* **Why it's correct:** **Key escrow** is a system or arrangement in which a copy of a cryptographic key is deposited in a protected way with a trusted third party. This ensures that data can be recovered and decrypted in case of accidental loss of the original key or for legal investigative purposes.\n* **Analysis of the distractors:**\n  * **A) Public Key Infrastructure (PKI)** is the overall ecosystem (rules, roles, policies, software) that manages the entire lifecycle of digital certificates and public/private keys.\n  * **B) Key exchange** is the cryptographic method (e.g. Diffie-Hellman) by which two parties securely share a symmetric key over an unprotected channel.\n  * **D) Key generation** is simply the initial mathematical phase in which the key pair is created, without involving backup or third-party storage.\n\n* **Focused Mini-Example:** For national security reasons, a government agency deposits a copy of the private keys used by its field agents in a Key Escrow kept in a protected vault. If an agent loses their devices or is injured, their superiors can recover and decrypt the reports.\n\n*Question ID: 64c27848281353282d578ef4*",
  },
  160: {
    topic: "Public Key Infrastructure",
    scenario: "The company 'Dion Training' wants to increase the trustworthiness and security reputation of its e-commerce site in the eyes of external customers. To do so, it needs an SSL/TLS certificate that is digitally signed and validated by an external authority officially recognized by the major browsers.",
    question: "Which type of certificate should it request and install?",
    options: [
      "A) Self-signed certificate",
      "B) Certificate Signing Request (CSR)",
      "C) Wildcard certificate",
      "D) Third-party certificate",
    ],
    explanation: "The correct answer is **D) Third-party certificate**.\n\n* **Why it's correct:** A **third-party certificate** is issued and digitally signed by a globally recognized public Certificate Authority (CA). This guarantees to visitors' browsers that the website legitimately belongs to the stated organization, removing security warnings.\n* **Analysis of the distractors:**\n  * **A) A self-signed certificate** is signed by the creator itself without the intervention of a trusted third-party authority; external browsers will flag it as insecure or untrusted.\n  * **B) A CSR (Certificate Signing Request)** is the file containing the applicant's data and public key sent to the CA to request the issuance of the certificate, so it is not a type of certificate in its own right.\n  * **C) A wildcard certificate** allows multiple subdomains of a main domain to be protected (e.g. `*.diontraining.com`), but by itself it does not necessarily indicate whether it is self-signed or issued by a trusted third party.\n\n* **Focused Mini-Example:** An academy's student portal decides to replace the old self-signed certificate with one issued by Let's Encrypt. From that moment, all browsers natively recognize the HTTPS connection as trusted and secure, eliminating the threatening red warning message.\n\n*Question ID: 6524eff8b5ce7a64909dc78a*",
  },
  161: {
    topic: "Risk Management & Analysis",
    scenario: "The management of an organization is evaluating the possible negative consequences for the business should a serious cyber incident occur, focusing on the operational, financial and reputational repercussions.",
    question: "Which of the following terms is the standard used in risk management to describe the consequences or the extent of the damage caused by a risk event on an organization?",
    options: [
      "A) EF (Exposure Factor)",
      "B) Impact",
      "C) Damage proportion",
      "D) ARO (Annualized Rate of Occurrence)",
    ],
    explanation: "The correct answer is **B) Impact**.\n\n* **Why it's correct:** In risk management, **Impact** represents the measure of the potential damage or overall consequences (operational, financial, legal and reputational) that an organization would suffer should a threat successfully exploit a vulnerability.\n* **Analysis of the distractors:**\n  * **A) EF (Exposure Factor)** is a percentage value that describes the fraction or share of an asset's value that would be lost due to a single specific incident, not the qualitative or overall impact on the business.\n  * **C) Damage proportion** is a non-standard or informal wording to describe the percentage of damage, but it is not part of the formal risk-management terms.\n  * **D) ARO (Annualized Rate of Occurrence)** quantifies the frequency or estimated number of times per year that a given risk is expected to occur, not the effect or severity of the event itself.\n\n* **Focused Mini-Example:** If a database server containing the national bank's account details goes offline for a day, the Impact will not only be the hourly cost of the infrastructure, but also the huge loss of reputation, the regulator's fines and the total block of the country's financial transactions.\n\n*Question ID: 65487c13acaa0dbbe5e80233*",
  },
  162: {
    topic: "Third-Party Risk & Assessments",
    scenario: "To ensure the security of its sensitive data hosted at a critical SaaS service provider, a company decides to request or conduct an active, authorized verification, simulating real attacks on the provider's external systems in order to identify any security vulnerabilities.",
    question: "Which of the following activities involves an authorized, active security test on a third party's systems?",
    options: [
      "A) Vendor assessment",
      "B) Penetration testing",
      "C) Vendor monitoring",
      "D) Supply chain analysis",
    ],
    explanation: "The correct answer is **B) Penetration testing**.\n\n* **Why it's correct:** **Penetration testing** on third-party systems consists of controlled and formally authorized attack simulations aimed at testing the effectiveness of the provider's active logical and technological security controls, interacting directly and actively with its systems.\n* **Analysis of the distractors:**\n  * **A) Vendor assessment** is a documentary or questionnaire-based evaluation process (e.g. SOC 2, ISO 27001, self-declarations) to determine the provider's general suitability, usually without active technical interaction or simulated attacks.\n  * **C) Vendor monitoring** refers to the continuous or periodic tracking and control of the provider's metrics and compliance (e.g. SLA checks, threat-intelligence feeds), but does not include performing active penetrations on its systems.\n  * **D) Supply chain analysis** is the study of the upstream supply chain to assess the risks arising from sub-suppliers (hardware components, software libraries, logistics partners) and usually does not involve active, direct engagement through attack testing.\n\n* **Focused Mini-Example:** An e-commerce company hires a team of authorized ethical hackers to conduct a penetration test against its cloud logistics provider's infrastructure. The hackers actively try to break into the provider's web portal to demonstrate the presence of SQL Injection vulnerabilities that would allow shipment data to be stolen.\n\n*Question ID: 64bb3aa1ef9efcf8d3fa329c*",
  },
  163: {
    topic: "Compliance, Privacy, Due Diligence & Due Care",
    scenario: "Connor has just received a promotion within the corporate data governance department and takes on the official role of Data Processor.",
    question: "In the context of data processing and governance, which task falls directly and exclusively under Connor's responsibility in this new position?",
    options: [
      "A) Manage and control overall access to data",
      "B) Exclusively guarantee the physical security of all data storage devices",
      "C) Analyze and process the data on behalf of the Data Controller",
      "D) Establish data ownership and define the primary purposes of its use",
    ],
    explanation: "The correct answer is **C) Analyze and process the data on behalf of the Data Controller**.\n\n* **Why it's correct:** The **Data Processor** acts on the instructions of and on behalf of the **Data Controller**. Its specific task is to carry out material or logical operations on the data (such as storage, analysis, processing or manipulation), strictly following the directives received.\n* **Analysis of the distractors:**\n  * **A) Managing access control** to data is a technical and procedural responsibility usually shared, but the definition of access rules and permissions remains a top-level task of the Data Controller (and the Data Owner), not the primary activity of the Data Processor.\n  * **B) Guaranteeing the physical security of devices** is important for anyone who manages the infrastructure, but it is not the primary or distinctive task of the Data Processor role in the privacy framework.\n  * **D) Establishing data ownership** and determining the purposes or means of processing are exclusive prerogatives of the Data Controller or the individual appointed Data Owners.\n\n* **Focused Mini-Example:** A university (Data Controller) hires an external company (Data Processor) to manage the newsletters intended for students. The university provides the email address databases and establishes the sending rules. Connor, an employee of the external company, materially processes the sending of the newsletters following only the university's directives.\n\n*Question ID: 64b88d6388b3fb59a48a103e*",
  },
  164: {
    topic: "Baselines & Configuration Drift",
    scenario: "While planning a major update of the corporate ERP system, the IT team decides to conduct a controlled simulation and pilot test (trial run) in an isolated staging environment before performing the final rollout to production across the entire organization.",
    question: "Which of the following practices highlights the importance of performing preliminary tests and pilot runs on significant changes before their full implementation?",
    options: [
      "A) Network segmentation policy",
      "B) Change management practices",
      "C) Incident response protocol",
      "D) Business continuity planning",
    ],
    explanation: "The correct answer is **B) Change management practices**.\n\n* **Why it's correct:** **Change Management practices** focus on the controlled, tested and documented implementation of changes to the IT infrastructure. Performing a preliminary trial or pilot test (trial run) for major changes helps identify unexpected business impacts before the final release, ensuring a smooth and secure transition.\n* **Analysis of the distractors:**\n  * **A) Network segmentation** is a network architecture measure aimed at isolating different segments for performance and security reasons, but it does not define the operational procedures for making structural changes to systems.\n  * **C) Incident Response** focuses on detecting, containing and eradicating an active threat or cyberattack, not on planning infrastructure changes.\n  * **D) Business continuity (BCP)** defines the processes to ensure the company's survival during and after a disaster, not the detailed methodology for the daily, controlled execution of ERP tests.\n\n* **Focused Mini-Example:** Before updating the corporate ERP platform globally, the IT team clones the entire database in a staging environment and runs the pilot update (trial run). This makes it possible to notice that the new version crashes the invoice-issuing module, avoiding a disaster in production.\n\n*Question ID: 65448e2b32fb2f43cec1821b*",
  },
  165: {
    topic: "Compliance, Privacy, Due Diligence & Due Care",
    scenario: "Following an inspection by the supervisory authority, a financial company is fined for not having implemented adequate encryption measures to protect customer data, directly violating mandatory government privacy regulations.",
    question: "Which of the following options specifically represents the monetary penalty imposed by a regulatory body or a court as punishment for non-compliance with regulations, standards or agreements?",
    options: [
      "A) Fee",
      "B) Fine",
      "C) Deductible",
      "D) Sanction",
    ],
    explanation: "The correct answer is **B) Fine**.\n\n* **Why it's correct:** A **Fine** is a specific monetary penalty imposed by a government body, a court or a supervisory authority (e.g. the Data Protection Authority) as a direct sanction for the violation of a rule, a regulation (such as GDPR or CCPA) or a specific contractual obligation.\n* **Analysis of the distractors:**\n  * **A) A Fee** represents the payment due for a legitimate service offered by professionals or organizations (e.g. administrative charges, license fees), so it does not constitute a punitive penalty.\n  * **C) A Deductible** is the amount established by an insurance policy that the insured must pay out of pocket before the company indemnifies the rest of the claim, with no connection to legal violations.\n  * **D) Sanction** is a much broader term that includes not only monetary fines but also commercial restrictions, operational blocks, asset seizures or data-processing bans. The specific monetary penalty is called a 'fine'.\n\n* **Focused Mini-Example:** The Data Protection Authority fines a telephone operator €20 million for having processed subscribers' personal data without consent for advertising purposes. This monetary penalty represents a Fine imposed by the supervisory body for GDPR non-compliance.\n\n*Question ID: 6522188a545597207fc73b43*",
  },
  166: {
    topic: "Governance, Boards & Committees",
    scenario: "Needs' Bigger Boats, a fishing-gear company, is reviewing its data governance framework to clarify the roles and responsibilities of the staff. They want to ensure that each figure has well-defined duties to maintain the integrity and security of information. One of the fundamental roles identified is that of the Data Owner.",
    question: "In the context of data governance, which of the following statements BEST describes the main responsibility of a Data Owner?",
    options: [
      "A) Makes strategic decisions about how data is used, classified and who is authorized to access it",
      "B) Materially handles the technical implementation and enforcement of access controls on the systems",
      "C) Processes and manipulates the data on the direct instruction of the Data Controller",
      "D) Operationally guarantees the daily integrity and confidentiality of the data stored in the databases",
    ],
    explanation: "The correct answer is **A) Makes strategic decisions about how data is used, classified and who is authorized to access it**.\n\n* **Why it's correct:** The **Data Owner** is ultimately responsible for a specific set of data within the organization (e.g. the head of human resources for personnel data). They have the legal and business authority to classify the information (e.g. confidential, public) and establish the business requirements on who should have the right to access it and for what purposes.\n* **Analysis of the distractors:**\n  * **B) Materially managing access** (e.g. configuring Active Directory, firewalls or database roles) is the task of the **Data Custodian** or the IT department, which technically implements the decisions made by the Data Owner.\n  * **C) Processing or manipulating the data** on third-party instructions is the operational task of the **Data Processor**, not the organization's Data Owner.\n  * **D) Preserving the daily integrity of the data** at the level of backup and physical maintenance of the databases is an operational responsibility belonging to the technical roles (Data Custodians, database administrators).\n\n* **Focused Mini-Example:** The HR Director is appointed Data Owner for the employee archive. They decide that the archive must be classified as 'Confidential', establish that only the HR department can access the sensitive data and authorize the purposes for using such data to calculate payslips.\n\n*Question ID: 64b8955588b3fb59a48a1052*",
  },
  167: {
    topic: "Compliance, Privacy, Due Diligence & Due Care",
    scenario: "A company's board of directors outlines a high-level directive that establishes the overall philosophy, the essential security requirements and the organization's commitment to protecting all IT assets and customer data.",
    question: "What is the main purpose of an Information Security Policy?",
    options: [
      "A) Explain what employees can do with corporate information after leaving the company",
      "B) Define the permitted and acceptable use of IT resources by individual users",
      "C) Establish the overall guidelines, standards and directive requirements for safeguarding data and systems",
      "D) Outline step-by-step the immediate operational actions for containing an active cyberattack",
    ],
    explanation: "The correct answer is **C) Establish the overall guidelines, standards and directive requirements for safeguarding data and systems**.\n\n* **Why it's correct:** An **Information Security Policy** is a high-level governance document approved by management that declares the company's strategic commitment to protecting the confidentiality, integrity and availability (CIA) of its information, setting the general rules and control requirements to be implemented.\n* **Analysis of the distractors:**\n  * **A) Post-contractual duties** and the protection of trade secrets after an employee's resignation are typically governed by legal confidentiality agreements (NDA - Non-Disclosure Agreement), not by general internal policies.\n  * **B) Defining the acceptable use** of corporate IT resources (such as the internet or company PCs) is the purpose of the **Acceptable Use Policy (AUP)**, which is a specific derived sub-document and not the overall security policy.\n  * **D) Outlining the immediate operational steps** to contain an incident is the objective of the **Incident Response Plan**.\n\n* **Focused Mini-Example:** The board of directors signs the group's 'Data Security Policy'. This document formally establishes that all company laptops must be encrypted, that passwords must meet certain requirements and that violating these rules will result in disciplinary sanctions.\n\n*Question ID: 64b7589d249e6858ce581c57*",
  },
  168: {
    topic: "Risk Management & Analysis",
    scenario: "A bank's security committee conducts a formal brainstorming and auditing session to list, catalog and document all the possible negative events (malware, physical attacks on ATMs, disloyal employees, obsolete security policies) that could harm the institution's operations and assets.",
    question: "Which of the following terms BEST describes the systematic process of detecting, initially analyzing and recording potential risk events or threats in order to plan the appropriate corporate mitigation strategies?",
    options: [
      "A) Risk identification",
      "B) Vulnerability assessment",
      "C) Policy review",
      "D) Threat intelligence",
    ],
    explanation: "The correct answer is **A) Risk identification**.\n\n* **Why it's correct:** **Risk identification** is the first and fundamental step of the risk-management process, in which an organization proactively detects, preliminarily analyzes and documents (often within a risk register) all the external or internal threats, vulnerabilities or procedural inefficiencies that could negatively impact the business.\n* **Analysis of the distractors:**\n  * **B) A Vulnerability assessment** is a technical activity focused on identifying specific flaws and bugs in systems or networks, constituting a useful sub-tool for risk identification but not the overall definition of the entire organizational process.\n  * **C) Policy review** is an activity aimed at assessing the effectiveness and currency of corporate policy documents, but it does not represent the complete process of detecting all cyber or physical threats.\n  * **D) Threat intelligence** consists of acquiring structured external information on active global threats (e.g. indicators of compromise of new malware campaigns) that feed defensive strategies, but it is not the same as the overall internal enterprise risk-assessment process.\n\n* **Focused Mini-Example:** During a monthly committee, the security team carries out a brainstorming to identify risks: it notes in the risk register the possibility of earthquakes in the data center district, the potential obsolescence of the servers and the risk of phishing attacks targeting the administrative department.\n\n*Question ID: 6548756a758b2ddd586d0fd3*",
  },
  169: {
    topic: "Third-Party Risk & Assessments",
    scenario: "While a company is evaluating the purchase of a new cloud-based document management service, a security analyst carries out a formal, in-depth investigation (due diligence) by requesting from the provider its SOC 2 Type II audit reports, its data backup policy and its cryptographic standards.",
    question: "In the context of selecting external suppliers, what is the main objective for which a security analyst performs due diligence activities?",
    options: [
      "A) Ensure that the selected supplier is the absolute cheapest option in the list of candidates",
      "B) Evaluate exclusively the delivery speed of the products and the logistical punctuality of the seller",
      "C) Compare the secondary supplier networks of the various candidates to verify they monitor their supply chain",
      "D) Ensure that the supplier's security practices, controls and policies are aligned with the organization's requirements and standards",
    ],
    explanation: "The correct answer is **D) Ensure that the supplier's security practices, controls and policies are aligned with the organization's requirements and standards**.\n\n* **Why it's correct:** In the third-party risk management process, conducting **Due Diligence** means gathering verifiable evidence, security reports (e.g. ISO certifications, SOC reports) and technical documentation to proactively validate that the protective measures implemented by the supplier adequately protect the corporate data and fully satisfy the internal policies of the acquiring organization.\n* **Analysis of the distractors:**\n  * **A) Selecting the cheapest option** is an objective of the purchasing office or management control (cost optimization), not the security objective of cyber due-diligence investigations.\n  * **B) Supply speed and logistics** concern the commercial and operational reliability of the production chain, but they do not exhaust the cybersecurity analysis focused on data-protection compliance.\n  * **C) Monitoring the suppliers upstream of the suppliers** (the secondary supply chain) is an advanced overall supply-chain risk-analysis activity, which goes beyond the standard and immediate boundaries of a single initial compliance investigation on the direct partner.\n\n* **Focused Mini-Example:** Before signing a contract with a cloud CRM provider, the security analyst carefully examines the provider's SOC 2 Type II report and data encryption policy (Due Diligence) to ensure that the corporate customers' data is not stored insecurely.\n\n*Question ID: 64bb3ca1eff2b06d2ceda18b*",
  },
  170: {
    topic: "Governance, Boards & Committees",
    scenario: "Florence is the founder CEO of a rapidly growing tech start-up. She has structured the company so that the final decision-making authority for any department (IT, cybersecurity, purchasing, human resources) resides centrally and directly in her top corporate office.",
    question: "Which type of governance characterizes the organization led by Florence?",
    options: [
      "A) Board governance",
      "B) Centralized governance",
      "C) Decentralized governance",
      "D) Committee governance",
    ],
    explanation: "The correct answer is **B) Centralized governance**.\n\n* **Why it's correct:** **Centralized governance** is defined by the concentration of decision-making power and control directives in a single point of top authority (such as a single person or a single central office). All critical decisions are made at the top and propagated in a cascade downward to all departments of the organization.\n* **Analysis of the distractors:**\n  * **A) Board governance** refers to the overall strategic direction entrusted to an elected board of directors representing the shareholders, which meets periodically and usually delegates day-to-day operational power.\n  * **C) Decentralized governance** provides for the delegation of operational and budget decisions to the individual peripheral departments or business units, which can operate autonomously with their own local policies.\n  * **D) Committee governance** describes a structure in which decisions are managed democratically and collectively through committees structured for specific thematic areas (e.g. risk committee, audit committee), slowing reaction times but increasing cross-functional alignment.\n\n* **Focused Mini-Example:** Florence, the start-up CEO, establishes that any purchase of software licenses, even at minimal cost or for temporary use in a single department, must be signed personally by her. This ensures very tight control but slows down the individual teams' approval flows.\n\n*Question ID: 64b88cda6ccfbae323bb6ab0*",
  },
  171: {
    topic: "Business Continuity & Disaster Recovery",
    scenario: "At Dion Training, the IT team is working to improve its business continuity plan (BCP). They need to measure the actual technical time needed to diagnose a failure, repair the damaged hardware or apply a corrective patch to a system that has crashed, bringing the infrastructure back to its original operating conditions.",
    question: "Which specific technical-maintenance and reliability time metric do they want to calculate in this scenario?",
    options: [
      "A) MTTR (Mean Time to Repair)",
      "B) MTBF (Mean Time Between Failures)",
      "C) RPO (Recovery Point Objective)",
      "D) RTO (Recovery Time Objective)",
    ],
    explanation: "The correct answer is **A) MTTR (Mean Time to Repair)**.\n\n* **Why it's correct:** **MTTR (Mean Time to Repair)** measures the average time needed to repair and restore a faulty component or system after a failure or service interruption, indicating the responsiveness and efficiency of the technicians in resolving the problem.\n* **Analysis of the distractors:**\n  * **B) MTBF (Mean Time Between Failures)** measures the stability and reliability of the hardware over time, representing the average time that elapses between two successive failures of the same operating system or device.\n  * **C) RPO (Recovery Point Objective)** is a business-planning metric that establishes the maximum period of data, measured in time (e.g. hours or days), that the company is willing to lose following a disaster (it determines the backup frequency).\n  * **D) RTO (Recovery Time Objective)** is the maximum time objective allowed to bring the entire business process back online following a disaster, encompassing not only the physical repair of the failure (MTTR) but also all the logistical activities, tests and configuration of the services.\n\n* **Focused Mini-Example:** An email server crashes at 10:00. The technician intervenes at 10:15, diagnoses the hard-disk failure, replaces it, restores the configuration and brings the server back online at 11:30. The mean time to repair (MTTR) for this incident was 1 hour and 30 minutes.\n\n*Question ID: 64b9f7683f4084e37d4f8ff9*",
  },
  172: {
    topic: "Agreements & Contracts",
    scenario: "Two software houses decide to enter into a formal commercial agreement to found a joint venture and sell a joint software solution on the market, outlining the company shares, the management of profits and the fate of the intellectual property created.",
    question: "Which of the following elements does NOT typically fall among the clauses and aspects addressed within a Business Partnership Agreement (BPA)?",
    options: [
      "A) Exit strategies",
      "B) Responsibilities for software updates",
      "C) Ownership of intellectual property",
      "D) Profit-sharing arrangements",
    ],
    explanation: "The correct answer is **B) Responsibilities for software updates**.\n\n* **Why it's correct:** A **BPA (Business Partnership Agreement)** is a purely commercial and legal contract that defines the financial structure, ownership, mutual responsibilities between partners and corporate dynamics (e.g. the division of profits and losses, or exit/dissolution strategies). Responsibility for the technical updates of a software or its ordinary maintenance is the subject of different operational agreements, such as **SLAs (Service Level Agreement)** or maintenance and technical support contracts.\n* **Analysis of the distractors:**\n  * **A) Exit strategies** are fundamental in a BPA to agree in advance on how to divide the company or the investments should the partnership dissolve.\n  * **C) Ownership of intellectual property** is a key element of corporate contracts to define who owns the source code or patents created synergistically.\n  * **D) Profit-sharing arrangements** regulate the percentages of distribution of earnings (and assumption of debts) between the commercial partners, the cornerstone of the partnership itself.\n\n* **Focused Mini-Example:** Two developers sign a Business Partnership Agreement (BPA) to create a software development company. The BPA establishes that each owns 50% of the shares and will receive half of the profits. The document does not address the responsibilities for releasing security patches, which will be agreed separately through an operational agreement (SLA).\n\n*Question ID: 65497c8766eb6419b9e435d9*",
  },
  173: {
    topic: "Governance, Boards & Committees",
    scenario: "Eagle Eyes, a data management company, is restructuring its data governance policies to ensure the proper handling of confidential information. They have appointed Abdul as Data Custodian.",
    question: "What will Abdul's primary responsibility be in his new role as Data Custodian?",
    options: [
      "A) Legally guarantee the total integrity and confidentiality of information at the compliance level",
      "B) Actively process, analyze and manipulate the data on external instructions as an external Processor",
      "C) Operationally manage and control technical access to the data based on the requirements defined by the owners (Data Owners)",
      "D) Establish who holds the intellectual property (data ownership) and define the primary business purposes",
    ],
    explanation: "The correct answer is **C) Operationally manage and control technical access to the data based on the requirements defined by the owners (Data Owners)**.\n\n* **Why it's correct:** The **Data Custodian** has a predominantly technical and practical responsibility. They handle the material implementation of logical and physical security controls, configure access permissions, manage the database servers, apply encryption, perform periodic backups and ensure the technological maintenance of the assets, following the strategic directives provided by the Data Owner.\n* **Analysis of the distractors:**\n  * **A) Overall legal compliance** and the ultimate responsibility for the data formally rest with the Data Controller and the Data Protection Officer (DPO), not the Data Custodian, who operates as an internal technical figure.\n  * **B) Actively processing and manipulating** the data following external instructions describes the typical functions of the **Data Processor**, whereas the Custodian focuses on maintenance, infrastructure and technical access control.\n  * **D) Establishing data ownership** and determining how or why it should be used is an exclusive business prerogative of the **Data Owner**, who has a hierarchically superior, decision-making role.\n\n* **Focused Mini-Example:** Abdul, the corporate database administrator (Data Custodian), receives the order from the Data Owner to allow access to the database only to administrative staff. Abdul technically configures the credentials in Active Directory, schedules incremental backups every night and verifies the integrity of the access logs.\n\n*Question ID: 64b8924788b3fb59a48a1043*",
  },
  174: {
    topic: "Security Controls",
    scenario: "Lexicon, an artificial intelligence company, intends to implement a security measure to systematically identify, assess and prioritize potential risks to its systems and networks.",
    question: "Which of the following is an example of a managerial security control that would help achieve this objective?",
    options: [
      "A) Security Guards",
      "B) Intrusion detection system",
      "C) Firewall",
      "D) Risk assessments",
    ],
    explanation: "The correct answer is **D) Risk assessments**.\n\n* **Why it's correct:** Periodic assessments, such as **risk assessments**, are managerial security controls that involve strategic planning and the regular evaluation of threats to systems and networks to guide the company's security decisions.\n* **Analysis of the distractors:**\n  * **A) Security Guards** are considered operational/physical controls, not managerial ones, because they involve daily human activities in the field.\n  * **B) Intrusion detection systems (IDS)** are technical (technological) controls based on software or hardware that monitor traffic.\n  * **C) The Firewall** is also a technical (technological) security control that applies logical rules to network flows.\n\n*Question ID: 64bd55d28ecaa950633d569c*",
  },
  175: {
    topic: "Cryptography",
    scenario: "You are booking an appointment for a haircut. When you enter your personal data on the Dye My Darling website, the data is entered into a database and associated with a smaller set of symbols that will represent your data. To access your personal data, the hairdresser's computer will access the database. If an attacker gains access to the computer, they will see only the set of symbols, not your personal data.",
    question: "Which concealment method is Dye My Darling using?",
    options: [
      "A) Steganography",
      "B) Encryption",
      "C) Tokenization",
      "D) Data Masking",
    ],
    explanation: "The correct answer is **C) Tokenization**.\n\n* **Why it's correct:** **Tokenization** replaces a piece of sensitive data (e.g. a customer code, a card number) with a non-sensitive substitute value (token), storing the correspondence in a secure external database. If a local computer is compromised, the attacker sees only the tokens, useless without access to the mapping database.\n* **Analysis of the distractors:**\n  * **A) Steganography** hides the very existence of a message or file by inserting it inside another host file (e.g. text within an image); it does not use a database of symbol correspondences.\n  * **B) Encryption** transforms the data through a mathematical algorithm and a key; it does not produce a fixed, reduced set of symbols referenced in a database.\n  * **D) Data Masking** covers or hides only some characters of a field (such as showing only '**** **** **** 1234' for a credit card), maintaining the overall structure but not replacing the entire piece of data with a token registered in a database.\n\n*Question ID: 64c3d5eececafb5b2df5d307*",
  },
  176: {
    topic: "PKI Infrastructure",
    scenario: "Organizations use different types of digital certificates within their public key infrastructure (PKI) based on their specific needs for trust, verification and usage environment.",
    question: "Which of the following types of certificates is issued by an entity that uses its own private key and is often used in internal or test environments due to its lack of intrinsic trust in external systems?",
    options: [
      "A) Extended validation certificate",
      "B) Self-signed certificate",
      "C) Certificate Signing Request (CSR)",
      "D) Root certificate",
    ],
    explanation: "The correct answer is **B) Self-signed certificate**.\n\n* **Why it's correct:** A **self-signed certificate** is generated and signed by the entity itself using its own private key, without the approval of a trusted third-party CA. Because browsers and external systems do not have the issuer in their list of trusted CAs, a security warning is displayed, making it ideal only for internal, development or test purposes.\n* **Analysis of the distractors:**\n  * **A) An Extended Validation (EV) certificate** offers the highest level of commercial trust after in-depth CA checks on the company's legitimacy; it is not self-signed.\n  * **C) A CSR** is not a certificate, but rather a request file sent to a CA to obtain a signed certificate.\n  * **D) A Root certificate** is the top-level certificate at the top of a CA hierarchy. Although it is self-signed by definition within CAs, its purpose is to validate other certificates and it is not created informally for temporary internal or test environments without complex PKI planning.\n\n*Question ID: 6524e5389e22f124a23e7938*",
  },
  177: {
    topic: "Governance, Boards & Committees",
    scenario: "Carlos, a new security consultant at Dion Training Solutions, is tasked with identifying potential security vulnerabilities in the company's data center. He requests the latest server architecture diagram but receives one that is more than a year old.",
    question: "Why is the use of this outdated diagram potentially problematic for Carlos's task?",
    options: [
      "A) It might not reflect the current architecture, leading to overlooking vulnerabilities.",
      "B) It would show too many unwanted technical details that could create confusion.",
      "C) It would contain an outdated list of employees with data center access and their permissions.",
      "D) It would show the company's outdated expansion plans for the data center.",
    ],
    explanation: "The correct answer is **A) It might not reflect the current architecture, leading to overlooking vulnerabilities.**\n\n* **Why it's correct:** A year-old architecture diagram **might not include recent changes** (newly installed servers, ports opened on the firewall, network changes, etc.). Carlos would end up analyzing an obsolete topology, overlooking vulnerabilities present in the current real architecture.\n* **Analysis of the distractors:**\n  * **B)** The technical details in an architecture diagram are essential for a security consultant and do not create unnecessary confusion in his task.\n  * **C)** An architecture diagram shows system flows and network nodes; it does not contain the list of employees and their detailed logical access rights.\n  * **D)** Future expansion plans are not the focus of an assessment of the current vulnerabilities of already-installed systems.\n\n*Question ID: 64c15363528e3065c1379718*",
  },
  178: {
    topic: "Deception Technologies",
    scenario: "Neville, a security engineer, suggests to his company that a fake document be created that appears to contain sensitive information in order to attract attackers and detect intrusion attempts.",
    question: "Which of the following options is Neville suggesting to create?",
    options: [
      "A) Honeynet",
      "B) Honeypot",
      "C) Honeytoken",
      "D) Honeyfile",
    ],
    explanation: "The correct answer is **D) Honeyfile**.\n\n* **Why it's correct:** A **honeyfile** is a fictitious decoy file or set of files (e.g. a PDF file titled 'Company_Passwords.pdf') specifically placed on file servers to detect unauthorized access. Because no legitimate user has any reason to open that file, any attempt to read or download it generates an immediate alert for the security team.\n* **Analysis of the distractors:**\n  * **A) A honeynet** is an entire fictitious decoy network containing multiple honeypots to study complex attack behaviors.\n  * **B) A honeypot** is a decoy computer system (e.g. a fictitious server or web service) to attract attackers, not a single file.\n  * **C) A honeytoken** is a fragment of decoy data (e.g. a fake credential or a trap email address), not a complete text document or file.\n\n*Question ID: 64c04411e69668a02c0dfe0b*",
  },
  179: {
    topic: "Cryptography",
    scenario: "Kelly Innovations LLC wants to adopt a technology to guarantee the integrity and transparency of its financial transactions. It is looking for a solution in which each transaction record is protected through encryption and the hash value of one record is used in the computation of the hash of the next record.",
    question: "Which of the following technologies would be the most suitable to meet this requirement?",
    options: [
      "A) Public Key Infrastructure (PKI)",
      "B) Blockchain",
      "C) Digital watermarking",
      "D) Symmetric encryption",
    ],
    explanation: "The correct answer is **B) Blockchain**.\n\n* **Why it's correct:** **Blockchain** consists of a distributed, immutable ledger in which the transaction records (blocks) are cryptographically chained: the hash of each block includes the hash of the previous block. Modifying even a single past transaction would invalidate all subsequent blocks, guaranteeing exceptional integrity and transparency.\n* **Analysis of the distractors:**\n  * **A) PKI (Public Key Infrastructure)** manages digital certificates and asymmetric key pairs for trust and encryption, but it does not provide a chained transaction ledger in itself.\n  * **C) Digital watermarking** inserts identifying data inside multimedia files to prove their intellectual property; it does not protect sequential financial records.\n  * **D) Symmetric encryption** uses a single key to encrypt and decrypt data, but does not deal with the historical cryptographic chaining of records.\n\n*Question ID: 6524cca4c4116404f67d29d*",
  },
  180: {
    topic: "Cryptography",
    scenario: "When sending an encrypted message to Dion Training, a customer wants to ensure that only Dion Training can decrypt and read the message to preserve its confidentiality.",
    question: "Which of the following options should the customer use to encrypt the message?",
    options: [
      "A) Dion Training's public key",
      "B) The Key escrow",
      "C) A wildcard certificate",
      "D) Dion Training's private key",
    ],
    explanation: "The correct answer is **A) Dion Training's public key**.\n\n* **Why it's correct:** In asymmetric cryptography, a sender encrypts a message using the **recipient's public key** (in this case, Dion Training's, which is freely accessible to anyone). Once encrypted, the message can be decrypted only by the corresponding **private key**, which is kept strictly secret exclusively by the legitimate recipient (Dion Training).\n* **Analysis of the distractors:**\n  * **B) The Key escrow** is a practice of securely storing keys with a third party for recovery purposes, not a direct encryption element.\n  * **C) A wildcard certificate** is used to protect a domain's and its subdomains' TLS web communications, not to encrypt a specific private asymmetric message.\n  * **D) Dion Training's private key** is not owned by or accessible to the customer (sender); if the customer owned it, it would mean the private key is compromised, destroying the security of the system.\n\n*Question ID: 65257f22f1de9bff7fa68806*",
  },
  181: {
    topic: "Identity & Access Control Models",
    scenario: "A company wants to implement a more flexible access control system that can dynamically adapt to the changing behavior and context of users.",
    question: "Which of the following technologies can help the company achieve this goal?",
    options: [
      "A) Adaptive identity",
      "B) Security zones",
      "C) Mandatory Access Control (MAC)",
      "D) Policy-driven access control",
    ],
    explanation: "The correct answer is **A) Adaptive identity**.\n\n* **Why it's correct:** **Adaptive identity** analyzes the context in real time (such as geolocation, connection time, device used, movement speed and the user's historical behavior) to dynamically determine the authentication requirements and access rights. If it detects unusual behavior (e.g. logins from two different countries within 10 minutes), it can request additional MFA factors or block the session.\n* **Analysis of the distractors:**\n  * **B) Security zones** divide networks into logical segments at the infrastructure level, but they do not manage adaptive access based on user behavior.\n  * **C) MAC (Mandatory Access Control)** is the most rigid access control model of all, based on static security labels and ministerial/military authorization levels; it is not adaptive or flexible at all.\n  * **D) Policy-driven control** applies static rules based on defined criteria, but does not learn or autonomously adapt to the changing daily behaviors of users.\n\n*Question ID: 64c03b8a3a8522a3b5997a5a*",
  },
  182: {
    topic: "Physical Security",
    scenario: "Perimeter security measures aim to protect people, technological infrastructure and buildings from physical attacks carried out by malicious individuals or from vehicle incidents.",
    question: "Which of the following is a physical security measure usually employed outside buildings or sensitive areas to physically prevent vehicles from causing damage to the property or forcing an unauthorized breach?",
    options: [
      "A) Security Checkpoint",
      "B) Intrusion Detection System",
      "C) Protective bollards",
      "D) Wire Fencing",
    ],
    explanation: "The correct answer is **C) Protective bollards**.\n\n* **Why it's correct:** **Bollards** are sturdy posts (of metal or reinforced concrete), fixed or retractable, specifically designed for the outside of structures to stop hostile vehicles attempting an impact attack (ram-raiding) or unauthorized access.\n* **Analysis of the distractors:**\n  * **A) A Security Checkpoint** serves to check documents and perform checks on authorized pedestrians or vehicles, but on its own it does not constitute a physical barrier capable of stopping a moving vehicle.\n  * **B) The IDS (Intrusion Detection System)** detects the presence of intruders through electronic sensors or cameras, but it is an information system and does not physically block any vehicle.\n  * **D) A wire fence** delimits the pedestrian boundary and hinders entry on foot, but does not have the structural strength needed to resist the impact of a car or a truck.\n\n*Question ID: 65245928ae19f8bdaee92dc6*",
  },
  183: {
    topic: "Deception Technologies",
    scenario: "Your company is redesigning the defense-in-depth strategy for the internal corporate network, trying to detect scans or attacks carried out by cybercriminals early, before they hit critical servers.",
    question: "Which of the following options best describes the primary purpose of a honeypot in a network environment?",
    options: [
      "A) To detect and divert potential attackers",
      "B) To block unauthorized access",
      "C) To recover lost data after an attack",
      "D) To prevent malware from executing",
    ],
    explanation: "The correct answer is **A) To detect and divert potential attackers**.\n\n* **Why it's correct:** The primary purpose of a **honeypot** (a fictitious decoy system) is to present itself as a vulnerable and appealing resource to induce attackers to interact with it. This yields three benefits: the presence of the intruder is detected immediately, they are diverted from the real servers reducing the overall impact of the attack, and valuable data on their tactics and tools is gathered.\n* **Analysis of the distractors:**\n  * **B)** A honeypot does not block access (a function typical of firewalls or IPS); on the contrary, it passively invites access for monitoring purposes.\n  * **C)** It has no functions for restoring or backing up production data.\n  * **D)** It does not prevent malware from executing; in fact it might allow execution in an isolated sandbox in order to study its behavior.\n\n*Question ID: 6720ff1fe8b5ca200ac63846*",
  },
  184: {
    topic: "Physical Security",
    scenario: "A security officer is using a system that involves the use of cameras to monitor activities in a given area.",
    question: "What is this system known as?",
    options: [
      "A) Access badge",
      "B) Sensors",
      "C) Video surveillance",
      "D) Lighting",
    ],
    explanation: "The correct answer is **C) Video surveillance**.\n\n* **Why it's correct:** **Video surveillance** (CCTV) involves the specific use of cameras to visually monitor and record activities in a given geographic or internal area.\n* **Analysis of the distractors:**\n  * **A) The access badge** is a card used for physical authentication at access points; it does not use cameras for continuous monitoring.\n  * **B) Sensors** detect noises, movements or the opening of fixtures, but do not provide direct video evidence unless integrated with a camera system.\n  * **D) Lighting** serves to illuminate dark areas to act as a deterrent or support visibility, but by itself it does not constitute camera-based monitoring.\n\n*Question ID: 64c3e5d7ba219e04cab0e4eb*",
  },
  185: {
    topic: "Change Management Processes",
    scenario: "A major software update is scheduled to be released into a company's production environment.",
    question: "To ensure that any unforeseen problems or conflicts can be undone by returning the system to its previous stable state, what should the IT team have prepared?",
    options: [
      "A) Standard operating procedure",
      "B) Approval process",
      "C) Backout plan",
      "D) Maintenance window",
    ],
    explanation: "The correct answer is **C) Backout plan**.\n\n* **Why it's correct:** A **backout plan** (rollback plan) is a predefined strategy that describes the steps needed to undo a change or update and restore the system to its original stable state should blocking complications arise.\n* **Analysis of the distractors:**\n  * **A) A standard operating procedure (SOP)** describes how to perform routine tasks step by step, but is not focused on the emergency actions to undo a failed deployment.\n  * **B) An approval process** ensures that changes are reviewed and authorized before release, but does not provide a technical rollback mechanism if something goes wrong during execution.\n  * **D) A maintenance window** is the scheduled time interval for performing work while reducing the impact on the business, but it does not represent the technical restore procedure.\n\n*Question ID: 6524cefe9eb2e17ced10c455*",
  },
  186: {
    topic: "Identity & Access Control Models",
    scenario: "Reginald, an IT Manager, is the owner of a file on a server and wants to grant access to the file to his colleagues. He is the only one who can decide who is authorized to access the file and what actions they can perform on it.",
    question: "Which authorization model is used in this scenario?",
    options: [
      "A) DAC (Discretionary Access Control)",
      "B) MAC (Mandatory Access Control)",
      "C) ABAC (Attribute-Based Access Control)",
      "D) RBAC (Role-Based Access Control)",
    ],
    explanation: "The correct answer is **A) DAC (Discretionary Access Control)**.\n\n* **Why it's correct:** In the **DAC (Discretionary Access Control)** model, the access decision is at the discretion of the owner of the data or resource. The owner has the ability to grant or revoke read, write or execute permissions to other users or groups.\n* **Analysis of the distractors:**\n  * **B) MAC (Mandatory Access Control)** is based on strict central authorizations and sensitive security labels (e.g. secret, top secret) set by the system or the administrator, not at the user's discretion.\n  * **C) ABAC (Attribute-Based Access Control)** evaluates attributes of the subject, the object and the environment (e.g. time, department) to grant access through logical policies.\n  * **D) RBAC (Role-Based Access Control)** assigns permissions to organizational roles or job functions, not arbitrarily to individual owning users.\n\n*Question ID: 64c032bc355a049eedb94c9f*",
  },
  187: {
    topic: "Security Controls",
    scenario: "Repair Now, a DIY training company, wants to proactively identify and correct known weaknesses in its cybersecurity posture that could compromise the company.",
    question: "Which of the following operational security controls would help the company achieve this goal?",
    options: [
      "A) Vulnerability management",
      "B) Intrusion detection system",
      "C) Encryption",
      "D) Firewall",
    ],
    explanation: "The correct answer is **A) Vulnerability management**.\n\n* **Why it's correct:** **Vulnerability management** is an operational, continuous control that consists of identifying, assessing, classifying and mitigating/resolving known weaknesses (e.g. software bugs, misconfigurations) before they can be exploited by attackers.\n* **Analysis of the distractors:**\n  * **B) An IDS (Intrusion Detection System)** passively monitors network traffic looking for signs of ongoing attacks, but does not deal with scanning for or preventively correcting system vulnerabilities.\n  * **C) Encryption** and **D) the Firewall** are technical controls focused respectively on protecting data confidentiality and on network access control, not on the methodical management of vulnerabilities.\n\n*Question ID: 64bd54e9bd16ca9d7eab8119*",
  },
  188: {
    topic: "Identity & Access Control Models",
    scenario: "Within Dion Training's Zero Trust security infrastructure, one component is responsible for defining and managing the security policies that govern access controls.",
    question: "Which component is responsible for this task?",
    options: [
      "A) Policy enforcement point (PEP)",
      "B) Authentication server",
      "C) Client host",
      "D) Policy administrator (PA)",
    ],
    explanation: "The correct answer is **D) Policy administrator (PA)**.\n\n* **Why it's correct:** In the Zero Trust architecture, the **Policy Administrator (PA)** is the component that writes, defines, updates and manages the access policies used by the Policy Engine to determine whether or not to grant access to a resource.\n* **Analysis of the distractors:**\n  * **A) The Policy Enforcement Point (PEP)** is the physical or logical component (e.g. a gateway, a firewall, a proxy) that materially applies the decision made by the Policy Decision Point (PDP).\n  * **B) An authentication server** validates user credentials to ascertain their identity, but does not deal with the definition and management of the entire set of Zero Trust dynamic access control policies.\n  * **C) The client host** is the end device from which the user requests access; it has no centralized policy-management or policy-definition tasks.\n\n*Question ID: 64c040363a8522a3b5997a5f*",
  },
  189: {
    topic: "Change Management Processes",
    scenario: "At Kelly Innovations Corp., during a routine audit, Alex discovers that the database supporting the CRM application is corrupted. He immediately informs Kevin, the senior database administrator, who decides to restore the database from the last clean backup, ensuring that the CRM returns to operation with minimal data loss.",
    question: "What action is Kevin taking to resolve the problem?",
    options: [
      "A) Application recovery",
      "B) Data mirroring",
      "C) Database defragmentation",
      "D) Database indexing",
    ],
    explanation: "The correct answer is **A) Application recovery**.\n\n* **Why it's correct:** **Application recovery** involves using a clean backup to bring an application or its damaged supporting components (such as a corrupted database) back into operation following an incident, minimizing downtime and data loss.\n* **Analysis of the distractors:**\n  * **B) Data mirroring** writes data simultaneously in two distinct locations in real time for redundancy, but here we are talking about restoring from a historical backup following corruption, not active synchronization.\n  * **C) Defragmentation** and **D) indexing** are database performance-optimization techniques and do not resolve corruption or the recovery of lost data.\n\n*Question ID: 6524325c420b8c1e79fec56c*",
  },
  190: {
    topic: "Security Controls",
    scenario: "A company implements a policy that requires employees to visibly display their badges within a facility, primarily to remind them of security expectations and discourage potential unauthorized access.",
    question: "Which type of control BEST characterizes this measure?",
    options: [
      "A) Corrective Control",
      "B) Deterrent Control",
      "C) Detective Control",
      "D) Directive Control",
    ],
    explanation: "The correct answer is **B) Deterrent Control**.\n\n* **Why it's correct:** A **deterrent control** has the primary purpose of discouraging or dissuading a potential attacker or unauthorized behavior before it happens. Visibly displaying the badge acts as a continuous visual reminder and makes it immediately evident who is not authorized, discouraging tailgating attempts.\n* **Analysis of the distractors:**\n  * **A) A corrective control** intervenes after the incident has occurred to restore the systems to their optimal state.\n  * **C) A detective control** aims to identify an intrusion or breach after or while it occurs (e.g. logs, alarms).\n  * **D) A directive control** establishes written behavioral rules or guidelines in the organization, but the physical action of visibly wearing the badge to discourage attacks has a predominantly deterrent impact.\n\n*Question ID: 6524502be5200826ece65962*",
  },
  191: {
    topic: "Cryptography",
    scenario: "Nicola, an IT manager, is evaluating an encryption method that uses public and private keys to encrypt and decrypt.",
    question: "Which type of encryption is he considering?",
    options: [
      "A) Asymmetric encryption",
      "B) Key exchange",
      "C) Communication encryption",
      "D) Symmetric encryption",
    ],
    explanation: "The correct answer is **A) Asymmetric encryption**.\n\n* **Why it's correct:** **Asymmetric encryption** (or public-key cryptography) uses a pair of mathematically related keys: a public key (used to encrypt) and a private key (used to decrypt, kept secret by the recipient).\n* **Analysis of the distractors:**\n  * **B) Key exchange** is the process/protocol for securely sharing cryptographic keys, not a standalone encryption method.\n  * **C) Communication encryption** refers to the general protection of data in transit, which can use both symmetric and asymmetric algorithms.\n  * **D) Symmetric encryption** uses a single shared secret key for both encryption and decryption.\n\n*Question ID: 64c281b7216b8641ab101dd*",
  },
  192: {
    topic: "Change Management Processes",
    scenario: "At Kelly Innovations Corp., Sarah notices that their main business application, which tracks customer orders, is not accurately updating inventory levels. A recent update appears to have introduced a bug.",
    question: "Which of the following options would offer the BEST solution?",
    options: [
      "A) Application rollback",
      "B) Dependency check",
      "C) Patch management",
      "D) Application restart",
    ],
    explanation: "The correct answer is **A) Application rollback**.\n\n* **Why it's correct:** An **application rollback** consists of restoring an application to a previous stable state or version following a malfunction or bug introduced by a recent update.\n* **Analysis of the distractors:**\n  * **B) The dependency check** serves to verify that all the necessary libraries or packages are installed, but it does not correct a logical bug introduced into the code with the update.\n  * **C) Patch management** organizes the systematic distribution of security patches and bugfixes, but to immediately remedy a blocking bug in production, rollback is preferred.\n  * **D) Restarting the application** stops and restarts the processes to clean the memory or force a reload of configurations, but it does not remove the logical bug present in the modified software.\n\n*Question ID: 64c14884ed0ab5f0782b2224*",
  },
  193: {
    topic: "Identity & Access Control Models",
    scenario: "In the Zero Trust approach, policy-driven access control is a fundamental pillar.",
    question: "Which of the following options BEST describes policy-driven access control in the Zero Trust approach?",
    options: [
      "A) It contains potential threats by segmenting the network.",
      "B) It ensures the secure transfer of data after the access decision.",
      "C) It bases access decisions on predefined security policies.",
      "D) It relies on the continuous evaluation of user behavior.",
    ],
    explanation: "The correct answer is **C) It bases access decisions on predefined security policies**.\n\n* **Why it's correct:** **Policy-driven** access control in Zero Trust establishes that every access request is examined and validated by comparing it with predefined central security rules and policies before granting authorization. This guarantees consistency and compliance with corporate directives.\n* **Analysis of the distractors:**\n  * **A) Segmenting the network** isolates parts of the infrastructure to contain threats, but does not describe the policy-based access decision mechanism.\n  * **B) Ensuring the secure transfer** concerns the encryption of data in transit (e.g. TLS) after the access decision, not the criteria of the decision itself.\n  * **D) Continuous behavior evaluation** is part of adaptive monitoring, but does not represent the strict definition of control driven by written rules and criteria (policies).\n\n*Question ID: 652466edc39f70b2f9c4ee45*",
  },
  194: {
    topic: "Identity & Access Control Models",
    scenario: "Dion Training has implemented a Zero Trust model. Which of the following data plane components is responsible for verifying the user or device before it interacts with the network?",
    question: "Which data plane component is responsible for this verification?",
    options: [
      "A) Policy Administrator",
      "B) Policy Engine",
      "C) Policy Enforcement Point",
      "D) Subject",
    ],
    explanation: "The correct answer is **C) Policy Enforcement Point**.\n\n* **Why it's correct:** The **Policy Enforcement Point (PEP)** is the data plane component responsible for ensuring that security policies are applied when a user or device attempts to access network resources. It acts as a gatekeeper, verifying the identity and context of the access request against the established policies before allowing or denying access.\n* **Analysis of the distractors:**\n  * **A) Policy Administrator** is responsible for communicating to the PEP the decision to establish or terminate the communication path, but does not interact directly with the data plane flows for verification.\n  * **B) Policy Engine** is responsible for making the access decision based on the policies, but does not directly apply the decision nor interact with devices on the data plane.\n  * **D) Subject** is the entity (user or device) being verified, not the component responsible for the verification process.\n\n*Question ID: 64c040853a8522a3b5997a64*",
  },
  195: {
    topic: "Cryptography",
    scenario: "In telecommunications and cybersecurity, it is essential to ensure that a digital communication is fully trustworthy and cannot be denied after the fact.",
    question: "Which of the following terms describes a security concept that ensures that both parties involved in a communication cannot deny the validity of their sent or received message?",
    options: [
      "A) Authorization",
      "B) Non-repudiation",
      "C) Accounting",
      "D) Confidentiality",
    ],
    explanation: "The correct answer is **B) Non-repudiation**.\n\n* **Why it's correct:** **Non-repudiation** ensures that the sender or recipient of a message cannot deny having respectively sent or received that message, typically through the use of cryptographic evidence (such as digital signatures and asymmetric keys).\n* **Analysis of the distractors:**\n  * **A) Authorization** establishes which actions, rights or functions are permitted to a user or system, but does not prevent the contestation of a message's sending.\n  * **C) Accounting** involves the monitoring and recording of user activities for auditing, traceability or billing purposes.\n  * **D) Confidentiality** ensures that information is not disclosed or made available to unauthorized parties.\n\n*Question ID: 652458d8ae19f8bdaee92dc1*",
  },
  196: {
    topic: "Change Management Processes",
    scenario: "A company is updating the configuration of a production firewall as part of its structured change management process.",
    question: "Which technical implication is most likely to occur during this process?",
    options: [
      "A) Increased bandwidth",
      "B) Improved connection speeds",
      "C) Service downtime or restart",
      "D) Reduced encryption requirements",
    ],
    explanation: "The correct answer is **C) Service downtime or restart**.\n\n* **Why it's correct:** When updating a firewall's configuration, applying the new rules or updating the firmware often requires a service reload or a restart, causing a temporary **service downtime** that can interrupt network connectivity.\n* **Analysis of the distractors:**\n  * **A) Increased bandwidth** and **B) Improved connection speeds** are not direct or typical consequences of updating a firewall's rule configuration.\n  * **D) Reduced encryption requirements** is in no way connected to a change of the firewall's policy or filtering configuration.\n\n*Question ID: 672110bbd248d95fc8ca817f*",
  },
  197: {
    topic: "Cryptography",
    scenario: "While entering a password online, Ivan notices that each typed letter is quickly replaced by a black dot. Ivan finds this annoying because he sometimes enters the wrong password since the screen shows only as many dots as there are typed characters.",
    question: "What is Ivan observing?",
    options: [
      "A) Tokenization",
      "B) Data Masking",
      "C) Steganography",
      "D) Encryption",
    ],
    explanation: "The correct answer is **B) Data Masking**.\n\n* **Why it's correct:** **Data Masking** is a technique used to hide some or all of the characters in a sequence without altering the original data. Replacing the typed letters in a password field with dots is a classic example of visual masking to prevent shoulder surfing.\n* **Analysis of the distractors:**\n  * **A) Tokenization** replaces a sensitive data element with a non-sensitive equivalent (token) with no extrinsic or logical value, storing the link securely.\n  * **C) Steganography** consists of hiding a file, message or image inside another host file to conceal its existence.\n  * **D) Encryption** is the process of converting readable data into an unreadable code (ciphertext) through mathematical algorithms and keys, to prevent unauthorized access at rest or in transit.\n\n*Question ID: 64c3d5b8db2705b2e1e1abfc*",
  },
  198: {
    topic: "Security Controls",
    scenario: "Cybersecurity measures include different types of controls (preventive, detective, corrective, directive, deterrent, compensating).",
    question: "Which of the following options is a corrective control?",
    options: [
      "A) Implementing a Firewall",
      "B) Security Awareness Training",
      "C) Motion Sensor Lighting",
      "D) Restoring Data from Backups",
    ],
    explanation: "The correct answer is **D) Restoring Data from Backups**.\n\n* **Why it's correct:** **Restoring Data from Backups** is a corrective control because it directly responds to an incident (such as data loss or corruption) to bring the system or information back to its previous intact operational state.\n* **Analysis of the distractors:**\n  * **A) Implementing a Firewall** is a preventive control, as it acts as a barrier to block unauthorized access before it occurs.\n  * **B) Security Awareness Training** is a preventive control, aimed at educating users to reduce the likelihood of them performing insecure actions.\n  * **C) Motion Sensor Lighting** is a predominantly deterrent control, aimed at discouraging unauthorized physical access.\n\n*Question ID: 6720fbe36c5aab4d75b9be3c*",
  },
  199: {
    topic: "Governance, Boards & Committees",
    scenario: "Following a compliance audit at GlobalTech Corp, it emerged that some business processes are no longer aligned with the company's written policies and procedures. Emma, the Chief Compliance Officer, stresses the importance of regularly updating these documents.",
    question: "What is the MOST important reason to periodically update such documents and how do they influence the organization's current security posture?",
    options: [
      "A) To keep the diagrams and specifications of each piece of equipment updated.",
      "B) To ensure they remain relevant and compliant with evolving regulations.",
      "C) To match them with recent modifications in business operations.",
      "D) To develop new products and services.",
    ],
    explanation: "The correct answer is **B) To ensure they remain relevant and compliant with evolving regulations.**\n\n* **Why it's correct:** Regular updates of policies and procedures ensure that the organization remains aligned with business processes and with the continuous regulatory and legislative changes. If policies do not change with the evolution of compliance requirements, the company exposes itself to significant legal, financial and security risks.\n* **Analysis of the distractors:**\n  * **A) To keep the diagrams and specifications of each piece of equipment updated** refers to technical inventories and network diagrams, not the general governance described by the policies.\n  * **C) To match them with recent modifications in business operations** is useful for operational efficiency, but the primary motivation related to compliance and the overall security posture lies in alignment with external regulations.\n  * **D) To develop new products and services** is not the main purpose of audit activities and updating security documentation.\n\n*Question ID: 64c153b593c27dd3aaef1f74*",
  },
  200: {
    topic: "Security Controls",
    scenario: "A company wants to ensure that its employees use corporate resources correctly and ethically.",
    question: "Which of the following actions represents an example of a directive control that the company could implement to address this concern?",
    options: [
      "A) Requiring that all employees read and sign an AUP",
      "B) Reviewing log files for signs of unauthorized access",
      "C) Implementing multi-factor authentication when single-factor authentication fails",
      "D) Conducting regular security awareness training for employees",
    ],
    explanation: "The correct answer is **A) Requiring that all employees read and sign an AUP**.\n\n* **Why it's correct:** An Acceptable Use Policy (**AUP**) defines the rules of behavior regarding the use of company assets. Requiring the reading and signing of the AUP is a directive control because it explicitly prescribes the actions and conduct expected from employees.\n* **Analysis of the distractors:**\n  * **B) Reviewing log files** is a detective control, aimed at identifying incidents after they occur.\n  * **C) Implementing MFA** is a technical/preventive control to block unauthorized access.\n  * **D) Conducting security awareness training** is a preventive control aimed at educating employees against future threats.\n\n*Question ID: 64bd7a6b79a4c3d4894757ca*",
  },
  201: {
    topic: "PKI Infrastructure",
    scenario: "Managing public-key cryptography at scale requires a standardized organizational, technological and procedural structure.",
    question: "Which term is used to describe the creation, distribution, storage and revocation of digital certificates?",
    options: [
      "A) Key Generation",
      "B) Public Key Infrastructure",
      "C) Key Exchange",
      "D) Key Escrow",
    ],
    explanation: "The correct answer is **B) Public Key Infrastructure**.\n\n* **Why it's correct:** The **Public Key Infrastructure (PKI)** is the set of roles, policies, processes, hardware and software needed to manage the entire lifecycle of digital certificates and cryptographic keys (including creation, distribution, storage and revocation).\n* **Analysis of the distractors:**\n  * **A) Key Generation** is only the first phase of generating the cryptographic key pair.\n  * **C) Key Exchange** is the protocol by which two parties securely exchange symmetric keys.\n  * **D) Key Escrow** is the entrusting of a copy of the decryption keys to a trusted third party for emergency recovery purposes.\n\n*Question ID: 64c27a4e765533fcb52d9f36*",
  },
  202: {
    topic: "PKI Infrastructure",
    scenario: "Dion Training intends to expand its online services, launching multiple subdomains for different courses (for example courses.diontraining.com, labs.diontraining.com, test.diontraining.com). They want a single digital certificate capable of protecting all these subdomains simultaneously.",
    question: "Which type of certificate should Dion Training consider?",
    options: [
      "A) CSR (Certificate Signing Request)",
      "B) Wildcard certificate",
      "C) Third-party certificate",
      "D) Self-signed certificate",
    ],
    explanation: "The correct answer is **B) Wildcard certificate**.\n\n* **Why it's correct:** A **wildcard certificate** allows a main domain and an unlimited number of its related first-level subdomains (e.g. `*.diontraining.com`) to be protected using a single certificate. It is the most efficient and cost-effective solution for this scenario.\n* **Analysis of the distractors:**\n  * **A) CSR (Certificate Signing Request)** is the request sent to a Certificate Authority to obtain a certificate, not a certificate itself.\n  * **C) Third-party certificate** refers to a certificate issued by a trusted third-party CA, but it does not specify the wildcard technical functionality needed to cover multiple subdomains.\n  * **D) Self-signed certificate** is a certificate signed by the entity that generated it; it would cause security warnings in users' browsers and is not recommended for public sites.\n\n*Question ID: 6524efa6d2f0e5af813c0a73*",
  },
  203: {
    topic: "Cryptography",
    scenario: "A financial institution wants to protect its customer database so that, even in the event of a systems breach with data theft, the data remains completely unintelligible to attackers.",
    question: "Which of the following levels of encryption would be the MOST appropriate to directly safeguard the content of the database?",
    options: [
      "A) Full-disk encryption",
      "B) Volume encryption",
      "C) Database level encryption",
      "D) File encryption",
    ],
    explanation: "The correct answer is **C) Database level encryption**.\n\n* **Why it's correct:** **Database level encryption** ensures that the entire content of the database (or individual sensitive tables/columns) is protected directly by the cryptographic algorithm. As a result, even if the database file is copied or stolen, the data remains unreadable without the correct decryption key.\n* **Analysis of the distractors:**\n  * **A) Full-disk encryption** and **B) Volume encryption** protect data only at rest against the physical theft of the hard disks (e.g. if the server is turned off), but they do not protect the data if a malicious user accesses the booted operating system or carries out an attack on the online database.\n  * **D) File encryption** encrypts individual files on the disk, which might not be efficient or suitably structured to support the high-performance queries required by a database system.\n\n*Question ID: 64c27ece216b8641ab101ce*",
  },
  204: {
    topic: "Cryptography",
    scenario: "Dion Training is designing a system to store student records. They want to encrypt the entire collection of records in a single solution, guaranteeing efficient encryption and decryption processes during queries.",
    question: "Which level of encryption is the MOST suitable for this project?",
    options: [
      "A) Partition encryption",
      "B) Record-level encryption",
      "C) Database encryption",
      "D) Volume encryption",
    ],
    explanation: "The correct answer is **C) Database encryption**.\n\n* **Why it's correct:** Technologies such as Transparent Data Encryption (TDE) in databases offer the ability to encrypt entire databases transparently. This is ideal for Dion Training, because it allows the entire collection of student records to be encrypted and decrypted extremely efficiently during normal database operations and queries.\n* **Analysis of the distractors:**\n  * **A) Partition encryption** encrypts specific partitions on a hard disk, but it is neither optimized nor specifically structured for the performance and operational needs of a DBMS.\n  * **B) Record-level encryption** encrypts each record within the database individually. Although it offers granular control, it introduces significant performance overhead (inefficiency) when querying or scanning large amounts of records.\n  * **D) Volume encryption** secures an entire virtual/physical volume or drive, protecting data at rest against the physical theft of the disks, but does not provide the specific flexibility and efficiency required for the queries and internal operations of the active database.\n\n*Question ID: 6525840ad7819dc1960699bd*",
  },
  205: {
    topic: "Physical Security",
    scenario: "Gerald, the IT manager, is implementing a system in which employees must possess a device/token to gain access to certain specific areas within the corporate building.",
    question: "Which of the following options best explains the type of physical security they are implementing?",
    options: [
      "A) Fencing",
      "B) Video surveillance",
      "C) Access control vestibules",
      "D) Access badges",
    ],
    explanation: "The correct answer is **D) Access badges**.\n\n* **Why it's correct:** An **access badge** is a card or physical device (token) used by employees to authenticate and unlock the electronic access points to enter specific areas of the corporate building, exactly reflecting the described scenario.\n* **Analysis of the distractors:**\n  * **A) Fencing** consists of external perimeter barriers intended to prevent or delay physical intrusion into the property; it does not use personal tokens or cards.\n  * **B) Video surveillance** uses cameras to visually monitor and record activities; it does not in itself constitute a token-based mechanism for granting access.\n  * **C) Access control vestibules (mantraps)** are double-door structures designed to control the physical flow of people and prevent tailgating, but they represent the physical transit barrier and not the unlocking token itself.\n\n*Question ID: 64c3e5a236bc29dc2e8730b1*",
  },
  206: {
    topic: "Security Controls",
    scenario: "Jenna, a security analyst, wants to implement a periodic and regular review of the log files to improve the organization's overall security posture.",
    question: "To which of the following types of security controls does log monitoring belong?",
    options: [
      "A) Managerial",
      "B) Physical",
      "C) Operational",
      "D) Technical",
    ],
    explanation: "The correct answer is **C) Operational**.\n\n* **Why it's correct:** **Operational security controls** are measures implemented and carried out daily by personnel to protect the organization's systems and operations. Classic examples include log monitoring, backup and restore procedures, configuration management and the protection of storage media.\n* **Analysis of the distractors:**\n  * **A) Managerial controls** concern strategic planning, risk assessments, written policies, security awareness programs and the overall management of security programs.\n  * **B) Physical controls** protect access to hardware resources and tangible infrastructure (e.g. cameras, locks, fences, guards).\n  * **D) Technical controls** are logical controls performed directly by the hardware or software of the information systems (e.g. firewalls, encryption, ACLs, IDS/IPS systems).\n\n*Question ID: 64bd6d3b7bc8dddbe8c6a8ed*",
  },
  207: {
    topic: "Cryptography",
    scenario: "Instances VM, a cloud computing company, is defining comprehensive corporate standards for the management of cryptographic keys, establishing precise policies that govern their entire lifecycle, from generation through to revocation and destruction.",
    question: "What are they designing and developing in this scenario?",
    options: [
      "A) A Trusted Platform Module (TPM)",
      "B) A Key Management System",
      "C) A Secure Enclave",
      "D) A Hardware Security Module (HSM)",
    ],
    explanation: "The correct answer is **B) A Key Management System**.\n\n* **Why it's correct:** A **Key Management System (KMS)** is a structured process, supported by organizational standards and policies, that deals with managing the entire lifecycle of cryptographic keys (generation, distribution, storage, rotation, revocation and destruction). It is a decision-making and operational framework, not a single chip or hardware device.\n* **Analysis of the distractors:**\n  * **A) A Trusted Platform Module (TPM)** is a dedicated microchip integrated on the motherboard (common in Windows systems) to securely store cryptographic keys and boot-integrity measurements; it is not a global corporate policy or standard.\n  * **C) A Secure Enclave** is an isolated coprocessor, integrated into the silicon of some SoCs (such as Apple's or certain Android systems), dedicated exclusively to sensitive processing such as cryptographic keys and biometric data.\n  * **D) A Hardware Security Module (HSM)** is an external physical device or expansion card specialized in high-performance cryptographic computation and large-scale key protection, but it does not constitute the set of organizational policies on the key lifecycle.\n\n*Question ID: 64c284124f0d49fd4b9ac1f3*",
  },
  208: {
    topic: "Identity & Access Control Models",
    scenario: "The correct configuration of security controls provides clear rules for allowing logical access only to subjects considered secure or authorized.",
    question: "Which of the following terms refers to a list that explicitly grants access or permissions to specific entities, while all others are implicitly denied?",
    options: [
      "A) Allow list",
      "B) Approval process",
      "C) Backout plan",
      "D) Restricted activities",
    ],
    explanation: "The correct answer is **A) Allow list**.\n\n* **Why it's correct:** An **allow list** (or whitelist) is an explicit list of entities (e.g. IP addresses, applications or domains) that are granted access. By default, all subjects not expressly present in the list are rejected through an implicit deny rule.\n* **Analysis of the distractors:**\n  * **B) An approval process** is a formal organizational procedure to verify and authorize changes before their implementation; it is not an access control list.\n  * **C) A backout plan** describes the steps to undo a failed change in production and return to the previous stable state.\n  * **D) Restricted activities** are specific actions that cannot be performed for corporate security or regulatory reasons; they do not describe an 'implicit deny' access logic.\n\n*Question ID: 65242355f624fd072bce9dd1*",
  },
  209: {
    topic: "PKI Infrastructure",
    scenario: "Organizations rely on public key infrastructure (PKI) to establish secure channels and validate the identity of servers or external business partners.",
    question: "Which of the following certificates is issued by a recognized external authority and inherently carries a higher level of trust for users and systems that do not know the origin of the certificate?",
    options: [
      "A) Third-party certificate",
      "B) A CRL (Certificate Revocation List)",
      "C) Private key",
      "D) Public key",
    ],
    explanation: "The correct answer is **A) Third-party certificate**.\n\n* **Why it's correct:** A **third-party certificate** is signed and validated by a globally recognized public Certificate Authority (CA). Because operating systems and browsers natively include the list of trusted CAs, this certificate is considered immediately trustworthy by anyone who connects to it, unlike a self-signed certificate.\n* **Analysis of the distractors:**\n  * **B) A CRL** is a file containing the list of certificates revoked by the CA before their natural expiration; it is not a type of digital certificate.\n  * **C) The private key** is the asymmetric cryptographic secret used to decrypt or sign data; it is not a type of certificate.\n  * **D) The public key** is the freely distributable component used to encrypt or verify signatures; although it is contained within a digital certificate, it does not itself represent a certificate issued by a CA.\n\n*Question ID: 6524e5949e22f124a23e793d*",
  },
  210: {
    topic: "Cryptography",
    scenario: "Asymmetric cryptography is based on the logical and mathematical separation of the keys intended for encrypting and decrypting communications.",
    question: "What is the name of a cryptographic key that can be freely distributed and used by anyone to encrypt messages intended for the owner of the key itself?",
    options: [
      "A) Hash key",
      "B) Digital signature",
      "C) Public key",
      "D) Symmetric key",
    ],
    explanation: "The correct answer is **C) Public key**.\n\n* **Why it's correct:** In asymmetric cryptography, the **public key** can be disclosed openly to anyone. It is used by external senders to encrypt messages that only the corresponding private key (secret and jealously guarded by the recipient) will be able to decrypt.\n* **Analysis of the distractors:**\n  * **A) A hash key** or hash value is generated by a one-way function to verify the integrity of data or map strings, not to encrypt and decrypt two-way messages.\n  * **B) The digital signature** is a mathematical scheme that attests to the authenticity and integrity of a document (signed with a private key and verified with a public key); it is not an encryption key.\n  * **D) A symmetric key** must remain absolutely secret and shared exclusively between the two communicating parties; if it were freely distributed, anyone could decrypt and alter the communications.\n\n*Question ID: 64c277402c244b55867c6520*",
  },
  211: {
    topic: "Security Principles",
    scenario: "The CIA triad (Confidentiality, Integrity, Availability) represents the fundamental pillar of information security.",
    question: "Which term refers to the guarantee that data and resources are accessible and usable when needed by authorized users?",
    options: [
      "A) Availability",
      "B) Confidentiality",
      "C) Authorization",
      "D) Integrity",
    ],
    explanation: "The correct answer is **A) Availability**.\n\n* **Why it's correct:** **Availability** guarantees that information systems, communication channels and data are ready for use and accessible to authorized users whenever they need them to carry out their activities.\n* **Analysis of the distractors:**\n  * **B) Confidentiality** ensures that sensitive information is not revealed or disclosed to unauthorized individuals, entities or processes.\n  * **C) Authorization** establishes the specific rights and access levels granted to a user or system after their identity has been authenticated.\n  * **D) Integrity** ensures that information remains accurate, reliable and unaltered or uncorrupted, except through expressly authorized interventions.\n\n*Question ID: 6720fc9f6c5aab4d75b9be46*",
  },
  212: {
    topic: "Cryptography",
    scenario: "Take the Cake, a renowned pastry shop, has recently purchased a new software module to improve the security of its credentials. The software randomly adds additional, unique data to the input of a hash function before the latter processes it.",
    question: "What specifically is the software doing?",
    options: [
      "A) Key Stretching",
      "B) Salting",
      "C) Hashing",
      "D) Digital Signatures",
    ],
    explanation: "The correct answer is **B) Salting**.\n\n* **Why it's correct:** **Salting** is a cryptographic technique that consists of adding random, unique data (called 'salt') to the input (typically a password) before subjecting it to a hash function. This prevents attackers from using precomputed attacks such as Rainbow Tables to crack passwords en masse.\n* **Analysis of the distractors:**\n  * **A) Key Stretching** is a method that consists of repeatedly (thousands of times) computing the hash of a password to make it deliberately slower to compute, greatly increasing the time required for brute-force attacks (e.g. with PBKDF2 or bcrypt).\n  * **C) Hashing** is the simple one-way process of converting an input of arbitrary length into a fixed-length string through a mathematical function, without the mandatory addition of preventive random data.\n  * **D) Digital Signatures** are mathematical constructs used to guarantee the authenticity and non-repudiation of a file or message, not the addition of random data to the input of a password hash function.\n\n*Question ID: 64c3dcb246cada5acd7b5a8e*",
  },
  213: {
    topic: "Identity & Access Control Models",
    scenario: "In a Zero Trust architecture, access requests are never trusted by default, but must be constantly verified and enforced.",
    question: "Which component of the Zero Trust architecture is responsible for concretely enforcing the policies by allowing or denying access to resources?",
    options: [
      "A) Policy Engine",
      "B) Identity Provider",
      "C) Policy Enforcement Point",
      "D) Threat Scope Reducer",
    ],
    explanation: "The correct answer is **C) Policy Enforcement Point**.\n\n* **Why it's correct:** The **Policy Enforcement Point (PEP)** is the logical or physical component (e.g. a gateway, proxy, or firewall) tasked with materially enabling, monitoring and terminating the connections between a subject and a corporate resource, applying the decisions established by the Policy Decision Point.\n* **Analysis of the distractors:**\n  * **A) The Policy Engine** is the decision-making mind tasked with evaluating the security criteria and establishing whether access should be granted, but it does not directly or materially apply the decision on the data traffic.\n  * **B) The Identity Provider** manages the databases of user identities and their initial authentication, but does not deal with the continuous control or the enforcement of Zero Trust access policies on the resources.\n  * **D) A 'Threat Scope Reducer'** is not a standard or defined component within the Zero Trust reference architectures (such as NIST SP 800-207).\n\n*Question ID: 6720feb5e8b5ca200ac63841*",
  },
  214: {
    topic: "Zero Trust Architecture",
    scenario: "In the Zero Trust model, once the Control Plane has authorized an access request, the data flow between the user and the resource must be managed and transmitted correctly and efficiently to its destination.",
    question: "In the Zero Trust model, which component primarily ensures the correct and efficient transmission of data once the access decisions have been made?",
    options: [
      "A) Adaptive identity",
      "B) Data Plane",
      "C) Control Plane",
      "D) Threat scope reduction",
    ],
    explanation: "The correct answer is **B) Data Plane**.\n\n* **Why it's correct:** The **Data Plane** within the Zero Trust model oversees the actual transport of the data. Once the Control Plane has granted access, the Data Plane is responsible for ensuring that the data is transmitted efficiently and correctly reaches the intended destination.\n* **Analysis of the distractors:**\n  * **A) Adaptive identity** uses dynamic security decisions based on user behavior and context, supporting the Control Plane in its decisions but without managing the transport of data.\n  * **C) Control Plane** deals with deciding whether to grant access by analyzing policies, identity and threat signals, but does not manage the transmission of data once the decision has been made.\n  * **D) Threat scope reduction** concerns limiting the potential damage zones within a network, to ensure that a breach in one area does not compromise the entire system, but it does not specifically focus on the transmission of data.\n\n* **Focused Mini-Example:** After the Control Plane approves an employee's access to a file server, the Data Plane routes and transmits the data packets containing the requested document, ensuring that they arrive intact and smoothly at the user's device.\n\n*Question ID: 65245f9aad40d9f61ab27775*",
  },
  215: {
    topic: "Cryptographic Concepts",
    scenario: "An organization is considering the adoption of cryptographic algorithms with longer key lengths to protect sensitive communications within a secure environment.",
    question: "What is the main security advantage of using a longer key length in encryption algorithms?",
    options: [
      "A) Simplified key management",
      "B) Greater difficulty for brute-force attacks",
      "C) Faster encryption and decryption",
      "D) Better compatibility with legacy systems",
    ],
    explanation: "The correct answer is **B) Greater difficulty for brute-force attacks**.\n\n* **Why it's correct:** The main security advantage of using a longer key length in encryption algorithms is the increased difficulty for brute-force attacks. With a longer key, the number of possible combinations grows exponentially, making it extremely more difficult for an attacker to try all the combinations to break the encryption. This greater complexity strengthens the security of the encrypted data.\n* **Analysis of the distractors:**\n  * **A) Simplified key management** is not correct: longer keys do not simplify management; in fact, managing large keys can be more complex.\n  * **C) Faster encryption and decryption** is not correct: longer keys do not speed up the encryption or decryption processes; in fact, they tend to require more computing power.\n  * **D) Better compatibility with legacy systems** is not correct: longer keys can reduce compatibility with older systems that are unable to handle high-bit encryption.\n\n* **Focused Mini-Example:** A company switches from 1024-bit RSA keys to 4096-bit RSA keys to protect its communications. Although the encryption process requires slightly more computing resources, the number of possible combinations an attacker would have to test with a brute-force attack becomes computationally prohibitive with current hardware.\n\n*Question ID: 672111d5d248d95fc8ca8184*",
  },
  216: {
    topic: "Change Management",
    scenario: "An organization wants to understand how a proposed change to its systems could affect various business areas before proceeding with implementation.",
    question: "What is the name of the process that consists of analyzing and predicting the effects of a proposed change, taking into account its impact on various areas of an organization or a system?",
    options: [
      "A) Backout Plan",
      "B) Impact Analysis",
      "C) Approval Process",
      "D) Version Control",
    ],
    explanation: "The correct answer is **B) Impact Analysis**.\n\n* **Why it's correct:** **Impact Analysis** is the process that consists of evaluating and predicting the potential consequences of a proposed change, taking into account various aspects of an organization or a system, such as the IT infrastructure, business processes and security.\n* **Analysis of the distractors:**\n  * **A) Backout Plan** is the strategy that outlines the steps to follow to undo the changes should they cause unexpected complications or fail to achieve the desired results.\n  * **C) Approval Process** is the formalized procedure that ensures changes are reviewed and approved before their implementation.\n  * **D) Version Control** is a system that records the changes made to a file or a set of files over time, allowing specific versions to be recalled at a later time.\n\n* **Focused Mini-Example:** Before deploying a critical update to the order management system, the IT team conducts an Impact Analysis and discovers that the change would negatively affect the integration with the billing system, therefore deciding to postpone the release.\n\n*Question ID: 672103b46ecd963a7be80f58*",
  },
  217: {
    topic: "Change Management",
    scenario: "The law firm 'Sydney, Norman, and Graeme' wants to implement a process that requires all changes to its security plans to be reviewed by an advisory board and approved by a senior executive before being implemented.",
    question: "Which process is this procedure an example of?",
    options: [
      "A) Backout Plan",
      "B) Change Management",
      "C) Impact Analysis",
      "D) Ownership",
    ],
    explanation: "The correct answer is **B) Change Management**.\n\n* **Why it's correct:** **Change Management** is the process for reviewing and authorizing changes to IT systems, in order to ensure that each change is properly reviewed and authorized before being implemented. An example of this process provides for all changes to be reviewed by an advisory board (Change Advisory Board) and approved by a senior executive before implementation.\n* **Analysis of the distractors:**\n  * **A) Ownership** refers to the individual or group responsible for managing a particular IT system or component.\n  * **C) Backout Plan** is designed to address a situation in which a change has been initiated but cannot be completed; it is a component of the broader Change Management process.\n  * **D) Impact Analysis** is the process of assessing the potential impact of a change on the IT systems and the business, but it does not describe the entire formal review and approval process.\n\n* **Focused Mini-Example:** At the law firm, every request to change the firewall must first pass through the Change Advisory Board, which assesses the risks, and subsequently receive the CISO's signature before the change is applied in production: this entire flow constitutes the Change Management process.\n\n*Question ID: 64c136931628abf48a217244*",
  },
  218: {
    topic: "Change Management",
    scenario: "A company operating in a secure environment has to decide whether or not to update some legacy applications still in use in its operational departments.",
    question: "What is a potential technical implication arising from the failure to update legacy applications in a secure environment?",
    options: [
      "A) Greater compatibility with modern systems",
      "B) Automatic compliance with new security policies",
      "C) Faster system performance",
      "D) High risk of security vulnerabilities",
    ],
    explanation: "The correct answer is **D) High risk of security vulnerabilities**.\n\n* **Why it's correct:** The failure to update legacy applications in a secure environment can entail a high risk of security vulnerabilities. These obsolete applications often have uncorrected weaknesses that attackers can exploit, potentially compromising the entire security of the system.\n* **Analysis of the distractors:**\n  * **A) Greater compatibility with modern systems** is not correct: legacy applications, unlike updated ones, typically lack compatibility with modern security standards.\n  * **B) Automatic compliance with new security policies** is not correct: legacy software tends to lag behind current compliance requirements.\n  * **C) Faster system performance** is not correct: the lack of updates does not improve performance; in fact, obsolete applications can be slower or less efficient.\n\n* **Focused Mini-Example:** A hospital continues to use an old medical-records management system that has been unpatched for years. An attacker exploits a known, uncorrected vulnerability in that software to access sensitive patient data, a risk that would have been mitigated with regular updates.\n\n*Question ID: 67211017d248d95fc8ca817a*",
  },
  219: {
    topic: "Physical Security Controls",
    scenario: "Future Tech, a company specialized in industrial heating and cooling systems, wants to implement a security measure to limit unauthorized access to its facilities.",
    question: "Which of the following options is an example of a physical security control that the company could use?",
    options: [
      "A) Security awareness training",
      "B) Intrusion prevention system",
      "C) Security badges",
      "D) Firewall",
    ],
    explanation: "The correct answer is **C) Security badges**.\n\n* **Why it's correct:** **Security badges** are a physical security control that involves issuing identification cards to authorized personnel. These badges can be used to control access to the building and prevent unauthorized entry.\n* **Analysis of the distractors:**\n  * **A) Security awareness training** is a managerial security control that involves training employees on security threats and how to avoid them.\n  * **B) Intrusion prevention system** is a technical security control that monitors network traffic looking for signs of security threats.\n  * **D) Firewall** is a technical security control that monitors and controls incoming and outgoing network traffic based on predefined security rules.\n\n* **Focused Mini-Example:** At Future Tech's industrial facility, every employee must swipe their badge on a reader positioned at the main entrance in order to access the production area, thus preventing entry to anyone who is not authorized.\n\n*Question ID: 64bd580e3ee21b197bf153c7*",
  },
  220: {
    topic: "Zero Trust Architecture",
    scenario: "An organization is implementing a Zero Trust model and wants to clearly define the principle by which access to corporate resources is granted.",
    question: "In a Zero Trust model, which of the following principles BEST describes the way access to resources is granted?",
    options: [
      "A) Trust but Verify",
      "B) Least Privilege",
      "C) Implicit Trust",
      "D) Role-based Access Control",
    ],
    explanation: "The correct answer is **B) Least Privilege**.\n\n* **Why it's correct:** In a Zero Trust model, access is granted based on the principle of **Least Privilege**, which means that users receive only the minimum access necessary to perform their activities, with no entity being trusted by default and with continuous verification of access.\n* **Analysis of the distractors:**\n  * **A) Trust but Verify** aligns only partially with the concept, because it still implies an initial trust, whereas Zero Trust requires constant verification without assuming any trust.\n  * **C) Implicit Trust** does not align with Zero Trust, because it assumes trust without continuous verification, a concept that the Zero Trust model aims to eliminate.\n  * **D) Role-based Access Control** assigns permissions based on roles rather than strictly minimizing access, which could grant privileges that are not strictly necessary.\n\n* **Focused Mini-Example:** An employee in the marketing department receives access exclusively to the tools and documents necessary for their role, with no default access to other corporate resources; every request for additional access is evaluated and verified individually.\n\n*Question ID: 6720fe24e8b5ca200ac6383c*",
  },
  221: {
    topic: "Public Key Infrastructure",
    scenario: "Timothy, a help desk employee, receives an email from a customer. The customer recounts having encountered a strange warning while trying to access a website she had already visited many times in the past, but this time the message reports that a certificate is not valid. From the screenshot sent by the customer, Timothy cannot trace the exact name of the certificate.",
    question: "What can Timothy use to verify whether the certificate is no longer valid?",
    options: [
      "A) Root of Trust",
      "B) Online Certificate Status Protocol",
      "C) Certificate Revocation Lists",
      "D) Certificate Authorities",
    ],
    explanation: "The correct answer is **C) Certificate Revocation Lists**.\n\n* **Why it's correct:** **Certificate Revocation Lists (CRL)** are lists of the certificates that have been revoked by a Certificate Authority before their scheduled expiration date. Because Timothy does not know the name of the certificate, consulting this list represents his best option in the described scenario.\n* **Analysis of the distractors:**\n  * **A) Root of Trust (RoT)** is a source always considered trustworthy, the foundation of a cryptographic system and the central point of the chain of trust within it; it is important in PKI, but it does not directly provide information on revoked certificates.\n  * **B) Online Certificate Status Protocol (OCSP)** is an internet protocol used to obtain the revocation status of a specific digital certificate; if Timothy knew the name of the certificate, it would be his best option, but in the scenario he does not have this information.\n  * **D) Certificate Authorities (CA)** are trusted entities that issue and manage security credentials and public keys for message encryption; CAs publish the CRLs, but if contacted directly about a specific certificate, they will still refer back to the CRL itself.\n\n* **Focused Mini-Example:** Not knowing the exact name of the expired certificate reported by the customer, Timothy consults the Certificate Revocation List published by the CA to verify whether the site's certificate is among those revoked early.\n\n*Question ID: 64c3e30d36bc29dc2e8730ac*",
  },
  222: {
    topic: "Authentication Methods",
    scenario: "Constance is logging into her online bank account. The website verifies that she is using the correct username and password.",
    question: "Which common method for authenticating people is this scenario an example of?",
    options: [
      "A) Possession-based authentication",
      "B) Biometric authentication",
      "C) Location-based authentication",
      "D) Knowledge-based authentication",
    ],
    explanation: "The correct answer is **D) Knowledge-based authentication**.\n\n* **Why it's correct:** A username and password are examples of **Knowledge-based authentication**, a common method for authenticating people based on something the user knows.\n* **Analysis of the distractors:**\n  * **A) Possession-based authentication** refers to the use of a physical object, such as a smart card or a token, for authentication.\n  * **B) Biometric authentication** refers to the use of a biometric characteristic, such as a fingerprint or facial recognition, for authentication.\n  * **C) Location-based authentication** uses the geographic location where a person is at the time of accessing a site to authenticate the user.\n\n* **Focused Mini-Example:** Every time Constance accesses her online bank account, she types her username and password: both pieces of information are known exclusively to her, which makes this a classic example of knowledge-based authentication.\n\n*Question ID: 64c02e8dbd666fdab8550a7a*",
  },
  223: {
    topic: "Secure Network Protocols",
    scenario: "Safeguard Systems wants to protect the voice communications between its branches.",
    question: "Which of the following protocols would provide encryption specifically for Voice over IP traffic?",
    options: [
      "A) DHCP",
      "B) ARP",
      "C) SRTP",
      "D) ICMP",
    ],
    explanation: "The correct answer is **C) SRTP**.\n\n* **Why it's correct:** **SRTP (Secure Real-time Transport Protocol)** provides encryption, message authentication and integrity for Voice over IP communications. It is specifically designed to protect the traffic of the Real-time Transport Protocol (RTP) and the RTP Control Protocol (RTCP).\n* **Analysis of the distractors:**\n  * **A) DHCP (Dynamic Host Configuration Protocol)** is used to assign dynamic IP addresses to devices on a network; it does not encrypt voice traffic.\n  * **B) ARP (Address Resolution Protocol)** is used to map a 32-bit IP address to a MAC address within a local network, not to encrypt voice traffic.\n  * **D) ICMP (Internet Control Message Protocol)** is used mainly by the operating systems of networked computers to send error messages, for example when a requested service is unavailable; it does not handle voice encryption.\n\n* **Focused Mini-Example:** Safeguard Systems implements SRTP on its corporate VoIP system so that all voice calls between the headquarters and the remote branches are encrypted end-to-end, preventing the interception of confidential conversations during transit over the network.\n\n*Question ID: 64c2817b91f0e62370d2e238*",
  },
  224: {
    topic: "Agreements & Contracts",
    scenario: "An organization needs to enter into a contract with an external supplier to specify the exact services that will be delivered for a project, including the timelines and the associated costs for each deliverable.",
    question: "Which type of agreement defines the specific services that must be provided by the supplier, along with their timelines and costs?",
    options: [
      "A) SOW (Statement of Work)",
      "B) SLA (Service Level Agreement)",
      "C) MOA (Memorandum of Agreement)",
      "D) MSA (Master Services Agreement)",
    ],
    explanation: "The correct answer is **A) SOW (Statement of Work)**.\n\n* **Why it's correct:** A Statement of Work (SOW) specifies the detailed scope of work, the tasks, the deliverables, the timelines and the costs for a specific project or engagement with the supplier.\n* **Analysis of the distractors:**\n  * **B) SLA (Service-Level Agreement)** is an agreement that defines the expected level of service (e.g. uptime, response times), not the specific tasks and costs of a single project.\n  * **C) MOA (Memorandum of Agreement)** describes the general rules of cooperation and collaboration between entities, but does not focus on specific deliverables and operational costs of software development.\n  * **D) MSA (Master Services Agreement)** establishes the general legal and contractual terms that will govern the future business relationships, leaving the operational details and costs of the individual projects to the subsequent SOWs.\n\n* **Focused Mini-Example:** An e-commerce company engages a web agency to develop a new app. They sign a SOW to establish that the app must be ready within 3 months at a cost of €50,000.\n\n*Question ID: 64bb3cf1eff2b06d2ceda190*",
  },
  225: {
    topic: "Business Continuity & Disaster Recovery",
    scenario: "During business continuity planning, the IT team must define the backup frequency for a critical financial database. They must establish the maximum tolerable limit of time for which data could be lost due to a serious incident before causing an unacceptable impact.",
    question: "In the field of disaster recovery, which term describes the maximum targeted period in which data could be lost due to a serious incident?",
    options: [
      "A) MTBF (Mean Time Between Failures)",
      "B) RTO (Recovery Time Objective)",
      "C) SLA (Service Level Agreement)",
      "D) RPO (Recovery Point Objective)",
    ],
    explanation: "The correct answer is **D) RPO (Recovery Point Objective)**.\n\n* **Why it's correct:** The RPO (Recovery Point Objective) defines the maximum acceptable amount of data loss measured in time, determining the optimal backup frequency.\n* **Analysis of the distractors:**\n  * **A) MTBF** measures the average time between hardware failures, indicating the reliability of a system, not the tolerance to data loss.\n  * **B) RTO (Recovery Time Objective)** indicates the maximum tolerable time to restore the infrastructure and make the service operational again after a disaster.\n  * **C) SLA (Service Level Agreement)** is the formal agreement that establishes the performance and service levels agreed with a supplier.\n\n* **Focused Mini-Example:** If a company sets an RPO of 4 hours for its financial databases, backups must be performed at least every 4 hours so that, in the event of a disaster, no more than 4 hours of transactions are lost.\n\n*Question ID: 654972c623b1cc31a82e92db*",
  },
};
