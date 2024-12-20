import React, { Component } from 'react';
import Header from '../components/Header';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const PUBLIC_KEY = 'your_public_key';

export class Contact_01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { name, phone, email, subject, message } = this.state;

        const templateParams = {
            from_name: name,
            from_email: email,
            phone_number: phone,
            subject: subject,
            message_html: message,
        };

        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            templateParams,
            PUBLIC_KEY
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
        }, (err) => {
            console.log('FAILED...', err);
            alert('Error sending email. Please try again.');
        });

        this.setState({
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: '',
        });
    }

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
                                        <h1 className="title">Contact Us</h1>
                                    </div>{/* /.page-title-captions */}
                                </div>
                            </div>{/* /.col-md-12 */}
                        </div>{/* /.row */}
                    </div>{/* /.container */}
                </div>
                {/* page-title end*/}
                <section className="ttm-row zero-padding-section clearfix">
                    <div className="container-xl">
                        <div className="row no-gutters">{/* row */}
                            <div className="col-lg-5">
                                <div className="spacing-9">
                                    {/* section title */}
                                    <div className="section-title with-desc clearfix">
                                        <div className="title-header">
                                            <h5>Come Visit Us At</h5>
                                            <h2 className="title">Our Address</h2>
                                        </div>
                                    </div>{/* section title end */}
                                    <div className="row">
                                        <div className="col-12">
                                            {/* featured-icon-box */}
                                            <div className="featured-icon-box style2 left-icon icon-align-top">
                                                <div className="featured-icon">{/* featured-icon */}
                                                    <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                                                        <i className="ti-location-pin" />
                                                    </div>
                                                </div>
                                                <div className="featured-content">
                                                    <div className="featured-title">{/* featured title */}
                                                        <h5>Office Address</h5>
                                                    </div>
                                                    <div className="featured-desc">{/* featured desc */}
                                                        <p>Eupener Straße 124 ,50933 Köln, Germany</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* separator */}
                                    <div className="separator">
                                        <div className="sep-line mt-4 mb-4" />
                                    </div>
                                    {/* separator */}
                                    <div className="row">
                                        <div className="col-12">
                                            {/* featured-icon-box */}
                                            <div className="featured-icon-box style2 left-icon icon-align-top">
                                                <div className="featured-icon">{/* featured-icon */}
                                                    <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                                                        <i className="fa fa-phone" />
                                                    </div>
                                                </div>
                                                <div className="featured-content">
                                                    <div className="featured-title">{/* featured title */}
                                                        <h5>Our Phone Number</h5>
                                                    </div>
                                                    <div className="featured-desc">{/* featured desc */}
                                                        <p>+49-22150005956</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* separator */}
                                    <div className="separator">
                                        <div className="sep-line mt-4 mb-4" />
                                    </div>
                                    {/* separator */}
                                    <div className="row">
                                        <div className="col-12">
                                            {/* featured-icon-box */}
                                            <div className="featured-icon-box style2 left-icon icon-align-top">
                                                <div className="featured-icon">{/* featured-icon */}
                                                    <div className="ttm-icon ttm-bgcolor-skincolor ttm-icon_element-size-md rounded-circle">
                                                        <i className="ti ti-email" />
                                                    </div>
                                                </div>
                                                <div className="featured-content">
                                                    <div className="featured-title">{/* featured title */}
                                                        <h5>Our Email</h5>
                                                    </div>
                                                    <div className="featured-desc">{/* featured desc */}
                                                        <p>info@daniameli.de</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="spacing-10 ttm-bgcolor-grey ttm-bg ttm-col-bgcolor-yes ttm-right-span">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                                        <div className="ttm-bg-layer-inner" />
                                    </div>
                                    {/* section title */}
                                    <div className="section-title with-desc clearfix">
                                        <div className="title-header">
                                            <h5>Send Message</h5>
                                            <h2 className="title">Drop Us A Line</h2>
                                        </div>
                                    </div>{/* section title end */}
                                    <form id="ttm-quote-form" className="row ttm-quote-form clearfix" onSubmit={this.handleSubmit}>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control bg-white" placeholder="Full Name*" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} placeholder="Phone Number*" required="required" className="form-control bg-white" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email Address*" required="required" className="form-control bg-white" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} placeholder="Subject" required="required" className="form-control bg-white" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-12">
                                            <div className="form-group">
                                                <textarea name="message" rows={5} value={this.state.message} onChange={this.handleChange} placeholder="Write A Message..." required="required" className="form-control bg-white" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="text-left">
                                                <button type="submit" id="submit" className="mt-3 ttm-btn ttm-btn-size-md ttm-bgcolor-skincolor" value>
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                    </div>
                </section>
                <section className="ttm-row map-section res-991-p-0 clearfix">
                    <div className="map-wrapper">
                        <iframe title='location' height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.9549218530315!2d6.889742599999999!3d50.9430467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf3ad2faf36d41%3A0x1e4a08934a23047b!2sEupener%20Str.%20124%2C%2050933%20K%C3%B6ln%2C%20Germany!5e0!3m2!1sen!2sca!4v1697839311816!5m2!1sen!2sca" />
                    </div>
                </section>
            </div>
        )
    }
}

export default Contact_01;