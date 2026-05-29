import Image from 'next/image'

import TrustGrad from '@/assets/images/gradients/pta-gradient.png'

export default function TrustBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 left-1/2 w-screen -translate-x-1/2 overflow-hidden"
    >
      <Image
        src={TrustGrad}
        alt=""
        className="absolute left-[-320px] top-[65%] max-w-[802px] -translate-y-1/2 rotate-180 opacity-60 z-[-4]"
      />

      <Image
        src={TrustGrad}
        alt=""
        className="absolute right-[-320px] top-[65%] max-w-[802px] -translate-y-1/2 opacity-60 z-[-4]"
      />
    </div>
  )
}