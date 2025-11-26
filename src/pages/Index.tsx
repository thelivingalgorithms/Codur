import { ArrowRight, Code2, Zap, Map, Sparkles, Shield, Users, Terminal, GitBranch, FileCode, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">Codur</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#use-cases" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Use Cases
            </a>
            <a href="#beta" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Beta Access</a>
            <Button variant="outline" size="sm">Sign In</Button>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Install Extension
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">
            Understand Any Codebase in{" "}
            <span className="text-primary">Seconds</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in">
            Codur gives developers instant clarity with AI-powered explanations, visual maps, and intelligent analysis — all inside VS Code.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 h-12 px-8">
              <Terminal className="h-4 w-4" />
              Install on VS Code
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8">
              Try Interactive Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">Free to install.</p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Modern codebases are massive. Onboarding takes forever. Debugging is guesswork.
          </h2>
          <p className="text-xl text-muted-foreground">
            Your IDE shows files — <span className="text-foreground font-semibold">Codur shows understanding.</span>
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Transform Your Development Workflow
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From chaos to clarity with AI-powered code intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Feature 1: Visual Repository Mapping */}
            <Card className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Map className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Visual Repository Mapping</h3>
              <p className="text-muted-foreground mb-4">
                See your entire project like a blueprint with auto-generated dependency graphs and navigable hierarchies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Auto-generated dependency graph</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Click to navigate anywhere</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Real-time stats panel</span>
                </li>
              </ul>
            </Card>

            {/* Feature 2: AI Code Assistant */}
            <Card className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">AI Code Assistant</h3>
              <p className="text-muted-foreground mb-4">
                Powered by Google Gemini for natural language explanations, auto-generated tests, and intelligent refactoring.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Natural language explanations</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Context-aware fixes & refactoring</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>One-command transformations</span>
                </li>
              </ul>
            </Card>

            {/* Feature 3: Dead Code Detection */}
            <Card className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Dead Code Detection</h3>
              <p className="text-muted-foreground mb-4">
                Find and remove unused code safely with automatic scanning and batch removal operations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Automatic scanning</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Undo-safe operations</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Progress tracking</span>
                </li>
              </ul>
            </Card>

            {/* Feature 4: Repo Intelligence */}
            <Card className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <GitBranch className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Repo Intelligence Engine</h3>
              <p className="text-muted-foreground mb-4">
                Your project's brain with dependency maps, complexity metrics, and usage patterns.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Dependency maps</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Complexity metrics</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Incremental indexing</span>
                </li>
              </ul>
            </Card>

            {/* Feature 5: Developer Productivity */}
            <Card className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Terminal className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Developer-First Productivity</h3>
              <p className="text-muted-foreground mb-4">
                Built for speed with command palette, keyboard shortcuts, and inline actions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Command Palette actions</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Keyboard shortcuts</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Multi-file workflows</span>
                </li>
              </ul>
            </Card>

            {/* Feature 6: Security */}
            <Card className="p-6 border-border bg-card hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Privacy & Control</h3>
              <p className="text-muted-foreground mb-4">
                Your repo stays private. Codur only sends snippets when you trigger AI actions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Secure local key storage</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Zero external storage</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Full control over data</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="container mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Built for Every Developer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From solo developers to engineering teams
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="p-8 border-border bg-card">
            <Users className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-3">Solo Developers</h3>
            <p className="text-muted-foreground mb-4">
              Learn new frameworks and understand complex projects faster than ever before.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Onboard to new codebases in minutes</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Debug with full context</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Auto-document your work</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 border-border bg-card">
            <FileCode className="h-8 w-8 text-accent mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-3">Engineering Teams</h3>
            <p className="text-muted-foreground mb-4">
              Accelerate onboarding and maintain code quality across your organization.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Reduce onboarding time by 90%</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Consistent code reviews</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Knowledge sharing made easy</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Free Beta Program Section */}
      <section id="beta" className="bg-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Join the Free Beta Program
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Experience Codur before anyone else. No credit card. No commitment.
            </p>

            <Button size="lg" className="mb-12">
              Get Free Beta Access
            </Button>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-muted-foreground">
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Full AI explanations</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Repo visualization</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Smart search</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Dead code detection</span>
              </div>
              <div className="flex flex-col items-center gap-2 col-span-2 md:col-span-1">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Weekly updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12 md:p-16 border border-border">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Stop Reading Code.<br />Start Understanding It.
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of developers who've transformed their workflow with Codur.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 h-12 px-8">
              <Terminal className="h-4 w-4" />
              Install Codur for VS Code
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Community</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">Codur</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Codur. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;