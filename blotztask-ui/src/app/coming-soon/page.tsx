import { Button } from '@/components/ui/button';
import { H1, H3 } from '@/components/ui/heading-with-anchor';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  
  return (
     <main className="flex flex-col gap-5 p-12 md:items-center md:p-88">
        <div className ="text-left text-6xl font-bold">
           <H1>&#x2692; New Website Coming Soon...  </H1>
        </div>
        <H3 className= "text-lg font-serif text-muted-foreground sm:text-xl">
          We are currently working on this page. Please check back later. 
        </H3>


        <div className ="mt-16 flex flex-col gap-3 md:flex-row">
          <Link href="/">
            <Button asChild>
              <span>
              Return Home
              </span>
            </Button>
          </Link>
        </div>


        <div className= "flex">
          <div className= "mr-0" >
            <Image
              src="/assets/images/comingsoon.webp" 
              alt="An image of a coming soon page"
              className="w-160 h-auto object-cover"
              />
          </div>
        </div>
    </main>
  );
}
