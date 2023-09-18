import React from "react";
import "../../styles/SubproblemList.css";

const SubproblemList6 = () => {
  return (
    <div className="subproblem-container">
      <div className="form-content">
        <form>
          <div className="top">
            ประเภทงาน
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            ช่างสี
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            ช่างกระเบื้อง
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            สวน
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            ผ้าม่าน-มู่ลี่-ฉากกั้นห้อง
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            วอลเปเปอร์
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            เฟอร์นิเจอร์
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            สัญญาณกันขโมย
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            กล้องวงจรปิด
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            เครื่องดูดควัน-ปล่องควัน
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            เครื่องกรองน้ำ
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            พัดลมระบายอากาศ ลูกหมุนระบายอากาศ
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

export default SubproblemList6;
