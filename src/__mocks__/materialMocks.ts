import { Material } from "../components/Layers/layers.types";

export const mockMaterials: Material[] = [
  { id: "0", name: "Selecteaza", price: 0 },
  {
    id: "SBT650",
    name: "Sika bituseal T -650 MG HR (-15C)- 5 KG GREY SSH E 55 MG RO 5 KG",
    price: 20.46,
    color: "red",
  },
  {
    id: "ATV2",
    name: "Amorsa Titanol V 2 euro/kg N/A",
    price: 14.1,
    color: "green",
  },
  {
    id: "BIT-VB40",
    name: "Bariera de vapori Sika BIT VB 40-20 GF STRIPES SikaShield VMS E63 PE RO 4 mm",
    price: 21.3,
    color: "yellow",
  },
  {
    id: "SBT240",
    name: "Sika bituseal T -240 PG HR (-10C)- 4 KG SSH P45 PE 4 MM",
    price: 17.4,
    color: "blue",
  },
  {
    id: "SBT540",
    name: "Sika bituseal T -540 PG HR (-15C)- 4 KG SSH E 55 PE 4 MM",
    price: 22.8,
    color: "black",
  },
  { id: "PEPS150", name: "Polistiren eps150", price: 85, color: "gray" },
];

export const mockMaterialOptions = mockMaterials.map((material) => ({
  value: material.id,
  title: material.name,
}));
