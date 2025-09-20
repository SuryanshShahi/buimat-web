import { clsx } from "clsx";
import { useRouter } from "next/navigation";
import Heading from "./heading";
import Img from "./Img";

const ProductTypes = ({
  data,
  className,
}: {
  data: { label: string; image: string }[];
  className?: string;
}) => {
  const router = useRouter();
  return (
    <div
      className={clsx("flex sm:gap-12 gap-5", className)}
    >
      {data.map((item, idx) => (
        <div
          className="space-y-2 min-w-[120px]"
          key={idx}
          onClick={() => router.push(`/products`)}
        >
          <div
            className={clsx(
              "flex flex-col justify-center items-center border bg-white rounded-full sm:h-[70px] sm:w-[70px] h-[50px] w-[50px] mx-auto"
            )}
          >
            <Img
              src={item.image}
              isLocal
              height={40}
              width={40}
              alt="hero"
              className="sm:h-10 sm:w-10 h-6 w-6"
            />
          </div>
          <Heading className="text-center sm:text-xs text-[10px] text-nowrap">
            {item.label}
          </Heading>
        </div>
      ))}
    </div>
  );
};

export default ProductTypes;
