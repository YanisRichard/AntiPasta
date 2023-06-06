/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Profil = "profil",
	Recette = "recette",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ProfilRecord = {
	Prenom?: string
	Nom?: string
	RecetteProposee?: RecordIdString[]
	PhotoProfil?: string
	Mail?: string
	MotDePasse?: string
}

export enum RecetteTypeOptions {
	"Entrée" = "Entrée",
	"Plat" = "Plat",
	"Dessert" = "Dessert",
}

export enum RecetteDureeOptions {
	"70/15min" = "70/15min",
	"15/30min" = "15/30min",
	"30min/45min" = "30min/45min",
	"45min/1h" = "45min/1h",
	"1h/1h30" = "1h/1h30",
	"+1h30" = "+1h30",
}
export type RecetteRecord = {
	NomRecette?: string
	Nb_Personnes?: number
	Favori?: boolean
	Ingredients?: string
	Recette?: string
	Note?: number
	Type?: RecetteTypeOptions[]
	Duree?: RecetteDureeOptions[]
	CreePar?: RecordIdString
	PhotoRecette?: string
	Saisons?: string
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ProfilResponse<Texpand = unknown> = Required<ProfilRecord> & BaseSystemFields<Texpand>
export type RecetteResponse<Texpand = unknown> = Required<RecetteRecord> & BaseSystemFields<Texpand>
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	profil: ProfilRecord
	recette: RecetteRecord
	users: UsersRecord
}

export type CollectionResponses = {
	profil: ProfilResponse
	recette: RecetteResponse
	users: UsersResponse
}