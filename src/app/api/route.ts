export const runtime = "edge";
export async function GET(request: Request) {
  const TEST_D1 = process.env.TEST_D1;
  const { results } = await TEST_D1.prepare(
    "SELECT * FROM Customers WHERE CompanyName = ?"
  )
    .bind("Bs Beverages")
    .all();
  return Response.json(results);
}
