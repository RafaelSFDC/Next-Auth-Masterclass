import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/LoginButton";

const font = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-sky-700">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-5xl font-bold text-white drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white-lg">A next auth boilerplate</p>

        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
