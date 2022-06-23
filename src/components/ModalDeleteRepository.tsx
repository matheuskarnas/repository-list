import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { RepositoryDataProps } from "../pages";

type ModalDeleteRepositoryProps = {
    onOpen: () => void;
    onClose: () => void;
    isOpen: boolean;
    repository: RepositoryDataProps
}

export const ModalDeleteRepository = ({ onOpen, isOpen, onClose, repository }: ModalDeleteRepositoryProps) => {
    const router = useRouter()
    const reloadPage = () => router.reload()
    async function deleteRepository(id: string) {
        await axios.post(`/api/deleteRepository`, { id }).then(onClose).then(reloadPage)

    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg='gray.800' color='whiteAlpha.800'>
                    <ModalHeader>Deseja realmente excluir o repositório</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <h1>Nome do repositório: {repository.title}</h1>
                        <Link href={repository.url}>
                            <a target='_blank' >{repository.url}</a>
                        </Link>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => deleteRepository(repository.id)}>
                            Excluir
                        </Button>
                        <Button onClick={onClose} variant='ghost'>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}