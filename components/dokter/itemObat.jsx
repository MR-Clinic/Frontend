import React from 'react'

function itemObat(props) {
  return (
    <div className="flex justify-between items-center" key={props.i}>
        <p className="font-semibold w-4/6">{e.namaObat}</p>
        <p className="font-semibold inline "> {e.dosis} </p>
        <div className="inline-block ml-3 cursor-pointer" onClick={()=>deleteList(props.i)}>
            <FaTrashAlt key={i} />
        </div>
    </div>
  )
}

export default itemObat