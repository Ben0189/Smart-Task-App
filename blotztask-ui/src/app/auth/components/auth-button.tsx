"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function AuthButton() {
  const pathname = usePathname();
  // Determine button text and target link
  const isLoginPage = pathname.includes("signin");
  const buttonText = isLoginPage ? "Sign Up" : "Sign In";
  const buttonLink = isLoginPage ? "/auth/signup" : "/auth/signin";

  return (
    <Link
      href={buttonLink}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "absolute right-4 top-4 md:right-8 md:top-8"
      )}
    >
      {buttonText}
    </Link>
  );
}
