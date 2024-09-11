import { SetStateAction, useState } from "react";
import { book } from "./data";

export default function Cardbook() {

    const [filter, setFilter] = useState("all");
    const fBooks = () => {
        if (filter === "bestseller") {
            return book.filter((data) => data.Bestseller);
        }
        if (filter === "suggestions") {
            return book.filter((data) => data.Suggestions);
        }
        return book;
    };

    const handleFilterChange = (active) => {
        setFilter(active);
    };

  return (
        <div className="flex flex-col items-center">
            <div className="mb-4">
                <div className="inline-flex">
                    <button
                        className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l`}
                        onClick={() => handleFilterChange("bestseller")}
                    >
                        ขายดี
                    </button>
                    <button
                        className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r`}
                        onClick={() => handleFilterChange("suggestions")}
                    >
                        แนะนำ
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {fBooks().map((data) => (
                    <div key={data.Code} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                        <div className="px-6 py-4">
                            <img src={data.Cover} alt={data.Title} className="w-full h-auto" />
                            <div className="font-bold text-xl mb-2">{data.Title}</div>
                            <p className="text-gray-700 text-base mb-4">{data.Description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{data.Author}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{data.Pubishing}</span>
                            {data.Bestseller && <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ขายดี</span>}
                            {data.Suggestions && <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#แนะนำ</span>}
                            <p className="font-bold">
                                ราคา : {data.Price} บาท
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
