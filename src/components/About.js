import React from "react";
function About(props) {
  return (
    <div style={{ color: props.mode === "light" ? "black" : "white" }}>
      <section className="py-4 footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>About </h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home/About</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="section my-5">
        <div className="container">
          <h5>Play-with-text</h5>
          <div className="underline"></div>
          <p>
            Play-with-text gives you a way to analyze your text quickly and
            efficiently. Be it word count, character count or number count.
          </p>
          <p>
            {" "}
            Play-with-text is a free character counter tool that provides instant
            character count & word count statistics for a given text. Play-with-text
            reports the number of words and characters. Thus it is suitable for
            writing text with word/ character limit.
          </p>
          <p>
            {" "}
            This word counter software works in any web browsers such as Chrome,
            Firefox, Internet Explorer, Safari, Opera. It suits to count
            characters in facebook, blog, books, excel document, pdf document,
            essays, etc.
          </p>
          <p>
            The website is basically a text-utility website which have 15+
            amazing operations which you wanted to do with your text. These
            includes
            <ul>
              <li>Converting the complete text to Uppercase form.</li>
              <li>Converting the complete text to Lowercase form.</li>
              <li>Clearing your text.</li>
              <li>Text to Speech.</li>
              <li>Converting the complete text to capitalize form.</li>
              <li>Removing Symbols such as !~`@#$%^&*_+=/; etc.</li>
              <li>Extracting Numbers.</li>
              <li>Extracting Text.</li>
              <li>Reversing Text.</li>
              <li>Converting Paragraphs to Lines.</li>
              <li>Removing Extra Spaces.</li>
              <li>Converting the text to 100 characters.</li>
              <li>Generating Random Words.</li>
              <li>Downloading the written Text.</li>
              <li>Copying the text to clipboard.</li>
              <li>Uploading a text file to read text.</li>
            </ul>
            <p>
              It was a really amazing experience building the website. I have
              used ReactJs which helps me break the website to different
              components and make it easy for me to build the website{" "}
            </p>
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
