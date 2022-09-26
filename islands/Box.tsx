// The Box component helps call the post API and create a new todo in the database. Box.tsx is an island-based component that's created with Preact. Preact is similar to React, but Preact is a lightweight version of the library. It's a great way to create components that are lightweight and fast.
// On the Box component, we get the value in the input with the onChange Event. Then, after the user clicks on the add button, we call the post API to create a new todo in the SurrealDB database.

import { useState } from "preact/hooks";

// import Notification from components
import Notification from "../components/Notification.tsx";

interface todo {
  id: string;
  title: string;
  isDone: boolean;
}

export default function Box({ data }: { data: any }) {
  //  title
  const [title, setTitle] = useState("");

  // show Notification based on success
  const [successful, setSuccessful] = useState(false);

  function submit() {
    if (title) {
      //  call post api
      fetch(`/api/post?title=${encodeURIComponent(title)}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("your data submit sucessfully ");

          // change false to true
          setSuccessful(true);
        });
    }
  }

  return (
    <>
      <Notification successful={successful} setSuccessful={setSuccessful} />

      <div class="flex mt-4 justify-between">
        <input
          onChange={(event) => setTitle(event.currentTarget.value)}
          class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-600"
          placeholder="Add Todo"
        />
        <button
          onClick={submit}
          class="flex-shrink p-2 border-2 rounded text-purple-500 border-purple-500 hover:text-white hover:bg-purple-500 w-24"
        >
          Add
        </button>
      </div>
    </>
  );
}
