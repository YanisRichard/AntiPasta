migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9v0ughi6q51vd1q")

  // remove
  collection.schema.removeField("c3ezsh7c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pozbqxff",
    "name": "MotDePasse",
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
  const collection = dao.findCollectionByNameOrId("9v0ughi6q51vd1q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c3ezsh7c",
    "name": "MotDePasse",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("pozbqxff")

  return dao.saveCollection(collection)
})
