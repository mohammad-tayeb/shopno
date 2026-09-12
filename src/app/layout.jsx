import { Toaster } from "react-hot-toast";
import "./globals.css";
import QueryProvider from "./providers/QueryProvider";

export default function RootLayout({ children }) {
    return (
        <html lang="bn">
            <body>
                <QueryProvider>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                    {children}
                </QueryProvider>
            </body>
        </html>
    );
}