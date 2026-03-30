const FooterFour = () => {
  return (
    <footer>
      <div className="bg-[#515547] px-10 max-w-7xl mx-auto pt-20 rounded-t-[60px] text-white">
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <h1 className="text-3xl font-semibold">
              Get Product Updates, CRM Insights & <br />
              CMS Releases from CodeKluster
            </h1>
            <div className="flex w-full max-w-sm border border-white/40 rounded overflow-hidden">
              <input
                type="email"
                placeholder="Enter your business email"
                className="w-full px-4 py-3 bg-transparent placeholder-white/60 outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black px-6 font-medium hover:text-white cursor-pointer hover:bg-black"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-6 text-2xl">
            <span>♡</span>
            <span>CodeKluster</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8 gap-6">
          <div>
            <h3 className="mb-2 font-semibold">Company</h3>
            <ul className="space-y-2 text-white/80">
              <li>About CodeKluster</li>
              <li>Careers</li>
              <li>Blog & Updates</li>
              <li>Case Studies</li>
              <li>Contact Sales</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Products</h3>
            <ul className="space-y-2 text-white/80">
              <li>CMS Platform</li>
              <li>CRM System</li>
              <li>Admin Dashboards</li>
              <li>API & Integrations</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Resources</h3>
            <ul className="space-y-2 text-white/80">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Security & Compliance</li>
              <li>Status Page</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Contact</h3>
            <ul className="space-y-2 text-white/80">
              <li>Mumbai, India</li>
              <li>+91 98765 43210</li>
              <li>support@codekluster.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2025 CodeKluster. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-black cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-black cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-black cursor-pointer">
              Cookie Policy
            </span>
            <span className="hover:text-black cursor-pointer">
              Sitemap
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFour;
    