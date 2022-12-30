let findOption = (options, optionid) => {
    let result = null;
    options.forEach(element => {
        if (element.value === optionid) {
            result = element.label;
        } else if (element.children) {
            element.children.forEach(e => {
                if (e.value === optionid) {
                    result = e.label;
                }
            })
        }
    });
    return result
}

export { findOption }