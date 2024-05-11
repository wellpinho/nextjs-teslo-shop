export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="bg-red-500 min-h-screen font-bold">
            {children}
        </main>
    );
}