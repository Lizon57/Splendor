import { Provider } from "react-redux"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { routes } from "./routes"
import { store } from "./store/store"


export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {routes.map(route => {
            return <Route key={route.path} path={route.path} element={<route.element />} />
          })}
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}