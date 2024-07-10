import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom"; // Add useHistory here
import headerStyle from "./HeaderStyle.module.css";
import GiftBasket from "../Dropdown/GiftBasket";
import GiftOccasionsDropdown from "../Dropdown/GiftOccasionsDropdown";
import MobileDropDown from "../Dropdown/MobileDropDown";
import MobileSearch from "../Dropdown/MobileSearch";
import { useCart } from "react-use-cart";

import cart from "../Assets/cart.png";
import search from "../Assets/search-icon.png";
import menuOpen from "../Assets/images/menu-icon-open.png";
import CloseMenu from "../Assets/images/close-menu.svg";

const items = [
  {
    id: 1,
    name: "For the Groom Classic",
    price: 45000,
    description:
      "Our Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    // image: BigImg1,
    rating: 4.0,
    reviews: 10,
    relatedItems: [
      {
        id: 2,
        name: "Special Wedding Hamper",
        price: 30000,
        // image: MoreItem1,
      },
      {
        id: 3,
        name: "Beauty Gift Basket",
        price: 25000,
        // image: MoreItem2,
      },
      // Add more related items as needed
    ],
  },
  {
    id: 2,
    name: "Beauty Gift Basket",
    // image: BeautyGiftBasket,
    price: "25,000",
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    // images: [BigImg1, Item2, Item3, Item4],
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 3,
    name: "Gift for Her",
    // image: GiftForHer,
    price: 15000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 4,
    name: "Luxury Food Basket",
    // image: LuxuryFoodBasket,
    price: 60000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 5,
    name: "New Born baby Gift Basket",
    // image: NewBornBabyGiftBasket,
    price: 20000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 6,
    name: "Men’s Grooming Basket",
    // image: MensGroomingBasket,
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
    // image: ProductItem1,
    rating: 4.0,
    reviews: 10,
  },
  {
    id: 8,
    name: "Premium Wedding Hamper",
    // image: ProductItem2,
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
    // image: ProductItem3,
    price: 35000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 10,
    name: "For the Groom",
    // image: ProductItem4,
    price: 35000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 11,
    name: "Civil Wedding Hamper",
    // image: ProductItem5,
    price: 25000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 12,
    name: "For the Bride Classic",
    // image: ProductItem6,
    price: 55000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 13,
    name: "For the Groom Classic",
    // image: ProductItem7,
    price: 45000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 14,
    name: "Civil Wedding Classic Hamper",
    // image: ProductItem8,
    price: 40000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    rating: 4.0,
    reviews: 20,
  },
  {
    id: 15,
    name: "Honeymoon Classic",
    // image: ProductItem9,
    price: 35000,
    description:
      "New Special Wedding Hamper are a thoughtful selection and mix of items that cater to couple’s needs and preferences.",
    rating: 4.0,
    reviews: 20,
  },
];

