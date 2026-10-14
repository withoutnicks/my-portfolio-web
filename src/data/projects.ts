import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "la-casa-informatica",
    name: "La Casa Informática",
    description:
      'Creé la página web para la academia de programación "La Casa Informática". Este proyecto buscaba informar y atraer a nuevos estudiantes.',
    stack: ["Astro", "Tailwind CSS", "TypeScript"],
    links: [
      { text: "Repositorio", href: "https://github.com/withoutnicks/landing-la-casa-informatica" },
      { text: "Ver Sitio", href: "https://lacasainformatica.com/" },
    ],
    bannerUrl: "/poster/web.svg",
  },
  {
    id: "extension-for-vsc",
    name: "Extensión para VSC",
    description:
      "Colección de snippets para React, TypeScript y JavaScript que busca impulsar tu productividad en desarrollo web con atajos modernos.",
    stack: ["VS Code", "JSON"],
    links: [
      { text: "Repositorio", href: "https://github.com/withoutnicks/react-and-js-snippets" },
      { text: "Ver Sitio", href: "https://react-and-js-snippets.vercel.app/" },
    ],
    bannerUrl: "/poster/speed.svg",
  },
];
