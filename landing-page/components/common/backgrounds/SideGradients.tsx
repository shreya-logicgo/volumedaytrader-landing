import Image from 'next/image'
import PtaGrad from '@/assets/images/gradients/pta-gradient.png'


export default function SideGradients() {
  return (

      <div className="absolute inset-0 pointer-events-none overflow-visible">

        <Image
          src={PtaGrad}
          alt=""
          className="
            absolute
            left-[-380px]
            top-[70%]
            -translate-y-1/2
            rotate-180
            max-w-[852px]
            opacity-60
          "
        />

        <Image
          src={PtaGrad}
          alt=""
          className="
            absolute
            right-[-380px]
            top-[70%]
            -translate-y-1/2
            max-w-[852px]
            opacity-60
          "
        />

      </div>

  )
}