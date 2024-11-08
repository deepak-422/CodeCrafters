import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
     <footer className="bg-pink-600 text-black py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Logo and Description */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <p className="mt-2"></p>
                    </div>
                    {/* Navigation Links */}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold">Quick Links</h3>
                        <ul className="mt-2 space-y-2">
                            <li>Linktree</li>
                            <li>Source code</li>
                            <li>About</li>
                            <li>Plans</li>
                        </ul>
                    </div>
                    {/* Social Media Links */}
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-semibold">Follow Us</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                            <li><a href="#" className="hover:underline">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </> )
}

export default Footer