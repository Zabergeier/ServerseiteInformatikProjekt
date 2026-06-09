<h1> Dokumentation meines Informatikprojekts</h1>

<h2>Zielsetzung</h2>

Ein kleines Webinterface mit welchem man einen Roboter steuern kann. Dieser hat grundsätzlich die Option zu fahren, und über die Drehzahl der Motoren sich nach Rechts und nach Links zu bewegen. Weitere Funktionalität kann, dann hinzugefügt werden,

<h2>Inhalt</H2>

- System/Gesamtarchitektur

1 Datenbank
1 Webserver
1 Statischen Webserver
1 Mqttbroker
1 Mainprozessor(STM32)
1 Coprozessor(ESP-32 C3 super mini)

Verwendete IDEs:

Visual Studio Code
    -> PlatformIO
LENS

- Datenbankstruktur
USER 1 -> N ROBOTER

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

