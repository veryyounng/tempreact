import TodoList from "./pages/list/TodoList";
import TodoRegist from "./pages/regist/TodoRegist";
import TodoInfo from "./pages/info/TodoInfo";
import TodoUpdate from "./pages/update/TodoUpdate";
import Error404 from "./pages/errors/Error404";

async function getPage() {
  const params = new URLSearchParams(location.search);
  const _id = params.get("_id");

  switch (location.pathname) {
    case "/":
      return await TodoList();
    case "/regist":
      return TodoRegist();
    case "/info":
      return _id ? await TodoInfo(_id) : Error404();
    case "/edit":
      return _id ? await TodoUpdate(_id) : Error404();
    default:
      return Error404();
  }
}

async function render() {
  const page = await getPage();
  document.querySelector("#page")!.replaceWith(page);
}

// 뒤로가기, 앞으로가기 버튼 클릭시 발생하는 이벤트
window.addEventListener("popstate", render);

export function linkTo(url: string) {
  history.pushState({}, "todo", url);
  render();
}

const Router = async function () {
  return await getPage();
};

export default Router;
