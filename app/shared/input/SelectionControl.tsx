import clsx from "clsx";
import { InputHTMLAttributes } from "react";
interface ISelectionControl extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  styleLabel?: string;
  wrapperClass?: string;
  errorMessage?: string;
  type: "radio" | "checkbox";
}
const SelectionControl = ({
  label,
  styleLabel,
  className,
  wrapperClass,
  errorMessage,
  type,
  ...rest
}: ISelectionControl) => {
  return (
    <>
      <div className={clsx("flex gap-x-2 cursor-pointer", wrapperClass)}>
        <input
          className={clsx("h-4 min-w-4 mt-[2px] cursor-pointer", className)}
          type={type}
          {...rest}
        />
        {label && (
          <label
            className={clsx(
              "text-secondary text-sm cursor-pointer",
              styleLabel
            )}
          >
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

export default SelectionControl;
