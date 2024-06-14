const fetchData = (tableName) => {
    fetch(`http://localhost:8081/${tableName}`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
};
export default fetchData;