import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaArrowCircleRight, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const FooterTwo = () => {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="bg-[#f1f5f9] px-10 py-14 rounded-t-3xl text-[#020617]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.4fr] gap-6">
          
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-wide text-[#020617]">
                CODEKLUSTER
              </h1>
              <p className="text-lg font-semibold text-[#0d9488]">
                Build. Manage. Scale.
              </p>
            </div>

            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="leading-relaxed text-sm text-[#475569]">
              CodeKluster is a modern CMS & CRM platform designed to help
              businesses manage content, automate workflows, and strengthen
              customer relationships from a single dashboard.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Solutions</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-[#475569]">
              <li>CMS</li>
              <li>CRM</li>
              <li>Workflow Automation</li>
              <li>Admin Dashboards</li>
              <li>Custom Integrations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-[#475569]">
              <li>Who We Are</li>
              <li>Our Platform</li>
              <li>Case Studies</li>
              <li>Pricing</li>
              <li>Contact Sales</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>

            <div className="mb-4 text-sm">
              <p className="font-semibold">Call:</p>
              <p className="text-[#475569]">+91 98765 43210</p>
            </div>

            <div className="text-sm">
              <p className="font-semibold">Email:</p>
              <p className="text-[#475569]">support@codekluster.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>

            <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-xs">
              <input
                type="email"
                placeholder="Enter your work email"
                className="
                  w-full
                  px-4
                  py-3
                  text-sm
                  outline-none
                  border
                  border-[#94a3b8]
                  rounded-xl
                  sm:rounded-r-none
                  bg-white
                  text-[#020617]
                  placeholder-[#475569]
                "
              />

              <button
                aria-label="Subscribe"
                type="submit"
                className="
                  px-4
                  py-3
                  bg-[#0d9488]
                  text-white
                  rounded-xl
                  sm:rounded-l-none
                  flex
                  items-center
                  justify-center
                  hover:bg-[#0f766e]
                "
              >
                <FaArrowCircleRight size={20} />
              </button>
            </form>

            <div className="flex flex-wrap gap-2 mt-6">
              {[FaFacebookF, FaTwitter, BsInstagram, BsWhatsapp].map(
                (Icon, index) => (
                  <span
                    key={index}
                    className="
                      w-9 h-9
                      border-2
                      border-[#0d9488]
                      text-[#0d9488]
                      rounded-full
                      flex
                      items-center
                      justify-center
                      cursor-pointer
                      hover:bg-[#0d9488]
                      hover:text-white
                      transition
                    "
                  >
                    <Icon size={15} />
                  </span>
                )
              )}
            </div>

            <h4 className="text-lg font-bold mt-4">Follow Us</h4>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#0f172a] text-[#99f6e4] px-10 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-white">Security</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-white">Documentation</a>
          </div>

          <p className="text-sm opacity-80">
            © 2025 CodeKluster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;