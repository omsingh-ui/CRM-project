import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const productLinks = [
    {
      name: "Dashboard",
      path: "/#dashboard",
      hash: true,
    },
    {
      name: "Features",
      path: "/#features",
      hash: true,
    },
    {
      name: "Pricing",
      path: "/pricing",
      hash: false,
    },
  ];

  const supportLinks = [
    {
      name: "Support Center",
      path: "/support",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Privacy Policy",
      path: "/privacy",
    },
  ];

  return (
    <footer
      className="
      relative
      mt-24
      overflow-hidden
      bg-gradient-to-br
      from-slate-950
      via-blue-950
      to-indigo-950
      text-white
      "
    >
      {/* Background */}

      <div
        className="
        absolute
        top-0
        left-1/4
        h-72
        w-72
        rounded-full
        bg-blue-500/20
        blur-3xl
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-1/4
        h-72
        w-72
        rounded-full
        bg-purple-500/20
        blur-3xl
        "
      />

      <div
        className="
        relative
        max-w-7xl
        mx-auto
        px-6
        py-16
        "
      >
        {/* Main Grid */}

        <div
          className="
          grid
          gap-12
          md:grid-cols-2
          lg:grid-cols-4
          "
        >
          {/* Brand */}

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-blue-500
                to-purple-600
                text-2xl
                font-black
                shadow-lg
                "
              >
                M
              </div>

              <h2 className="text-4xl font-black">
                Mini
                <span className="text-blue-400">
                  vel
                </span>
              </h2>
            </div>

            <p
              className="
              mt-6
              max-w-md
              leading-8
              text-slate-300
              "
            >
              A modern CRM platform designed to
              help businesses manage customers,
              organize leads, automate workflows,
              and grow with confidence.
            </p>

            {/* Tech */}

            <div
              className="
              mt-6
              flex
              flex-wrap
              gap-3
              "
            >
              {[
                "React",
                "Tailwind CSS",
                "Framer Motion",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/10
                  px-4
                  py-2
                  text-xs
                  backdrop-blur
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Status */}

            <div
              className="
              mt-6
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/10
              px-4
              py-2
              backdrop-blur
              "
            >
              <span
                className="
                h-2
                w-2
                rounded-full
                bg-green-400
                animate-pulse
                "
              />

              <span className="text-sm">
                All systems operational
              </span>
            </div>

            {/* Social */}

            <div
              className="
              mt-8
              flex
              gap-5
              "
            >
              <a
                href="https://github.com/omsingh-ui/CRM-project"
                target="_blank"
                rel="noopener noreferrer"
                className="
                text-2xl
                text-slate-300
                transition-all
                duration-300
                hover:scale-110
                hover:text-white
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                text-2xl
                text-slate-300
                transition-all
                duration-300
                hover:scale-110
                hover:text-white
                "
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Product */}

          <div>
            <h3
              className="
              mb-6
              text-lg
              font-bold
              "
            >
              Product
            </h3>

            <div className="space-y-4">
              {productLinks.map((item) =>
                item.hash ? (
                  <HashLink
                    smooth
                    key={item.name}
                    to={item.path}
                    className="
                    block
                    text-slate-300
                    transition
                    hover:translate-x-1
                    hover:text-white
                    "
                  >
                    {item.name}
                  </HashLink>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="
                    block
                    text-slate-300
                    transition
                    hover:translate-x-1
                    hover:text-white
                    "
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Support */}

          <div>
            <h3
              className="
              mb-6
              text-lg
              font-bold
              "
            >
              Support
            </h3>

            <div className="space-y-4">
              {supportLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="
                  block
                  text-slate-300
                  transition
                  hover:translate-x-1
                  hover:text-white
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
          mt-14
          flex
          flex-col
          items-center
          justify-between
          gap-5
          border-t
          border-white/10
          pt-8
          sm:flex-row
          "
        >
          <div>
            <p className="text-sm text-slate-400">
              © 2026 Minivel. All rights reserved.
            </p>

            <p
              className="
              mt-2
              text-xs
              text-slate-500
              "
            >
              Built with React • Tailwind CSS •
              Framer Motion
            </p>
          </div>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-white/10
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-white/20
            "
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}