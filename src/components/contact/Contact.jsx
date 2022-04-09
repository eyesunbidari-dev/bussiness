import { useState } from "react";
import "./contact.scss";

export default function Contact() {
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
        <h2>ارتباط با ما</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="ایمیل شما" />
         
          <textarea placeholder="پیغام شما"></textarea>
          <button type="submit">ارسال</button>
          {message && <span>پیغام شما ارسال شد :)</span>}
        </form>
      </div>
    </div>
  );
}


