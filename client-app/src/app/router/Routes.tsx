import { createBrowserRouter, RouteObject } from "react-router-dom";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityDetail from "../../features/activities/details/ActitvityDetail";
import ActivityForm from "../../features/activities/form/ActivityForm";
import App from "../layout/App";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'activities', element: <ActivityDashboard />
            },
            {
                path: 'createActivity', element: <ActivityForm />
            },
            {
                path: 'activities/:id', element: <ActivityDetail key='create' />
            },
            {
                path: 'manage/:id', element: <ActivityForm key='manage' />
            },
        ]
    },
];

export const router = createBrowserRouter(routes);