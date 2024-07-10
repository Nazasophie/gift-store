import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import product from "./ProductDetails.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";

// Images import start
import BigImg1 from "../Assets/images/product-img1.png";
import Item2 from "../Assets/images/product-img2.svg";
import Item3 from "../Assets/images/product-img3.svg";
import Item4 from "../Assets/images/product-img4.svg";
import Star from "../Assets/images/star.svg";
import NairaIcon from "../Assets/images/product-naira.svg";
import Dot from "../Assets/images/product-dot.svg";
import CartIcon from "../Assets/images/product-cart.svg";
import MoreItem1 from "../Assets/images/more-item-1.png";
import MoreItem2 from "../Assets/images/more-item-2.png";
import MoreItem3 from "../Assets/images/more-item-3.png";
import Naira from "../Assets/images/more-naira.svg";
import Back from "../Assets/images/more-back-arrow.svg";
import Front from "../Assets/images/more-front-arrow.svg";
import BeautyGiftBasket from "../Assets/images/Beauty-Gift-Basket.png";
import GiftForHer from "../Assets/images/Gift-for-Her.png";
import LuxuryFoodBasket from "../Assets/images/Luxury-Food-Basket.png";
import NewBornBabyGiftBasket from "../Assets/images/New-Born-baby-Gift-Basket.png";
import MensGroomingBasket from "../Assets/images/Mens-Grooming-Basket.png";
import ProductItem1 from "../Assets/images/product-item1.png";
import ProductItem2 from "../Assets/images/product-item2.png";
import ProductItem3 from "../Assets/images/product-item3.png";
import ProductItem4 from "../Assets/images/product-item4.png";
import ProductItem5 from "../Assets/images/product-item5.png";
import ProductItem6 from "../Assets/images/product-item6.png";
import ProductItem7 from "../Assets/images/product-item7.png";
import ProductItem8 from "../Assets/images/product-item8.png";
import ProductItem9 from "../Assets/images/product-item9.png";

