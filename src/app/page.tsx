import { HeroSlider } from "@/components/home/HeroSlider";
import { InDemandLoans } from "@/components/home/InDemandLoans";
import { Partners } from "@/components/home/Partners";
import { Reviews } from "@/components/home/Reviews";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <InDemandLoans />
      <Reviews />
      <Partners />
    </>
  );
}
