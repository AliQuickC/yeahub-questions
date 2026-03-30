import { createBrowserRouter, replace } from 'react-router-dom';
import { DetailedAnswerPage } from '../pages/detailed-answer';
import { QuestionsPage } from '../pages/questions';
import BaseLayout from './layout/BaseLayout';
import { NotFound } from '../pages/notfound';

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        index: true,
        loader: () => replace('/questions'),
      },
      { path: '/questions', element: <QuestionsPage /> },
      { path: '/questions/:id', element: <DetailedAnswerPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
