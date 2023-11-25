import './App.css'
import Search from './components/Search/Search'
import News from './components/News/news'
import Quotes from './components/quotes'
import Widget from './components/Widget'

const List1 = [
  {name:'Сталинки - о сталинках'},
  {name:'Маркет - ...'},
  {name:'Авто.ру - ...'}
]

const List2 = [
  {name:'02:00-ТНТ.Best',link:'#',nameLink:'THT'},
  {name:'02:15-Джунглии',link:'#',nameLink:'OPT'},
  {name:'02:25-Наедине со всеми',link:'#',nameLink:'КАРУСЕЛЬ'}
]

const List3 = [
  {name:'Управление как искусство',link:'#',nameLink:'Успех',img:'else.jpg'},
  {name:'Ночь.Мир в эту ночь',link:'#',nameLink:'TV',img:'else.jpg'},
  {name:'Андрей Возн...',link:'#',nameLink:'Совершенно Секретно',img:'else.jpg'}
]

function App() {

  return (
    <>
      <News />
      <Quotes />
      <Search />
      <Widget 
        children = {
            <>
              <br />Картинка погоды и градусы
            </>
        } 
        name = 'Погода'
        link = '#Погода' 
      />
      <Widget 
        list={List1}
        name='Посещаемое'
        link = '#Посещаемое' 
      />
      <Widget 
        children = {
          <>
            <br />Расписания
          </>
        } 
        name='Карта Германии'
        link = '#Карта Германии' 
      />
      <Widget 
        list={List2}
        name='Телепрограмма'
        link = '#Телепрограмма' 
      />
      <Widget 
        list={List3}
        name='Эфир'
        link = '#Эфир' 
      />
    </>
  )
}

export default App
