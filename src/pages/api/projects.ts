// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData } from "@/utils/libs/firebase/services";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects = await retrieveData("projects");

  res.status(200).json({ status: true, statusCode: 200, data: projects });
}
