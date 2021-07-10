/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { graphql, PageProps, Link } from "gatsby";
import { Homepage } from "../types/types";
import { Box, Flex, Grid } from "theme-ui";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

import RootContainer from "../components/atoms/RootContainer";

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
    <RootContainer
      as={`main`}
      sx={{ alignItems: "center", width: "100%", backgroundColor: "inverted" }}
    >
      <Box sx={{ textAlign: "center" }}>
        <h1 sx={{ fontSize: "h1", margin: 0, padding: "sm", color: "base" }}>
          {contact.name}
        </h1>
        <Flex
          sx={{
            justifyContent: "space-around",
            width: "100%",
            paddingY: "2xl",
          }}
        >
          <Box sx={{ color: "phone", fontSize: "base" }}>{contact.phone}</Box>
          <Box sx={{ color: "phone", fontSize: "base" }}>Hitta hit</Box>
        </Flex>
        <GatsbyImage
          image={banner.image.gatsbyImageData}
          alt={banner.image.title}
        />
        <Grid
          sx={{
            width: "100%",
            paddingX: "2xl",
            marginY: "2xl",
          }}
          gap={20}
          columns={[1]}
        >
          {highlightedProducts &&
            highlightedProducts.map((product) => {
              const image = getImage(product.image.gatsbyImageData);
              const bgImage = convertToBgImage(image);
              const price = product.price / 100;
              return (
                <Link to={`/product/${product.slug}`}>
                  <BackgroundImage
                    Tag={`section`}
                    {...bgImage}
                    sx={{
                      borderRadius: "default",
                      overflow: "hidden",
                      width: "100%",
                      height: 150,
                      textAlign: "center",
                    }}
                  >
                    <Flex
                      sx={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        color: "base",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          padding: "sm",
                          backgroundColor: "transparent",
                          borderBottomLeftRadius: "default",
                          fontSize: "base",
                        }}
                      >
                        {`${price.toFixed(2)} :-`}
                      </Box>
                      <Box
                        as={`span`}
                        sx={{
                          textAlign: "center",
                          backgroundColor: "transparent",
                          width: "100%",
                          padding: "sm",
                          fontSize: "h3",
                          color: "base",
                        }}
                      >
                        {product.name}
                      </Box>
                    </Flex>
                  </BackgroundImage>
                </Link>
              );
            })}
        </Grid>
        {categories && (
          <Grid
            sx={{ paddingX: "2xl", width: "100%", marginY: "2xl" }}
            gap={20}
            columns={[2]}
          >
            {categories.map((category) => {
              const image = getImage(category.image[0].gatsbyImageData);
              const backgroundImage = convertToBgImage(image);
              return (
                <BackgroundImage
                  {...backgroundImage}
                  sx={{
                    minHeight: 60,
                    color: "base",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "base",
                    textTransform: "capitalize",
                    fontWeight: "semibold",
                    borderRadius: "default",
                  }}
                >
                  {category.name}
                </BackgroundImage>
              );
            })}
          </Grid>
        )}
        <Flex sx={{ flexDirection: "column", width: "100%" }}>
          <Box as={`span`}>{contact.adress}</Box>
        </Flex>
      </Box>
    </RootContainer>
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
        slug
      }
      banner {
        slug
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
