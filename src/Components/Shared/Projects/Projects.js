'use client';
import Project from "@/Components/Ui/Project/Project";
import ProjectData from "@/config/projects.json";

const Projects = () => {
    const { dataList1, dataList2, dataList3 } = ProjectData;

    const filterProjectsByCategory = (category) => {
        switch (category) {
            case 'dataList1':
                return dataList1 || [];
            case 'dataList2':
                return dataList2 || [];
            case 'dataList3':
                return dataList3 || [];
            default:
                return [];
        }
    };

    return (
        <div className="bg-[#082231] -mt-16 pb-20 z-20 projects relative" id="projects">
            <div className='absolute top-0 left-0 h-full w-full opacity-30 !bg-[linear-gradient(#464646_1px,_transparent_1px),_linear-gradient(to_right,_#464646_1px,_#082231_1px)] [background-size:22px_22px]'>
            </div>

            <div className="2xl:max-w-7xl max-w-6xl mx-auto px-4 z-30">
                <div className="text-center pt-20 pb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-popins text-white">Projects</h2>
                    <p className="mt-3 md:mt-3 lg:mt-5 text-base md:text-lg lg:text-xl font-medium font-popins text-gray-400">Here are some of my best projects in web development.</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-x-0 gap-y-5 md:gap-8">
                    {filterProjectsByCategory('dataList1').map((item) => (
                        <Project key={item.id} item={item} />
                    ))}
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-x-0 gap-y-5 md:gap-8 mt-8">
                    {filterProjectsByCategory('dataList2').map((item) => (
                        <Project key={item.id} item={item} />
                    ))}
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-x-0 gap-y-5 md:gap-8 mt-8">
                    {filterProjectsByCategory('dataList3').map((item) => (
                        <Project key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;