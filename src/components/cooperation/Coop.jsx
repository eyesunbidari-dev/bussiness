import { useState } from "react";
import "./coop.scss";

export default function Coop() {
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
        <h2>همکاری با ما</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="نام و نام خانوادگی" />
          <input type="text" placeholder="نام مجموعه شما" />
          <input type="email" placeholder="ایمیل شما" />
          <input type="number" placeholder="کد ملی" />
          <input type="number" placeholder="کد پستی" />
          <input type="number" placeholder="شماره همراه" />
          <input type="number" placeholder="شماره تلفن ثابت" />
          <input type="number" placeholder="شماره شبا" />
         
          <textarea placeholder="توضیخات"></textarea>
          <button type="submit">ارسال</button>
          {message && <span>پیغام شما ارسال شد :)</span>}
        </form>
      </div>
    </div>
  );
}