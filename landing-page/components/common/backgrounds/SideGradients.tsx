import Image from 'next/image'
import PtaGrad from '@/assets/images/gradients/pta-gradient.png'
import Container2 from '@/components/layout/container/Container2'

export default function SideGradients() {
  return (
    <Container2>
        {/* <div className="relative"> */}
    <div
      className="
        absolute
        inset-0
        left-1/2
        -translate-x-1/2
        w-screen
        pointer-events-none
        overflow-hidden
      "
    >
      <Image
        src={PtaGrad}
        alt=""
        className="
          absolute
          left-[-380px]
          top-[65%]
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
          top-[65%]
          -translate-y-1/2
          max-w-[852px]
          opacity-60
        "
      />
    </div>
    {/* </div> */}
    </Container2>
  )
}