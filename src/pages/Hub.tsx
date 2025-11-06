import { useState } from "react";
import { Link } from "react-router-dom";
import corkBoard from "@/assets/cork-board.jpg";
import { FileText, Code, Mail, User } from "lucide-react";

const Hub = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const pinnedItems = [
    { id: "about", icon: User, title: "About", path: "/hub", color: "primary" },
    { id: "skills", icon: Code, title: "Evidence", path: "/skills", color: "secondary" },
    { id: "projects", icon: FileText, title: "Cases", path: "/projects", color: "primary" },
    { id: "contact", icon: Mail, title: "Contact", path: "/contact", color: "secondary" },
  ];

  return (
    <div 
      className="min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: `url(${corkBoard})` }}
    >
      <div className="absolute inset-0 bg-background/30" />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="animate-slide-up">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="detective-title text-5xl font-bold text-foreground mb-4">
              THE EVIDENCE BOARD
            </h1>
            <div className="w-32 h-1 bg-primary mx-auto" />
          </div>

          {/* Central Photo/Profile */}
          <div className="flex justify-center mb-12">
            <div className="paper-texture p-6 transform -rotate-1 shadow-2xl border-4 border-paper-dark">
              <div className="w-48 h-48 bg-card flex items-center justify-center border-2 border-border">
                <User className="w-24 h-24 text-muted-foreground" />
              </div>
              <p className="typewriter text-center mt-4 text-sm">
                LEAD DETECTIVE: [YOUR NAME]
              </p>
            </div>
          </div>

          {/* About Section - Newspaper Clipping Style */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="paper-texture p-8 border-l-4 border-primary shadow-xl transform rotate-0 hover:rotate-0 transition-transform">
              <h2 className="detective-title text-2xl mb-4 border-b-2 border-primary pb-2">
                LOCAL DEVELOPER CRACKS CODE
              </h2>
              <p className="typewriter text-base leading-relaxed text-card-foreground">
                A skilled investigator of digital mysteries, specializing in solving complex technical cases. 
                With years of experience cracking the toughest coding challenges, this detective brings 
                innovative solutions to every investigation. Known for meticulous attention to detail and 
                an unwavering commitment to solving even the most perplexing technical puzzles.
              </p>
              <p className="typewriter text-sm mt-4 text-muted-foreground italic">
                "Every bug is just a clue waiting to be discovered." - Lead Detective
              </p>
            </div>
          </div>

          {/* Pinned Items with Red String Connections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {pinnedItems.map((item) => {
              const Icon = item.icon;
              const isHovered = hoveredItem === item.id;
              
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="paper-texture p-6 transform rotate-2 group-hover:rotate-0 transition-all duration-300 hover-lift shadow-xl border-2 border-paper-dark">
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-16 h-16 rounded-full bg-${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className={`w-8 h-8 text-${item.color}-foreground`} />
                      </div>
                      <h3 className="detective-title text-xl text-card-foreground">
                        {item.title}
                      </h3>
                      <div className="w-8 h-1 bg-primary mt-2" />
                    </div>
                    
                    {/* Pin */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-secondary rounded-full shadow-md border-2 border-background" />
                  </div>

                  {/* Red String Effect on Hover */}
                  {isHovered && (
                    <svg className="absolute top-full left-1/2 -translate-x-1/2 pointer-events-none" width="2" height="60">
                      <line 
                        x1="1" 
                        y1="0" 
                        x2="1" 
                        y2="60" 
                        stroke="hsl(var(--string))" 
                        strokeWidth="2"
                        className="animate-draw-line"
                        style={{ filter: 'drop-shadow(0 0 4px hsl(var(--string)))' }}
                      />
                    </svg>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hub;
