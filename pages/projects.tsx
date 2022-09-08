import Heading from "components/projects/Heading";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{ title: "Projects", desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects." }}
    >
      <Heading />
      <Projects />

      <div style={{ marginTop: '32px', fontSize: '20px' }}>
        And many more...
      </div>
    </Page>
  );
}

export default projects;
