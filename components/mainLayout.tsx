import styled from 'styled-components'
import Link from 'next/link'
import { IMainLayoutChildren } from '../interfaces/mainLayoutChildren'

const TopMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;
  color: #EAD7C7;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1rem;
  background-color: #157575;
  box-shadow: 0 0 5px 0;
  padding: 1rem calc(50vw - 450px);
;
`

const Main = styled.main`
  margin-top: 50px;
  padding: 0 calc(50vw - 450px);
  background-color: antiquewhite;
`


const MainLayout = ({children}: IMainLayoutChildren) => {
  return (
    <>
      <TopMenu>
        <Link href={'/'}><a>Posts</a></Link>
        <Link href={'/create'}><a>Add post</a></Link>
      </TopMenu>
      <Main>
        {children}
      </Main>

    </>
  )
}

export default MainLayout
