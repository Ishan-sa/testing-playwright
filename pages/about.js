import { useRouter } from "next/router";

export default function about() {
  const router = useRouter();
  return (
    <>
      <h1>About</h1>
      <button onClick={() => router.push("/")}>Go Back</button>
    </>
  );
}
