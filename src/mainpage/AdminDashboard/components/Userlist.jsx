import React, { useState, useEffect } from "react";

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [editedUser, setEditedUser] = useState({
    member_id: "",
    email: "",
    roles: "",
    username: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/member")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const handleEditClick = (user) => {
    setEditedUser(user);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleUpdateClick = () => {
    window.Swal.fire({
      icon: "success",
      title: "Update Success",
    });
    fetch(`http://localhost:5000/member/${editedUser.member_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedUser),
    })
      .then((response) => response.json())
      .then(() => {
        // อัปเดตข้อมูลในรายการผู้ใช้หลังจากอัปเดตสำเร็จ
        const updatedUsers = users.map((user) =>
          user.member_id === editedUser.member_id ? editedUser : user
        );
        setUsers(updatedUsers);
        setEditedUser({
          member_id: "",
          email: "",
          roles: "",
          username: "",
        });
      });
  };

  return (
    <div className="useredit-con container">
      <form>
        <h2>Edit user</h2>
        <div className="form-group">
          <label>ID:</label>
          <input
            type="text"
            className="form-control"
            name="member_id"
            value={editedUser.member_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <input
            type="text"
            className="form-control"
            name="roles"
            value={editedUser.roles}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={editedUser.username}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpdateClick}
        >
          Update
        </button>
      </form>
      <h2>Member list</h2>
      <table className="table table-bordered" style={{ width: "70vw" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Role</th>
            <th>Username</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.member_id}>
              <td>{user.member_id}</td>
              <td>{user.email}</td>
              <td>{user.roles}</td>
              <td>{user.username}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => handleEditClick(user)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
