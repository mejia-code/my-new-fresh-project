// The Get API lets you show all data from the todo table. To access all data from Todo table, you need a select() function provided by the SurrealDB module.

import { HandlerContext } from "$fresh/server.ts";
import db from "../../utility/database.ts";

export async function handler(_req: Request, _ctx: HandlerContext) {
  try {
    // get all todo list
    const todo = await db.select("todo");

    // return todo
    return Response.json(JSON.stringify(todo));
  } catch (error) {
    return new Response(error);
  }
}
