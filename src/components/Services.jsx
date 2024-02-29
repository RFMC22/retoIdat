const Services = ({title, description, image}) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Services