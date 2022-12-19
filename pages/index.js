import Link from "next/link";

import Card from "components/cards/Card";
import CategoryButtonsSlide from "components/CategoryButtonsSlide";
import Head from "components/common/Head";

import { getPosts } from "services/postService";
import useAuth from "hooks/useAuth";
import Image from "next/image";

const Main = ({ posts }) => {
  return (
    <>
      <Head
        title="Izonvoice"
        description="Get all latest news from around the Niger Delta"
        image={`assets/images/Logo.png`}
      />

      <div className="main-grid">
        <div className="left_div">
          <Image
            className="logo"
            src={`/assets/images/Logo.png`}
            width={`230`}
            height={`230`}
            alt="Izon voice logo"
          />
        </div>

        <div className="content_div">
          <div className="top-links-contain">
            {/*  {user ? (
              <p className="link" style={{ color: "rgba(234, 25, 25, 0.7)" }}>
                <i className="fa-solid fa-user"></i> {user.name}
              </p>
            ) : (
              <>
                <Link
                  href="/login"
                  className="link"
                  style={{ color: "rgba(66, 232, 39, 0.7)" }}
                >
                  Login
                </Link>

                <hr className="rule" />

                <Link
                  href="/register"
                  className="link"
                  style={{ color: "rgba(234, 25, 25, 0.7)" }}
                >
                  Register
                </Link>
              </>
            )} */}
          </div>

          <div className="cards-contain">
            {posts &&
              posts.length > 0 &&
              posts.map((post) => (
                <Card
                  key={post._id}
                  image={post.urlToImage || post.images[0]}
                  title={post.title}
                  paraText={post.description || post.desc}
                  slug={post.slug}
                />
              ))}
          </div>

          <div className="divider"></div>

          <div className="bottom-group">
            <div>
              <p className="more-para">
                MORE STORIES <i className="fa-solid fa-paper-plane"></i>
              </p>
            </div>

            <CategoryButtonsSlide />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

export const getStaticProps = async () => {
  const res = await getPosts(`?limit=3`);

  const posts = res.data.data;

  return {
    props: {
      posts,
    },
  };
};
