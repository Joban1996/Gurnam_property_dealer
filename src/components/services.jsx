
function Services() {
  return (
    <section className="services">

      <div className="services-header">
        <div>
          <h2>Discover Our Services</h2>
          <p>
            We provide reliable property solutions to help
            you make the right decision.
          </p>
        </div>

        <a href="#">See All Services</a>
      </div>

      <div className="services-grid">

        {/* Sell a Property */}
        <div className="service-card">
          <div className="service-icon">
            🏠
          </div>

          <div className="service-content">
            <h3>Sell A Property</h3>
            <p>
              Get the right value for your property
              with our expert guidance.
            </p>

            <button>Learn More</button>
          </div>
        </div>

        {/* Buy a Property */}
        <div className="service-card">
          <div className="service-icon">
            🔑
          </div>

          <div className="service-content">
            <h3>Buy A Property</h3>
            <p>
              Find your ideal home or commercial
              space with our assistance.
            </p>

            <button>Learn More</button>
          </div>
        </div>

        {/* Rent a Property */}
        <div className="service-card">
          <div className="service-icon">
            🏢
          </div>

          <div className="service-content">
            <h3>Rent A Property</h3>
            <p>
              Explore rental properties that match
              your needs and budget.
            </p>

            <button>Learn More</button>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Services
