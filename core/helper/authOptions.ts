import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb from "@/utils/mongoDb";
import UserModel from "../models/userModel";
import { verifyPassword } from "../utils/auth";

interface UserCredentials {
  email: string;
  password: string;
}

const authSecret = process.env.NEXTAUTH_SECRET;

export const authOptions: AuthOptions = {
  secret: authSecret,

  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60 * 24, //1 Day
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize: async (credentials: UserCredentials): Promise<User | null> => {
        const { email, password } = credentials;
        try {
          await connectDb();
        } catch (error) {
          throw new Error("Database connection failed");
        }
        if (!email || !password)
          throw new Error("Please enter a valid information");

        const User = await UserModel.findOne({ email });
        if (!User) throw new Error("please create an account first");

        const hashPassword = User.password;
        const isValid = await verifyPassword(password, hashPassword);
        if (!isValid) throw new Error("email or password are not valid !");

        const id = User._id.toString();
        return {
          id,
          email: User.email,
        };
      },
    }),
  ],
};
