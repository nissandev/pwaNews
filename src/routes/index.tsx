import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "@/components/ui/Layout";

const HomePage = lazy(() => import("@/pages/HomePage"));
const CategoryPage = lazy(() => import("@/pages/CategoryPage"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: ":id",
                element: <CategoryPage />,
            },
        ],
    },
]);
