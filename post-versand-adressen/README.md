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
7) richtigen labeldrucker auswählen (beim pdf ausgabe format) z.B. Brother -> endloslabel 102mm (ggf. erstmal schauen ob die Testdruck .csv soweit klappt) Brother DK-22243 Endlos-Etikett 102 mm
8) label drucken
9) erfolg

Formatting der CSV für keine Encoding Probleme: Windows 1252

Die erste nicht Kopfzeile sollte die eigene Adresse sein.

### Hohlen von .csv adressen für die Chaostreffs
Login bei doku.ccc.de machen.

Folgende seite aufrufen
https://doku.ccc.de/index.php?title=Spezial:Ask&x=-5B-5BChaostreff-2DActive%3A%3Awahr-5D-5D-20-5B-5BChaostreff-2DWants-2DMerchandise%3A%3Awahr-5D-5D-20-5B-5BChaostreff-2DDelivery-2DProvided%3A%3Awahr-5D-5D%2F-3FChaostreff-2DDelivery-2DName%3DRECV-5FNAME1%2F-3FChaostreff-2DDelivery-2DRemark%3DRECV-5FNAME2%2F-3FChaostreff-2DDelivery-2DAddress%3DRECV-5FSTREET%2F-3FChaostreff-2DDelivery-2DHousenumber%3DRECV-5FHOUSENUMBER%2F-3FChaostreff-2DDelivery-2DPostcode%3DRECV-5FPLZ%2F-3FChaostreff-2DDelivery-2DCity%3DRECV-5FCITY%2F-3FChaostreff-2DCountry%3DRECV-5FCOUNTRY%2F-3FChaostreff-2DConsumed-2DDatenschleudern%3DAMOUNT-5FEA&mainlabel=-&limit=100&order=asc&sort=Chaostreff-Delivery-City&offset=0&format=csv&headers=show&searchlabel=CSV&default=csv-query-error&sep=%3B&filename=post-versendung.csv

Dann das heruntergeladen .csv anpassen

1) Kopfzeile auf das Deutsche Post format ändern (siehe z.B. `hochschul-addressen_oeffentlich-rechtlich_sortiert_studierende.csv`)
2) Alle nicht Deutschen Spaces rauslöschen (ccs ist nur in Deutschland)
3) Land durch DEU ersetzen
4) ADRESS_TYP feld mit HOUSE füllen
5) Die erste nicht Kopfzeile sollte die eigene Adresse sein.


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
