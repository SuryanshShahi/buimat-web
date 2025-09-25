import clsx from "clsx";
import Img from "../Img";
import Text from "../heading/Text";

const ProductCardHorizontal = ({
  data,
  className,
}: {
  data: { title: string; subtitle: string; image: string };
  className?: string;
}) => {
  return (
    <div className={clsx("flex gap-x-4", className)}>
      <Img
        src={data?.image}
        alt=""
        height={90}
        width={90}
        isLocal
        className="sm:h-[90px] sm:min-w-[90px] rounded-lg"
      />
      <div className="space-y-1">
        <Text size="sm" className="line-clamp-2">
          {data?.title}
        </Text>
        <Text size="sm" variant="tertiary">
          {data?.subtitle}
        </Text>
      </div>
    </div>
  );
};

export default ProductCardHorizontal;
