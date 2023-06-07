migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7fuoabm95ckxfn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ctbci2ye",
    "name": "Recette2",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e3z5z5gj",
    "name": "Recette3",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cv2ydilh",
    "name": "Recette4",
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
  collection.schema.removeField("ctbci2ye")

  // remove
  collection.schema.removeField("e3z5z5gj")

  // remove
  collection.schema.removeField("cv2ydilh")

  return dao.saveCollection(collection)
})
