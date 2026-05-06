import { formInterface } from "@/templates/SettingsPage";
import axios from "axios";
import { toast } from "sonner";
import { todoPosition } from "@/helper/payHandler";

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
    toast.error("cannot be empty !", todoPosition);
    return;
  }
  try {
    const { status, data }: FetchResponse = await axios.patch(
      "/api/password",
      form,
    );

    if (status === 200) {
      toast.success(data.message, todoPosition);
      return;
    }
  } catch (error) {
    if (error.status === 400) {
      toast.error("enter a valid information", todoPosition);
      return;
    }
    toast.error("something went wrong", todoPosition);
  }
};
