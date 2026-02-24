import bcrypt from "bcryptjs";
type HashedPassword = (password: string) => Promise<string>;

const hashedPassword: HashedPassword = async (password) => {
  return await bcrypt.hash(password, 10);
 
};

export { hashedPassword };