const items = [
  {
    id: 1,
    name: "For the Groom Classic",
    price: 45000,
    description:
      "Our Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    image: BigImg1,
    rating: 4.0,
    reviews: 10,
    relatedItems: [
      {
        id: 2,
        name: "Special Wedding Hamper",
        price: 30000,
        image: MoreItem1,
      },
      {
        id: 3,
        name: "Beauty Gift Basket",
        price: 25000,
        image: MoreItem2,
      },
      // Add more related items as needed
    ],
  },
  {
    id: 2,
    name: "Beauty Gift Basket",
    image: BeautyGiftBasket,
    price: "25,000",
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
  {
    id: 7,
    name: "Special Wedding Hamper",
    price: 30000,
    description:
      "Our Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    image: ProductItem1,
    rating: 4.0,
    reviews: 10,
  },
  {
    id: 8,
    name: "Premium Wedding Hamper",
    image: ProductItem2,
    price: 45000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    // images: [BigImg1, Item2, Item3, Item4],
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 9,
    name: "For the Bride",
    image: ProductItem3,
    price: 35000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 10,
    name: "For the Groom",
    image: ProductItem4,
    price: 35000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 11,
    name: "Civil Wedding Hamper",
    image: ProductItem5,
    price: 25000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 12,
    name: "For the Bride Classic",
    image: ProductItem6,
    price: 55000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 13,
    name: "For the Groom Classic",
    image: ProductItem7,
    price: 45000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 14,
    name: "Civil Wedding Classic Hamper",
    image: ProductItem8,
    price: 40000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 15,
    name: "Honeymoon Classic",
    image: ProductItem9,
    price: 35000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    rating: 4.0,
    reviews: 20,
  },
];
function ProductDetails() {
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
  const { itemId } = useParams();
  const item = items.find((item) => item.id === parseInt(itemId));

  if (!item) {
    // Handle item not found
    return <div>Item not found</div>;
  }
  return (
    <div className={product.container}>
      <div className={product.HeaderDiv}>
        <Header />
      </div>
      <main>
        {/* Added to cart pop-up start */}
        {isAddedToCart && (
          <div className={product.addedToCartPopup}>
            Added to cart successfully!
          </div>
        )}
        {/* Added to cart pop-up end */}
        {/* Section 1 start */}
        <section className={product.section1}>
          <div className={product.section1Div1}>
            <div className={product.img1Div}>
              <img className={product.item1IMG} src={item.image} alt="" />
            </div>
            <div className={product.itemSmallImgDiv}>
              <div className={product.item1PicDiv}>
                <img className={product.item2IMG} src={Item2} alt="" />
              </div>
              <div className={product.item1PicDiv}>
                <img className={product.item3IMG} src={Item3} alt="" />
              </div>
              <div className={product.item1PicDiv}>
                <img className={product.item4IMG} src={Item4} alt="" />
              </div>
              <div className={product.morePicDiv}>
                <p className={product.morePic}>+2 more</p>
              </div>
            </div>
          </div>
          <div className={product.section1Div2Mobile}>
            <div className={product.section1Div2}>
              <h2 className={product.section1header}>{item.name}</h2>
              <div className={product.starDiv}>
                <img className={product.starImgMobile} src={Star} alt="" />
                <p className={product.reviews}>{item.reviews} reviews</p>
              </div>
              <div className={product.nairaDiv1}>
                <img
                  className={product.nairaIMGmobile}
                  src={NairaIcon}
                  alt=""
                />
                <p className={product.amount1}>{item.price.toLocaleString()}</p>
              </div>
              <div className={product.itemDiv}>
                <img src={Dot} alt="" />
                <p className={product.item}>5 items inside</p>
              </div>
            </div>
            <div className={product.addToCartDiv}>
              <button
                onClick={(event) => {
                  if (event.onClick) {
                    event.onClick();
                  }

                  handleAddToCart(item);
                }}
                className={product.addToCartBtn}
              >
                <img src={CartIcon} alt="" />
                <p className={product.addToCart}>Add to cart</p>
              </button>
            </div>
            <div className={product.addToCartDiv2}>
              <Link to="/productlisting">
                <button className={product.addToCartBtn2}>
                  <p className={product.addToCart2}>Continue shopping</p>
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* Section 1 end */}
        {/* Section 2 start */}
        <section className={product.section2}>
          <div className={product.section2Div1}>
            <div className={product.DRdiv}>
              <p className={product.Details}>Details</p>
              <p className={product.Reviews}>Reviews</p>
            </div>
            <p className={product.aboutProduct}>
              Our Special Wedding Hamper are a thoughtful selection <br /> and
              mix of items that caters to couple’s needs and <br /> preferences.
            </p>
            <div className={product.itemsInsideDiv}>
              <img src={Dot} alt="" />
              <p className={product.itemsInside}>Man Scape Kit</p>
            </div>
            <div className={product.itemsInsideDiv}>
              <img src={Dot} alt="" />
              <p className={product.itemsInside}>Men’s Accessories Box</p>
            </div>
            <div className={product.itemsInsideDiv}>
              <img src={Dot} alt="" />
              <p className={product.itemsInside}>Bedroom Slippers</p>
            </div>
            <div className={product.itemsInsideDiv}>
              <img src={Dot} alt="" />
              <p className={product.itemsInside}>Men’s Purse</p>
            </div>
            <div className={product.itemsInsideDiv}>
              <img src={Dot} alt="" />
              <p className={product.itemsInside}>Men’s Perfume</p>
            </div>
          </div>
          <div className={product.section2Div2}>
            <h2 className={product.section1header}>Gift Ratings</h2>
            <div className={product.secondStarDiv}>
              <img className={product.secondStarIMGmobile} src={Star} alt="" />
              <p className={product.ratingPoint}>4.0</p>
            </div>
            <div className={product.ratingDiv}>
              <p className={product.rating5}>5</p>
              <div className={product.ratingEmptyDiv1}>
                <div className={product.ratingEmptyInsideDiv1}></div>
              </div>
              <p className={product.rating7}>7</p>
            </div>
            <div className={product.ratingDiv}>
              <p className={product.rating5}>4</p>
              <div className={product.ratingEmptyDiv1}>
                <div className={product.ratingEmptyInsideDiv2}></div>
              </div>
              <p className={product.rating7}>2</p>
            </div>
            <div className={product.ratingDiv}>
              <p className={product.rating5}>3</p>
              <div className={product.ratingEmptyDiv1}>
                <div className={product.ratingEmptyInsideDiv3}></div>
              </div>
              <p className={product.rating7}>1</p>
            </div>
            <div className={product.ratingDiv}>
              <p className={product.rating5}>2</p>
              <div className={product.ratingEmptyDiv1}>
                <div className={product.ratingEmptyInsideDiv4}></div>
              </div>
              <p className={product.rating7}>0</p>
            </div>
            <div className={product.ratingDiv}>
              <p className={product.rating5}>1</p>
              <div className={product.ratingEmptyDiv1}>
                <div className={product.ratingEmptyInsideDiv5}></div>
              </div>
              <p className={product.rating7}>0</p>
            </div>
          </div>
        </section>
        {/* Section 2 end */}
        {/* Section 3 start */}
        <section>
          {/* Top Picks start */}
          <div className={product.TopPicksDiv}>
            <div className={product.TopPicksDivMobile}>
              <h3 className={product.TopPicksHeader}>Related Gifts</h3>

              <div className={product.TopPicksDiv1}>
                {/* Top Pick box 1 start */}
                <div className={product.TopPicksDiv}>
                  <div className={product.TopPicksItem1}>
                    <div className={product.TopPicksImgDiv}>
                      <a href="#">
                        <img
                          className={product.TopPicksImg1}
                          src={MoreItem1}
                          alt=""
                        />
                      </a>
                      <div className={product.productNameDiv}>
                        <div className={product.productNameDiv2}>
                          <a className={product.TopPicksName} href="#">
                            <p className={product.productName}>
                              Special Wedding Hamper
                            </p>
                            <div className={product.nairaDiv}>
                              <img
                                className={product.naira}
                                src={Naira}
                                alt=""
                              />
                              <p className={product.amount}>30,000</p>
                            </div>
                          </a>
                          <button className={product.TopPicksBtn} type="submit">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Top Pick box 1 end */}
                {/* Top Pick box 2 start */}
                <div className={product.TopPicksDiv}>
                  <div className={product.TopPicksItem1}>
                    <div className={product.TopPicksImgDiv}>
                      <a href="#">
                        <img
                          className={product.TopPicksImg1}
                          src={MoreItem2}
                          alt=""
                        />
                      </a>
                      <div className={product.productNameDiv}>
                        <div className={product.productNameDiv2}>
                          <a className={product.TopPicksName} href="#">
                            <p className={product.productName}>
                              Beauty Gift Basket
                            </p>
                            <div className={product.nairaDiv}>
                              <img
                                className={product.naira}
                                src={Naira}
                                alt=""
                              />
                              <p className={product.amount}>25,000</p>
                            </div>
                          </a>
                          <button className={product.TopPicksBtn} type="submit">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Top Pick box 2 end */}
                <div className={product.TopPicks3Mobile}>
                  {/* Top Pick box 3 start */}
                  <div className={product.TopPicksDiv}>
                    <div className={product.TopPicksItem1}>
                      <div className={product.TopPicksImgDiv}>
                        <a href="#">
                          <img
                            className={product.TopPicksImg1}
                            src={MoreItem3}
                            alt=""
                          />
                        </a>
                        <div className={product.productNameDiv}>
                          <div className={product.productNameDiv2}>
                            <a className={product.TopPicksName} href="#">
                              <p className={product.productName}>
                                Gift for Her
                              </p>
                              <div className={product.nairaDiv}>
                                <img
                                  className={product.naira}
                                  src={Naira}
                                  alt=""
                                />
                                <p className={product.amount}>15,000</p>
                              </div>
                            </a>
                            <button
                              className={product.TopPicksBtn}
                              type="submit"
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Top Pick box 3 end */}
                </div>
              </div>
            </div>
          </div>
          {/* Top Picks end */}
          {/* Arrow Front and Back start */}
          <div className={product.arrowDiv}>
            <div className={product.backArrowDiv}>
              <img className={product.arrowImg} src={Back} alt="" />
            </div>
            <div className={product.backArrowDiv}>
              <img className={product.arrowImg} src={Front} alt="" />
            </div>
          </div>
          {/* Arrow Front and Back end */}
        </section>
        {/* Section 3 end */}
      </main>
      {/* Footer start */}
      <div>
        <Footer />
      </div>
      {/* Footer end */}
    </div>
  );
}

export default ProductDetails;
