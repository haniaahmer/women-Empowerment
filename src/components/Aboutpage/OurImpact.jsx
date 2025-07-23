import React, { useRef, useEffect } from 'react';

const OurImpact = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const data = [38.9, 5.6, 27.8, 11.1, 16.7];
    const labels = [
      "Capacity Building Program",
      "100 Women Entrepreneurs Podcast",
      "Women Business Incubation Center",
      "Women Opportunity Portal",
      "Skill Development Trainings"
    ];
    const colors = ["#8B5A6B", "#6B4C93", "#A4B84A", "#7BAE3F", "#B5869F"];

    // Set high-res canvas
    const scale = window.devicePixelRatio;
    canvas.width = 300 * scale;
    canvas.height = 300 * scale;
    canvas.style.width = '300px';
    canvas.style.height = '300px';
    ctx.scale(scale, scale);

    let startAngle = 0;
    const radius = 100;
    const centerX = 150;
    const centerY = 150;

    data.forEach((value, index) => {
      const sliceAngle = (value / 100) * 2 * Math.PI;

      // Draw slice
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.fillStyle = colors[index];
      ctx.fill();
      ctx.closePath();

      // Draw label with line
      const midAngle = startAngle + sliceAngle / 2;
      const lineX = centerX + Math.cos(midAngle) * radius;
      const lineY = centerY + Math.sin(midAngle) * radius;
      const labelX = centerX + Math.cos(midAngle) * (radius + 20);
      const labelY = centerY + Math.sin(midAngle) * (radius + 20);

      ctx.strokeStyle = '#555';
      ctx.beginPath();
      ctx.moveTo(centerX + Math.cos(midAngle) * (radius - 5), centerY + Math.sin(midAngle) * (radius - 5));
      ctx.lineTo(lineX, lineY);
      ctx.lineTo(labelX, labelY);
      ctx.stroke();

      ctx.fillStyle = '#000';
      ctx.font = '10px Arial';
      ctx.textAlign = midAngle > Math.PI / 2 && midAngle < (3 * Math.PI) / 2 ? 'right' : 'left';
      ctx.fillText(`${labels[index]} (${value}%)`, labelX, labelY);

      startAngle += sliceAngle;
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Capacity Building Program",
      description: "Seminars and workshops for mindset and leadership development.",
      color: "#8B5A6B"
    },
    {
      id: 2,
      title: "100 Women Entrepreneurs Podcast",
      description: "Upcoming series to highlight inspiring women-led business journeys.",
      color: "#6B4C93"
    },
    {
      id: 3,
      title: "Women Business Incubation Center – Islamabad",
      description: "First center launched to support women-led startups with space and mentorship.",
      color: "#A4B84A"
    },
    {
      id: 4,
      title: "Women Opportunity Portal",
      description: "Digital hub for jobs, funding, training, and business resources.",
      color: "#7BAE3F"
    },
    {
      id: 5,
      title: "Skill Development Trainings",
      description: "Courses in business, tech, and professional growth.",
      color: "#B5869F"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-green-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">Our Ongoing Projects</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Project Cards */}
          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4"
                style={{ borderLeftColor: project.color }}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.id}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg flex flex-col items-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-6 text-center">
              Project Distribution
            </h3>
            <canvas ref={canvasRef} width={800} height={800} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
