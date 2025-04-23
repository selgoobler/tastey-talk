import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal" />
        <SignUpButton />
      </SignedOut>
      <Button>Button</Button>
      <ModeToggle />
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
