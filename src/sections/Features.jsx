import Tabs from "../components/Tabs";

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto mt-10 px-10 mb-24">
      <div className="text-center max-w-md mx-auto max-sm:px-2">
        <h2 className="text-3xl font-500 text-Blue-950 pb-8">Features</h2>
        <p>
          {" "}
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <Tabs />
    </section>
  );
}

export default Features;
