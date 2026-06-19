import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Pipeline Contractor Insurance | Get a Specialized Quote",
  description:
    "Specialized insurance for oil, gas, and underground pipeline contractors. General liability, workers comp, equipment, and pollution liability — all from one specialist. Licensed in all 50 states.",
};

export default function HomePage() {
  return <HomeClient />;
}
