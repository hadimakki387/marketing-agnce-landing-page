import React from "react";
import "@/app/css/Footer.css";
import Link from "next/link";
import Image from "next/image";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

function Footer() {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -25%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
  return (
    <div className="Footer snipcss-7ZKKY">
      <div className="FooterWraper">
        <div className="gy-footer-main">
          <div className="gy-footer-main-col">
            <Reveal
              keyframes={customAnimation}
              duration={1500}
              delay={1000}
              triggerOnce
            >
              <span className="FooterLOGO dark">LOGO</span>
            </Reveal>
            <div className="gy-footer-main-menu">
              <ul className="FooterLis">
                <Reveal
                  keyframes={customAnimation}
                  duration={1500}
                  delay={1000}
                  triggerOnce
                >
                  <li
                    id="menu-item-188"
                    className=" menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-7 current_page_item menu-item-188"
                  >
                    <Link
                      href="https://www.growyouragency.com/"
                      aria-current="page"
                      className="dark"
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    id="menu-item-204"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-204"
                  >
                    <Link
                      href="https://www.growyouragency.com/iman-gadzhi/"
                      className="dark"
                    >
                      Our Story
                    </Link>
                  </li>
                  <li
                    id="menu-item-205"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-205"
                  >
                    <Link
                      href="https://www.growyouragency.com/philosophy/"
                      className="dark"
                    >
                      Philosophy
                    </Link>
                  </li>
                  <li
                    id="menu-item-189"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-189"
                  >
                    <Link
                      href="https://growyouragency.com/resources/"
                      className="dark"
                    >
                      Resources
                    </Link>
                  </li>
                  <li
                    id="menu-item-190"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-190"
                  >
                    <Link
                      href="https://lp.growyouragency.com/beginner-business"
                      className="dark"
                    >
                      Free Case Study
                    </Link>
                  </li>
                </Reveal>
              </ul>
            </div>
          </div>
          <div className="gy-footer-main-col"></div>
        </div>
        <Reveal
          keyframes={customAnimation}
          duration={1500}
          delay={1000}
          triggerOnce
        >
          <div className="gy-footer-bar">
            <p className="dark">© 2019 Grow Your Agency. All rights reserved</p>
            <div className="gy-footer-bar-menu">
              <ul className="FooterContactLi">
                <li
                  id="menu-item-1422"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1422"
                >
                  <Link href="https://www.growyouragency.com/contact-us/" className="dark contactLisLinks">
                    Contact us
                  </Link>
                </li>
                <li
                  id="menu-item-208"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-208"
                >
                  <Link href="https://www.growyouragency.com/privacy/" className="dark contactLisLinks">
                    Privacy Policy
                  </Link>
                </li>
                <li
                  id="menu-item-209"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-209"
                >
                  <Link href="https://www.growyouragency.com/terms/" className="dark contactLisLinks">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="gy-footer-bar-cards">
              <Image width={200} height={200} alt="" src="/cards.png" />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Footer;
