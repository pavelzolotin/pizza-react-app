import { useState, useEffect } from 'react';
import Header from '../header/Header';
import Categories from '../categories/Categories';
import Sort from '../sort/Sort';
import PizzaBlock from '../pizza-block/PizzaBlock';
import Skeleton from '../skeleton/Skeleton';
import '../../scss/app.scss';

function App() {
    let [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://62fa6727ffd7197707ebdb63.mockapi.io/items')
            .then(res => res.json())
            .then(arr => {
                setItems(arr)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
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
            </div>
        </div>
    );
}

export default App;