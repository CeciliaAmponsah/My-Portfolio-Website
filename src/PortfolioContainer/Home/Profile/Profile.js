import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/cecilia.amponsah.754/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="file:///C:/Users/user/Downloads/Cecilia%20-%20CV%20Resume%20(3)%20(1).pdf">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="file:///C:/Users/user/Downloads/Cecilia%20-%20CV%20Resume%20(3)%20(1).pdf">
                <i className="fa fa-instagram-square"></i>
              </a>
              <a href="https://github.com/CeciliaAmponsah">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/cecilia-amponsah-47b37524a/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details">
            <span>
              {""}
              Hello I'm <span className="highlighted-text"> Cecilia</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev",
                    5000,
                    "Front-end Developer",
                    5000,
                    "Nextjs Dev",
                    5000,
                    "Rectjs Dev",
                    5000,
                    "Html Dev",
                    5000,
                    "Css Dev",
                    5000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front-end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{""}
            </button>
            <a
              href="/images/CeciliaCVResume.pdf"
              download="Cecilia  Cecila-cv Resume (3).pdf"
            >
              <button className=" btn highlighted-btn"> Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
