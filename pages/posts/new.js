import React from "react";
import Router, { useRouter } from "next/router";
import Head from "next/Head";
import { Layout } from "../../components/Layout";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Component = styled.div`
  margin-top: 70px;
`;

export default function createNewPost() {
  const linkClick = () => {
    Router.push("/");
  };
  const dispatch = useDispatch();
  const [state, setState] = React.useState([
    {
      body: "",
    },
  ]);
  const [title, setTitle] = React.useState([
    {
      title: "",
    },
  ]);
  console.log(title);
  const handleForTitle = (e) => {
    setTitle({ title: e.target.value });
  };

  const handleForBody = (e) => {
    setState({ body: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const postContent = () => {
    axios.post("https://simple-blog-api.crew.red/posts", {
      title: title.title,
      body: state.body,
    });
  };
  return (
    <Component>
      <div>
        <Layout>
          <Head>
            <title>Create new post</title>
          </Head>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder=" title"
                value={title.title}
                onChange={handleForTitle}
              />
              <hr />
              <input
                type="text"
                placeholder="message"
                value={state.body}
                onChange={handleForBody}
              />
            </form>
            <button onClick={postContent}>Send post</button>
          </div>
          <button onClick={linkClick}>Back</button>
        </Layout>
      </div>
    </Component>
  );
}
