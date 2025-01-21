import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card/card";
import { motorcycles } from "@/app/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";

const imageStyle = {
  borderRadius: "50%",
  border: "1px solid #ccc",
  objectFit: "contain",
};

export async function Motorcycles() {
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
              <Card className="py-6 mb-3 flex flex-col items-center">
                <CardHeader className="relative w-[200px] h-[200px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    style={imageStyle}
                    fill={true}
                  />
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-3">
                    <Link
                      href={`motorcycles/${item.id}`}
                      className="hover:opacity-75"
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
                <CardFooter className="justify-center gap-2">
                  <CiFacebook />
                  <TiSocialTwitterCircular />
                  <CiInstagram />
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
