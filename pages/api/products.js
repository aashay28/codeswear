import products from "../../jsonData/products.json";
export default function handler(req, res) {
  res.status(200).json(products.products);
}
