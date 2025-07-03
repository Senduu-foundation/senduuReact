import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'
import Hero from './components/hero'
import Hero2 from './components/hero2'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <Hero2 />
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
