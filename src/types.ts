import { type VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./components/ui/button";

type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export type typeVariant = ButtonVariantProps["variant"];

export type typeSize = ButtonVariantProps["size"];
