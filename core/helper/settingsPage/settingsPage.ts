import { formInterface } from "@/templates/SettingsPage";
import axios from "axios";
import { toast } from "sonner";

const position = "top-center";

interface FetchResponse {
  data: {
    status: string;
    message: string;
  };
  status: number;
}

export const settingsHandler = async (form: formInterface) => {
  const { email, currentPassword, newPassword } = form;
  if (email === "" || currentPassword === "" || newPassword === "") {
    toast.error("cannot be empty !", { position: position });
    return;
  }
  try {
    const { status, data }: FetchResponse = await axios.patch(
      "/api/password",
      form,
    );

    if (status === 200) {
      toast.success(data.message, { position: position });
      return;
    }
  } catch (error) {
    if (error.status === 400) {
      toast.error("enter a valid information", { position: position });
      return;
    }
    toast.error("something went wrong", { position: position });
  }
};
