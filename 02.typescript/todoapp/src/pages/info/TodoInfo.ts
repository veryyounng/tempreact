// 할일 등록
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import instance from "../../api/instance";

const TodoInfo = async function (_id: string) {
  const todoMainLink = document.createElement("a");
  todoMainLink.setAttribute("href", "/");
  todoMainLink.setAttribute("title", "뒤로가기");
  todoMainLink.appendChild(document.createTextNode(`<`));
  todoMainLink.classList.add("backspace");

  const page = document.createElement("div");
  page.setAttribute("id", "page");
  page.classList.add("todoInfoWrapper");
  try {
    const response = await instance.get(`/${_id}`);
    const data = response.data;
    const todoInfo = data.item;
    const todoTitle = todoInfo.title;
    const todoContent = todoInfo.content;
    const isDone = todoInfo.done;
    const todoCreated = todoInfo.createdAt;
    const todoUpdated = todoInfo.updatedAt;

    const content = document.createElement("div");
    content.classList.add("contentWrapper");

    const list = document.createElement("ul");
    list.classList.add("todoListWrapper");

    const attributes = [
      { label: "제목", value: todoTitle },
      { label: "내용", value: todoContent },
      { label: "완료 여부", value: isDone ? "완료" : "미완료" },
      { label: "생성일", value: todoCreated },
      { label: "수정일", value: todoUpdated },
    ];

    attributes.forEach((attribute) => {
      const listItem = document.createElement("li");
      listItem.classList.add(`todoItem`);
      const text = document.createTextNode(
        `${attribute.label}: ${attribute.value}`
      );
      listItem.appendChild(text);
      list.appendChild(listItem);
    });

    const text = document.createTextNode(` 상세 조회 화면`);
    content.appendChild(text);
    page.appendChild(todoMainLink);
    page.appendChild(Header("TODO App 상세 조회"));
    page.appendChild(content);
    content.appendChild(list);
    page.appendChild(Footer());
  } catch (error) {
    console.error("error", error);
  }
  return page;
};

export default TodoInfo;
