import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Publish = () => {

const navigate = useNavigate();
  // Updated state to store form data, including startTime and endTime
  const [rideDetails, setRideDetails] = useState({
    driver:'',
    from: '',
    to: '',
    date: '',
    startTime: '', // New state for start time
    endTime: '',   // New state for end time
    seats: 1,
    price: '',
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRideDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting ride details:", rideDetails);

    // TODO: Add your API call here to send data to the backend
    // Example:
    fetch('http://localhost:5000/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rideDetails),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Ride published successfully!');
      navigate("/search")
      // Reset form after successful submission
      setRideDetails({
        driver:'',
        from: '',
        to: '',
        date: '',
        startTime: '',
        endTime: '',
        seats: 1,
        price: '',
      });


    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Failed to publish ride.');
    });
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">Publish a Ride</h2>
              <form onSubmit={handleSubmit}>
                {/* From and To fields */}
                <div className='row mb-3'>
                    <div className="col-md-12">
                    <label htmlFor="driver" className="form-label">Driver Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="driver"
                      name="driver"
                      value={rideDetails.driver}
                      onChange={handleChange}
                      required
                    />
                    </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="from" className="form-label">Leaving From</label>
                    <input
                      type="text"
                      className="form-control"
                      id="from"
                      name="from"
                      value={rideDetails.from}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="to" className="form-label">Going To</label>
                    <input
                      type="text"
                      className="form-control"
                      id="to"
                      name="to"
                      value={rideDetails.to}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Date and Time fields */}
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      value={rideDetails.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* New Start Time field */}
                  <div className="col-md-4">
                    <label htmlFor="startTime" className="form-label">Start Time</label>
                    <input
                      type="time"
                      className="form-control"
                      id="startTime"
                      name="startTime"
                      value={rideDetails.startTime}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* New End Time field */}
                  <div className="col-md-4">
                    <label htmlFor="endTime" className="form-label">End Time</label>
                    <input
                      type="time"
                      className="form-control"
                      id="endTime"
                      name="endTime"
                      value={rideDetails.endTime}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Available Seats and Price fields */}
                <div className="row mb-4">
                  <div className="col-md-6">
                    <label htmlFor="seats" className="form-label">Available Seats</label>
                    <input
                      type="number"
                      className="form-control"
                      id="seats"
                      name="seats"
                      min="1"
                      max="6"
                      value={rideDetails.seats}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="price" className="form-label">Price per Seat (₹)</label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      name="price"
                      min="0"
                      value={rideDetails.price}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-secondary btn-lg"
                //   style={{
                //     backgroundColor:"#4cece7",
                //     border:"2px solid rgb(137, 236, 255)"
                    
                //   }}
                  >
                    Publish Ride
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publish;