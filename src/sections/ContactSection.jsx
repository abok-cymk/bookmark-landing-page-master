import ContactForm from "../components/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-Blue-600 text-Grey-50">
      <div className="max-w-5xl mx-auto py-16 px-4">
        <div className="mb-10 text-center">
          <p className="text-sm tracking-widest uppercase mb-6">
            35,000+ already joined
          </p>
          <h2 className="text-3xl md:text-4xl md:max-w-sm mx-auto text-balance">
            Stay up-to-date with what we’re doing{" "}
          </h2>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
