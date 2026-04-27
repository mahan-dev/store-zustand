export const checkConnection = async (): Promise<"offline" | "online"> => {
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=1", {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) return "offline";
    return "online";
  } catch (error) {
    console.log(error);
    return "offline";
  }
};
