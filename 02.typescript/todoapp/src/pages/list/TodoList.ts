// 할일 목록
import { linkTo } from "../../Router";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import instance from "../../api/instance";

const TodoList = async function () {
  const page = document.createElement("div");
  page.setAttribute("id", "page");
  let response;
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  response = await instance.get<TodoListResponse>(
    "http://localhost:33088/api/todolist"
  );

  try {
    const ul = document.createElement("ul");
    ul.setAttribute("class", "todoList");

    response.data?.items.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("todoListItem");

      const todoActionWrapper = document.createElement("div");
      todoActionWrapper.classList.add("todoActionWrapper");

      const itemWrapper = document.createElement("div");
      itemWrapper.classList.add("itemWrapper");

      const todoInfoLink = document.createElement("a");
      if (!item.done) {
        todoInfoLink.classList.remove("doneItemLink");
        todoInfoLink.classList.add("undoItemLink");
      } else {
        todoInfoLink.classList.remove("undoItemLink");
        todoInfoLink.classList.add("doneItemLink");
      }

      todoInfoLink.setAttribute("href", `info?_id=${item._id}`);

      const todoEditLink = document.createElement("a");
      todoEditLink.setAttribute("title", "수정");
      todoEditLink.classList.add("todoEditLink");

      const editIcon = document.createElement("i");
      editIcon.classList.add("far", "fa-pen-to-square");

      todoEditLink.appendChild(editIcon);
      todoEditLink.setAttribute("href", `edit?_id=${item._id}`);

      const deleteEl = document.createElement("button");
      deleteEl.setAttribute("title", "삭제");
      deleteEl.classList.add("deleteBtn");

      const delIcon = document.createElement("i");
      delIcon.classList.add("far", "fa-trash-can");
      deleteEl.appendChild(delIcon);

      todoActionWrapper.appendChild(todoEditLink);
      todoActionWrapper.appendChild(deleteEl);

      const checkTodo = document.createElement("input");
      checkTodo.setAttribute("type", "checkbox");
      checkTodo.checked = item.done;
      const title = document.createTextNode(item.title);

      itemWrapper.appendChild(checkTodo);
      itemWrapper.appendChild(todoInfoLink);

      todoEditLink.addEventListener("click", async function (e) {
        e.preventDefault();
        linkTo(todoEditLink.getAttribute("href")!);
      });

      deleteEl.addEventListener("click", async function () {
        try {
          const body = { id: item._id };
          await instance.delete(`/${item._id}`, {
            data: body,
          });
          li.remove();
        } catch (error) {}
      });

      todoInfoLink.addEventListener("click", async function (event) {
        event.preventDefault();
        linkTo(todoInfoLink.getAttribute("href")!);
      });

      checkTodo.addEventListener("click", async function () {
        try {
          const body = {
            title: item.title,
            content: item.content,
            done: !item.done,
          };

          await instance.patch(`/${item._id}`, body);

          if (!checkTodo.checked) {
            todoInfoLink.classList.remove("doneItemLink");
            todoInfoLink.classList.add("undoItemLink");
          } else {
            todoInfoLink.classList.remove("undoItemLink");
            todoInfoLink.classList.add("doneItemLink");
          }
        } catch (error) {
          console.error(error);
        }
      });

      todoInfoLink.appendChild(title);
      li.appendChild(itemWrapper);
      li.appendChild(todoActionWrapper);
      ul.appendChild(li);
    });
    content.appendChild(ul);

    const btnRegistLink = document.createElement("a");
    btnRegistLink.classList.add("registBtn");
    btnRegistLink.setAttribute("title", "할일등록");

    const registIcon = document.createElement("i");
    registIcon.classList.add("far", "fa-plus");
    btnRegistLink.appendChild(registIcon);

    content.appendChild(btnRegistLink);

    btnRegistLink.setAttribute("href", `regist`);

    btnRegistLink.addEventListener("click", (e) => {
      e.preventDefault();
      linkTo(btnRegistLink.getAttribute("href")!);
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
