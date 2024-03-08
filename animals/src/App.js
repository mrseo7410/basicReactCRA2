import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Card from "./Components/Card";

function App() {
  let data = [
    {id:1, name:"옹이", image:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAyMDNfMzkg%2FMDAxNTQ5MjAzMTE1NTE1.NE6nYe56nrHnzCz51pQtc-QUGXOLvTz9YzNPSweQISYg.OhrQY7A7dNwOKFOQdyrXCLWK-M99Bdk9vdvUrOMRuRAg.JPEG.markhmil%2F20190203_231022_411.jpg&type=sc960_832"},
    {id:2, name:"멍이", image:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MDdfMTMy%2FMDAxNjg2MTQ3MTk2MDIz.MgAJr9c5DXHrK7nd49GMqWMyBZv8IHLaO50SpXrIXAQg.9r4wMgM9IvlArK6VlZxL_uQ3TTJQKbtSfU7J7YoY4C4g.PNG.again0122%2F8.png&type=sc960_832"},
    {id:3, name:"토토", image:"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4c%2F6f%2Fc3%2F4c6fc3f1898c4535fd1b607ac03a3127.jpg&type=sc960_832"},
    {id:4, name:"짹이", image:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMjVfMTY1%2FMDAxNjcxOTU5Nzk4Mzk5.fhelkMU15kquYX0auKP7EaNKvmECF_-yZ3S3PzKu-lsg.150b4X0b0qLIjd-_2uIR173glp8NDb_t799JMEYyWNkg.JPEG.kojedojang%2FDSC07473.JPG&type=sc960_832"}
    ]
  return (
    <div className="App">
      <Header/>
        <div className="grid grid-cols-2 my-2 gap-3">
          {data.map(
            (el)=>{
              return <Card key={el.id} animal={el}/>
            }
          )}
        </div>
        <Footer/>
    </div>
  );
}
export default App;