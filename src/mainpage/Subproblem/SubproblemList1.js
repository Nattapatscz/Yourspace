import React,{useState} from "react";
import "../../styles/SubproblemList.css";
// import axios from 'axios';

const SubproblemList1 = () => {

  const [formData, setFormData] = useState({
    job_tel: '',
    job_details: '',
    job_assign_date: '',
    job_assign_time: '',
    job_backup_tel: '',
    job_location: '',
    member_username: '',
    status_id: '',
    job_type_id: '',
    technicial_username: '',
    image: null, // Initialize image field with null
  });

  const handleInputChange = (e) => {
    const { name, type, files, value } = e.target;
  
    if (type === 'file' && files) {
      // Handle file input (image)
      setFormData({
        ...formData,
        [name]: files, // Store selected image files in the form data
      });
    } else {
      // Handle text input
      setFormData({
        ...formData,
        [name]: value, // Store the input value in the form data
      });
    }
  };
  
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    console.log(JSON.stringify(formDataToSend));
    try {
      const response = await fetch('http://localhost:5000/submit-job', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        // Handle success response here
        console.log('Data sent successfully');
        alert('Data sent successfully');
      } else {
        throw new Error('Error sending data');
      }
    } catch (error) {
      // Handle error here
      console.error('Error:', error);
      alert('Error sending data');
    }
  };
  

  return (
    <div className="subproblem-container">
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <br/><h1>แบบฟอร์มรายละเอียดการซ่อม</h1><br/>
          <label className="form-label">
            ประเภทงาน
          </label>
                  <select className="form-select">
                    <option>ปั้มน้ำ</option>
                    <option>สุขภัณฑ์</option>
                    <option>ส้วมตัน</option>
                    <option>ท่อตัน</option>
                    <option>ระบบน้ำ-ระบบประปา</option>
                    <option>ท่อน้ำ-ท่อสุขภัณฑ์</option>
                    <option>น้ำรั่วซึม</option>
                  </select><br/>
        
                  <div className="mid">

                      <label className="form-label">ที่อยู่</label>

                      <input
                        type="text"
                        id="job_location"
                        name="job_location"
                        className="form-control"
                        value={formData.job_location}
                        required
                        onChange={handleInputChange}
                      />


                        <label className="form-label">เบอร์ติดต่อ</label>
                        <input
                          type="text"
                          id="job_tel"
                          name="job_tel"
                          className="form-control"
                          value={formData.job_tel}
                          required
                          onChange={handleInputChange}
                        />
                        <br />

                        <label className="form-label">เบอร์ติดต่อสำรอง</label>
                        <input
                          type="text"
                          id="job_backup_tel"
                          name="job_backup_tel"
                          className="form-control"
                          value={formData.job_backup_tel}
                          required
                          onChange={handleInputChange}
                        />
                        <br />

                        <label className="form-label">
                          วันที่สะดวกรับบริการ (ช่างอาจไม่พร้อมให้บริการ ณ วันเวลาดังกล่าว)
                        </label>
                        <input
                          type="date"
                          id="job_assign_date"
                          name="job_assign_date"
                          className="form-control"
                          value={formData.job_assign_date}
                          required
                          onChange={handleInputChange}
                        />
                        <br />

                        <label className="form-label">ช่วงเวลา</label>
                        <input
                          type="time"
                          id="job_assign_time"
                          name="job_assign_time"
                          className="form-control"
                          value={formData.job_assign_time}
                          required
                          onChange={handleInputChange}
                        />
                        <br />

                        <label className="form-label">กรุณากรอกรายละเอียดเพิ่มเติม</label>
                        <textarea
                          cols="81"
                          rows="10"
                          id="job_details"
                          name="job_details"
                          className="form-control"
                          value={formData.job_details}
                          onChange={handleInputChange}
                        ></textarea>
                        </div>
                        <br />

                        <div className="bottom">
                        <label className="form-label">รูปภาพเพิ่มเติม</label>
                        <input
                          className="form-control form-control-sm"
                          type="file"
                          name="image1" // Give a name to the input field for the first image
                          accept="image/*"
                          required
                          onChange={handleInputChange}
                        />
                        <br />

                        <input
                          className="form-control form-control-sm"
                          type="file"
                          name="image2" // Give a name to the input field for the second image
                          accept="image/*"
                          required
                          onChange={handleInputChange}
                        />

                      <br />

                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" required/>

                          <label className="form-check-label" >เลือกวิธีชำระค่าบริการ</label>
                      </div>

                  </div> <br/><br/>
                 
                  <div className="d-grid gap-2">
                    <button className="btn btn-warning" type="submit">Submit</button>
                    <button className="btn btn-secondary" type="button">reset</button>
                  </div><br/><br/><br/>

        </form>
      </div>
    </div>
  );
};

export default SubproblemList1;