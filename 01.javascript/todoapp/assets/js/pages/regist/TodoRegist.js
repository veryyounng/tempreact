import Header from '../../layout/Header.js';
import Footer from '../../layout/Footer.js';



const TodoRegist = function() {
  const page = document.createElement('div');
  page.setAttribute('id', 'page');

  const content = document.createElement('div');

  // 제목 입력 필드
  const titleLabel = document.createElement('label');
  titleLabel.textContent = '제목: ';
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('id', 'title-input');
  titleLabel.appendChild(titleInput);
  
  // 내용 입력 필드
  const contentLabel = document.createElement('label');
  contentLabel.textContent = '내용: ';
  const contentInput = document.createElement('input');
  contentInput.setAttribute('type', 'text');
  contentInput.setAttribute('id', 'content-input');
  contentLabel.appendChild(contentInput);

  // 등록 버튼
  const submitButton = document.createElement('button');
  submitButton.textContent = '등록';
  submitButton.addEventListener('click', function() {
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();


    // 입력된 제목과 내용을 이용하여 할일을 생성하거나 서버로 전송하는 로직을 추가할 수 있음
  axios.post(`http://localhost:33088/api/todolist/`, {
      title: title,
      content: content
    })
    .then(response => {
      // 서버로부터 받은 응답 데이터를 처리할 수 있음
      console.log('서버 응답:', response.data);
    })
    .catch(error => {
      // 오류 처리
      console.error('오류 발생:', error);
    });


    // 예시로 입력된 제목과 내용을 출력
    console.log('제목:', title);
    console.log('내용:', content);
  });

  // 요소를 content에 추가
  content.appendChild(titleLabel);
  content.appendChild(contentLabel);
  content.appendChild(submitButton);


  page.appendChild(Header('TODO App 등록'));
  page.appendChild(content);
  page.appendChild(Footer());

  return page;
};

export default TodoRegist;
