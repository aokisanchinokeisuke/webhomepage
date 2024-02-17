import React from 'react'

export default function ServicePage({name, pic}) {
  return (
    <div>
        <div className="col">
        <div className="cardService card card-cover overflow-hidden text-bg-dark rounded-4 shadow-lg" >
          <div className="d-flex flex-column p-5 pb-3 text-white text-shadow-1">
            <h3 className="mb-4 display-6 fw-bold">{name}</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="d-flex align-items-center me-3">
                <img src={pic} alt="" className='logoImage'/>
              </li>
            </ul>
          </div>
        </div>
        </div>
    </div>
  )
}
