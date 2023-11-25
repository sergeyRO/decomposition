import React from "react"

export interface ListWidget
{
  list?: {
    name:string,
    link?:string,
    nameLink?:string,
    img?:string
  },
  name:React.ReactNode
  children?:React.ReactNode
  link:string
}

export const Widget = ({list, name, children, link}:ListWidget) => {
  let items = ''
  if (list) 
  {
    console.log(list)
    items = list.map(item =>
      <li style={{listStyleType:'none'}} key={item.name}>
        <img src={item.img}/>
        {item.name}<a href={link}>{item.nameLink}</a>
        </li>
      )
  } 
  return (
    <div style={{textAlign:'left', width:'33%', float:'left'}}>
        <a href={link}>{name}</a>
        {children}
        <div>
          {items}
        </div>
    </div>
  )
}

//Widget.defaultProps = {list:{}};
export default Widget
