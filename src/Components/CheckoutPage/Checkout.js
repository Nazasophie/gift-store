import React from "react";
import checkout from "./Checkout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// Image Import start
import Cards from "../Assets/images/cards-pics.svg";

import Imp from "../Assets/images/cart-imp.svg";

function Checkout() {
  return (
    <div>
      <div className={checkout.headerDiv}>
        <Header />
      </div>
      <main className={checkout.main}>
        <div className={checkout.firstHeader}>
          <h1 className={checkout.firstH1}>Checkout & Payment</h1>
        </div>
        <div className={checkout.leftRightCon}>
          <div className={checkout.leftDiv1}>
            <p className={checkout.leftDiv1Para}>Delivery Details</p>
            <div className={checkout.leftDiv}>
              <form className={checkout.form} method="post">
                <div className={checkout.firstFormDiv}>
                  <div className={checkout.NameInputDiv}>
                    <p className={checkout.para}>Name</p>
                    <input
                      className={checkout.input}
                      type="text"
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className={checkout.emailInputDiv}>
                    <p className={checkout.para}>Email</p>
                    <input
                      className={checkout.input}
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className={checkout.phoneInputDiv}>
                    <p className={checkout.para}>Phone</p>
                    <input
                      className={checkout.input}
                      type="tel"
                      id="phone"
                      name="phone"
                    />
                  </div>
                </div>
                <div className={checkout.secondFormDiv}>
                  <div className={checkout.addressInputDiv}>
                    <p className={checkout.para}>Address</p>
                    <input
                      className={checkout.input}
                      type="text"
                      id="address"
                      name="address"
                    />
                  </div>
                  <div className={checkout.stateInputDiv}>
                    <p className={checkout.para}>State</p>
                    <input
                      className={checkout.input}
                      type="text"
                      id="state"
                      name="state"
                    />
                  </div>
                </div>
              </form>
              <div className={checkout.impDiv}>
                <img className={checkout.impImgIcon} src={Imp} alt="" />
                <p className={checkout.impP}>
                  Details of your order as well as your tracking number
                  <br />
                  will be sent to your Email address.
                  <br />
                  <br />
                  Thank you for shopping with us.
                </p>
              </div>
            </div>
          </div>
          <div className={checkout.rightDiv1}>
            <p className={checkout.rightDiv1Para}>Payment Details</p>
            <div className={checkout.rightDiv}>
              <div>
                <img className={checkout.cardImg} src={Cards} alt="" />
              </div>
              <form>
                <div className={checkout.cardNameDiv}>
                  <p className={checkout.cardPara}>Card Name</p>
                  <input className={checkout.cardNameInput} type="text" />
                </div>
                <div className={checkout.cardNumberDiv}>
                  <p className={checkout.cardPara}>Card Number</p>
                  <input className={checkout.cardNameInput} type="text" />
                </div>
                <div className={checkout.expiryDateCvvDiv}>
                  <div className={checkout.expiryDateDiv}>
                    <p className={checkout.cardPara}>Expiry Date</p>
                    <input
                      className={checkout.expiryDateCvvInput}
                      type="text"
                    />
                  </div>
                  <div className={checkout.cvvDiv}>
                    <p className={checkout.cardPara}>CCV</p>
                    <input
                      className={checkout.expiryDateCvvInput}
                      type="text"
                    />
                  </div>
                </div>
                <input
                  className={checkout.proceedInput}
                  type="submit"
                  value="Make Payment"
                />
              </form>
            </div>
          </div>
          <div className={checkout.impDivMobile}>
            <img className={checkout.impImgIcon} src={Imp} alt="" />
            <p className={checkout.impP}>
              Details of your order as well as your tracking number
              <br />
              will be sent to your Email address.
              <br />
              <br />
              Thank you for shopping with us.
            </p>
          </div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Checkout;
