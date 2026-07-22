import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SEO from "../Components/SEO";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us | BloomBasket"
        description="Get in touch with BloomBasket for support and queries."
      />
      <section className="bg-[#fffaf8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-inter font-bold">Contact Us</h1>

            <p className="text-gray-500 mt-4">We'd love to hear from you.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <form className="bg-white p-10 rounded-3xl shadow-sm">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl p-4 mb-5 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-4 mb-5 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-xl p-4 mb-5 outline-none"
              />

              <textarea
                rows="6"
                placeholder="Your Message..."
                className="w-full border rounded-xl p-4 outline-none"></textarea>

              <button className="mt-6 bg-[#e85877] text-white px-8 py-3 rounded-xl">
                Send Message
              </button>
            </form>

            <div className="space-y-8">
              <div className="flex gap-4">
                <Phone className="text-pink-500" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-pink-500" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>support@bloombasket.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-pink-500" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>Ludhiana, Punjab, India</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-pink-500" />
                <div>
                  <h3 className="font-semibold">Working Hours</h3>
                  <p>Mon - Sun : 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
