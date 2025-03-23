import { Category } from "../types/CategoryType";
import Colors from "../utils/Colors";
const categories: Category[] = [
  {
    label: "Furniture",
    value: 1,
    color: Colors.FURNITURE_RED,
  },
  {
    label: "Cars",
    value: 2,
    color: Colors.CARS_ORANGE,
  },
  {
    label: "Cameras",
    value: 3,
    color: Colors.CAMERAS_YELLOW,
  },
  {
    label: "Games",
    value: 4,
    color: Colors.GAMES_GREEN,
  },
  {
    label: "Clothing",
    value: 5,
    color: Colors.CLOTHING_GREEN,
  },
  {
    label: "Sports",
    value: 6,
    color: Colors.SPORTS_BLUE,
  },
  {
    label: "Movies & music",
    value: 7,
    color: Colors.MOVIES_MUSIC_BLUE,
  },
  {
    label: "Books",
    value: 8,
    color: Colors.BOOKS_PURPLE,
  },
  {
    label: "Others",
    value: 9,
    color: Colors.OTHERS_BLUE,
  },
];

export default categories;
