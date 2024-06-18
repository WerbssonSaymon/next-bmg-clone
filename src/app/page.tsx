'use client'
import SectionHero from "@/components/headersComponents/SectionHero";
import SectionTimes from "@/components/timesComponents/SectionTimes";
import SectionContact from "@/components/contactsComponents/SectionContact";
import SectionEvents from "@/components/eventsComponents/SectionEvents";
import SectionInfo from "@/components/infosComponents/SectionInfo";


export default function Home() {
  return (
    <>
      <SectionHero 
        titleHero="Empréstimo Consignado"
        textHero=" É aposentado ou pensionista do INSS? Contrate o Empréstimo Consignado Bmg com as melhores taxas!" 
        colorHero={"bg-orange-500"}      />
      <SectionInfo/>
      <SectionEvents/>
      <SectionTimes/>
      <SectionContact/>
    </>
  );
}
