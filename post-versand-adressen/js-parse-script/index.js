const fs = require("fs");
const csvParser = require("csv-parser");
const { stringify } = require("csv-stringify");


const writableStream = fs.createWriteStream('../hochschul-addressen_oeffentlich-rechtlich_sortiert_studierende.csv');

const importColumns = [
  "nr",
  "Hochschulkurzname",
  "Hochschulname",
  "Hochschultyp",
  "Trägerschaft",
  "Bundesland",
  "AnzahlStudierende",
  "Gründungsjahr",
  "Promotionsrecht",
  "Habilitationsrecht",
  "Straße",
  "Postleitzahl",
  "Ort",
  "Postfach",
  "Postleitzahl",
  "Ort",
  "Telefonvorwahl",
  "Telefon",
  "Fax",
  "HomePage",
  "MitgliedHRK"
];
const exportColumns = [
  "NAME",
  "ZUSATZ",
  "STRASSE",
  "NUMMER",
  "PLZ",
  "STADT",
  "LAND",
  "ADRESS_TYP",
  "REFERENZ"
];

const stringifier = stringify({ header: true, delimiter: ';', columns: exportColumns });

let result = [];

fs.createReadStream("../hochschul-addressen-raw.csv")
  .pipe(csvParser({ encoding: null }))
  .on("data", (data) => {
    //console.log('====================')
    if (data["Trägerschaft"] === 'öffentlich-rechtlich') {
      const [street, houseNumber] = seperateHouseNumberStreet(data["Straße"])
      const row = {
        "NAME": data['Hochschulname'],
        "ZUSATZ": "",
        "STRASSE": street,
        "NUMMER": houseNumber,
        "PLZ": data['Postleitzahl (Postanschrift)'] || data[ 'Postleitzahl (Hausanschrift)'],
        "STADT": data['Ort (Postanschrift)'] || data[ 'Ort (Hausanschrift)'],
        "LAND": "DEU",
        "ADRESS_TYP": "HOUSE",
        "REFERENZ": data['Anzahl Studierende'], //"CCS.2023.1",
      }
      result.push(row)
    }
  })
  .on("end", () => {
    result = result.sort((a, b) => b["REFERENZ"] - a["REFERENZ"]);
    result.unshift({
      "NAME": "Chaostreff Flensburg e.V.",
      "ZUSATZ": "",
      "STRASSE": "Apenrader Str.",
      "NUMMER": "49",
      "PLZ": "24939",
      "STADT": "Flensburg",
      "LAND": "DEU",
      "ADRESS_TYP": "HOUSE",
      "REFERENZ": "Abbsender"
    })
    //console.log('result', result[2])
    result.forEach((row) => {
      stringifier.write(row);
    })
    stringifier.pipe(writableStream);
    console.log("Finished writing data");
  });

function seperateHouseNumberStreet(streetAndNumber) {
  const streetAndNumberArray = streetAndNumber.split(' ')
  if(streetAndNumberArray.length === 1) return [streetAndNumber, '']
  const houseNumber = streetAndNumberArray[streetAndNumberArray.length - 1]
  const street = streetAndNumberArray.slice(0, streetAndNumberArray.length - 1).join(' ')
  return [street, houseNumber]
}