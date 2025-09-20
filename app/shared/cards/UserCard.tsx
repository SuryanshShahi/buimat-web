import Img from "@/app/shared/Img";
import clsx from "clsx";
import { FC, PropsWithChildren, ReactNode } from "react";
import Heading from "../heading";
import Text from "../heading/Text";

export interface IUserCard {
  className?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  image?: ReactNode;
  type?: "vertical" | "horizontal";
  styleTitle?: string;
  styleSubtitle?: string;
  styleImage?: string;
  imageWrapperClass?: string;
  onClick?: () => void;
  showInitials?: boolean;
}

const UserCard: FC<PropsWithChildren<IUserCard>> = ({
  title,
  subtitle,
  image,
  className,
  children,
  type = "horizontal",
  styleTitle,
  styleSubtitle,
  styleImage,
  onClick,
  imageWrapperClass,
  showInitials,
}) => {
  const renderImage = () => {
    if (typeof image === "string") {
      return (
        <div
          className={clsx(
            "relative",
            type === "vertical" &&
              "h-16 w-16 border-2 rounded-full flex justify-center items-center",
            imageWrapperClass
          )}
        >
          <Img
            src={image}
            height={160}
            width={160}
            className={clsx(
              "rounded-full self-center",
              type === "vertical" ? "h-[56px] w-[56px]" : "h-10 w-10",
              styleImage
            )}
            alt={title as string}
            isLocal
          />
        </div>
      );
    }

    if (image) return image;

    if (showInitials && typeof title === "string") {
      return (
        <div
          className={clsx(
            "relative",
            type === "vertical" &&
              "h-16 w-16 border-2 border-brand rounded-full flex justify-center items-center",
            imageWrapperClass
          )}
        >
          <div
            className={clsx(
              "rounded-full self-center bg-brand-primary uppercase text-brand-tertiary flex justify-center items-center border border-brand-secondary",
              type === "vertical" ? "h-[54px] w-[54px]" : "h-10 w-10",
              styleImage
            )}
          >
            {title.charAt(0)}
          </div>
        </div>
      );
    }

    return null;
  };

  const renderTextContent = () => {
    if (!title && !subtitle) return null;

    return (
      <div className="space-y-1">
        {title && (
          <Heading
            variant="primary"
            className={clsx("text-sm", styleTitle)}
            type={type === "horizontal" ? "semibold" : "medium"}
          >
            {title}
          </Heading>
        )}
        {subtitle &&
          (typeof subtitle === "string" ? (
            <Text
              size="xs"
              variant={type === "horizontal" ? "secondary" : "tertiary"}
              className={styleSubtitle}
            >
              {subtitle}
            </Text>
          ) : (
            subtitle
          ))}
      </div>
    );
  };

  return (
    <div
      className={clsx(
        "flex items-center",
        type === "vertical" ? "flex-col gap-y-[6px]" : "gap-x-3",
        className,
        onClick && "cursor-pointer"
      )}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={() => {}}
    >
      {renderImage()}
      {renderTextContent()}
      {children}
    </div>
  );
};

export default UserCard;
