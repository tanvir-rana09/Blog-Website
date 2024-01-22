import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AddPost, Home, AllPost, Login, Signup, Post ,Authlayout, EditPost} from './components/Index.js'

const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "add-post",
        element: (
          <Authlayout authentication>
            <AddPost />
          </Authlayout>
        )
      },
      {
        path: "all-post",
        element: (
          <Authlayout authentication>
            <AllPost />
          </Authlayout>
        )
      },
      {
        path: "login",
        element: (
          <Authlayout authentication={false}>
            <Login />
          </Authlayout>
        )
      },
      {
        path: "sign-up",
        element: (
          <Authlayout authentication={false}>
            <Signup />
          </Authlayout>
        )
      },
      {
        path: "post/:slug",
        element: (
          <Authlayout authentication>
            <Post />
          </Authlayout>
        )
      },
      {
        path: "edit-post/:slug",
        element: (
          <Authlayout authentication>
            <EditPost />
          </Authlayout>
        )
      },
    ]
  }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
