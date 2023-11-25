import { ReactNode } from "react";

export interface IItemNews{
    picture: string,
    name: string,
    link: string
}

export type TNews = Array<IItemNews>

export const ListNews = ({Items}:TNews) => {

  return (
    <div style={{float:'left'}}>
      <ul style={{listStyleType:'none'}}>
        {
            Items.map(item => 
                <li key={item.name}>
                    <a href={item.link}>
                    <img src={item.picture} style={{width:'10px'}}/>{item.name}</a>
                </li>
            )
        }
      </ul>
    </div>
  )
}

export default ListNews
