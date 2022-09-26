import React from 'react'

function CategoryList({ categories, deleteCategory }) {
  return (<>
  <h1>Category List</h1>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Category Name</th>
                <th>Category Description</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                categories && categories.map((item,key) => {
                  return  <tr key={key}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td style={{cursor:'pointer',color:'tomato'}} onClick= {
                        () => deleteCategory(item.id)
                        }>Delete</td>
                    </tr>
                }) 
            }
        </tbody>
    </table>
    </>
  )  
}

export default CategoryList