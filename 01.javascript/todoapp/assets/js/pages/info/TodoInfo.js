// 할일 등록
import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";

const TodoInfo = async function ({ _id } = {}) {
  try {
    const response = await fetch(`http://localhost:33088/api/todolist/${_id}`);

    if (response.ok) {
      const data = await response.json();
      const todoInfo = data.item;
      const todoTitle = todoInfo.title;
      const todoContent = todoInfo.content;
      const isDone = todoInfo.done;
      const todoCreated = todoInfo.createdAt;
      const todoUpdated = todoInfo.updatedAt;

      const page = document.createElement("div");
      page.setAttribute("id", "page");

      const content = document.createElement("div");
      const list = document.createElement("ul");

      const attributes = [
        { label: "제목", value: todoTitle },
        { label: "내용", value: todoContent },
        { label: "완료 여부", value: isDone ? "완료" : "미완료" },
        { label: "생성일", value: todoCreated },
        { label: "수정일", value: todoUpdated },
      ];

      attributes.forEach((attribute) => {
        const listItem = document.createElement("li");
        const text = document.createTextNode(
          `${attribute.label}: ${attribute.value}`
        );
        listItem.appendChild(text);
        list.appendChild(listItem);
      });
      const text = document.createTextNode(`_id=${_id} 상세 조회 화면`);
      content.appendChild(text);

      page.appendChild(Header("TODO App 상세 조회"));
      page.appendChild(content);
      content.appendChild(list);
      page.appendChild(Footer());

      return page;
    } else {
      console.error("API 요청 실패");
    }
  } catch (error) {
    console.error("error");
  }
};

export default TodoInfo;
