import { Box } from "@chakra-ui/react"
import { RepositoriesProps, RepositoryDataProps } from "../pages"
import { Repository } from "./Repository"


export const Repositories = ({ repositories }: RepositoriesProps) => {
    
    return (
        <Box>
            <h1>Ropositórios: {repositories.length}</h1>

            {repositories.map((repository ) => {
                console.log(typeof repository.id);
                return (
                    <Repository key={repository.id} repository={repository} />
                )
            })}

        </Box>
    )
}