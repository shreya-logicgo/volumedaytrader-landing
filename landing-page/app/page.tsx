import OurServices from "@/components/sections/our services/OurServices";
import Trust from "@/components/sections/Trust/Trust";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-20 ">
      <OurServices />
      <Trust />
    </div>
  );
}
