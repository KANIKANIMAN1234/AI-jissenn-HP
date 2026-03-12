import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "ユーザー名", type: "text" },
        password: { label: "パスワード", type: "password" },
      },
      authorize: async (credentials) => {
        const username = credentials.username as string
        const password = credentials.password as string

        if (
          username === process.env.ADMIN_USERNAME &&
          password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: "admin",
            name: "管理者",
            email: "admin@ai-jissenn.com",
            role: "admin",
          }
        }

        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role
      }
      return session
    },
  },
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
})
