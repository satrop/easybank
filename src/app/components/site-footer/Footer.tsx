import React from 'react';
import Image from "next/image";

import Button from "../button/button";

const socialLinks = [
  { name: "Facebook", href: "/dummy-link/", iconClass: "icon-facebook2" },
  { name: "Twitter", href: "/dummy-link/", iconClass: "icon-twitter" },
  { name: "Instagram", href: "/dummy-link/", iconClass: "icon-instagram" },
  { name: "Pinterest", href: "/dummy-link/", iconClass: "icon-pinterest2" },
  { name: "YouTube", href: "/dummy-link/", iconClass: "icon-youtube" }
];

const footerLink = [
  { name: "About Us", href: "/dummy-link/" },
  { name: "Contact", href: "/dummy-link/" },
  { name: "Blog", href: "/dummy-link/" },
  { name: "Careers", href: "/dummy-link/" },
  { name: "Support", href: "/dummy-link/" },
  { name: "Privacy Policy", href: "/dummy-link/" }
]

const Footer: React.FC = () => {
  return (
    <footer className="bg-easybankBlue text-white py-10">
      <div className="container mx-auto mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0">

          {/* Column 1: Logo and Social Links */}
          <div className="flex flex-col justify-between md:items-start gap-y-8 md:gap-y-0">
            {/* Logo */}
            <Image
              src="/logo-white.svg"
              alt="Easybank logo"
              className="mx-auto md:mx-0"
              width={139}
              height={20}>
            </Image>
            <div className="flex space-x-4 mx-auto md:mx-0">
                <ul className="flex space-x-4">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white transition duration-300 hover:text-easybankGreen flex items-center space-x-2" aria-label={link.name}>
                      <span className={link.iconClass} aria-hidden="true"></span>
                    </a>
                  </li>
                ))}
                </ul>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col md:flex-row justify-between md:ml-10 lg:ml-20">
            <ul className="grid md:grid-cols-2 text-center md:text-left gap-y-5 md:gap-x-20">
              {footerLink.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white transition duration-300 hover:text-easybankGreen">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Button and Copyright */}
          <div className="flex flex-col justify-between items-center md:ml-auto md:items-end gap-y-8 md:gap-y-0">
            {/* CTA Button */}
            <Button className="!block" label="Request Invite" />
            <p className="text-gray-500">&copy; Easybank. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
