export default function HeroSection({ title, description }) {
  return <section className="w-full pt-[100px] pb-[100px] bg-[#f2f3fc] mb-[5vw]">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 gap-[5vw]">
        <div>
          <h2 
            className="font-semibold my-2 text-2xl" 
            dangerouslySetInnerHTML={{__html: title}}></h2>
          <p 
            className="text-sm" 
            dangerouslySetInnerHTML={{__html: description}}></p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  </section>
}