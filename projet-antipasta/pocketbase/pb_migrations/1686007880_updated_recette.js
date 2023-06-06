migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7fuoabm95ckxfn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "81ns9fby",
    "name": "Saisons",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7fuoabm95ckxfn")

  // remove
  collection.schema.removeField("81ns9fby")

  return dao.saveCollection(collection)
})
