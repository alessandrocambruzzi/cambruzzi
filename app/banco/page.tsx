import { sql } from "@vercel/postgres";

export default async function Cart({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`select * from courses`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.description}
        </div>
      ))}
    </div>
  );
}