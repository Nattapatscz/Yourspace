import React from "react";
import "../../styles/SubproblemList.css";
const SubproblemList5 = () => {
  return (
    <div className="subproblem-container">
      <div className="form-content">
        <form>
          <div className="top">
            ประเภทงาน
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            ทำความสะอาดบ่อดักไขมัน
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            กำจัดปลวก มด แมลงและสัตว์รบกวน
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            ทำความสะอาดแบบ Big Cleaning
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            บริการกำจัดไรฝุ่นหรือทำความสะอาดที่นอน
            <br />
            <input type="checkbox" id="coding" name="interest" value="coding" />
            บริการทำความสะอาด
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

export default SubproblemList5;
