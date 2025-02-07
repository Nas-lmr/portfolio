import LastProjects from "@/components/infos/LastProjects";
import MainPresentation from "@/components/infos/MainPresentation";

export default function Home() {
  return (
    <main className=" min-h-screen w-full  flex  flex-col justify-center-center  ">
      <MainPresentation />
      <LastProjects />
    </main>
  );
}
