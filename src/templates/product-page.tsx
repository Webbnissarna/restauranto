/** @jsx jsx */
import { jsx } from "theme-ui";

import { PageProps, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Contact, ContentfulProduct, Context } from "../types/types";
import RootContainer from "../components/atoms/RootContainer";

interface Data {
  contentfulProduct: ContentfulProduct;
  contentfulContact: Contact;
}

export default function ProductPage(
  props: PageProps<Data, Context>
): JSX.Element {
  const { data } = props;

  const ingredients = data?.contentfulProduct?.ingredients;
  const tags = data?.contentfulProduct?.tags;
  const nutrients = data?.contentfulProduct?.nutrients;
  const priceText = (
    data?.contentfulProduct?.price && data?.contentfulProduct?.price / 100.0
  )
    .toFixed(2)
    .replace(".", ",");

  return (
    <RootContainer>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: "md",
        }}
      >
        <h1>{data.contentfulContact.name}</h1>
        <span>{data.contentfulContact.phone}</span>
      </div>

      <h2
        sx={{
          textAlign: "center",
          margin: 0,
        }}
      >
        {data.contentfulProduct.name}
      </h2>

      <span
        sx={{
          textAlign: "center",
          fontSize: "h3",
          fontStyle: "italic",
        }}
      >
        {priceText}:-
      </span>

      <GatsbyImage
        image={data.contentfulProduct.image.gatsbyImageData}
        alt={data.contentfulProduct.image.title}
        sx={{
          height: 216,
        }}
      />

      <div>
        <ul
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            listStyle: "none",
            gap: "xl",
            margin: 0,
            padding: 0,
          }}
        >
          {tags &&
            tags.map((tag) => {
              return (
                <li
                  key={tag.name}
                  sx={{
                    backgroundColor: tag.color,
                    fontSize: "small",
                    margin: 0,
                    paddingX: "sm",
                    paddingY: "2xs",
                    borderRadius: "2xs",
                  }}
                >
                  {tag.name}
                </li>
              );
            })}
        </ul>
      </div>

      <section
        title="Description"
        sx={{
          marginX: 60,
        }}
      >
        <span>{data.contentfulProduct.description.description}</span>
      </section>

      <section
        title="Ingredients"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          gap: "md",
        }}
      >
        <h3 sx={{ margin: 0, padding: 0 }}>Ingredients</h3>
        <ul
          sx={{
            width: "100%",
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            margin: 0,
            padding: 0,
            justifyContent: "center",

            li: {
              borderTop: "transparentWhite",
              paddingY: "xs",

              "&:last-of-type": {
                borderBottom: "transparentWhite",
              },
            },
          }}
        >
          {ingredients &&
            ingredients.map((ingredient) => {
              return <li key={ingredient}>{ingredient}</li>;
            })}
        </ul>
      </section>

      <section
        title="Nutrients"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          gap: "md",
        }}
      >
        <h3 sx={{ margin: 0, padding: 0 }}>Nutrients</h3>
        <ul
          sx={{
            width: "100%",
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            margin: 0,
            padding: 0,
            justifyContent: "center",

            li: {
              borderTop: "transparentWhite",
              paddingY: "xs",

              "&:last-of-type": {
                borderBottom: "transparentWhite",
              },
            },
          }}
        >
          {nutrients &&
            Object.keys(nutrients)
              .filter((key) => nutrients[key])
              .map((nutrientName) => {
                const value = nutrients[nutrientName];
                return (
                  <li key={nutrientName}>
                    {nutrientName}: {value}
                  </li>
                );
              })}
        </ul>
      </section>
    </RootContainer>
  );
}

export const pageQuery = graphql`
  query MyQuery($id: String) {
    contentfulProduct(id: { eq: $id }) {
      id
      name
      tags {
        color
        name
      }
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
      name
      phone
    }
  }
`;
