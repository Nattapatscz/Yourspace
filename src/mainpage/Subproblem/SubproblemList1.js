import React from "react";
import "../../styles/SubproblemList.css";

const SubproblemList1 = () => {
  return (
    <div className="subproblem-container">
      <div className="form-content">
        <form>

        <br/>
            <h1>แบบฟอร์มรายละเอียดการซ่อม</h1>
          <br/>

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
            </select>
      
        <br/>
          <div className="mid">

              <label className="form-label">ที่อยู่</label>

              <input type="text" className="form-control"></input><br/>

              <label className="form-label">เบอร์ติดต่อ</label>

              <input type="text " className="form-control"></input><br/>

              <label className="form-label">เบอร์ติดต่อสำรอง</label>

              <input type="text " className="form-control"></input><br/>

              <label className="form-label">
                วันที่สะดวกรับบริการ (ช่างอาจไม่พร้อมให้บริการ ณ วันเวลาดังกล่าว)
              </label>

              <input type="date" className="form-control"></input><br/>

              <label className="form-label">ช่วงเวลา</label>

              <input type="text " className="form-control"></input><br/>

              <label className="form-label">กรุณากรอกรายละเอียดเพิ่มเติม</label>

              <textarea cols="81" rows="10" className="form-control"></textarea>

              </div>

              <br/>

              <div className="bottom">

              <label for="formFileSm" class="form-label">รูปภาพเพิ่มเติม</label>
              <input class="form-control form-control-sm" id="formFileSm" type="file"></input><br/>

              <input class="form-control form-control-sm" id="formFileSm" type="file"></input>


              <br />
              <br />

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                <label class="form-check-label" for="flexCheckChecked">
                    เลือกวิธีชำระค่าบริการ
                </label>
              </div>

              </div>

              <br/>
              <br/>
              <div class="d-grid gap-2">
                <button class="btn btn-warning" type="button">Submit</button>
                <button class="btn btn-secondary" type="button">reset</button>
              </div>
              <br/>
              <br/>
              <br/>
        </form>
      </div>
    </div>
  );
};

export default SubproblemList1;