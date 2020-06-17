import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="uk-section uk-text-center uk-text-muted">
      <div className="uk-container uk-container-small">
        <ul className="uk-subnav uk-flex-center">
          <li>
            <Link href={"/"}>
              <a href={"/"}>Home</a>
            </Link>
          </li>

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

        <div className="uk-margin-medium uk-text-small copyright link-secondary">
          Made by <a href="https://www.linkedin.com/in/zenkilies/" target="_blank">Zenkilies</a>.
          Designed by <a href="https://unbound.studio/" target="_blank">Unbound Studio</a>.
        </div>
      </div>
    </footer>
  );
}
