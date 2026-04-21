// app/contact/page.js
import Footer from "./components/footer"
import Form from "./components/form";
import ContactInfo from "./components/contactInfo";
export default function Contact() {
  return (
    <div className="h-screen bg-gradient-to-br from-[#1a0033] via-[#2a0044] to-[#4a0072] flex items-center justify-center p-6 font-sans">
            <div className="max-w-6xl w-full">
                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Contact Info */}
                    <ContactInfo></ContactInfo>
                    {/* Right Side - Contact Form */}
                    <Form></Form>
            </div>

            {/* Bottom Navigation Bar */}
            <Footer></Footer>
      </div>
    </div>
  );
}