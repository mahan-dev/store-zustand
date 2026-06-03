import { signIn } from "next-auth/react";
import { signinFormHandler } from "@/helper/AuthFormRegister/signinHandler";
import { toast } from "sonner";

jest.mock("next-auth/react");
jest.mock("sonner");

it("should show error toast", async () => {
  const setLoading = jest.fn();
  const router = {
    replace: jest.fn(),
  };

  (signIn as jest.Mock).mockResolvedValue({
    error: "invalid credentials",
  });

  await signinFormHandler({
    email: "something@gmail.com",
    password: "wrong",
    setLoading,
    router: router as any,
  });

  expect(toast.error).toHaveBeenCalledWith(
    "invalid credentials",
    expect.any(Object),
  );

  expect(router.replace).not.toHaveBeenCalled();
});
