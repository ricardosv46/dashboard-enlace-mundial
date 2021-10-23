import React from 'react'

const TableGeneral = ({
  dataBody,
  dataHead,
  borderColor = 'primary-300',
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
    <div className="w-full mb-8 overflow-hidden ">
      <div className="w-full overflow-x-auto min-h-screen">
        {dataBody && (
          <table className="w-full  text-center">
            <thead className="shadow-2xl">
              <tr
                className={`text-lg font-bold tracking-wide ${textColorH} 
              ${headBg} border ${borderC}  text-center`}
              >
                {dataHead.map((th, index) => (
                  <th className={`px-4 py-3 min-w-${th[1]}`} key={index}>
                    {th[0]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={`${bodyBg} border ${borderC} text-base ${textColorB} `}>
              {dataBody.map((row, index) => (
                <tr key={index} className=" font-medium ">
                  {handleArray(row).map((column, index) => (
                    <td className="border " key={index}>{column}</td>
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
