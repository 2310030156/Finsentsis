const ContactInfo = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Get in Touch with us
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          Have questions about Finsentsis? Our team is here to help.
          Reach out and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* Left Contact Cards */}
        <div className="space-y-6">

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <h3 className="text-gray-400 text-sm">Email</h3>
            <p className="text-white">finsentsis@gmail.com</p>
          </div>

          <div className="bg-lime-500/10 border border-lime-500/30 p-6 rounded-xl">
            <h3 className="text-gray-400 text-sm">Phone</h3>
            <p className="text-white">+91 9322872245</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <h3 className="text-gray-400 text-sm">Location</h3>
            <p className="text-white">Hyderabad, India</p>
          </div>

        </div>

        {/* Right Form */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-md">

          <div className="space-y-5">

            <div>
              <label className="text-sm text-gray-400">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 p-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-lime-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-lime-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows={4}
                placeholder="Type your message"
                className="w-full mt-2 p-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-lime-500"
              />
            </div>

            <button className="w-full bg-lime-500 text-black font-semibold py-3 rounded-lg hover:bg-lime-400 transition">
              Send your message
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactInfo;