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
        <div className="my-10">
          <div className="border-b border-gray-200 w-full mx-auto max-w-4xl"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
          <div className="">
            <Card className="relative mx-auto w-full max-w-sm pt-0">
              <CardHeader>
                <CardTitle className="mt-5">cs-tutorials</CardTitle>
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
              <CardHeader>
                <CardTitle className="mt-5">KBG Team App</CardTitle>
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
          <div className="">
            <Card className="relative mx-auto w-full max-w-sm pt-0">
              <CardHeader>
                <CardTitle className="mt-5">testing-extension</CardTitle>
                <CardDescription>
                  Browser extension that I had created as a part of coursework for a friend, designed around a to-do list that will prevent usuage of certain websites until the user has completed their tasks.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="https://github.com/Miyxzu/testing-extension">
                    View Repo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
          <div className="">
            <Card className="relative mx-auto w-full max-w-sm pt-0">
              <CardHeader>
                <CardTitle className="mt-5"></CardTitle>
                <CardDescription>

                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="https://github.com/Miyxzu/">
                    View Repo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="">
            <Card className="relative mx-auto w-full max-w-sm pt-0">
              <CardHeader>
                <CardTitle className="mt-5"></CardTitle>
                <CardDescription>

                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="https://github.com/Miyxzu/">
                    View Repo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="">
            <Card className="relative mx-auto w-full max-w-sm pt-0">
              <CardHeader>
                <CardTitle className="mt-5"></CardTitle>
                <CardDescription>

                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="https://github.com/Miyxzu/">
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
