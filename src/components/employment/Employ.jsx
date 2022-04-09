import { useState } from "react";
import "./employ.scss";

export default function Employ() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>استخدام</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="نام و نام خانوادگی" />
          <input type="text" placeholder="سن" />
          <input type="number" placeholder="تحصیلات" />
          <input type="number" placeholder="سابقه کاری" />
          <input type="email" placeholder="ایمیل شما" />
          <input type="number" placeholder="کد ملی" />
          <input type="number" placeholder="شماره همراه" />
          <input type="number" placeholder="شماره تلفن ثابت" />
          
         
          <textarea placeholder="توضیخات"></textarea>
          <button type="submit">ارسال</button>
          {message && <span>پیغام شما ارسال شد :)</span>}
        </form>
      </div>
    </div>
  );
}