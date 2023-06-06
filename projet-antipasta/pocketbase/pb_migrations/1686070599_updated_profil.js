migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9v0ughi6q51vd1q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dzedomlo",
    "name": "profil",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9v0ughi6q51vd1q")

  // remove
  collection.schema.removeField("dzedomlo")

  return dao.saveCollection(collection)
})
