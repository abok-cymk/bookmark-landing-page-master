import ExtensionForBrowser from "../components/ExtensionForBrowser";

const baseImagePath = import.meta.env.BASE_URL;
const browsers = {
  chrome: {
    img: `${baseImagePath}/logo-chrome.svg`,
    name: "Chrome",
    version: 62,
  },
  firefox: {
    img: `${baseImagePath}/logo-firefox.svg`,
    name: "Firefox",
    version: 55,
  },
  opera: {
    img: `${baseImagePath}/logo-opera.svg`,
    name: "Opera",
    version: 46,
  },
};

const DownloadExtensionSection = () => {
  return (
    <section className="max-w-5xl mx-auto mt-24 md:mt-48 px-10 mb-24">
      <div className="text-center max-w-md mx-auto max-sm:px-2">
        <h2 className="text-3xl font-500 text-Blue-950 pb-4">
          Download the extension
        </h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="flex flex-col md:flex-row  gap-6 lg:gap-10 mt-16">
        {Object.entries(browsers).map(([key, value]) => {
          const { name, img, version } = value;
          return (
            <ExtensionForBrowser
              key={key}
              browserIcon={img}
              action={`Add to ${name}`}
              requirement={`Minimum version ${version}`}
              cta={`Add & Install Extension`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default DownloadExtensionSection;
