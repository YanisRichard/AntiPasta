migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7fuoabm95ckxfn")

  // remove
  collection.schema.removeField("nfve2sn3")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7fuoabm95ckxfn")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
