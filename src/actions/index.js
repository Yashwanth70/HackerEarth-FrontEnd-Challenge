let nextTaskId = 0;

export const removeTask = (id) => {
    return {
        type: 'REMOVE_TASK',
        id
    };
};

export const removeCart = (id) => {
    return {
        type: 'REMOVE_CART',
        id
    };
};

export const addCart = (id) => {
    return {
        type: 'ADD_CART',
        id
    };
};