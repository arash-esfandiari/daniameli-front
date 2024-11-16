import React, { Component } from 'react';
import Header from '../components/Header';

export class AboutUs extends Component {
    render() {
        return (
            <div className="site-main">
                <Header />
                {/* page-title */}
                <div className="ttm-page-title-row">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-box text-center">
                                    <div className="page-title-heading">
                                        <h1 className="title">About Us</h1>
                                    </div>{/* /.page-title-captions */}
                                    <div className="breadcrumb-wrapper">
                                        <span>
                                            <a title="Homepage" href={process.env.PUBLIC_URL + '/'} ><i className="ti ti-home" />&nbsp;&nbsp;Home</a>
                                        </span>
                                        <span className="ttm-bread-sep">&nbsp; : : &nbsp;</span>
                                        <span>About Us</span>
                                    </div>
                                </div>
                            </div>{/* /.col-md-12 */}
                        </div>{/* /.row */}
                    </div>{/* /.container */}
                </div>
                {/* page-title end*/}
                {/* aboutus-section */}
                <section className="ttm-row aboutus-section clearfix">
                    <div className="container-xl">
                        <div className="row">{/* row */}
                            <div className="col-lg-6">
                                {/* section title */}
                                <div className="section-title with-desc clearfix">
                                    <div className="title-header">
                                        <h2 className="title">Daniameli: Over 25 Years of Excellence in <span>Metallurgy</span> </h2>
                                    </div>
                                    <div className="title-desc" style={{
                                        fontFamily: "'Poppins', sans-serif", // Modern font
                                        fontSize: "15px", // Slightly larger for better readability
                                        lineHeight: "1.8", // Comfortable spacing
                                        color: "#333333", // Neutral dark gray for body text
                                    }}>
                                        <h4>About Daniameli’s Management</h4>
                                        <h5>Who we are</h5>
                                        <p>With over 25 years of unparalleled expertise in metallurgy, Daniameli has established itself as a trusted leader in the industry. Our dedication lies in delivering innovative solutions that encompass sales, installation, and comprehensive support services, tailored to meet the unique needs of our clients.</p>
                                        <p>At Daniameli, we believe that excellence begins with the right equipment. By ensuring precision in every step, from molten metal production to the finished product, we help our clients achieve exceptional results. This unwavering commitment fuels our passion for providing top-tier furnaces and expert installation services, setting the benchmark for quality and reliability in the metallurgy sector.</p>
                                        <h5>Our Mission</h5>
                                        <p><b>Our mission is to empower businesses with reliable and efficient metallurgy solutions.</b> By combining technical expertise with a customer-centric approach, we ensure that every project we undertake delivers measurable results and exceeds expectations.</p>
                                        <br />
                                        <h5>Why Choose Daniameli?</h5>
                                        <ul>
                                            <li><b>Quick Response and Delivery:</b> We understand the importance of time in manufacturing processes. Our team ensures rapid delivery and responsive support to keep your operations running smoothly.</li>
                                            <li><b>Guaranteed Products:</b> Quality is at the heart of everything we do. All our products come with a 100% satisfaction guarantee, backed by our dedicated management team.</li>
                                        </ul>
                                        <br />
                                        <h5>Meet Our Founder</h5>
                                        <p><b>Majid Esfandiari</b>, Chairman & Founder of Daniameli, has been the visionary behind our success. With decades of experience and a deep understanding of metallurgy, Majid leads our team to consistently deliver innovative solutions.</p>

                                        <br />
                                        <h5>Why We Stand Out</h5>
                                        <p>At <b>Daniameli</b>, we take pride in being more than a service provider—we are a partner in your success. Our focus on building long-term relationships and delivering impactful results sets us apart from the competition.</p>
                                        <p className="mb-2">Metal industries play an important role in the modern economy, and sensetive machinery plays an important role in the metal indusry. Daniameli guarantees to provide the most accurate machinery to produce high-end products.</p>
                                    </div>

                                </div>{/* section title end */}
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative res-991-mt-30">
                                    {/* ttm_single_image-wrapper */}
                                    <div className="ttm_single_image-wrapper text-sm-center">
                                        <img className="img-fluid" src="images/home-bg.webp" title="single-img-seven" alt="Main Warehouse" />
                                    </div>{/* ttm_single_image-wrapper end */}
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                    </div>
                </section >
                {/* aboutus-section end*/}
            </div >
        )
    }
}

export default AboutUs;


