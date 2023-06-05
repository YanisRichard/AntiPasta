migrate((db) => {
  const collection = new Collection({
    "id": "9v0ughi6q51vd1q",
    "created": "2023-06-05 07:37:02.091Z",
    "updated": "2023-06-05 07:37:02.091Z",
    "name": "profil",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qgdtkhe7",
        "name": "Prenom",
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
        "id": "ahhn240f",
        "name": "Nom",
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
        "id": "kvtkbjpu",
        "name": "RecetteProposee",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "i7fuoabm95ckxfn",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9v0ughi6q51vd1q");

  return dao.deleteCollection(collection);
})
