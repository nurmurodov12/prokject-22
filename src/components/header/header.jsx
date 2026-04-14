import "./header.css";
import langUzb from "../../image/uzb.png";
import uzum from "../../image/uzum.png";
import discount from "../../image/nasiya.png";
import headerBanner from'../../image/banner.jpg'

import React from "react";

const Header = () => {
  return (
    <div className="container header">
      <div className="header-adress">
        <div className="header-adress-left">
          <div className="left-location">
            <i className="fa-solid fa-location-dot"></i>
            <p>
              Shahar: <span>Kattaqo'rg'on</span>
            </p>
          </div>

          <p className="left-p">
            <a href="#">Topshirish punktlari</a>
          </p>
        </div>

        <div className="header-adress-center">
          <p>Buyurtmangiz 1 kunda bepul yetkazib beramiz</p>
        </div>

        <div className="header-adress-right">
          <div className="right-info">
            <p>
              <a href="#">Savol-javoblar</a>
            </p>

            <p>
              <a href="">Buyurtmalarim</a>
            </p>
          </div>

          <div className="right-lang">
            <img src={langUzb} alt="" />
            <p>O'zbekcha</p>
          </div>
        </div>
      </div>

      <div className="header-navigation">
        <div className="nav-left">
          <a href="#">
            <img src={uzum} alt="" />
          </a>
        </div>

        <div className="nav-center">
          <div className="catalog">
            <i className="fa-regular fa-folder-open"></i>
            <p>Katalog</p>
          </div>

          <form className="nav-center-form">
            <input
              type="text"
              name="search"
              id=""
              placeholder="Mahsulotlar va turkumlar izlash"
            />
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        <div className="nav-right">
          <div className="right-user">
            <i className="fa-regular fa-user"></i>
            <p>Kirish</p>
          </div>

          <div className="right-heart">
            <i className="fa-regular fa-heart"></i>
            <p>Saralanganlar</p>
          </div>

          <div className="right-basket">
            <i className="fa-solid fa-bag-shopping"></i>
            <p>Savat</p>
          </div>
        </div>
      </div>

      <div className="header-category">
        <div className="discount">
          <img src={discount} alt="" />
          <p>Muddatli to'lov</p>
        </div>

        <div className="category">
          <ul>
            <li>
              <a href="#">Elektronika</a>
            </li>
            <li>
              <a href="#">Maishiy texnika</a>
            </li>
            <li>
              <a href="#">Kiyim</a>
            </li>
            <li>
              <a href="#">Poyabzallar</a>
            </li>
            <li>
              <a href="#">Aksessuarlar</a>
            </li>
            <li>
              <a href="#">Go'zallik va parvarish</a>
            </li>
            <li>
              <a href="#">Salomatlik</a>
            </li>
            <li>
              <a href="#">Uy-ro'zg'or buyumlari</a>
            </li>
            <li>
              <a href="#">Qurilish va ta'mirlash</a>
            </li>
          </ul>
        </div>

        <div className="again">
          <p>
            Yana
            <i>
              <i className="fa-solid fa-angle-down"></i>
            </i>
          </p>
        </div>
      </div>

      <div className="header-banner">
        <img src={headerBanner} alt="" />
      </div>
    </div>
  );
};

export default Header;
