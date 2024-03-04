import { component$, useStylesScoped$, Slot } from "@builder.io/qwik";
import styles from './button.css?inline'

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  color?: "white" | "black" | "danger" | "transparent" | "primary";
}
export const Button = component$<ButtonProps>(({ size = "medium" , color = "primary" }) => {
  useStylesScoped$(styles);
  return (
    <button
      class={{
        [`size-${size}`]: true,
        [`color-${color}`]: true,
      }}
    >
      <Slot></Slot>
    </button>
  );
});
