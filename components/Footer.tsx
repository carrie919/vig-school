import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white">
      <div className="w-full bg-red-800 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Map Section */}
          <div className="w-full h-[300px] bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.4969610905487!2d80.09690167603253!3d16.90076101663973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35a829eb5e2539%3A0xd8cdd3cd49cfa5b9!2sVignan%20High%20School!5e0!3m2!1sen!2sin!4v1736053757391!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* School Name */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Vignan High School
              </h2>
              <p>6-1126, opp. market yard</p>
              <p>Vignan Nagar,</p>
              <p>Jaggaiahpet, Andhra Pradesh 521175</p>
              <p className="mt-2">Office Hours: 9:30 a.m. - 4:30 p.m</p>
            </div>

            {/* Admissions Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4">For Admissions</h3>
              <p>
                <span className="font-semibold">Phone:</span> 086542 23177
              </p>
              <p>
                <span className="font-semibold">Mail:</span>{" "}
                admissions@vignanschool.edu
              </p>
              <p>info@vignanschool.edu</p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-200" />
              <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-200" />
              <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-200" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-gray-700 pb-4 pt-4 text-center text-gray-300">
        <p>
          &copy; {new Date().getFullYear()} Vignan High School. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
