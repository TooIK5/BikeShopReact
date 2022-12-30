let convert = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i].parentid)) {
            newArr.push({
                value: arr[i].id,
                label: arr[i].name,
                children: []
            })
        } else {
            newArr[newArr.length - 1].children.push(
                {
                    value: arr[i].id,
                    label: arr[i].name
                }
            )
        }
    }
    return newArr;
}

export { convert };