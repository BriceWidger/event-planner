import React from "react";

const FooterContent = () => {
  return (
    <div className="container text-center">
      <div className="container-inner">
        <div className="row">
          <div className="">
            <p
              className="text-white"
              style={{
                margin: "0px auto 32px",
                textAlign: "center",
                fontWeight: 400,
                fontSize: 13,
                lineHeight: "150%",
                fonStFamily: "'Nunito Sans', sans-serif",
                color: "#888",
                opacity: "0.8",
                wordBreak: "break-all",
                maxWidth: "750px",
              }}
            >
              Integer fermentum tempor quam in hendrerit. Quisque non augue
              elit. Curabitur at mollis leo. Suspendisse sit amet condimentum
              tortor. Etiam ac augue non lacus malesuada mollis sit amet id
              urna. Aenean id euismod sem. Aliquam ante odio, auctor ut
              fringilla vitae, auctor et purus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
