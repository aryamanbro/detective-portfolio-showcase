import { useState } from "react";
import { useNavigate } from "react-router-dom";
import deskImage from "@/assets/detective-desk.jpg";

const Landing = () => {
  const [isOpening, setIsOpening] = useState(false);
  const navigate = useNavigate();

  const handleFolderClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      navigate("/hub");
    }, 1200);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Desk Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${deskImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Steam Effect */}
      <div className="absolute top-[35%] left-[22%] w-8 h-12 opacity-40">
        <div className="animate-steam w-full h-full bg-gradient-to-t from-transparent to-foreground/30 rounded-full blur-md" />
      </div>

      {/* Folder */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div 
          className={`relative cursor-pointer group ${isOpening ? 'animate-folder-flip' : ''}`}
          onClick={handleFolderClick}
        >
          <div className="w-[400px] h-[280px] paper-texture border-4 border-paper-dark rounded-sm shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/20">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="inline-block px-8 py-3 border-4 border-secondary bg-secondary/20 transform -rotate-2">
                  <h1 className="detective-title text-4xl font-bold text-secondary">
                    CLASSIFIED
                  </h1>
                </div>
                <p className="mt-8 typewriter text-lg text-accent-foreground">
                  CASE FILE #DETECTIVE
                </p>
              </div>
            </div>
          </div>
          
          {/* Hover Prompt */}
          <p className="absolute -bottom-12 left-1/2 -translate-x-1/2 typewriter text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            Click to open the file...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
