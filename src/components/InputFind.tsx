import { HStack, Input } from "@chakra-ui/react"

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
        <HStack justifyContent='center' mt={6}>
            <Input
                w={700}
                size='md'
                px='auto'
                type={'text'}
                placeholder='Pesquise um repositório por nome'
                onChange={(e) => newFindName(e.target.value)}
            />
        </HStack>
    )
}