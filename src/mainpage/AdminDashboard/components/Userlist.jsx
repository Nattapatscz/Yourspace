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

  const handleDeleteClick = (user) => {
    window.Swal.fire({
      title: "คุณต้องการลบสมาชิกนี้ใช่หรือไม่?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ใช่",
      cancelButtonText: "ไม่",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/member/${user.member_id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (response.status === 204) {
              // ลบสมาชิกสำเร็จ
              // อัปเดตรายการสมาชิกหลังจากลบสมาชิก
              const updatedUsers = users.filter(
                (u) => u.member_id !== user.member_id
              );
              setUsers(updatedUsers);
              window.Swal.fire({
                icon: "success",
                title: "Delete Success",
              });
            } else if (response.status === 404) {
              // ไม่พบสมาชิก
              window.Swal.fire({
                icon: "error",
                title: "Member not found",
              });
            } else {
              // อื่นๆ ที่เกิดข้อผิดพลาด
              window.Swal.fire({
                icon: "error",
                title: "Delete Error",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting member: " + error);
          });
      }
    });
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
        <h2>แก้ไขข้อมูลผู้ใช้</h2>
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
      <h2>รายการสมาชิก</h2>
      <table
        className="table table-bordered"
        style={{ width: "83vw", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Username</th>
            <th scope="col" colSpan={"2"}>
              Action
            </th>
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
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteClick(user)}
                >
                  Delete
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
