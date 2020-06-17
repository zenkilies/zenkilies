import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <React.Fragment>
      <div data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent; top: 200">
        <nav className="uk-navbar-container">
          <div className="uk-container">
            <div data-uk-navbar="" className="uk-navbar">
              <div className="uk-navbar-left">
                <Link href={"/"}>
                  <a className="uk-navbar-item uk-logo" href="/">
                    Zenkilies
                  </a>
                </Link>

                <ul className="uk-navbar-nav uk-visible@m">
                  <li>
                    <Link href={"/terms-of-services"}>
                      <a href={"/terms-of-services"}>
                        Terms & Privacy
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href={"/about"}>
                      <a href={"/about"}>
                        About
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="uk-sticky-placeholder" hidden={true} style={{height: 80, margin: 0}}/>
    </React.Fragment>
  );
};
