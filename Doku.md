<h1> Dokumentation meines Informatikprojekts</h1>

<h2>Zielsetzung</h2>

Ein kleines Webinterface mit welchem man einen Roboter steuern kann. Dieser hat grundsätzlich die Option zu fahren, und über die Drehzahl der Motoren sich nach Rechts und nach Links zu bewegen. Weitere Funktionalität kann, dann hinzugefügt werden,

<h2>Inhalt</H2>

- System/Gesamtarchitektur

- Datenbankstruktur

- Cloudarchitektur

- Hardwarearchitektur

MQTT Topic Struktur:

/user/{userid}/robot/{robotid}/drive

{
    rightMotor: Speed
    leftMotor: Speed
}


------------

<h2>Systemarchitektur</h2>

