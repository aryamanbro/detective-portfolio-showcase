import { useState } from "react";
import { Link } from "react-router-dom";
import corkBoard from "@/assets/cork-board.jpg";
import { User } from "lucide-react";

const Hub = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div 
      className="min-h-screen relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${corkBoard})` }}
    >
      <div className="absolute inset-0 bg-background/40" />
      
      <div className="relative z-10 min-h-screen p-8">
        <div className="animate-slide-up">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="detective-title text-4xl md:text-5xl font-bold text-foreground drop-shadow-lg">
              THE EVIDENCE BOARD
            </h1>
          </div>

          {/* Evidence Board - Scattered Items */}
          <div className="relative max-w-7xl mx-auto h-[800px]">
            
            {/* Central Photo - Detective Profile */}
            <div 
              className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20"
              style={{ transform: 'translate(-50%, -50%) rotate(-2deg)' }}
            >
              <div className="bg-white p-4 shadow-2xl border-2 border-gray-300">
                <div className="w-56 h-56 bg-card flex items-center justify-center border border-border">
                  <User className="w-28 h-28 text-muted-foreground" />
                </div>
                <p className="typewriter text-center mt-3 text-sm text-gray-800 font-bold">
                  LEAD DETECTIVE: [YOUR NAME]
                </p>
                {/* Pin on polaroid */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-secondary rounded-full shadow-lg border-4 border-background" />
              </div>
            </div>

            {/* Newspaper Clipping - About/Bio (Top Left) */}
            <div 
              className="absolute top-8 left-12 w-80 z-10"
              style={{ transform: 'rotate(-3deg)' }}
              onMouseEnter={() => setHoveredItem("about")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="bg-[#f4e8d0] p-6 shadow-2xl border-2 border-[#d4c4a0]">
                <div className="border-b-4 border-black pb-2 mb-3">
                  <h2 className="detective-title text-xl text-black">
                    DAILY TIMES • 1947
                  </h2>
                </div>
                <h3 className="detective-title text-2xl mb-2 text-black">
                  Developer Cracks Toughest Code
                </h3>
                <p className="typewriter text-xs leading-relaxed text-gray-800">
                  A skilled investigator of digital mysteries, solving complex cases with precision. 
                  Known for meticulous attention to detail...
                </p>
                {/* Pin */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-secondary rounded-full shadow-lg border-4 border-background" />
              </div>
            </div>

            {/* Polaroid - Skills/Evidence (Top Right) */}
            <Link 
              to="/skills"
              className="absolute top-16 right-16 z-10 hover-lift"
              style={{ transform: 'rotate(4deg)' }}
              onMouseEnter={() => setHoveredItem("skills")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="bg-white p-4 shadow-2xl border border-gray-200">
                <div className="w-48 h-48 bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🔍</div>
                    <p className="detective-title text-sm text-primary">EVIDENCE</p>
                  </div>
                </div>
                <p className="typewriter text-center mt-2 text-xs text-gray-800">
                  Technical Skills Archive
                </p>
                {/* Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-secondary rounded-full shadow-lg border-4 border-background" />
              </div>
            </Link>

            {/* Polaroid - Projects/Cases (Bottom Left) */}
            <Link 
              to="/projects"
              className="absolute bottom-20 left-24 z-10 hover-lift"
              style={{ transform: 'rotate(-5deg)' }}
              onMouseEnter={() => setHoveredItem("projects")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="bg-white p-4 shadow-2xl border border-gray-200">
                <div className="w-48 h-48 bg-secondary/20 border-2 border-secondary flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">📁</div>
                    <p className="detective-title text-sm text-secondary">CASES</p>
                  </div>
                </div>
                <p className="typewriter text-center mt-2 text-xs text-gray-800">
                  Solved Investigations
                </p>
                {/* Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-secondary rounded-full shadow-lg border-4 border-background" />
              </div>
            </Link>

            {/* Memo - Contact (Bottom Right) */}
            <Link 
              to="/contact"
              className="absolute bottom-24 right-20 z-10 hover-lift"
              style={{ transform: 'rotate(3deg)' }}
              onMouseEnter={() => setHoveredItem("contact")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="bg-[#fff8dc] p-6 shadow-2xl border-2 border-[#daa520] w-64">
                <div className="border-b-2 border-[#daa520] pb-2 mb-3">
                  <p className="detective-title text-xs text-gray-700">CONFIDENTIAL MEMO</p>
                </div>
                <div className="space-y-2">
                  <p className="typewriter text-sm font-bold text-gray-800">TO: Potential Clients</p>
                  <p className="typewriter text-sm font-bold text-gray-800">FROM: Detective</p>
                  <p className="typewriter text-sm font-bold text-gray-800">RE: New Cases</p>
                  <div className="mt-3 pt-3 border-t border-[#daa520]">
                    <p className="typewriter text-xs text-gray-700">
                      Need a case solved? Get in touch via secure channel.
                    </p>
                  </div>
                </div>
                {/* Pin */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-secondary rounded-full shadow-lg border-4 border-background" />
              </div>
            </Link>

            {/* RED STRINGS - Connecting Evidence */}
            {/* String from Skills to Projects (showing skills were used in cases) */}
            {(hoveredItem === "skills" || hoveredItem === "projects") && (
              <svg className="absolute inset-0 pointer-events-none z-5" style={{ width: '100%', height: '100%' }}>
                <line 
                  x1="70%" 
                  y1="25%" 
                  x2="35%" 
                  y2="75%" 
                  stroke="hsl(var(--string))" 
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  className="animate-draw-line"
                  style={{ 
                    filter: 'drop-shadow(0 0 6px hsl(var(--string)))',
                    strokeDashoffset: hoveredItem ? '0' : '1000',
                    transition: 'stroke-dashoffset 1s ease-out'
                  }}
                />
              </svg>
            )}

            {/* String from Central Photo to Skills */}
            {hoveredItem === "skills" && (
              <svg className="absolute inset-0 pointer-events-none z-5" style={{ width: '100%', height: '100%' }}>
                <line 
                  x1="50%" 
                  y1="50%" 
                  x2="70%" 
                  y2="25%" 
                  stroke="hsl(var(--string))" 
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  style={{ 
                    filter: 'drop-shadow(0 0 6px hsl(var(--string)))',
                    animation: 'drawLine 0.8s ease-out forwards'
                  }}
                />
              </svg>
            )}

            {/* String from Central Photo to Projects */}
            {hoveredItem === "projects" && (
              <svg className="absolute inset-0 pointer-events-none z-5" style={{ width: '100%', height: '100%' }}>
                <line 
                  x1="50%" 
                  y1="50%" 
                  x2="35%" 
                  y2="75%" 
                  stroke="hsl(var(--string))" 
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  style={{ 
                    filter: 'drop-shadow(0 0 6px hsl(var(--string)))',
                    animation: 'drawLine 0.8s ease-out forwards'
                  }}
                />
              </svg>
            )}

            {/* String from About to Central Photo */}
            {hoveredItem === "about" && (
              <svg className="absolute inset-0 pointer-events-none z-5" style={{ width: '100%', height: '100%' }}>
                <line 
                  x1="25%" 
                  y1="18%" 
                  x2="48%" 
                  y2="48%" 
                  stroke="hsl(var(--string))" 
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  style={{ 
                    filter: 'drop-shadow(0 0 6px hsl(var(--string)))',
                    animation: 'drawLine 0.8s ease-out forwards'
                  }}
                />
              </svg>
            )}

            {/* String from Contact to Central Photo */}
            {hoveredItem === "contact" && (
              <svg className="absolute inset-0 pointer-events-none z-5" style={{ width: '100%', height: '100%' }}>
                <line 
                  x1="75%" 
                  y1="75%" 
                  x2="52%" 
                  y2="52%" 
                  stroke="hsl(var(--string))" 
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  style={{ 
                    filter: 'drop-shadow(0 0 6px hsl(var(--string)))',
                    animation: 'drawLine 0.8s ease-out forwards'
                  }}
                />
              </svg>
            )}

          </div>

          {/* Instruction at bottom */}
          <div className="text-center mt-12">
            <p className="typewriter text-sm text-foreground/80 italic drop-shadow">
              Hover over items to see connections • Click to investigate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hub;
