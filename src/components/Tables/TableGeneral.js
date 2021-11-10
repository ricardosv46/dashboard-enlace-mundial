import React from 'react'
import './Table.css'
const TableGeneral = ({
  dataBody,
  dataHead,
  borderColor = 'gray-100',
  headerTextColor = 'gray-800',
  bodyTextColor = 'gray-700',
  headerBgColor = 'white',
  bodyBGColor = 'white'
}) => {
  const handleArray = (object) => {
    const arreyNew = []
    for (const property in object) {
      arreyNew.push(object[property])
    }
    return arreyNew
  }
  const bodyBg = `bg-${bodyBGColor}`
  const headBg = `bg-${headerBgColor}`
  const borderC = `border-${borderColor}`
  const textColorB = `text-${bodyTextColor}`
  const textColorH = `text-${headerTextColor}`

  return (
    <div className="w-full mb-8 overflow-hidden rounded-md md:shadow-xl max-h-screen overflow-y-auto tableGeneral ">
      <div className="w-full overflow-x-auto min-h-screen">
        {dataBody && (
          <table className={`w-full  text-left border-2 ${borderC} `}>
            <thead className="">
              <tr
                className={`text-lg font-semibold  tracking-wide bg-gray-100 ${textColorH} 
              ${headBg}  text-center`}
              >
                {dataHead.map((th, index) => (
                  <th
                    key={index}
                    className={`px-4 py-6 ${th[1]} text-gray-600 text-${th[2]} `}
                  >
                    {th[0]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={`${bodyBg}  ${borderC} text-base ${textColorB} `}>
              {dataBody.map((row, index) => (
                <tr
                  key={index}
                  className=" font-medium hover:shadow-md  transform transition-all duration-300 border- cursor-pointer hover:-translate-y-1"
                >
                  {handleArray(row).map((column, index) => (
                    <td
                      className="text-start  uppercase text-gray-600 py-6 px-4 min-h-20 "
                      key={index}
                    >
                      {column}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default TableGeneral
