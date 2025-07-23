import React from 'react';

const ProfileCard = () => {
  return (
    <div className="bg-gray-50 py-20 px-6">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Founder Message
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-0.5 bg-gray-800 mr-4"></div>
                <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">
                  FOUNDER/ CHAIRPERSON
                </span>
              </div>
              <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8">
                ROMANA CH.
              </h2>
            </div>

            {/* Profile Image */}
            <div className="mb-6">
              <img 
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/768742c7-18f8-4ed0-8b44-3f5c8b168a50/di0y8fx-465c66e3-5e04-4f97-b8da-0379b6ecf192.jpg/v1/fill/w_564,h_997,q_75,strp/simple_girl_pic_by_mastdpstatus_di0y8fx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTk3IiwicGF0aCI6IlwvZlwvNzY4NzQyYzctMThmOC00ZWQwLThiNDQtM2Y1YzhiMTY4YTUwXC9kaTB5OGZ4LTQ2NWM2NmUzLTVlMDQtNGY5Ny1iOGRhLTAzNzliNmVjZjE5Mi5qcGciLCJ3aWR0aCI6Ijw9NTY0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.hlMKhsTfhKb3Dpg6xzq5AYFuxTy93x3NeutPNqdJaiI" 
                alt="Romana Ch. Profile" 
                className="w-full h-130 max-w-sm object-cover rounded-lg shadow-lg"
              />
            </div>

            
    
          </div>

          {/* Right Column */}
          <div className="space-y-3 md:mt-30 l ">
            <div>
              {/* Empty div for spacing consistency */}
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                I started this journey from Gujrat with passion and a clear purpose—to bring positive change for women and contribute to Pakistan's social and economic development. My mission is to strengthen women in meaningful ways and provide them with opportunities at every doorstep.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                At Growing Women, we believe that women's financial growth is not just a dream—it's a shared responsibility. This organization was founded to empower women through education, entrepreneurship, and economic inclusion.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                Now, women can pursue their dreams with direction and dignity. With your support, I am committed to knocking on every door and connecting every opportunity to ensure that no woman is left behind.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                Growing Women Prosperity Organization, originally founded as Growing Pakistan in 2020 by Miss Romana Ch in Gujrat, began as a passionate individual initiative to empower women through financial independence and entrepreneurship. In 2025, the initiative was officially registered under the name Growing Women Prosperity Organization to reflect its focused mission of uplifting women across Pakistan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;