import './NavBar.css';

const NavBar = () => {
  return (
    <section className='nav-container'>
      <h2>Topics</h2>
      <div className='topic-btn-container'>
        <button>Breaking News</button>
        <button>World</button>
        <button>Nation</button>
        <button>Business</button>
        <button>Technology</button>
        <button>Entertainment</button>
        <button>Sports</button>
        <button>Science</button>
        <button>Health</button>
      </div>
    </section>
  )
}


export default NavBar;