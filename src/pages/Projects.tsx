import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  const cases = [
    {
      id: 1,
      number: "001",
      title: "The E-Commerce Enigma",
      tech: ["React", "Node.js", "MongoDB"],
      preview: "Solved slow performance issues...",
    },
    {
      id: 2,
      number: "002",
      title: "The Social App Caper",
      tech: ["React Native", "Firebase"],
      preview: "Cracked real-time chat bugs...",
    },
    {
      id: 3,
      number: "003",
      title: "The Dashboard Dilemma",
      tech: ["Vue.js", "TypeScript", "PostgreSQL"],
      preview: "Investigated data visualization...",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
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
                SOLVED CASES
              </h1>
              <p className="typewriter text-muted-foreground mt-2">
                File Cabinet: Active Investigations Archive
              </p>
            </div>
          </div>

          {/* Filing Cabinet Interface */}
          <div className="max-w-4xl mx-auto space-y-6">
            {cases.map((caseFile, index) => (
              <div
                key={caseFile.id}
                className="relative"
                onMouseEnter={() => setHoveredCase(caseFile.id)}
                onMouseLeave={() => setHoveredCase(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* File Tab */}
                <Link to={`/case/${caseFile.id}`}>
                  <div className="paper-texture border-2 border-paper-dark rounded-t-lg p-6 hover-lift cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center shadow-lg">
                          <FolderOpen className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="detective-title text-secondary text-sm">
                              CASE-{caseFile.number}
                            </span>
                          </div>
                          <h2 className="detective-title text-2xl text-card-foreground">
                            {caseFile.title}
                          </h2>
                          <p className="typewriter text-sm text-muted-foreground mt-2">
                            {caseFile.preview}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Index Card Preview on Hover */}
                    {hoveredCase === caseFile.id && (
                      <div className="mt-4 p-4 bg-card border-l-4 border-primary animate-scale-in">
                        <p className="typewriter text-sm text-muted-foreground mb-2">
                          TECH STACK:
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {caseFile.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary/20 border border-primary text-primary text-xs typewriter rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="typewriter text-sm text-muted-foreground italic">
              Click any case file to examine the full investigation report
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
