import React, { useState } from "react";
import styled from "styled-components";
import PostMenu from "./PostMenu";
import FavoritStar from "../assets/icons/YeStar.svg";
import Star from "../assets/icons/Star.svg";

interface PostCardProps {
  id: number;
  title: string;
  content: string;
  deletePostCard: (id: number) => void;
}

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 40px 16px 16px;
  margin: 16px;
  width: 400px;
  position: relative;
  transition: all 0.3s ease;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const MenuBtn = styled.button`
  position: absolute;
  background: none;
  cursor: pointer;
  border: none;
  font-size: 30px;
  right: 10px;
  top: 6px;
  padding: 5px;
`;
const Favorite = styled.p`
  position: absolute;
  left: 15px;
  top: 0px;
`;

const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  content,
  deletePostCard,
}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [postTitle, setPostTitle] = useState(title);
  const [postContent, setPostContent] = useState(content);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toggleMenu();
  };

  const editPost = () => {
    const newTitle = prompt("Изменить заголовок?", postTitle);
    if (newTitle?.trim()) {
      setPostTitle(newTitle);
    }
    const newContent = prompt("Редактировать абзац?", postContent);
    if (newContent?.trim()) {
      setPostContent(newContent);
    }
    toggleMenu();
  };
  const deletePost = () => {
    if (window.confirm("удалить пост?")) {
      deletePostCard(id);
    }
    toggleMenu();
  };
  return (
    <Card>
      <h1>{postTitle}</h1>
      <Favorite>
        {isFavorite ? <img src={FavoritStar}></img> : <img src={Star}></img>}
      </Favorite>
      <p>{postContent}</p>
      <MenuBtn onClick={toggleMenu}>⋮</MenuBtn>
      {menuVisible && (
        <PostMenu
          onFavorite={toggleFavorite}
          onEdit={editPost}
          onDelete={deletePost}
        />
      )}
    </Card>
  );
};
export default PostCard;
