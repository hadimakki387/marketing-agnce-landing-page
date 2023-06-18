import React from "react";
import "@/app/css/Footer.css";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="Footer snipcss-7ZKKY">
      <div className="FooterWraper">
        <div className="gy-footer-main">
          <div className="gy-footer-main-col">
            <Image
              alt=""
              width={1000}
              height={1000}
              src="/Logo_name_footer.png"
            />
            <div className="gy-footer-main-menu">
              <ul>
                <li
                  id="menu-item-188"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-7 current_page_item menu-item-188"
                >
                  <Link
                    href="https://www.growyouragency.com/"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li
                  id="menu-item-204"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-204"
                >
                  <Link href="https://www.growyouragency.com/iman-gadzhi/">
                    Our Story
                  </Link>
                </li>
                <li
                  id="menu-item-205"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-205"
                >
                  <Link href="https://www.growyouragency.com/philosophy/">
                    Philosophy
                  </Link>
                </li>
                <li
                  id="menu-item-189"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-189"
                >
                  <Link href="https://growyouragency.com/resources/">
                    Resources
                  </Link>
                </li>
                <li
                  id="menu-item-190"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-190"
                >
                  <Link href="https://lp.growyouragency.com/beginner-business">
                    Free Case Study
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="gy-footer-main-col"></div>
        </div>
        <div className="gy-footer-bar">
          <p>© 2019 Grow Your Agency. All rights reserved</p>
          <div className="gy-footer-bar-menu">
            <ul>
              <li
                id="menu-item-1422"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1422"
              >
                <Link href="https://www.growyouragency.com/contact-us/">
                  Contact us
                </Link>
              </li>
              <li
                id="menu-item-208"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-208"
              >
                <Link href="https://www.growyouragency.com/privacy/">
                  Privacy Policy
                </Link>
              </li>
              <li
                id="menu-item-209"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-209"
              >
                <Link href="https://www.growyouragency.com/terms/">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="gy-footer-bar-cards">
            <Image
              width={200}
              height={200}
              alt=""
              src="/cards.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
