import C from '../constants'

const sortBy = (type, field) => {
    switch (type) {
        case "date" :
            return (a, b) => new Date(b.field) - new Date(a[field]);
        case "string" :
            return (a, b) => (a[field] < b[field]) ? -1 : 1;
        default:
            return (a, b) => b[field] - a[field];
    }
}

export const sortFunction = sort =>
    (sort === C.SORTED_BY_TITLE) ?
        sortBy("string", "title") :
        (sort === C.SORTED_BY_RATING) ?
            sortBy("number", "rating") :
            sortBy("date", "timestamp")





            