import sqlImg from "../../../assets/images/tools/sql.png";
import excelImg from "../../../assets/images/tools/excel.png";
import tableauImg from "../../../assets/images/tools/tableau.jpg";
import pythonImg from "../../../assets/images/tools/python.jpg";
import lookerStudioImg from "../../../assets/images/tools/looker-studio.jpg";
import powerbiImg from "../../../assets/images/tools/powerbi.png";
import googleDataStudioImg from "../../../assets/images/tools/google-data-studio.jpeg";
import SingleTool from "./Others/SingleTool";

const Tools = () => {
    const tools = [
        {
            title: "SQL",
            coverImg: sqlImg,
        },
        {
            title: "Excel",
            coverImg: excelImg,
        },
        {
            title: "Tableau",
            coverImg: tableauImg,
        },
        {
            title: "Python",
            coverImg: pythonImg,
        },
        {
            title: "Looker Studio",
            coverImg: lookerStudioImg,
        },
        {
            title: "Power BI",
            coverImg: powerbiImg,
        },
        {
            title: "Google Data Studio",
            coverImg: googleDataStudioImg,
        },
    ]

    return (
        <div id="tools" className="bg-red-200 py-20">
            <div className="w-11/12 max-w-[1440px] mx-auto">
                <h4 className="font-semibold mb-10 underline text-center">Tools</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
                    {
                        tools.map((tool, i) =>
                            <SingleTool
                                key={i}
                                tool={tool}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default Tools