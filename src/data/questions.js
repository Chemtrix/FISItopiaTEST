const questions = [
    {
      question: "Was zeigt der Befehl 'ipconfig' an?",
      options: ["Installierte Programme", "Benutzerkonten", "Netzwerkdetails", "Speicherplatz auf der Festplatte"],
      answer: 2,
      explanation: "'ipconfig' zeigt dir deine IP-Adresse, Gateway und andere Netzwerkdetails an."
    },
    {
      question: "Wofür steht DNS?",
      options: ["Digital Network System", "Domain Name System", "Data Naming Source", "Drive Network Service"],
      answer: 1,
      explanation: "DNS übersetzt Domainnamen wie 'google.de' in IP-Adressen."
    },
    {
      question: "Was macht der Befehl 'ping'?",
      options: ["Sendet ein Signal an eine andere Adresse zur Überprüfung der Erreichbarkeit", "Listet alle Benutzer auf", "Startet den PC neu", "Installiert Updates"],
      answer: 0,
      explanation: "'ping' prüft, ob ein Server erreichbar ist – gut zum Testen von Verbindungen."
    },
    {
      question: "Was ist eine MAC-Adresse?",
      options: ["Eine Benutzerkennung", "Ein Netzwerkprotokoll", "Eine Hardwareadresse", "Ein Softwaredienst"],
      answer: 2,
      explanation: "Die MAC-Adresse ist die eindeutige physische Adresse deiner Netzwerkkarte."
    },
    {
      question: "Was ist ein Router?",
      options: ["Ein Programm zur Datensicherung", "Ein Gerät zur Verbindung von Netzwerken", "Ein Festplattenformatierer", "Ein Browser Plugin"],
      answer: 1,
      explanation: "Ein Router verbindet dein lokales Netzwerk mit dem Internet."
    },
    {
      question: "Welche Funktion hat ein Switch?",
      options: ["Schaltet Geräte ein und aus", "Erhöht die WLAN-Reichweite", "Verbindet Geräte innerhalb eines Netzwerks", "Installiert Software"],
      answer: 2,
      explanation: "Ein Switch leitet Datenpakete im lokalen Netzwerk gezielt an die richtigen Geräte weiter."
    },
    {
      question: "Was macht der Befehl 'tracert'?",
      options: ["Testet die Internetgeschwindigkeit", "Verfolgt den Weg von Datenpaketen", "Sendet eine E-Mail", "Startet das System neu"],
      answer: 1,
      explanation: "'tracert' zeigt, über welche Stationen (Router) ein Paket sein Ziel erreicht."
    },
    {
      question: "Wofür steht HTTPS?",
      options: ["HyperText Transfer Protocol Secure", "High Transfer Tunnel Protocol", "Home Transfer Protocol", "Hyper Terminal Tunnel"],
      answer: 0,
      explanation: "HTTPS ist die sichere, verschlüsselte Variante von HTTP für Webseiten."
    },
    {
      question: "Was ist das Ziel von RAID-Systemen?",
      options: ["Erhöhte Druckgeschwindigkeit", "Zentrale Benutzerverwaltung", "Datensicherheit und Leistungssteigerung", "Software-Installation"],
      answer: 2,
      explanation: "RAID kombiniert mehrere Festplatten, um Ausfallsicherheit und/oder Performance zu verbessern."
    },
    {
      question: "Was bedeutet BIOS?",
      options: ["Binary Input Output Sequence", "Basic Input Output System", "Basic Internal Operation Structure", "Binary Information Output Signal"],
      answer: 1,
      explanation: "Das BIOS ist die Firmware, die beim Start deines PCs grundlegende Hardware initialisiert."
    },
    {
      question: "Was macht der Befehl 'netstat -an'?",
      options: ["Zeigt Netzwerkadapter", "Startet die Firewall", "Zeigt offene Ports und Verbindungen", "Schließt alle aktiven Verbindungen"],
      answer: 2,
      explanation: "'netstat -an' zeigt dir alle offenen Ports und Netzwerkverbindungen an."
    },
    {
      question: "Was ist '127.0.0.1'?",
      options: ["Standardgateway", "Broadcast-Adresse", "Loopback-Adresse", "DNS-Adresse"],
      answer: 2,
      explanation: "'127.0.0.1' ist die Loopback-Adresse und verweist immer auf den eigenen Rechner."
    },
    {
      question: "Was bedeutet SSD?",
      options: ["Solid State Drive", "Smart Secure Device", "Software Storage Directory", "Speed Storage Disk"],
      answer: 0,
      explanation: "Eine SSD ist ein schneller, robuster Speicher ohne bewegliche Teile."
    },
    {
      question: "Was macht ein DNS-Server?",
      options: ["Verbindet WLAN", "Sucht IP-Adressen zu Domainnamen", "Sendet E-Mails", "Blockiert Webseiten"],
      answer: 1,
      explanation: "Ein DNS-Server wandelt Webadressen in IP-Adressen um."
    },
    {
      question: "Was ist ein Subnetz?",
      options: ["Eine Internetseite", "Ein Teil eines Netzwerks", "Ein Router", "Ein Computervirus"],
      answer: 1,
      explanation: "Ein Subnetz unterteilt ein großes Netzwerk in kleinere Einheiten zur besseren Verwaltung."
    },
    {
      question: "Was zeigt der Befehl 'hostname' an?",
      options: ["Die aktuelle IP-Adresse", "Den Namen des PCs im Netzwerk", "Das aktuelle Gateway", "Die MAC-Adresse"],
      answer: 1,
      explanation: "'hostname' gibt den Namen des Computers im Netzwerk aus."
    },
    {
      question: "Was bedeutet SSL?",
      options: ["Secure Socket Layer", "System Server Link", "Safe Storage Logic", "Shared Security Layer"],
      answer: 0,
      explanation: "SSL ist ein Verschlüsselungsprotokoll für sichere Datenübertragung im Internet."
    },
    {
      question: "Was ist ein Proxy?",
      options: ["Erhöht den Arbeitsspeicher", "Verschlüsselt Passwörter", "Leitet Datenverkehr über einen Mittelsmann", "Startet den PC neu"],
      answer: 2,
      explanation: "Ein Proxy-Server steht zwischen dir und dem Internet und kann Anfragen filtern oder weiterleiten."
    },
    {
      question: "Was macht der Befehl 'net user'?",
      options: ["Startet das Netzwerk neu", "Zeigt Benutzerkonten an", "Installiert Benutzer-Tools", "Beendet Sitzungen"],
      answer: 1,
      explanation: "'net user' listet alle Benutzerkonten auf dem PC auf."
    },
    {
      question: "Wofür steht DHCP?",
      options: ["Dynamic Host Configuration Protocol", "Distributed Hypertext Control Process", "Domain Hosting Central Provider", "Data Holding Channel Port"],
      answer: 0,
      explanation: "DHCP weist Geräten automatisch IP-Adressen im Netzwerk zu."
    },
    {
      question: "Was ist 'ipconfig /release'?",
      options: ["Setzt die Netzwerkeinstellungen zurück", "Bezieht eine neue IP-Adresse", "Löscht DNS-Einträge", "Gibt die aktuelle IP-Adresse frei"],
      answer: 3,
      explanation: "'ipconfig /release' gibt die aktuelle IP-Adresse frei – oft für Netzwerk-Reset."
    },
    {
      question: "Welche Adresse steht für eine Broadcast-Adresse?",
      options: ["192.168.1.1", "255.255.255.255", "127.0.0.1", "0.0.0.0"],
      answer: 1,
      explanation: "255.255.255.255 ist die Broadcast-Adresse – ein Paket an sie erreicht alle im Netz."
    },
    {
      question: "Was beschreibt das OSI-Modell?",
      options: ["Ein Sicherheitsprotokoll", "Ein Speichersystem", "Ein Schichtenmodell für Netzwerkkommunikation", "Ein Installationssystem"],
      answer: 2,
      explanation: "Das OSI-Modell beschreibt die Kommunikation im Netzwerk in 7 logischen Schichten."
    },
    {
      question: "Was macht ein Gateway im Netzwerk?",
      options: ["Verwaltet Benutzerkonten", "Erstellt Backups", "Verbindet verschiedene Netzwerke", "Speichert Webseiten lokal"],
      answer: 2,
      explanation: "Ein Gateway ist das Bindeglied zwischen zwei Netzwerken – z. B. LAN und Internet."
    },
    {
      question: "Was bedeutet 'localhost'?",
      options: ["Der Router", "Das Internet", "Der eigene PC", "Ein Server im Rechenzentrum"],
      answer: 2,
      explanation: "'localhost' verweist immer auf den eigenen Computer – z. B. zum Testen von Servern."
    },
    {
      question: "Welche Taste öffnet den Task-Manager direkt?",
      options: ["Strg + Alt + Entf", "Alt + Tab", "Win + D", "Strg + Shift + Esc"],
      answer: 3,
      explanation: "'Strg + Shift + Esc' öffnet direkt den Task-Manager – schneller Shortcut!"
    },
    {
      question: "Wofür wird Port 21 verwendet?",
      options: ["HTTP", "FTP", "SMTP", "DNS"],
      answer: 1,
      explanation: "Port 21 ist der Standardport für FTP – File Transfer Protocol."
    },
    {
      question: "Was ist eine ISO-Datei?",
      options: ["Ein Backup-Ordner", "Ein Abbild einer CD/DVD", "Ein Antivirenprogramm", "Ein BIOS-Update"],
      answer: 1,
      explanation: "Eine ISO-Datei ist eine exakte Kopie eines Datenträgers – wie eine CD als Datei."
    },
    {
      question: "Was macht der Befehl 'cd ..'?",
      options: ["Löscht einen Ordner", "Wechselt ins nächste Verzeichnis", "Wechselt ins vorherige Verzeichnis", "Listet alle Dateien auf"],
      answer: 2,
      explanation: "'cd ..' bringt dich eine Ordner-Ebene höher im Dateisystem."
    },
    {
      question: "Was ist ein Ping-Test nützlich für?",
      options: ["Firewall-Einstellungen", "Verbindungsüberprüfung", "Speicherbereinigung", "Treiberaktualisierung"],
      answer: 1,
      explanation: "Ein Ping-Test prüft, ob ein Server oder eine Webseite erreichbar ist."
    }
  ];
  
  export default questions;