import {
  MdMobileScreenShare,
  MdStreetview,
  MdAttachEmail,
} from "react-icons/md";
import { FaHourglassEnd } from "react-icons/fa";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const FooterFive = () => {
  return (
    <footer className="bg-[#020617] text-[#f8fafc]">
      <div className="max-w-7xl">
        <div className="bg-[#0f766e] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 py-6">
          <div className="flex justify-center items-center gap-2">
            <MdMobileScreenShare size={30} />
            <div className="font-semibold">
              <p>+91 98765 43210</p>
              <span className="text-[#cbd5f5]">Sales & Support</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <MdStreetview size={30} />
            <div className="font-semibold">
              <p>Mumbai, India</p>
              <span className="text-[#cbd5f5]">Head Office</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <MdAttachEmail size={30} />
            <div className="font-semibold">
              <p>support@codekluster.com</p>
              <span className="text-[#cbd5f5]">Email Support</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <FaHourglassEnd size={30} />
            <div className="font-semibold">
              <p>Mon – Fri</p>
              <span className="text-[#cbd5f5]">09:00 AM – 06:00 PM</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-10 py-15 gap-10">
          <div>
            <h1 className="text-3xl font-bold mb-4">CODEKLUSTER</h1>
            <p className="text-sm text-[#cbd5f5]">
              CodeKluster delivers scalable CMS & CRM platforms that empower
              teams to manage content, automate workflows, and build stronger
              customer relationships.
            </p>

            <div className="flex gap-2 mt-6">
              {[FaFacebookF, FaTwitter, BsInstagram, BsWhatsapp].map(
                (Icon, index) => (
                  <span
                    key={index}
                    className="
                      w-9 h-9
                      border-2
                      border-[#22d3ee]
                      text-[#22d3ee]
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      cursor-pointer
                      hover:bg-[#22d3ee]
                      hover:text-[#020617]
                      transition
                    "
                  >
                    <Icon size={15} />
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-2 text-[#cbd5f5]">
              <li>About CodeKluster</li>
              <li>Pricing</li>
              <li>Careers</li>
              <li>Case Studies</li>
              <li>Contact Sales</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Solutions</h3>
            <ul className="space-y-2 text-[#cbd5f5]">
              <li>Content Management System</li>
              <li>Customer Relationship Management</li>
              <li>Workflow Automation</li>
              <li>Admin Dashboards</li>
              <li>API & Integrations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-[#cbd5f5]">
              Get product updates, feature releases, and best practices from the
              CodeKluster team.
            </p>

            <div className="mt-3">
              <input
                type="email"
                placeholder="Enter your work email"
                className="w-full py-2 px-4 border border-[#334155] bg-[#020617] text-[#f8fafc] outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#22d3ee] text-[#020617] font-semibold py-2 px-4 mt-2 hover:bg-[#06b6d4]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:flex-row justify-between px-10 py-5 border-t border-[#334155]">
          <p className="text-[#cbd5f5]">
            © 2025 CodeKluster. All rights reserved.
          </p>
          <div className="flex gap-4 text-[#cbd5f5]">
            <span className="hover:text-[#22d3ee] cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-[#22d3ee] cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-[#22d3ee] cursor-pointer">
              Cookie Policy
            </span>
            <span className="hover:text-[#22d3ee] cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFive;