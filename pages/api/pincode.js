import pincodes from "../../jsonData/pincodes.json";
export default function handler(req, res) {
  res.status(200).json(pincodes);
}
