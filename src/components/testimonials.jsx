
function Testimonials() {
  const testimonials = [
    {
      name: "Marc Pillay",
      review:
        "My wife and I have been dealing with Bangoonan for over 18 months, and they are outstanding. Co-operative and understanding, as well as very efficient.",
    },
    {
      name: "Shifaath Shariff",
      review:
        "Bangoonan is a pioneer and trusted company in the Real Estate sector in Bahrain and I'm happy to have had their assistance. They provide non-biased advice.",
    },
    {
      name: "Ifhaam I.",
      review:
        "Bangoonan is a reliable and professional Real Estate Company. We've worked with Ms. Miro Dole and she has assisted my family extensively.",
    },
    {
      name: "Shahid Ahmed",
      review:
        "Bangoonan has been one of the most helpful agencies to work with! They manage our brand new store and honestly they've been remarkable!",
    },
  ];

  return (
    <section className="testimonials">

      <div className="testimonials-header">
        <div>
          <h2>Hear What They Say</h2>
          <p>Quis in porttitor purus sed</p>
        </div>

        <a href="#">See All Testimonials</a>
      </div>

      <div className="testimonials-content">

        <div className="testimonial-feature">
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>

              <div className="testimonial-stars">
                ★★★★★
              </div>

              <p>{item.review}</p>

              <div className="testimonial-user">
                <div className="testimonial-avatar">
                  {/* Profile image will go here */}
                </div>

                <h3>{item.name}</h3>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Testimonials;
