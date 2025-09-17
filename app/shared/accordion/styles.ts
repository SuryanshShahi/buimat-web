import clsx from 'clsx';

const styles = {
  accordion: (isFlex?: boolean) => `w-full ${isFlex && 'flex gap-2 flex-wrap'}`,
  accordionInner: (wrapperClass?: string) =>
    clsx(
      `mb-3 overflow-hidden rounded mx-auto !bg-background hover:shadow`,
      wrapperClass
    ),
  accordionInnerChild: clsx(
    'flex cursor-pointer items-center justify-between px-4 py-2 text-dark '
  ),
  accordionInnerPara: (labelClass?: string) =>
    clsx('text-lg font-medium', labelClass),
  accordionIcon: 'fill-[#3B82F6] w-6 h-6',
  accordionContent: 'animate-accordion overflow-hidden px-4 pb-2',
};
export default styles;
