migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7fuoabm95ckxfn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dgvyad0h",
    "name": "CreePar",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "9v0ughi6q51vd1q",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7fuoabm95ckxfn")

  // remove
  collection.schema.removeField("dgvyad0h")

  return dao.saveCollection(collection)
})
