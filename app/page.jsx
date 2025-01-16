import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <h1 className="text-blue-500"> WelCome</h1>
      <Link href="./properties">Go To Properties</Link>
    </div>
  );
}
