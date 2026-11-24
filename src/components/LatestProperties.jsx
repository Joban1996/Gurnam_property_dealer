import PropertyCard from "./PropertyCard"

function LatestProperties() {
    const properties = [
  {
    id: 1,
    name: "Modern Family House",
    price: "₹85 Lakh",
    bedrooms: 3,
    bathrooms: 2,
    kitchen: 1,
  },
  {
    id: 2,
    name: "Luxury Villa",
    price: "₹1.2 Crore",
    bedrooms: 4,
    bathrooms: 3,
    kitchen: 1,
  },
  {
    id: 3,
    name: "Residential Apartment",
    price: "₹55 Lakh",
    bedrooms: 2,
    bathrooms: 2,
    kitchen: 1,
  },
  {
    id: 4,
    name: "Premium House",
    price: "₹95 Lakh",
    bedrooms: 3,
    bathrooms: 2,
    kitchen: 1,
  },
];
  return (
    <section id="properties" className="latest-properties">

      <div className="latest-properties-header">
        <div>
          <h2>Explore Our Latest Properties</h2>
          <p>
            Discover properties that match your lifestyle and budget.
          </p>
        </div>

        <a href="#">See All Properties</a>
      </div>
      <div className="latest-properties-grid">
        {
            properties.map((property)=>(
                <PropertyCard
                key={property.id}
                property={property}
                />
            ))
        }
</div>

    </section>
  )
}

export default LatestProperties
