
function PropertyCard({ property }) {
  return (
    <div className="property-card">

      {/* Property Image */}
      <div className="property-card-image">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Modern house"
        />
      </div>

      {/* Property Details */}
      <div className="property-card-details">
        <h3>{property.name}</h3>

<h2>{property.price}</h2>

<div className="property-specifications">
  <span>{property.bedrooms} Bedrooms</span>
  <span>{property.bathrooms} Bathrooms</span>
  <span>{property.kitchen} Kitchen</span>
</div>
<a
  href={`https://wa.me/9041247534?text=${encodeURIComponent(
    `Hi, I'm interested in ${property.name} listed at ${property.price}. Please share more details.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="view-details-btn"
>
  View Details
</a>
      </div>
    </div>
  )
}

export default PropertyCard
