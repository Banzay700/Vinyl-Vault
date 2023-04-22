import { Routes, Route } from 'react-router-dom'
import { Layout, Home, Collection, About, NotFoundPage, ProductPage, Checkout } from 'pages'
import { InformationStep } from 'pages/checkout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collection" element={<Collection />} />
          <Route path="collection/:id" element={<ProductPage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="checkout/*" element={<Checkout />}>
          <Route index element={<InformationStep />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
