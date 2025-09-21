import { FaStar } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { TbRefresh } from "react-icons/tb";
import Button from "../buttons/Button";
import UserCard from "../cards/UserCard";
import Chip from "../Chip";
import Heading from "../heading";
import Text from "../heading/Text";

const RatingReviews = () => {
  return (
    <>
      <Heading type="bold">Rating & Reviews</Heading>
      <div className="flex items-center gap-x-2 text-2xl">
        <FaStar className="text-brand-tertiary" />
        <Heading type="bold">4.5 / 5 (97)</Heading>
      </div>
      <div className="flex sm:gap-4 gap-3 flex-wrap">
        <Chip title="All" className="rounded-full !px-3" />
        <Chip title="With Photos & Videos" className="rounded-full !px-3" />
        <Chip
          title="Most Recent"
          className="rounded-full !pl-3 !pr-2"
          image={<IoIosArrowDown className="order-last" />}
        />
      </div>
      {Array(3)
        .fill(null)
        .map((_, idx) => (
          <div className="space-y-2" key={idx}>
            <UserCard title="Suryansh" subtitle="Nov 12" showInitials>
              <div className="flex items-center gap-x-1 ml-auto">
                <FaStar className="text-brand-tertiary" />
                <Heading type="bold">4</Heading>
              </div>
            </UserCard>
            <Text size="sm" variant="tertiary" className="ml-[53px]">
              Very professional tile supplier, my project went very smoothly,
              for different projects they also give me different programs and
              suggestions, thank you very much
            </Text>
          </div>
        ))}
      <Button
        btnName="Load More"
        styleBtnName="text-sm"
        variant="tertiary-link"
        icon={<TbRefresh />}
        className="ml-auto"
        iconFirst
      />
    </>
  );
};

export default RatingReviews;
