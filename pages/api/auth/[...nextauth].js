import NextAuth from "next-auth/next";
import connection from "@/utils/db";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        username: {
          label: "Username",
          type: "text",
          placeholder: "John Smith",
        },
      },
      async authorize(credentials) {
        // check to see if email and password is there
        if (!credentials.email || !credentials.password) {
          throw new Error("Please enter an email and password");
        }

        // check to see if user exists
        const [user] = await connection.query(
          "select * from users where email = ?",
          [credentials.email]
        );

        // if no user was found
        if (!user[0] || !user[0]?.password) {
          throw new Error("No user found");
        }

        // check to see if password matches
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user[0].password
        );

        // if password does not match
        if (!passwordMatch) {
          throw new Error("Incorrect password");
        }

        return user[0];
      },
    }),
  ],
  secret: process.env.SECRET,
  data: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};

export default NextAuth(authOptions);
