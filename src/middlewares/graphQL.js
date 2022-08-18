const {buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
} = require("../Controllers/productos.controller");

const schema = buildSchema(`
  input ProductInput {
    name: String
    description: String
    category: String
    image: String
    code: String
    price: Int 
    stock: Int
  }
  type Product {
    id: ID!
    name: String
    description: String
    category: String
    image: String
    code: String
    price: Int 
    stock: Int
  }
  type Query {
    getProduct(id: ID!): Product
    getProducts(campo: String, valor: String): [Product]
  }
  type Mutation {
    createProduct(data: ProductInput!): Product
    updateProduct(id: ID!, datos: ProductInput!): Product
    deleteProduct(id: ID!): Product
  }
`);

const graphqlMiddleware = graphqlHTTP({
    schema,
    rootValue: {
        createProduct,
        getProducts,
        getProduct,
        updateProduct,
        deleteProduct,
    },
    graphiql: true,
});

module.exports = graphqlMiddleware