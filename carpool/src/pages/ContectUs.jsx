import "../pages/ContectUs.css";
const ContectUs = () => {
  return (
    <div className="body_contect">
      <div className="container_contect">
        <div className="form-container">
          <div className="left-container">
            <div className="left-inner-container">
              <h2>Let's Chat</h2>
              <p>
                Whether you have a question, want to start a project or simply
                want to connect.
              </p>
              <br />
              <p>Feel free to send me a message in the contact form</p>
            </div>
          </div>
          <div className="right-container">
            <div className="right-inner-container">
              <form action="#">
                <h2 className="lg-view">Contact</h2>
                <p>* Required</p>
                {/* <div className="social-container">
                  <a href="#" className="social">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" className="social">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div> */}
                <input type="text" placeholder="Name *" />
                <input type="email" placeholder="Email *" />
                <input type="text" placeholder="Company" />
                <input type="phone" placeholder="Phone" />
                <textarea rows="4" placeholder="Message"></textarea>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContectUs;
