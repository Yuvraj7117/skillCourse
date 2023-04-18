import React from 'react';
import './tablesection.css';
import { ImSpinner9 } from 'react-icons/im'

const TableSection = (props) => {

    const { datas, currentPage, setCurrentPage, shownItem, numberOfPagination, prev, next, inputText, categoryOption,rowDataFun,maxPageNumberLimit,minPageNumberLimit} = props.value

    const pageChange = (page) => {
        setCurrentPage(page)
    }

    return (
        <>
            <div className='main_content'>
                <table>
                    <thead>
                        <tr className='theadtablerow'>
                            <td>Skill Name</td>
                            <td> Category</td>
                            <td>SubCategory</td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            datas ? shownItem.filter((item) => {
                                if (categoryOption === undefined) {
                                    return item
                                } else if (item.category.toLowerCase().includes(categoryOption.toLowerCase())) {
                                    return item
                                }
                            })
                                .filter((item) => {
                                    if (inputText === "") {
                                        return item
                                    } else if (item.skill.toLowerCase().includes(inputText.toLowerCase())) {
                                        return item
                                    }
                                }).map((item) => (
                                    <tr key={item.id} className='data' onClick={()=>{rowDataFun(item)}}>
                                        <td>{item.skill}</td>
                                        <td>{item.category}</td>
                                        <td>{item.subcategory}</td>
                                    </tr>
                                )) : (<tr><td style={{ color: 'rgb(0, 131, 255)', fontSize: "40px", position: 'relative', top: '25vh', left: '30%' }}><ImSpinner9 /></td></tr>)
                        }


                    </tbody>
                </table>
                <div className='pagination_numbers'>

                    <button onClick={() => { prev() }} >Previous</button>
                    {
                        numberOfPagination.map((item, index) => {
                            if(item < maxPageNumberLimit + 1 && item > minPageNumberLimit){

                                return (
                                    <span key={index} onClick={() => { pageChange(item) }} className={item === currentPage ? "active" : ""}>{item}</span>
                                )
                            }else{
                                return null;
                            }
                           
                        })
                    }


                    <button onClick={() => { next() }} >Next</button>
                </div>
            </div>
        </>
    )
}

export default TableSection