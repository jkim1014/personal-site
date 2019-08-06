import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Main from "../layouts/Main";

import data from "../data/contact";

// Validates the first half of an email address.
const validateText = text => {
  // NOTE: Passes RFC 5322 but not tested on google's standard.
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
  return re.test(text) || text.length === 0;
};

const messages = [
  "joon.young1014",
  "joonyoungkim",
  "but not this :(",
  "ok-i-swear-this-one-works !",
  "joonyoungkim",
  "joon.young1014"
];

const tails = [
  "gmail.com",
  "breakthelove.com",
  "invalidEmail.com",
  "dontEmailToHere.com",
  "college.harvard.edu",
  "gmail.com"
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const Contact = () => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [tail, updateTail] = useState(tails[idx]);
  const [char, updateChar] = useState(messages[idx].length); // points to current char
  const [char2, updateChar2] = useState(tails[idx].length);
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(
    () => {
      let newIdx = idx;
      let newChar = char;
      let newChar2 = char2;
      if (
        char - hold >= messages[idx].length &&
        char2 - hold >= tails[idx].length
      ) {
        newIdx += 1;
        newChar = 0;
        newChar2 = 0;
      }
      if (newIdx === messages.length) {
        setIsActive(false);
      } else {
        updateMessage(messages[newIdx].slice(0, newChar));
        updateTail(tails[newIdx].slice(0, newChar2));
        updateIter(newIdx);
        updateChar(newChar + 1);
        updateChar2(newChar2 + 1);
      }
    },
    isActive ? delay : null
  );

  return (
    <Main>
      <Helmet title="Contact" />
      <article className="post" id="contact">
        <header>
          <div className="title">
            <h2>
              <Link to="/contact">Contact</Link>
            </h2>
          </div>
        </header>
        <div className="email-at">
          <p>Feel free to get in touch. You can email me at: </p>
          <div
            className="inline-container"
            style={validateText(message) ? {} : { color: "red" }}
            onMouseEnter={() => setIsActive(false)}
            onMouseLeave={() => idx < messages.length && setIsActive(true)}
          >
            <a href={validateText(message) ? `mailto:${message}@${tail}` : ""}>
              <span>{message}@</span>
              <span>{tail}</span>
            </a>
          </div>
        </div>
        <ul className="icons">
          {data.map(s => (
            <li key={s.label}>
              <a href={s.link}>
                <FontAwesomeIcon icon={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </article>
    </Main>
  );
};

export default Contact;
