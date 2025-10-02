import { useEffect, useState } from 'react'

const Users = () => {

    const [users, setUsers] = useState([]);
      useEffect(() => {
        fetch("http://localhost:5000/users") // Express API
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok " + res.statusText);
            }
            return res.json();
          })
        //   .then((data) => setUsers(data))
          .then((data) => {
            const onlyUser = data.filter(u => u.role === "user");
            setUsers(onlyUser);
          })
          .catch((err) => console.error("Fetch error:", err));
      }, []);
      
  return (
    <div className="card shadow border-0 mb-7">
        <div className="card-header">
          <h5 className="mb-0">Users</h5>
        </div>
        <div className="table-responsive">
          <table className="table table-hover table-nowrap">
            <thead className="thead-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">City</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((u) => (
                  <tr key={u._id}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.phone}</td>
                    <td>{u.city}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default Users