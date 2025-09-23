import CardWrapper from "@/app/shared/cards/CardWrapper";
import Divider from "@/app/shared/divider";
import Heading from "@/app/shared/heading";
import Text from "@/app/shared/heading/Text";
import { SvgPiggyBank, SvgSecurity } from "@/app/svgs";
import { tw } from "@/tailwind.config";
import { Fragment } from "react";

const ProtectionCard = () => {
  const protection = [
    {
      label: "Secure payments",
      description:
        "Every payment you make on BUIMAT is secured with strict SSL encryption and PCI DSS data protection protocols",
      icon: (
        <SvgSecurity
          fill={tw.textColor["brand-tertiary"]}
          height={20}
          width={20}
        />
      ),
    },
    {
      label: "Standard refund policy",
      description:
        "Claim a refund if your order doesn't ship, is missing, or arrives with product issues",
      icon: (
        <SvgPiggyBank
          fill={tw.textColor["brand-tertiary"]}
          height={20}
          width={20}
        />
      ),
    },
  ];
  return (
    <CardWrapper className="space-y-4 shadow-card">
      <Heading type="bold">Protection for this product</Heading>
      {protection.map((item, idx) => (
        <Fragment key={idx}>
          <div className="space-y-4">
            <div className="flex items-center gap-x-1">
              {item.icon}
              <Heading className="text-sm">{item.label}</Heading>
            </div>
            <Text size="sm" variant="tertiary">
              {item.description}
            </Text>
          </div>
          {idx !== 1 && <Divider />}
        </Fragment>
      ))}
    </CardWrapper>
  );
};

export default ProtectionCard;
