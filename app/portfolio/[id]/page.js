import Image from 'next/image'
import photo from '../../../public/photo.jpg'

export default function PorfolioProject({ params }) {
  if (params.id === 'project1') {
    return (
      <div>
        <h1>Porfolio Project – id# {params.id}</h1>
        <Image
          src={photo}
          alt="portfolio"
        />
        <div>
          Project: {params.id}
        </div>
      </div>
    )
  }
  return (
    <div>
      <h1>Porfolio Project (alt2) – id# {params.id}</h1>
      <div>
        Project: {params.id}
      </div>
    </div>
  )
}
