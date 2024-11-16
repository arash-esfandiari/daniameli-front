import React from 'react'

function Portfolio() {
    const items = [
        {
            id: 1,
            image: "images/gallery/g1.webp",
            category: "Project A",
            title: "Power Control Unit",
        },
        {
            id: 2,
            image: "images/gallery/g2.webp",
            category: "Project A",
            title: "Power Control Unit",
        },
        {
            id: 3,
            image: "images/gallery/g3.webp",
            category: "Project A",
            title: "Power Control Unit",
        },
        {
            id: 4,
            image: "images/gallery/g4.webp",
            category: "Project A",
            title: "Power Control Unit",
        },
        {
            id: 5,
            image: "images/gallery/g5.webp",
            category: "Project A",
            title: "Power Control Unit",
        },
        {
            id: 6,
            image: "images/gallery/g6.webp",
            category: "Project A",
            title: "Power Control Unit",
        },
        {
            id: 7,
            image: "images/gallery/g7.webp",
            category: "Project A",
            title: "Power Control Unit",
        },
        {
            id: 8,
            image: "images/gallery/g8.webp",
            category: "Project A",
            title: "Power Control Unit",
        },
        {
            id: 9,
            image: "images/gallery/g9.webp",
            category: "Project A",
            title: "Power Control Unit",
        },
        {
            id: 10,
            image: "images/gallery/g14.webp",
            category: "Project A",
            title: "Power Control Unit",
        },
        {
            id: 11,
            image: "images/gallery/g13.webp",
            category: "Project A",
            title: "Power Control Unit",
        },
        {
            id: 11,
            image: "images/gallery/g11.webp",
            category: "Project A",
            title: "Power Control Unit",
        },
    ];
    return (
        <div className="row multi-columns-row ttm-boxes-spacing-10px ttm-bgcolor-white">
            <div className="row">
                {items.map((item) => (
                    <div className="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6" key={item.id}>
                        {/* featured-imagebox */}
                        <div className="featured-imagebox featured-imagebox-portfolio style2">
                            {/* featured-thumbnail */}
                            <div className="featured-thumbnail">
                                <img
                                    className="img-fluid"
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </div>
                            {/* featured-thumbnail end */}
                            <div className="featured-content">
                                <div className="category">
                                    <p>{item.category}</p>
                                </div>
                                <div className="featured-title">
                                    <h5>
                                        <a href={process.env.PUBLIC_URL + item.link}>
                                            {item.title}
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        {/* featured-imagebox */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio