import _ from "lodash";

export const paginate = (items = [], pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _.slice(items, startIndex, startIndex + pageSize);

};