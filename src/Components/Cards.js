import React from 'react'
import { Link } from 'react-router-dom';
import projectImg from '../assets/imgs/project.jpg';
import profileImg from '../assets/imgs/profile-pic.jpg';

function Cards() {
    return (
        <div class="card">
            <img src={projectImg} class="card-img-top" alt="project" />
            <div class="card-body">
                <div class="profile-image">
                    <img src={profileImg} alt="profile" class="img-fluid" />
                </div>
                <span class="card-name">Bayley Robertson</span>
                <ul class="list-inline">
                    <li class="list-inline-item left-text">Delivery: </li>
                    <li class="list-inline-item right-text">1&dash;3 Days</li>
                </ul>
                <h3 class="card-title mt-5">
                    <Link to="/" class="card-link">Flexibility & Customization with CMS vs PHP Framework</Link>
                </h3>
            </div>
            <div class="card-footer bg-white">
                <div class="d-flex justify-content-between align-items-center border-top py-4">
                    <span class="property">Text Here</span>
                    <span class="price">Rs.15,000</span>
                </div>
            </div>
        </div>
    )
}

export default Cards