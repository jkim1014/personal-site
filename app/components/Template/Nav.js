import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/contact";

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Joon Kim</h2>
        <p>
          <a href="mailto:joon.young1014@gmail.com">joon.young1014@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hey I&apos;m Joon. I am a student at Harvard University studying
        Computer Science and Physics. I am passionate about{" "}
        <Link to="/">teaching</Link>, <Link to="/">consumer products</Link>,{" "}
        <Link to="/">web development</Link>, <Link to="/">honest designs</Link>,
        and jazz music!
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        &copy; Joon Kim <Link to="/">joonykim.com</Link>.
      </p>
    </section>
  </section>
);

export default Nav;
