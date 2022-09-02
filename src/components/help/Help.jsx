
import React, { useState } from "react";
import decor from '../../assets/assets/Decoration.svg';
import headers from './HelpContent';
import pagination from "./PaginationObject";

export default function help() {
 
  const [activeTab, setActiveTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  

  const toggleActive = (button) => {
    setActiveTab(button)
  }

return (
  <div>
     <div className="helpContainer" id="help">
    Komu pomagamy
    <img src={decor} alt="" />
    <div className="buttons">
      <button className={`button ${activeTab === 1 ? 'active' : ''}`}
      onClick={()=> {
        setCurrentPage(1);
        setActiveTab(1);
        toggleActive(1)
        
      }}>
        Fundacjom</button>
      <button className={`button ${activeTab === 2 ? 'active' : ''}`}
      onClick={()=> {
        setCurrentPage(1);
        setActiveTab(2);
        toggleActive(2)
      }}>
        Organizacjom pozarządowym</button>
      <button className={`button ${activeTab === 3 ? 'active' : ''}`}
      onClick={()=> {
        setCurrentPage(1);
        setActiveTab(3);
        toggleActive(3)
      }}>
        Lokalnym zbiórkom</button>
    </div>
    <div className="header">{pagination[activeTab - 1].map(element =>{
      return <p>{element.header}</p>
    })}
    </div>
    <div className="headers">{headers[activeTab - 1]}</div>
    <div className='lists'>
    <ul>
    {pagination[activeTab - 1]
            .slice(perPage * currentPage - perPage, perPage * currentPage)
            .map((element, index) => {
              return (
                <li className="listsElements" key={index}>
                  <p className="element title">{element.title}</p>
                  <p className="element text">{element.text}</p>
                  <p className="element par">{element.par}</p>
                </li>
              );
            })}
      </ul>
      </div>
      <div className='pagination'>
      {Array(Math.ceil(pagination[activeTab - 1].length/perPage))
      .fill(1).map((element, index) =>{
          return (
              <button className="paginBtn" onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
          )
      })}
      </div>
  </div>
  </div>
)
}
