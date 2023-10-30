// 할일 등록
import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";
import TodoList from "../list/TodoList.js";

// 할일 수정
const TodoUpdate = async function () {
  const params = new URLSearchParams(location.search);
  const _id = params.get("_id");

  const todoMainLink = document.createElement("a");
  todoMainLink.setAttribute("href", "/");
  todoMainLink.appendChild(document.createTextNode(`뒤로가기`));

  try {
    const response = await axios(`/${_id}`);

    if (response.data.ok) {
      const data = await response.data;
      const { title, content, done } = data.item;
      const page = document.createElement("div");
      page.setAttribute("id", "page");
      const contentBox = document.createElement("ul");
      const list = document.createElement("li");
      const attributes = [
        { label: "제목", value: title },
        { label: "내용", value: content },
      ];

      attributes.forEach((attribute, idx) => {
        const listItem = document.createElement("li");
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.id = idx;
        label.textContent = attribute.label;

        input.value = attribute.value;

        listItem.appendChild(label);
        listItem.appendChild(input);
        list.appendChild(listItem);
      });

      const editEl = document.createElement("button");
      editEl.innerText = "수정 완료";

      page.appendChild(todoMainLink);
      page.appendChild(Header(`${title} 수정`));
      page.appendChild(contentBox);
      contentBox.appendChild(list);
      page.appendChild(editEl);
      page.appendChild(Footer());

      editEl.addEventListener("click", async function () {
        const titleValue = document.getElementById("0").value;
        const contentValue = document.getElementById("1").value;

        try {
          const body = {
            title: titleValue ? titleValue : title,
            content: contentValue ? contentValue : content,
            done: done,
          };
          const response = await axios.patch(`/${_id}`, body);

          const data = response.data;
          const ListPage = await TodoList();
          data && document.querySelector("#page").replaceWith(ListPage);
        } catch (error) {
          console.error("error");
        }
      });

      return page;
    }
  } catch (error) {
    console.error("error");
  }
};
export default TodoUpdate;
