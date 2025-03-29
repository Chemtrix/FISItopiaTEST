const fillInQuestions = [
  {
    question: "Der Befehl zum Anzeigen der IP-Adresse in Windows lautet: ___",
    answer: ["ipconfig"],
    explanation: "Mit 'ipconfig' erhältst du Infos zur IP, Subnetzmaske und Gateway."
  },
  {
    question: "Die eindeutige Hardwareadresse einer Netzwerkkarte nennt man: ___",
    answer: ["mac adresse", "mac-adresse", "mac"],
    explanation: "Die MAC-Adresse identifiziert deine Netzwerkkarte eindeutig."
  },
  {
    question: "Der Befehl zur Überprüfung der Erreichbarkeit eines Hosts lautet: ___",
    answer: ["ping"],
    explanation: "'ping' sendet Pakete an ein Ziel und misst Antwortzeiten."
  },
  {
    question: "Die Abkürzung DNS steht für: ___",
    answer: ["domain name system"],
    explanation: "DNS löst Domainnamen wie google.de in IP-Adressen auf."
  },
  {
    question: "Die Abkürzung SSD steht für: ___",
    answer: ["solid state drive"],
    explanation: "SSDs sind schnelle, stoßfeste Speichermedien ohne bewegliche Teile."
  },
  {
    question: "Der Standardport für HTTPS ist: ___",
    answer: ["443"],
    explanation: "Port 443 wird für verschlüsselte Webseitenverbindungen verwendet."
  },
  {
    question: "Mit dem Befehl ___ wechselt man im Terminal eine Verzeichnisebene nach oben.",
    answer: ["cd .."],
    explanation: "'cd ..' bringt dich im Dateisystem eine Ebene zurück."
  },
  {
    question: "Der Befehl zur Anzeige des Computernamens im Netzwerk ist: ___",
    answer: ["hostname", "gerätename", "computername"],
    explanation: "Der Name des Computers im Netzwerk wird angezeigt."
  },
  {
    question: "Der Befehl zum Anzeigen aller offenen Ports lautet: ___",
    answer: ["netstat -an"],
    explanation: "'netstat -an' zeigt alle aktiven Verbindungen & Ports."
  },
  {
    question: "Mit dem Befehl ___ erhält man eine Übersicht aller lokalen Benutzer unter Windows.",
    answer: ["net user"],
    explanation: "Zeigt alle lokalen Benutzerkonten auf deinem Rechner an."
  },
  {
    question: "Die Loopback-Adresse von localhost lautet: ___",
    answer: ["127.0.0.1"],
    explanation: "Die Loopback-Adresse verweist immer auf den eigenen PC."
  },
  {
    question: "Das Protokoll zur automatischen IP-Zuweisung heißt: ___",
    answer: ["dhcp"],
    explanation: "DHCP weist Geräten im Netzwerk automatisch IP-Adressen zu."
  },
  {
    question: "Das Netzwerkmodell mit sieben Schichten heißt: ___",
    answer: ["osi", "osi-modell", "osi modell"],
    explanation: "Das OSI-Modell beschreibt Netzwerkkommunikation in 7 Schichten."
  },
  {
    question: "Mit dem Befehl ___ kann eine neue IP vom DHCP-Server angefragt werden.",
    answer: ["ipconfig /renew"],
    explanation: "Mit 'ipconfig /renew' wird eine neue IP-Adresse angefragt."
  },
  {
    question: "Der Dienst, der Namen wie google.de in IP-Adressen umwandelt, heißt: ___",
    answer: ["dns", "domain name system"],
    explanation: "DNS übernimmt die Namensauflösung im Internet."
  },
  {
    question: "Ein Gerät, das Netzwerke verbindet, nennt man: ___",
    answer: ["router"],
    explanation: "Ein Router verbindet z. B. dein lokales Netzwerk mit dem Internet."
  },
  {
    question: "Das Protokoll ___ sorgt für verschlüsselte Webseitenübertragung.",
    answer: ["https"],
    explanation: "HTTPS basiert auf HTTP + SSL/TLS für sichere Datenübertragung."
  },
  {
    question: "Mit dem Befehl ___ kannst du deine aktuelle IP-Adresse anzeigen lassen (Windows).",
    answer: ["ipconfig"],
    explanation: "'ipconfig' zeigt IP, Subnetzmaske und Gateway an."
  },
  {
    question: "___ steht für Domain Name System und übersetzt Namen in IP-Adressen.",
    answer: ["dns"],
    explanation: "DNS ist wie ein Telefonbuch für das Internet."
  },
  {
    question: "Ein ___ hat meist eine MAC-Adresse zur eindeutigen Identifikation im Netzwerk.",
    answer: ["netzwerkadapter", "netzwerkkarte"],
    explanation: "Jede Netzwerkkarte hat eine weltweit eindeutige MAC-Adresse."
  },
  {
    question: "Das OSI-Modell besteht aus ___ Schichten.",
    answer: ["7", "sieben"],
    explanation: "Vom Physical Layer (1) bis zur Application Layer (7)."
  },
  {
    question: "Die Adresse ___ steht für deinen eigenen Computer (Loopback).",
    answer: ["127.0.0.1", "localhost"],
    explanation: "127.0.0.1 ist die Loopback-Adresse."
  },
  {
    question: "Mit ___ prüfst du, ob ein Gerät im Netzwerk erreichbar ist.",
    answer: ["ping"],
    explanation: "'ping' sendet Testpakete und misst Antwortzeiten."
  },
  {
    question: "Ein ___ speichert laufende Programme temporär.",
    answer: ["ram", "arbeitsspeicher"],
    explanation: "RAM ist der temporäre Speicher für laufende Prozesse."
  },
  {
    question: "Ein Switch arbeitet auf OSI-Schicht Nummer ___ .",
    answer: ["2", "zwei"],
    explanation: "Der Data Link Layer ist für MAC-Adressen zuständig."
  },
  {
    question: "Ein ___ speichert Daten dauerhaft, z. B. SSD oder HDD.",
    answer: ["datenträger", "festplatte", "ssd", "hdd"],
    explanation: "Typische Datenträger sind SSDs und HDDs."
  },
  {
    question: "Mit dem Befehl ___ werden offene Ports und Verbindungen angezeigt.",
    answer: ["netstat -an", "netstat"],
    explanation: "'netstat -an' zeigt Netzwerkverbindungen."
  },
  {
    question: "Der Befehl ___ bringt dich im Terminal eine Ebene nach oben.",
    answer: ["cd .."],
    explanation: "'cd ..' wechselt ins übergeordnete Verzeichnis."
  },
  {
    question: "Die Broadcast-Adresse für IPv4 lautet: ___",
    answer: ["255.255.255.255"],
    explanation: "Broadcast erreicht alle Geräte im Subnetz."
  },
  {
    question: "DHCP steht für: ___",
    answer: ["dynamic host configuration protocol"],
    explanation: "DHCP weist IP-Adressen automatisch zu."
  }
];

export default fillInQuestions;
