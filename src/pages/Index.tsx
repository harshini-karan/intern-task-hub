import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  CheckSquare, 
  Shield, 
  Zap, 
  Users,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const features = [
  {
    icon: CheckSquare,
    title: 'Task Management',
    description: 'Create, organize, and track your tasks with ease.',
  },
  {
    icon: Shield,
    title: 'Secure Authentication',
    description: 'Your data is protected with industry-standard security.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built for performance with real-time updates.',
  },
  {
    icon: Users,
    title: 'Personal Dashboard',
    description: 'Get insights and overview of all your tasks at a glance.',
  },
];

const benefits = [
  'Full CRUD operations for tasks',
  'Search and filter capabilities',
  'Priority and status tracking',
  'Due date management',
  'Responsive design',
  'Profile customization',
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
              <CheckSquare className="h-5 w-5 text-accent-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">TaskFlow</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button variant="accent" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-accent/10 text-accent">
            <Zap className="h-4 w-4" />
            Full-Stack Task Management
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
            Organize Your Work,{' '}
            <span className="text-gradient">Amplify Your Productivity</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern, scalable task management application built with React, 
            featuring authentication, real-time updates, and a beautiful interface.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link to="/signup">
                Start Free Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20 border-t border-border">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Everything You Need
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete solution for managing your tasks with powerful features 
            and a clean, intuitive interface.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="p-6 rounded-xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 rounded-lg bg-accent/10 w-fit mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container py-20 border-t border-border">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built for Developers, Designed for Everyone
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              TaskFlow demonstrates modern full-stack development practices with 
              a focus on scalability, security, and user experience.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative animate-slide-up">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border border-border shadow-xl p-8 flex items-center justify-center">
              <div className="text-center">
                <CheckSquare className="h-16 w-16 text-accent mx-auto mb-4" />
                <p className="text-lg font-semibold text-foreground">Task Dashboard Preview</p>
                <p className="text-sm text-muted-foreground mt-2">Sign up to see it in action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="rounded-2xl bg-primary p-12 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join TaskFlow today and experience a better way to manage your tasks.
          </p>
          <Button size="xl" variant="accent" asChild>
            <Link to="/signup">
              Create Free Account
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-accent">
              <CheckSquare className="h-4 w-4 text-accent-foreground" />
            </div>
            <span className="font-semibold text-foreground">TaskFlow</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 TaskFlow. Frontend Developer Intern Assignment.
          </p>
        </div>
      </footer>
    </div>
  );
}
