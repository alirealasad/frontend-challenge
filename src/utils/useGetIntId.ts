import { useRouter } from "next/router";

export const useGetIntId = () => {
  const router = useRouter();

  const intId =
    typeof router.query.gtin === "string" ? parseInt(router.query.gtin) : -1;

  return intId;
};
