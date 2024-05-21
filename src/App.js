import ClientDetails from "./components/ClientDetails";
import ClientInfo from "./components/ClientInfo";
import ClientList from "./components/ClientList";
import DeleteClient from "./components/DeleteClient";
import EditClient from "./components/EditClient";
import RootLayout from "./components/RootLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
  },
  {
    path: '/clientInfo',
    element: <ClientInfo/>,
    children:[
      {
        path: '/clientInfo',
        element: <ClientDetails/>
      },
      {
        path: '/clientInfo/clientList',
        element: <ClientList/>
      },
      {
        path: '/clientInfo/clientList/edit/:clientId',
        element: <EditClient/>
      },
      {
        path: '/clientInfo/clientList/delete/:clientId',
        element: <DeleteClient/>
      },
    ]
  }
]);


function App() {
  return <RouterProvider router={router}/>
}

export default App;
