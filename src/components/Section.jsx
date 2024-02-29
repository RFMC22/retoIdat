import Services from "./Services"
import './Section.css'

const Section = ({services}) => {
  return (
    <section>
      <h1>Top values for you</h1>
      <p>Try variety of benefits when using our services</p>
      <div className="services">
        {services.map(service => (
          <Services 
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Section