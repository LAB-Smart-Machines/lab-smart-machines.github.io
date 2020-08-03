import Link from "next/link";
import App from "../components/App.jsx";

export default function Home() {
  return (
    <App>
      <div>
        Hello World.{" "}
        <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
          <a>About</a>
        </Link>
      </div>
    </App>
  );
}
