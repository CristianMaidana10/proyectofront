import './home.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Search from '../../components/search/Search';
import { ListOfCategories } from '../../components/listofcategories/ListOfCategories';
import { ListOfRecommendatio } from '../../components/listofrecommendation/ListOfRecommendation';

export const Home = ({id}) => {
  return (
    <div>
       <Header />
       <Search />
       <ListOfCategories />
       <ListOfRecommendatio categoryId={id} />
       <Footer />
    </div>
  )
}
