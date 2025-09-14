import classNames from "classnames";
import { ReactNode } from "react";

export interface HeadingProps {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
  type?: "normal" | "medium" | "semibold" | "bold" | "extrabold";
  variant?: string;
}

const Heading = ({
  children,
  className,
  as: Component = "p",
  type = "semibold",
  variant = "primary",
  ...props
}: HeadingProps) => {
  return (
    <div
      className={classNames(`font-${type}`, `text-${variant}`, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Heading;
