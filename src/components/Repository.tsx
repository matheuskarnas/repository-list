import { DeleteIcon } from "@chakra-ui/icons";
import { Box, HStack } from "@chakra-ui/react";
import axios from "axios";
import { RepositoryDataProps } from "../pages";

type RepositoryProps = {
    key: string;
    repository: RepositoryDataProps
}

export const Repository = ({ repository }: RepositoryProps) => {

    async function deleteRepository(id: string) {
        axios.post(`/api/deleteRepository`, { id })
    }

    return (
        <HStack border={'1px'} m={'0.5px 0'} >
            <Box>
                <h1>{repository.title}</h1>
                <h2>{repository.url}</h2>
            </Box>
            <DeleteIcon
                h={7}
                w={7}
                ml={'auto'}
                onClick={() => deleteRepository(repository.id)}
            />
        </HStack>
    )
}
