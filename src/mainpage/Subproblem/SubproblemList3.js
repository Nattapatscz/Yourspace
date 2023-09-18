import React from "react";
import "../../styles/SubproblemList.css";

const SubproblemList3 = () => {
  return (
    <div className="subproblem-container">
      <div className="form-content">
        <form>
          <div className="top">
            ประเภทงาน
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            แอร์ เครื่องปรับอากาศ
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            เครื่องซักผ้า-เครื่องอบผ้า
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            เครื่องทำน้ำอุ่น-เครื่องทำน้ำร้อน
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            อุปกรณ์ Smart Home
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

export default SubproblemList3;
