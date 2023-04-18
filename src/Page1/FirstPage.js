import React,{useState}from 'react'
import FilterSection from './components/FilterSection';
import Header from './components/Header'
import TableSection from './components/TableSection';
import './firstpage.css';
import { useGetSkillsQuery } from '../redux/api/skillsApi';
import SecondPage from '../Page2/SecondPage'


const FirstPage = () => {
  
  const {data } = useGetSkillsQuery()
  const [perPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageNumberLimit] = useState(3);
  const [maxPageNumberLimit,setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit,setMinPageNumberLimit] = useState(0)
  const [ inputText, setInputText] = useState("")
  const [optionText,setOptionText] = useState("")
  const [categoryOption,setCategoryOption]=useState('')
  const [showSecondPage,setShowSecondPage] = useState(false)
  const [rowData,setRowData]  = useState([])

  let numberOfPages = ""
  let shownItem = ""
  let numberOfPagination = []
  let lastPage = ""
  let firstPage=""
  let datas = ""
  if (data) {
    datas = data.data
      //pagination Formulae
       numberOfPages = Math.ceil(data.data.length / perPage)

      numberOfPagination = [...Array(numberOfPages + 1).keys()].slice(1)

       lastPage = perPage * currentPage;

       firstPage = lastPage - perPage

      shownItem = data.data.slice(firstPage, lastPage)
  }

  const next = ()=>{
    if(currentPage>=numberOfPages){

      return
    }
    setCurrentPage(currentPage+1)
    if(currentPage+1 > maxPageNumberLimit){
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
  
    }
  }

  const prev = ()=>{
    if(currentPage<=1){
     return

    }
    setCurrentPage(currentPage-1)
    if((currentPage-1) %pageNumberLimit ===0){
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    
    }
    
  }


  const handleFilter=()=>{
    setCategoryOption(optionText)
  }

 
  const rowDataFun = (data)=>{
    let filterData = []
     filterData.push(data)

     if(filterData === []){
      setShowSecondPage(false)
     }else{
       setShowSecondPage(true)
       setRowData(filterData)
     }
  }

  return (
    <>
    <div className='firstcontainer'>
      <Header value = {{datas,inputText,setInputText}}/>
      <FilterSection value={{datas, currentPage, shownItem, firstPage, setOptionText, handleFilter}}/>
      <TableSection value={{ datas, currentPage, setCurrentPage, shownItem, numberOfPagination, prev, next, inputText, categoryOption,setShowSecondPage,rowDataFun,maxPageNumberLimit,minPageNumberLimit}}/>
    </div>
 {
  showSecondPage && (<SecondPage value={{rowData}}/>)
 }
   
    </>
  )

}



export default FirstPage