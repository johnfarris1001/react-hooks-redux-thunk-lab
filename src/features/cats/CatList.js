// write your CatList component here

function CatList({ catPics }) {
    const cats = catPics.map((cat) => {
        return <img key={cat.id} src={cat.url} alt={"cat"} />;
    });
    return <div>{cats}</div>;
}

export default CatList;
