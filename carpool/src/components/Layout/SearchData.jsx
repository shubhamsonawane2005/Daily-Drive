import { useEffect, useState } from "react";
import "../Layout/SearchData.css";
const SearchData = ({from, to, date}) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rides, setRides] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
        setRides(data);
      })
      .catch((err) => {
        console.error("Error Fetching Cars:", err);
        setLoading(false);
      });
  }, []);

  

  const filterCars = cars.filter((ride) => {
    const rideFrom = ride.from.toLowerCase();
    const rideTo = ride.to.toLowerCase();
    const filterFrom = from ? from.toLowerCase() : "";
    const filterTo = to ? to.toLowerCase() : "";
    const rideDate = ride.date ? new Date(ride.date).toISOString().split("T")[0] : "";
     const filterDate = date ? new Date(date).toISOString().split("T")[0] : "";

    const filterDepartureTime = ride.departureTime ? ride.departureTime : "";
    const rideStartTimeHour = parseInt(ride.startTime.split(":")[0], 10);

    let matchesTime = false;
    if (!filterDepartureTime) {
      matchesTime = true;
    } else {
      if (filterDepartureTime === "Before 06:00" && rideStartTimeHour < 6) {
        matchesTime = true;
      } else if (
        filterDepartureTime === "06:00 - 12:00" &&
        rideStartTimeHour >= 6 &&
        rideStartTimeHour <= 12
      ) {
        matchesTime = true;
      } else if (
        filterDepartureTime === "12:01 - 18:00" &&
        rideStartTimeHour > 12 &&
        rideStartTimeHour <= 18
      ) {
        matchesTime = true;
      } else if (
        filterDepartureTime === "After 18:00" &&
        rideStartTimeHour > 18
      ) {
        matchesTime = true;
      } else if (filterDate) matches = matches && rideDate === filterDate;
    }
    // const rideDate = ride.date ? new Date(ride.date).toISOString().split("T")[0] : "";
    if (filterFrom && filterTo) {
      return (
        rideFrom.includes(filterFrom) &&
        rideTo.includes(filterTo) 
      );
    } else if (filterFrom) {
      return rideFrom.includes(filterFrom);
    } else if (filterTo) {
      return rideTo.includes(filterTo);
    }


    return true;
  });

  //pagination

    const totalPages = Math.ceil(filterCars.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentRides = filterCars.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };


  const calcDuration = (start, end) => {
    if (!start || !end) return "";

    // Example: start = "11:00", end = "17:10"
    const today = new Date().toISOString().split("T")[0]; // "2025-09-09"

    const startDate = new Date(`${today}T${start}:00`);
    const endDate = new Date(`${today}T${end}:00`);

    const diffMs = endDate - startDate;
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h${minutes.toString().padStart(2, "0")}`;
  };

  const formatDate = (isoDate) => {
    if (!isoDate) return "";
    return new Date(isoDate).toISOString().split("T")[0];
  };

  return (
    <section className="data">
      <div className="container">
        <div className="main_box ">
          <div className="box1">
            <div className="sort-box">
              <div className="sort-header">
                <h3>Sort by</h3>
                <a href="">Clear all</a>
              </div>

              <label className="sort-option">
                <input type="radio" name="sort" />
                Earliest departure
                <i className="fa-regular fa-clock"></i>
              </label>

              <label className="sort-option">
                <input type="radio" name="sort" />
                Lowest price
                <i className="fa-solid fa-coins"></i>
              </label>

              <label className="sort-option">
                <input type="radio" name="sort" />
                Close to departure point
                <i className="fa-solid fa-person-walking green-icon"></i>
              </label>

              <label className="sort-option">
                <input type="radio" name="sort" />
                Close to arrival point
                <i className="fa-solid fa-person-walking green-icon"></i>
              </label>

              <label className="sort-option">
                <input type="radio" name="sort" />
                Shortest ride
                <i className="fa-regular fa-hourglass-half"></i>
              </label>
            </div>
            <div className="sort-box">
              <div className="sort-header">
                <h3>Departure time</h3>
              </div>

              <label className="sort-option">
                <input type="checkbox" name="sort" />
                Before 06:00
              </label>

              <label className="sort-option">
                <input type="checkbox" name="sort" />
                06:00 - 12:00
              </label>

              <label className="sort-option">
                <input type="checkbox" name="sort" />
                12:01 - 18:00
              </label>

              <label className="sort-option">
                <input type="checkbox" name="sort" />
                After 18:00
              </label>
            </div>
            <div className="sort-box">
              <div className="sort-header">
                <h3>Trust and safety</h3>
              </div>

              <label className="sort-option">
                <input type="checkbox" name="sort" />
                Verified Profile
                <i className="bi bi-patch-check-fill text-primary"></i>
              </label>
            </div>
            <div className="sort-box">
              <div className="sort-header">
                <h3>Amenities</h3>
              </div>

              <label className="sort-option">
                <input type="checkbox" name="sort" />
                Max. 2 in the back
                <i className="bi bi-people"></i>
              </label>

              <label className="sort-option">
                <input type="checkbox" name="sort" />
                Instant Booking
                <i className="bi bi-activity"></i>
              </label>

              <label className="sort-option">
                <input type="checkbox" name="sort" />
                Smoking allowed
                <i className="fas fa-smoking"></i>
              </label>

              <label className="sort-option">
                <input type="checkbox" name="sort" />
                Pets allowed
                <i className="fa-solid fa-paw"></i>
              </label>
            </div>
          </div>
          {/* <div className="box2"> */}
          {/* <h1>Data</h1> */}
          <div
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: "100%",
            }}
          >
            <h2>Available Rides</h2>

            {loading ? (
              <p>Loading...</p>
            ) : filterCars.length > 0 ? (
              currentRides.map((ride) => (
                <div
                  key={ride._id}
                  style={{
                    border: "1px solid #d3e3f0",
                    borderRadius: "10px",
                    margin: "15px 0",
                    background: "#fff",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Top Row */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "15px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      {/* Time + Duration + Line */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span style={{ fontWeight: "bold" }}>
                          {ride.startTime}
                        </span>
                        <span
                          style={{
                            fontSize: "14px",
                            fontWeight: "bold",
                            marginLeft: "0",
                            marginTop: "5px",
                          }}
                        >
                          {ride.from}
                        </span>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <span
                            style={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #005f73",
                              borderRadius: "50%",
                            }}
                          ></span>
                          <div
                            style={{
                              height: "2px",
                              width: "80px",
                              background: "#005f73",
                            }}
                          ></div>
                          <span
                            style={{
                              width: "10px",
                              height: "10px",
                              border: "2px solid #005f73",
                              borderRadius: "50%",
                            }}
                          ></span>
                        </div>

                        <span style={{ fontSize: "13px", color: "#444" }}>
                          {calcDuration(
                            ride.startTime,
                            ride.endTime,
                            ride.newDate
                          )}
                        </span>
                        <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                          {ride.to}
                        </span>
                        <span style={{ fontWeight: "bold" }}>
                          {ride.endTime}
                        </span>
                      </div>
                      <div></div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        gap: "5px",
                      }}
                    >
                      {/* Price */}
                      <div
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          color: "#005f73",
                        }}
                      >
                        ₹{ride.price}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "5px",
                      }}
                    >
                      {/* Price */}
                      <div
                        style={{
                          fontSize: "15px",
                          fontWeight: "bold",
                          color: "#005f73",
                          marginLeft: "10px",
                        }}
                      >
                        Date: {formatDate(ride.date)}
                      </div>
                    </div>
                  </div>
                  {/* Route */}

                  <hr style={{ margin: "0" }} />

                  {/* Driver Info */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "10px 15px",
                    }}
                  >
                    <img
                      src="/profile.jpeg"
                      alt="Driver"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        {ride.driverName}
                      </span>
                      <span>{ride.driver || "4.5"}</span>
                      <span style={{ color: "#888", fontSize: "13px" }}>
                        ⚡ Instant Booking
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No rides found matching your search.</p>
            )}

            {totalPages > 1 && (
              <div style={{ display: "flex", gap: "10px", marginTop: "20px"}}>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  style={{
                    borderRadius:"5px"
                  }}
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    style={{
                      padding: "8px 12px",
                      background:
                        currentPage === i + 1 ? "rgb(59, 222, 255)" : "lightgray",
                      color: currentPage === i + 1 ? "white" : "black",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  style={{
                    borderRadius:"5px"
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};
export default SearchData;
