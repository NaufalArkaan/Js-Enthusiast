class View {
    static show(todos) {
        // console.log(todos);
        console.log("Todo list : ");
        todos.forEach(todo => {
            const {
                id,
                task,
                status
            } = todo;
            if (status) {
                console.log(`${id}. [X] ${task}`);
            } else {
                console.log(`${id}. [ ] ${task}`);
            }
        })
    }

    static message(msg) {
        console.log(msg);
    }
}


module.exports = View;