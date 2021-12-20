import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios'
import './Pagination.css'
const Pagination = ({movieList ,num, setNum}) => {
    const baseUrl='https://image.tmdb.org/t/p/original';
    const [prev, setPrev] = useState(false)
    const [pageNumber, setPage] = useState(0)
    const moviePage = 5
    const pageVisited = pageNumber * moviePage

    const pageCount = Math.ceil(num / moviePage)
    var count = 0
    useEffect(()=>{
        console.log(pageVisited)
        console.log(pageNumber)
        if(pageNumber >=1)
        {
            if(prev == false)
            {
                setPrev(true)
            }
        }
        else
        {
            setPrev(false)
        }
    })
    const changePage = ({selected}) =>{
        setPage(selected);
    }
    return (
        <>
        <div className="pagination">
            <div className="pagination__top">
                {
                    !prev?
                    <ReactPaginate 
                    previousLabel= {""}
                    nextLabel ={">"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttns"}
                    nextLinkClassName={"nextBttns"}
                    disabledClassName={"paginationDis"}
                    activeClassName={"activePage"}
                    />:
                <ReactPaginate 
                previousLabel= {"<"}
                nextLabel ={">"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttns"}
                nextLinkClassName={"nextBttns"}
                disabledClassName={"paginationDis"}
                activeClassName={"activePage"}
                />
}
            </div>
            <br/>
            <div className="pagination__bottom">
                <input type="text" placeholder="Nhập số trang"></input>
                <button >Di chuyển</button>
            </div>
        </div>
        </>
        
    );
}

export default Pagination;
