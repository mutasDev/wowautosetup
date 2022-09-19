import { Class } from "./class";
import { Role } from "./role";
export interface Player {
  name: string;
  class: Class;
  role: Role;
  rating: number;
}
