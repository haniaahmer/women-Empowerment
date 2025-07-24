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

    const scale = window.devicePixelRatio || 1;
    const width = 300; // Match container width
    const height = 300; // Match container height

    canvas.width = width * scale;
    canvas.height = height * scale;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(scale, scale);

    let startAngle = 0;
    const radius = 140;
    const centerX = width / 2;
    const centerY = height / 2;

    ctx.font = '12px Arial';
    ctx.textBaseline = 'middle';

    data.forEach((value, index) => {
      const sliceAngle = (value / 100) * 2 * Math.PI;

      // Draw slice
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.fillStyle = colors[index];
      ctx.fill();
      ctx.closePath();

      // Midpoint angle
      const midAngle = startAngle + sliceAngle / 2;
      const outerRadius = radius + 30;

      let labelX = centerX + Math.cos(midAngle) * outerRadius;
      let labelY = centerY + Math.sin(midAngle) * outerRadius;

      ctx.fillStyle = '#000';
      ctx.textAlign = labelX < centerX ? 'right' : 'left';

      const label = `${labels[index]} (${value}%)`;
      const words = label.split(' ');
      let line = '';
      let yOffset = labelY;

      words.forEach((word, i) => {
        const testLine = line + word + ' ';
        const { width: testWidth } = ctx.measureText(testLine);
        if (testWidth > 120 && line) {
          ctx.fillText(line, labelX, yOffset);
          line = word + ' ';
          yOffset += 14;
        } else {
          line = testLine;
        }

        if (i === words.length - 1) {
          ctx.fillText(line, labelX, yOffset);
        }
      });

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-green-50 p-4 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black">Our Ongoing Projects</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Project Cards */}
          <div className="space-y-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4"
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
            <div className="w-[300px] h-[300px] relative">
              <canvas ref={canvasRef} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;