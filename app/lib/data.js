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
    image: "/vespa_bello.jpg",
    financeFee: 100.00,
    optionToPurchase: 150.00,
    totalAmountPayable: 300.00,
    duration: 48,
  },
  {
    id: "07b319af-8727-4c33-b9a5-db32a5162f79",
    user_id: "ecf5259f-aa69-4a26-8ac2-2819209ddb15",
    name: "Vespa Hero",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "/vespa_hero.avif",
    financeFee: 150.50,
    optionToPurchase: 200.00,
    totalAmountPayable: 350.00,
    duration: 36,
  },
  {
    id: "39e2224c-c050-4a17-b8d0-d57157ffb6fa",
    user_id: "4497ac79-a608-4655-b530-101c9af965e7",
    name: "Vespa Primera",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "/vespa_primera.avif",
    financeFee: 105.00,
    optionToPurchase: 150.00,
    totalAmountPayable: 200.00,
    duration: 45,
  },
  {
    id: "2ab64415-d36f-44d2-9277-ea0783566c53",
    user_id: "4497ac79-a608-4655-b530-101c9af965e7",
    name: "Vespa Scotter",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: "/vespa_scooters.avif",
    financeFee: 200.00,
    optionToPurchase: 400.00,
    totalAmountPayable:450.00,
    duration: 72,
  },
];

export const reservations = [];
