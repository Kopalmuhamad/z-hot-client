import MainLayout from "@/components/layout/main-layout"
import DetailArticle from "@/pages/detail-article"
import DetailProductPage from "@/pages/detail-product"
import HomePage from "@/pages/home"
import LocationPage from "@/pages/location"
import ProductsPage from "@/pages/products"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

const routes = createRoutesFromElements(
  <Route>
    <Route element={<MainLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/product/:productId" element={<DetailProductPage />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/article/:articleId" element={<DetailArticle />} />
    </Route>
  </Route>
)

const router = createBrowserRouter(
  routes, {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_skipActionErrorRevalidation: true,
  },
}
)

const Router = () => {

  return <RouterProvider router={router} />
}

export default Router
