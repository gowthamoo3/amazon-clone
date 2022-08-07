import React from "react";
import "./Home.css";
import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div className="home">
      <div className="home__image">
        <Carousel
          autoPlay={true}
          interval={1800}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop={true}
        >
          <div className="home__imageMask">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" />
          </div>
          <div className="home_imageMaskBottom">
            <img src="https://m.media-amazon.com/images/I/513RE-ogNOL._SX3000_.jpg" />
          </div>
          <div className="home__imageMask">
            <img src="https://m.media-amazon.com/images/I/718XseFOEUL._SX3000_.jpg" />
          </div>
        </Carousel>
      </div>
      <div className="home__row">
        <Product
          id={1}
          title={
            "OnePlus Smart Band: 13 Exercise Modes, Blood Oxygen Saturation (SpO2)"
          }
          image={
            "https://m.media-amazon.com/images/I/61XPTRJZcCL._AC_SY220_.jpg"
          }
          price={1699}
          rating={4}
        />
        <Product
          id={2}
          title={
            "HP 15s-11th Gen Intel Core i3- 8GB RAM/512GB SSD 15.6 inch(39.6cm) FHD"
          }
          image={
            "https://m.media-amazon.com/images/I/41lGAedXWpL._AC_SY400_.jpg"
          }
          price={69990}
          rating={4}
        />
        <Product
          id={3}
          title={
            "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money"
          }
          image={
            "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_SY340_.jpg"
          }
          price={549}
          rating={4}
        />
      </div>
      <div className="home__row r2">
        <Product
          id={4}
          title={"Wildcraft 35 Ltrs 18 inch Backpack (11908 Navy_Navy)"}
          image={
            "https://m.media-amazon.com/images/I/61R11t0oV9L._AC_SY350_.jpg"
          }
          price={899}
          rating={3}
        />
        <Product
          id={5}
          title={"        Apple iPhone 13 Pro (128GB) - Sierra Blue       "}
          image={"https://m.media-amazon.com/images/I/81MF389-9gS._SX679_.jpg"}
          price={55999}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id={6}
          title={
            " Hisense 80 cm (32 inches) HD Ready Smart Certified Android LED TV 32E4G (Black) (2022 Model) | With Android 11"
          }
          image={"https://m.media-amazon.com/images/I/61BX7+ZllfL._SX679_.jpg"}
          price={32999}
          rating={4}
        />
        <Product
          id={7}
          title={
            "boAt Airdopes 121v2 True Wireless Earbuds with Upto 14 Hours Playback, Lightweight Earbuds, 8MM Drivers, LED Indicators and Multifunction Controls(Active Black)"
          }
          image={
            "https://m.media-amazon.com/images/I/71ByNT34bfL._AC_UY436_FMwebp_QL65_.jpg"
          }
          price={1399}
          rating={3}
        />
        <Product
          id={8}
          title={
            "Samsung Galaxy S20 FE 5G (Cloud Mint, 8GB RAM, 128GB Storage)"
          }
          image={"https://m.media-amazon.com/images/I/812yohjGZ2L._SL1500_.jpg"}
          price={39990}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
