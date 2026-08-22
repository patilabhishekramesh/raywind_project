import { handleEnquiry } from "../server/enquiry.js";

export default async function handler(req, res) {
  await handleEnquiry(req, res, process.env);
}
