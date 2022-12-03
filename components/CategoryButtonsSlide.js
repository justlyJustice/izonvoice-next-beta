import Link from "next/link";

const CategoryLinksSlide = () => {
  return (
    <div>
      <div className="button-groups">
        <Link
          data-tip="hello world"
          href="/category/agriculture"
          className="button"
        >
          Agriculture
        </Link>

        <Link data-tip="welcome" className="button" href="/category/culture">
          Culture
        </Link>

        <Link className="button" href="/category/finance">
          Finance
        </Link>

        <Link className="button" href="/category/politics">
          Politics
        </Link>

        <Link className="button" href="/category/religion">
          Religion
        </Link>

        <Link className="button" href="/category/social">
          Social
        </Link>

        <Link className="button" href="/category/sports">
          Sports
        </Link>
      </div>
    </div>
  );
};

export default CategoryLinksSlide;
