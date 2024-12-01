import React, { useState } from "react";
import styled from "styled-components";

interface PostMenuProps {
  onFavorite: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const MenuContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 18px;
  background: #ffffff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  width: 30%;

  @media (max-width: 768px) {
    right: 0;
  }
`;
const MenuItem = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  width: 100%;
  text-align: left;

  &:hover {
    background-color: #fff9cf;
    border-radius: 5px;
    border: #c9c5aa;
  }
`;

const PostMenu: React.FC<PostMenuProps> = ({
  onFavorite,
  onEdit,
  onDelete,
}) => {
  return (
    <MenuContainer>
      <MenuItem onClick={onEdit}>Изменить</MenuItem>
      <MenuItem onClick={onDelete}>Удалить</MenuItem>
      <MenuItem onClick={onFavorite}>В избранное</MenuItem>
    </MenuContainer>
  );
};
export default PostMenu;
