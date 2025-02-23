import FormContact from "@/components/infos/FormContact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez-moi ",
  description: "Contactez-moi pour toute demande ou question.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 mt-4 md:mt-8">
      <FormContact />
    </div>
  );
}
