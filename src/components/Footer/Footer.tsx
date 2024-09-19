
// import React from 'react';
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaTwitter, FaInstagram  } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import footerLogo from "@/assets/footer_logo1.png"



const Footer = () => {
  return (
    <footer className="bg-[#25292C]">
      <div className="max-w-7xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:pt-16 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Logo Section */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-start">
              <img className="h-12" src={footerLogo} alt="Spotlight Logo" />
            </div>
            <div className=" hidden md:flex space-x-6">
              {[
                { name: 'LinkedIn', icon: CiLinkedin },
                { name: 'Facebook', icon: FaFacebookF },
                { name: 'Instagram', icon: FaInstagram },
                { name: 'Twitter', icon: FaTwitter },
                { name: 'YouTube', icon: RiYoutubeLine },
              ].map((social) => (
                <a key={social.name} href="#" className="text-white hover:text-gray-500">
                  <social.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="mt-12 grid grid-cols-1 gap-8 xl:mt-0 xl:col-span-1">
            <div className="grid grid-cols-2 gap-8">
              <div className="md:grid md:grid-cols-1 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Useful links
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li><a href="#" className="text-base text-white hover:text-gray-500">About</a></li>
                    <li><a href="#" className="text-base text-white hover:text-gray-500">Contact us</a></li>
                    <li><a href="#" className="text-base text-white hover:text-gray-500">Products</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 md:mt-0 md:grid md:grid-cols-1 xl:col-span-1">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact us</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center text-base text-white hover:text-gray-300">
                  <CiMail className="flex-shrink-0 mr-3 h-6 w-6 text-gray-400" />
                  <span>support@spotlightapp.org</span>
                </li>
                <li className="flex items-center text-base text-white hover:text-gray-300">
                  <IoCallOutline className="flex-shrink-0 mr-3 h-6 w-6 text-gray-400" />
                  <span>+1 348059843257</span>
                </li>
                <li className="flex items-center text-base text-white hover:text-gray-300">
                  <CiLocationOn className="flex-shrink-0 mr-3 h-6 w-6 text-gray-400" />
                  <span>Atlanta, Georgia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile-only Social Media Section */}
          <div className="sm:flex flex-col md:hidden mt-8 xl:mt-0 xl:col-span-1 md:items-end">
            <div className="mt-auto">
              <div className="flex space-x-6">
                {[
                  { name: 'LinkedIn', icon: CiLinkedin },
                  { name: 'Facebook', icon: FaFacebookF },
                  { name: 'Instagram', icon: FaInstagram },
                  { name: 'Twitter', icon: FaTwitter },
                  { name: 'YouTube', icon: RiYoutubeLine },
                ].map((social) => (
                  <a key={social.name} href="#" className="text-white hover:text-gray-500">
                    <social.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 hidden md:block bg-white py-8">
        <p className="text-base text-gray-400 xl:text-center">
          © Diversity Cyber Council, All rights reserved. 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;

