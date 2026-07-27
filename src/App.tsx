import React, { useState, useEffect, useRef } from "react";
import { 
  ShieldAlert, 
  FileText, 
  Calculator, 
  TrendingUp, 
  Lock, 
  Users, 
  Handshake, 
  CheckSquare, 
  GraduationCap, 
  Check, 
  X, 
  ChevronRight, 
  Send, 
  RefreshCw, 
  AlertTriangle, 
  Award, 
  BookOpen, 
  HelpCircle,
  Activity,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Info,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import { DOMAIN_1_TOPICS, DOMAIN_2_TOPICS, DOMAIN_3_TOPICS, DOMAIN_4_TOPICS, DOMAIN_5_TOPICS, INITIAL_QUESTIONS, DOMAIN_1_QUESTIONS, DOMAIN_2_QUESTIONS, DOMAIN_3_QUESTIONS, DOMAIN_4_QUESTIONS, DOMAIN_5_QUESTIONS } from "./data";
import { Subtopic, TopicGroup, Question, ChatMessage } from "./types";
import { motion, AnimatePresence } from "motion/react";
import { GlossarySection } from "./components/GlossarySection";

const SUBGROUP_MAP: Record<string, string> = {
  // Domain 1
  "CIATriad": "Principi Fondamentali (CIA, AAA, Non-Repudio)",
  "AAAFramework": "Principi Fondamentali (CIA, AAA, Non-Repudio)",
  "NonRepudiation": "Principi Fondamentali (CIA, AAA, Non-Repudio)",
  "GapAnalysis": "Analisi Postura e Gap",
  "ZeroTrustIntro": "Zero Trust Architecture (ZTA)",
  "PolicyDrivenAccessControl": "Zero Trust Architecture (ZTA)",
  "ControlPlaneZTA": "Zero Trust Architecture (ZTA)",
  "ImplicitTrustZones": "Zero Trust Architecture (ZTA)",
  "DataPlaneZTA": "Zero Trust Architecture (ZTA)",
  "TechnicalControls": "Categorie di Controlli (Implementazione)",
  "OperationalControls": "Categorie di Controlli (Implementazione)",
  "ManagerialControls": "Categorie di Controlli (Implementazione)",
  "PhysicalControls": "Categorie di Controlli (Implementazione)",
  "PreventiveControl": "Tipi di Controlli (In base alla Funzione)",
  "DetectiveControl": "Tipi di Controlli (In base alla Funzione)",
  "CorrectiveControl": "Tipi di Controlli (In base alla Funzione)",
  "DeterrentControl": "Tipi di Controlli (In base alla Funzione)",
  "CompensatingControl": "Tipi di Controlli (In base alla Funzione)",
  "DirectiveControl": "Tipi di Controlli (In base alla Funzione)",
  "ApprovalProcess": "Processi di Change Management",
  "ImpactAnalysis": "Processi di Change Management",
  "BackoutPlan": "Processi di Change Management",
  "MaintenanceWindow": "Processi di Change Management",
  "VersionControl": "Processi di Change Management",
  
  // Topic 5: Cryptography
  "SymmetricEncryption": "Crittografia",
  "AsymmetricEncryption": "Crittografia",
  "HashingConcept": "Crittografia",
  "DigitalSignatures": "Infrastruttura PKI",
  "KeyManagement": "Crittografia",
  "PKIConcept": "Infrastruttura PKI",
  "PKIFundamentals": "Infrastruttura PKI",
  "RootOfTrustConcept": "Infrastruttura PKI",
  "CertificateAuthorityConcept": "Infrastruttura PKI",
  "RegistrationAuthorityConcept": "Infrastruttura PKI",
  "PublicKeyConcept": "Infrastruttura PKI",
  "PrivateKeyConcept": "Infrastruttura PKI",
  "CSRConcept": "Infrastruttura PKI",
  "CertificatesConcept": "Infrastruttura PKI",
  "WildcardCertificates": "Infrastruttura PKI",
  "SaltingConcept": "Crittografia",
  "DigitalSignaturesConcept": "Infrastruttura PKI",
  "TPMHardware": "Infrastruttura PKI",
  "HSMHardware": "Infrastruttura PKI",
  "KeyEscrowConcept": "Infrastruttura PKI",
  "BlockCipherConcept": "Crittografia",
  "AES256Concept": "Crittografia",
  "StreamCipherConcept": "Crittografia",
  "KeyStretchingConcept": "Crittografia",
  "BlockchainConcept": "Crittografia",
  "CodeSigningConcept": "Infrastruttura PKI",

  // Topic 6: Physical Security
  "PhysicalBadge": "Misure di Sicurezza Fisica",
  "SecurityGuards": "Misure di Sicurezza Fisica",
  "PhysicalCameras": "Misure di Sicurezza Fisica",
  "PhysicalFencing": "Misure di Sicurezza Fisica",
  "PhysicalBollards": "Misure di Sicurezza Fisica",
  "PhysicalSensors": "Misure di Sicurezza Fisica",

  // Topic 7: Deception Technologies
  "HoneypotDeception": "Tecnologie di Inganno (Deception)",
  "HoneynetDeception": "Tecnologie di Inganno (Deception)",
  "HoneyfileDeception": "Tecnologie di Inganno (Deception)",
  "HoneytokenDeception": "Tecnologie di Inganno (Deception)",

  // Topic 8: Identity & Access Control Models
  "AuthenticationConcept_New": "Modelli d'Identità e Federazione",
  "AuthorizationConcept_New": "Modelli di Controllo Accessi (IAM)",
  "AccountingConcept_New": "Modelli d'Identità e Federazione",
  "MFA_SSO_Federation": "Modelli d'Identità e Federazione",
  "PasswordPoliciesAccount": "Modelli d'Identità e Federazione",
  "LDAPProtocol_New": "Modelli d'Identità e Federazione",
  "AttributeBasedConcept": "Modelli di Controllo Accessi (IAM)",
  "DACConcept": "Modelli di Controllo Accessi (IAM)",
  "MACConcept": "Modelli di Controllo Accessi (IAM)",
  "MFAConcept_New": "Modelli d'Identità e Federazione",
  "FederationConcept": "Modelli d'Identità e Federazione",
  "AccessControlModels": "Modelli di Controllo Accessi (IAM)",
  "RBACConcept": "Modelli di Controllo Accessi (IAM)",
  "RuleBasedAccessControlConcept": "Modelli di Controllo Accessi (IAM)",
  "LeastPrivilegeConcept": "Modelli di Controllo Accessi (IAM)",
  "NeedToKnowConcept": "Modelli di Controllo Accessi (IAM)",
  "JustInTimeConcept": "Modelli di Controllo Accessi (IAM)",
  "JustEnoughAdministrationConcept": "Modelli di Controllo Accessi (IAM)",
  "ImplicitDenyConcept": "Modelli di Controllo Accessi (IAM)",
  "PermissionRestrictions": "Modelli di Controllo Accessi (IAM)",
  "GeographicNetworkRestrictions": "Modelli di Controllo Accessi (IAM)",

  // Domain 2
  "NationStateActor": "Profili e Attori delle Minacce",
  "InsiderThreatActor": "Profili e Attori delle Minacce",
  "OrganizedCrimeActor": "Profili e Attori delle Minacce",
  "HacktivistActor": "Profili e Attori delle Minacce",
  "ScriptKiddieActor": "Profili e Attori delle Minacce",
  "ThreatActorGeneral": "Profili e Attori delle Minacce",
  "CompetitorActor": "Profili e Attori delle Minacce",
  
  "FinancialGainMotiv": "Motivazioni degli Attaccanti",
  "EspionageMotiv": "Motivazioni degli Attaccanti",
  "RevengeMotiv": "Motivazioni degli Attaccanti",
  "IdeologyMotiv": "Motivazioni degli Attaccanti",
  "ChaosMotiv": "Motivazioni degli Attaccanti",

  "ThreatVectorsDetails": "Vettori e Superfici di Attacco",
  "AttackSurfacesDetails": "Vettori e Superfici di Attacco",

  "VirusMalware": "Tipologie di Malware",
  "WormMalware": "Tipologie di Malware",
  "TrojanMalware": "Tipologie di Malware",
  "RansomwareMalware": "Tipologie di Malware",
  "RootkitMalware": "Tipologie di Malware",
  "SpywareMalware": "Tipologie di Malware",
  "KeyloggerMalware": "Tipologie di Malware",
  "LogicBombMalware": "Tipologie di Malware",

  "SocialEngineeringConcept": "Ingegneria Sociale & Phishing",
  "Vishing": "Ingegneria Sociale & Phishing",
  "Pretexting": "Ingegneria Sociale & Phishing",
  "Impersonation": "Ingegneria Sociale & Phishing",
  "WateringHole": "Ingegneria Sociale & Phishing",
  "Typosquatting": "Ingegneria Sociale & Phishing",
  "Cloning": "Ingegneria Sociale & Phishing",
  "Whaling": "Ingegneria Sociale & Phishing",
  "Misinformation": "Ingegneria Sociale & Phishing",
  "PhishingCampaign": "Ingegneria Sociale & Phishing",
  "PhishingSE": "Ingegneria Sociale & Phishing",
  "SmishingSE": "Ingegneria Sociale & Phishing",
  "VishingSE": "Ingegneria Sociale & Phishing",
  "PretextingSE": "Ingegneria Sociale & Phishing",
  "ImpersonationSE": "Ingegneria Sociale & Phishing",
  "WateringHoleSE": "Ingegneria Sociale & Phishing",
  "TyposquattingSE": "Ingegneria Sociale & Phishing",
  "CloningSE": "Ingegneria Sociale & Phishing",
  "WhalingSE_New": "Ingegneria Sociale & Phishing",
  "MisinformationSE_New": "Ingegneria Sociale & Phishing",
  "PhishingCampaignSE_New": "Ingegneria Sociale & Phishing",

  "BruteForceAttack": "Attacchi alle Credenziali",
  "DictionaryAttack": "Attacchi alle Credenziali",
  "PasswordSpraying": "Attacchi alle Credenziali",
  "CredentialStuffing": "Attacchi alle Credenziali",
  "BruteForceAtt": "Attacchi alle Credenziali",
  "DictionaryAtt": "Attacchi alle Credenziali",
  "PasswordSprayingAtt": "Attacchi alle Credenziali",
  "CredentialStuffingAtt": "Attacchi alle Credenziali",

  "AmplifiedDDoS": "Attacchi Infrastrutturali & Web",
  "ReflectedDDoS": "Attacchi Infrastrutturali & Web",
  "SQLInjection": "Attacchi Infrastrutturali & Web",
  "NetworkWirelessAttacks": "Attacchi Infrastrutturali & Web",
  "AppCryptoAttacks": "Attacchi Infrastrutturali & Web",
  "AmplifiedDDoS_New": "Attacchi Infrastrutturali & Web",
  "ReflectedDDoS_New": "Attacchi Infrastrutturali & Web",
  "SQLi_New": "Attacchi Infrastrutturali & Web",

  "VulnerabilityCVE": "Analisi di Vulnerabilità",
  "VulnerabilityCVSS": "Analisi di Vulnerabilità",
  "ZeroDayVulnerability": "Analisi di Vulnerabilità",
  "FalsePositiveConcept": "Analisi di Vulnerabilità",
  "FalseNegativeConcept": "Analisi di Vulnerabilità",
  "CVEVuln": "Analisi di Vulnerabilità",
  "CVSSVuln": "Analisi di Vulnerabilità",
  "ZeroDayVuln": "Analisi di Vulnerabilità",
  "FalsePositiveVuln": "Analisi di Vulnerabilità",
  "FalseNegativeVuln": "Analisi di Vulnerabilità",

  "SegmentationMiti": "Tecniche di Mitigazione (Hardening)",
  "LeastPrivilegeMiti": "Tecniche di Mitigazione (Hardening)",
  "PatchingMiti": "Tecniche di Mitigazione (Hardening)",
  "AllowListMiti": "Tecniche di Mitigazione (Hardening)",
  "IsolationMiti": "Tecniche di Mitigazione (Hardening)",
  "EncryptionMiti": "Tecniche di Mitigazione (Hardening)",
  "MonitoringMiti": "Tecniche di Mitigazione (Hardening)",
  "DisablePortsMiti": "Tecniche di Mitigazione (Hardening)",
  "ChangePasswordsMiti": "Tecniche di Mitigazione (Hardening)",
  "RemoveSoftwareMiti": "Tecniche di Mitigazione (Hardening)",
  "ACLMiti": "Tecniche di Mitigazione (Hardening)",
  "AppAllowListMiti": "Tecniche di Mitigazione (Hardening)",

  // Domain 3
  "OnPremisesArchitecture": "Modelli Architetturali Tradizionali",
  "CentralizedArchitecture": "Modelli Architetturali Tradizionali",
  "DecentralizedArchitecture": "Modelli Architetturali Tradizionali",
  "IaaSCloud": "Modelli di Servizio Cloud & Responsabilità",
  "PaaSCloud": "Modelli di Servizio Cloud & Responsabilità",
  "FaaSCloud": "Modelli di Servizio Cloud & Responsabilità",
  "SaaSCloud": "Modelli di Servizio Cloud & Responsabilità",
  "SharedResponsibilityCloud": "Modelli di Servizio Cloud & Responsabilità",
  "ResponsibilityMatrixConcept": "Modelli di Servizio Cloud & Responsabilità",
  
  // Under Network Security (Obj 3.2):
  "Layer1Physical": "Modello ISO/OSI (7 Livelli)",
  "Layer2DataLink": "Modello ISO/OSI (7 Livelli)",
  "Layer3Network": "Modello ISO/OSI (7 Livelli)",
  "Layer4Transport": "Modello ISO/OSI (7 Livelli)",
  "Layer5Session": "Modello ISO/OSI (7 Livelli)",
  "Layer6Presentation": "Modello ISO/OSI (7 Livelli)",
  "Layer7Application": "Modello ISO/OSI (7 Livelli)",
  "RoutersConcept": "Dispositivi di Connettività e Relay",
  "ProxyServerConcept": "Dispositivi di Connettività e Relay",
  "JumpServerConcept": "Dispositivi di Connettività e Relay",
  "NACNet": "Sicurezza & Monitoraggio degli Accessi di Rete",
  "IDSSolutionConcept": "Sicurezza & Monitoraggio degli Accessi di Rete",
  "IPS_New": "Sicurezza & Monitoraggio degli Accessi di Rete",
  "PassiveMode_New": "Sicurezza & Monitoraggio degli Accessi di Rete",
  "IPSecNet": "Protocolli di Crittografia in Transito",
  "TLSNet": "Protocolli di Crittografia in Transito",
  "SSHNet": "Protocolli di Crittografia in Transito",
  "VPNNet": "Architetture VPN",
  "SiteToSiteVPNNet": "Architetture VPN",
  "VPNGateway_New": "Architetture VPN",
  "PSKConcept": "Sicurezza Reti Wireless (Wi-Fi)",
  "WEPConcept": "Sicurezza Reti Wireless (Wi-Fi)",
  "WPAWirelessConcept": "Sicurezza Reti Wireless (Wi-Fi)",
  "TKIPConcept": "Sicurezza Reti Wireless (Wi-Fi)",
  "MICConcept": "Sicurezza Reti Wireless (Wi-Fi)",
  "WPA3Net": "Sicurezza Reti Wireless (Wi-Fi)",
  "WPA2Net": "Sicurezza Reti Wireless (Wi-Fi)",
  "GCMPConcept": "Sicurezza Reti Wireless (Wi-Fi)",
  "SAEConcept": "Sicurezza Reti Wireless (Wi-Fi)",
  "OpenSystemConcept": "Sicurezza Reti Wireless (Wi-Fi)",
  "WPA3PersonalRes": "Sicurezza Reti Wireless (Wi-Fi)",
  "WPA3EnterpriseRes": "Sicurezza Reti Wireless (Wi-Fi)",
  "WiFiBluetoothTech": "Sicurezza Reti Wireless (Wi-Fi)",
  "WirelessSurveyRes": "Sicurezza Reti Wireless (Wi-Fi)",
  "RADIUSNet": "Autenticazione di Rete Centralizzata (AAA)",
  "EAPProtocol_New": "Autenticazione di Rete Centralizzata (AAA)",
  "SMTPProtocol": "Sicurezza E-Mail",
  "MTAConcept": "Sicurezza E-Mail",
  "SPFConcept_New": "Sicurezza E-Mail",
  "DKIMConcept_New": "Sicurezza E-Mail",
  "DMARCConcept_New": "Sicurezza E-Mail",
  "PhysicalSegmentationConcept": "Segmentazione e Isolamento di Rete",
  "AirGapConcept": "Segmentazione e Isolamento di Rete",
  "LogicalSegmentationConcept": "Segmentazione e Isolamento di Rete",
  "VLANConcept": "Segmentazione e Isolamento di Rete",
  "Layer3SwitchConcept": "Segmentazione e Isolamento di Rete",
  "InterVLANRoutingConcept": "Segmentazione e Isolamento di Rete",
  "NetSegmentationPortSecurityConcept": "Segmentazione e Isolamento di Rete",
  "IEEE8021XAuthConcept": "Autenticazione di Rete Centralizzata (AAA)",
  "TrafficCaptureTAPConcept": "Sicurezza & Monitoraggio degli Accessi di Rete",
  "ProxyTypesAdvancedConcept": "Dispositivi di Connettività e Relay",
  "ModernCloudNetArchitectures": "Segmentazione e Isolamento di Rete",
  "SDNConcept": "Software-Defined Networking (SDN)",
  "DataPlaneConcept": "Software-Defined Networking (SDN)",
  "ControlPlaneConcept": "Software-Defined Networking (SDN)",
  "ManagementPlaneConcept": "Software-Defined Networking (SDN)",
  "ResponsivenessPerformance": "Performance e Metriche di Rete",
  "LatencyPerformance": "Performance e Metriche di Rete",

  // Topic 3: Firewalls
  "NGFWFire": "Soluzioni di Sicurezza Integrate",
  "WAFFire": "Soluzioni di Sicurezza Integrate",
  "UTMFire": "Soluzioni di Sicurezza Integrate",
  "FirewallBase_New": "Tipi di Architetture Firewall",
  "StatefulFirewall_New": "Tipi di Architetture Firewall",
  "PacketFilteringFirewall_New": "Tipi di Architetture Firewall",
  "ProxyFirewall_New": "Tipi di Architetture Firewall",
  "StatelessFirewallConcept": "Tipi di Architetture Firewall",
  "DPIFire": "Soluzioni di Sicurezza Integrate",
  "AllowRule": "Configurazione Regole Firewall",
  "DenyRule": "Configurazione Regole Firewall",
  "InboundTraffic": "Configurazione Regole Firewall",
  "OutboundTraffic": "Configurazione Regole Firewall",
  "NetFirewallNATConcept": "Soluzioni di Sicurezza Integrate",
  "NGFWCapabilitiesConcept": "Soluzioni di Sicurezza Integrate",
  "SecurityZonesConcept": "Segmentazione e Isolamento di Rete",
  "FailClosed_New": "Comportamenti di Sicurezza e Controllo Rate",
  "FailOpen_New": "Comportamenti di Sicurezza e Controllo Rate",
  "RateBasedFiltering_New": "Comportamenti di Sicurezza e Controllo Rate",

  // Topic 4: Data Security
  "DataAtRestSec": "Stati del Ciclo di Vita del Dato",
  "DataInTransitSec": "Stati del Ciclo di Vita del Dato",
  "DataInUseSec": "Stati del Ciclo di Vita del Dato",
  "DataTypesConcept": "Classificazione e Tipologia dei Dati",
  "DataClassificationLevels": "Classificazione e Tipologia dei Dati",
  "EncryptionSec": "Tecniche di Protezione del Dato",
  "AppVsNetworkEncryptionConcept": "Tecniche di Protezione del Dato",
  "HashingSec": "Tecniche di Protezione del Dato",
  "TokenizationSec": "Tecniche di Protezione del Dato",
  "DataMaskingSec": "Tecniche di Protezione del Dato",
  "ObfuscationSec": "Tecniche di Protezione del Dato",
  "SanitizationSec_New": "Tecniche di Protezione del Dato",

  // Topic 5: Resilience & Recovery
  "AvailabilityRes": "Sistemi di Alta Disponibilità (HA)",
  "HighAvailabilityRes": "Sistemi di Alta Disponibilità (HA)",
  "ActiveActivePassiveRes": "Sistemi di Alta Disponibilità (HA)",
  "FailoverFailbackRes": "Sistemi di Alta Disponibilità (HA)",
  "ServerClusteringRes": "Sistemi di Alta Disponibilità (HA)",
  "SharedStorageRes": "Sistemi di Alta Disponibilità (HA)",
  "ScalabilityRes": "Sistemi di Alta Disponibilità (HA)",
  "PlatformDiversityRes": "Sistemi di Alta Disponibilità (HA)",
  "MultiCloudOutageRes": "Sistemi di Alta Disponibilità (HA)",
  "LoadBalancingRes": "Sistemi di Alta Disponibilità (HA)",
  "FaultToleranceConcept": "Sistemi di Alta Disponibilità (HA)",
  "ClusteringRes": "Sistemi di Alta Disponibilità (HA)",
  "CapacityPlanningRes": "Sistemi di Alta Disponibilità (HA)",
  "ParallelProcessingRes": "Sistemi di Alta Disponibilità (HA)",
  "SiteResiliencyRes": "Siti di Disaster Recovery",
  "DisasterRecoverySiteRes": "Siti di Disaster Recovery",
  "BusinessContinuityCOOPRes": "Siti di Disaster Recovery",
  "ManualProceduresRes": "Siti di Disaster Recovery",
  "HotSiteRes": "Siti di Disaster Recovery",
  "WarmSiteRes": "Siti di Disaster Recovery",
  "ColdSiteRes": "Siti di Disaster Recovery",
  "DisasterRecoveryRes": "Siti di Disaster Recovery",
  "BusinessContinuityRes": "Siti di Disaster Recovery",
  "BackupsRes": "Strategie di Backup e Replica",
  "ReplicationRes": "Strategie di Backup e Replica",
  "SynchronizationRes": "Strategie di Backup e Replica",
  "SnapshotsRes": "Strategie di Backup e Replica",
  "RecoveryRes": "Strategie di Backup e Replica",
  "EaseOfRecoveryConcept": "Strategie di Backup e Replica",
  "CorporateImageConcept": "Strategie di Backup e Replica",
  "RestoreAction": "Strategie di Backup e Replica",
  "RecoveryTestingRes": "Strategie di Backup e Replica",
  "OnSiteBackupRes": "Strategie di Backup e Replica",
  "OffSiteBackupRes": "Strategie di Backup e Replica",
  "BackupFrequencyRes": "Strategie di Backup e Replica",
  "BackupEncryptionRes": "Strategie di Backup e Replica",
  "JournalingRes": "Strategie di Backup e Replica",
  "UPSRes": "Resilienza Alimentazione Fisica",
  "GeneratorsRes": "Resilienza Alimentazione Fisica",
  "BackupPowerConcept": "Resilienza Alimentazione Fisica",
  "PowerResilience": "Resilienza Alimentazione Fisica",
  "PowerResiliencyRes": "Resilienza Alimentazione Fisica",
  "OfflineUPSRes": "Resilienza Alimentazione Fisica",
  "LineInteractiveUPSRes": "Resilienza Alimentazione Fisica",
  "OnlineUPSRes": "Resilienza Alimentazione Fisica",
  "GeneratorRes": "Resilienza Alimentazione Fisica",
  "SPOFConcept": "Analisi dei Punti di Guasto Singoli",
  "RedundancyConcept": "Analisi dei Punti di Guasto Singoli",
  "IoTConcept_New": "Dispositivi Speciali e IoT",
  "EmbeddedSystemConcept_New": "Dispositivi Speciali e IoT",
  "RTOSConcept_New": "Dispositivi Speciali e IoT",
  "SCADAConcept_New": "Dispositivi Speciali e IoT",
  "ICSConcept_New": "Dispositivi Speciali e IoT",

  // Topic 6: PBQ Dominio 3 Scenarios
  "VPNPBQ": "Scenari Pratici di Laboratorio (PBQ)",
  "FirewallRulesPBQ": "Scenari Pratici di Laboratorio (PBQ)",
  "SSHPBQ": "Scenari Pratici di Laboratorio (PBQ)",
  "WPA3PBQ": "Scenari Pratici di Laboratorio (PBQ)",
  "RADIUSPBQ": "Scenari Pratici di Laboratorio (PBQ)",
  "EncryptionVsHashingPBQ": "Scenari Pratici di Laboratorio (PBQ)",
  "BackupRecoveryPBQ": "Scenari Pratici di Laboratorio (PBQ)",

  // Domain 4
  "HardeningConcept": "Hardening di Sistemi e Dispositivi",
  "ServerHardening": "Hardening di Sistemi e Dispositivi",
  "WorkstationHardening": "Hardening di Sistemi e Dispositivi",
  "RouterHardening": "Hardening di Sistemi e Dispositivi",
  "SwitchHardening": "Hardening di Sistemi e Dispositivi",
  "MobileDeviceHardening": "Hardening di Sistemi e Dispositivi",
  "IoTHardening": "Hardening di Sistemi e Dispositivi",
  "AntivirusScanningConcept": "Hardening di Sistemi e Dispositivi",
  "SecurityBaselineRes": "Hardening di Sistemi e Dispositivi",
  "PatchManagementRes": "Hardening di Sistemi e Dispositivi",
  "GroupPolicyRes": "Hardening di Sistemi e Dispositivi",
  "MDM": "Dispositivi Mobili ed Enterprise (MDM)",
  "BYOD": "Dispositivi Mobili ed Enterprise (MDM)",
  "COPE": "Dispositivi Mobili ed Enterprise (MDM)",
  "CYOD": "Dispositivi Mobili ed Enterprise (MDM)",
  "VulnerabilityScan": "Metodologie di Vulnerability Assessment",
  "PenetrationTest": "Metodologie di Vulnerability Assessment",
  "CVE": "Metodologie di Vulnerability Assessment",
  "CVSS": "Metodologie di Vulnerability Assessment",
  "PatchManagement": "Metodologie di Vulnerability Assessment",
  "PatchConcept": "Metodologie di Vulnerability Assessment",
  "PatchAvailabilityConcept": "Metodologie di Vulnerability Assessment",
  "InabilityToPatchConcept": "Metodologie di Vulnerability Assessment",
  "EaseOfDeploymentConcept": "Automazione e Orchestrazione di Sicurezza",
  "AutomationConcept": "Automazione e Orchestrazione di Sicurezza",
  "ActiveReconnaissanceConcept": "Tecniche di Reconnaissance e Testing",
  "PassiveReconnaissanceConcept": "Tecniche di Reconnaissance e Testing",
  "VulnerabilityAssessmentConcept": "Tecniche di Reconnaissance e Testing",
  "BlackBoxTesting": "Tecniche di Reconnaissance e Testing",
  "WhiteBoxTesting": "Tecniche di Reconnaissance e Testing",
  "GreyBoxTesting": "Tecniche di Reconnaissance e Testing",
  "PassiveTestingConcept": "Tecniche di Reconnaissance e Testing",
  "SIEM": "Strumenti di Monitoraggio e Telemetria",
  "DLP": "Strumenti di Monitoraggio e Telemetria",
  "SCAP": "Strumenti di Monitoraggio e Telemetria",
  "SNMP": "Strumenti di Monitoraggio e Telemetria",
  "NetFlow": "Strumenti di Monitoraggio e Telemetria",
  "VulnerabilityScanner": "Strumenti di Monitoraggio e Telemetria",
  "UBAConcept": "Strumenti di Monitoraggio e Telemetria",
  "ActivePassiveMonitoringConcept": "Strumenti di Monitoraggio e Telemetria",
  "SIEMComponentsConcept": "Strumenti di Monitoraggio e Telemetria",
  "FirewallLogs": "Analisi delle Tipologie di Log",
  "EndpointLogs": "Analisi delle Tipologie di Log",
  "SystemLogs": "Analisi delle Tipologie di Log",
  "IDSLogs": "Analisi delle Tipologie di Log",
  "IPSLogs": "Analisi delle Tipologie di Log",
  "ApplicationLogs": "Analisi delle Tipologie di Log",
  "PreparationPhase": "Fasi del Ciclo di Incident Response",
  "DetectionPhase": "Fasi del Ciclo di Incident Response",
  "AnalysisPhase": "Fasi del Ciclo di Incident Response",
  "ContainmentPhase": "Fasi del Ciclo di Incident Response",
  "EradicationPhase": "Fasi del Ciclo di Incident Response",
  "RecoveryPhase": "Fasi del Ciclo di Incident Response",
  "LessonsLearnedPhase": "Fasi del Ciclo di Incident Response",
  "IncidentResponseGeneralConcept": "Esercitazioni e Procedure di Risposta",
  "TabletopExercisesConcept": "Esercitazioni e Procedure di Risposta",
  "SimulationsConcept": "Esercitazioni e Procedure di Risposta",
  "FunctionalExercisesConcept": "Esercitazioni e Procedure di Risposta",
  "LiveDrillsConcept": "Esercitazioni e Procedure di Risposta",
  "ChainOfCustody": "Fasi di Digital Forensics",
  "AcquisitionForensics": "Fasi di Digital Forensics",
  "PreservationForensics": "Fasi di Digital Forensics",
  "ReportingForensics": "Fasi di Digital Forensics",
  "ProvisioningAutomation": "Automazione e Orchestrazione di Sicurezza",
  "APIAutomation": "Automazione e Orchestrazione di Sicurezza",
  "ScriptingAutomation": "Automazione e Orchestrazione di Sicurezza",
  "OrchestrationAutomation": "Automazione e Orchestrazione di Sicurezza",
  "PBQLogAnalysis": "Scenari Pratici di Analisi Incidenti (PBQ)",
  "PBQFirewallLogs": "Scenari Pratici di Analisi Incidenti (PBQ)",
  "PBQIncidentInvestigation": "Scenari Pratici di Analisi Incidenti (PBQ)",
  "PBQMalwareId": "Scenari Pratici di Analisi Incidenti (PBQ)",
  "PBQHostIsolation": "Scenari Pratici di Analisi Incidenti (PBQ)",
  "PBQAccessLogReview": "Scenari Pratici di Analisi Incidenti (PBQ)",

  // Domain 5
  "Governance": "Strutture di Governance e Ruoli dei Dati",
  "Boards": "Strutture di Governance e Ruoli dei Dati",
  "Committees": "Strutture di Governance e Ruoli dei Dati",
  "DataRolesGovernance": "Strutture di Governance e Ruoli dei Dati",
  "AUP": "Politiche di Sicurezza e Standard di Sviluppo",
  "SecurityPolicies": "Politiche di Sicurezza e Standard di Sviluppo",
  "IncidentResponsePolicy": "Politiche di Sicurezza e Standard di Sviluppo",
  "BCP": "Politiche di Sicurezza e Standard di Sviluppo",
  "DRP": "Politiche di Sicurezza e Standard di Sviluppo",
  "RTORes": "Politiche di Sicurezza e Standard di Sviluppo",
  "RPORes": "Politiche di Sicurezza e Standard di Sviluppo",
  "SDLC": "Politiche di Sicurezza e Standard di Sviluppo",
  "ChangeManagement": "Politiche di Sicurezza e Standard di Sviluppo",
  "TechnicalDebtConcept": "Politiche di Sicurezza e Standard di Sviluppo",
  "RiskAssessment": "Quadro di Riferimento del Rischio (Framework)",
  "RiskRegister": "Quadro di Riferimento del Rischio (Framework)",
  "RiskAppetite": "Quadro di Riferimento del Rischio (Framework)",
  "RiskTolerance": "Quadro di Riferimento del Rischio (Framework)",
  "SLE": "Valutazione Quantitativa del Rischio (Metrics)",
  "ALE": "Valutazione Quantitativa del Rischio (Metrics)",
  "ARO": "Valutazione Quantitativa del Rischio (Metrics)",
  "ExposureFactorEF": "Valutazione Quantitativa del Rischio (Metrics)",
  "ProbabilityConcept": "Valutazione Quantitativa del Rischio (Metrics)",
  "LikelihoodConcept": "Valutazione Quantitativa del Rischio (Metrics)",
  "RiskAnalysisConcept": "Metodologie di Analisi del Rischio",
  "ResidualRiskAnalysisConcept": "Metodologie di Analisi del Rischio",
  "QualitativeRiskAssessmentConcept": "Metodologie di Analisi del Rischio",
  "QuantitativeRiskAssessmentConcept": "Metodologie di Analisi del Rischio",
  "ThreatVectorAnalysisConcept": "Metodologie di Analisi del Rischio",
  "Accept": "Strategie di Trattamento del Rischio",
  "Transfer": "Strategie di Trattamento del Rischio",
  "RiskTransferConcept": "Strategie di Trattamento del Rischio",
  "CyberInsuranceConcept": "Strategie di Trattamento del Rischio",
  "Mitigate": "Strategie di Trattamento del Rischio",
  "Avoid": "Strategie di Trattamento del Rischio",
  "Compliance": "Conformità Normativa e Obblighi Legali",
  "Privacy": "Conformità Normativa e Obblighi Legali",
  "DueDiligence": "Conformità Normativa e Obblighi Legali",
  "DueCare": "Conformità Normativa e Obblighi Legali",
  "GDPRComplianceConcept": "Conformità Normativa e Obblighi Legali",
  "DataSovereigntyConcept": "Conformità Normativa e Obblighi Legali",
  "VendorAssessment": "Valutazione del Rischio Fornitori (Third Party)",
  "SupplyChainAnalysis": "Valutazione del Rischio Fornitori (Third Party)",
  "Questionnaires": "Valutazione del Rischio Fornitori (Third Party)",
  "SLA": "Accordi e Contratti di Servizio",
  "NDA": "Accordi e Contratti di Servizio",
  "MOU": "Accordi e Contratti di Servizio",
  "MOA": "Accordi e Contratti di Servizio",
  "BPA": "Accordi e Contratti di Servizio",
  "MSA": "Accordi e Contratti di Servizio",
  "SOW": "Accordi e Contratti di Servizio",
  "InternalAudit": "Valutazioni e Audit di Sicurezza",
  "ExternalAudit": "Valutazioni e Audit di Sicurezza",
  "RegulatoryAudit": "Valutazioni e Audit di Sicurezza",
  "PeriodicReviewConcept": "Valutazioni e Audit di Sicurezza",
  "ContinuousAssessmentConcept": "Valutazioni e Audit di Sicurezza",
  "PhishingAwareness": "Consapevolezza e Addestramento Personale",
  "PasswordManagement": "Consapevolezza e Addestramento Personale",
  "SocialEngineering": "Consapevolezza e Addestramento Personale",
  "InsiderThreat": "Consapevolezza e Addestramento Personale",
  "AssetManagementRes": "Smaltimento e Declassificazione Asset",
  "AssetTrackingRes": "Smaltimento e Declassificazione Asset",
  "BarcodeRes": "Smaltimento e Declassificazione Asset",
  "RFIDRes": "Smaltimento e Declassificazione Asset",
  "MediaSanitizationRes": "Smaltimento e Declassificazione Asset",
  "PhysicalDestructionRes": "Smaltimento e Declassificazione Asset",
  "DegaussingRes": "Smaltimento e Declassificazione Asset",
  "CertificateOfDestructionRes": "Smaltimento e Declassificazione Asset",
  "DataRetentionRes": "Smaltimento e Declassificazione Asset",

  // New & Previous Keys Mapping
  // Domain 4 - Topic 1
  "CISBenchmarkRes": "Hardening di Sistemi e Dispositivi",
  "BenchmarkRes": "Hardening di Sistemi e Dispositivi",
  "AntivirusRes": "Hardening di Sistemi e Dispositivi",
  "AntiMalwareRes": "Hardening di Sistemi e Dispositivi",
  "QuarantineRes": "Hardening di Sistemi e Dispositivi",

  // Domain 4 - Topic 3
  "RulesOfEngagementRes": "Metodologie di Vulnerability Assessment",
  "ExploitationRes": "Metodologie di Vulnerability Assessment",
  "LateralMovementRes": "Metodologie di Vulnerability Assessment",
  "PersistenceRes": "Metodologie di Vulnerability Assessment",
  "PivotingRes": "Metodologie di Vulnerability Assessment",
  "SASTRes": "Metodologie di Vulnerability Assessment",
  "FuzzingRes": "Metodologie di Vulnerability Assessment",
  "PackageMonitoringRes": "Metodologie di Vulnerability Assessment",
  "ResponsibleDisclosureRes": "Metodologie di Vulnerability Assessment",
  "BugBountyRes": "Metodologie di Vulnerability Assessment",
  "ValidationOfRemediationRes": "Metodologie di Vulnerability Assessment",
  "RescanningRes": "Metodologie di Vulnerability Assessment",
  "VulnerabilityScannerRes": "Metodologie di Vulnerability Assessment",
  "PortScanRes": "Metodologie di Vulnerability Assessment",
  "VulnerabilityAssessmentRes": "Metodologie di Vulnerability Assessment",
  "RemediationRes": "Metodologie di Vulnerability Assessment",

  // Domain 4 - Topic 4
  "SecurityMonitoringRes": "Strumenti di Monitoraggio e Telemetria",
  "ComputingResourcesRes": "Strumenti di Monitoraggio e Telemetria",
  "LogAggregationRes": "Strumenti di Monitoraggio e Telemetria",
  "LogCorrelationRes": "Strumenti di Monitoraggio e Telemetria",
  "DashboardRes": "Strumenti di Monitoraggio e Telemetria",
  "AlertingRes": "Strumenti di Monitoraggio e Telemetria",
  "AlertTuningRes": "Strumenti di Monitoraggio e Telemetria",
  "AgentRes": "Strumenti di Monitoraggio e Telemetria",
  "AgentlessRes": "Strumenti di Monitoraggio e Telemetria",
  "DataLeakageRes": "Strumenti di Monitoraggio e Telemetria",
  "MIBRes": "Strumenti di Monitoraggio e Telemetria",
  "OIDRes": "Strumenti di Monitoraggio e Telemetria",
  "SNMPPollRes": "Strumenti di Monitoraggio e Telemetria",
  "SNMPTrapRes": "Strumenti di Monitoraggio e Telemetria",
  "PollingRes": "Strumenti di Monitoraggio e Telemetria",
  "TrapRes": "Strumenti di Monitoraggio e Telemetria",
  "ProbeRes": "Strumenti di Monitoraggio e Telemetria",
  "CollectorRes": "Strumenti di Monitoraggio e Telemetria",
  "FlowRecordsRes": "Strumenti di Monitoraggio e Telemetria",
  "CorrelationRes": "Strumenti di Monitoraggio e Telemetria",

  // Domain 5 - Topic 1 & 2
  "ExceptionRes": "Politiche di Sicurezza e Standard di Sviluppo",
  "ExemptionRes": "Politiche di Sicurezza e Standard di Sviluppo",

  // Domain 5 - Topic 3
  "EnvironmentalVariablesRes": "Metodologie di Analisi del Rischio",
  "OrganizationalImpactRes": "Metodologie di Analisi del Rischio",

  // Domain 5 - Topic 5
  "NISTRes": "Conformità Normativa e Obblighi Legali",

  // Domain 5 - Topic 8
  "AuditConceptRes": "Valutazioni e Audit di Sicurezza",
  "VerificationRes": "Valutazioni e Audit di Sicurezza",
  "ReportingRes": "Valutazioni e Audit di Sicurezza"
};

const getSubgroupForSubtopic = (checklistKey: string): string | null => {
  return SUBGROUP_MAP[checklistKey] || null;
};

export default function App() {
  // Navigation & General App State
  const [activeTab, setActiveTab] = useState<"studio" | "quiz" | "glossary">("studio");
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [activeDomain, setActiveDomain] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedSubtopic, setSelectedSubtopic] = useState<Subtopic>(DOMAIN_1_TOPICS[0].subtopics[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Switch domain in Studio and update selection
  const handleSwitchDomain = (domain: 1 | 2 | 3 | 4 | 5) => {
    setActiveDomain(domain);
    const topics = 
      domain === 1 ? DOMAIN_1_TOPICS :
      domain === 2 ? DOMAIN_2_TOPICS :
      domain === 3 ? DOMAIN_3_TOPICS :
      domain === 4 ? DOMAIN_4_TOPICS :
      DOMAIN_5_TOPICS;
    setSelectedSubtopic(topics[0].subtopics[0]);
  };

  // Quiz state
  const [quizFocus, setQuizFocus] = useState<"domain1" | "domain2" | "domain3" | "domain4" | "domain5" | "mini" | "balanced" | "all" | "custom">("all");
  const [customCounts, setCustomCounts] = useState<Record<number, number>>({
    1: 5,
    2: 5,
    3: 5,
    4: 5,
    5: 5
  });
  const [activeQuestions, setActiveQuestions] = useState<Question[]>(INITIAL_QUESTIONS);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [wrongQuestions, setWrongQuestions] = useState<number[]>([]);

  // Remediation / Recovery State
  const [remediationActive, setRemediationActive] = useState(false);
  const [remediationQuestions, setRemediationQuestions] = useState<Question[]>([]);
  const [remediationIndex, setRemediationIndex] = useState(0);
  const [remediationAnswers, setRemediationAnswers] = useState<Record<number, number>>({});
  const [remediationSelected, setRemediationSelected] = useState<number | null>(null);
  const [remediationShowFeedback, setRemediationShowFeedback] = useState(false);
  const [remediationCompleted, setRemediationCompleted] = useState(false);
  const [remediationScore, setRemediationScore] = useState(0);
  const [isGeneratingRemediation, setIsGeneratingRemediation] = useState(false);
  const [remediationError, setRemediationError] = useState<string | null>(null);
  const [showNewQuestionsModal, setShowNewQuestionsModal] = useState(false);

  // Chat with Trainer State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "trainer",
      text: "Salve! Sono il tuo Cybersecurity Trainer certificato CompTIA. Sono qui per guidarti nello studio dei **Domini 1 (General Security Concepts)**, **2 (Threats, Vulnerabilities, and Mitigations)**, **3 (Security Architecture)**, **4 (Security Operations)** e **5 (Security Program Management and Oversight)** del Security+ SY0-701.\n\nPuoi pormi qualsiasi domanda teorica, chiedermi spiegazioni su concetti di sicurezza generali, attori delle minacce, vulnerabilità, mitigazioni, architetture, protocolli sicuri o formule di rischio, o farmi generare scenari ad-hoc. Cosa desideri approfondire oggi?",
      timestamp: new Date()
    }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const studyPanelRef = useRef<HTMLElement>(null);
  const studyTopRef = useRef<HTMLDivElement>(null);

  // Sync scroll on chat
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isChatLoading]);

  const isFirstMount = useRef(true);

  // Scroll study panel to top when subtopic changes
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (studyTopRef.current) {
      try {
        studyTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch (e) {
        // Fallback for older browsers
      }
    }
    if (studyPanelRef.current) {
      studyPanelRef.current.scrollTop = 0;
      try {
        studyPanelRef.current.scrollTo({ top: 0, behavior: "smooth" });
      } catch (e) {
        // Fallback for older environments
      }
    }
  }, [selectedSubtopic]);

  // Scroll study panel to top/bottom
  const scrollToPanelTop = () => {
    if (studyPanelRef.current) {
      try {
        studyPanelRef.current.scrollTo({ top: 0, behavior: "smooth" });
      } catch (e) {
        studyPanelRef.current.scrollTop = 0;
      }
    }
  };

  const scrollToPanelBottom = () => {
    if (studyPanelRef.current) {
      try {
        studyPanelRef.current.scrollTo({ top: studyPanelRef.current.scrollHeight, behavior: "smooth" });
      } catch (e) {
        studyPanelRef.current.scrollTop = studyPanelRef.current.scrollHeight;
      }
    }
  };

  // Load checklist progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("comptia_sy0701_checklist");
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Toggle checklist checkbox
  const handleToggleCheck = (key: string) => {
    const updated = { ...checkedItems, [key]: !checkedItems[key] };
    setCheckedItems(updated);
    localStorage.setItem("comptia_sy0701_checklist", JSON.stringify(updated));
  };

  // Bulk toggle for a group of keys
  const handleToggleGroupCheck = (keys: string[]) => {
    const allChecked = keys.every(k => !!checkedItems[k]);
    const targetState = !allChecked;
    const updated = { ...checkedItems };
    keys.forEach(k => {
      updated[k] = targetState;
    });
    setCheckedItems(updated);
    localStorage.setItem("comptia_sy0701_checklist", JSON.stringify(updated));
  };

  // Get matching icon for each topic group
  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert": return <ShieldAlert className="w-5 h-5 text-cyan-400" />;
      case "FileText": return <FileText className="w-5 h-5 text-cyan-400" />;
      case "Calculator": return <Calculator className="w-5 h-5 text-cyan-400" />;
      case "TrendingUp": return <TrendingUp className="w-5 h-5 text-cyan-400" />;
      case "Lock": return <Lock className="w-5 h-5 text-cyan-400" />;
      case "Users": return <Users className="w-5 h-5 text-cyan-400" />;
      case "Handshake": return <Handshake className="w-5 h-5 text-cyan-400" />;
      case "CheckSquare": return <CheckSquare className="w-5 h-5 text-cyan-400" />;
      case "GraduationCap": return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      default: return <BookOpen className="w-5 h-5 text-slate-400" />;
    }
  };

  // Render markdown helper
  const renderMarkdownToJSX = (text: string) => {
    if (!text) return null;
    const lines = text.split("\n");
    return (
      <div className="space-y-2">
        {lines.map((line, idx) => {
          let trimmed = line.trim();
          if (trimmed === "") return <div key={idx} className="h-2" />;

          const isBullet = trimmed.startsWith("*") || trimmed.startsWith("-");
          if (isBullet) {
            trimmed = trimmed.substring(1).trim();
          }

          const parts: React.ReactNode[] = [];
          const boldRegex = /\*\*(.*?)\*\*/g;
          let lastIndex = 0;
          let match;

          while ((match = boldRegex.exec(trimmed)) !== null) {
            if (match.index > lastIndex) {
              parts.push(trimmed.substring(lastIndex, match.index));
            }
            parts.push(
              <strong key={match.index} className="font-semibold text-cyan-400">
                {match[1]}
              </strong>
            );
            lastIndex = boldRegex.lastIndex;
          }

          if (lastIndex < trimmed.length) {
            parts.push(trimmed.substring(lastIndex));
          }

          const content = parts.length > 0 ? parts : trimmed;

          if (isBullet) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-4 text-slate-300">
                <span className="text-cyan-500 mt-1.5 text-xs">●</span>
                <span className="text-sm leading-relaxed">{content}</span>
              </div>
            );
          }

          return (
            <p key={idx} className="text-sm leading-relaxed text-slate-300">
              {content}
            </p>
          );
        })}
      </div>
    );
  };

  // Submit message to AI Trainer
  const handleSendChat = async (textToSend?: string) => {
    const text = textToSend || chatInput;
    if (!text.trim()) return;

    if (!textToSend) setChatInput("");

    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      sender: "user",
      text,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMsg]);
    setIsChatLoading(true);

    try {
      const history = chatMessages
        .filter(m => m.id !== "welcome" && m.sender !== "system")
        .slice(-8)
        .map(m => ({ role: m.sender, content: m.text }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history })
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setChatMessages(prev => [...prev, {
        id: Math.random().toString(),
        sender: "trainer",
        text: data.reply,
        timestamp: new Date()
      }]);
    } catch (err: any) {
      setChatMessages(prev => [...prev, {
        id: Math.random().toString(),
        sender: "system",
        text: `⚠️ Errore di connessione con il Trainer AI: ${err.message}.`,
        timestamp: new Date()
      }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  // Quiz Handling
  const handleStartQuiz = () => {
    // Dynamically retrieve all questions for each domain
    const d1All = DOMAIN_1_QUESTIONS;
    const d2All = DOMAIN_2_QUESTIONS;
    const d3All = DOMAIN_3_QUESTIONS;
    const d4All = DOMAIN_4_QUESTIONS;
    const d5All = DOMAIN_5_QUESTIONS;

    // Shuffle helper to randomize questions selection
    const shuffle = <T,>(arr: T[]): T[] => {
      return [...arr].sort(() => Math.random() - 0.5);
    };

    const d1Selected = shuffle(d1All).slice(0, customCounts[1]);
    const d2Selected = shuffle(d2All).slice(0, customCounts[2]);
    const d3Selected = shuffle(d3All).slice(0, customCounts[3]);
    const d4Selected = shuffle(d4All).slice(0, customCounts[4]);
    const d5Selected = shuffle(d5All).slice(0, customCounts[5]);

    const questionsToUse = [
      ...d1Selected,
      ...d2Selected,
      ...d3Selected,
      ...d4Selected,
      ...d5Selected
    ];

    if (questionsToUse.length === 0) {
      alert("Seleziona almeno una domanda per avviare il simulatore!");
      return;
    }

    setActiveQuestions(questionsToUse);

    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setQuizAnswers({});
    setSelectedOption(null);
    setShowFeedback(false);
    setQuizCompleted(false);
    setQuizScore(0);
    setWrongQuestions([]);
    setRemediationActive(false);
    setRemediationCompleted(false);
  };

  const handleSelectOption = (index: number) => {
    if (showFeedback) return;
    setSelectedOption(index);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null || showFeedback) return;

    const currentQuestion = activeQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answerIndex;

    setQuizAnswers(prev => ({ ...prev, [currentQuestion.id]: selectedOption }));
    setShowFeedback(true);

    if (isCorrect) {
      setQuizScore(prev => prev + 1);
    } else {
      setWrongQuestions(prev => [...prev, currentQuestion.id]);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
    }
  };

  // Remediation Generation
  const handleStartRemediation = async () => {
    // Determine weak topics based on wrong answers
    const weakTopics = activeQuestions
      .filter(q => wrongQuestions.includes(q.id))
      .map(q => q.topic);

    // Filter duplicates
    const uniqueWeakTopics = Array.from(new Set(weakTopics));
    if (uniqueWeakTopics.length === 0) {
      // If none, default to some core topics
      uniqueWeakTopics.push("Quantitative Risk Calculation", "Risk Appetite vs Risk Tolerance", "Compliance & Privacy");
    }

    setIsGeneratingRemediation(true);
    setRemediationError(null);
    setRemediationQuestions([]);

    try {
      const res = await fetch("/api/quiz/remediation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ weakTopics: uniqueWeakTopics })
      });

      const data = await res.json();
      if (res.status !== 200 || data.error) {
        throw new Error(data.error || "Impossibile recuperare domande adattive.");
      }

      if (data.questions && data.questions.length > 0) {
        setRemediationQuestions(data.questions);
        setRemediationActive(true);
        setRemediationIndex(0);
        setRemediationAnswers({});
        setRemediationSelected(null);
        setRemediationShowFeedback(false);
        setRemediationCompleted(false);
        setRemediationScore(0);
      } else {
        throw new Error("Il server non ha restituito domande di recupero valide.");
      }
    } catch (err: any) {
      setRemediationError(err.message || "Errore sconosciuto.");
    } finally {
      setIsGeneratingRemediation(false);
    }
  };

  const handleRemediationSelect = (index: number) => {
    if (remediationShowFeedback) return;
    setRemediationSelected(index);
  };

  const handleRemediationConfirm = () => {
    if (remediationSelected === null || remediationShowFeedback) return;

    const currentQuestion = remediationQuestions[remediationIndex];
    const isCorrect = remediationSelected === currentQuestion.answerIndex;

    setRemediationAnswers(prev => ({ ...prev, [currentQuestion.id]: remediationSelected }));
    setRemediationShowFeedback(true);

    if (isCorrect) {
      setRemediationScore(prev => prev + 1);
    }
  };

  const handleRemediationNext = () => {
    if (remediationIndex < remediationQuestions.length - 1) {
      setRemediationIndex(prev => prev + 1);
      setRemediationSelected(null);
      setRemediationShowFeedback(false);
    } else {
      setRemediationCompleted(true);
    }
  };

  const maxQuestionsByDomain: Record<number, number> = {
    1: DOMAIN_1_QUESTIONS.length,
    2: DOMAIN_2_QUESTIONS.length,
    3: DOMAIN_3_QUESTIONS.length,
    4: DOMAIN_4_QUESTIONS.length,
    5: DOMAIN_5_QUESTIONS.length,
  };

  const domainMetadata = [
    { id: 1, name: "Dominio 1: General Security Concepts", desc: "Concetti generali, attori delle minacce, intelligence e controlli base" },
    { id: 2, name: "Dominio 2: Threats, Vulnerabilities, and Mitigations", desc: "Vulnerabilità software, attacchi social engineering, minacce e mitigazioni" },
    { id: 3, name: "Dominio 3: Security Architecture", desc: "Architettura di rete sicura, cloud, crittografia avanzata e resilienza" },
    { id: 4, name: "Dominio 4: Security Operations", desc: "Monitoraggio, incident response, log, digital forensics e backup" },
    { id: 5, name: "Dominio 5: Security Program Management & Oversight", desc: "Governance, conformità normativa, gestione del rischio (ALE/SLE) e contratti" }
  ];

  const totalQuestionsSelected = (Object.values(customCounts) as number[]).reduce((sum, val) => sum + val, 0);

  const applyPreset = (preset: "domain1" | "domain2" | "domain3" | "domain4" | "domain5" | "mini" | "balanced" | "all" | "custom") => {
    setQuizFocus(preset);
    if (preset === "domain1") {
      setCustomCounts({ 1: maxQuestionsByDomain[1], 2: 0, 3: 0, 4: 0, 5: 0 });
    } else if (preset === "domain2") {
      setCustomCounts({ 1: 0, 2: maxQuestionsByDomain[2], 3: 0, 4: 0, 5: 0 });
    } else if (preset === "domain3") {
      setCustomCounts({ 1: 0, 2: 0, 3: maxQuestionsByDomain[3], 4: 0, 5: 0 });
    } else if (preset === "domain4") {
      setCustomCounts({ 1: 0, 2: 0, 3: 0, 4: maxQuestionsByDomain[4], 5: 0 });
    } else if (preset === "domain5") {
      setCustomCounts({ 1: 0, 2: 0, 3: 0, 4: 0, 5: Math.min(15, maxQuestionsByDomain[5]) });
    } else if (preset === "mini") {
      setCustomCounts({ 1: 2, 2: 2, 3: 2, 4: 2, 5: 2 });
    } else if (preset === "balanced") {
      setCustomCounts({ 1: 5, 2: 5, 3: 5, 4: 5, 5: 5 });
    } else if (preset === "all") {
      setCustomCounts({
        1: maxQuestionsByDomain[1],
        2: maxQuestionsByDomain[2],
        3: maxQuestionsByDomain[3],
        4: maxQuestionsByDomain[4],
        5: Math.min(15, maxQuestionsByDomain[5])
      });
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-slate-950 flex flex-col font-sans text-slate-100" id="app_root">
      {/* Top Professional Header - Sleek Interface Style */}
      <header className="h-16 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between px-6 shrink-0 sticky top-0 z-40 backdrop-blur" id="app_header">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-cyan-600 rounded flex items-center justify-center font-bold text-xl text-slate-50 shadow-md shadow-cyan-500/10" id="logo_icon_box">S+</div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-cyan-400 uppercase" id="header_title">CompTIA Security+ SY0-701</h1>
            <p className="text-xs text-slate-400" id="header_subtitle">Senior Cybersecurity Trainer Interface v4.2</p>
          </div>
        </div>

        <div className="flex items-center gap-3" id="navigation_tabs">
          <button 
            id="tab_btn_studio"
            onClick={() => { setActiveTab("studio"); }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${activeTab === "studio" ? "bg-cyan-600 text-white font-bold shadow-md shadow-cyan-500/20" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Checklist & Studio
          </button>
          <button 
            id="tab_btn_glossary"
            onClick={() => { setActiveTab("glossary"); }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${activeTab === "glossary" ? "bg-cyan-600 text-white font-bold shadow-md shadow-cyan-500/20" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`}
          >
            <FileText className="w-3.5 h-3.5" />
            Glossario SY0-701
          </button>
          <button 
            id="tab_btn_quiz"
            onClick={() => { setActiveTab("quiz"); }}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${activeTab === "quiz" ? "bg-cyan-600 text-white font-bold shadow-md shadow-cyan-500/20" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"}`}
          >
            <Activity className="w-3.5 h-3.5" />
            High-Stakes Simulator
          </button>

          <div className="h-6 w-[1px] bg-slate-700 mx-1"></div>

          <button 
            id="toggle_sidebar_btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`px-2.5 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all ${sidebarOpen ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30" : "border border-slate-800 text-slate-400 hover:bg-slate-800/30"}`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>AI Trainer</span>
          </button>
        </div>
      </header>

      {/* Main Content Area Grid */}
      <div className="flex-1 flex overflow-hidden relative" id="main_split_layout">
        
        {/* TAB 1: STUDIO & CHECKLIST */}
        {activeTab === "studio" && (
          <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden w-full md:h-full" id="studio_layout">
            
            {/* Left Sidebar Checklist Tree - Sleek Interface Style */}
            <aside className="w-full md:w-80 md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-slate-800 bg-slate-900/30 p-4 flex flex-col shrink-0" id="checklist_sidebar">
              <div className="mb-4 pb-2 border-b border-slate-800/60" id="checklist_header">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sfoglia Checklist</h2>
                <p className="text-[11px] text-slate-500 mt-1 mb-3">Seleziona e spunta gli argomenti completati.</p>
                <div className="grid grid-cols-5 gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800/80">
                  <button
                    onClick={() => handleSwitchDomain(1)}
                    className={`py-1.5 text-[9px] font-bold rounded uppercase tracking-wider transition-all ${activeDomain === 1 ? "bg-cyan-600 text-white shadow-sm font-bold" : "text-slate-400 hover:text-slate-200"}`}
                  >
                    Dom 1
                  </button>
                  <button
                    onClick={() => handleSwitchDomain(2)}
                    className={`py-1.5 text-[9px] font-bold rounded uppercase tracking-wider transition-all ${activeDomain === 2 ? "bg-cyan-600 text-white shadow-sm font-bold" : "text-slate-400 hover:text-slate-200"}`}
                  >
                    Dom 2
                  </button>
                  <button
                    onClick={() => handleSwitchDomain(3)}
                    className={`py-1.5 text-[9px] font-bold rounded uppercase tracking-wider transition-all ${activeDomain === 3 ? "bg-cyan-600 text-white shadow-sm font-bold" : "text-slate-400 hover:text-slate-200"}`}
                  >
                    Dom 3
                  </button>
                  <button
                    onClick={() => handleSwitchDomain(4)}
                    className={`py-1.5 text-[9px] font-bold rounded uppercase tracking-wider transition-all ${activeDomain === 4 ? "bg-cyan-600 text-white shadow-sm font-bold" : "text-slate-400 hover:text-slate-200"}`}
                  >
                    Dom 4
                  </button>
                  <button
                    onClick={() => handleSwitchDomain(5)}
                    className={`py-1.5 text-[9px] font-bold rounded uppercase tracking-wider transition-all ${activeDomain === 5 ? "bg-cyan-600 text-white shadow-sm font-bold" : "text-slate-400 hover:text-slate-200"}`}
                  >
                    Dom 5
                  </button>
                </div>
              </div>

              <div className="space-y-4 flex-1 overflow-y-auto pr-1 select-none scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent" id="checklist_topics_list">
                {(activeDomain === 1 ? DOMAIN_1_TOPICS : activeDomain === 2 ? DOMAIN_2_TOPICS : activeDomain === 3 ? DOMAIN_3_TOPICS : activeDomain === 4 ? DOMAIN_4_TOPICS : DOMAIN_5_TOPICS).map((group, groupIdx) => (
                  <div key={groupIdx} className="space-y-1.5" id={`group_${groupIdx}`}>
                    <div className="flex items-center gap-2 px-2 py-0.5" id={`group_title_${groupIdx}`}>
                      {getTopicIcon(group.icon)}
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider truncate">{group.title}</span>
                    </div>

                    <div className="space-y-3 pl-1" id={`group_subtopics_${groupIdx}`}>
                      {(() => {
                        const orderedUnits: { type: "subgroup" | "standalone"; name: string; key: string; subtopics: Subtopic[] }[] = [];
                        const seenSubgroups = new Set<string>();

                        group.subtopics.forEach((sub) => {
                          const sg = getSubgroupForSubtopic(sub.checklistKey);
                          if (sg) {
                            if (!seenSubgroups.has(sg)) {
                              seenSubgroups.add(sg);
                              orderedUnits.push({
                                type: "subgroup",
                                name: sg,
                                key: sg,
                                subtopics: group.subtopics.filter(s => getSubgroupForSubtopic(s.checklistKey) === sg)
                              });
                            }
                          } else {
                            orderedUnits.push({
                              type: "standalone",
                              name: sub.name,
                              key: sub.checklistKey,
                              subtopics: [sub]
                            });
                          }
                        });

                        return (
                          <div className="space-y-0.5 pl-1" id={`units_list_${groupIdx}`}>
                            {orderedUnits.map((unit, unitIdx) => {
                              const isSelected = unit.subtopics.some(s => s.checklistKey === selectedSubtopic.checklistKey);
                              const isAllChecked = unit.subtopics.every(s => !!checkedItems[s.checklistKey]);
                              const isSomeChecked = unit.subtopics.some(s => !!checkedItems[s.checklistKey]) && !isAllChecked;
                              const completedCount = unit.subtopics.filter(s => !!checkedItems[s.checklistKey]).length;
                              const totalCount = unit.subtopics.length;

                              return (
                                <div 
                                  key={unit.key} 
                                  id={`unit_${groupIdx}_${unitIdx}`}
                                  className={`group flex items-center justify-between p-2 rounded border border-transparent transition-all cursor-pointer ${isSelected ? "bg-cyan-500/10 border-l-2 border-l-cyan-500 text-cyan-50 font-medium" : "text-xs text-slate-400 hover:text-slate-300 hover:bg-slate-900/30"}`}
                                  onClick={() => setSelectedSubtopic(unit.subtopics[0])}
                                >
                                  <div className="flex items-center gap-2 min-w-0 flex-1" id={`unit_label_${groupIdx}_${unit.key}`}>
                                    {/* Checklist checkbox for bulk selection of all subtopics in subgroup */}
                                    <button 
                                      id={`unit_check_box_${groupIdx}_${unit.key}`}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleToggleGroupCheck(unit.subtopics.map(s => s.checklistKey));
                                      }}
                                      className={`w-4 h-4 rounded border flex items-center justify-center transition-colors shrink-0 ${isAllChecked ? "bg-cyan-500 border-cyan-500 text-slate-950" : isSomeChecked ? "border-cyan-600 bg-cyan-950/40 text-cyan-400" : "border-slate-700 hover:border-slate-500 bg-slate-950"}`}
                                    >
                                      {isAllChecked ? (
                                        <Check className="w-3 h-3 stroke-[3]" />
                                      ) : isSomeChecked ? (
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-sm" />
                                      ) : null}
                                    </button>
                                    
                                    <div className="flex flex-col min-w-0" id={`unit_text_${unit.key}`}>
                                      <span className="truncate text-xs text-slate-300 group-hover:text-cyan-200 transition-colors font-medium leading-tight">
                                        {unit.name}
                                      </span>
                                      {totalCount > 1 && (
                                        <span className="text-[9px] font-mono text-slate-500 group-hover:text-slate-400 transition-colors leading-none mt-0.5">
                                          {completedCount} di {totalCount} completati
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <ChevronRight className={`w-3 h-3 shrink-0 transition-transform ${isSelected ? "text-cyan-400 translate-x-0.5" : "text-slate-600"}`} />
                                </div>
                              );
                            })}
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Tracker Widget inspired by Design HTML */}
              <div className="mt-4 p-4 rounded-lg bg-slate-900 border border-slate-800" id="checklist_progress_box">
                <div className="flex justify-between text-[10px] text-slate-500 mb-2">
                  <span className="uppercase font-semibold font-mono tracking-wider">PROGRESSO DOMINIO {activeDomain}</span>
                  <span className="font-mono font-bold text-cyan-400">
                    {(() => {
                      const subs = (activeDomain === 1 ? DOMAIN_1_TOPICS : activeDomain === 2 ? DOMAIN_2_TOPICS : activeDomain === 3 ? DOMAIN_3_TOPICS : activeDomain === 4 ? DOMAIN_4_TOPICS : DOMAIN_5_TOPICS).flatMap(g => g.subtopics);
                      const checkedCount = subs.filter(sub => !!checkedItems[sub.checklistKey]).length;
                      return `${checkedCount} / ${subs.length}`;
                    })()}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cyan-500 transition-all duration-300" 
                    style={{ 
                      width: `${(() => {
                        const subs = (activeDomain === 1 ? DOMAIN_1_TOPICS : activeDomain === 2 ? DOMAIN_2_TOPICS : activeDomain === 3 ? DOMAIN_3_TOPICS : activeDomain === 4 ? DOMAIN_4_TOPICS : DOMAIN_5_TOPICS).flatMap(g => g.subtopics);
                        const checkedCount = subs.filter(sub => !!checkedItems[sub.checklistKey]).length;
                        return subs.length ? (checkedCount / subs.length) * 100 : 0;
                      })()}%` 
                    }}
                  ></div>
                </div>
                <p className="text-[10px] text-slate-500 mt-2.5 italic">Passing Score: 80% (Analysis focus)</p>
              </div>
            </aside>

            {/* Right Pane Study Core - Sleek Interface Style */}
            <div className="flex-1 flex flex-col h-full overflow-hidden relative" id="study_panel_wrapper">
              <main ref={studyPanelRef} className="flex-1 overflow-y-auto bg-slate-950 p-8 pb-24" id="study_panel">
              <div ref={studyTopRef} className="h-0 w-full pointer-events-none opacity-0" id="study_top_anchor" />
              {(() => {
                const subgroupName = getSubgroupForSubtopic(selectedSubtopic.checklistKey);
                const currentSubgroupSubtopics = (() => {
                  if (!subgroupName) return [selectedSubtopic];
                  const domainTopics = activeDomain === 1 ? DOMAIN_1_TOPICS : activeDomain === 2 ? DOMAIN_2_TOPICS : activeDomain === 3 ? DOMAIN_3_TOPICS : activeDomain === 4 ? DOMAIN_4_TOPICS : DOMAIN_5_TOPICS;
                  const list: Subtopic[] = [];
                  domainTopics.forEach(g => {
                    g.subtopics.forEach(sub => {
                      if (getSubgroupForSubtopic(sub.checklistKey) === subgroupName) {
                        list.push(sub);
                      }
                    });
                  });
                  return list.length > 0 ? list : [selectedSubtopic];
                })();

                const completedInGroup = currentSubgroupSubtopics.filter(s => !!checkedItems[s.checklistKey]).length;
                const totalInGroup = currentSubgroupSubtopics.length;
                const percentComplete = totalInGroup > 0 ? Math.round((completedInGroup / totalInGroup) * 100) : 0;

                return (
                  <div className="max-w-3xl mx-auto space-y-8" id="study_content_container">
                    
                    {/* Topic Header Card */}
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg relative overflow-hidden shadow-md" id="topic_hero_card">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
                      
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-400 font-semibold uppercase tracking-widest mb-3" id="topic_crumbs">
                        <span>DOMINIO {activeDomain}</span>
                        <span>·</span>
                        <span>{activeDomain === 1 ? "GENERAL SECURITY CONCEPTS" : activeDomain === 2 ? "THREATS, VULNERABILITIES & MITIGATIONS" : activeDomain === 3 ? "SECURITY ARCHITECTURE" : activeDomain === 4 ? "SECURITY OPERATIONS" : "SECURITY PROGRAM MANAGEMENT"}</span>
                        {subgroupName && (
                          <>
                            <span>·</span>
                            <span className="text-slate-400">{subgroupName}</span>
                          </>
                        )}
                      </div>

                      <h2 className="text-2xl font-bold text-slate-100 mb-3" id="topic_title">
                        {subgroupName || selectedSubtopic.name}
                      </h2>
                      
                      <p className="text-slate-300 leading-relaxed text-sm border-l-2 border-cyan-500 pl-4 bg-cyan-500/[0.03] py-2 rounded-r mb-4" id="topic_definition">
                        {subgroupName 
                          ? `Questa scheda unificata contiene ${totalInGroup} concetti fondamentali appartenenti alla categoria "${subgroupName}".`
                          : selectedSubtopic.definition}
                      </p>

                      {/* Unified Category Progress bar */}
                      {totalInGroup > 1 && (
                        <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-lg space-y-2 mt-4" id="category_progress_wrapper">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-400 font-medium">Progresso in questa categoria</span>
                            <span className="font-mono font-bold text-cyan-400">{completedInGroup} di {totalInGroup} completati ({percentComplete}%)</span>
                          </div>
                          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-cyan-500 transition-all duration-300" 
                              style={{ width: `${percentComplete}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Render each subtopic of this category/subgroup as a beautiful structured card */}
                    <div className="space-y-8" id="concepts_cards_list">
                      {currentSubgroupSubtopics.map((sub, idx) => {
                        const isChecked = !!checkedItems[sub.checklistKey];
                        return (
                          <div key={sub.checklistKey} className="bg-slate-900 border border-slate-800/80 rounded-lg p-6 space-y-6 relative shadow-lg hover:border-slate-700/65 transition-all" id={`concept_card_${sub.checklistKey}`}>
                            {/* Card Header with Name and its own checkbox */}
                            <div className="flex justify-between items-start gap-4 border-b border-slate-800/80 pb-3" id={`concept_hdr_${sub.checklistKey}`}>
                              <div className="flex items-center gap-3">
                                <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950/40 px-2 py-1 border border-cyan-900 rounded select-none">
                                  CONCETTO {idx + 1} DI {totalInGroup}
                                </span>
                                <h3 className="text-lg font-bold text-slate-100">{sub.name}</h3>
                              </div>
                              
                              {/* Individual checklist checkbox */}
                              <div className="flex items-center gap-2" id={`concept_check_wrapper_${sub.checklistKey}`}>
                                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">Completato</span>
                                <button 
                                  id={`concept_check_${sub.checklistKey}`}
                                  onClick={() => handleToggleCheck(sub.checklistKey)}
                                  className={`w-5 h-5 rounded border flex items-center justify-center transition-colors shrink-0 ${isChecked ? "bg-cyan-500 border-cyan-500 text-slate-950" : "border-slate-700 hover:border-slate-500 bg-slate-950"}`}
                                >
                                  {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                </button>
                              </div>
                            </div>

                            {/* Definition */}
                            <div className="bg-cyan-500/[0.02] border-l-2 border-cyan-500 pl-4 py-2.5 rounded-r" id={`concept_def_${sub.checklistKey}`}>
                              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                                {sub.definition}
                              </p>
                            </div>

                            {/* Detailed Analysis */}
                            <div className="space-y-3" id={`concept_details_${sub.checklistKey}`}>
                              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                                <span>Analisi Dettagliata</span>
                              </div>
                              <div className="text-sm text-slate-300 leading-relaxed space-y-3">
                                {renderMarkdownToJSX(sub.details)}
                              </div>
                            </div>

                            {/* Key Formulas (if any) */}
                            {sub.keyFormulas && sub.keyFormulas.length > 0 && (
                              <div className="bg-cyan-950/20 border border-cyan-900/40 rounded-lg p-4 space-y-2.5" id={`concept_formulas_${sub.checklistKey}`}>
                                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs font-mono uppercase tracking-wider">
                                  <Calculator className="w-3.5 h-3.5" />
                                  <span>Metriche e Formule Chiave CompTIA</span>
                                </div>
                                <ul className="space-y-1.5">
                                  {sub.keyFormulas.map((f, fIdx) => (
                                    <li key={fIdx} className="text-xs font-mono text-slate-300 flex items-start gap-2 bg-slate-950 p-2 rounded border border-slate-800">
                                      <span className="text-cyan-400 font-bold select-none">{fIdx + 1}.</span>
                                      <span>{f}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Comparative Table (if any) */}
                            {sub.comparativeTable && (
                              <div className="space-y-2.5" id={`concept_table_${sub.checklistKey}`}>
                                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                                  <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                                  <span>Tabella Comparativa</span>
                                </div>
                                <div className="overflow-x-auto border border-slate-800 rounded bg-slate-950">
                                  <table className="w-full text-left border-collapse text-xs">
                                    <thead>
                                      <tr className="border-b border-slate-800 bg-slate-900/60 font-bold tracking-wider">
                                        {sub.comparativeTable.headers.map((h, hIdx) => (
                                          <th key={hIdx} className="px-3 py-2.5 text-slate-400 uppercase font-mono text-[9px]">{h}</th>
                                        ))}
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {sub.comparativeTable.rows.map((row, rIdx) => (
                                        <tr key={rIdx} className="border-b border-slate-800/50 hover:bg-slate-900/20">
                                          {row.map((cell, cIdx) => (
                                            <td key={cIdx} className="px-3 py-2 text-slate-300 leading-normal">{cell}</td>
                                          ))}
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )}

                            {/* Exam Tip */}
                            <div className="bg-slate-950 border border-slate-850 p-4 rounded-lg flex gap-3.5 items-start" id={`concept_tip_${sub.checklistKey}`}>
                              <div className="p-1.5 bg-cyan-500/10 rounded-full border border-cyan-500/20 text-cyan-400 shrink-0">
                                <Sparkles className="w-4 h-4" />
                              </div>
                              <div>
                                <h4 className="text-slate-200 font-semibold text-xs mb-1">CONSIGLIO COMPTIA EXAM +</h4>
                                <p className="text-slate-400 text-xs leading-relaxed">{sub.examTip}</p>
                              </div>
                            </div>

                            {/* Pre-filled Chat Helper for this sub-concept */}
                            <div className="flex items-center justify-between p-3.5 bg-slate-950/60 border border-slate-850 rounded-lg" id={`concept_chat_trigger_${sub.checklistKey}`}>
                              <div className="flex items-center gap-2">
                                <Info className="w-3.5 h-3.5 text-cyan-400" />
                                <span className="text-xs text-slate-400">Hai dubbi su {sub.name}? Chiedi subito al Trainer!</span>
                              </div>
                              <button 
                                onClick={() => {
                                  setSidebarOpen(true);
                                  handleSendChat(`Spiegami approfonditamente l'argomento "${sub.name}" con un esempio pratico aziendale e consigli d'esame.`);
                                }}
                                className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold px-3 py-1.5 rounded transition-colors flex items-center gap-1 border border-slate-750"
                              >
                                Chiedi Spiegazione
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>

                          </div>
                        );
                      })}
                    </div>

                  </div>
                );
              })()}
            </main>

            {/* Pulsanti di scorrimento rapido (Su/Giù) */}
            <div className="absolute bottom-6 right-6 flex flex-col gap-2.5 z-30 animate-fade-in" id="scroll_controls">
              <button
                onClick={scrollToPanelTop}
                className="p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 shadow-xl shadow-black/60 transition-all duration-200 group flex items-center justify-center backdrop-blur-sm"
                title="Torna all'inizio"
                aria-label="Torna all'inizio"
              >
                <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={scrollToPanelBottom}
                className="p-3 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 shadow-xl shadow-black/60 transition-all duration-200 group flex items-center justify-center backdrop-blur-sm"
                title="Vai in fondo"
                aria-label="Vai in fondo"
              >
                <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>

          </div>
        </div>
      )}

        {/* TAB 2: HIGH-STAKES SIMULATOR - Sleek Interface Style */}
        {activeTab === "quiz" && (
          <main className="flex-1 overflow-y-auto bg-slate-950 p-8 flex items-center justify-center" id="quiz_layout">
            <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-lg p-8 relative overflow-hidden shadow-2xl" id="quiz_panel_container">
              
              {/* Animated subtle backdrop blur blobs */}
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />

              {!quizStarted ? (
                /* Start Quiz Panel */
                <div className="text-left space-y-6" id="quiz_start_screen">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto shadow-inner" id="start_icon_box">
                      <Activity className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="space-y-1">
                      <h2 className="text-xl font-bold text-slate-100" id="start_screen_title">High-Stakes Exam Simulator</h2>
                      <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                        Configura il tuo simulatore d'esame. Seleziona quanti quesiti affrontare per ciascun dominio di competenza o scegli un preset rapido.
                      </p>
                    </div>
                  </div>

                  {/* Highlight: Nuove Domande Caricate */}
                  <div className="bg-slate-950/60 border border-cyan-500/20 p-4 rounded-lg space-y-3 shadow-inner" id="new_questions_highlight_box">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono font-extrabold text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 px-2 py-0.5 rounded uppercase tracking-wider">Nuovo Caricamento 100% Completo</span>
                        </div>
                        <h4 className="text-xs font-bold text-slate-200">10 Nuove Domande Tradotte nel Dominio 1 (Domande 11-89)</h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          Abbiamo caricato e tradotto in italiano le 10 domande d'esame dai tuoi screenshot (IDs 141-150). Sono ora integrate in Dominio 1!
                        </p>
                      </div>
                      <div className="flex flex-row sm:flex-col gap-2 shrink-0 w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={() => {
                            const newQuestions = DOMAIN_1_QUESTIONS.filter(q => q.id >= 141 && q.id <= 150);
                            setActiveQuestions(newQuestions);
                            setQuizStarted(true);
                            setCurrentQuestionIndex(0);
                            setQuizAnswers({});
                            setSelectedOption(null);
                            setShowFeedback(false);
                            setQuizCompleted(false);
                            setQuizScore(0);
                            setWrongQuestions([]);
                            setRemediationActive(false);
                            setRemediationCompleted(false);
                          }}
                          className="flex-1 sm:flex-initial bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-3 py-2 rounded text-[11px] transition-colors shadow-md shadow-cyan-600/10 text-center"
                        >
                          Avvia Test (10 domande)
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowNewQuestionsModal(true)}
                          className="flex-1 sm:flex-initial border border-slate-800 hover:border-slate-700 hover:text-slate-200 text-slate-400 font-bold px-3 py-2 rounded text-[11px] bg-slate-900 transition-colors text-center"
                        >
                          Leggi Testi Tradotti
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Preset Configurations */}
                  <div className="space-y-2 bg-slate-950/40 border border-slate-800/60 p-4 rounded-md" id="presets_container">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono block mb-2">Seleziona Configurazione Rapida (Presets)</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <button
                        type="button"
                        onClick={() => applyPreset("mini")}
                        className={`px-3 py-2 rounded text-xs font-semibold border transition-all ${quizFocus === "mini" ? "border-cyan-500 bg-cyan-500/10 text-cyan-300" : "border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`}
                      >
                        Mini (10 Totali)
                      </button>
                      <button
                        type="button"
                        onClick={() => applyPreset("balanced")}
                        className={`px-3 py-2 rounded text-xs font-semibold border transition-all ${quizFocus === "balanced" ? "border-cyan-500 bg-cyan-500/10 text-cyan-300" : "border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`}
                      >
                        Bilanciato (25 Totali)
                      </button>
                      <button
                        type="button"
                        onClick={() => applyPreset("all")}
                        className={`px-3 py-2 rounded text-xs font-semibold border transition-all ${quizFocus === "all" ? "border-cyan-500 bg-cyan-500/10 text-cyan-300" : "border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`}
                      >
                        Completo (Tutte)
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuizFocus("custom")}
                        className={`px-3 py-2 rounded text-xs font-semibold border transition-all ${quizFocus === "custom" ? "border-cyan-500 bg-cyan-500/10 text-cyan-300" : "border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-slate-200"}`}
                      >
                        Personalizzato
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-slate-800/40">
                      <span className="text-[9px] text-slate-500 font-mono flex items-center mr-1">SOLO DOMINIO:</span>
                      {[1, 2, 3, 4, 5].map(domNum => (
                        <button
                          key={domNum}
                          type="button"
                          onClick={() => applyPreset(`domain${domNum}` as any)}
                          className={`px-2 py-1 rounded text-[10px] font-mono border transition-all ${quizFocus === `domain${domNum}` ? "border-cyan-500 bg-cyan-500/10 text-cyan-300" : "border-slate-800 bg-slate-900 text-slate-500 hover:border-slate-700 hover:text-slate-300"}`}
                        >
                          DOM {domNum}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Domain-specific Question Count Sliders */}
                  <div className="space-y-4" id="domain_sliders_list">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono block">Personalizza Numero Domande per ciascun Dominio</label>
                    <div className="space-y-3">
                      {domainMetadata.map((dom) => {
                        const maxVal = maxQuestionsByDomain[dom.id] || 0;
                        const currentVal = customCounts[dom.id] || 0;

                        const handleDecrement = () => {
                          setQuizFocus("custom");
                          setCustomCounts(prev => ({
                            ...prev,
                            [dom.id]: Math.max(0, currentVal - 1)
                          }));
                        };

                        const handleIncrement = () => {
                          setQuizFocus("custom");
                          setCustomCounts(prev => ({
                            ...prev,
                            [dom.id]: Math.min(maxVal, currentVal + 1)
                          }));
                        };

                        const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                          setQuizFocus("custom");
                          const val = parseInt(e.target.value) || 0;
                          setCustomCounts(prev => ({
                            ...prev,
                            [dom.id]: val
                          }));
                        };

                        return (
                          <div key={dom.id} className="bg-slate-950/40 border border-slate-800 p-3.5 rounded-lg space-y-2 hover:border-slate-700 transition-colors">
                            <div className="flex justify-between items-start gap-2">
                              <div className="space-y-0.5">
                                <span className="text-xs font-bold text-slate-200 block">{dom.name}</span>
                                <span className="text-[10px] text-slate-500 block leading-relaxed">{dom.desc}</span>
                              </div>
                              <div className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-[11px] font-mono font-bold text-cyan-400 whitespace-nowrap">
                                {currentVal} / {maxVal}
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                onClick={handleDecrement}
                                disabled={currentVal <= 0}
                                className="w-7 h-7 flex items-center justify-center bg-slate-900 border border-slate-800 rounded hover:bg-slate-850 hover:border-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors text-slate-400 text-xs font-mono font-bold"
                              >
                                -
                              </button>
                              
                              <input
                                type="range"
                                min={0}
                                max={maxVal}
                                value={currentVal}
                                onChange={handleSliderChange}
                                className="flex-1 accent-cyan-500 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer"
                              />

                              <button
                                type="button"
                                onClick={handleIncrement}
                                disabled={currentVal >= maxVal}
                                className="w-7 h-7 flex items-center justify-center bg-slate-900 border border-slate-800 rounded hover:bg-slate-850 hover:border-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors text-slate-400 text-xs font-mono font-bold"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Summary & Run constraints */}
                  <div className="bg-cyan-950/20 border border-cyan-500/20 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4" id="custom_quiz_summary_box">
                    <div className="text-left space-y-1">
                      <div className="text-xs font-mono text-slate-400">RIEPILOGO CONFIGURAZIONE</div>
                      <div className="text-sm font-bold text-slate-100 font-sans">
                        <span className="text-cyan-400 font-mono text-lg">{totalQuestionsSelected}</span> domande ad alto rischio selezionate
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        Soglia di sbarramento: 80% • Tempo stimato: ~{totalQuestionsSelected * 2} min
                      </div>
                    </div>

                    <button 
                      id="start_quiz_btn"
                      disabled={totalQuestionsSelected <= 0}
                      onClick={handleStartQuiz}
                      className="w-full md:w-auto bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-600 disabled:border-slate-800 disabled:shadow-none text-white font-bold px-6 py-3 rounded hover:shadow-lg hover:shadow-cyan-500/10 transition-all inline-flex items-center justify-center gap-2 border border-cyan-500/30"
                    >
                      Avvia Simulatore di Esame
                      <ChevronRight className="w-4 h-4 stroke-[3]" />
                    </button>
                  </div>

                  <div className="bg-slate-950 p-4 rounded border border-slate-800 max-w-md mx-auto text-left space-y-2 text-xs font-mono" id="quiz_rules_box">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold">
                      <Check className="w-4 h-4" />
                      <span>REGOLE DI IDONEITÀ</span>
                    </div>
                    <p className="text-slate-400">● Domande ad alto rischio d'esame (Ricordo, Comprensione, Applicazione, Analisi).</p>
                    <p className="text-slate-400">● <strong>Soglia di Sbarramento: 80%</strong> per superare il modulo.</p>
                    <p className="text-slate-400">● Se fallisci, si attiverà un quiz di recupero con domande adattive basate sulle tue debolezze.</p>
                  </div>
                </div>
              ) : quizCompleted ? (
                /* Completed Screen */
                <div className="space-y-6" id="quiz_completed_screen">
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${quizScore >= 8 ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400" : "bg-rose-500/10 border border-rose-500/30 text-rose-400"}`} id="completed_icon_box">
                      {quizScore >= 8 ? <Award className="w-8 h-8" /> : <AlertTriangle className="w-8 h-8" />}
                    </div>
                    <div className="space-y-1">
                      <h2 className="text-xl font-bold text-slate-100" id="completed_title">Simulazione Completata</h2>
                      <p className="text-slate-400 font-mono text-xs">Esito del test per {quizFocus === "domain2" ? "il Dominio 2" : quizFocus === "domain3" ? "il Dominio 3" : quizFocus === "domain4" ? "il Dominio 4" : quizFocus === "domain5" ? "il Dominio 5" : "i Domini 2, 3, 4 & 5"}</p>
                    </div>

                    <div className="inline-block bg-slate-950 px-6 py-4 rounded border border-slate-800 shadow-inner" id="score_badge_box">
                      <div className="text-3xl font-extrabold text-slate-100 font-mono" id="score_digits">{quizScore} / {activeQuestions.length}</div>
                      <div className={`text-xs font-mono font-bold uppercase mt-1 tracking-wider ${quizScore >= (activeQuestions.length * 0.8) ? "text-cyan-400" : "text-rose-400"}`} id="score_status">
                        {quizScore >= (activeQuestions.length * 0.8) ? "IDONEITÀ CONSEGUITA" : "REMEDIATION NECESSARIA (FALLITO)"}
                      </div>
                    </div>
                  </div>

                  {quizScore < (activeQuestions.length * 0.8) ? (
                    /* Remediation Prompt */
                    <div className="bg-slate-950 border border-rose-500/20 p-5 rounded space-y-4" id="remediation_box">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
                        <div className="space-y-1">
                          <h4 className="text-sm font-bold text-rose-400 font-mono" id="remediation_title">ANALISI DELLE DEBOLEZZE</h4>
                          <p className="text-xs text-slate-400 leading-relaxed" id="remediation_desc">
                            Non hai raggiunto la soglia di sbarramento (80%). Il sistema ha tracciato gli errori commessi e ha isolato le tue aree di vulnerabilità teoriche:
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2" id="weak_topics_chips">
                        {Array.from(new Set(wrongQuestions.map(id => activeQuestions.find(q => q.id === id)?.topic))).map((t, idx) => (
                          <span key={idx} className="bg-rose-500/5 text-rose-300 border border-rose-500/20 px-2.5 py-1 rounded text-xs font-mono" id={`weak_chip_${idx}`}>
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-slate-800 flex justify-between items-center gap-4" id="remediation_actions">
                        <p className="text-xs text-slate-400 max-w-[340px]">
                          Il Trainer AI può generare al volo un <strong>Quiz Adattivo di 3 domande di livello ANALISI (Difficilissime)</strong> su questi esatti argomenti.
                        </p>
                        <button 
                          id="trigger_remediation_btn"
                          disabled={isGeneratingRemediation}
                          onClick={handleStartRemediation}
                          className="bg-rose-600 hover:bg-rose-500 disabled:bg-slate-800 text-white font-bold px-4 py-2 text-xs rounded transition-all flex items-center gap-1 shrink-0 shadow-md shadow-rose-600/10"
                        >
                          {isGeneratingRemediation ? (
                            <>
                              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                              Generazione...
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-3.5 h-3.5" />
                              Avvia Recupero Adattivo
                            </>
                          )}
                        </button>
                      </div>

                      {remediationError && (
                        <p className="text-xs text-rose-400 font-mono mt-1" id="remediation_err_text">⚠️ {remediationError}</p>
                      )}
                    </div>
                  ) : (
                    /* Passed Message */
                    <div className="bg-cyan-950/20 border border-cyan-900/50 p-5 rounded flex gap-3 shadow-md" id="passed_box">
                      <Award className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-cyan-400 font-mono" id="passed_title">ECCELLENTE PREPARAZIONE!</h4>
                        <p className="text-xs text-slate-300 leading-relaxed" id="passed_desc">
                          Hai superato brillantemente lo sbarramento. Dimostri una conoscenza di livello professionale sulla governance, le politiche di rischio e la conformità di terze parti. Continua così!
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 justify-center" id="recompleted_buttons">
                    <button 
                      id="restart_quiz_btn"
                      onClick={handleStartQuiz}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-5 py-2.5 rounded text-sm transition-all"
                    >
                      Ripeti Test Principale
                    </button>
                    <button 
                      id="back_to_studio_btn"
                      onClick={() => setActiveTab("studio")}
                      className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-5 py-2.5 rounded text-sm transition-all shadow-md shadow-cyan-600/15"
                    >
                      Ritorna allo Studio
                    </button>
                  </div>
                </div>
              ) : remediationActive ? (
                /* REMEDIATION ACTIVE SCREEN */
                remediationCompleted ? (
                  /* Remediation Ended */
                  <div className="text-center space-y-6" id="remediation_ended_screen">
                    <div className="w-16 h-16 bg-rose-500/10 border border-rose-500/30 text-rose-400 rounded-full flex items-center justify-center mx-auto" id="remediation_ended_icon">
                      <Award className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold text-slate-100" id="remediation_ended_title">Sessione di Recupero Completata</h2>
                      <p className="text-sm text-slate-400 max-w-md mx-auto">
                        Hai completato le 3 domande adattive generate al volo sull'analisi dei tuoi punti deboli.
                      </p>
                    </div>

                    <div className="inline-block bg-slate-950 px-6 py-4 rounded border border-slate-800" id="remediation_score_box">
                      <div className="text-2xl font-extrabold text-slate-100 font-mono" id="remediation_score_digits">{remediationScore} / 3</div>
                      <div className="text-xs font-mono font-bold text-rose-300 mt-1 uppercase tracking-wider" id="remediation_score_status">
                        RECUPERO ADATTIVO (LIVELLO ANALISI)
                      </div>
                    </div>

                    <div className="flex gap-4 justify-center" id="remediation_completed_buttons">
                      <button 
                        id="remediation_retry_btn"
                        onClick={handleStartRemediation}
                        className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-5 py-2.5 rounded text-sm transition-all flex items-center gap-1"
                      >
                        <RefreshCw className="w-4 h-4" />
                        Rigenera Domande Nuove
                      </button>
                      <button 
                        id="remediation_end_btn"
                        onClick={() => {
                          setRemediationActive(false);
                          setQuizCompleted(true);
                        }}
                        className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-5 py-2.5 rounded text-sm transition-all"
                      >
                        Vedi Risultato Principale
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Remediation Question Active */
                  <div className="space-y-6" id="remediation_question_screen">
                    <div className="flex justify-between items-center text-xs font-mono text-rose-400 pb-2 border-b border-slate-800" id="remediation_q_header">
                      <span>RECUPERO ADATTIVO · LIVELLO: {remediationQuestions[remediationIndex].level}</span>
                      <span>DOMANDA {remediationIndex + 1} DI {remediationQuestions.length}</span>
                    </div>

                    {/* Scenario card */}
                    <div className="bg-slate-950/80 p-4 border-l-2 border-rose-500 rounded-r space-y-2" id="remediation_scenario_box">
                      <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded uppercase font-semibold">Scenario Tecnico di Analisi</span>
                      <p className="text-xs text-slate-400 leading-relaxed italic">{remediationQuestions[remediationIndex].scenario}</p>
                    </div>

                    {/* Question text */}
                    <h3 className="font-bold text-sm text-slate-200 leading-relaxed" id="remediation_q_text">
                      {remediationQuestions[remediationIndex].question}
                    </h3>

                    {/* Options list */}
                    <div className="space-y-2.5" id="remediation_options_list">
                      {remediationQuestions[remediationIndex].options.map((opt, oIdx) => {
                        const isSelected = remediationSelected === oIdx;
                        const isCorrect = oIdx === remediationQuestions[remediationIndex].answerIndex;
                        let optionStyle = "border-slate-800 hover:border-slate-700 bg-slate-950/40 hover:bg-slate-900/40 text-slate-400";

                        if (remediationShowFeedback) {
                          if (isCorrect) {
                            optionStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-400 font-semibold shadow-emerald-500/5 shadow-sm";
                          } else if (isSelected) {
                            optionStyle = "border-rose-500 bg-rose-500/10 text-rose-400";
                          } else {
                            optionStyle = "border-slate-800/50 bg-slate-950/10 text-slate-500 opacity-60";
                          }
                        } else if (isSelected) {
                          optionStyle = "border-rose-400 bg-rose-500/5 text-rose-300 font-medium shadow-rose-500/5 shadow-sm";
                        }

                        return (
                          <button
                            key={oIdx}
                            id={`remediation_opt_${oIdx}`}
                            onClick={() => handleRemediationSelect(oIdx)}
                            className={`w-full text-left p-3.5 rounded border text-xs transition-all duration-200 ${optionStyle}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {/* Feedback and next actions */}
                    {remediationShowFeedback ? (
                      <div className="space-y-4" id="remediation_feedback_box">
                        <div className={`p-4 rounded border ${remediationSelected === remediationQuestions[remediationIndex].answerIndex ? "bg-emerald-500/[0.02] border-emerald-500/20 text-slate-300" : "bg-rose-500/[0.02] border-rose-500/20 text-slate-300"}`} id="remediation_feedback_details">
                          <h4 className="text-xs font-mono font-bold uppercase mb-2 tracking-wider flex items-center gap-1.5 text-slate-200">
                            {remediationSelected === remediationQuestions[remediationIndex].answerIndex ? (
                              <><Check className="w-4 h-4 text-emerald-400" /> <span className="text-emerald-400">BEST CHOICE SELEZIONATA</span></>
                            ) : (
                              <><X className="w-4 h-4 text-rose-400" /> <span className="text-rose-400">DISTRATTORE RILEVATO</span></>
                            )}
                          </h4>
                          <div className="text-xs text-slate-400 leading-relaxed">
                            {renderMarkdownToJSX(remediationQuestions[remediationIndex].explanation)}
                          </div>
                        </div>

                        <button 
                          id="remediation_next_btn"
                          onClick={handleRemediationNext}
                          className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 rounded hover:bg-rose-500 transition-all text-xs flex items-center justify-center gap-1"
                        >
                          <span>{remediationIndex === remediationQuestions.length - 1 ? "Vedi Esito Recupero" : "Prossima Domanda di Recupero"}</span>
                          <ChevronRight className="w-4 h-4 stroke-[3]" />
                        </button>
                      </div>
                    ) : (
                      <button 
                        id="remediation_confirm_btn"
                        onClick={handleRemediationConfirm}
                        disabled={remediationSelected === null}
                        className="w-full bg-slate-800 disabled:bg-slate-900 border border-slate-700 disabled:border-slate-800 text-slate-300 disabled:text-slate-600 font-bold py-3 rounded transition-all text-xs"
                      >
                        Conferma Risposta
                      </button>
                    )}
                  </div>
                )
              ) : (
                /* ACTIVE MAIN QUIZ QUESTION SCREEN */
                <div className="space-y-6" id="main_quiz_question_screen">
                  
                  {/* Progress Header */}
                  <div className="space-y-2" id="quiz_progress_container">
                    <div className="flex justify-between items-center text-xs font-mono text-slate-400" id="quiz_progress_text">
                      <span className="text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded text-[10px] uppercase font-bold">{activeQuestions[currentQuestionIndex].topic}</span>
                      <span>LIVELLO: <strong className="text-cyan-400">{activeQuestions[currentQuestionIndex].level}</strong> · {currentQuestionIndex + 1} DI {activeQuestions.length}</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden" id="quiz_bar">
                      <div 
                        id="quiz_bar_fill"
                        className="h-full bg-cyan-500 transition-all duration-300"
                        style={{ width: `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Scenario box */}
                  <div className="bg-slate-950/80 p-4 border-l-2 border-cyan-500 rounded-r space-y-2" id="quiz_scenario_box">
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded uppercase font-semibold">Scenario Aziendale</span>
                    <p className="text-xs text-slate-400 leading-relaxed italic">{activeQuestions[currentQuestionIndex].scenario}</p>
                  </div>

                  {/* Question text */}
                  <h3 className="font-bold text-sm text-slate-200 leading-relaxed" id="quiz_q_text">
                    {activeQuestions[currentQuestionIndex].question}
                  </h3>

                  {/* Options buttons */}
                  <div className="space-y-2.5" id="quiz_options_list">
                    {activeQuestions[currentQuestionIndex].options.map((opt, oIdx) => {
                      const isSelected = selectedOption === oIdx;
                      const isCorrect = oIdx === activeQuestions[currentQuestionIndex].answerIndex;
                      let optionStyle = "border-slate-800 hover:border-slate-700 bg-slate-950/40 hover:bg-slate-900/40 text-slate-450";

                      if (showFeedback) {
                        if (isCorrect) {
                          optionStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-400 font-semibold shadow-emerald-500/5 shadow-sm";
                        } else if (isSelected) {
                          optionStyle = "border-rose-500 bg-rose-500/10 text-rose-400";
                        } else {
                          optionStyle = "border-slate-800/50 bg-slate-950/10 text-slate-500 opacity-60";
                        }
                      } else if (isSelected) {
                        optionStyle = "border-cyan-400 bg-cyan-500/5 text-cyan-300 font-medium shadow-cyan-500/5 shadow-sm";
                      }

                      return (
                        <button
                          key={oIdx}
                          id={`quiz_opt_${oIdx}`}
                          onClick={() => handleSelectOption(oIdx)}
                          className={`w-full text-left p-3.5 rounded border text-xs transition-all duration-200 ${optionStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback Box & Next Actions */}
                  {showFeedback ? (
                    <div className="space-y-4" id="quiz_feedback_box">
                      <div className={`p-4 rounded border ${selectedOption === activeQuestions[currentQuestionIndex].answerIndex ? "bg-emerald-500/[0.02] border-emerald-500/20 text-slate-300" : "bg-rose-500/[0.02] border-rose-500/20 text-slate-300"}`} id="quiz_feedback_details">
                        <h4 className="text-xs font-mono font-bold uppercase mb-2 tracking-wider flex items-center gap-1.5 text-slate-200">
                          {selectedOption === activeQuestions[currentQuestionIndex].answerIndex ? (
                            <><Check className="w-4 h-4 text-emerald-400" /> <span className="text-emerald-400">BEST CHOICE SELEZIONATA</span></>
                          ) : (
                            <><X className="w-4 h-4 text-rose-400" /> <span className="text-rose-400">DISTRATTORE RILEVATO</span></>
                          )}
                        </h4>
                        <div className="text-xs text-slate-400 leading-relaxed">
                          {renderMarkdownToJSX(activeQuestions[currentQuestionIndex].explanation)}
                        </div>
                      </div>

                      <button 
                        id="quiz_next_btn"
                        onClick={handleNextQuestion}
                        className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded hover:shadow-lg hover:shadow-cyan-500/10 transition-all text-xs flex items-center justify-center gap-1"
                      >
                        <span>{currentQuestionIndex === activeQuestions.length - 1 ? "Concludi Esame" : "Prossima Domanda"}</span>
                        <ChevronRight className="w-4 h-4 stroke-[3]" />
                      </button>
                    </div>
                  ) : (
                    <button 
                      id="quiz_confirm_btn"
                      onClick={handleConfirmAnswer}
                      disabled={selectedOption === null}
                      className="w-full bg-slate-800 disabled:bg-slate-900 border border-slate-700 disabled:border-slate-800 text-slate-300 disabled:text-slate-600 font-bold py-3 rounded transition-all text-xs"
                    >
                      Conferma Risposta
                    </button>
                  )}

                </div>
              )}

            </div>
          </main>
        )}

        {/* TAB 3: GLOSSARIO SY0-701 */}
        {activeTab === "glossary" && (
          <GlossarySection 
            onAskAI={(prompt) => {
              setSidebarOpen(true);
              handleSendChat(prompt);
            }}
          />
        )}

        {/* PERSISTENT COLLAPSIBLE AI SIDEBAR - Sleek Interface Style */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div 
              id="ai_sidebar"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 380, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="border-l border-slate-800 bg-slate-900/65 flex-shrink-0 flex flex-col overflow-hidden h-full z-10"
            >
              {/* Sidebar Header */}
              <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950" id="sidebar_header">
                <div className="flex items-center gap-2">
                  <div className="bg-cyan-500/10 p-1.5 rounded text-cyan-400" id="sidebar_header_icon">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-xs font-mono text-cyan-400 tracking-wider uppercase">ASSISTENTE AI TRAINER</h3>
                </div>
                <button 
                  id="close_sidebar_icon_btn"
                  onClick={() => setSidebarOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-200 rounded hover:bg-slate-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4" id="chat_messages_area">
                {chatMessages.map((msg, i) => {
                  const isTrainer = msg.sender === "trainer";
                  const isSystem = msg.sender === "system";

                  return (
                    <div 
                      key={msg.id} 
                      id={`msg_${i}`}
                      className={`flex ${isTrainer ? "justify-start" : isSystem ? "justify-center" : "justify-end"}`}
                    >
                      <div 
                        id={`msg_bubble_${i}`}
                        className={`max-w-[85%] rounded p-3 text-xs leading-relaxed ${isTrainer ? "bg-slate-950 text-slate-300 border border-slate-800" : isSystem ? "bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-center" : "bg-cyan-600 text-white font-medium shadow-md shadow-cyan-600/10"}`}
                      >
                        {isTrainer ? (
                          renderMarkdownToJSX(msg.text)
                        ) : (
                          <p>{msg.text}</p>
                        )}
                        <span className="block text-[9px] text-slate-500 mt-1 text-right font-mono select-none">
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  );
                })}
                {isChatLoading && (
                  <div className="flex justify-start" id="chat_loading_indicator">
                    <div className="bg-slate-950 border border-slate-800 rounded p-3 flex items-center gap-2" id="chat_loading_bubble">
                      <RefreshCw className="w-4 h-4 text-cyan-400 animate-spin" />
                      <span className="text-xs text-slate-400 font-mono">Il Trainer sta elaborando...</span>
                    </div>
                  </div>
                )}
                <div ref={chatBottomRef} />
              </div>

              {/* Suggested chips based on context */}
              <div className="px-3 py-2 border-t border-slate-800/60 bg-slate-950/40" id="suggested_chips_box">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1.5 pl-1">Chiedi al Trainer:</span>
                <div className="flex flex-wrap gap-1.5" id="suggested_chips_list">
                  <button 
                    id="chip_threats"
                    onClick={() => handleSendChat("Quali sono le principali categorie di Threat Actors (Nation-State, Hacktivist, Insider) e le loro motivazioni secondo il syllabus di Domain 2?")}
                    className="bg-slate-800 hover:bg-slate-700 hover:text-cyan-400 border border-slate-700 hover:border-cyan-900/30 rounded px-2 py-1 text-[10px] text-slate-300 transition-colors"
                  >
                    Attori delle Minacce (Dom 2)
                  </button>
                  <button 
                    id="chip_edr"
                    onClick={() => handleSendChat("Qual è la differenza tra EDR, MDR e un Antivirus tradizionale basato su firme nel Dominio 2?")}
                    className="bg-slate-800 hover:bg-slate-700 hover:text-cyan-400 border border-slate-700 hover:border-cyan-900/30 rounded px-2 py-1 text-[10px] text-slate-300 transition-colors"
                  >
                    EDR vs Antivirus (Dom 2)
                  </button>
                  <button 
                    id="chip_rto"
                    onClick={() => handleSendChat("Spiegami la differenza e gli impatti aziendali tra RTO, RPO e MTD con un esempio pratico.")}
                    className="bg-slate-800 hover:bg-slate-700 hover:text-cyan-400 border border-slate-700 hover:border-cyan-900/30 rounded px-2 py-1 text-[10px] text-slate-300 transition-colors"
                  >
                    RTO vs RPO vs MTD
                  </button>
                  <button 
                    id="chip_sle"
                    onClick={() => handleSendChat("Come si calcolano SLE, ALE e ARO? Dammi un problema d'esame numerico da risolvere per esercitarmi.")}
                    className="bg-slate-800 hover:bg-slate-700 hover:text-cyan-400 border border-slate-700 hover:border-cyan-900/30 rounded px-2 py-1 text-[10px] text-slate-300 transition-colors"
                  >
                    Calcolo Rischio SLE/ALE
                  </button>
                  <button 
                    id="chip_due"
                    onClick={() => handleSendChat("Qual è la differenza fondamentale tra Due Diligence e Due Care secondo CompTIA? Fammi degli esempi pratici.")}
                    className="bg-slate-800 hover:bg-slate-700 hover:text-cyan-400 border border-slate-700 hover:border-cyan-900/30 rounded px-2 py-1 text-[10px] text-slate-300 transition-colors"
                  >
                    Due Care vs Due Diligence
                  </button>
                  <button 
                    id="chip_agreements"
                    onClick={() => handleSendChat("Fornisci un riepilogo delle differenze tra SLA, MOU, BPA, MOA, SOW e BAA.")}
                    className="bg-slate-800 hover:bg-slate-700 hover:text-cyan-400 border border-slate-700 hover:border-cyan-900/30 rounded px-2 py-1 text-[10px] text-slate-300 transition-colors"
                  >
                    Confronto Accordi
                  </button>
                </div>
              </div>

              {/* Chat Input form */}
              <div className="p-3 border-t border-slate-800 bg-slate-950" id="chat_input_panel">
                <form 
                  id="chat_form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendChat();
                  }}
                  className="flex gap-2"
                >
                  <input 
                    id="chat_text_input"
                    type="text"
                    value={chatInput}
                    disabled={isChatLoading}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Chiedi spiegazioni o scenari..."
                    className="flex-1 bg-slate-900 border border-slate-800 focus:border-cyan-500/50 rounded px-3 py-2 text-xs outline-none text-slate-100 placeholder-slate-500 transition-colors"
                  />
                  <button 
                    id="chat_submit_btn"
                    type="submit"
                    disabled={isChatLoading || !chatInput.trim()}
                    className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 text-white disabled:text-slate-600 font-bold p-2 rounded transition-colors"
                  >
                    <Send className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal per visualizzare i testi delle nuove domande tradotte */}
        {showNewQuestionsModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" id="new_questions_modal_overlay">
            <div className="w-full max-w-3xl h-[85vh] bg-slate-900 border border-slate-800 rounded-lg flex flex-col overflow-hidden shadow-2xl" id="new_questions_modal">
              {/* Header */}
              <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950" id="new_questions_modal_header">
                <div>
                  <h3 className="text-sm font-bold text-slate-100">Banca Dati: 10 Nuove Domande Tradotte (Dominio 1)</h3>
                  <p className="text-[10px] text-slate-400">Scenari reali e spiegazioni dettagliate d'esame in italiano (CompTIA Security+ SY0-701)</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowNewQuestionsModal(false)}
                  className="p-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-900/50" id="new_questions_modal_content">
                {DOMAIN_1_QUESTIONS.filter(q => q.id >= 141 && q.id <= 150).map((q, idx) => (
                  <div key={q.id} className="p-4 bg-slate-950/40 border border-slate-800/80 rounded-lg space-y-3" id={`modal_q_${q.id}`}>
                    <div className="flex items-center justify-between gap-2 border-b border-slate-800/60 pb-1.5">
                      <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded uppercase">Domanda {idx + 1} (CompTIA ID: {q.id})</span>
                      <span className="text-[10px] font-mono text-slate-500">Argomento: {q.topic}</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-slate-450 italic bg-slate-950/30 p-2.5 rounded border-l border-cyan-500/30 leading-relaxed"><strong>Scenario:</strong> {q.scenario}</p>
                      <p className="text-xs font-semibold text-slate-200">{q.question}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, optIdx) => (
                        <div
                          key={optIdx}
                          className={`p-2 rounded border ${optIdx === q.answerIndex ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-medium" : "bg-slate-900/50 border-slate-800 text-slate-400"}`}
                        >
                          {opt} {optIdx === q.answerIndex && "✓"}
                        </div>
                      ))}
                    </div>
                    <div className="text-[11px] bg-slate-950/80 p-3 rounded border border-slate-800/60 text-slate-300 leading-relaxed space-y-1">
                      <strong className="text-cyan-400 block text-xs">Spiegazione Dettagliata:</strong>
                      <div className="whitespace-pre-line text-slate-400">{q.explanation}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-slate-800 bg-slate-950 flex justify-end gap-2" id="new_questions_modal_footer">
                <button
                  type="button"
                  onClick={() => setShowNewQuestionsModal(false)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-xs font-semibold transition-colors"
                >
                  Chiudi
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const newQuestions = DOMAIN_1_QUESTIONS.filter(q => q.id >= 141 && q.id <= 150);
                    setActiveQuestions(newQuestions);
                    setQuizStarted(true);
                    setCurrentQuestionIndex(0);
                    setQuizAnswers({});
                    setSelectedOption(null);
                    setShowFeedback(false);
                    setQuizCompleted(false);
                    setQuizScore(0);
                    setWrongQuestions([]);
                    setRemediationActive(false);
                    setRemediationCompleted(false);
                    setShowNewQuestionsModal(false);
                  }}
                  className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded text-xs font-bold transition-colors shadow-md shadow-cyan-600/10"
                >
                  Avvia Test Diretto
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
