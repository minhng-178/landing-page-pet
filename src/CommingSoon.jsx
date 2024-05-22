import { Link } from "react-router-dom";

const CommingSoon = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="mb-4 text-5xl font-bold text-orange-500">Coming Soon</h1>
            <p className="text-xl text-gray-700">Xin hãy đợi...</p>

            <Link to="/">
                <button className="px-4 py-2 mt-4 font-semibold text-white bg-orange-500 rounded hover:bg-orange-700-700">
                    Trở về
                </button>
            </Link>
        </div>
    );
};

export default CommingSoon;
