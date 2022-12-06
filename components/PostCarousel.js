/* eslint-disable no-unused-vars */
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const PostCarousel = ({ posts }) => {
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          ...style,
          alignItems: "center",
          background: "#c4c4c4",
          borderRadius: "50%",
          display: "flex",
          height: "30px",
          justifyContent: "center",
          width: "30px",
        }}
      />
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          ...style,
          alignItems: "center",
          background: "#c4c4c4",
          borderRadius: "50%",
          display: "flex",
          height: "30px",
          justifyContent: "center",
          width: "30px",
        }}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {posts && posts.length > 0
          ? posts
              .filter((post) => post._id !== "62b4cdaec10f2800dbe62cd1")
              .slice(0, 10)
              .map((post, i) => (
                <div key={i} className="blog-slider">
                  <div className="blog-image-contain">
                    <Image
                      className="blog-image"
                      src={post.urlToImage || post.images[0]}
                      alt={post.urlToImage || post.images[0]}
                      width={200}
                      height={365}
                      la
                    />
                  </div>

                  <div className="text-div">
                    <Link href={`/${post.slug}`}>
                      <h2 className="carousel-text">{post.title}</h2>

                      <hr className="slide-rule" />

                      <div>
                        <p className="slide-para">
                          {post.description || post.desc}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))
          : null}
      </Slider>
    </>
  );
};

export default PostCarousel;
