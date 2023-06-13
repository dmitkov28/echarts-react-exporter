import { useState, useEffect, useRef } from "react";
import { ImDownload3 } from "react-icons/im"
import { handleDownloadPDF, handleDownloadPNG } from "./exporters";

export default function DownloadChart({ chartRef }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const handleClick = () => {
        setShowDropdown(!showDropdown);
    };


    return (
        <div>

            <button ref={buttonRef} onClick={handleClick} type="button" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                <ImDownload3 className="w-5 h-5" />
            </button>


            {showDropdown &&
                <div ref={dropdownRef} className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm top-10 left-10 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <span onClick={() => handleDownloadPNG(chartRef.current.children[0])} className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">PNG</span>
                        </li>

                        <li>
                            <span onClick={() => handleDownloadPDF(chartRef.current.children[0])} className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">PDF</span>
                        </li>

                    </ul>
                </div>
            }

        </div>
    )
}
