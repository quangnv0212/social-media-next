import AppProvider from "@/components/providers/app-provider";
import DashBoardLayoutProvider from "@/components/dashboard-layout-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <DashBoardLayoutProvider>{children}</DashBoardLayoutProvider>
          </ThemeProvider>
          <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}
