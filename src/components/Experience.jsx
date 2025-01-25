import { EXPERIENCES } from "../constants"

const Experience=()=>{
    return(
        <div id="experience" className="border-b border-neutral-900 pb-4 scroll-mt-20">
            <h1 className="my-20 text-center text-4xl">Work Experience</h1>
            <div>
                <div className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <p className="mb-2 text-lg text-neutral-400 lg:mr-4">2023 - Present</p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                            <span className="text-xl font-light tracking-tight text-purple-50">
                            Associate Software Engineer (Analyst I) - Huron
                            </span>
                        </h6>
                        <p className="mb-4 text-neutral-400">
                            <ul className="mb-4 list-disc pl-5 text-neutral-400">
                            <li>Developed CRUD operations for both shared modules and internal
                                                                systems, focusing on efficient data retrieval and manipulation. Wrote
                                                                optimized SQL queries and efficient code to ensure high performance
                                                                and smooth data handling.</li>
                                                                <li>Configured and implemented roles and rights to regulate user access,
                                                                ensuring each user was granted rights only to the data they were
                                                                authorized to view.</li>
                                                                <li>Debugged issues using AWS Lambda and CloudWatch logs, tracking
                                                                errors and resolving them.,</li>
                                                                <li>Developed validations, taking edge cases into account and
                                                                implementing error handling.</li>
                                                                <li>Worked on the React frontend, implementing dynamic and
                                                                user-friendly interfaces to enhance the overall user experience.</li>
                            </ul>
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">{["React.js", "ASP.NET", "PostGreSql","AWS"].map((skill, index) => (
                                <span key={index} className="rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-blue-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Experience