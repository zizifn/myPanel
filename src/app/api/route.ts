import { customers } from "@/db/schema";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";

export const runtime = "edge";
export async function GET(request: Request) {
  const TEST_D1 = drizzle(process.env.TEST_D1);

  const results = await TEST_D1.select({
    companyName: customers.companyName,
    contactName: customers.contactName,
    address: customers.address,
  })
    .from(customers)
    .where(eq(customers.companyName, "Bs Beverages"));
  // const { results } = await TEST_D1.prepare(
  //   "SELECT * FROM Customers WHERE CompanyName = ?"
  // )
  //   .bind("Bs Beverages")
  //   .all();
  return Response.json(results);
}
