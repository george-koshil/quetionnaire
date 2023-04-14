import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../components/MainLayout";
import QuestionnaireResultPage from "../pages/QuestionnaireResultPage";
import QuestionnairePage from "../pages/QuestionnairePage";
import SendEmailPage from "../pages/SendEmailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/questionnaire" />
      },
      {
        path: "/questionnaire",
        Component: QuestionnairePage
      },
      {
        path: "/questionnaire-result",
        Component: QuestionnaireResultPage
      },
      {
        path: "/send-email",
        Component: SendEmailPage
      },
    ],
  },
]);