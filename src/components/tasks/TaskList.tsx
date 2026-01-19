import { Task } from '@/hooks/useTasks';
import { TaskCard } from './TaskCard';
import { CheckSquare } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
  isLoading: boolean;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: 'pending' | 'in_progress' | 'completed') => void;
}

export function TaskList({ tasks, isLoading, onEdit, onDelete, onStatusChange }: TaskListProps) {
  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="h-40 rounded-lg shimmer" />
        ))}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
        <div className="p-4 rounded-full bg-secondary mb-4">
          <CheckSquare className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">No tasks found</h3>
        <p className="text-muted-foreground mt-1">
          Create a new task or adjust your filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task, index) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
          style={{ animationDelay: `${index * 50}ms` }}
        />
      ))}
    </div>
  );
}
