import React from "react";
import PageBanner from "../components/PageBanner";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

function Tutorials() {
  return (
    <>
      <div className="container mx-auto">
        <PageBanner text="Tutorials" />
        <div className="mt-16">
          <SectionHeader
            preHeading="Visual"
            heading="Vedio Tutorials"
            subHeading="Discover video tutorials tailored for seamless and effective learning."
          />
        </div>

        {/* Tutorials */}
        <div className="grid frid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
          {/* vedio 1 */}
          <div
            className="mt-16"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ukwsC_k-Aag"
                playing
                muted
                controls
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
          </div>
          {/* vedio 2 */}
          <div
            className="mt-16"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=wDpsF90DoeI&list=PLag_mhJfCJ-1-EZcPapMFPTlzVzwjz33M"
                playing
                muted
                controls
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
          </div>
          {/* vedio 3 */}
          <div
            className="mt-16"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=gi2AeYO-g8E&list=PLag_mhJfCJ-1-EZcPapMFPTlzVzwjz33M&index=2"
                playing
                muted
                controls
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
          </div>
          {/* vedio 4 */}
          <div
            className="mt-16"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=O47kv14SxDk&list=PLag_mhJfCJ-18WyYoklCPxIpYbeRgmWLJ&index=7"
                playing
                muted
                controls
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
          </div>
          {/* vedio 5 */}
          <div
            className="mt-16"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=3Du66iGE494&list=PLag_mhJfCJ-18WyYoklCPxIpYbeRgmWLJ&index=14"
                playing
                muted
                controls
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
          </div>
          {/* vedio 6 */}
          <div
            className="mt-16"
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ngeRgzef5vs&list=PLag_mhJfCJ-1-EZcPapMFPTlzVzwjz33M&index=5"
                playing
                muted
                controls
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-10">
      <Link to='/lesson'>
        <Button btnText='view more' />
      </Link>
      </div>
        
      </div>
    </>
  );
}

export default Tutorials;
