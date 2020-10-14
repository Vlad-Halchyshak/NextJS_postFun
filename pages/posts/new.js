import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import Head from "next/Head";
import { Layout } from "../../components/Layout";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {  setPost } from "../../redux/reducers";


const Component = styled.div`
  margin-top: 70px;
`;

export default function createNewPost() {
  const linkClick = () => {
    Router.push("/");
  };
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onClick = () => {
    const NewPost = [
      {
        id: `${Math.floor(Math.random() * (10)) }`,
        title: title,
        body: body,
      },
    ];
    setTitle('')
    setBody('')
    dispatch(setPost(NewPost))
  };

  return (
    <Component>
      <div>
        <Layout>
          <Head>
            <title>Create new post</title>
          </Head>
          <div>
            <input
              type="text"
              placeholder=" title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <hr />
            <input
              type="text"
              placeholder="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <button onClick={onClick}>Send post</button>
          </div>
          <button onClick={linkClick}>Back</button>
        </Layout>
      </div>
    </Component>
  );
}
