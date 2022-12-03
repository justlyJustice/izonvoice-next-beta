import styled from "styled-components";
import Link from "next/link";

const CardContainer = styled(Link)`
  width: 240px;
  margin: 20px;

  .card-image {
    object-fit: cover;
    border-radius: 20px;
    width: 100%;
    height: 180px;
  }

  .title {
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    color: #000000 !important;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-transform: uppercase;
    text-align: justify;
  }

  .link {
    color: #000000 !important;
  }

  .para-text {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: justify;
    font-family: Playfair Display;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    color: #393939;
    text-align: justify;
  }

  @media screen and (max-width: 768px) {
    .card-image {
      object-fit: cover;
      border-radius: 20px;
      width: 100%;
      height: 150px;
      max-width: 100%;
    }

    .title {
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      text-align: center;
      line-height: 24px;
      color: #000000;
    }

    .para-text {
      font-family: Playfair Display;
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;
      color: #393939;
      text-align: center;
    }
  }
`;

const Card = ({ title, paraText, image, slug }) => {
  return (
    <CardContainer href={`/${slug}`}>
      <div>
        <img className="card-image" src={image} alt={image} />

        <div>
          <h3 className="title">{title}</h3>

          <p className="para-text">{paraText}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
