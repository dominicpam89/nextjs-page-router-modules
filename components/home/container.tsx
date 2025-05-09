import { PropsWithChildren } from 'react';

export default function HomeContainer({
     children,
}: PropsWithChildren) {
     return (
          <div
               aria-label="homepage-container"
               className="flex flex-col lg:flex-row gap-4 items-center justify-center w-full min-h-screen p-4 md:p-8 lg:p-16"
          >
               {children}
          </div>
     );
}
