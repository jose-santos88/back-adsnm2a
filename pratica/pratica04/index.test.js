const supertest = require("supertest");
const app = require("./index");
const request = supertest(app);
describe("Testando a rota /", function () {
  test("Deve listar usuários via GET", async function () {
    const response = await request.get("/");
    expect(response.status).toBe(200);
  });

  test("Deve criar usuário via POST", async function () {
    const response = await request.post("/");
    expect(response.status).toBe(201);
  });

  test("Deve atualizar usuário via PUT", async function () {
    const response = await request.put("/");
    expect(response.status).toBe(200);
  });

  test("Deve remover usuário via DELETE", async function () {
    const response = await request.delete("/");
    expect(response.status).toBe(204);
  });
});
