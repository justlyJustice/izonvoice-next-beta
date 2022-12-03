/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link } from "react-router-dom";

import PostCarousel from "components/PostCarousel";
import Header from "components/common/Header";
import { getPosts } from "services/postService";
import useApi from "hooks/useApi";
import LoadingAnimation from "components/common/LoadingAnimation";
import Head from "components/common/Head";
import { formateTime } from "utils/helpers";
import { logo } from "/public/assets/images";

const Posts = () => {
  const { data: posts, loading, request: retrievePosts } = useApi(getPosts);

  useEffect(() => {
    retrievePosts();
  }, []);

  return (
    <div>
      <section>
        <Head
          description="Izonvoice homepage"
          title="IzonVoice - Home"
          image={logo}
        />

        <LoadingAnimation loading={loading} />
        <Header />
        <div className="container">
          <div className="carousel_contain">
            <PostCarousel posts={posts} />
          </div>

          <div className="news_feed_contain">
            <div className="head">
              <h2>NEWS FEED</h2>

              <hr />
            </div>

            <div className="body">
              <div className="section1">
                {posts &&
                  posts.length > 0 &&
                  posts.slice(10, posts.length).map((post, i) => (
                    <Link to={`/${post.slug}`} key={i}>
                      <div className="post-contain">
                        <div className="post-contain-image-contain">
                          <img
                            src={post.urlToImage || post.images[0]}
                            alt="Item pic"
                          />
                        </div>

                        <div className="text-div">
                          <div className="text-group-one">
                            <div className="category">
                              <i
                                className="fa-solid fa-badge"
                                style={{ color: `white !imporant` }}
                              ></i>
                              <span className="first-span">
                                {post.category.toUpperCase()}
                              </span>
                            </div>

                            <div className="createdAt">
                              <span className="second-span">
                                {formateTime(post.createdAt)}
                              </span>
                            </div>
                          </div>

                          <p className="blog-title">
                            {post.title.toUpperCase()}
                          </p>

                          <div className="tags-contain">
                            <span className="comment-contain">
                              <i
                                className="fa-solid fa-comment"
                                style={{
                                  color: "#C4C4C4",
                                  fontSize: "12px",
                                }}
                              />{" "}
                              <small>{post.comments.length}</small>
                            </span>

                            <span className="comment-contain">
                              <i
                                className="fa-solid fa-heart"
                                style={{
                                  color: "#C4C4C4",
                                  fontSize: "12px",
                                }}
                              />

                              <small>0</small>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>

              {/* <div className="section2">
                <div className="top-trend-text">
                  <p>
                    TRENDING <i className="fa-solid fa-arrow-trend-up"></i>
                  </p>
                </div>

                <div className="trends-container">
                  {posts &&
                    posts.length > 0 &&
                    posts
                      .filter((post) => post._id === "62b4cdaec10f2800dbe62cd1")
                      .map((post) => (
                        <div className="trend" key={post._id}>
                          <Link to={`/${post.slug}`}>
                            <div className="trend-pic-contain">
                              <img src={post.urlToImage} alt="Trend pic" />
                            </div>

                            <p className="trend-text">{post.title}</p>
                          </Link>
                        </div>
                      ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Posts;
