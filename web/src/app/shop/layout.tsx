import { Sidebar, TopMenu } from "@/components";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="container mx-auto min-h-screen">
            <TopMenu />
            <Sidebar />
            <div className="md:px-7">
                {children}
            </div>
        </main>
    );
}