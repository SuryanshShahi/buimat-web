import Img from "../shared/Img";

export const emptyState = {
  title: "No Data found",
  subtitle:
    "Your search “Landing page design” did not match any projects. Please try again.",
  icon: (
    <Img
      height={118}
      width={152}
      alt=""
      isLocal
      src="/images/icons/emptyState.png"
    />
  ),
  btnProps: {
    btnName: "Go Back",
  },
};
