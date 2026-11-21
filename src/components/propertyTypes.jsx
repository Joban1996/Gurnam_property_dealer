
function PropertyTypes() {
  return (
<section className="property-types">
      <div className="property-types-header">
        <div>
          <h2>Explore Properties by Type</h2>
          <p>Find a property that matches your needs.</p>
        </div>

        <a href="#">View All Properties</a>
      </div>

    <div className="property-types-grid">

  <div className="property-type-card">
    <div className="property-image">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="Residential property"
      />
    </div>
    <h3>Residential Properties</h3>
    <p>Find your perfect home.</p>
  </div>

  <div className="property-type-card">
    <div className="property-image">
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
        alt="Commercial property"
      />
    </div>
    <h3>Commercial Properties</h3>
    <p>Find the right space for your business.</p>
  </div>

  <div className="property-type-card">
    <div className="property-image">
      <img
        src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800"
        alt="Rental property"
      />
    </div>
    <h3>Rental Properties</h3>
    <p>Explore properties available for rent.</p>
  </div>

</div>
</section>
  )
}

export default PropertyTypes

