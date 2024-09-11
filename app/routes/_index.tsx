import type { MetaFunction } from "@remix-run/node";
import Cardbook from "./card";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="p-3 m-3">
      <Cardbook/>
    </div>
  );
}
