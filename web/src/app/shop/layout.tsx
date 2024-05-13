import { TopMenu } from "@/components";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen">
            <TopMenu />
            {children}
        </main>
    );
}