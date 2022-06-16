import { gql } from "graphql-request";
import { NextApiRequest, NextApiResponse } from "next/types";
import client from "../../graphql/client";

const createRepository = async (req: NextApiRequest, res: NextApiResponse) => {
  const variables: { title: string; url: string } = req.body;

  const mutation = gql`
    mutation addNewRepository($url: String!, $title: String) {
      createRepository(data: { url: $url, title: $title }) {
        id
      }
    }
  `;

  await client
    .request(mutation, variables)
    .then((res) => console.log("Response from cms", res));

  //   console.log("Backend", variables);

  res.status(200).json({ success: true });
};

export default createRepository;
