'use client';

import { Button } from '@/components/ui/button';
import { H1, H3 } from '@/components/ui/heading-with-anchor';
import { TaskItemDTO } from '@/model/task-Item-dto';
import Link from 'next/link';
import { useState } from 'react';
import TaskList from './components/task-list';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { fetchAllTaskItems } from '@/services/taskService';

export default function Home() {
  const [tasks, setTasks] = useState<TaskItemDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadTasks = async () => {
    setLoading(true);
    setError(null);
    setTasks([]);

    try {
      const data = await fetchAllTaskItems();
      setTasks(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col gap-5 p-12 md:items-center md:p-28">
      <H1 className='heading-primary'>⚒️ Test Server Connection</H1>
      <H3 className="text-lg font-light text-muted-foreground sm:text-xl heading-secondary">
        Click the button to fetch the current list of todo items.
      </H3>
      <div className="mt-16 flex flex-col gap-3 md:flex-row">
        <Button onClick={loadTasks} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Todos'}
        </Button>
        <Link href="/">
          <Button asChild>
            <span>Return Home Page</span>
          </Button>
        </Link>
      </div>
      {error && (
        <Card className="mt-8 max-w-sm p-6 text-center bg-[#1A202C] text-white">
          <CardHeader>
            <CardTitle className="text-2xl">❌Error fetching todos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mt-4">{error}</p>
          </CardContent>
        </Card>
      )}
      {tasks.length > 0 && (
        <Card className="mt-8 max-w-sm p-6 text-center bg-[#1A202C] text-white">
          <CardHeader>
            <CardTitle className="text-2xl">
              ✅Successfully fetched todos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TaskList tasks={tasks} />
          </CardContent>
        </Card>
      )}
    </main>
  );
}
