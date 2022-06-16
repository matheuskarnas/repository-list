import { DeleteIcon } from "@chakra-ui/icons";
import { Box, HStack, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { RepositoryDataProps } from "../pages";
import { ModalDeleteRepository } from "./ModalDeleteRepository";

type RepositoryProps = {
    key: string;
    repository: RepositoryDataProps
}

export const Repository = ({ repository }: RepositoryProps) => {
    const { onOpen, isOpen, onClose } = useDisclosure()

    return (
        <>
            <ModalDeleteRepository repository={repository} onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
            <HStack border={'1px'} m={'0.5px 0'} >

                <Box>
                    <h1>{repository.title}</h1>
                    <Link href={repository.url}>
                        <a target='_blank' >{repository.url}</a>
                    </Link>
                </Box>

                <DeleteIcon
                    h={7}
                    w={7}
                    ml={'auto'}
                    onClick={onOpen}
                />
            </HStack>
        </>
    )
}
