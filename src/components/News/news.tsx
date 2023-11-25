import LinkNews from "./LinkNews"
import ListNews from "./ListNews"

const ItemNews =
[
    {picture:'qw.jpeg',name:'Name1',link:'#'},
    {picture:'qw2.jpeg',name:'Name2',link:'#'},
    {picture:'qw3.jpeg',name:'Name3',link:'#'},
    {picture:'qw4.jpeg',name:'Name4',link:'#'},
    {picture:'qw5.jpeg',name:'Name5',link:'#'}
]

export const news = () => {
  return (
     <div>
        <LinkNews />
        <ListNews Items={ItemNews}/>
     </div>
  )
}

export default news
