import CategoryCard from "components/cards/CategoryCard";

import Header from "components/common/Header";
import { getPostsCategory } from "services/postService";
import NoResults from "components/common/NoResults";
import Head from "components/common/Head";

const PostCategory = ({ posts, name }) => {
  return (
    <section className="blog-category-section">
      <Head
        title={"Izon Voice | " + name.toUpperCase()}
        description="View our amazing categories and explor our different cross sections of news!"
        image={"/assets/images/Log.png"}
      />

      <Header />

      <div className="container">
        <div className="top-contain">
          <h2 className="category">
            <i className="fa-solid fa-bars-staggered"></i> {name}
          </h2>
        </div>

        <div className="category-wrapper">
          {posts && posts.length > 0 ? (
            posts.map((post, i) => <CategoryCard data={post} key={i} />)
          ) : (
            <>
              <NoResults />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export const getStaticPaths = () => {
  const categoryNames = [
    "agriculture",
    "politics",
    "sports",
    "culture",
    "religion",
    "finance",
    "social",
  ];

  const paths = categoryNames.map((categoryName) => ({
    params: {
      categoryName,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const { categoryName } = context.params;
  const res = await getPostsCategory(categoryName);

  return {
    props: {
      posts: res.data.data,
      name: categoryName,
    },
  };
};

export default PostCategory;
