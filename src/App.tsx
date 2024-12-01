import React, { useState } from "react";
import styled from "styled-components";
import PostCard from "./components/PostCard";

interface Post {
  id: number;
  title: string;
  content: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  background: linear-gradient(to top, #3bff63, #0053e2);
  border-radius: 16px;
  box-shadow: 0 5px 11px rgba(0, 0, 0, 0.4);
`;

const Title = styled.h1`
  font-size: 3em;
  color: #ffffff;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  @media (max-width: 768px) {
    font-size: 2.2em;
  }
`;

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "example",
      content:
        "Lorem,  elit. Voluptate dolores harum iure, provident et reprehenderit labore accusantium",
    },
    {
      id: 2,
      title: "second example",
      content: "entium, ratione magnam debitis cupiditate distinctio fugit?",
    },
  ]);

  const deletePostCard = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <Container>
      <Title>Мои посты</Title>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          deletePostCard={deletePostCard}
        />
      ))}
    </Container>
  );
};

export default App;
