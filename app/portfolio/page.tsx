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
        <div className="m-4 xl:ml-96">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <h2 className="text-xl mt-4">
            Repos featuring current/past projects that I have worked on
          </h2>
        </div>
        <div className="my-10">
          <div className="border-b border-gray-200 w-full mx-auto max-w-4xl"></div>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-3 m-4 xl:m-3">
          <div className="flex xl:ml-44">
            <Card className="group relative mx-auto w-full max-w-sm xl:max-w-md pt-0 h-full flex flex-col transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(58,54,84,0.45)]">
              <CardHeader className="grow">
                <CardTitle className="mt-5">cs-tutorials</CardTitle>
                <CardDescription>
                  Repo with a variety of works that I have done in the past.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full transition-all duration-200 hover:bg-secondary-foreground hover:text-secondary hover:border hover:border-secondary-foreground" asChild>
                  <Link href="https://github.com/Miyxzu/cs-tutorials">
                    View Repo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex">
            <Card className="group relative mx-auto w-full max-w-sm xl:max-w-md pt-0 h-full flex flex-col transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(58,54,84,0.45)]">
              <CardHeader className="grow">
                <CardTitle className="mt-5">KBG Team App</CardTitle>
                <CardDescription>
                  Small app designed to randomize team assignments for a game.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full transition-all duration-200 hover:bg-secondary-foreground hover:text-secondary hover:border hover:border-secondary-foreground" asChild>
                  <Link href="https://github.com/Miyxzu/KBGTeamApp">
                    View Repo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex xl:mr-44">
            <Card className="group relative mx-auto w-full max-w-sm xl:max-w-md pt-0 h-full flex flex-col transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(58,54,84,0.45)]">
              <CardHeader className="grow">
                <CardTitle className="mt-5">JavaFX Wordle</CardTitle>
                <CardDescription>
                  A Wordle clone designed using JavaFX (Broken).
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full transition-all duration-200 hover:bg-secondary-foreground hover:text-secondary hover:border hover:border-secondary-foreground" asChild>
                  <Link href="https://github.com/Miyxzu/finalproj">
                    View Repo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4 xl:gap-3 xl:m-3 pt-2">
          <div className="flex xl:ml-44">
            <Card className="group relative mx-auto w-full max-w-sm xl:max-w-md pt-0 h-full flex flex-col transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(58,54,84,0.45)]">
              <CardHeader className="grow">
                <CardTitle className="mt-5">Project Nova</CardTitle>
                <CardDescription>
                  A Battleship-esque game that is designed around finding marine
                  life in the ocean to win the game.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full transition-all duration-200 hover:bg-secondary-foreground hover:text-secondary hover:border hover:border-secondary-foreground" asChild>
                  <Link href="https://github.com/Miyxzu/cs-tutorials/tree/main/Java/CS11002/assessmentFinal">
                    View Repo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex">
            <Card className="group relative mx-auto w-full max-w-sm xl:max-w-md pt-0 h-full flex flex-col transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(58,54,84,0.45)]">
              <CardHeader className="grow">
                <CardTitle className="mt-5">Squash Game</CardTitle>
                <CardDescription>
                  Simple Cookie Clicker replica that uses an actual squash and a
                  RP Pico as the interface for the game.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full transition-all duration-200 hover:bg-secondary-foreground hover:text-secondary hover:border hover:border-secondary-foreground" asChild>
                  <Link href="https://github.com/Miyxzu/cs-tutorials/tree/main/py/CS12001/hell">
                    View Repo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex xl:mr-44">
            <Card className="group relative mx-auto w-full max-w-sm xl:max-w-md pt-0 h-full flex flex-col transition-shadow duration-300 hover:shadow-[0_0_24px_4px_rgba(58,54,84,0.45)]">
              <CardHeader className="grow">
                <CardTitle className="mt-5">testing-extension</CardTitle>
                <CardDescription>
                  Browser extension designed around a to-do list that will
                  prevent usuage of certain websites until the user has
                  completed their tasks.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full transition-all duration-200 hover:bg-secondary-foreground hover:text-secondary hover:border hover:border-secondary-foreground" asChild>
                  <Link href="https://github.com/Miyxzu/testing-extension">
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
