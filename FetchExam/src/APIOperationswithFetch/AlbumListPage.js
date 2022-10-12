import React, {useState,useEffect} from 'react'

function AlbumListPage() {

    const [albums, setalbums] = useState([]);
    const [loading, setloading] = useState(true);

    let tdDeleteStyle = {
        cursor: 'pointer',
        color: 'tomato'
    }

    useEffect(() => {
        const myAbortController = new AbortController();
       getAlbums(myAbortController);
       
       return () => {
        myAbortController.abort();
    }
    },[albums]);

    
    const getAlbums = (myAbortController) => {
        
        fetch('https://jsonplaceholder.typicode.com/albums',{ signal: myAbortController.signal })
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                setalbums(data);
                setloading(false);
            }, 2000);
           
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
        .catch(err => console.log('err',err));
    }
  return (
    <>
    {
        loading === true ? <span>Loading...</span> : (<table>
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
        </table>)
    }
    
    </>
  )
}

export default AlbumListPage