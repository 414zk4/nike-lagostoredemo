import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex jusstify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalice font-bold lg:max-w-lg ">
          We Provide You
          <span className="text-coral-red"> Super </span> 
          <span className="text-coral-red">Quality </span> 
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Indulge in the epitome of sophistication and comfort with our high-quality brand shoes. Meticulously crafted with precision and passion, each pair exemplifies a seamless blend of style and substance </p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaccion</p>

        <div className="mt-11">
            <Button label="View details"/>  
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img 
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality