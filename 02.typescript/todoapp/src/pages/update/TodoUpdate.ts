// 할일 등록
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import TodoList from "../list/TodoList";
import instance from "../../api/instance";

// 할일 수정
const TodoUpdate = async function (_id: string) {
  const todoMainLink = document.createElement("a");
  todoMainLink.setAttribute("href", "/");
  todoMainLink.setAttribute("title", "뒤로가기");
  todoMainLink.appendChild(document.createTextNode(`<`));
  todoMainLink.classList.add("backspace");

  const page = document.createElement("div");
  page.setAttribute("id", "page");
  try {
    const response = await instance.get<TodoResponse>(`/${_id}`);

    if (response.data.ok) {
      const { title, content, done } = response.data.item;
      const contentBox = document.createElement("ul");
      contentBox.classList.add("ulItem");
      const list = document.createElement("li");
      list.classList.add("listItem");
      const attributes = [
        { label: "제목:", value: title },
        { label: "내용:", value: content },
      ];

      attributes.forEach((attribute, idx) => {
        const listItem = document.createElement("li");
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.id = idx.toString();
        input.classList.add("customInput");
        label.textContent = attribute.label;

        input.value = attribute.value;

        listItem.appendChild(label);
        listItem.appendChild(input);
        list.appendChild(listItem);
      });

      const wrapper = document.createElement("div");
      wrapper.classList.add("buttonWrapper");
      wrapper.appendChild(contentBox);

      const editEl = document.createElement("button");
      wrapper.appendChild(editEl);

      editEl.classList.add("edit");
      editEl.innerText = "수정 완료";

      page.appendChild(todoMainLink);
      page.appendChild(Header(`${title} 수정`));
      contentBox.appendChild(list);
      page.appendChild(wrapper);
      page.appendChild(Footer());

      editEl.addEventListener("click", async function () {
        const titleInput = document.getElementById(
          "0"
        ) as HTMLInputElement | null;
        const contentInput = document.getElementById(
          "1"
        ) as HTMLInputElement | null;

        try {
          const body = {
            title: titleInput ? titleInput.value : title,
            content: contentInput ? contentInput.value : content,
            done: done,
          };
          const response = await instance.patch<TodoResponse>(`/${_id}`, body);

          const data = response.data;
          console.log(data.ok.toFixed());
          const ListPage = await TodoList();
          data && document.querySelector("#page")!.replaceWith(ListPage);
          window.location.href = "/";
        } catch (error) {
          console.error(error);
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
  return page;
};
export default TodoUpdate;
