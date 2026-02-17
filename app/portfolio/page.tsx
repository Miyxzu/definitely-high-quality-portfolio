import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function portfolio() {
  return (
    <div className="">
      <main>
        <div className="m-4">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <h2 className="text-xl mt-4">
            Repos of current/past projects that I have worked on
          </h2>
        </div>
        <div className="grid grid-flow-col grid-rows-3">
          <div className="">
            <Card className="relative mx-auto w-full max-w-sm pt-0">
              <div className="" />
              <CardHeader>
                <CardTitle>cs-tutorials</CardTitle>
                <CardDescription>
                  Repo with a variety of works that I have done in the past.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="https://github.com/Miyxzu/cs-tutorials">
                    View Repo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="">
            <Card className="relative mx-auto w-full max-w-sm pt-0">
              <div className="" />
              <CardHeader>
                <CardTitle>KBG Team App</CardTitle>
                <CardDescription>
                  Small app designed to randomize team assignments for a game.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="https://github.com/Miyxzu/KBGTeamApp">
                    View Repo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
