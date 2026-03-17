import clsx from "clsx";

export default function Button({ variant = "primary", className, ...props }) {
  return (
    <button
      className={clsx(
        variant === "primary" && "btn-primary",
        variant === "secondary" && "btn-secondary",
        variant === "ghost" && "btn-ghost",
        className
      )}
      {...props}
    />
  );
}