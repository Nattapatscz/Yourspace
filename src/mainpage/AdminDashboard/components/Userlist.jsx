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
                title: "ลบสมาชิกสำเร็จ",
              });
            } else if (response.status === 404) {
              // ไม่พบสมาชิก
              window.Swal.fire({
                icon: "error",
                title: "ไม่พบสมาชิก",
              });
            } else {
              // อื่นๆ ที่เกิดข้อผิดพลาด
              window.Swal.fire({
                icon: "error",
                title: "ข้อผิดพลาดในการลบ",
              });
            }
          })
          .catch((error) => {
            console.error("ข้อผิดพลาดในการลบสมาชิก: " + error);
          });
      }
    });
  };

  const handleUpdateClick = () => {
    window.Swal.fire({
      icon: "success",
      title: "อัปเดตสำเร็จ",
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
        <h2 style={{ fontSize: "20px", marginTop: "5px" }}>
          แก้ไขข้อมูลผู้ใช้
        </h2>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>ID:</label>
              <input
                type="text"
                className="form-control"
                name="member_id"
                value={editedUser.member_id}
                onChange={handleInputChange}
                disabled
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
          </div>
          <div className="col-md-6">
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
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={editedUser.username}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpdateClick}
          style={{ marginTop: "5px" }}
        >
          Update
        </button>
      </form>
      <br></br>
      <div style={{ width: "80vw", margin: "20px auto" }}>
        <h2 style={{ fontSize: "20px", marginTop: "5px" }}>รายการสมาชิก</h2>
        <hr />
        <input
          class="form-control "
          type="search"
          style={{ width: "20%", float: "right" }}
          aria-label="Search"
          placeholder="ค้นหา"
        />
        <br />
        <br />
        <table className="table table-striped" style={{ textAlign: "center" }}>
          <thead>
            <tr>
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
        <nav aria-label="Page navigation example" style={{ float: "right" }}>
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                ก่อนหน้า
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                4
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                5
              </a>
            </li>
            <li class="page-item">
              <a className="page-link" href="#">
                ถัดไป
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Userlist;
