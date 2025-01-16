import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card/card";
import { motorcycles } from "@/app/lib/data";
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
    <div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center overflow-y-scroll">
      {motorcycles.map((item) => (
        <Card
          key={item.id}
          className="w-[250px] md:w-[500px] py-6 mb-3 flex flex-col items-center"
        >
          <CardHeader className="relative w-[200px] h-[200px]">
            <Image
              src={item.image}
              alt={item.name}
              style={imageStyle}
              fill={true}
            />
          </CardHeader>
          <CardContent>
            <CardTitle>
              <Link
                href={`motorcycles/${item.id}`}
                className="hover:opacity-75"
              >
                {item.name}
              </Link>
            </CardTitle>
            <CardDescription>
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
      ))}
    </div>
  );
}
