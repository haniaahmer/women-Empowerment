import React from 'react';
import logo  from "../../assets/logo.png";
const KnowAboutUs = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-0.5 bg-gray-800 mr-4"></div>
                <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">
                  KNOW ABOUT US
                </span>
              </div>
              <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight">
                We are a non-governmental organization
              </h2>
                <div className="mb-6">
              <img 
                src={logo}
                alt="logo"
                className="w-full max-w-sm object-cover rounded-lg shadow-lg"
              />
            </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
             

            </div>
            <div>
              <p className="text-black text-[18px] leading-relaxed">
                Growing Women Prosperity Organization, originally founded as Growing Pakistan in 2020 by Miss Romana Ch in Gujrat, began as a passionate individual initiative to empower women through financial independence and entrepreneurship. In 2025, the initiative was officially registered under the name Growing Women Prosperity Organization to reflect its focused mission of uplifting women across Pakistan. The organization is committed to creating inclusive economic opportunities and building a supportive ecosystem for women-led enterprises. With three main offices and its first Business Incubation Center established at the initial stage in Islamabad, Growing Women is actively expanding its presence nationwide. Key projects include women business incubation centers, capacity building and awareness programs, skill and professional development trainings, a dedicated women opportunity portal, and business expos and galas to promote women in entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowAboutUs;