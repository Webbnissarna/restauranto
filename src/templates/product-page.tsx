import React from "react";
import { PageProps, graphql } from "gatsby";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";

type Image = {
  title?: string;
  gatsbyImageData?: IGatsbyImageData;
};

type Data = {
  contentfulProduct: {
    name: string;
    tags?: Array<string>;
    ingredients?: Array<string>;
    image?: Image;
    price: number;
    description?: {
      description: string;
    };
  };
};
type Context = {
  id: string;
};

export default function ProductPage(
  props: PageProps<Data, Context>
): JSX.Element {
  const { data } = props;

  console.log("data", data);

  const ingredients = data?.contentfulProduct?.ingredients;
  const tags = data?.contentfulProduct?.tags;
  const price =
    data?.contentfulProduct?.price && data?.contentfulProduct?.price / 100.0;
  return (
    <div>
      <h1>{data.contentfulProduct.name}</h1>
      <GatsbyImage
        image={data.contentfulProduct.image.gatsbyImageData}
        alt={data.contentfulProduct.image.title}
      />
      <ul>
        {tags &&
          tags.map((tag) => {
            return <li>{tag}</li>;
          })}
      </ul>
      <ul>
        {ingredients &&
          ingredients.map((ingredient) => {
            return <li>{ingredient}</li>;
          })}
      </ul>
      {price && <div>Price: {price} $</div>}
      <section>{data?.contentfulProduct?.description?.description}</section>
    </div>
  );
}

export const pageQuery = graphql`
  query MyQuery($id: String) {
    contentfulProduct(id: { eq: $id }) {
      id
      name
      tags
      ingredients
      price
      description {
        description
      }
      image {
        title
        gatsbyImageData(width: 400)
      }
      nutrients {
        calories
        carbohydrates
      }
    }
    contentfulContact {
      location {
        lat
        lon
      }
      email
      name
      phone
    }
  }
`;
