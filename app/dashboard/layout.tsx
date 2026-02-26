import AdminPage from "@/core/components/templates/AdminPage";
import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return <AdminPage>{children}</AdminPage>;
};

export default layout;
