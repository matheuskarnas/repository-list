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
        <InputGroup maxW={"80%"} size='md'>
            <Input
                pr='4.5rem'
                type={'text'}
                placeholder='Enter password'
                onChange={(e) => newFindName(e.target.value)}
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={(e) => console.log(e.target)}>
                    buscar
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}