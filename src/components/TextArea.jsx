import clsx from "clsx";

export default function TextArea({ className, ...props }) {
  return <textarea className={clsx("textarea", className)} {...props} />;
}