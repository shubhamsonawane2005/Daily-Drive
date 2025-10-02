import "./about.css";
export const About = () => {
  return (
    <div className="body_about">
      <div className="container">
        <div className="contain">
          <h1>About Us</h1>
          <div className="data_about">
            <h4 style={{fontFamily: 'Nova Round'}}>
              | We bring freedom, fairness and fraternity to the world of
              travel. |
            </h4>
            <p>
              Daily Drive is the world's leading community-based travel network
              enabling over 90 million members to share a ride across 22
              markets. Daily Drive leverages technology to fill empty seats on
              the road, connecting members looking to carpool or to travel by
              bus, and making travel more affordable, sociable and convenient.
              Daily Drive's environmentally and human-friendly mobility network
              saves 1.6M tons of CO2 and enables 120M human connections every
              year. <br />
              HOW IT ALL STARTED When Fred was trying to get home to his family
              in the French countryside for Christmas 2003, he struggled as he
              had no car and all the trains were full. After begging his sister
              to pick him up, it was on the road when Fred noticed the sheer
              number of people driving alone. It hit him that all those empty
              seats in existing cars could be the beginning of a new travel
              network. Over the next decade, together with co-founders Francis
              and Nicolas, the trio took this simple idea and built it into the
              world's leading carpooling platform, connecting millions of people
              going the same way. Learn about our first decade of building Daily
              Drive in our Inside Story!
            </p>
            <div className="abou_img">
              <img src="about.jpg" />
              <p>
                Daily Drive doubles the occupancy rate of cars whilst operating
                a carbon-saving network. In total, 1.6 million tonnes of CO2
                were saved by Daily Drive carpoolers in 2018, thanks to the
                relative efficiency of filled cars versus alternative modes of
                transport, members' improved driving behaviors whilst
                carpooling, and the informal carpooling inspired by Daily Drive
                outside the platform. Find our more in our dedicated report,
                Zero Empty Seats. Carpooling also creates a unique space,
                enabling exchanges between people who might have never met
                otherwise but who come together to share a ride. Bringing People
                Closer is the largest study conducted on the social impacts of
                carpooling and reveals the social ties created by carpooling. In
                Entering the Trust Age, a study conducted jointly with NYU
                Stern, you can learn about the digital trust tools that have
                enabled Daily Drive to create trust at scale and enable millions
                of people to share long-distance journeys.{" "}
                <h3>FIND OUT MORE ABOUT Daily Drive</h3>
                {/* <img src="about2.jpg" alt="" /> */}
              </p>
            </div>
            <div className="abou_img">
              <p>
                Whether you're a driver with extra seats or a passenger in need
                of a ride, our platform offers a reliable and affordable
                solution for everyday travel. We make it easy to connect with
                people going the same way, so you can share costs and reduce
                your travel stress. Every ride you share helps reduce traffic on
                the roads and cuts down on harmful emissions. Safety is our top
                priority — we verify users and provide secure messaging between
                drivers and passengers. With user reviews and ratings, you can
                travel confidently with people you trust. Our app is designed to
                be simple, fast, and user-friendly, whether you're booking a
                ride or offering one. Join our growing community of smart
                travelers and make your journey more social, sustainable, and
                cost-effective.
              </p>
              <img src="about2.svg" alt="" />
            </div>

            <h4 style={{textAlign: "center" ,fontFamily: 'Nova Round'}}>Become a part of our story !😊</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
