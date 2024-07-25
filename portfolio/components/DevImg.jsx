import Image from 'next/image'

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} width={300} height={250} style={{ borderRadius: '45%', overflow: 'hidden' }} priority alt='' />
    </div>
  )
}

export default DevImg