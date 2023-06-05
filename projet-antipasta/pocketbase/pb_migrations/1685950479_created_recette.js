migrate((db) => {
  const collection = new Collection({
    "id": "i7fuoabm95ckxfn",
    "created": "2023-06-05 07:34:39.479Z",
    "updated": "2023-06-05 07:34:39.479Z",
    "name": "recette",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "g0zambnk",
        "name": "NomRecette",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "wi8dphrk",
        "name": "Nb_Personnes",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "jduizfii",
        "name": "Favori",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "6wacusia",
        "name": "Ingredients",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "krovf2zs",
        "name": "Recette",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ogv76cue",
        "name": "Note",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 5
        }
      },
      {
        "system": false,
        "id": "nfve2sn3",
        "name": "Saison",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "Été",
            "Hiver",
            "Printemps",
            "Automne",
            "Toutes saisons"
          ]
        }
      },
      {
        "system": false,
        "id": "gp7nhwqk",
        "name": "Type",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "Entrée",
            "Plat",
            "Dessert"
          ]
        }
      },
      {
        "system": false,
        "id": "jhmewb9a",
        "name": "Duree",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 2,
          "values": [
            "70/15min",
            "15/30min",
            "30min/45min",
            "45min/1h",
            "1h/1h30",
            "+1h30"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("i7fuoabm95ckxfn");

  return dao.deleteCollection(collection);
})
