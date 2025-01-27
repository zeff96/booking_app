import vespa1 from "@/app/images/vespa1.avif";
import vespa2 from "@/app/images/vespa2.jpg";
import vespa3 from "@/app/images/vespa3.webp";
import vespa4 from "@/app/images/vespa4.jpg";

export const user = {
  id: "ecf5259f-aa69-4a26-8ac2-2819209ddb15",
  username: "user",
  email: "user@example.com",
  password: "Password@2",
  role: "user",
};

export const admin = {
  id: "4497ac79-a608-4655-b530-101c9af965e7",
  username: "admin",
  email: "admin@example.com",
  password: "Password@2",
  role: "admin",
};

export const motorcycles = [
  {
    id: "a859dba6-17e0-4db3-9d82-180459d5e367",
    user_id: "ecf5259f-aa69-4a26-8ac2-2819209ddb15",
    name: "Vespa Bello",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: vespa1,
    financeFee: 10000,
    optionToPurchase: 15000,
    totalAmountPayable: 30000,
    duration: 48,
  },
  {
    id: "07b319af-8727-4c33-b9a5-db32a5162f79",
    user_id: "ecf5259f-aa69-4a26-8ac2-2819209ddb15",
    name: "Vespa Hero",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: vespa2,
    financeFee: 15050,
    optionToPurchase: 20000,
    totalAmountPayable: 35000,
    duration: 36,
  },
  {
    id: "39e2224c-c050-4a17-b8d0-d57157ffb6fa",
    user_id: "4497ac79-a608-4655-b530-101c9af965e7",
    name: "Vespa Primera",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: vespa3,
    financeFee: 10500,
    optionToPurchase: 15000,
    totalAmountPayable: 20000,
    duration: 45,
  },
  {
    id: "2ab64415-d36f-44d2-9277-ea0783566c53",
    user_id: "4497ac79-a608-4655-b530-101c9af965e7",
    name: "Vespa Scotter",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: vespa4,
    financeFee: 20000,
    optionToPurchase: 40000,
    totalAmountPayable: 45000,
    duration: 72,
  },
];

export const reservations = [];
