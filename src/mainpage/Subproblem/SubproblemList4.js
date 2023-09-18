import React from "react";
import "../../styles/SubproblemList.css";

const SubproblemList4 = () => {
  return (
    <div className="subproblem-container">
      <div className="form-content">
        <form>
          <div className="top">
            ประเภทงาน
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            ช่างทาสี
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            มุ้งลวด
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            พื้น
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            หลังคา-ดาดฟ้า
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            กระจก
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            ผนัง
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            ฝ้า-เพดาน
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            รางน้ำฝน
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            ประตู
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            หน้าต่าง
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            บันได
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            กันสาด
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            คิ้ว บัว จบ วงกบ
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            รั้ว-เหล็กดัด-ตะแกรง-ลูกกรง
            <br />
          </div>
          <div className="mid">
            <label>ที่อยู่</label>

            <input type="text"></input>

            <label>เบอร์ติดต่อ</label>

            <input type="text"></input>

            <label>เบอร์ติดต่อสำรอง</label>

            <input type="text"></input>

            <label>
              วันที่สะดวกรับบริการ (ช่างอาจไม่พร้อมให้บริการ ณ วันเวลาดังกล่าว)
            </label>

            <input type="date"></input>

            <label>ช่วงเวลา</label>

            <input type="text"></input>

            <label>กรุณากรอกรายละเอียดเพิ่มเติม</label>

            <textarea cols="81" rows="10"></textarea>
          </div>
          <div className="bottom">
            รูปภาพเพิ่มเติม
            <br />
            <input type="file"></input>
            <br />
            <br />
            <input type="file"></input>
            <br />
            <br />
            เลือกวิธีชำระค่าบริการ
            <br />
            <input type="radio" id="dewey" name="drone" value="dewey" />
            ชำระค่าบริการปลายทาง
          </div>
          <button type="button" class="form-btn btn-success">
            ยืนยัน
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubproblemList4;
