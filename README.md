# 🦁멋쟁이 사자처럼 Front-End School ➕Plus 1기: 미니 프로젝트(TODO App)

🗓️ 기획 기간 : 2023.10.29 ~ 2023.10.30

🗓️ 개발 기간 : 2023.10.30 ~ 2023.10.31

## 팀원 소개

|                                                                                                 [김진주](https://github.com/pearlKinn)                                                                                                  |                                                                                            [송수빈](https://github.com/ssb1565b)                                                                                             |                                                  [서진만](https://github.com/seojinman)                                                   |                                                                                                             [서민수](https://github.com/TocDX)                                                                                                             |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="200" height="150" src="https://cdn.discordapp.com/attachments/1164071632160182347/1168469320393822208/a255f7770b98d619.png?ex=6551e0db&is=653f6bdb&hm=4eb518878b76733f02794269a4a06dff14027664af797a0964c81cb040ee5ee0&" /> | <img width="200" height="150" src="https://cdn.discordapp.com/attachments/1164071632160182347/1168471399321583737/image.png?ex=6551e2ca&is=653f6dca&hm=1b1d13c4280cef96fc284ec3aaef3f24abc278c03ef780e99ee1483721f5366b&" /> | <img width="200" height="150" src="https://github.com/FRONTENDSCHOOL6/ready-act/assets/117728530/31348309-ad72-439f-9420-e4d7f26f8673" /> | <img width="200" height="200" src="https://cdn.discordapp.com/attachments/1164071632160182347/1168468095539626024/KakaoTalk_Image_2023-10-30-17-34-56.png?ex=6551dfb7&is=653f6ab7&hm=af2424b0a86a5d48f4742fb1e68fc1374d1473f864b6de9553596a8b188e74b0&" /> |

## 🛠️기술 스택

 <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
 <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
 <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  
<br/>

### 🧰Tools

<img src="https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

## 📁디렉터리 트리

```
📦todoapp
┣ 📂assets
┃ ┣ 📂css
┃ ┃ ┗ 📜index.css
┃ ┣ 📂img
┃ ┃ ┗ 📜favicon.ico
┃ ┗ 📂js
┃ ┃ ┣ 📂layout
┃ ┃ ┃ ┣ 📜Footer.js
┃ ┃ ┃ ┗ 📜Header.js
┃ ┃ ┣ 📂pages
┃ ┃ ┃ ┣ 📂info
┃ ┃ ┃ ┃ ┗ 📜TodoInfo.js
┃ ┃ ┃ ┣ 📂list
┃ ┃ ┃ ┃ ┗ 📜TodoList.js
┃ ┃ ┃ ┣ 📂regist
┃ ┃ ┃ ┃ ┗ 📜TodoRegist.js
┃ ┃ ┃ ┗ 📂update
┃ ┃ ┃ ┃ ┗ 📜TodoUpdate.js
┃ ┃ ┣ 📜App.js
┃ ┃ ┗ 📜index.js
┣ 📜index.html
┗ 📜package-lock.json
```

## 👩‍💻기능설명

 <table>
  <tr>
    <th>TodoInfo</th>
    <td>URLSearchParams(location.search)를 사용하여 현재 디렉토리를 가져오고 가져온 params를 이용하여 동적으로 페이지를 렌더링 해줍니다.

api 요청이 성공하면 상세 정보를 포함한 할일의 상태를 보여주는 페이지를 동적으로 생성하여
요청된 할일의 정보를 받아와 HTML 요소로 변환하여 동적으로 페이지를 생성하고 반환하고
실패하면 콘솔창에 에러가 표시됩니다.</td>

</tr>
<tr>
<th>TodoList</th>
<td></td>
</tr>
<str>
<th>TodoRegist</th>
<td>TodoList의 필수 기능인 등록부분을 구현하고 등록페이지로 넘어가 등록하고 싶은 할일의 제목과 내용을 입력후 api 요청이 성공하면 등록버튼을 눌렀을 경우 메인페이지로 넘어가면서 등록한 할 일이 등록 됩니다. /td>
</str>

<tr>
    <th>TodoUpdate</th>  
    <td></td>

  </tr>
  </table>
<br>

## 🙊미니프로젝트 todolist 회고

 <table>
  <tr>
    <th>김진주</th>
    <td>간단한 기능들이었지만 짧은 시간 안에 디자인과 기능을 만들고 
또 html 없이 오로지 js로만 태그를 작성하고 페이지를 만들어 본게 처음이라 막막했지만 재미있었다.
그리고 처음으로 JS로 SPA를 구현하여 라우팅 기능을 만들어서 적용해보았는데 좋은 경험이 되었던 것 같다</td>
    </tr>
      <tr>
    <th>송수빈</th>
     <td></td>
      </tr>
   <str>
    <th>서진만</th>
     <td>미니프로젝트여서 CSS보단 기능에 더 충실하게 임하였습니다. HTML없이 자바스크립트만으로 CSS디자인을 처음 해보는 것이어서 처음엔 많이 어려웠지만 계속 하다보니 결과물을 얻을 수 있었습니다.</td>
      </str>
<tr>
    <th>서민수</th>  
    <td>JS를 많이 접해보지 않아 버벅거리며 진행 했지만 다들 도와주신 덕북에 어느정도 CURD에 대해 이해하게 되었습니다.</td>

  </tr>
  </table>
<br>

## 👀서버 구동

- 프로젝트 루트에서 실행
<!-- * -s 옵션: 라우터를 추가할 경우 클라이언트가 요청한 모든 URL에 대해서 index.html을 응답하도록 설정 -->

```
cd 01.javascript/todoapp
npx serve .
```

<!-- * -s 옵션: 라우터를 추가할 경우 클라이언트가 요청한 모든 URL에 대해서 index.html을 응답하도록 설정
```
cd 01.javascript
npx serve -s .
``` -->

- http://localhost:3000 접속

  - 이미 3000 포트가 사용중일 경우 콘솔 안내 메세지에 따라서 접속

## 👀api 서버 구동

```
cd api
npm i
npm start
```

- api 서버 사용방법: http://localhost:33088/apidocs
