import { writable } from 'svelte/store';
export const mapConfig = writable({
  "title": "Are Europeans generally satisfied with their lives?",
  "subtitle": "Most Europeans are fairly content with their lives, especially Austrians, Dutch and Danes, but some countries are doing worse...",
  "colourSchemeClasses": 7,
  "data": "country,id,value,extraInfo,text_content\nAustria,AT,6.5,false,\nNetherlands,NL,6.3,false,\nDenmark,DK,6.3,false,\nGermany,DE,6.2,false,\nSpain,ES,6.2,false,\nIreland,IE,6.2,false,\nCzechia,CZ,6.2,false,\nLuxembourg,LU,6.2,false,\nFinland,FI,6.2,false,\nBelgium,BE,5.9,false,\nMalta,MT,5.8,false,\nSweden,SE,5.8,false,\nLithuania,LT,5.8,false,\nFrance,FR,5.8,false,\nRomania,RO,5.7,false,\nBulgaria,BG,5.6,false,\nCyprus,CY,5.6,false,\nSlovenia,SI,5.6,false,\nPortugal,PT,5.5,false,\nItaly,IT,5.5,false,\nPoland,PL,5.5,false,\nSlovakia,SK,5.4,false,\nCroatia,HR,5.1,false,\nLatvia,LV,5.1,false,\nHungary,HU,5.0,false,\nEstonia,EE,5.0,false,\nGreece,EL,4.5,false,",
  "parsedData": [
    {
      "country": "Austria",
      "id": "AT",
      "value": 6.5,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Netherlands",
      "id": "NL",
      "value": 6.3,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Denmark",
      "id": "DK",
      "value": 6.3,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Germany",
      "id": "DE",
      "value": 6.2,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Spain",
      "id": "ES",
      "value": 6.2,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Ireland",
      "id": "IE",
      "value": 6.2,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Czechia",
      "id": "CZ",
      "value": 6.2,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Luxembourg",
      "id": "LU",
      "value": 6.2,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Finland",
      "id": "FI",
      "value": 6.2,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Belgium",
      "id": "BE",
      "value": 5.9,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Malta",
      "id": "MT",
      "value": 5.8,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Sweden",
      "id": "SE",
      "value": 5.8,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Lithuania",
      "id": "LT",
      "value": 5.8,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "France",
      "id": "FR",
      "value": 5.8,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Romania",
      "id": "RO",
      "value": 5.7,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Bulgaria",
      "id": "BG",
      "value": 5.6,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Cyprus",
      "id": "CY",
      "value": 5.6,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Slovenia",
      "id": "SI",
      "value": 5.6,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Portugal",
      "id": "PT",
      "value": 5.5,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Italy",
      "id": "IT",
      "value": 5.5,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Poland",
      "id": "PL",
      "value": 5.5,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Slovakia",
      "id": "SK",
      "value": 5.4,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Croatia",
      "id": "HR",
      "value": 5.1,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Latvia",
      "id": "LV",
      "value": 5.1,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Hungary",
      "id": "HU",
      "value": 5,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Estonia",
      "id": "EE",
      "value": 5,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Greece",
      "id": "EL",
      "value": 4.5,
      "extraInfo": false,
      "text_content": ""
    }
  ],
  "datasetType": "values",
  "datasetUnit": "fullNumbers",
  "percentRounded": false,
  "colourSchemeType": "sequential",
  "colourScheme": "red-purple",
  "colourSchemeReverse": false,
  "headlineAvailable": true,
  "subheadlineAvailable": true,
  "tooltipAvailable": true,
  "scaleBarAvailable": true,
  "overrideScaleValues": false,
  "legendAvailable": true,
  "textSourceAvailable": true,
  "textSourceDescription": "Source",
  "textSource": "European Foundation for the Improvement of Living and Working Conditions",
  "textNoteAvailable": true,
  "textNoteDescription": "Note",
  "textNote": "Source: Living and Working in the EU e-survey, Spring 2024. \nOn a scale from 1-10.",
  "textDataAccessAvailable": true,
  "linkDataAccessDescription": "Access the data",
  "linkDataAccess": "https://www.eurofound.europa.eu/en/surveys-and-data/data-catalogue/life-satisfaction-rating-country-eu-member-states-and-eu-2024-scale-1-10",
  "legend1": "No data available",
  "legend1Color": "#E0E0E0",
  "colorBarFirstValue": "",
  "colorBarLastValue": "",
  "customUnitLabelAvailable": false,
  "customUnitLabel": "",
  "tooltipExtraInfoLabel": "Click here",
  "translate": {
    "title": "Are Europeans generally satisfied with their lives?",
    "subtitle": "Most Europeans are fairly content with their lives, especially Austrians, Dutch and Danes, but some countries are doing worse...",
    "textNoteDescription": "Note",
    "textNote": "Source: Living and Working in the EU e-survey, Spring 2024. \nOn a scale from 1-10.",
    "textSourceDescription": "Source",
    "textSource": "European Foundation for the Improvement of Living and Working Conditions",
    "linkDataAccessDescription": "Access the data",
    "legend1": "No data available",
    "tooltipExtraInfoLabel": "Click here"
  },
  "clusters": [],
  "colorScale": null
});