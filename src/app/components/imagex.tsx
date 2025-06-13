import Image from 'next/image'

export default function ImageX() {
  return (
    <div>
      <h3>Brain</h3>
      <Image src="/X-brain.png" alt="Brain" width={200} height={200} data-testid="imagex"/>
    </div> 
  )
}