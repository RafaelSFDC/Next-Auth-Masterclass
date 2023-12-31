"use client";

import { useRouter } from "next/navigation";

type LoginButtonProps = {
  children: React.ReactNode;
  mode?: string;
  asChild?: boolean;
  className?: string;
};
const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
  className,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };
  if (mode === "redirect") {
  }

  if (mode === "modal") {
    return (
      <span
        onClick={() => {
          console.log("LoginButton clicked");
        }}
        className="cursor-pointer"
      >
        {children}
      </span>
    );
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
