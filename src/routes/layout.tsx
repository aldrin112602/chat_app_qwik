import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/header";
import Footer from "~/components/footer";
export default component$(() => {

  return (
    <>
      <div style={{ backgroundImage: 'linear-gradient(-45deg, purple, dodgerblue)' }}>
        <Header />
        <main>
          <Slot />
        </main>
        <Footer />
      </div>
    </>
  );
});
