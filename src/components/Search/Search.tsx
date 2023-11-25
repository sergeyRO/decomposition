import Banner from "./Banner"
import Link from "./Link"

export const Search = () => {
  return (
    <>
      <div style={{clear:'both'}}>
        <Link />
          <form>
              <input style={{width:'85%'}}></input><button>НАЙТИ</button>
          </form>
        <Banner />
      </div>
    </>
  )
}

export default Search
