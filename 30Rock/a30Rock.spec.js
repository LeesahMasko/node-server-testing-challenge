const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("../api/server");
const The30Rockers = require("./a30Rock-model");

describe("server.js", () => {
  describe("GET /api/30Rock", () => {
    test("should return a 200 status", async () => {
      const res = await request(server).get("/api/30Rock");
      expect(res.status).toBe(200);
    });
    test("should return JSON", async () => {
      const res = await request(server).get("/api/30Rock");
      expect(res.type).toMatch(/json/i);
    });
});

describe("POST /api/30Rock", () => {
  test("should return 201 status", async () => {
    const res = await request(server)
      .post("/api/30Rock")
      .send({ name: "Lisa" });
    expect(res.status).toBe(201);
  });
  test("should return JSON", async () => {
    const res = await request(server)
      .post("/api/30Rock")
      .send({ name: "Lisa" });
    expect(res.type).toMatch(/json/i);
  });
  test("should return object with correct name", async () => {
    const res = await request(server)
      .post("/api/30Rock")
      .send({ name: "Lisa" });
    expect(res.body.name).toBe("Lisa");
  });
});


describe("DELETE /api/30Rock:id", () => {
  it("should return a 200 status", async () => {
    const res = await request(server)
      .post("/api/30Rock")
      .send({ name: "Lisa" });
    expect(res.status).toBe(201);
    const id = res.body.id;
    expect(id).toBeTruthy();
    const deleteRes = await request(server).delete(`/api/30Rock/${id}`);
    expect(deleteRes.status).toBe(200);
    expect(res.type).toMatch(/json/i);
    expect(deleteRes.body.name).toBe("Lisa");

  });

});
});
beforeEach(async () => {
await db("30Rock").truncate();
});
