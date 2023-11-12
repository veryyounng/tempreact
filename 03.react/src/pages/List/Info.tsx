import instance from "@/api/instance";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Info = () => {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);

  const attributes = [
    { label: "제목", value: title },
    { label: "내용", value: content },
    { label: "완료 여부", value: isDone ? "완료" : "미완료" },
    { label: "생성일", value: todoCreated },
    { label: "수정일", value: todoUpdated },
  ];

  return (
    <div id="page" className="todoInfoWrapper">
      <div className="contentWrapper">
        <ul className="todoListWrapper">
          <li className="todoItem"></li>
        </ul>
      </div>
    </div>
  );
};
