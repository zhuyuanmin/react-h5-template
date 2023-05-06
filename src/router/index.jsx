import { createBrowserRouter } from "react-router-dom";
import Demo from '@/pages/demo'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Demo />
  },
  {
    path: "*",
    element: <div>404 Not Found</div>
  }
]);

export default router;