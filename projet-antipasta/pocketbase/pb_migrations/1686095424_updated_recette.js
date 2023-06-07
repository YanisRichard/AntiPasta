migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i7fuoabm95ckxfn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lnhuilbg",
    "name": "Recette5",
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
    "id": "hiyhttth",
    "name": "Recette6",
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
    "id": "3nbjq44s",
    "name": "Recette7",
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
    "id": "zrliruqh",
    "name": "Recette8",
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
    "id": "vc50ochh",
    "name": "Recette9",
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
  collection.schema.removeField("lnhuilbg")

  // remove
  collection.schema.removeField("hiyhttth")

  // remove
  collection.schema.removeField("3nbjq44s")

  // remove
  collection.schema.removeField("zrliruqh")

  // remove
  collection.schema.removeField("vc50ochh")

  return dao.saveCollection(collection)
})
