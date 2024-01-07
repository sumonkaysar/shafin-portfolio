import sqlImg from "../../../assets/images/tools/sql.png";
import excelImg from "../../../assets/images/tools/excel.png";
import tableauImg from "../../../assets/images/tools/tableau.jpg";
import pythonImg from "../../../assets/images/tools/python.jpg";
import lookerStudioImg from "../../../assets/images/tools/looker-studio.jpg";
import powerbiImg from "../../../assets/images/tools/powerbi.png";
import googleDataStudioImg from "../../../assets/images/tools/google-data-studio.jpeg";
import SingleTool from "./Others/SingleTool";
import { ScrollingContext } from "../../../Contexts/ScrollingContext";
import { useContext } from "react";

const Tools = () => {
    const { toolsRef } = useContext(ScrollingContext);

    const tools = [
        {
            id: 1,
            title: "SQL",
            coverImg: sqlImg,
        },
        {
            id: 2,
            title: "Excel",
            coverImg: excelImg,
        },
        {
            id: 3,
            title: "Tableau",
            coverImg: tableauImg,
        },
        {
            id: 4,
            title: "Python",
            coverImg: pythonImg,
        },
        {
            id: 5,
            title: "Looker Studio",
            coverImg: lookerStudioImg,
        },
        {
            id: 6,
            title: "Power BI",
            coverImg: powerbiImg,
        },
        {
            id: 7,
            title: "Google Data Studio",
            coverImg: googleDataStudioImg,
        },
    ]

    return (
        <div ref={toolsRef} id="tools" className="bg-red-200 py-20">
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