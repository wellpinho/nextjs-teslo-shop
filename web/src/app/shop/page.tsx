import { titleFont, titleMontSerrat } from "@/config/fonts";

export default function Home() {
  return (
    <main className="">
      <h1>first font</h1>
      <h1 className={titleMontSerrat.className}>second font</h1>
    </main>
  );
}
