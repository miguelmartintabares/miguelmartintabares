
import {writable} from 'svelte/store'

import img1 from "../img/combo_img1.png"
import img2 from "../img/combo_img2.png"
import img3 from "../img/combo_img3.png"
import img4 from "../img/combo_img4.png"
import img5 from "../img/combo_img5.png"
import img6 from "../img/combo_img6.jpg"
import img7 from "../img/combo_img7.jpg"


export let products = writable( [
  {
    "id": 9,
    "numerocombo": "9",
    "infocombo": "Caja de 6 unidades",
    "precio": 860,
    "img": img6,
  },
  {
    "id": 10,
    "numerocombo": "8",
    "infocombo": "Caja de 6 unidades",
    "precio": 560,
    "img": img7,
  },
    {
      "id": 1,
      "numerocombo": "1",
      "infocombo": "Caja de 6 unidades",
      "precio": 960,
      "img": img1,
    },
    {
      "id": 2,
      "numerocombo": "2",
      "infocombo": "Caja de 12 unidades",
      "precio": 1630,
      "img": img2,
    },
    {
      "id": 3,
      "numerocombo": "3",
      "infocombo": "Caja de 6 unidades",
      "precio": 500,
      "img": img3,
    },
    {
      "id": 4,
      "numerocombo": "4",
      "infocombo": "Caja de 6 unidades",
      "precio": 600,
      "img": img4,
    },
    {
      "id": 5,
      "numerocombo": "5",
      "infocombo": "Caja de 6 unidades",
      "precio": 910,
      "img": img1,
    },
    {
      "id": 6,
      "numerocombo": "6",
      "infocombo": "Caja de 12 unidades",
      "precio": 1920,
      "img": img2,
    },
    {
      "id": 7,
      "numerocombo": "7",
      "infocombo":  "Caja de 6 unidades",
      "precio": 960,
      "img": img3,
    },
    // {
    //   "id": 8,
    //   "numerocombo": "8",
    //   "infocombo": "Aca va la info del combo",
    //   "precio": 560,
    //   "img": img4,
    // },
    {
      "id": 8,
      "numerocombo": "8",
      "infocombo": "Caja de 6 unidades",
      "precio": 1920,
      "img": img5,
    }
   
  ])
