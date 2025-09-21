import type { Project } from "@/types";
import { CodeIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { AstroIcon, JSONIcon, TailwindCSSIcon, TypeScriptIcon, VisualStudioCodeIcon } from "@/components/atoms/icons";

export const projects: Project[] = [
  {
    id: "la-casa-informatica",
    name: "La casa Informática",
    description:
      'Creé la página web para la academia de programación "La Casa Informática". Este proyecto buscaba informar y atraer a nuevos estudiantes.',
    bannerUrl: "/poster/web.svg",
    stackTech: [<AstroIcon />, <TailwindCSSIcon />, <TypeScriptIcon />],
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
    name: "Extension para VSC",
    description:
      "Colección de snippets para React, Typescript y Javascript que busca impulsar tu productividad en desarrollo web con atajos modernos.",
    bannerUrl: "/poster/speed.svg",
    stackTech: [<VisualStudioCodeIcon />, <JSONIcon />],
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
