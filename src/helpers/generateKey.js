const generateKey = () => {
    const date = Date.now().toString(36);
    const id = date.substr(2);

    return id;
}

export default generateKey;