import { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="cmn-hans" suppressHydrationWarning>
			<body className="bg-light-0 dark:bg-dark-0 text-dark-0 dark:text-light-0">
				<ThemeProvider attribute="class">
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
