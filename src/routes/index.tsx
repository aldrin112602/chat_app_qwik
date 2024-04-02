import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from '@builder.io/qwik-city';


export default component$(() => {
  return (
    <>
      <div class="d-flex gap-3 flex-column text-center text-white align-items-center justify-content-center mt-5 py-3">
        <h1 class='poppins-bold mt-5'>Welcome to Qwik <br /> Web real-time chat application</h1>
        <Link href="/login/" class="btn btn-light shadow px-5 btn-lg poppins-bold">Get started</Link>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik + Typescript + MongoDB - Real time chat application",
  meta: [
    {
      name: "description",
      content: "Basic Real time chat application",
    },
  ],
};
