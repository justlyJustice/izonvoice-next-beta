import { useState } from "react";
import Linkify from "linkify-react";
import ReactModal from "react-modal";

import Header from "components/common/Header";
import Head from "components/common/Head";
import CommentSection from "components/comment/CommentSection";
import PostShare from "components/common/PostShare";

import {
  formateTime,
  splitDescriptionToFour,
  splitDescToFour,
} from "utils/helpers";
import { getPost, getPosts } from "services/postService";

import Image from "next/image";

const Post = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const description = splitDescriptionToFour(post);
  const desc = splitDescToFour(post);

  return (
    <section>
      <style>
        {`
          .modal {
            width: 400px;
            height: fit-content;
            background-color: white;
            padding: 20px 20px;
          }

          .overlay {
            align-items: center;
            display: flex;
            justify-content: center;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.25);
          }

          .close {
            display: flex;
            justify-content: flex-end;
            color: #dbdbdb;
            cursor: pointer;
            font-size: 30px;
          }

          .modal-pic {
            object-fit: contain;
            height: auto;
            width: 100%;
          }
        `}
      </style>

      <Header />

      <>
        <Head
          title={`${post.title}`}
          description={post.description}
          image={post.images[0] || post.urlToImage}
        />

        <div className="container">
          <div className="blog-section">
            <div className="blog-image-contain">
              <Image
                src={post.urlToImage || post.images[0]}
                alt="Post img"
                /* fill */
                width={`100`}
                height={`100`}
              />
            </div>

            <div className="blog-text-contain">
              <div>
                <h2 className="blog-title">{post.title}</h2>

                <div className="user-details-contain">
                  <span className="author">
                    <i className="fa-solid fa-user"></i>{" "}
                    {post.author
                      ? post.author.toUpperCase()
                      : "JOEL AWUDUMAPU IRENE"}
                  </span>

                  <span className="time">
                    <i className="fa-solid fa-calendar"></i>{" "}
                    {formateTime(post.createdAt).toUpperCase()}
                  </span>

                  <span className="category">
                    <i className="fa-brands fa-instalod"></i>{" "}
                    {post.category.toUpperCase()}
                  </span>
                </div>

                {post.quote && (
                  <div className="quote-div">
                    <h3 className="quote">
                      <span className="quote-sign">{`"`}</span>
                      {post.quote}
                      <span className="quote-sign">{`"`}</span>
                    </h3>
                  </div>
                )}
              </div>
            </div>

            <div className="blog-content">
              <>
                {(description &&
                  description[0].map((des, i) => (
                    <p className="para" key={i}>
                      <Linkify>{des}</Linkify>
                    </p>
                  ))) ||
                  (desc &&
                    desc[0].map((des, i) => (
                      <p className="para" key={i}>
                        <Linkify>{des}</Linkify>
                      </p>
                    )))}

                {(description &&
                  description[1].map((des, i) => (
                    <p className="para" key={i}>
                      <Linkify>{des}</Linkify>
                    </p>
                  ))) ||
                  (desc &&
                    desc[1].map((des, i) => (
                      <p className="para" key={i}>
                        <Linkify>{des}</Linkify>
                      </p>
                    )))}

                {(description &&
                  description[2].map((des, i) => (
                    <p className="para" key={i}>
                      <Linkify>{des}</Linkify>
                    </p>
                  ))) ||
                  (desc &&
                    desc[2].map((des, i) => (
                      <p className="para" key={i}>
                        <Linkify>{des}</Linkify>
                      </p>
                    )))}

                {(description &&
                  description[3].map((des, i) => (
                    <p className="para" key={i}>
                      <Linkify>{des}</Linkify>
                    </p>
                  ))) ||
                  (desc &&
                    desc[3].map((des, i) => (
                      <p className="para" key={i}>
                        <Linkify>{des}</Linkify>
                      </p>
                    )))}
              </>
            </div>
          </div>

          <CommentSection post={post} />
        </div>
        {/* 
          <PostShare
            title={post.title}
            url={window.location.href}
            hashtags={`#izonvoice`}
          /> */}
      </>
    </section>
  );
};

export const getStaticPaths = async () => {
  const res = await getPosts();
  const slugs = res.data.data.map((post) => post.slug);

  const paths = slugs.map((slug) => ({
    params: {
      postSlug: slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const res = await getPost(context.params.postSlug);

  return {
    props: {
      post: res.data.data,
    },
    revalidate: 1,
  };
};

export default Post;
