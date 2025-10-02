import "../sections/ways.css";
const Ways = () => {
  return (
    <section className="body_ways">
      <div className="container">
        <div className="row flex-col gy-5 ">
            
          <p className="title_ways fs-2 fw-bold">
            Use the 'The Daily Drive' to help you travel your way
          </p>
          
          <div className="col-lg-4 col-md-6 g-5">
            <img src="./public/car.png" />
            <h6 className="fw-bold">Ride options</h6>
            <p>
              There's more than one way to move with Daily Drive, no matter where you
              are or where you're headed next.
            </p>
            <button className="btn_ways">Search Ride Option</button>
          </div>
          <div className="col-lg-4 col-md-6 g-5">
            <img src="./public/airpot.jpg" />
            <h6 className="fw-bold">700+ airports</h6>
            <p>
              You can request a ride to and from most major airports. Schedule a
              ride to the airport for one less thing to worry about.
            </p>
            <button className="btn_ways">Search airport</button>
          </div>
          <div className="col-lg-4 col-md-6 g-5">
            <img src="./public/city.png"/>
            <h6 className="fw-bold">15,000+ cities</h6>
            <p>
              The app is available in thousands of cities worldwide, so you can
              request a ride even when you're far from home.
            </p>
            <button className="btn_ways">Search cities</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ways;
