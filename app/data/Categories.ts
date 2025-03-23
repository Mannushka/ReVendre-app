import { Category } from "../types/Category";
import Colors from "../utils/Colors";
const categories: Category[] = [
  {
    label: "Furniture",
    value: 1,
    color: Colors.FURNITURE_RED,
    icon: "floor-lamp",
  },
  {
    label: "Cars",
    value: 2,
    color: Colors.CARS_ORANGE,
    icon: "car",
  },
  {
    label: "Gadgets",
    value: 3,
    color: Colors.GADGETS_YELLOW,
    icon: "laptop",
  },
  {
    label: "Games",
    value: 4,
    color: Colors.GAMES_GREEN,
    icon: "microsoft-xbox-controller",
  },
  {
    label: "Clothing",
    value: 5,
    color: Colors.CLOTHING_GREEN,
    icon: "shoe-heel",
  },
  {
    label: "Sports",
    value: 6,
    color: Colors.SPORTS_BLUE,
    icon: "basketball",
  },
  {
    label: "Movies & music",
    value: 7,
    color: Colors.MOVIES_MUSIC_BLUE,
    icon: "headphones",
  },
  {
    label: "Books",
    value: 8,
    color: Colors.BOOKS_PURPLE,
    icon: "book-open-variant",
  },
  {
    label: "Others",
    value: 9,
    color: Colors.OTHERS_BLUE,
    icon: "duck",
  },
];

export default categories;
