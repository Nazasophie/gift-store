import React, { useState } from "react";
import dropstyle from "./MobileDropDown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function MobileDropDown() {
  const [showGiftBaskets, setShowGiftBaskets] = useState(false);
  const [showGiftOccasions, setShowGiftOccasions] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showSeasonal, setShowSeasonal] = useState(false);
  const [showRecipients, setShowRecipients] = useState(false);

  const toggleGiftBaskets = () => {
    setShowGiftBaskets(!showGiftBaskets);
  };

  const toggleGiftOccasions = () => {
    setShowGiftOccasions(!showGiftOccasions);
  };

  const toggleEvents = () => {
    setShowEvents(!showEvents);
  };

  const toggleSeasonal = () => {
    setShowSeasonal(!showSeasonal);
  };

  const toggleRecipients = () => {
    setShowRecipients(!showRecipients);
  };

  return (
    <div className={dropstyle.container}>
      <div className={dropstyle.contentDiv}>
        <h3 className={dropstyle.content}>Content</h3>
      </div>
      <div className={dropstyle.item1Div}>
        <h4 className={dropstyle.item1Header} onClick={toggleGiftBaskets}>
          Gift Baskets{" "}
          <FontAwesomeIcon
            icon={showGiftBaskets ? "angle-down" : "angle-right"} // Use the FontAwesome icon
          />
        </h4>
        {showGiftBaskets && (
          <ul className={dropstyle.item1}>
            <Link to="/productlisting">
              <li className={dropstyle.li}>Food Basket</li>
            </Link>
            <Link to="/productlisting">
              <li className={dropstyle.li}>Fruit Basket</li>
            </Link>
            <Link to="/productlisting">
              <li className={dropstyle.li}>Wine Basket</li>
            </Link>
            <Link to="/productlisting">
              <li className={dropstyle.li}>Flower Basket</li>
            </Link>
          </ul>
        )}
      </div>
      <div className={dropstyle.giftOccasionsDiv}>
        <h4 className={dropstyle.occasionsHeader} onClick={toggleGiftOccasions}>
          <span className={dropstyle.occasionsHeaderSpan}>Gift Occasions</span>
          <FontAwesomeIcon
            icon={showGiftOccasions ? "angle-down" : "angle-right"}
          />
        </h4>
        {showGiftOccasions && (
          <div>
            <h4 className={dropstyle.item1Header} onClick={toggleEvents}>
              Events{" "}
              <FontAwesomeIcon
                icon={showEvents ? "angle-down" : "angle-right"}
              />
            </h4>
            {showEvents && (
              <ul className={dropstyle.item1}>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Wedding Gifts</li>
                </Link>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Birthday Gifts</li>
                </Link>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Baby Gifts</li>
                </Link>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Get Well Gifts</li>
                </Link>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Congratulations Gifts</li>
                </Link>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Thank You Gifts</li>
                </Link>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Engagement Gifts</li>
                </Link>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Graduation Gifts</li>
                </Link>
              </ul>
            )}
            <h4 className={dropstyle.item1Header} onClick={toggleSeasonal}>
              Seasonal{" "}
              <FontAwesomeIcon
                icon={showSeasonal ? "angle-down" : "angle-right"} // Use the FontAwesome icon
              />
            </h4>
            {showSeasonal && (
              <ul className={dropstyle.item1}>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Mother’s Day Gifts</li>
                </Link>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Father’s Day Gifts</li>
                </Link>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Christmas Gifts</li>
                </Link>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Valentine’s Day Gifts</li>
                </Link>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Easter Gifts</li>
                </Link>
              </ul>
            )}
            <h4 className={dropstyle.item1Header} onClick={toggleRecipients}>
              Recipients{" "}
              <FontAwesomeIcon
                icon={showRecipients ? "angle-down" : "angle-right"} // Use the FontAwesome icon
              />
            </h4>
            {showRecipients && (
              <ul className={dropstyle.item1}>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Gifts for Men</li>
                </Link>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Gifts for Women</li>
                </Link>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Gifts for Parents</li>
                </Link>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Gifts for Children</li>
                </Link>
                <Link to="/productlisting">
                  <li className={dropstyle.li}>Gifts for Friends</li>
                </Link>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileDropDown;
