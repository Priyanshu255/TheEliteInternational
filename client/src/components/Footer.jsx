import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="pt-6 w-full footer">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <h5 className="mb-6">
            The Elite International
          </h5>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <p
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </p>
                {items.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="py-1.5 font-normal transition-colors text-gray hover:text-blue-gray-900"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <p
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} The Elite International. All
            Rights Reserved.
          </p>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <div as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
            <FaFacebook />
            </div>
            <div as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaInstagram />
            </div>
            <div as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaXTwitter />
            </div>
            <div as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;