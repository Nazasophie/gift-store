import React, { useState, useContext } from "react";
import homeStyle from "./HomePageStyle.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext";
import { useCart } from "react-use-cart";

// Images import start
import LandingPic from "../Assets/images/landingPic.svg";
import ShopCart from "../Assets/images/shopCart.png";
import Partners from "../Assets/images/partners.png";
import WeddingGifts from "../Assets/images/Wedding-gifts.png";
import FoodBaskets from "../Assets/images/Food-baskets.png";
import GiftsForWomen from "../Assets/images/Gifts-for-women.png";
import BirthdayGifts from "../Assets/images/Birthday-gifts.png";
import AnniversaryGifts from "../Assets/images/Anniversary-gifts.png";
import CongratulationGifts from "../Assets/images/Congratulation-gifts.png";
import BrandNewAddition from "../Assets/images/Brand-New-Addition.png";
import SpecialWeddingHamper from "../Assets/images/Special-Wedding-Hamper.png";
import Naira from "../Assets/images/naira.png";
import BeautyGiftBasket from "../Assets/images/Beauty-Gift-Basket.png";
import GiftForHer from "../Assets/images/Gift-for-Her.png";
import LuxuryFoodBasket from "../Assets/images/Luxury-Food-Basket.png";
import NewBornBabyGiftBasket from "../Assets/images/New-Born-baby-Gift-Basket.png";
import MensGroomingBasket from "../Assets/images/Mens-Grooming-Basket.png";
import Clock from "../Assets/images/Clock.png";
import Delivery from "../Assets/images/delivery.png";
import ReturnPolicy from "../Assets/images/return-policy.png";
import LandingPicMobile from "../Assets/images/landing-pic-mobile.svg";
import PartnersMobile from "../Assets/images/partner-mobile.png";
import BrandNewMobile from "../Assets/images/brand-new-pic-mobile.png";

import BigImg1 from "../Assets/images/product-img1.png";
import Item2 from "../Assets/images/product-img2.svg";
import Item3 from "../Assets/images/product-img3.svg";
import Item4 from "../Assets/images/product-img4.svg";
import MoreItem1 from "../Assets/images/more-item-1.png";
import MoreItem2 from "../Assets/images/more-item-2.png";
import MoreItem3 from "../Assets/images/more-item-3.png";

