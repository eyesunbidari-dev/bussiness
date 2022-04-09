import "./about.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function About() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["پلی اتیلن", "پلی پروپن", "پنج لایه" , "pvc", "نوار تیپ آبی", "تاشو"],
    });
  }, []);

  return (
    <div className="about" id="abot">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/1.3.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>آرتمن هوپاد</h1>
          <h3>شرکت آرتمن هوپاد فعالیت خود را با در اختیار داشتن تجربه مفید گذشته و با استفاده از تکنولوژی مدرن و به کار گیری نیروهای کار آمد جهت برداشت گامی جدید و برطرف کردن نیاز های صنعت پلی اتیلن مطابق با استانداردهای جهانی با سیستم مدیریت برتر (کیفیت برتر ، نیاز ایرانی ) آغاز نمود .</h3>
          <hr/>
          <h3>
          ارائه دهنده انواع لوله های <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

