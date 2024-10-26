import Link from "next/link";
import ImageRender from "../../public/assets/render-phone.png"
import Image from "next/image";
import Header from "@/components/molecula/header";

export default function Home() {
  return (
    <div className="h-[100vh] bg-slate-100 ">
      <Header/>

      <section className="w-full min-h-[80vh] flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="">
          <Image 
            className="max-h-[450px]  max-w-[650px]  lg:max-w-[900px] lg:max-h-[600px] lg:min-w-[500px] lg:min-h-[500px]: w-full"
            src={ImageRender}  
            alt={''}
          />
        </div>


        <div className="lg:max-w-[600px] w-full space-y-7 lg:px-4 px-6 sm:px-10 lg:mr-10 mb-5">
          <h1 className="text-slate-900 font-extrabold text-4xl">
            Cresça com o Mercado e Alcance o <b className=" text-[#6cd55e] ">Extraordinário</b>
          </h1>
          <p>
            Acreditamos que quem pensa além do óbvio atinge resultados extraordinários. Com uma ampla variedade de investimentos e uma plataforma digital robusta, a XP Investimentos é o lugar para aqueles que buscam transformar sonhos em realidades financeiras sólidas. Venha crescer com a XP!
          </p>

          <button className=" h-[40px] px-5 rounded-[4px] bg-transparent border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-950 hover:text-slate-50" >
            <Link href={"/login"}>Acesse a Plataforma</Link>
          </button>
        </div>

      </section>

    </div>
  );
}
