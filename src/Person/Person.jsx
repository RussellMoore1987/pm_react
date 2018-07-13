import React from 'react';
import './Person.css';


const person = (props) => {
    // Main component logic
    // Default variables
    let personPic = require("../images/abd_profile_pic.jpg");
    let personPicClass = "developer";
    let bannerPic = require("../images/developer_person_profile_banner.jpg");
    let personIcon = "code";
    // trim child text
    let description = props.children.slice(0, 150) + "...";
    // Check for alternate use
    switch (props.type) {
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
    // Return component
    return (
        <div className="personCard">
            <div className="personBannerContainer">
                <img className="personBanner" src={bannerPic} alt={props.type}/>
                <div className={personPicClass}></div>
            </div>
            <div className="personContent">
                <img className={personPicClass} src={personPic} alt={props.name}/>
                <small><i class={"fas fa-" + personIcon}></i> {personPicClass}</small>
                <h4><a href="#">{props.name}</a></h4>
                <small><i class="fas fa-map-marker-alt"></i> {props.address}</small>
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
                    <span><i class="fas fa-project-diagram"></i> {props.about.projects}</span>
                </div>
                <div>
                    <div>
                        <small>Reviews ({props.about.reviews.reviews})</small>
                    </div>
                    <span><i class="fas fa-star"></i> {props.about.reviews.stars}</span>
                </div> 
                <div>
                    <div>
                        <small>Posts</small>
                    </div>
                    <span><i class="far fa-address-card"></i> {props.about.posts}</span>
                </div>      
            </div>
        </div>
    )
}

export default person;