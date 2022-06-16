import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"

type InputFindProps = {
    getInputValue: (name: string) => void,
}

export const InputFind = ({ getInputValue }: InputFindProps) => {

    let timer: ReturnType<typeof setTimeout>
    const newFindName = (value: string) => {
        if (timer !== undefined) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            getInputValue(value)
        }, 1000)
    }
    return (
        <Input
            maxW={"80%"} 
            size='md'
            pr='4.5rem'
            type={'text'}
            placeholder='Pesquise um repositório por nome'
            onChange={(e) => newFindName(e.target.value)}
        />

    )
}