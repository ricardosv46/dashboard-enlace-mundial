import React from 'react'

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
  const textColorH = `text-${headerTextColor}`
  const textColorB = `text-${bodyTextColor}`
  const bodyBg = `bg-${bodyBGColor}`
  const headBg = `bg-${headerBgColor}`
  const borderC = `border-${borderColor}`

  return (
    <div className="w-full mb-8 overflow-hidden rounded-md">
      <div className="w-full overflow-x-auto min-h-screen">
        {dataBody && (
          <table className={`w-full  text-left border-2 ${borderC} `}>
            <thead className="shadow-2xl ">
              <tr
                className={`text-base font-semibold tracking-wide bg-gray-100 ${textColorH} 
              ${headBg}  text-center`}
              >
                {dataHead.map((th, index) => (
                  <th className={`px-4 py-4 min-w-${th[1]} text-gray-600 text-left`} key={index}>
                    {th[0]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={`${bodyBg}  ${borderC} text-base ${textColorB} `}>
              {dataBody.map((row, index) => (
                <tr key={index} className=" font-medium cursor-pointer hover:shadow-md hover:-translate-y-2 transform transition-all duration-300">
                  {handleArray(row).map((column, index) => (
                    <td className="text-start uppercase text-gray-600 py-2 px-4" key={index}>{column}</td>
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
