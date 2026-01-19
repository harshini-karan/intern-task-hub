import { Link } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTasks } from '@/hooks/useTasks';
import { useProfile } from '@/hooks/useProfile';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Plus, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Dashboard() {
  const { tasks, isLoading } = useTasks();
  const { profile } = useProfile();

  const stats = {
    total: tasks.length,
    pending: tasks.filter(t => t.status === 'pending').length,
    inProgress: tasks.filter(t => t.status === 'in_progress').length,
    completed: tasks.filter(t => t.status === 'completed').length,
  };

  const recentTasks = tasks.slice(0, 5);

  const statCards = [
    { 
      title: 'Total Tasks', 
      value: stats.total, 
      icon: TrendingUp, 
      color: 'text-foreground',
      bgColor: 'bg-secondary'
    },
    { 
      title: 'Pending', 
      value: stats.pending, 
      icon: Clock, 
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    { 
      title: 'In Progress', 
      value: stats.inProgress, 
      icon: AlertCircle, 
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    { 
      title: 'Completed', 
      value: stats.completed, 
      icon: CheckCircle2, 
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success/10 text-success';
      case 'in_progress': return 'bg-accent/10 text-accent';
      default: return 'bg-warning/10 text-warning';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive/10 text-destructive';
      case 'medium': return 'bg-warning/10 text-warning';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back{profile?.full_name ? `, ${profile.full_name}` : ''}!
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's an overview of your tasks and progress.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.title} 
                className="animate-slide-up shadow-md"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-3xl font-bold text-foreground mt-1">
                        {isLoading ? '-' : stat.value}
                      </p>
                    </div>
                    <div className={cn("p-3 rounded-lg", stat.bgColor)}>
                      <Icon className={cn("h-6 w-6", stat.color)} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Tasks */}
        <Card className="animate-slide-up shadow-md" style={{ animationDelay: '200ms' }}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Tasks</CardTitle>
            <Button asChild variant="accent" size="sm">
              <Link to="/tasks">
                <Plus className="h-4 w-4 mr-1" />
                Add Task
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-16 rounded-lg shimmer" />
                ))}
              </div>
            ) : recentTasks.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No tasks yet. Create your first task!</p>
                <Button asChild variant="accent" className="mt-4">
                  <Link to="/tasks">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Task
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {recentTasks.map((task) => (
                  <div 
                    key={task.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{task.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={cn("px-2 py-0.5 rounded text-xs font-medium capitalize", getStatusColor(task.status))}>
                          {task.status.replace('_', ' ')}
                        </span>
                        <span className={cn("px-2 py-0.5 rounded text-xs font-medium capitalize", getPriorityColor(task.priority))}>
                          {task.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                <Link 
                  to="/tasks" 
                  className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  View all tasks
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
