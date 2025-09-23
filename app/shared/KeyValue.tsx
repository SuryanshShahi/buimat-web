import clsx from "clsx";
import Text from "./heading/Text";

const KeyValue = ({
  label,
  value,
  className,
  styleLabel,
  styleValue,
}: {
  label: string;
  value: string;
  styleLabel?: string;
  styleValue?: string;
  className?: string;
}) => {
  return (
    <div className={clsx("flex justify-between", className)}>
      <Text size="sm" className={styleLabel}>
        {label}
      </Text>
      <Text size="sm" type="semibold" className={styleValue}>
        {value}
      </Text>
    </div>
  );
};

export default KeyValue;
