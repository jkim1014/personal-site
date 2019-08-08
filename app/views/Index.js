import React from "react";
import { Link } from "react-router-dom";
import Main from "../layouts/Main";

const Index = () => (
  <Main>
    <article
      className="post"
      id="index"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <header>
        <div className="title">
          <h2>
            <Link to="/">Hi!</Link>
          </h2>
          <p>
            I'm Joon, and this is a judgement free space for you to get to know
            me.
          </p>
        </div>
      </header>
      <p>
        Feel free to read more <Link to="/about">about me</Link>, or you can
        check out my <Link to="/resume">resume</Link>,{" "}
        <Link to="/projects">projects</Link>, view{" "}
        <Link to="/stats">site statistics</Link>, or{" "}
        <Link to="/contact">contact</Link> me.
      </p>
      <img
        src={`${BASE_PATH}/images/walk.jpg`}
        style={{
          display: "flex",
          alignSelf: "center",
          width: "40vw",
          height: "auto",
          minWidth: "400px",
          maxWidth: "900px"
        }}
      />
      <p style={{ display: "flex", alignSelf: "center" }}>
        Snapshot from my most recent trekking in Northern Ethiopia!
      </p>
      <p>
        {" "}
        Source available{" "}
        <a href="https://github.com/mldangelo/personal-site">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
