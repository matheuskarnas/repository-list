import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import client from "../graphql/client"
import { ADD_NEW_REPOSITORY } from "../graphql/queries"

export const InputAddNewRepository = () => {
    const [inputValue, setInputValue] = useState('')
    const [newRepository, setNewRepository] = useState('')
    const [response, setResponse] = useState({})

    const addNewRepository = async (url: string) => {
        await axios.post('/api/createRepository', {
            url,
            title: "newReposirory"
        })
            .then(function (response) {
                console.log('frontend resposne', response);
            })
            .catch(function (error) {
                console.error('frontend error', error);
            });
    }

    return (
        <InputGroup maxW={"80%"} size='md'>
            <Input onChange={(e) => setInputValue(e.target.value)} />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={() => addNewRepository(inputValue)}>
                    Adicionar
                </Button>
            </InputRightElement>
        </InputGroup>

    )
}