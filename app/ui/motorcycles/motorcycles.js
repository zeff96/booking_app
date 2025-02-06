import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { RiFacebookLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import getMotorcycles from "@/app/actions/motorcycles/motorcles";

const imageStyle = {
  objectFit: "cover",
};

export async function Motorcycles() {
  const motorcycles = await getMotorcycles();
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-1">
        {motorcycles.map((item) => (
          <CarouselItem
            key={item.id}
            className="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card className="py-6 mb-3 flex flex-col items-center border-none">
                <CardHeader className="relative w-[200px] h-[200px]">
                  <Image
                    src={item.image_url}
                    alt={item.name}
                    style={imageStyle}
                    fill={true}
                  />
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-12">
                    <Link
                      href={`motorcycles/${item.id}`}
                      className="hover:opacity-75 border-b-2 border-dashed border-gray-300 pb-6"
                    >
                      {item.name}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-400">
                    {item.bio.length >= 25
                      ? `${item.bio.substring(0, 100)}...`
                      : item.bio}
                  </CardDescription>
                </CardContent>
                <CardFooter className="justify-center gap-4">
                  <div className="w-8 h-8 border border-gray-300 rounded-full p-1 flex items-center justify-center cursor-pointer">
                    <RiFacebookLine className="text-gray-400 text-lg" />
                  </div>
                  <div className="w-8 h-8 border border-gray-300 rounded-full p-1 flex items-center justify-center cursor-pointer">
                    <CiTwitter className="text-gray-400 text-lg" />
                  </div>
                  <div className="w-8 h-8 border border-gray-300 rounded-full p-1 flex items-center justify-center cursor-pointer">
                    <CiInstagram className="text-gray-400 text-lg" />
                  </div>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
