import { useEffect, useState } from 'react';
import Categories from '../components/categories/Categories';
import Sort from '../components/sort/Sort';
import Skeleton from '../components/skeleton/Skeleton';
import PizzaBlock from '../components/pizza-block/PizzaBlock';

function Home() {
    let [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryID, setCategoryID] = useState(0);
    const [sortType, setSortType] = useState(
        {
            name: 'популярности',
            sort: 'rating'
        }
    );

    useEffect(() => {
        setIsLoading(true)

        fetch(`https://62fa6727ffd7197707ebdb63.mockapi.io/items?${
            categoryID > 0 ? `category=${categoryID}` : ''
            }&sortBy=${sortType.sort}&order=${sortType ? 'asc' : 'desc'}`
        )
            .then(res => res.json())
            .then(arr => {
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryID, sortType])

    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories
                        value={categoryID}
                        onChangeCategory={(i) => setCategoryID(i)}
                    />
                    <Sort
                        value={sortType}
                        onChangeSort={(i) => setSortType(i)}
                    />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading
                        ? [...new Array(6)].map((_, i) => <Skeleton key={i}/>)
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