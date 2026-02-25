import bcrypt from "bcryptjs";

type HashedPassword = (password: string) => Promise<string>;
type VerifyPassword = (
  password: string,
  hashPassword: string,
) => Promise<boolean>;

const hashedPassword: HashedPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const verifyPassword: VerifyPassword = async (password, hashPassword) => {
  return await bcrypt.compare(password, hashPassword);
};

export { hashedPassword, verifyPassword };
