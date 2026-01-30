export const titleFormatter = (title: string) => {
  return title.split(" ", 2).join("").replace("-", "");
};
