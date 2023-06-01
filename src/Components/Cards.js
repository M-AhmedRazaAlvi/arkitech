import React from 'react'
import { Link } from 'react-router-dom';
import projectImg from '../assets/imgs/1-265x160.jpg';
import profileImg from '../assets/imgs/profile-pic.jpg';

function Cards() {
    return (
        <div class="card">
            <img src={projectImg} class="card-img-top" alt="project" />
            <div class="card-body">
                <div class="profile-image">
                    <img src={profileImg} alt="profile" class="img-fluid" />
                </div>
                <h3 class="card-title mt-5">
                    <Link to="/" class="card-link">40X30 | 1200 sq ft | Single Story Hut Design | Mansehra</Link>
                </h3>
            </div>
            <div class="card-footer bg-white">
                <div class="d-flex justify-content-between align-items-center border-top py-4">
                    <span class="property">Bayley Robertson</span>
                    <span class="price">Rs.15,000</span>
                </div>
            </div>
        </div>
    )
}

export default Cards