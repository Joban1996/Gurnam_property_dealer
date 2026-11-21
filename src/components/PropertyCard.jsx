
function PropertyCard() {
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
        <h3>Modern Family House</h3>

        <h2>₹85 Lakh</h2>

        <div className="property-specifications">
          <span>3 Bedrooms</span>
          <span>2 Bathrooms</span>
          <span>1 Kitchen</span>
        </div>
      </div>

    </div>
  )
}

export default PropertyCard
