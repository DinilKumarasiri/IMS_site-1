import { Fjalla_One, Karla, Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const fjalla = Fjalla_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  fallback: ["poppins"],
});
