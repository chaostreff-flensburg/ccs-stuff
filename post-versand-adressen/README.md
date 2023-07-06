# Post Versand Adressen
Quelle von `hochschul-addressen-raw.csv`
https://www.hochschulkompass.de/hochschulen/downloads.html

## Verwndung .csv adressen bei dhl

1) https://shop.deutschepost.de/
2) Großbrief auswählen -> Weiterleitung auf Internetmarke erstellen
3) -> Absender und Empfänger hinzufügen
4) CSV Import
5) Datei auswählen -> Datei hochladen
6) Import sollte jetzt mit richtigen encoding klappen
7) richtigen labeldrucker auswählen (beim pdf ausgabe format)
8) label drucken
9) erfolg

Formatting der CSV für keine Encoding Probleme: Windows 1252


## js-parse-script
Kleines Node.js Script mit dem die `hochschul-addressen-raw.csv` auf DHL Adressen formtiert werden können und gefilter werden können.

Vorraussetzunge zum Benutzen installation von Node.js auf dem Rechner z.B. Version v19.6.1.

Im Ordner
```
npm i
``` 

Ausführen
```
node index.js
```
