import { useRouter } from 'next/router'
import Router from 'next/router'
import Head from 'next/Head'
import { Layout } from '../../components/Layout'
import styled from 'styled-components'
import { getPagePost } from '../../redux/reducers'
import { useDispatch, useSelector } from 'react-redux'

const Container = styled.div`
margin-top: 20px;
`

export default function Post() {
  const router = useRouter()
  const dispatch = useDispatch()
  const pagePost = useSelector((state) => state.fetchedData);
  console.log(pagePost)
  
  /* const postId = match.params.postId; */
  
  React.useEffect(() => {
    
  dispatch(getPagePost());
  }, [])
  
  
  
  const linkClick = () => {
    Router.push('/')
  }
  return (
    <Layout>
      <Head>
        <title>Post Page</title>
      </Head>
      <Container>
        <h1>Post {router.query.id}</h1>
        
        {/* {Object.entries(pagePost).map((i) => (
          <ul>
            <li>{i.data.id}</li>
            
          </ul>
        ))} */}
        <div>
          <button onClick={linkClick}>Back</button>
        </div>
      </Container>
    </Layout>
  );
}