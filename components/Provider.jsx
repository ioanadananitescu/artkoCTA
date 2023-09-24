"use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider} from "next-themes";

const Provider = ({children, session}) => {
  return (
    <NextThemesProvider enableSystem={true} attribute="class">
    <SessionProvider session={session}>
      {children}
  </SessionProvider>
  </NextThemesProvider>
  )
}

export default Provider