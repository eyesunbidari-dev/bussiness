import React from 'react';
import { Link } from 'react-router-dom';
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
  <div className={"menu "+(menuOpen && "active")}>
       <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/">خانه</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/about">درباره ما</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/products">محصولات</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/news">مقالات</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/honors">افتخارات</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/coop">همکاری با ما</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/contact">ارتباط با ما</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/employ">استخدام</Link>
        </li>
      </ul>

  </div>);
}
