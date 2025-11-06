import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseDetail = () => {
  const { id } = useParams();

  // Mock case data - in a real app, this would fetch based on id
  const caseData = {
    number: "001",
    title: "The E-Commerce Enigma",
    brief: "The client reported a slow, outdated website that was losing customers due to poor performance and lack of modern features. The investigation began with a thorough analysis of the existing infrastructure.",
    evidence: [
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Stripe", icon: "💳" },
    ],
    investigation: [
      "Conducted wireframing sessions to map user flow",
      "Built RESTful API with authentication and payment processing",
      "Implemented responsive design with mobile-first approach",
      "Optimized database queries reducing load time by 60%",
    ],
    verdict: "Case Closed. The new site launched successfully, increasing user retention by 40% and doubling conversion rates within the first month.",
    results: {
      performance: "+60% faster load times",
      retention: "+40% user retention",
      conversion: "+100% conversion rate",
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="animate-fade-in">
          {/* Header */}
          <div className="flex items-center gap-4 mb-12">
            <Link to="/projects">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <span className="detective-title text-secondary text-sm">
                CASE-{caseData.number}
              </span>
              <h1 className="detective-title text-4xl font-bold text-foreground">
                {caseData.title}
              </h1>
            </div>
          </div>

          {/* Case File */}
          <div className="max-w-4xl mx-auto space-y-8">
            {/* The Brief */}
            <section className="paper-texture p-8 border-l-4 border-secondary shadow-xl">
              <h2 className="detective-title text-2xl text-secondary mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm">1</span>
                THE BRIEF
              </h2>
              <p className="typewriter text-base leading-relaxed text-card-foreground">
                {caseData.brief}
              </p>
            </section>

            {/* Evidence Gathered */}
            <section className="paper-texture p-8 border-l-4 border-primary shadow-xl">
              <h2 className="detective-title text-2xl text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">2</span>
                EVIDENCE GATHERED
              </h2>
              <p className="typewriter text-sm text-muted-foreground mb-6">
                Investigation revealed the need for the following technologies:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {caseData.evidence.map((item) => (
                  <div
                    key={item.name}
                    className="bg-card p-4 border-2 border-primary/20 rounded-sm text-center hover-lift"
                  >
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <p className="typewriter text-sm font-bold">{item.name}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* The Investigation */}
            <section className="paper-texture p-8 border-l-4 border-secondary shadow-xl">
              <h2 className="detective-title text-2xl text-secondary mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm">3</span>
                THE INVESTIGATION
              </h2>
              <p className="typewriter text-sm text-muted-foreground mb-6">
                My process involved the following steps:
              </p>
              <ul className="space-y-3">
                {caseData.investigation.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="typewriter text-base text-card-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* The Verdict */}
            <section className="paper-texture p-8 border-4 border-primary shadow-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 transform rotate-12">
                <div className="px-6 py-2 bg-secondary border-4 border-secondary-foreground">
                  <span className="detective-title text-2xl text-secondary-foreground">SOLVED</span>
                </div>
              </div>
              <h2 className="detective-title text-2xl text-primary mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">4</span>
                THE VERDICT
              </h2>
              <p className="typewriter text-base leading-relaxed text-card-foreground mb-6">
                {caseData.verdict}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {Object.entries(caseData.results).map(([key, value]) => (
                  <div key={key} className="bg-card p-4 border-2 border-primary rounded-sm text-center">
                    <p className="detective-title text-xl text-primary mb-1">{value}</p>
                    <p className="typewriter text-xs text-muted-foreground uppercase">{key}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Links */}
            <section className="flex gap-4 justify-center">
              <Button variant="default" size="lg" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                View Live Site
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="w-4 h-4" />
                Examine Evidence
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetail;