function HomePage() {
  const { addItem } = useCart();
  const [isAddedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (item) => {
    addItem(item);
    setAddedToCart(true);

    // Hide the pop-up after 3 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  // Top Item list
  const topPicks = [
    {
      id: 1,
      name: "For the Groom Classic",
      price: 45000,
      description:
        "Our Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
      image: BigImg1,
      rating: 4.0,
      reviews: 10,
    },
    {
      id: 2,
      name: "Beauty Gift Basket",
      image: BeautyGiftBasket,
      price: 25000,
      description:
        "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
      images: [BigImg1, Item2, Item3, Item4],
      rating: 4.0,
      reviews: 20,
    },
    {
      id: 3,
      name: "Gift for Her",
      image: GiftForHer,
      price: 15000,
      description:
        "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
      rating: 4.0,
      reviews: 20,
    },
    {
      id: 4,
      name: "Luxury Food Basket",
      image: LuxuryFoodBasket,
      price: 60000,
      description:
        "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
      rating: 4.0,
      reviews: 20,
    },
    {
      id: 5,
      name: "New Born baby Gift Basket",
      image: NewBornBabyGiftBasket,
      price: 20000,
      description:
        "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
      rating: 4.0,
      reviews: 20,
    },
    {
      id: 6,
      name: "Men’s Grooming Basket",
      image: MensGroomingBasket,
      price: 15000,
      description:
        "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
      rating: 4.0,
      reviews: 20,
    },
  ];

  return (
    <div className={homeStyle.container}>
      <div>
        <Header />
      </div>
      <main>
        <div className={homeStyle.homeStyle}>
          <div className={homeStyle.landingLeft}>
            <h1 className={homeStyle.landingh1}>
              Special Birthday <br />
              Offers!
            </h1>
            <p className={homeStyle.landingp}>
              Shop now and save 10% on your first order <br />
              Use the code BIRTHDAY10
            </p>
            <div className={homeStyle.button}>
              <Link to="/productlisting">
                <a className={homeStyle.landingLink} href="#">
                  <img src={ShopCart} alt="" /> Shop Now
                </a>
              </Link>
            </div>
          </div>
          <div className={homeStyle.landingRight}>
            <img
              className={homeStyle.landingRightPic}
              src={LandingPic}
              alt=""
            />
            <img
              className={homeStyle.landingRightPicMobile}
              src={LandingPicMobile}
              alt=""
            />
          </div>
        </div>
        {/* Partners start */}
        <div className={homeStyle.partnersDiv}>
          <img src={Partners} alt="" />
        </div>
        <div className={homeStyle.partnersDivMobile}>
          <img src={PartnersMobile} alt="" />
        </div>
        {/* Partners end */}
        {/* Track Service start */}
        <div className={homeStyle.trackServiceDivMobile}>
          <div className={homeStyle.trackServiceDiv}>
            <div className={homeStyle.trackService}>
              <p className={homeStyle.trackServicep}>Track Service</p>
              <p className={homeStyle.trackServiceSmallp}>
                This service will help you track where your order is now.
              </p>
              <form className={homeStyle.form}>
                <input
                  className={homeStyle.trackInput}
                  type="text"
                  placeholder="Enter tracking ID"
                />
                <button className={homeStyle.trackBtn} type="submit">
                  Track order
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Track Service end */}
        {/* Trending categories start */}
        <div className={homeStyle.trendingDiv}>
          <div>
            <h3 className={homeStyle.treadingHeader}>Trending categoties</h3>
            <div className={homeStyle.trendingInputDiv1}>
              <div className={homeStyle.trendingInputDiv}>
                <div className={homeStyle.trendingItem1}>
                  <a className={homeStyle.treadingName} href="#">
                    Wedding gifts
                  </a>
                  <div className={homeStyle.trendingImgDiv}>
                    <a href="#">
                      <img
                        className={homeStyle.treadingImg1}
                        src={WeddingGifts}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* Treading box 2 start */}
              <div>
                <div className={homeStyle.trendingItem1}>
                  <a className={homeStyle.treadingName} href="#">
                    Food baskets
                  </a>
                  <div className={homeStyle.trendingImgDiv}>
                    <a href="#">
                      <img
                        className={homeStyle.treadingImg1}
                        src={FoodBaskets}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* Treading box 2 end */}
              {/* Treading box 3 start */}
              <div>
                <div className={homeStyle.trendingItem1}>
                  <a className={homeStyle.treadingName} href="#">
                    Gifts for women
                  </a>
                  <div className={homeStyle.trendingImgDiv}>
                    <a href="#">
                      <img
                        className={homeStyle.treadingImg1}
                        src={GiftsForWomen}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* Treading box 3 end */}
            </div>
          </div>
        </div>
        {/* Trending categories send */}
        {/* Popular categories start */}
        <div className={homeStyle.trendingDiv}>
          <div>
            <h3 className={homeStyle.treadingHeader}>Popular categories</h3>
            <div className={homeStyle.trendingInputDiv1}>
              <div className={homeStyle.trendingInputDiv}>
                <div className={homeStyle.trendingItem1}>
                  <a className={homeStyle.treadingName} href="#">
                    Birthday gifts
                  </a>
                  <div className={homeStyle.trendingImgDiv}>
                    <a href="#">
                      <img
                        className={homeStyle.treadingImg1}
                        src={BirthdayGifts}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* Popular box 2 start */}
              <div>
                <div className={homeStyle.trendingItem1}>
                  <a className={homeStyle.treadingName} href="#">
                    Anniversary gifts
                  </a>
                  <div className={homeStyle.trendingImgDiv}>
                    <a href="#">
                      <img
                        className={homeStyle.treadingImg1}
                        src={AnniversaryGifts}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* Popular box 2 end */}
              {/* Popular box 3 start */}
              <div>
                <div className={homeStyle.trendingItem1}>
                  <a className={homeStyle.treadingName} href="#">
                    Congratulation gifts
                  </a>
                  <div className={homeStyle.trendingImgDiv}>
                    <a href="#">
                      <img
                        className={homeStyle.treadingImg1}
                        src={CongratulationGifts}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* Popular box 3 end */}
            </div>
          </div>
        </div>
        {/* Popular categories end */}
        {/* Brand New Addition start */}
        <div className={homeStyle.brandNew}>
          <div className={homeStyle.brandNewRight}>
            <img
              className={homeStyle.brandNewPicDesktop}
              src={BrandNewAddition}
              alt=""
            />
            <img
              className={homeStyle.brandNewPicMobile}
              src={BrandNewMobile}
              alt=""
            />
          </div>
          <div className={homeStyle.brandNewLeft}>
            <p className={homeStyle.brandNewpAdd}>Brand New Addition</p>
            <h1 className={homeStyle.brandNew1}>
              Flower <br />
              Gift Baskets
            </h1>
            <p className={homeStyle.brandNewp}>
              Send beautiful flower baskets to that special <br />
              person in your life.
            </p>
            <div className={homeStyle.brandNewBtn}>
              <a className={homeStyle.brandNewLink} href="#">
                <img src={ShopCart} alt="" /> Shop Now
              </a>
            </div>
          </div>
        </div>
        {/* Brand New Addition end */}
        {/* Top Picks start */}
        <div className={homeStyle.TopPicksDiv}>
          <div className={homeStyle.TopPicksDivMobile}>
            <h3 className={homeStyle.TopPicksHeader}>Top Picks</h3>
            <div className={homeStyle.TopPicksDiv1}>
              {/* Added to cart pop-up start */}
              {isAddedToCart && (
                <div className={homeStyle.addedToCartPopup}>
                  Added to cart successfully!
                </div>
              )}
              {/* Added to cart pop-up end */}
              {topPicks.map((item, index) => {
                return (
                  <div className={homeStyle.TopPicksDiv} key={index}>
                    <div className={homeStyle.TopPicksItem1}>
                      <div className={homeStyle.TopPicksImgDiv}>
                        {/* Add Link to the product details page */}
                        <Link to={`/items/${item.id}`}>
                          <img
                            className={homeStyle.TopPicksImg1}
                            src={item.image}
                            alt=""
                          />
                        </Link>
                        <div className={homeStyle.productNameDiv}>
                          <div className={homeStyle.productNameDiv2}>
                            <a className={homeStyle.TopPicksName} href="#">
                              <p className={homeStyle.productName}>
                                {item.name}
                              </p>
                              <div className={homeStyle.nairaDiv}>
                                <img
                                  className={homeStyle.naira}
                                  src={Naira}
                                  alt=""
                                />
                                <p className={homeStyle.amount}>{item.price}</p>
                              </div>
                            </a>
                            <button
                              className={homeStyle.TopPicksBtn}
                              type="submit"
                              // onClick={() => addItem(item)}
                              onClick={(event) => {
                                if (event.onClick) {
                                  event.onClick();
                                }

                                handleAddToCart(item);
                              }}
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Top Picks end */}
        {/* Time Delivery Policy start */}
        <div className={homeStyle.TDPdiv}>
          <div className={homeStyle.TDPdiv2}>
            <div className={homeStyle.clock}>
              <img src={Clock} alt="Clock pic" />
              <h5 className={homeStyle.TDPheader}>Scheduled Delivery</h5>
              <p className={homeStyle.TDPbody}>
                You can schedule gift deliveries
                <br />
                for specific dates.
              </p>
            </div>
            <div className={homeStyle.clock}>
              <img src={Delivery} alt="Delivery pic" />
              <h5 className={homeStyle.TDPheader}>Free Delivery</h5>
              <p className={homeStyle.TDPbody}>
                We offer free delivery on orders
                <br />
                over N50,000
              </p>
            </div>
            <div className={homeStyle.clock}>
              <img src={ReturnPolicy} alt="Return Policy Icon" />
              <h5 className={homeStyle.TDPheader}>Hassle-free Return policy</h5>
              <p className={homeStyle.TDPbody}>
                We offer a exchange return policy
                <br />
                on gifts purchased.
              </p>
            </div>
          </div>
        </div>
        {/* Time Delivery Policy end */}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
