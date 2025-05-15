import Link from 'next/link';

export default function SimpleNav() {
     return (
          <ul className="flex gap-2 items-center">
               <li>
                    <Link href="/">Home</Link>
               </li>
               <li>
                    <Link href="/about">About</Link>
               </li>
               <li>
                    <Link href="/contact">Contact</Link>
               </li>
          </ul>
     );
}
