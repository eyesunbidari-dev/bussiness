import React , {useState} from 'react';
import "./news.scss";

function News() {
  const[index , setIndex] = useState(0)
  return (
    <div className='Tabs'>
         <div className='tabsList'>
            <div className={`tabHead ${index===0 ? "active" : null} `} onClick={()=>{setIndex(0)}}>
               <h1>لوله پلی اتیلن</h1>
            </div>
            <div className={`tabHead ${index===1 ? "active" : null} `} onClick={()=>{setIndex(1)}}>
              <h1>لوله پلی پرو پیلن</h1>
            </div>
            <div className={`tabHead ${index===2 ? "active" : null} `} onClick={()=>{setIndex(2)}}>
              <h1>لوله پنج لایه </h1>
            </div>
            <div className={`tabHead ${index===3 ? "active" : null} `} onClick={()=>{setIndex(3)}}>
               <h1>لوله و اتصالات pvc </h1>
            </div>
            <div className={`tabHead ${index===4 ? "active" : null} `} onClick={()=>{setIndex(4)}}>
              <h1>نوار تیپ آبیاری </h1>
            </div>
            <div className={`tabHead ${index===5 ? "active" : null} `} onClick={()=>{setIndex(5)}}>
              <h1>لوله های تاشو پلی اتیلن</h1> 
            </div>
         </div>
         <div className='tabContent' hidden={index !== 0}>
         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
         </div>
         <div className='tabContent' hidden={index !== 1}>
           content2
         </div>
         <div className='tabContent' hidden={index !== 2}>
           content3
         </div>
         <div className='tabContent' hidden={index !== 3}>
           content4
         </div>
         <div className='tabContent' hidden={index !== 4}>
           content5
         </div>
         <div className='tabContent' hidden={index !== 5}>
           content6
         </div>
    </div>
  )
}

export default News