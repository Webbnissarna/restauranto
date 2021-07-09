const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const productpageTemplate = path.resolve(`src/templates/product-page.tsx`);

  const result = await graphql(`
    query MyQuery {
      allContentfulProduct {
        nodes {
          id
          name
          slug
        }
      }
    }
  `);

  result?.data?.allContentfulProduct?.nodes.forEach((product) => {
    createPage({
      path: `product/${product.slug}`,
      component: productpageTemplate,
      context: {
        id: product.id,
      },
    });
  });
};
