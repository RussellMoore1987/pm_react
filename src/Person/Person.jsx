import React from 'react';
import './Person.css';


const person = (props) => {
    // Main component logic
    // Default variables
    let personPic = require("../images/abd_profile_pic.jpg");
    let personPicClass = "developer";
    let bannerPic = require("../images/developer_person_profile_banner.jpg");
    let description = "No description available...";
    let personIcon = "code";
    // trim child text
    if (props.data.description.length > 0) {
        description = props.data.description.slice(0, 150) + "...";
    }
    // Check for alternate use
    switch (props.data.data.type) {
        case "photographer": 
            bannerPic = require("../images/photographer_person_profile_banner.jpg");
            personPic = require("../images/shay_profile_pic.jpg");
            personPicClass = "photographer";
            personIcon = "camera-retro";
            break;
        case "designer": 
            bannerPic = require("../images/designer_person_profile_banner.jpg"); 
            personPic = require("../images/stephanie_profile_pic.jpg");
            personPicClass = "designer";
            personIcon = "swatchbook";
            break;
    }
    console.log(props.data.data.name);
    // Return component
    return (
        <div className="personCard">
            <div className="personBannerContainer">
                <img className="personBanner" src={bannerPic} alt={props.data.data.type}/>
                <div className={personPicClass}></div>
            </div>
            <div className="personContent">
                <img className={personPicClass} src={personPic} alt={props.data.data.name}/>
                <small><i className={"fas fa-" + personIcon}></i> {personPicClass}</small>
                <h4><a href="#">{props.data.data.name}</a></h4>
                <small><i className="fas fa-map-marker-alt"></i> {props.data.data.address}</small>
                <p>{description}</p>
                <p>
                    <a href="#">view profile</a>
                </p>
            </div>
            <div className="personBottomContent">
                <div>
                    <div>
                        <small>Projects</small>
                    </div>
                    <span>
                        <a href="#">
                            <i className="fas fa-project-diagram"></i> {props.data.data.about.projects}
                        </a>
                    </span>
                </div>
                <div>
                    <div>
                        <small>Reviews ({props.data.data.about.reviews.reviews})</small>
                    </div>
                    <span>
                        <a href="#">
                            <i className="fas fa-star"></i> {props.data.data.about.reviews.stars}
                        </a>
                    </span>
                </div> 
                <div>
                    <div>
                        <small>Posts</small>
                    </div>
                    <span>
                        <a href="#">
                            <i className="far fa-address-card"></i> {props.data.data.about.posts}
                        </a>
                    </span>
                </div>      
            </div>
        </div>
    )
}

export default person;