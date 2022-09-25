// The Isdone API helps to update the todo items inside the todo table. To update data from the table the surrealDB module provides an inbuilt update function for this.

// With the **update** function, you can promptly update the todos by one or more items in one request.

import { HandlerContext } from "$fresh/server.ts";

// import database
import db from "../../utility/database.ts";

export async function handler(_req: Request, _ctx: HandlerContext) {
  // get URL
  const url = new URL(_req.url);
  // get todo id based on id we update todo.
  const todoid = url.searchParams.get("todoID") || "";
  // get title
  const todoTitle = url.searchParams.get("todoTitle") || "";
  // get uuid
  const todoUuid = url.searchParams.get("todoUuid") || "";

  try {
    // update the todo
    const person = await db.update(todoid, {
      isDone: true,
      title: todoTitle,
      uuid: todoUuid,
    });

    return Response.json({
      sucessfull: "your data submit sucessfully ",
      person,
    });
  } catch (error) {
    return new Response(error);
  }
}
