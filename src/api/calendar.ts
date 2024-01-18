import { addDays } from "date-fns";
import { Schedule } from "../types/calendar";

export const getScheduleList = (): Schedule[] => {
  const today = new Date();

  return [
    {
      id: 1,
      title: "予定1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolore qui voluptas voluptatum distinctio vel rerum eaque id dolorum eos nam delectus fugit pariatur nobis esse, enim aspernatur laudantium quas reprehenderit ab nesciunt consequatur natus doloremque. Ipsam incidunt, impedit laboriosam reiciendis voluptates dolorum architecto, ipsum maiores mollitia non sit nesciunt, vel nemo sed rerum perferendis illo in itaque perspiciatis. Nisi expedita animi perferendis, atque est dolores voluptate nemo. Illum, enim quae incidunt tempore labore aut. Repellendus corrupti tempore minus minima earum eligendi iure quidem mollitia, rem itaque hic veniam quos ratione deleniti officiis aliquam, vitae rerum illum beatae pariatur. Accusantium!",
      date: today,
    },
    {
      id: 2,
      title: "予定2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolore qui voluptas voluptatum distinctio vel rerum eaque id dolorum eos nam delectus fugit pariatur nobis esse, enim aspernatur laudantium quas reprehenderit ab nesciunt consequatur natus doloremque. Ipsam incidunt, impedit laboriosam reiciendis voluptates dolorum architecto, ipsum maiores mollitia non sit nesciunt, vel nemo sed rerum perferendis illo in itaque perspiciatis. Nisi expedita animi perferendis, atque est dolores voluptate nemo. Illum, enim quae incidunt tempore labore aut. Repellendus corrupti tempore minus minima earum eligendi iure quidem mollitia, rem itaque hic veniam quos ratione deleniti officiis aliquam, vitae rerum illum beatae pariatur. Accusantium!",
      date: today,
    },
    {
      id: 3,
      title: "予定3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolore qui voluptas voluptatum distinctio vel rerum eaque id dolorum eos nam delectus fugit pariatur nobis esse, enim aspernatur laudantium quas reprehenderit ab nesciunt consequatur natus doloremque. Ipsam incidunt, impedit laboriosam reiciendis voluptates dolorum architecto, ipsum maiores mollitia non sit nesciunt, vel nemo sed rerum perferendis illo in itaque perspiciatis. Nisi expedita animi perferendis, atque est dolores voluptate nemo. Illum, enim quae incidunt tempore labore aut. Repellendus corrupti tempore minus minima earum eligendi iure quidem mollitia, rem itaque hic veniam quos ratione deleniti officiis aliquam, vitae rerum illum beatae pariatur. Accusantium!",
      date: addDays(today, 1),
    },
    {
      id: 4,
      title: "予定4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolore qui voluptas voluptatum distinctio vel rerum eaque id dolorum eos nam delectus fugit pariatur nobis esse, enim aspernatur laudantium quas reprehenderit ab nesciunt consequatur natus doloremque. Ipsam incidunt, impedit laboriosam reiciendis voluptates dolorum architecto, ipsum maiores mollitia non sit nesciunt, vel nemo sed rerum perferendis illo in itaque perspiciatis. Nisi expedita animi perferendis, atque est dolores voluptate nemo. Illum, enim quae incidunt tempore labore aut. Repellendus corrupti tempore minus minima earum eligendi iure quidem mollitia, rem itaque hic veniam quos ratione deleniti officiis aliquam, vitae rerum illum beatae pariatur. Accusantium!",
      date: addDays(today, 7),
    },
    {
      id: 5,
      title: "予定5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolore qui voluptas voluptatum distinctio vel rerum eaque id dolorum eos nam delectus fugit pariatur nobis esse, enim aspernatur laudantium quas reprehenderit ab nesciunt consequatur natus doloremque. Ipsam incidunt, impedit laboriosam reiciendis voluptates dolorum architecto, ipsum maiores mollitia non sit nesciunt, vel nemo sed rerum perferendis illo in itaque perspiciatis. Nisi expedita animi perferendis, atque est dolores voluptate nemo. Illum, enim quae incidunt tempore labore aut. Repellendus corrupti tempore minus minima earum eligendi iure quidem mollitia, rem itaque hic veniam quos ratione deleniti officiis aliquam, vitae rerum illum beatae pariatur. Accusantium!",
      date: addDays(today, -9),
    },
  ];
};
