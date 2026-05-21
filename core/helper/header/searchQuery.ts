import { mockedData } from "@/api/mockedData";

export const searchQuery = async (debounceValue: string) => {
  if (debounceValue.trim().length > 0) {
    const getItem = mockedData.filter((item) =>
      item.title.toLowerCase().includes(debounceValue.toLowerCase()),
    );
    return getItem;
  } else {
    return [];
  }
};
