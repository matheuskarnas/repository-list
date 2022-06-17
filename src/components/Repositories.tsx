import { Heading, VStack } from "@chakra-ui/react"
import { RepositoriesProps } from "../pages"
import { Repository } from "./Repository"

export const Repositories = ({ repositories }: RepositoriesProps) => {

    return (
        <VStack justifyContent="center" mt={8}>
            <Heading size='md'>Repositórios: {repositories.length}</Heading>

            {repositories.map((repository) => {
                console.log(typeof repository.id);
                return (
                    <Repository key={repository.id} repository={repository} />
                )
            })}
        </VStack>
    )
}