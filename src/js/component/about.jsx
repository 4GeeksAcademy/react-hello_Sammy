import React from "react";
const About = (props) => {
  return (
    <div id="footer" className="text-center h3">
      <footer>
        {" "}
        <small>
          &copy; Copyright {props.FooterAnio}, {props.Company}
        </small>{" "}
      </footer>
    </div>
  );
};

export default About;
