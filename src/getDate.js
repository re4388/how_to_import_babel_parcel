function getTodaysDate() {
    const today = new Date();
    const date =
        today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    return date;
}

export default getTodaysDate;