import { CarouselItemType } from "../../components/common/Carousel/carousel.types";

export const ABOUT_US = [
  {
    title: "LespeziArt -Con",
    description:
      "Suntem o companie dedicată soluțiilor de înaltă calitate în domeniul acoperișurilor și hidroizolațiilor. Cu o vastă experiență, am contribuit la proiecte notabile, inclusiv acoperișul Facultății de Chimie, un proiect pe fonduri europene cu o valoare de 800,000 €, și acoperișul Spitalului de Urgență din Bistrița.",
    image: "/constructjs/assets/OIG.jpeg",
  },
  {
    title: "Echipa",
    description:
      "Suntem o echipa alcătuita in timp din persoane cu abilități si meserii diverse, împreună reușind sa ducem la bun sfârșit orice proiect la care am lucrat, rezultatele fiind mereu la o calitate superioara. Personalul este calificat , fiecare coleg având parte de instruire si certificare in domeniul izolațiilor hidrofuge.",
    image: "/constructjs/assets/OIG1.jpeg",
  },
  {
    title: "Deviza Noastra",
    description:
      "Am ales aceasta meserie conștienți ca este un domeniu unde nu există toleranta la greșeli, deoarece orice etapa a proiectului trebuie sa fie la 100% din capacitatea sa, orice greșeală fie si de un procent poate permite apei sa pătrundă in clădire riscând sa provoace daune si costuri considerabile. deviza noastră este: 99% nu este suficient !!!",
    image: "/constructjs/assets/OIG4.jpeg",
  },
];

export const CAROUSEL_ITEMS: CarouselItemType[] = [
  {
    id: 1,
    title: "Carousel item 1",
    longDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus libero, semper non est sed, tempus mattis dolor. Morbi eget urna interdum, dapibus arcu ac, faucibus lectus. Vestibulum vitae nunc lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nisi orci, sagittis tempus rhoncus vel, maximus nec leo. Pellentesque eu interdum odio. Aenean commodo a odio eget imperdiet.    ",
    shortDescription: "this is short description 1",
    imagePath: "/constructjs/assets/CAROUSEL1.jpeg",
  },
  {
    id: 2,
    title: "Carousel item 2",
    longDescription:
      "Sed et blandit nulla. Pellentesque sed ipsum vel neque malesuada lobortis ut ut augue. Vivamus vel orci mauris. Mauris tristique a turpis quis facilisis. Donec dolor dui, iaculis eget rhoncus eget, tincidunt in enim. Fusce quis mi vitae lorem consequat aliquam. Donec aliquam magna nec quam interdum, mattis dapibus est auctor. Maecenas in volutpat libero, vel malesuada nisi.    ",
    shortDescription:
      "this is short description 2, but a little longer to check how it affects component auto height this is short description 2, but a little longer to check how it affects component auto height",
    imagePath: "/constructjs/assets/CAROUSEL2.jpg",
  },
  {
    id: 3,
    title: "Carousel item 3",
    longDescription: "this is very long description THREE",
    shortDescription: "this is short description 3",
    imagePath: "/constructjs/assets/CAROUSEL3.jpeg",
  },
  {
    id: 4,
    title: "Carousel item 4",
    longDescription: "this is very long description FOUR",
    shortDescription: "this is short description 4",
    imagePath: "",
  },
];
