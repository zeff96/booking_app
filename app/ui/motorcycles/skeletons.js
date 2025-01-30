import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export const CardSkeleton = () => {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl shadow-sm bg-white p-4 space-y-4 border-[8px] border-gray-200`}
    >
      <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto"></div>
      <div className="flex flex-col items-center space-y-2">
        <div className="h-4 w-32 bg-gray-200"></div>
        <div className="flex flex-col gap-2 w-full px-4">
          <div className="h-2 w-full bg-gray-200 text-sm"></div>
          <div className="h-2 w-full bg-gray-200 text-sm"></div>
          <div className="h-2 w-full bg-gray-200 text-sm"></div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6">
        <div className="w-5 h-5 bg-gray-200 rounded-lg"></div>
        <div className="w-5 h-5 bg-gray-200 rounded-lg"></div>
        <div className="w-5 h-5 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export const CardWrapperSkeleton = () => {
  return (
    <Carousel>
      <CarouselContent className="-ml-1">
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <CardSkeleton />
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <CardSkeleton />
        </CarouselItem>
        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
          <CardSkeleton />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
