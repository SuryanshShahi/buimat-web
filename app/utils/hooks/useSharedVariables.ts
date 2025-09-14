import { useSearchParams } from "next/navigation";

export default function useSharedVariables() {
  const searchParams = useSearchParams();
  const queryParams = Object.fromEntries(searchParams.entries());

  return {
    queryParams,
  };
}
