import { Box } from "@chakra-ui/react";
import { RepositoryDataProps } from "../pages";

type RepositoryProps = { 
    key: string;
    repository: RepositoryDataProps 
}

export const Repository = ({ repository }: RepositoryProps) => (
    <Box>
        <h1>{repository.title}</h1>
        <h2>{repository.url}</h2>
    </Box>
)