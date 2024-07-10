import React, { useState } from "react";
import productListing from "./ProductListing.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

// Image import start
import ProductLandingPic from "../Assets/images/product-landing-pic.png";
import ProductLandingPicMobile from "../Assets/images/product-listing-pic-mobile.png";
import ProductItem1 from "../Assets/images/product-item1.png";
import ProductItem2 from "../Assets/images/product-item2.png";
import ProductItem3 from "../Assets/images/product-item3.png";
import ProductItem4 from "../Assets/images/product-item4.png";
import ProductItem5 from "../Assets/images/product-item5.png";
import ProductItem6 from "../Assets/images/product-item6.png";
import ProductItem7 from "../Assets/images/product-item7.png";
import ProductItem8 from "../Assets/images/product-item8.png";
import ProductItem9 from "../Assets/images/product-item9.png";
import Naira from "../Assets/images/naira.png";

function ProductListingPage() {
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

  const topPicks = [
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
  return (
    <div className={productListing.container}>
      <div>
        <Header />
      </div>
      <main>
        <div className={productListing.homeStyle}>
          <div className={productListing.landingLeft}>
            <h1 className={productListing.landingh1}>
              Celebrating a <br />
              Beautiful Union.
            </h1>
            <p className={productListing.landingp}>
              Our wedding gifts are the perfect way to <br />
              send your love and best wishes to a newly <br />
              married couple.
            </p>
          </div>
          <div className={productListing.landingRight}>
            <img
              className={productListing.landingRightPic}
              src={ProductLandingPic}
              alt=""
            />
            <img
              className={productListing.landingRightPicMobile}
              src={ProductLandingPicMobile}
              alt=""
            />
          </div>
        </div>

        {/* Sort start */}
        <div className={productListing.sortDiv}>
          <div className={productListing.sortDiv1}>
            <h5 className={productListing.sortBy}>Sort by</h5>
            <select className={productListing.select}>
              <option>Price</option>
              <option>gift</option>
            </select>
            <p className={productListing.itemNumber}>9 items available</p>
          </div>
        </div>
        {/* Sort end */}
        {/* Top Picks start */}
        <div className={productListing.TopPicksDiv}>
          <div className={productListing.TopPicksDivMobile}>
            {/* <h3 className={productListing.TopPicksHeader}>Top Picks</h3> */}

            <div className={productListing.TopPicksDiv1}>
              {/* Top Pick box 1 start */}
              {isAddedToCart && (
                <div className={productListing.addedToCartPopup}>
                  Added to cart successfully!
                </div>
              )}
              {/* Added to cart pop-up end */}
              {topPicks.map((item, index) => {
                return (
                  <div className={productListing.TopPicksDiv} key={index}>
                    <div className={productListing.TopPicksItem1}>
                      <div className={productListing.TopPicksImgDiv}>
                        {/* Add Link to the product details page */}
                        <Link to={`/items/${item.id}`}>
                          <img
                            className={productListing.TopPicksImg1}
                            src={item.image}
                            alt=""
                          />
                        </Link>
                        <div className={productListing.productNameDiv}>
                          <div className={productListing.productNameDiv2}>
                            <a className={productListing.TopPicksName} href="#">
                              <p className={productListing.productName}>
                                {item.name}
                              </p>
                              <div className={productListing.nairaDiv}>
                                <img
                                  className={productListing.naira}
                                  src={Naira}
                                  alt=""
                                />
                                <p className={productListing.amount}>
                                  {item.price}
                                </p>
                              </div>
                            </a>
                            <button
                              className={productListing.TopPicksBtn}
                              type="submit"
                              // onClick={() => addItem(item)}
                              onClick={(event) => {
                                // Execute the existing onClick handler (if there is one)
                                if (event.onClick) {
                                  event.onClick();
                                }

                                // Add your new onClick functionality here
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
              {/* Top Pick box 1 end */}
            </div>
          </div>
        </div>
        {/* Top Picks end */}
        {/* Item number start */}
        <div className={productListing.numberDivCon}>
          <div className={productListing.numberBox}>
            <p className={productListing.number1}>1</p>
          </div>
        </div>
        {/* Item number end */}
        {/* Footer start */}
        <div>
          <Footer />
        </div>
        {/* Footer end */}
      </main>
    </div>
  );
}

export default ProductListingPage;
