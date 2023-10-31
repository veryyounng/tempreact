import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";



const TodoRegist = function () {
  const todoMainLink = document.createElement("a");
  todoMainLink.setAttribute("href", "/");
  todoMainLink.appendChild(document.createTextNode(`뒤로가기`));

  const page = document.createElement("div");
  page.setAttribute("id", "page");

  const content = document.createElement('div');
  content.classList.add('inputWrapper');
 

  // 제목 입력 필드
  
  const titleLabel = document.createElement('label');
  titleLabel.textContent = '제목: ';
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('id', 'title-input');
  titleInput.classList.add('input-field');
  titleLabel.appendChild(titleInput);

  // 내용 입력 필드
  const contentLabel = document.createElement('label');
  contentLabel.textContent = '내용: ';
  const contentInput = document.createElement('input');
  contentInput.setAttribute('type', 'text');
  contentInput.setAttribute('id', 'content-input');
  contentInput.classList.add('input-field');
  contentLabel.appendChild(contentInput);

  // 등록 버튼
  const submitButton = document.createElement('button');
  submitButton.classList.add('registration');
  submitButton.textContent = '등록';
  submitButton.addEventListener('click', function() {
    submitButton.setAttribute("href", "/");
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    // 입력된 제목과 내용을 이용하여 할일을 생성하거나 서버로 전송하는 로직을 추가할 수 있음
    axios
      .post(`http://localhost:33088/api/todolist/`, {
        title: title,
        content: content,
      })
      .then(response => {
        // 성공적으로 등록한 후에 메인 페이지로 이동
        window.location.href = '/'; // 메인 페이지의 URL로 리디렉션
      })
      .catch((error) => {
        // 오류 처리
        console.error("오류 발생:", error);
      });
  });

  // 요소를 content에 추가
  content.appendChild(titleLabel);
  content.appendChild(contentLabel);
  content.appendChild(submitButton);

  page.appendChild(todoMainLink);
  page.appendChild(Header("TODO App 등록"));
  page.appendChild(content);
  page.appendChild(Footer());

  return page;
};

export default TodoRegist;