function Header() {
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState("");
  // State to store search results
  const [searchResults, setSearchResults] = useState([]);

  // Access the navigate function using useNavigate
  const navigate = useNavigate();

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      // If the input is empty, set searchResults to an empty array
      setSearchResults([]);
    } else {
      // Filter items based on the search query
      const results = items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  // Function to navigate to ProductDetails page
  const navigateToProductDetails = (itemId) => {
    // Clear the search results
    setSearchResults([]);

    // Navigate to the ProductDetails page
    navigate(`/items/${itemId}`);
  };

  const { totalItems, cartTotal } = useCart();

  // Basket dropdown start
  const [basketOpen, setBasketOpen] = useState(false);
  const toggleBasket = () => setBasketOpen(!basketOpen);

  const [searchOpen, setSearchOpen] = useState(false);

  // Gift Occasions Drop Down start
  const [occasionsOpen, setOccasionsOpen] = useState(false);
  const toggleOccasions = () => setOccasionsOpen(!occasionsOpen);

  // Mobile dropdown start
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showCloseMenu, setShowCloseMenu] = useState(false);
  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
    setShowCloseMenu(!showCloseMenu);
  };

  // Refs for dropdowns
  const basketDropdownRef = useRef(null);
  const occasionsDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const searchInputRef = useRef(null); // Add a ref for the search input

  // Add an event listener to close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        basketDropdownRef.current &&
        !basketDropdownRef.current.contains(event.target)
      ) {
        setBasketOpen(false);
      }
      if (
        occasionsDropdownRef.current &&
        !occasionsDropdownRef.current.contains(event.target)
      ) {
        setOccasionsOpen(false);
      }
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setMobileOpen(false);
        setShowCloseMenu(false);
      }
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setSearchOpen(false); // Close MobileSearch when clicking outside
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Unbind the event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={headerStyle.landingPageHeaderContainer}>
      <header className={headerStyle.landingPageHeader}>
        <div className={headerStyle.leftSection}>
          <a href="">
            <Link to="/">
              <div className={headerStyle.logo}>Gyfts</div>
            </Link>
          </a>
          <nav>
            <ul className={headerStyle.ul}>
              <li>
                <Link to="/">
                  <a className={headerStyle.link} href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li className={headerStyle.basketCon} ref={basketDropdownRef}>
                <a onClick={toggleBasket} className={headerStyle.link} href="#">
                  Gift Basket
                </a>
                <div className={headerStyle.basketDropDownDiv}>
                  {basketOpen && <GiftBasket />}
                </div>
              </li>
              <li
                className={headerStyle.occasionsCon}
                ref={occasionsDropdownRef}
              >
                <a
                  onClick={toggleOccasions}
                  className={headerStyle.link}
                  href="#"
                >
                  Gift Occasion
                </a>
                <div className={headerStyle.occasionsDropDownDiv}>
                  {occasionsOpen && <GiftOccasionsDropdown />}
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className={headerStyle.rightSection}>
          <div className={headerStyle.searchInputMobileDiv1}>
            <div
              className={headerStyle.searchInputMobileDiv}
              ref={searchInputRef}
            >
              {searchOpen ? (
                <MobileSearch
                  onSearch={handleSearchInputChange}
                  searchResults={searchResults}
                  navigateToProductDetails={navigateToProductDetails}
                  setSearchQuery={setSearchQuery} // Pass setSearchQuery as a prop
                  setSearchResults={setSearchResults} // Pass setSearchResults as a prop
                  items={items} // Pass the items data as a prop
                  searchInputRef={searchInputRef}
                  searchOpen={searchOpen}
                />
              ) : (
                <img
                  className={headerStyle.searchIconMobile}
                  src={search}
                  alt="search-icon"
                  onClick={() => setSearchOpen(true)}
                />
              )}
            </div>
          </div>
          <div className={headerStyle.cartSection}>
            <div className={headerStyle.cartIcon}>
              <Link to="/shoppingcart">
                <img src={cart} alt="cart" />
                <div className={headerStyle.cartupdateDiv}>
                  <p className={headerStyle.cartupdate}>{totalItems}</p>
                </div>
              </Link>
            </div>
            {/* <div className={headerStyle.cartLabel}></div> */}
          </div>
          <div className={headerStyle.searchInput}>
            <img
              className={headerStyle.searchIcon}
              src={search}
              alt="search-icon"
            />
            <input
              type="text"
              placeholder="Search.."
              className={headerStyle.searchTextInput}
              value={searchQuery}
              onChange={handleSearchInputChange}
            />

            {/* Display search results */}
            <div
              className={`${headerStyle.searchResults} ${
                searchResults.length > 0 ? headerStyle.withBorder : ""
              }`}
            >
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  className={headerStyle.searchResultItem}
                  onClick={() => navigateToProductDetails(result.id)}
                >
                  {result.name}
                </div>
              ))}
            </div>
          </div>

          <div className={headerStyle.menuOpenDiv} ref={mobileDropdownRef}>
            {showCloseMenu ? (
              <img
                onClick={toggleMobile}
                className={headerStyle.closeMenuImg}
                src={CloseMenu}
                alt=""
              />
            ) : (
              <img
                onClick={toggleMobile}
                className={headerStyle.menuOpenImg}
                src={menuOpen}
                alt=""
              />
            )}
            <div className={headerStyle.mobileDropDownDiv}>
              {mobileOpen && <MobileDropDown />}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
