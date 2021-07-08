import React from "react";
import { PageProps, graphql } from "gatsby";

type Data = {
  contentfulProduct: {
    name: string;
    tags?: Array<string>;
    ingredients?: Array<string>;
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

  return (
    <div>
      <h1>{data.contentfulProduct.name}</h1>
      <p>Sicc produktsida</p>
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
    }
  }
`;
