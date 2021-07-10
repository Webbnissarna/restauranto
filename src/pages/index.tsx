/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Homepage } from "../types/types";
import { Box, Flex } from "theme-ui";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

type Data = {
  contentfulFrontpage: Homepage;
};

const IndexPage = (props: PageProps<Data>): JSX.Element => {
  const data = props?.data?.contentfulFrontpage;
  /** Mandatory info */
  const contact = data.contact;
  /** Optional info */
  const banner = data.banner && data.banner;
  const highlightedProducts =
    data.highlightedProducts && data.highlightedProducts;
  const categories = data.categories && data.categories;

  return (
    <Flex as={`main`} sx={{ alignItems: "center", flexDirection: "column" }}>
      <h1>{contact.name}</h1>
      <Flex sx={{ justifyContent: "space-around", width: "100%" }}>
        <Box>{contact.phone}</Box>
        <Box>Hitta hit</Box>
      </Flex>
      <GatsbyImage
        image={banner.image.gatsbyImageData}
        alt={banner.image.title}
      />
      {highlightedProducts &&
        highlightedProducts.map((product) => {
          const image = getImage(product.image.gatsbyImageData);
          const bgImage = convertToBgImage(image);
          return (
            <BackgroundImage
              Tag={`section`}
              {...bgImage}
              preserveStackingContext
              sx={{
                width: "100%",
                height: 150,
                textAlign: "center",
                borderRadius: "default",
                margin: "md",
              }}
            >
              <Flex
                sx={{
                  width: "100%",
                  position: "relative",
                  color: "phone",
                }}
              >
                <Box sx={{ position: "absolute", top: 0, right: 0 }}>
                  {product.price}
                </Box>
                <Box as={`span`}>{product.name}</Box>
              </Flex>
            </BackgroundImage>
          );
        })}
    </Flex>
  );
};

export const mainmenuQuery = graphql`
  query frontpageQuery {
    contentfulFrontpage {
      contact {
        adress
        email
        name
        phone
      }
      highlightedProducts {
        name
        price
        image {
          gatsbyImageData(resizingBehavior: FILL, width: 400, aspectRatio: 1.5)
        }
        discount
      }
      banner {
        price
        name
        discount
        image {
          gatsbyImageData(width: 400, resizingBehavior: FILL, aspectRatio: 1.5)
        }
      }
      categories {
        color
        name
        image {
          gatsbyImageData(width: 400, resizingBehavior: FILL, aspectRatio: 1.5)
        }
      }
    }
  }
`;

export default IndexPage;
