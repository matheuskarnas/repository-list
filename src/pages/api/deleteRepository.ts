import { gql } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next/types";
import client from "../../graphql/client";

const deleteRepository = async (req: NextApiRequest, res: NextApiResponse) => {
  const variable: { id: string } = req.body;

  const DELETE_REPOSITORY = gql`
    mutation deleteRepository($id: ID!) {
      deleteRepository(where: { id: $id }) {
        id
      }
    }
  `;

  client
    .request(DELETE_REPOSITORY, variable)
    .then((response) => console.log("delete esponse", response));

  res.status(200).json({ success: true });
};

export default deleteRepository;
