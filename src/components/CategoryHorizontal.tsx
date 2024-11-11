import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'
import { technologies } from './Pages/Pricing';


export interface CategoryHorizontalProps {
  selectedCategory: keyof typeof technologies | null
  handleCategoryClick: (category: keyof typeof technologies) => void
  quantities: {
    [category: string]: {
      [tech: string]: number;
    };
  }
}

const CategoryHorizontal: FunctionComponent<CategoryHorizontalProps> = ({
  handleCategoryClick,
  selectedCategory,
  quantities
}) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  console.log("working")

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      if (!hasScrolled) setHasScrolled(true);
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { once: true });
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [hasScrolled]);

  return <div className="relative lg:hidden xl:hidden 2xl:hidden">
    {!hasScrolled && (
      <div className="transform -translate-y-1/2 mb-2 animate-slide-right flex items-center text-orange-500 text-sm font-semibold">
        <span className="mr-1 text-xs">Scroll Right</span>
        <ChevronDoubleRightIcon className="w-4 h-4 animate-pulse" />
      </div>
    )}

<div className='flex align-middle'>
<div className="size-12 bg-transparent text-orange-500 m-auto py-2">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='size-6'>
  <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
</svg>

</div>
    <div
      ref={scrollContainerRef}
      className="
        flex
        flex-row
        gap-2
        overflow-x-scroll
        md:flex
        md:flex-row
        lg:hidden
        xl:hidden
        2xl:hidden
        "
    >
      {Object.keys(technologies).map((category,index) => (
        <div className='relative mt-2' key={index}>
          <button
            key={category}
            onClick={() => handleCategoryClick(category as keyof typeof technologies)}
            className={`border w-fit mb-2 whitespace-nowrap border-orange-500 py-2 px-4 rounded-full transition-colors ${selectedCategory === category ? "bg-orange-500 text-white" : "text-black"
              } ${quantities[category] &&
              (Object.values(quantities[category]).some(quantity => quantity > 0) && selectedCategory==category) ?'bg-orange-500 text-black':' text-black'}   hover:bg-orange-500`}
          >
            {category}
          </button>

          {quantities[category] &&
            Object.values(quantities[category]).some(quantity => quantity > 0) && (
              <div className={`w-5 h-5 border border-orange-500  bg-orange-500 rounded-full absolute -top-1 right-0 ${selectedCategory===category ? 'bg-white text-black':'text-white'}`}>
                <p className='text-center rounded-full text-xs '>
                  {Object.values(quantities[category]).filter(quantity => quantity > 0).length}
                </p>
              </div>
            )}
        </div>
      ))}
    </div>

    <div className="size-12 bg-transparent text-orange-500 m-auto py-2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
</svg>

    </div>
    </div>
  </div>
}

export default CategoryHorizontal