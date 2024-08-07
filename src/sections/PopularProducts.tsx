import ProductCard from "../components/ProductCard"

import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold font-palanquin">
          Our
          <span className="text-coral-red"> Popular </span>
          Products
        </h2>
        <p className="text-slate-gray md:max-w-lg">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>

      <div className="grid lg:grid-cols-4 md:-grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>

    </section>
  )
}

export default PopularProducts
