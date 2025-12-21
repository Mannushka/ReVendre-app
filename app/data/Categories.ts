import { Category } from "../types/Category";
import Colors from "../utils/Colors";
const categories: Category[] = [
  {
    title: "Furniture",
    id: "1",
    color: Colors.FURNITURE_RED,
    iconName: "floor-lamp",
  },
  {
    title: "Cars",
    id: "2",
    color: Colors.CARS_ORANGE,
    iconName: "car",
  },
  {
    title: "Gadgets",
    id: "3",
    color: Colors.GADGETS_YELLOW,
    iconName: "laptop",
  },
  {
    title: "Games",
    id: "4",
    color: Colors.GAMES_GREEN,
    iconName: "microsoft-xbox-controller",
  },
  {
    title: "Clothing",
    id: "5",
    color: Colors.CLOTHING_GREEN,
    iconName: "shoe-heel",
  },
  {
    title: "Sports",
    id: "6",
    color: Colors.SPORTS_BLUE,
    iconName: "basketball",
  },
  {
    title: "Movies & music",
    id: "7",
    color: Colors.MOVIES_MUSIC_BLUE,
    iconName: "headphones",
  },
  {
    title: "Books",
    id: "8",
    color: Colors.BOOKS_PURPLE,
    iconName: "book-open-variant",
  },
  {
    title: "Others",
    id: "9",
    color: Colors.OTHERS_BLUE,
    iconName: "duck",
  },
];

export default categories;
