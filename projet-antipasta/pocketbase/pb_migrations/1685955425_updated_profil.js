migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9v0ughi6q51vd1q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "su9tbfuq",
    "name": "Mail",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9v0ughi6q51vd1q")

  // remove
  collection.schema.removeField("su9tbfuq")

  // remove
  collection.schema.removeField("c3ezsh7c")

  return dao.saveCollection(collection)
})
