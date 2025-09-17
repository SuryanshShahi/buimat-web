import clsx from "clsx";
import { InputHTMLAttributes } from "react";
interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  styleLabel?: string;
  wrapperClass?: string;
  errorMessage?: string;
}
const Checkbox = ({
  label,
  styleLabel,
  className,
  wrapperClass,
  errorMessage,
  ...rest
}: ICheckbox) => {
  return (
    <>
      <div className={clsx("flex gap-x-2", wrapperClass)}>
        <input className={clsx("", className)} {...rest} />
        {label && (
          <label className={clsx("text-secondary text-sm", styleLabel)}>
            {label}
          </label>
        )}
      </div>
      {errorMessage && (
        <div className="text-xs text-red-600">{errorMessage}</div>
      )}
    </>
  );
};

export default Checkbox;
