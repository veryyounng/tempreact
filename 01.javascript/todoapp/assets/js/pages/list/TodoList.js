// 할일 목록
import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";
import TodoRegist from "../regist/TodoRegist.js";
import { linkTo } from "../../Router.js";
import TodoUpdate from "../update/TodoUpdate.js";

const TodoList = async function () {
  axios.defaults.baseURL = "http://localhost:33088/api/todolist";
  const page = document.createElement("div");
  page.setAttribute("id", "page");

  const content = document.createElement("div");
  content.setAttribute("id", "content");
  let response = await axios();

  try {
    const ul = document.createElement("ul");
    ul.setAttribute("class", "todolist");

    response.data?.items.forEach((item) => {
      const li = document.createElement("li");
      const todoInfoLink = document.createElement("a");
      todoInfoLink.setAttribute("href", `info?_id=${item._id}`);

      const todoEditLink = document.createElement("a");
      todoEditLink.innerText = "수정";
      todoEditLink.setAttribute("href", `edit?_id=${item._id}`);

      const deleteEl = document.createElement("button");
      deleteEl.innerText = "삭제";

      const checkTodo = document.createElement("input");
      checkTodo.setAttribute("type", "checkbox");
      checkTodo.checked = item.done;
      const title = document.createTextNode(item.title);

      todoEditLink.addEventListener("click", async function (e) {
        e.preventDefault();
        linkTo(todoEditLink.getAttribute("href"));
      });

      deleteEl.addEventListener("click", async function () {
        try {
          const body = { id: item._id };
          const response = await axios.delete(`/${item._id}`, body);
          const data = response.data;
          li.remove();
        } catch (error) {}
      });

      todoInfoLink.addEventListener("click", async function (event) {
        event.preventDefault();
        linkTo(todoInfoLink.getAttribute("href"));
      });

      checkTodo.addEventListener("click", async function () {
        try {
          const body = {
            title: item.title,
            content: item.content,
            done: !item.done,
          };

          await axios.patch(`/${item._id}`, body);
        } catch (error) {
          console.error(error);
        }
      });

      todoInfoLink.appendChild(title);
      li.appendChild(todoInfoLink);
      li.appendChild(checkTodo);
      li.appendChild(todoEditLink);
      li.appendChild(deleteEl);
      ul.appendChild(li);
    });
    content.appendChild(ul);

    const btnRegistLink = document.createElement("a");
    btnRegistLink.innerText = "등록";
    content.appendChild(btnRegistLink);

    btnRegistLink.setAttribute("href", `regist`);

    btnRegistLink.addEventListener("click", (e) => {
      e.preventDefault();
      linkTo(btnRegistLink.getAttribute("href"));
    });
  } catch (err) {
    const error = document.createTextNode("일시적인 오류 발생");
    content.appendChild(error);
  }

  page.appendChild(Header("TODO App 목록 조회"));
  page.appendChild(content);
  page.appendChild(Footer());
  return page;
};

export default TodoList;
