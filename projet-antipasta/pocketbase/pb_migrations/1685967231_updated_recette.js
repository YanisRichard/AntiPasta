migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7fuoabm95ckxfn")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7fuoabm95ckxfn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6wacusia",
    "name": "Ingrediants",
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
})
