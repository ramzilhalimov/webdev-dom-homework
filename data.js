import { format } from "date-fns";

export const now = (commentDate) => {
    let createDate = format(new Date(), "yyyy-MM-dd hh.mm.ss");
    let date = new Date();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    let year = date.getFullYear().toString().substr(-2);
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    const resultDate = `${year}.${month}.${day} ${hours}:${minutes}`;
    return resultDate;
}

