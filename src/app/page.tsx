import Link from "next/link";

export default function HomePage() {

  const mockUrls = [
    "https://utfs.io/f/0d016869-48e0-4858-a83a-2da1bf53a880-3rb6nc.png",
    "https://utfs.io/f/5fa50828-36cb-4a18-9f45-bd5db3bf613b-mx6gky.png",
    "https://utfs.io/f/fd00b29a-383e-4e95-a914-a655b04a9f6f-mx6gl0.png"
  ]

  const mockImages = mockUrls.map((url,index) =>({
    id: index+1,
    url,
  }))
  return (
<main>
<div className="flex flex-wrap gap-4">
  {mockImages.map((image) =>(
    <div key={image.id} className="w-48">
    <img src={image.url} alt="image"  />
    </div>
  ))}
</div>

</main>
  
  );
}
