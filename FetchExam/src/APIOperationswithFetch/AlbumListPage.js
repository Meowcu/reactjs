import React, {useState,useEffect} from 'react'

function AlbumListPage() {

    const [albums, setalbums] = useState([]);

    let tdDeleteStyle = {
        cursor: 'pointer',
        color: 'tomato'
    }

    useEffect(() => {
       getAlbums();
    },[albums]);

    const getAlbums = () => {
        fetch('https://jsonplaceholder.typicode.com/albums/')
        .then(response => response.json())
        .then(data => {
            setalbums(data);
        })
        .catch(err => {
            console.log('err',err);
        })
    }
    const deleteProduct = (id) =>{
        fetch('https://jsonplaceholder.typicode.com/albums/' + id, {
            method: 'DELETE'
        })
        .then((res)=>{
            if(res.status === 200)
                getAlbums();
        })
        .catch(err => console.log(err));
    }
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>UserId</th>
                <th>Title</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                albums && albums.map((item,key) => {
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.userId}</td>
                        <td>{item.title}</td>
                        <td onClick={()=> deleteProduct(item.id)} style={tdDeleteStyle}>Delete</td>
                    </tr>
                })
            }
        </tbody>
    </table>
    </>
  )
}

export default AlbumListPage