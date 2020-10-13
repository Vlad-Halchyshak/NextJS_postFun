import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Layout } from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getPagePost } from '../redux/reducers'
import styled from 'styled-components'
import { Router, useRouter } from 'next/router'

const Container = styled.div`
margin: 100px ;
ul {
  list-style: none;
  cursor: pointer
}
`

export default function Index() {
const fetched = useSelector(state => state.fetchedData.data)
  const router = useRouter()
  
  const RouteToPagePost = () => {
    Router.push('/posts/postId:userId')
  }
const dispatch = useDispatch()
  
  React.useEffect(() => {
  dispatch(getPagePost());
}, [])

  return (
    <Container>
      <div>
        <Layout>
          <Head>
            <title> Main Last Post Page</title>
            <meta charSet="utf-8" />
          </Head>
          <h2>Latest Post Page</h2>
        </Layout>
        {fetched.map((i) => (
          <Link href={"/posts/postId"}>
            <ul key={i}>
              <li>{i.id}</li>
              <li>{i.title}</li>
              <li>{i.body}</li>
            </ul>
          </Link>
        ))}
      </div>
    </Container>
  );
}
