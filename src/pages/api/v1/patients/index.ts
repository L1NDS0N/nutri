import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { body } = req;
  console.log(body);
  return res.status(200).json({ body });
}
