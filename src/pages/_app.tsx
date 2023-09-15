import PageLayout from "@/components/layouts/PageLayout";
import { GlobalContextProvider } from "@/contexts/globalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Heebo } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const heebo = Heebo({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <main className={heebo.className}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </main>
    </GlobalContextProvider>
  );
}
