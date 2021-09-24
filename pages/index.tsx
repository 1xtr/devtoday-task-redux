import MainLayout from '../components/mainLayout'
import { State, wrapper } from '../redux/store'
import { useSelector } from 'react-redux'
import { NextPage } from 'next'
import { getAllPostsSuccess } from '../redux/actions/actions'
import axios from '../utils/axios-posts'

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    try {
      const response = await axios.get('/posts')
      console.log('response', response.data)
      store.dispatch(getAllPostsSuccess(response.data))
      return {
        props: {
          posts: response.data
        }
      }
    } catch (e) {
      console.log(e)
    }
  }
)

const Home: NextPage<State> = () => {
  const { posts } = useSelector<State, State>((state) => state)
  console.log('Home page', posts)
  return (
    <MainLayout>
      <h1>ALL POSTS</h1>
      <pre>{JSON.stringify(posts)}</pre>
    </MainLayout>
  )
}

// Home.getInitialProps = wrapper.getInitialPageProps(() => () => {
//   const posts = fetchAllPosts()
//   console.log('initial props POSTS:', posts)
//   return posts
// })

export default Home
