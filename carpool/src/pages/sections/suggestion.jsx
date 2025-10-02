const Suggestion = () => {
  return (
    <section className="custom-suggest p-5 m-0">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <i className="bi bi-menu-button-wide-fill fs-4"></i>
            <p className="title fw-bold">Your pick of rides at low prices</p>
            <p>
              No matter where you're going, by bus or carpool, find the perfect
              ride from our wide range of destinations and routes at low prices.
            </p> 
          </div>
          <div className="col-lg-4 col-md-6">
            <i className="bi bi-person-vcard fs-4"></i>
            <p className="title fw-bold">Trust who you travel with</p>
            <p>
              We take the time to get to know each of our members and bus
              partners. We check reviews, profiles and IDs, so you know who
              you're travelling with and can book your ride at ease on our
              secure platform.
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <i className="bi bi-lightning-charge-fill fs-4"></i>
            <p className="title fw-bold">Scroll, click, tap and go!</p>
            <p>
              Booking a ride has never been easier! Thanks to our simple app
              powered by great technology, you can book a ride close to you in
              just minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Suggestion;
