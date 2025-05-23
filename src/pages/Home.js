import React, { Component } from 'react';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FadeIn from 'react-fade-in';

import Banner from '../components/Banner';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';


export class Home extends Component {
  render() {
    var slick_slider = {
      dots: false,
      arrow: false,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,

      responsive: [{

        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {

        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {

        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };

    return (
      <div className="site-main">
        <Header />
        <Banner />
        <section className="ttm-row aboutus-section-style2 clearfix">
          <div className="container-xl">
            <div className="row no-gutters align-items-center">{/* row */}
              <div className="col-lg-6 res-991-text-center res-991-mb-40">
                {/* ttm_single_image-wrapper */}
                <div className="ttm_single_image-wrapper">
                  <img className="img-fluid" src="images/gallery/g11.webp" title="single-img-two" alt="single-img-two" loading="lazy" />
                </div>{/* ttm_single_image-wrapper end */}
              </div>
              <div className="col-lg-6">
                <div className="spacing-4 ttm-bgcolor-grey">
                  {/* section title */}
                  <div className="section-title with-desc clearfix">
                    <div className="title-header">
                      <h5>About Daniameli's Management</h5>
                      <h2 className="title">With more than 30 years of <span>experience</span></h2>
                    </div>
                    <div className="title-desc">
                      <p>Expertise in metallurgy related products. Metallurgy such as sales and installation is not only a profession but a passion at Daniameli. We have a tendency to believe that the perfect equipment can output the perfect molten metal, and therefore the perfect product. Thus, a good furnace and professional installation is key.</p>
                      <p>We have a team of experts to identify the right furnace for your project and deliver the highest quality product to your factory.</p>
                    </div>
                  </div>{/* section title end */}
                  {/* row */}
                  <div className="row no-gutters mt-20">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      {/*  featured-icon-box */}
                      <div className="featured-icon-box style3 left-icon icon-align-top">
                        <div className="featured-icon">{/*  featured-icon */}
                          <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                            <i className="ti ti-medall" />{/*  ttm-icon */}
                          </div>
                        </div>
                        <div className="featured-content">{/*  featured-content */}
                          <div className="featured-title">{/*  featured-title */}
                            <h5>Quick Resppnse and Delivery</h5>
                          </div>
                          <div className="featured-desc">{/*  featured-desc */}
                            <p>Quickly productivate just in time strategy.</p>
                          </div>
                        </div>
                      </div>{/*  featured-icon-box END */}
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      {/*  featured-icon-box */}
                      <div className="featured-icon-box style3 left-icon icon-align-top">
                        <div className="featured-icon">{/*  featured-icon */}
                          <div className="ttm-icon ttm-textcolor-skincolor ttm-icon_element-size-lg">
                            <i className="ti ti-bookmark-alt" />{/*  ttm-icon */}
                          </div>
                        </div>
                        <div className="featured-content">{/*  featured-content */}
                          <div className="featured-title">{/*  featured-title */}
                            <h5>Guaranteed Product</h5>
                          </div>
                          <div className="featured-desc">{/*  featured-desc */}
                            <p>Top quality product 100% guaranteed by Daniameli and management</p>
                          </div>
                        </div>
                      </div>{/*  featured-icon-box END */}
                    </div>
                  </div>{/* row END*/}
                  {/* separator */}
                  <div className="separator">
                    <div className="sep-line mt-4 mb-4" />
                  </div>
                  {/* separator */}
                  <div className="row align-items-center">
                    <div className="col-md-3 col-lg-4 col-5">
                      {/* <div className="text-left pt-15">
                        <img className="img-fluid" src="https://via.placeholder.com/145X60/444444.png" alt="about-sign" />
                      </div> */}
                    </div>
                    <div className="col-md-9 col-lg-8 col-7">
                      {/*  featured-icon-box */}
                      <div className="featured-icon-box without-icon text-left pt-15">
                        <div className="featured-content">{/*  featured-content */}
                          <div className="featured-title">{/*  featured-title */}
                            <h5>Majid Esfandiari</h5>
                          </div>
                          <div className="featured-desc">{/*  featured-desc */}
                            <p>Chairman &amp; Founder Daniameli</p>
                          </div>
                        </div>
                      </div>{/*  featured-icon-box END */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* row end */}
            {/* row */}
            <div className="row">
            </div>{/* row end*/}
          </div>
        </section>
        <section className="ttm-row bottomzero-padding-section bg-img6 position-relative z-1 clearfix">
          <div className="container-xl">
            <div className="row no-gutters">
              <div className="col-lg-10 mb_80 res-991-mb-0">
                <div className="ttm-bgcolor-skincolor ttm-textcolor-white">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                    <div className="ttm-bg-layer-inner"></div>
                  </div>
                  <div className="layer-content">
                    <div className="spacing-5">
                      {/* section title */}
                      <div className="section-title mb-4 clearfix">
                        <div className="title-header">
                          <h5>About Daniameli</h5>
                          <h2 className="title">Trusted by 100+<span>Happy Customers</span></h2>
                        </div>
                        <div className="title-desc">
                          <p>We listen. We advise. We design, together. Happy customers and ongoing relationships are what we strive for. Success is measured by results, the most important being how our clients feel about their experience with us. These reviews we’re onto something.</p>
                        </div>
                      </div>{/* section title end */}
                      <div className="row pt-3">
                        <div className="col-md-4">
                          {/*  featured-icon-box */}
                          <div className="featured-icon-box style4 left-icon">
                            <div className="featured-icon">{/*  featured-icon */}
                              <div className="ttm-icon ttm-icon_element-size-md">
                                <i className="flaticon flaticon-24h" />{/*  ttm-icon */}
                              </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                              <div className="featured-title">{/*  featured-title */}
                                <h5 className="fw-500">100% Satisfaction</h5>
                              </div>
                            </div>
                          </div>{/*  featured-icon-box END */}
                        </div>
                        <div className="col-md-4">
                          {/*  featured-icon-box */}
                          <div className="featured-icon-box style4 left-icon">
                            <div className="featured-icon">{/*  featured-icon */}
                              <div className="ttm-icon ttm-icon_element-size-md">
                                <i className="flaticon flaticon-data" />{/*  ttm-icon */}
                              </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                              <div className="featured-title">{/*  featured-title */}
                                <h5 className="fw-500">World Class Architect</h5>
                              </div>
                            </div>
                          </div>{/*  featured-icon-box END */}
                        </div>
                        <div className="col-md-4">
                          {/*  featured-icon-box */}
                          <div className="featured-icon-box style4 left-icon">
                            <div className="featured-icon">{/*  featured-icon */}
                              <div className="ttm-icon ttm-icon_element-size-md">
                                <i className="flaticon flaticon-code" />{/*  ttm-icon */}
                              </div>
                            </div>
                            <div className="featured-content">{/*  featured-content */}
                              <div className="featured-title">{/*  featured-title */}
                                <h5 className="fw-500">World Class Design</h5>
                              </div>
                            </div>
                          </div>{/*  featured-icon-box END */}
                        </div>
                      </div>
                      <div className="row ttm-fid-row-wrapper">
                        <div className="col-md-4 col-sm-4">
                          {/*ttm-fid*/}
                          <div className="ttm-fid inside ttm-fid-view-lefticon style1">
                            <div className="ttm-fid-left">{/*ttm-fid-left*/}
                              <div className="ttm-fid-icon-wrapper">
                                <i className="flaticon flaticon-developer" />
                              </div>
                            </div>
                            <div className="ttm-fid-contents text-left">{/*ttm-fid-contents*/}
                              <h4 className="ttm-fid-inner">
                                <CountUp start={0} end={478} duration={30} />
                              </h4>
                              <h3 className="ttm-fid-title">Happy Customers</h3>{/*ttm-fid-title*/}
                            </div>
                          </div>{/* ttm-fid end*/}
                        </div>
                        <div className="col-md-4 col-sm-4">
                          {/*ttm-fid*/}
                          <div className="ttm-fid inside ttm-fid-view-lefticon style1">
                            <div className="ttm-fid-left">
                              <div className="ttm-fid-icon-wrapper">
                                <i className="flaticon flaticon-interaction" />
                              </div>
                            </div>
                            <div className="ttm-fid-contents text-left">
                              <h4 className="ttm-fid-inner">
                                <CountUp start={0} end={642} duration={30} />
                              </h4>
                              <h3 className="ttm-fid-title">Projects Completed</h3>
                            </div>
                          </div>{/* ttm-fid end*/}
                        </div>
                        <div className="col-md-4 col-sm-4">
                          {/*ttm-fid*/}
                          <div className="ttm-fid inside ttm-fid-view-lefticon style1">
                            <div className="ttm-fid-left">
                              <div className="ttm-fid-icon-wrapper">
                                <i className="flaticon flaticon-global-1" />
                              </div>
                            </div>
                            <div className="ttm-fid-contents text-left">
                              <h4 className="ttm-fid-inner">
                                <CountUp start={0} end={578} duration={30} />
                              </h4>
                              <h3 className="ttm-fid-title">Cloud Designs</h3>
                            </div>
                          </div>{/* ttm-fid end*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* service section   */}
        <section className="ttm-row services-section ttm-bgcolor-darkgrey ttm-textcolor-white ttm-bg ttm-bgimage-yes bg-img7 clearfix">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
          <div className="container-xl">
            <div className="row">{/* row */}
              <div className="col-lg-6 offset-lg-3">
                {/* section title */}
                <div className="section-title with-desc text-center clearfix">
                  <div className="title-header">
                    <h5>Our Services</h5>
                    <h2 className="title">We run all kinds of IT services with 20 years of <span className="ttm-textcolor-white">experience</span></h2>
                  </div>
                </div>{/* section title end */}
              </div>
            </div>
            {/* row end */}
            {/* row */}
            <div className="row">
              <div className="col-lg-4 col-md-4">
                {/* featured-icon-box */}
                <div className="featured-icon-box style5 text-left res-767-mb-20">
                  <div className="featured-icon">{/* featured-icon*/}
                    <div className="ttm-icon ttm-icon_element-size-lg">
                      <i className="flaticon flaticon-intelligent" />
                    </div>
                  </div>{/* featured-icon */}
                  <div className="featured-content">{/* featured-content */}
                    <div className="featured-title">
                      <h5>Experience Design</h5>{/* featured-title */}
                    </div>
                    <div className="featured-desc">{/* featured-description */}
                      <p>UX team create web solutions that are both intuitively tailored to match our clients’ specific tasks.</p>
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm btn-inline mt-3">Read More <i className="ti ti-angle-double-right" /></a>
                  </div>{/* featured-content END*/}
                </div>{/* featured-icon-box */}
              </div>
              <div className="col-lg-4 col-md-4">
                {/* featured-icon-box */}
                <div className="featured-icon-box style5 text-left res-767-mb-20">
                  <div className="featured-icon">{/* featured-icon*/}
                    <div className="ttm-icon ttm-icon_element-size-lg">
                      <i className="flaticon flaticon-analytics" />
                    </div>
                  </div>{/* featured-icon */}
                  <div className="featured-content">{/* featured-content */}
                    <div className="featured-title">
                      <h5>Digital Services</h5>{/* featured-title */}
                    </div>
                    <div className="featured-desc">{/* featured-description */}
                      <p>Digital solutions have transformed the world’s customer expectations and the profitable growths.</p>
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm btn-inline mt-3">Read More <i className="ti ti-angle-double-right" /></a>
                  </div>{/* featured-content END*/}
                </div>{/* featured-icon-box */}
              </div>
              <div className="col-lg-4 col-md-4">
                {/* featured-icon-box */}
                <div className="featured-icon-box style5 text-left">
                  <div className="featured-icon">{/* featured-icon*/}
                    <div className="ttm-icon ttm-icon_element-size-lg">
                      <i className="flaticon flaticon-analysis" />
                    </div>
                  </div>{/* featured-icon */}
                  <div className="featured-content">{/* featured-content */}
                    <div className="featured-title">
                      <h5>Content Engineering</h5>{/* featured-title */}
                    </div>
                    <div className="featured-desc">{/* featured-description */}
                      <p>We are here in the fields of organizing bridging the gaps between strategy and the development.</p>
                    </div>
                    <a className="ttm-btn ttm-btn-size-sm btn-inline mt-3">Read More <i className="ti ti-angle-double-right" /></a>
                  </div>{/* featured-content END*/}
                </div>{/* featured-icon-box */}
              </div>
            </div>{/* row end*/}
          </div>
        </section>
        {/* service section end  */}
        <section className="ttm-row zero-padding-section mt_95 res-991-mt-0 res-991-pb-0 clearfix">
          <div className="container-xl">
            <div className="row no-gutters">
              <div className="col-lg-3">
                {/* col-bg-img-three */}
                <div className="col-bg-img-three ttm-bg ttm-col-bgimage-yes res-991-h-auto">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                    <div className="ttm-bg-layer-inner" />
                  </div>
                </div>
                {/* Responsive View image */}
                <img src="images/gallery/g3.webp" className="img-fluid ttm-equal-height-image" alt="col-bgimage-3" loading='lazy' />
              </div>
              <div className="col-lg-9">
                <div className="ttm-bgcolor-skincolor ttm-bg ttm-col-bgcolor-yes ttm-right-span">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                    <div className="ttm-bg-layer-inner" />
                  </div>
                  <div className="layer-content position-relative">
                    <div className="spacing-6 ttm-textcolor-white">
                      <h3 className="mb-2">We Take Care of Your Technology Focus on Your Business</h3>
                      <p className="mb-0">Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy and software development.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* tab section */}
        <section className="ttm-row tab-section clearfix">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-12">
                {/* section title */}
                <div className="section-title text-center with-desc clearfix">
                  <div className="title-header">
                    <h5>What We Offer For You</h5>
                    <h2 className="title">Here are some <span>Milestones </span></h2>
                  </div>
                </div>{/* section title end */}
              </div>
            </div>
            {/* row end */}
            {/* row */}
            <div className="row">
              <div className="col-lg-12">
                <div className="ttm-tabs text-center ttm-tab-style-classic style1">
                  <Tabs defaultIndex={2} onSelect={index => console.log(index)}>{/* tabs */}
                    <TabList className="tabs">
                      <Tab className="tab" title="Hi-Tech"><span><i className="flaticon flaticon-report" /> Hi-Tech</span></Tab>
                      <Tab className="tab" title="Media"><span><i className="flaticon flaticon-computer" /> Media</span></Tab>
                      <Tab className="tab" title="Industrial"><span><i className="flaticon flaticon-system" /> Industrial</span></Tab>
                      <Tab className="tab" title="Banking"><span><i className="flaticon flaticon-interaction" /> Banking</span></Tab>
                      <Tab className="tab" title="Medical"><span><i className="flaticon flaticon-analysis" /> Medical</span></Tab>
                    </TabList>
                    <div className="box-shadow content-tab">
                      <FadeIn>
                        <TabPanel>
                          <div className="content-inner">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="text-left">
                                  <h3 className="title fs-30">Reason to Reject following Drawbacks</h3>
                                  <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s.</p>
                                  <p>Sometimes you get into it for the wrong reasons, &amp; eventually it hits you on the face. These reasons can be drawbak but an eye opener too. These reasons can be drawbak but an eye opener too.</p>
                                  <ul className="ttm-list ttm-list-textsize-medium ttm-list-style-icon pt-15">
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Complete software platform development </span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Device and field testing for electronics</span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Device and field testing for electronics </span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="grey-border res-991-mt-30 text-left">
                                  {/* ttm_single_image-wrapper */}
                                  <div className="ttm_single_image-wrapper with-border15">
                                    <img className="img-fluid grey-boder" src="images/gallery/g3.webp" title="single-img-three" alt="single-img-three" loading='lazy' />
                                  </div>{/* ttm_single_image-wrapper end */}
                                </div>
                              </div>
                            </div>{/* row end */}
                          </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                        <TabPanel>
                          <div className="content-inner">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="grey-border text-left">
                                  {/* ttm_single_image-wrapper */}
                                  <div className="ttm_single_image-wrapper with-border15">
                                    <img className="img-fluid grey-boder" src="images/gallery/g3.webp" title="single-img-three" alt="single-img-three" loading='lazy' />
                                  </div>{/* ttm_single_image-wrapper end */}
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="text-left res-991-mt-30">
                                  <h3 className="title fs-30">Reason to Reject following Drawbacks</h3>
                                  <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s.</p>
                                  <p>Sometimes you get into it for the wrong reasons, &amp; eventually it hits you on the face. These reasons can be drawbak but an eye opener too. These reasons can be drawbak but an eye opener too.</p>
                                  <ul className="ttm-list ttm-list-textsize-medium ttm-list-style-icon pt-15">
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Complete software platform development </span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Device and field testing for electronics</span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Device and field testing for electronics </span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>{/* row end */}
                          </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                        <TabPanel>
                          <div className="content-inner active">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="text-left">
                                  <h3 className="title fs-30">Reason to Reject following Drawbacks</h3>
                                  <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s.</p>
                                  <p>Sometimes you get into it for the wrong reasons, &amp; eventually it hits you on the face. These reasons can be drawbak but an eye opener too. These reasons can be drawbak but an eye opener too.</p>
                                  <ul className="ttm-list ttm-list-textsize-medium ttm-list-style-icon pt-15">
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Complete software platform development </span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Device and field testing for electronics</span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Device and field testing for electronics </span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="grey-border res-991-mt-30 text-left">
                                  {/* ttm_single_image-wrapper */}
                                  <div className="ttm_single_image-wrapper with-border15">
                                    <img className="img-fluid grey-boder" src="images/gallery/g3.webp" title="single-img-three" alt="single-img-three" loading='lazy' />
                                  </div>{/* ttm_single_image-wrapper end */}
                                </div>
                              </div>
                            </div>{/* row end */}
                          </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                        <TabPanel>
                          <div className="content-inner">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="grey-border text-left">
                                  {/* ttm_single_image-wrapper */}
                                  <div className="ttm_single_image-wrapper with-border15">
                                    <img className="img-fluid grey-boder" src="images/gallery/g3.webp" title="single-img-three" alt="single-img-three" loading='lazy' />
                                  </div>{/* ttm_single_image-wrapper end */}
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="text-left res-991-mt-30">
                                  <h3 className="title fs-30">Reason to Reject following Drawbacks</h3>
                                  <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s.</p>
                                  <p>Sometimes you get into it for the wrong reasons, &amp; eventually it hits you on the face. These reasons can be drawbak but an eye opener too. These reasons can be drawbak but an eye opener too.</p>
                                  <ul className="ttm-list ttm-list-textsize-medium ttm-list-style-icon pt-15">
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Complete software platform development </span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Device and field testing for electronics</span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Device and field testing for electronics </span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>{/* row end */}
                          </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                        <TabPanel>
                          <div className="content-inner">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="text-left">
                                  <h3 className="title fs-30">Reason to Reject following Drawbacks</h3>
                                  <p>High-tech industries play an important role in the modern economy, and often experience significantly higher pay than other industries. And Digital solutions have transformed the world’s.</p>
                                  <p>Sometimes you get into it for the wrong reasons, &amp; eventually it hits you on the face. These reasons can be drawbak but an eye opener too. These reasons can be drawbak but an eye opener too.</p>
                                  <ul className="ttm-list ttm-list-textsize-medium ttm-list-style-icon pt-15">
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Complete software platform development </span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Device and field testing for electronics</span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Device and field testing for electronics </span>
                                    </li>
                                    <li>
                                      <i className="fa fa-arrow-circle-right ttm-textcolor-skincolor" />
                                      <span className="ttm-list-li-content">Practice maturity in hardware, firmware and middleware</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="grey-border res-991-mt-30 text-left">
                                  {/* ttm_single_image-wrapper */}
                                  <div className="ttm_single_image-wrapper with-border15">
                                    <img className="img-fluid grey-boder" src="images/gallery/g3.webp" title="single-img-three" alt="single-img-three" loading='lazy' />
                                  </div>{/* ttm_single_image-wrapper end */}
                                </div>
                              </div>
                            </div>{/* row end */}
                          </div>{/* content-inner */}{/* row end*/}
                        </TabPanel>
                      </FadeIn>
                    </div>
                  </Tabs>  {/* tabs end*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* tab section end */}

        {/* first-row-title-section */}
        <section className="ttm-row second-row-title-section mt_90 ttm-bgcolor-darkgrey ttm-bg ttm-bgimage-yes bg-img9 clearfix">
          <div className="ttm-row-wrapper-bg-layer ttm-bg-layer" />
          <div className="container-xl">
            <div className="row">{/* row */}
              <div className="col-lg-8 offset-lg-2">
                <div className="text-center">
                  <div className="ttm-play-icon-btn mb-5">
                    <div className="ttm-play-icon-animation">
                      <a id="playbutton">
                        <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-sm rounded-circle">
                          <i className="fa fa-play" />
                        </div>
                      </a>
                      <div id="videobox">
                        <i id="close-btn" className="fa fa-times"></i>
                        <div id="video-wrapper">
                          <iframe width="500" height="500" src="https://www.youtube.com/embed/7e90gBu4pas" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* section-title */}
                  <div className="section-title with-desc text-center clearfix">
                    <div className="title-header">
                      <h2 className="title">We Provide Outsourced IT Services For Small &amp; <span className="ttm-textcolor-white">Mid-Sized Business</span></h2>
                    </div>
                    <div className="title-desc">Appropriate for your specific business, making it easy for<br /> you to have quality IT services. What We Do</div>
                  </div>{/* section-title end */}
                  <div className="mt-5">
                    <a className="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-white">More Services</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* first-row-title-section end*/}
        {/* portfolio-section */}
        <section className="ttm-row bottomzero-padding-section position-relative clearfix">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-12">
                {/* section title */}
                <div className="section-title text-center with-desc clearfix">
                  <div className="title-header">
                    <h5>Look At Portfolio</h5>
                    <h2 className="title">Check out our <span>Portfolio</span></h2>
                  </div>
                </div>{/* section title end */}
              </div>
            </div>
            {/* portfolio */}
            <Portfolio />
            {/* roportfoliow end */}
          </div>
        </section>
        {/* portfolio-section end */}
        {/* our-partner-section */}
        <section className="ttm-row our-partner-section ttm-bgcolor-skincolor mt_90 res-991-mt-0 res-991-p-0 clearfix">
          <div className="container-xl">
            <div className="row">
              <div className="col-12 text-center">
                <Slider className="row slick_slider ttm-boxes-spacing-30px" {...slick_slider} slidesToShow={5}>
                  <div className="ttm-box-col-wrapper">
                    <div className="client-box ttm-box-view-boxed-logo">
                      <div className="client">
                        <div className="ttm-client-logo-tooltip" data-tooltip="client-01">
                          <img className="img-fluid" src="images/home-bg.webp" alt="plc" loading='lazy' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-box-col-wrapper">
                    <div className="client-box ttm-box-view-boxed-logo">
                      <div className="client">
                        <div className="ttm-client-logo-tooltip" data-tooltip="client-02">
                          <img className="img-fluid" src="images/home-bg.webp" alt="plc" loading='lazy' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-box-col-wrapper">
                    <div className="client-box ttm-box-view-boxed-logo">
                      <div className="client">
                        <div className="ttm-client-logo-tooltip" data-tooltip="client-03">
                          <img className="img-fluid" src="images/home-bg.webp" alt="plc" loading='lazy' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-box-col-wrapper">
                    <div className="client-box ttm-box-view-boxed-logo">
                      <div className="client">
                        <div className="ttm-client-logo-tooltip" data-tooltip="client-04">
                          <img className="img-fluid" src="images/home-bg.webp" alt="plc" loading='lazy' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-box-col-wrapper">
                    <div className="client-box ttm-box-view-boxed-logo">
                      <div className="client">
                        <div className="ttm-client-logo-tooltip" data-tooltip="client-05">
                          <img className="img-fluid" src="images/home-bg.webp" alt="plc" loading='lazy' />
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* our-partner-section end */}
      </div>

    )
  }
}

export default Home;