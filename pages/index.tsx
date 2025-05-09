import HomeBrandText from '@/components/home/brand-text';
import HomeContainer from '@/components/home/container';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
     variable: '--font-geist-sans',
     subsets: ['latin'],
});

const geistMono = Geist_Mono({
     variable: '--font-geist-mono',
     subsets: ['latin'],
});

export default function Home() {
     return (
          <main
               className={`${geistSans.variable} ${geistMono.variable} w-full h-full`}
          >
               <HomeContainer>
                    <HomeBrandText />
               </HomeContainer>
          </main>
     );
}
