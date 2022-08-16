import { useEffect, useState } from 'react';
import Categories from '../components/categories/Categories';
import Sort from '../components/sort/Sort';
import Skeleton from '../components/skeleton/Skeleton';
import PizzaBlock from '../components/pizza-block/PizzaBlock';

const Home = () => {
    let [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://62fa6727ffd7197707ebdb63.mockapi.io/items')
            .then(res => res.json())
            .then(arr => {
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading
                        ? [...new Array(6)].map(i => <Skeleton key={i}/>)
                        : items.map(obj =>
                            <PizzaBlock
                                key={obj.id}
                                {...obj}
                            />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Home;