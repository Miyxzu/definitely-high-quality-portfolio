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

        <div className="mx-4 mt-4 mb-4 xl:max-w-6xl xl:mx-auto">
          <Card className="relative w-full">
            <CardHeader>
              <CardTitle>about</CardTitle>
              <CardDescription>
                I'm a 19 year old university student studying Computer Science at the University of Dundee. I have a passion for Esports and competitve gameplay. Always striving to improve my aim and mechanics in shooters to become a better player.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mx-4 mb-4 xl:max-w-6xl xl:mx-auto">
        <div className="grid grid-cols-2 gap-4 justify-items-center">
          <Card className="relative w-full">
            <CardHeader>
              <CardTitle>Skill</CardTitle>
              <CardDescription>
                I have experience in a variety of programming languages, including Python, Java, C#. I have a strong understanding of data structures and algorithms, and I am always eager to learn new technologies and frameworks. I am also undertaking studies in cybersecurity, mainly SoC and Pentesting practices.
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
        
        <div className="mx-4 mb-4 xl:max-w-6xl xl:mx-auto">
        <div className="grid grid-cols-2 gap-4 justify-items-center">
          <Card className="relative w-full">
            <CardHeader>
              <CardTitle>Transferable Skill</CardTitle>
              <CardDescription>
                I am a quick learner with strong problem-solving skills. I am able to adapt to new situations and work effectively both independently and as part of a team. I am also resillient and able to handle challenges with a positive attitude.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="relative w-full">
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>
                You can reach me via email at example@gmail.com or connect with me on LinkedIn. I am always open to discussing potential opportunities and collaborations.
              </CardDescription>
            </CardHeader>
          </Card>
         </div>
        </div>
      </main>
    </div>
  );
}
