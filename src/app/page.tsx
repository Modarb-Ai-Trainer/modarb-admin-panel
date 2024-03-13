import Image from "next/image";
import  "./page.css";
import Dashboard from "./(routes)/dashboard/page";

export default function Home() {
  return (
    <main className="main">
      <Dashboard/>
    </main>
  );
}
