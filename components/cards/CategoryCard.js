import Link from "next/link";
import styled from "styled-components";

const CardContainer = styled(Link)`
  cursor: pointer;
  height: 250px;
  width: 300px;
  margin: 20px;
  transition: ease-in-out all 0.3s;

  &:hover .title {
    color: rgba(17, 55, 254, 0.7);
  }

  .card-image {
    object-fit: cover;
    border-radius: 20px;
    width: 100%;
    height: 150px;
    max-width: 100%;
  }

  .title {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    text-transform: uppercase;
    transition: ease 0.5s all;
  }

  .para-text {
    font-family: Playfair Display;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #393939;
    text-align: justify;
  }

  .bottom-content {
    align-items: center;
    display: flex;
    margin-top: 5px;
  }

  .bottom-content .content {
    background: #f9f9f9;
    border-radius: 5px;
    height: 24.11px;
    text-align: center;
    width: 54.46px;
    margin-right: 10px;
  }

  .bottom-content span {
    font-style: normal;
    font-weight: 800;
    font-size: 10px;
    line-height: 12px;
    color: #393939;
  }

  .bottom-content .fa {
    color: #393939;
  }

  @media screen and (max-width: 768px) {
    height: fit-content;
  }
`;

const CategoryCard = ({ data }) => {
  return (
    <CardContainer href={`/${data.slug}`}>
      <>
        <img
          className="card-image"
          src={data.images[0] || data.urlToImage}
          alt="category-img"
        />

        <div>
          <h3 className="title">{data.title}</h3>
          <p className="para-text">{data.paraText}</p>
        </div>

        <div className="bottom-content">
          <div className="content">
            <i className="fa fa-comment"></i>{" "}
            <span>{data.comments.length}</span>
          </div>

          <div className="content">
            <i className="fa fa-heart"></i> <span>{data.likes.length}</span>
          </div>
        </div>
      </>
    </CardContainer>
  );
};

export default CategoryCard;
