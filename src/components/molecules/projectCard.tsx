import type { Project } from "@/types";
import { buttonVariants } from "@atoms/button";

interface ProjectCardProps extends Omit<Project, "id"> {}

export const ProjectCard = ({ name, description, bannerUrl, ctas, stackTech }: ProjectCardProps) => {
  return (
    <article className="group flex gap-6 md:justify-center md:even:flex-row-reverse">
      <picture className="hidden h-56 w-full max-w-80 overflow-hidden rounded-2xl bg-white/70 md:block">
        <img
          className="relative rounded-lg transition-all duration-500 group-hover:-translate-y-4"
          width={320}
          height={220}
          src={bannerUrl}
          alt={`$${name} banner`}
        />
      </picture>

      <div className="flex flex-col justify-center gap-2">
        <h3 className="text-xl font-space font-extrabold">{name}</h3>

        <p className="max-w-96 font-varela">{description}</p>

        <section className="my-2 flex gap-2 bg-zinc-100 w-fit rounded-lg p-2">
          {stackTech.map((techIcon, _) => techIcon)}
        </section>

        <section className="flex gap-2">
          {ctas.map((cta, _) => (
            <a
              className={`${buttonVariants({ variant: cta.variant })} inline-flex gap-2`}
              slot="actions-btn"
              href={cta.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta.text}
              {cta.icon}
            </a>
          ))}
        </section>
      </div>
    </article>
  );
};
