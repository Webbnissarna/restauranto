import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Homepage } from "../types/types";
import { Box, Flex } from "theme-ui";
import { GatsbyImage } from "gatsby-plugin-image";

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
          gatsbyImageData(resizingBehavior: CROP, width: 400)
        }
        discount
      }
      banner {
        price
        name
        discount
        image {
          gatsbyImageData(width: 400, resizingBehavior: CROP)
        }
      }
      categories {
        color
        name
        image {
          gatsbyImageData(width: 400, resizingBehavior: CROP)
        }
      }
    }
  }
`;

export default IndexPage;
