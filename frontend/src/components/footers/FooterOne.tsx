import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const FooterOne = () => {
  return (
    <footer className="bg-blue-300 px-10 py-12 rounded-3xl max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-500 rounded-md" />
            <h1 className="text-xl font-semibold">CODEKLUSTER</h1>
          </div>
          <p className="text-sm leading-relaxed">
            CodeKluster builds powerful CMS and CRM platforms that help
            businesses manage content, automate workflows, and grow customer
            relationships with confidence.
          </p>
          <div className="flex gap-4 mt-6 text-gray-500">
            <span className="hover:text-indigo-500 cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="hover:text-indigo-500 cursor-pointer">
              <FaTwitter />
            </span>
            <span className="hover:text-indigo-500 cursor-pointer">
              <BsInstagram />
            </span>
            <span className="hover:text-indigo-500 cursor-pointer">
              <BsWhatsapp />
            </span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li>About CodeKluster</li>
            <li>Our Platform</li>
            <li>Case Studies</li>
            <li>Product Updates</li>
            <li>Careers</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Solutions</h3>
          <ul className="space-y-3 text-sm">
            <li>Content Management System</li>
            <li>Customer Relationship Management</li>
            <li>Admin Dashboards</li>
            <li>Workflow Automation</li>
            <li>API & Integrations</li>
            <li>Custom Software</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 mb-4 text-sm">
            <li className="flex items-start gap-2">
              <FaHome size={18} />
              Mumbai, India – 400101
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineMarkEmailUnread size={18} />
              support@codekluster.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt size={15} />
              +91 87673 55450
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2025 CodeKluster. All rights reserved.</p>

        <div className="flex gap-6">
          <span className="hover:text-indigo-500 cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-indigo-500 cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-indigo-500 cursor-pointer">
            Cookie Policy
          </span>
          <span className="hover:text-indigo-500 cursor-pointer">Sitemap</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;