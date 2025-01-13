'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import CountUp from 'react-countup';

export default function Monthlystats() {

const mockTasks = [
    {
        id: 1,
        title: 'Complete project report',
        description: 'Finalize the project report and submit it to the manager.',
        isDone: false,
        createdAt: '2024-07-20T08:30:00Z',
        updatedAt: '2024-07-20T08:30:00Z',
    },
    {
        id: 2,
        title: 'Meeting with the team',
        description:
        'Discuss the project milestones and deadlines with the team.',
        isDone: false,
        createdAt: '2024-07-21T10:00:00Z',
        updatedAt: '2024-07-21T10:00:00Z',
    },
];

const mockLabels = {
    "status": "success",
    "data": {
        "currentMonth": "2024-11",
        "tasks": {
            completed: {
                "personal": 70,
                "academic": 23,
                "work": 28,
            },
            unfinished: {
                "personal": 15,
                "academic": 10,
                "work": 5,
            }
        }
    }
};

  const taskCount = mockTasks.length;
  const sum= (a, b) => a + b;
  const unfinishedTasks = Object.values(mockLabels.data.tasks.unfinished).reduce(sum, 0);

  return (
        <div>
            <div className="flex flex-col gap-5 md:items-center md:p-10">
                <div className="mt-1">
                    <Image
                        src="/assets/images/profileImage.png"
                        alt="an incredable image"
                        width={150}
                        height={150}
                    />
                </div>
                <div>
                    <p className="pl-20 font-arial font-bold text-[40px] leading-[100px] tracking-[-0.41px] text-center text-secondary">
                        You planned
                        <span className="px-3 font-arial font-bold text-8xl text-center text-secondary">
                            <CountUp end={taskCount} />
                        </span>
                        tasks this month
                    </p>
                </div>
            </div>
            <div className='w-full flex flex-row gap-2'>
                <Card className='bg-completed w-1/2'>
                    <CardHeader className='flex items-center rounded-lg bg-secondary '>
                        <CardTitle className='text-completed text-4xl'>Completed</CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-row text-3xl justify-center text-secondary'>
                       {Object.keys(mockLabels.data.tasks.completed).map((label, i) => (
                            <div key={i} className='flex flex-row py-4'>
                                <div className='flex flex-col justify-center items-center px-10'>
                                    <span className='font-bold text-6xl'>{mockLabels.data.tasks.completed[label]}</span>
                                    <p className='capitalize'>{label}</p>
                                </div>
                                {i < Object.keys(mockLabels.data.tasks.completed).length - 1 && (
                                    <Separator orientation='vertical' className='border-2 border-secondary'/>
                                )}
                            </div>
                            
                       ))}
                    </CardContent>
                </Card>
                <Card className='bg-unfinished w-1/2 text-white'>
                    <CardHeader className='flex items-center rounded-lg bg-unfinished-header'>
                        <CardTitle className='text-4xl'>Unfinished</CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-row text-3xl justify-center'>
                        <div className='flex flex-col items-center py-4' >
                            <span className='font-bold text-6xl'>{unfinishedTasks}</span>
                            <p className='capitalize'>others</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
  );
}
