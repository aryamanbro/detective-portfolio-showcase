import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import evidenceLockerImg from "@/assets/evidence-locker.jpg";

const Skills = () => {
  const [openLocker, setOpenLocker] = useState<string | null>(null);

  const lockers = [
    {
      id: "frontend",
      name: "FRONTEND",
      number: "01",
      evidence: [
        { name: "React", tag: "Expert proficiency - 5 years" },
        { name: "TypeScript", tag: "Advanced - Daily use" },
        { name: "Tailwind CSS", tag: "Expert - Preferred styling" },
        { name: "Next.js", tag: "Advanced - Production apps" },
      ]
    },
    {
      id: "backend",
      name: "BACKEND",
      number: "02",
      evidence: [
        { name: "Node.js", tag: "Expert - RESTful APIs" },
        { name: "Express", tag: "Advanced - Middleware expert" },
        { name: "PostgreSQL", tag: "Intermediate - Complex queries" },
        { name: "MongoDB", tag: "Advanced - NoSQL design" },
      ]
    },
    {
      id: "tools",
      name: "TOOLS & METHODS",
      number: "03",
      evidence: [
        { name: "Git", tag: "Expert - Version control" },
        { name: "Docker", tag: "Intermediate - Containerization" },
        { name: "AWS", tag: "Intermediate - Cloud deployment" },
        { name: "CI/CD", tag: "Advanced - Automation" },
      ]
    },
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${evidenceLockerImg})` }}
    >
      <div className="absolute inset-0 bg-background/80" />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="animate-fade-in">
          {/* Header */}
          <div className="flex items-center gap-4 mb-12">
            <Link to="/hub">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="detective-title text-4xl font-bold text-foreground">
                EVIDENCE LOCKER
              </h1>
              <p className="typewriter text-muted-foreground mt-2">
                Technical Skills & Expertise Archive
              </p>
            </div>
          </div>

          {/* Lockers */}
          <div className="max-w-5xl mx-auto space-y-8">
            {lockers.map((locker, index) => {
              const isOpen = openLocker === locker.id;
              
              return (
                <div
                  key={locker.id}
                  className="relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Locker Door */}
                  <div
                    className="wood-texture border-4 border-wood-light rounded-lg p-8 cursor-pointer hover:border-primary transition-colors shadow-2xl"
                    onClick={() => setOpenLocker(isOpen ? null : locker.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-muted rounded-sm flex items-center justify-center border-4 border-border">
                          <Lock className={`w-10 h-10 transition-transform ${isOpen ? 'scale-0' : 'scale-100'}`} />
                        </div>
                        <div>
                          <span className="detective-title text-sm text-primary">
                            LOCKER-{locker.number}
                          </span>
                          <h2 className="detective-title text-3xl text-foreground">
                            {locker.name}
                          </h2>
                        </div>
                      </div>
                      <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-colors ${
                        isOpen ? 'bg-primary border-primary' : 'bg-muted border-muted-foreground'
                      }`}>
                        <span className={`detective-title text-sm ${isOpen ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                          {isOpen ? 'OPEN' : 'LOCK'}
                        </span>
                      </div>
                    </div>

                    {/* Evidence Inside */}
                    {isOpen && (
                      <div className="mt-8 space-y-4 animate-scale-in">
                        <div className="h-1 w-full bg-primary" />
                        {locker.evidence.map((item, i) => (
                          <div
                            key={item.name}
                            className="paper-texture p-4 border-l-4 border-primary shadow-lg"
                            style={{ animationDelay: `${i * 50}ms` }}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="detective-title text-lg text-card-foreground mb-1">
                                  {item.name}
                                </h3>
                                <p className="typewriter text-sm text-muted-foreground">
                                  Evidence Tag: {item.tag}
                                </p>
                              </div>
                              <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0">
                                #{i + 1}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="typewriter text-sm text-muted-foreground italic">
              Click any locker to examine the evidence within
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
