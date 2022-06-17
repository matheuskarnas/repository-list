//@ts-nocheck
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    VStack
} from "@chakra-ui/react"
import axios from "axios"
import { useFormik } from "formik"
import * as Yup from 'yup'

export const InputAddNewRepository = () => {
    const formik = useFormik({
        initialValues: {
            title: "",
            url: "",
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Um nome é nescessário"),
            url: Yup.string().required("Uma URl é nescessária").url('Isso não é uma URL')
        }),
        onSubmit: (values, actions) => {
            axios.post('/api/createRepository', values)
            actions.resetForm()
        }
    })
    return (
        <VStack
            as="form"
            mx="auto"
            w={{ base: "90%", md: 500 }}
            mt={10}
            justifyContent="center"
            onSubmit={formik.handleSubmit}
        >
            <Heading mb={5} size="md">Adicionar novo Repositório</Heading>

            <FormControl isInvalid={formik.errors.title && formik.touched.title}>
                <FormLabel>Nome do repositório</FormLabel>
                <Input
                    name='title'
                    placeholder="Nome do repositório"
                    {...formik.getFieldProps('title')}
                />
                <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={formik.errors.url && formik.touched.url}>
                <FormLabel size={'md'}>Link do repositório</FormLabel>
                <Input
                    name='url'
                    placeholder="Link do repositório"
                    {...formik.getFieldProps('url')}
                />
                <FormErrorMessage>{formik.errors.url}</FormErrorMessage>
            </FormControl>

            <Button
                type="submit"
                variant="outline"
                colorScheme="teal"
            >
                Adicionar novo Repositório
            </Button>
        </VStack>
    )
}