export interface NavData {
  path: string;
  name: string;
}

export const navData: NavData[] = [
  {
    path: "/",
    name: "Main",
  },
  {
    path: "/add",
    name: "Add meme",
  },
  {
    path: "/contact",
    name: "Contact",
  },
  {
    path: "/login",
    name: "Login",
  },
];
