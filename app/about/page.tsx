import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function about() {
  return (
    <div className="">
      <main>
        <div className="m-4 xl:ml-96">
          <h1 className="text-3xl font-bold">About</h1>
        </div>

        <div className="my-10">
          <div className="border-b border-gray-200 w-full mx-auto max-w-4xl"></div>
        </div>

        <div className="m-4 justify-items-center">
          <Card className="relative w-full xl:max-w-6xl">
            <CardHeader>
              <CardTitle>current</CardTitle>
              <CardDescription>
                I'm a 19 year old university student studying Computer Science at the University of Dundee. I have a passion for Esports and competitve gameplay. Always striving to improve my aim and mechanics in shooters to become a better player.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="xl:max-w-6xl xl:mx-auto">
        <div className="grid grid-cols-2 gap-4 m-4 justify-items-center">
          <Card className="relative w-full">
            <CardHeader>
              <CardTitle>Skill</CardTitle>
              <CardDescription>
                I have experience in a variety of programming languages, including Python, Java, C#. I have a strong understanding of data structures and algorithms, and I am always eager to learn new technologies and frameworks.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="relative w-full">
            <CardHeader>
              <CardTitle>Experience</CardTitle>
              <CardDescription>
                While I don't have any formal work experience, I have done a few personal and academic projects in the past I am always looking for opportunities to gain real-world experience and apply my skills in a professional setting.
              </CardDescription>
            </CardHeader>
          </Card>
         </div>
        </div>
      </main>
    </div>
  );
}
