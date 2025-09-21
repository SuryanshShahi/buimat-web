import { TbRefresh } from "react-icons/tb";
import Button from "../buttons/Button";
import Heading from "../heading";
import Text from "../heading/Text";

const Faqs = () => {
  return (
    <>
      <Heading type="bold">Question & Answers</Heading>
      {Array(3)
        .fill({
          label: "Are you a trade company or a manufacturer?",
          value:
            "We are a more than ten year experience and owned CE,CCC,SGS,ISO approved Manufacturer.",
        })
        .map((item, idx) => (
          <div key={idx} className="space-y-1">
            <Heading type="medium" className="text-sm">
              Q: {item.label}
            </Heading>
            <Text size="sm" variant="tertiary">
              <span className="font-medium">A:</span> {item.value}
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

export default Faqs;
