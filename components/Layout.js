import React from 'react'
import Link from 'next/Link'
import styled from 'styled-components'

const Container = styled.div`
position: fixed;
height: 60px;
left: 0;
top: 0;
right: 0;
display: flex;
justify-content: flex-start;
align-items: center;

{
  nav a {
    padding: 20px;
  }
}
`

export function Layout({ children }) {
  return (
    <>
      <Container>
        <div>
          <nav>
            <Link href={"/posts/:postId"}>
              <a> Post page</a>
            </Link>
           
            <Link href={"/posts/new"}>
              <a>Create Post page</a>
            </Link>
          </nav>
        </div>
      </Container>
      <main>{children}</main>
    </>
  );
}