import React, {useState} from 'react'

function AddCategory(props) {

    const {add} = props;
    const [categoryName, setcategoryName] = useState('');
    const [categoryDescription,setcategoryDescription] = useState('');

    const addCategory = () => {
        let randomId = Math.floor(Math.random() * 1000);
        let newCategory = {
                id: randomId,
                name: categoryName,
                description: categoryDescription
        }
    add(newCategory);
    }
  return (
    <>
    <div>
        <h1>Add Category</h1>
        <div>
            <label>Category Name: </label>
            <input type='text' onChange={(e) => setcategoryName(e.target.value)} />
        </div>
        <div>
            <label>Category Description: </label>
            <input type='text' onChange={(e) => setcategoryDescription(e.target.value)} />
        </div>
        <div>
            <button onClick={() => addCategory()}>Add</button>
        </div>
    </div>
    </>
  )
}

export default AddCategory