
import { getAllComments } from "./api.js";
import { renderComments } from "./render.js";
// import { format } from "date-fns"
// export const now = (comment) => {
//     let date = format(new Date(comment.date), "yyyy-MM-dd hh.mm.ss");
//     let month = (date.getMonth() + 1).toString().padStart(2, '0');
//     let day = date.getDate().toString().padStart(2, '0');
//     let year = date.getFullYear().toString().substr(-2);
//     let hours = date.getHours().toString().padStart(2, '0');
//     let minutes = date.getMinutes().toString().padStart(2, '0');
//     const resultDate = `${year}.${month}.${day} ${hours}:${minutes}`;
//     return resultDate;
// };
const renderApp = () => {
    renderComments({ comments, handleCommentLikeClick, handleCommentAnswerClick });
}
const commentAdding = document.createElement('div');
const appEl = document.getElementById("app");
commentAdding.innerText = 'Пожалуйста подождите, загружаю комментарии...';
appEl.appendChild(commentAdding);

export const initApp = () => {
    getAllComments()
        .then((appComments) => {
            comments = appComments;
            renderApp();
        })
        .then((data) => {
            commentAdding.style.display = 'none';
        });
}

let comments = [
];

const handleCommentLikeClick = (event) => {
    event.stopPropagation();
    const index = event.target.dataset.index;
    const likesContainer = event.target.closest('.comment-footer');
    const likesCounter = likesContainer.querySelector('.likes-counter');
    let countInLike = likesCounter.textContent;
    if (comments[index].isLike === true) {
        countInLike = (+countInLike) - 1;
        comments[index].isLike = false;
    } else {
        countInLike = (+countInLike) + 1;
        comments[index].isLike = true;
    }
    comments[index].like = countInLike;
    renderApp();
};
let commentAnswer = null;
const handleCommentAnswerClick = (event) => {
    const textElement = document.getElementById("add-text");
    commentAnswer = event.target.dataset.index;
    textElement.value = `> ${comments[commentAnswer]
        }`
        + `\n\n${comments[commentAnswer]
        }`


};
initApp();

