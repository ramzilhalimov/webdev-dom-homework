import { format } from "date-fns";

export const now = (date) => {
    let formateDate = format(new Date(date), "yyyy-MM-dd hh.mm.ss");
    return formateDate;
};

