import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { body } = req;
  const any = { gender: 1, name: 'teste', birthday: null}
  return res.status(200).json({ body, any});
}
