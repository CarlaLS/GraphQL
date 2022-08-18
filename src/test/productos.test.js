const assert = require('chai').assert;
const  expect = require ("chai").expect;
const request =require ("supertest");


let request = supertest(`http://localhost:8000/api`);


describe("Server behavior", () => {
    describe("GET 'api/products' Request ", () => {
        describe(" If asking for all products listed ", () => {
            it(" Should return an array of products ", async () => {
                const response = await request(app).get("/products");
                expect(response.status).to.eql(200);
            });
        });
        describe("If giving an ID", () => {
            it(" Should return a single product with that specific ID ", async () => {
                const id = "62dc5edae05520e9fef5e39e";
                const { body: productFound } = await request.get(
                    `/products/${id}`
                );

                const productExpected = {
                    id: "62dc5edae05520e9fef5e39e",
                    name: "Regla",
           
                    description:
                        "regla de acrilico de 30 cm",
                    category: "Reglas",
                    price: 210,
                    stock: 10,
                };
                if (!productFound) throw new Error("No product found");

                assert.deepStrictEqual(productFound, productExpected);
            });
        });
    });
    describe("POST '/api/products' Request behavior", () => {
        describe("If giving data product", () => {
            it(" Should add a new product to the products list ", async () => {
                const newProduct = {
                    name: "Regla 2",
       
                    description:
                        "Regla de acrilico de 20 cm",
                    category: "Reglas",
                    price: 100,
                    stock: 30,
                };

                const response = await request
                    .post("/products")
                    .set("Accept", "application/json")
                    .type("json")
                    .send(newProduct)
                    .expect("Content-Type", "application/json; charset=utf-8");

                expect(response.status).to.eql(201);

                const productSaved = response.body;
                expect(productSaved).to.include.keys(
                    "id",
                    "name",
                    "description",
                    "category",
                    "price",
                    "stock"
                );
                expect(productSaved.name).to.eql(newProduct.name);
                expect(productSaved.description).to.eql(newProduct.description);
                expect(productSaved.category).to.eql(newProduct.category);
                expect(productSaved.price).to.eql(newProduct.price);
                expect(productSaved.stock).to.eql(newProduct.stock);
            });
        });
    });
    describe("PUT '/api/products Request behavior", () => {
        describe("If giving new data to an existing product", () => {
            it(" Should edit an existing products data matching the product ID ", async () => {
                const id = "62dc5edae05520e9fef5e39e";
                const newData = {
                    id: "62dc5edae05520e9fef5e39e",
                    name: "Regla 3",
                 
                    description:
                        "Regla acrilico de 40 cm",
                    category: "Regla",
                    price: 260,
                    stock: 6,
                };
                const response = await request
                    .put(`/products/${id}`)
                    .send(newData);
                expect(response.status).to.eql(200);

                const productEdited = response.body;
                expect(productEdited).to.include.keys(
                    "id",
                    "name",
                    "description",
                    "category",
                    "price",
                    "stock"
                );
                expect(productEdited.name).to.eql(newData.name);
                expect(productEdited.description).to.eql(newData.description);
                expect(productEdited.category).to.eql(newData.category);
                expect(productEdited.price).to.eql(newData.price);
                expect(productEdited.stock).to.eql(newData.stock);
            });
        });
    });
    describe("DELETE '/api/products Request behavior", () => {
        describe("If giving expecific ID", () => {
            it("Should delete the product listed with that ID", async () => {
                const id = "62f312a0ae31779e102e9efd";
                const response = await request.delete(`/products/${id}`);
                expect(response.status).to.eql(200);
            });
        });
    });
});