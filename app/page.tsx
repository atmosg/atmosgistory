import Logo from "@/assets/png/logo.png";
import Nav from "@/components/common/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="bg-gray-100 w-60 h-full absolute left-0">
        <div className="px-8 pt-12">
          <Image src={Logo} width={120} height={120} alt="logo" className="m-auto" />
          <h2 className="mt-6 text-center text-lg font-bold">Atmosg</h2>
          <p className="mt-4 italic text-gray-500 font-semibold">Service, Develop, Value</p>
        </div>
        <Nav />
      </header>
      <main className="h-full">
        <div className="pl-60">
          ㅎㅇㅎㅇ
        </div>
      </main>
      <footer className="text-gray-500 text-sm h-20">
        <div className="pl-60">
          &#9400; atmosg
        </div>
      </footer>
    </>
  );
}
