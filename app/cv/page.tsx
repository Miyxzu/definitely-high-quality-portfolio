import { Button } from "@/components/ui/button";

const CV_PATH = "/definitely-high-quality-portfolio/Example_Used_CV.pdf";

export default function Cv() {
  return (
    <div className="">
      <main>
        <div className="m-4 xl:ml-96 flex items-center justify-between gap-4">
          <h1 className="text-3xl font-bold">CV</h1>
          <Button asChild variant="outline">
            <a href={CV_PATH} download>
              Download PDF
            </a>
          </Button>
        </div>

        <div className="my-10">
          <div className="border-b border-gray-200 w-full mx-auto max-w-4xl"></div>
        </div>

        <div className="m-4 xl:max-w-6xl xl:mx-auto">
          <iframe
            src={CV_PATH}
            title="CV"
            className="w-full h-[80vh] rounded-lg shadow-lg bg-card"
          />
        </div>
        <div className="my-10">
          <div className="border-b border-gray-200 w-full mx-auto max-w-4xl text-sm">
                      Link to targeted <a href="example_job_advert.pdf" target="_blank" rel="noopener noreferrer" className="underline">Job Listing</a>
          </div>
        </div>
      </main>
    </div>
  );
}
