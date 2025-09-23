import { SvgTruck } from "@/app/svgs";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import Button from "../buttons/Button";
import Heading from "../heading";
import Text from "../heading/Text";
import Img from "../Img";

const ProductCard = ({
  data,
  className,
  onClick,
}: {
  data: {
    title: string;
    discountPrice: string;
    price: string;
    unit: string;
    bottomText: string;
    image: string;
    styleImage?: string;
  };
  className?: string;
  onClick?: () => void;
}) => {
  const router = useRouter();
  return (
    <div
      className={clsx(
        "bg-white rounded-lg min-w-[245px] shadow-lg shadow-neutral-100 border border-gray-100 group cursor-pointer overflow-hidden",
        className
      )}
      onClick={onClick}
    >
      <div className="overflow-hidden rounded-t-lg relative">
        <Img
          src={data.image}
          alt={data.title}
          height={250}
          width={250}
          isLocal
          className={clsx(
            "object-cover sm:h-[250px] h-[200px] w-full group-hover:scale-110 transition-all duration-300",
            data.styleImage
          )}
        />
        <div className="absolute inset-0 bg-black/15 h-full w-full flex items-end justify-end p-2">
          <Button
            btnName="Ready to ship"
            icon={<SvgTruck fill="white" />}
            className="!bg-[#22303E]/65 hover:!bg-[#22303E] !py-1 !px-2 !text-xs !gap-x-[2px]"
            iconFirst
          />
        </div>
      </div>
      <div className="relative">
        <div className="p-4 space-y-2">
          <Text size="sm" className="line-clamp-2">
            {data.title}
          </Text>
          <div className="flex gap-x-2">
            <Heading className="text-sm">{data.discountPrice}</Heading>
            <Text size="sm" variant="tertiary" className="line-through">
              {data.price}
            </Text>
            <Text size="sm" variant="tertiary" className="mt-[2px]">
              {data.unit}
            </Text>
          </div>
          <Text size="sm" variant="tertiary">
            {data.bottomText}
          </Text>
        </div>
        <div className="group-hover:bottom-0 bottom-[-100%] absolute transition-all duration-300 w-full h-full bg-btn-primary p-4 flex flex-col justify-between">
          <Button
            btnName="Add to Cart"
            size="sm"
            className="!bg-brand-solid"
            fullWidth
            onClick={() => router.push("/cart")}
          />
          <Button
            btnName="Add to Compare"
            variant="secondary"
            size="sm"
            className="!bg-transparent"
            styleBtnName="text-white"
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
