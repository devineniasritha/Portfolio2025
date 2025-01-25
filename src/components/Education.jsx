import { FiMapPin } from "react-icons/fi";
import { Educationconst } from "../constants";
const Education = () => {
  return (
      <div id="education" className="border-b border-neutral-900 pb-4 relative">
          <h1 className="my-20 text-center text-4xl">Education</h1>
          <div className="relative">
              {Educationconst.map((edu,index)=>(
              <div key={index} className="mb-8 lg:justify-center relative">
              <div className="absolute top-0 right-4 text-lg tracking-tight rounded bg-neutral-800 px-2 py-1 text-1xl font-medium text-blue-300">
                  Grade : {edu.score}
              </div>

              <div className="mb-8 flex flex-wrap lg:justify-center">
                  <div className="w-full lg:w-1/4">
                      <p className="mb-2 text-lg text-neutral-400 lg:mr-4">{edu.duration}</p>
                  </div>
                  <div className="w-full max-w-xl lg:w-3/4">
                      <h6 className="mb-2 font-semibold">
                          <span className="text-xl font-light tracking-tight text-purple-50">
                              {edu.name}
                          </span>
                      </h6>
                      <p className="text-base text-neutral-400 mb-2">
                    {edu.degree}
                </p>

                <p className="text-sm text-neutral-400 mb-4 flex items-center">
              <FiMapPin className="mr-2 h-5 w-5 text-blue-300" />
              <span className="font-medium">{edu.location}</span>
            </p>
                      <div className="flex flex-wrap gap-2 mt-5 mr-10">
                          {edu.skills.map((skill, index) => (
                              <span
                                  key={index}
                                  className="rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-blue-300"
                              >
                                  {skill}
                              </span>
                          ))}
                      </div>
                  </div>
              </div>
              </div>
              ))}
          </div>
      </div>
  );
};

export default Education;
