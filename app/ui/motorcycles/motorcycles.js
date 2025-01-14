import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card/card";
import { motorcycles } from "@/app/lib/data";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import Image from "next/image";

const imageStyle = {
  borderRadius: "50%",
  border: "1px solid #ccc",
  objectFit: "contain",
};

export async function Motorcycles() {
  return (
    <div className="grid-cols-1 lg:grid-cols-4 overflow-y-scroll">
      {motorcycles.map((item) => (
        <Card key={item.id} className="w-[250px] py-6 mb-3">
          <CardHeader>
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              style={imageStyle}
            />
          </CardHeader>
          <CardContent>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>
              {item.bio.length >= 25
                ? `${item.bio.substring(0, 100)}...`
                : item.bio}
            </CardDescription>
          </CardContent>
          <CardFooter className="justify-center">
            <CiFacebook />
            <CiTwitter />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
