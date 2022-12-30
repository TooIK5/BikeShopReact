let findMyFamily = (id, options) => {
    let result = null;
    options.forEach(element => {
         if (element.children) {
            element.children.forEach(e => {
                if (e.value === id) {
                    result = element.value;
                }
            })
        }
    });
    return result;
}

export { findMyFamily };