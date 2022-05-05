import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import avatar from "../../../images/logo.png"
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/forDemo";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              src={avatar}
              alt="Printmania"

              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
            />
            <Typography> PrintMania </Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>We are PrintMania , a creative place with a big love for craft and imagery.

            We are a customization shop, mainly catering toward phone covers, keychains, frames, tshirt.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Find Us Here</Typography>
            <a
              href="https://www.youtube.com/forDemo"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/Demo" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
