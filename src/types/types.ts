import { IGatsbyImageData } from "gatsby-plugin-image";

export interface Image {
  title?: string;
  gatsbyImageData?: IGatsbyImageData;
}

export interface Tag {
  color: string;
  name: string;
  image?: Array<Image>;
}

export interface ContentfulProduct {
  name: string;
  tags?: Array<Tag>;
  ingredients?: Array<string>;
  image?: Image;
  price: number;
  description?: {
    description: string;
  };
}

export interface ProductOverview {
  name: string;
  price: number;
  discount: number;
  image: Image;
}

export interface Contact {
  adress: string;
  email: string;
  name: string;
  phone: string;
  location: {
    lat: number;
    lon: number;
  };
}

export interface Homepage {
  contact: Contact;
  highlightedProducts: Array<ProductOverview>;
  banner: ProductOverview;
  categories: Array<Tag>;
}

export interface Context {
  id: string;
}
