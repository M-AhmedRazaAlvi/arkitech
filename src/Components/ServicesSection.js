import React from 'react';
import Cards from './Cards';

function ServicesSection() {
    return (
        <section class="section-services">
            <div class="container">
                <div class="row mb-60 text-center">
                    <div class="col-12">
                        <h2>Most popular services</h2>
                    </div>
                </div>
                <div class="row g-5">
                    <div class="col-lg-4">
                        <Cards />
                    </div>
                    <div class="col-lg-4">
                        <Cards />
                    </div>
                    <div class="col-lg-4">
                        <Cards />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection