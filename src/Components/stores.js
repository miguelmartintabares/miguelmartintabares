import { writable } from "svelte/store";

export let products = writable([])  // este es la variable para cargar los products de la base de datos
export let itemInCard = writable(false)

export const user = writable({})
export const isUserLogin = writable(false)