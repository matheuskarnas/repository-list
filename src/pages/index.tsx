import { Box } from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { InputAddNewRepository } from '../components/InputAddNewRepository'
import { InputFind } from '../components/InputFind'
import { Repositories } from '../components/Repositories'
import client from '../graphql/client'
import { GET_ALL_REPOSITORIES } from '../graphql/queries'

export type RepositoryDataProps = {
  id: string;
  title: string;
  url: string;
}

export type RepositoriesProps = {
  repositories: RepositoryDataProps[]
}

function Home({ repositories }: RepositoriesProps) {
  const [inputFindValue, setInputFindValue] = useState('')
  const [filteredRepositories, setfilteredRepositories] = useState<RepositoryDataProps[]>([])

  const getInputValue = (name: string) => { setInputFindValue(name) }

  useEffect(() => {
    if (repositories.length <= 0) { return }

    if (inputFindValue !== '') {
      const arrTemporary: RepositoryDataProps[] = []

      repositories.map(repository => {
        if (repository.title.search(inputFindValue) >= 0)
          arrTemporary.push(repository)
      })
      setfilteredRepositories(arrTemporary)
    }
  }, [inputFindValue])


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box >

        <Header />
        <InputFind getInputValue={getInputValue} />
        {inputFindValue === '' ?
          <Repositories repositories={repositories} />
          : <Repositories repositories={filteredRepositories} />
        }
        <InputAddNewRepository />
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { repositories } = await client.request(GET_ALL_REPOSITORIES)

  console.log(repositories)
  return { props: { repositories } }
}

export default Home
