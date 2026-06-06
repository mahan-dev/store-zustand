import { dataFetcher } from "@/helper/ProductFetcher";

export const searchQuery = async (debounceValue: string) => {

  const receivedData = await dataFetcher();

  if (debounceValue.trim().length > 0) {
    const getItem = receivedData.filter((item) =>
      item.title.toLowerCase().includes(debounceValue.toLowerCase()),
    );
    return getItem;
  } else {
    return [];
  }
};
