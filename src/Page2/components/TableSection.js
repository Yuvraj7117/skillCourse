import React,{useEffect} from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './tablesection.css'

const TableSection = (props) => {
    const { setSaveLocalData} = props.value
    const deleteSaveData=(id)=>{

    let skillData = JSON.parse(localStorage.getItem('data'));

    skillData.forEach((item,index) => {
        if(id === item.id){
            skillData.splice(index,1)
        }
    });

    localStorage.setItem("data",JSON.stringify(skillData))
    setSaveLocalData(skillData)
    }


    useEffect(() => {
        let local = JSON.parse(localStorage.getItem("data"))
        if(local){
            setSaveLocalData(local)
        } 
      },[])
      let local = JSON.parse(localStorage.getItem("data"))
    return (
        <>
            <div className='tablesection'>
                <h2>Used By</h2>
                       
                <table>
                    <thead>
                        <tr>
                            <td>Job Title</td>
                            <td>strength</td>
                            <td>Delete</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                      local && local.map((item,index) => {
                           
                                return (
                                    <tr className='used_by' key={index}>
                                        <td>{item.used_by.length===0?"Others":item.used_by[index].job_title}</td>
                                        <td>{item.used_by.length===0? 7.07:item.used_by[index].strength}</td>
                                        <td onClick={()=>{deleteSaveData(item.id)}}><RiDeleteBin6Line /></td>
                                    </tr>
                                )
                            })
                        
                        }
                    </tbody>

                </table>
            </div>

        </>
    )
}

export default TableSection