import HomePage from "../pages/HomePage/HomePage";
import ResultsPage from "../pages/ResultsPage/ResultsPage";


export const privateRoutes = [

]

export const publicRoutes = [
    { path: '/', element: <HomePage /> },
    { path: '/results/', element: <ResultsPage /> },
]