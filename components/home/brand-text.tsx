import BrandTextDescription from './brand-text/description';
import BrandTextTitle from './brand-text/title';

export default function HomeBrandText() {
     const title =
          'Nextjs is not god, but it is framework god!';
     const description =
          "I like to think of myself as a person who is happy sharing knowledge Since that i'm nextjs slave! I want you to become its slave too!";
     return (
          <div
               aria-label="brand-text"
               className="flex flex-col gap-1 w-full"
          >
               <BrandTextTitle text={title} />
               <BrandTextDescription text={description} />
          </div>
     );
}
