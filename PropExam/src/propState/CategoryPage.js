import React, { useState } from 'react'
import {categoriesData}  from '../data/categories'
import AddCategory from './AddCategory';
import CategoryList from './CategoryList';
function CategoryPage() {
    
  const [categories, setcategories] = useState(categoriesData);
  const [categoryCounter, setcategoryCounter] = useState(categories.length);
 
  const deleteCategory = (id) => {
    let filteredCategories = categories.filter(x => x.id !== id);
    setcategoryCounter(categoryCounter-1);
    setcategories([...filteredCategories]);
  }
  const add = (item) => {
    console.log('item',item);
    setcategoryCounter(categoryCounter+1);
    setcategories([...categories,item]);
  }
  return (
    <>
    <h1>Category Count: {categoryCounter}</h1>
    <AddCategory add = {add} categoryLenght = {categories.length}/>
    <CategoryList categories={categories} deleteCategory = {deleteCategory}/>
    </>
  )
}

export default CategoryPage