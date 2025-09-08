import type { Project } from "@/types";
import { CodeIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { AstroIcon, TailwindCSSIcon, VisualStudioCodeIcon } from "@/components/atoms/icons";

export const projects: Project[] = [
  {
    id: "la-casa-informatica",
    name: "La casa Informática",
    description:
      'Creé la página de inicio para la academia de programación "La Casa Informática". Esta página buscaba informar y atraer nuevos estudiantes.',
    bannerUrl: "/poster/web.svg",
    stackTech: [<AstroIcon />, <TailwindCSSIcon />],
    ctas: [
      {
        link: "https://github.com/withoutnicks/landing-la-casa-informatica",
        text: "Repository",
        variant: "secondary",
        icon: <CodeIcon />,
      },
      {
        link: "https://lacasainformatica.com/",
        text: "Visit",
        variant: "default",
        icon: <ExternalLinkIcon />,
      },
    ],
  } satisfies Project,
  {
    id: "extension-for-vsc",
    name: "Extension for VSC",
    description:
      "Colección de snippets para React, Typescript y Javascript que busca impulsar tu productividad en desarrollo web con atajos modernos.",
    bannerUrl: "/poster/speed.svg",
    stackTech: [<VisualStudioCodeIcon />],
    ctas: [
      {
        link: "https://github.com/withoutnicks/react-and-js-snippets",
        text: "Repository",
        variant: "secondary",
        icon: <CodeIcon />,
      },
      {
        link: "https://marketplace.visualstudio.com/items?itemName=wts-dev.wts-react-js-snippets",
        text: "Store",
        variant: "default",
        icon: <ExternalLinkIcon />,
      },
    ],
  } satisfies Project,
];
