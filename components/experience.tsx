//The experiences const is the right place for you to change, and add new.
// Feel free to add more professional experience.

const experiences = [
    {
        id:"1",
        period: "2019 - actual",
        title: "Job Title",
        company: "Company Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id:"2",
        period: "2018 - 2019",
        title: "Job Title",
        company: "Company Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id:"3",
        period: "2017 - 2018",
        title: "Job Title",
        company: "Company Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]


export default function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-gray-800 static">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-6xl md:text-6xl font-bold py-20 text-center md:text-center">
          Experience
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {experiences.map((experience, index) => (
          <div>
          <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4" key={experience.id}>
              <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
                {experience.period}
              </h1>
              <h1 className="font-semibold text-xl">{experience.title}</h1>
              <a href="https://vendasta.com" className="text-gray-500">
                {experience.company}
              </a>
              <p className="text-gray-600 dark:text-gray-400 my-2">
                {experience.description}
              </p>
            </div><div className="divider-container flex flex-col items-center -mt-2">
                <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10">
                  <div className="w-4 h-4 bg-blue-300 rounded-full relative z-10 animate-ping"></div>
                </div>
                <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
              </div>
          </div>
      ))}
        </div>
      </div>
    </section>
  );
}
