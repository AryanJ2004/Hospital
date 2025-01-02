import React from "react";
import Navbar from "./Navbar"; // Import your Navbar component
import Footer from "./Footer"; // Import your Footer component

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Content Section */}
      <div className="flex-grow bg-gray-100 py-12 px-4 sm:px-8 md:px-16 mt-[5rem]">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0288D1]">
          Our Services
        </h1>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            
            <ul className="space-y-4">
              <li>
                <h3 className="text-lg font-medium">Service Category 1</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Service 1.1</li>
                  <li>Service 1.2</li>
                  <li>Service 1.3</li>
                  <li>Service 1.4</li>
                  <li>Service 1.5</li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-medium">Service Category 2</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Service 2.1</li>
                  <li>Service 2.2</li>
                  <li>Service 2.3</li>
                  <li>Service 2.4</li>
                  <li>Service 2.5</li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-medium">Service Category 3</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Service 3.1</li>
                  <li>Service 3.2</li>
                  <li>Service 3.3</li>
                  <li>Service 3.4</li>
                  <li>Service 3.5</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            
            <ul className="space-y-4">
              <li>
                <h3 className="text-lg font-medium">Service Category 4</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Service 4.1</li>
                  <li>Service 4.2</li>
                  <li>Service 4.3</li>
                  <li>Service 4.4</li>
                  <li>Service 4.5</li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-medium">Service Category 5</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Service 5.1</li>
                  <li>Service 5.2</li>
                  <li>Service 5.3</li>
                  <li>Service 5.4</li>
                  <li>Service 5.5</li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-medium">Service Category 6</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Service 6.1</li>
                  <li>Service 6.2</li>
                  <li>Service 6.3</li>
                  <li>Service 6.4</li>
                  <li>Service 6.5</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
