import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
 Productone,
 Producttwo,
 Productthree,
 Productfour,
 Productfive,
 Productsix
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "pone",
      title: "لوله  پلی اتیلن",
    },
    {
      id: "ptwo",
      title: "لوله پلی پروپیلن",
    },
    {
      id: "pthree",
      title: "لوله پنج لایه",
    },
    {
      id: "pfour",
      title: "لوله pvc",
    },
    {
      id: "pfive",
      title: "نوار تیپ آبیاری",
    },
    {
        id: "psix",
        title: "لوله تاشو",
      }

   
  ];

  useEffect(() => {
    switch (selected) {
      case "pone":
        setData(Productone);
        break;
      case "ptwo":
        setData(Producttwo);
        break;
      case "pthree":
        setData(Productthree);
        break;
      case "pfour":
        setData(Productfour);
        break;
      case "pfive":
        setData(Productfive);
        break;
        case "psix":
        setData(Productsix);
        break;
      default:
        setData(Productone);
        
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>محصولات</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
