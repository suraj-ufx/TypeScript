const FooterThree = () => {
  return (
    <footer className="bg-[#cbddf0] rounded-3xl">
      <div className="max-w-7xl py-20 px-15 flex flex-col gap-15">
      
        <div className="flex flex-col lg:flex-row justify-center items-center bg-[#4f46e5] text-white py-15 px-10 rounded-4xl gap-20">
          <div>
            <h1 className="text-4xl font-semibold mb-3">
              Subscribe to CodeKluster Updates
            </h1>
            <p className="text-sm text-indigo-100">
              Get product announcements, CMS & CRM feature releases, security
              updates, and best practices to help your team work smarter.
            </p>
          </div>

          <div>
            <h3 className="mb-3 font-semibold">Stay Informed</h3>
            <div className="flex flex-col lg:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your work email"
                className="py-2 px-4 text-[#0f172a] rounded-xl placeholder-[#64748b] outline-none bg-white"
              />
              <button
                type="submit"
                className="bg-black text-white font-semibold py-2 px-4 rounded-xl hover:bg-[#3e3d3a]"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-3 text-indigo-100">
              By subscribing, you agree to our{" "}
              <span className="underline underline-offset-2">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#0f172a]">CODEKLUSTER</h3>
            <p className="text-sm font-semibold text-[#64748b]">
              Powerful CMS & CRM solutions for modern businesses
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-40 lg:gap-10">
            <div>
              <h3 className="font-semibold mb-2 text-[#0f172a]">Products</h3>
              <ul className="space-y-2 text-[#64748b]">
                <li>Content Management System</li>
                <li>Customer Relationship Management</li>
                <li>Admin Dashboards</li>
                <li>Workflow Automation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-[#0f172a]">Company</h3>
              <ul className="space-y-2 text-[#64748b]">
                <li>About CodeKluster</li>
                <li>FAQs</li>
                <li>Support</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-[#0f172a]">Legal</h3>
              <ul className="space-y-2 text-[#64748b]">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 md:flex-row justify-between bg-[#3730a3] py-6 px-6 text-indigo-100 rounded-b-3xl">
        <p>© 2025 CodeKluster. All rights reserved.</p>
        <div className="flex gap-4">
          <span className="hover:text-[#f59e0b] cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-[#f59e0b] cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-[#f59e0b] cursor-pointer">
            Cookie Policy
          </span>
          <span className="hover:text-[#f59e0b] cursor-pointer">Sitemap</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;