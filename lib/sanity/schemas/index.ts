import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import settings from "./settings";
import team from "./team";
import { team_page } from "./page/team_page";
import { about_page } from "./page/about_page";

export const schemaTypes = [
  post,
  category,
  settings,
  blockContent,
  team,
  // Page Data
  team_page,
  about_page,
];
