export const emailFormatter = (email: string) => {
  const formatted = email.split("@")[0];
  return formatted;
};
