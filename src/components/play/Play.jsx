import React, {useState} from 'react'


const pagination = [ 
    [
        {
            title: 'Fundacja “Dbam o Zdrowie”',
            text: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.',
            par: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
        },
        {
            title: 'Fundacja “Dla dzieci”',
            text: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
            par: 'ubrania, meble, zabawki'
        },
        {
            title: 'Fundacja “Bez domu”',
            text: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
            par: 'ubrania, jedzenie, ciepłe koce'
        },
        {
            title: 'tytuł1',
            text: 'element1',
            par: 'par1'
        },
        {
            title: 'tytuł1',
            text: 'element1',
            par: 'par1'
        },
        {
            title: 'tytuł1',
            text: 'element1',
            par: 'par1'
        },
        {
            title: 'tytuł1',
            text: 'element1',
            par: 'par1'
        },
    ],
    [
        {
            title: 'Ipsum2',
            text: 'Ipsum2',
            par: 'Ipsum2'
        },
        {
            title: 'Ipsum2',
            text: 'Ipsum2',
            par: 'Ipsum2'
        },
        {
            title: 'Ipsum2',
            text: 'Ipsum2',
            par: 'Ipsum2'
        },
        {
            title: 'Ipsum2',
            text: 'Ipsum2',
            par: 'Ipsum2'
        },
        {
            title: 'Ipsum2',
            text: 'Ipsum2',
            par: 'Ipsum2'
        },
        {
            title: 'Ipsum2',
            text: 'Ipsum2',
            par: 'Ipsum2'
        },
    ],
    [
        {
            title: 'Dolor3',
            text: 'Dolor3',
            par: 'Dolor3'
        },
        {
            title: 'Dolor3',
            text: 'Dolor3',
            par: 'Dolor3'
        },
        {
            title: 'Dolor3',
            text: 'Dolor3',
            par: 'Dolor3'
        },
    ]   
]


function Play() {

    const [activeTab, setActiveTab] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(3);
    
  return (
    <div>
       <div className="helpContainer">
      Komu pomagamy
      {/* <img src={decor} alt="" /> */}
      <div className="buttons">
        <button className="button"
        onClick={()=> {
          setCurrentPage(1);
          setActiveTab(1);
        }}>
          Fundacjom</button>
        <button className="button"
        onClick={()=> {
          setCurrentPage(1);
          setActiveTab(2);
        }}>
          Organizacjom pozarządowym</button>
        <button className="button"
        onClick={()=> {
          setCurrentPage(1);
          setActiveTab(3);
        }}>
          Lokalnym zbiórkom</button>
      </div>
      <div className='lists'>
      <ul>
      {pagination[activeTab - 1]
              .slice(perPage * currentPage - perPage, perPage * currentPage)
              .map((title, index) => {
                return (
                  <li className="" key={index}>
                    {title.title}
                    {title.text}
                    {title.par}
                  </li>
                );
              })}
        </ul>
        </div>
        <div className='pagination'>
        {Array(Math.ceil(pagination[activeTab - 1].length/perPage))
        .fill(1).map((element, index) =>{
            return (
                <button onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
            )
        })}
        </div>
    </div>
       
    </div>
  )
}
export default Play