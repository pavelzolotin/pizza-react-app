import { useState } from 'react';

function Categories() {

    const [activeTab, setActiveTab] = useState(0);

    const categories = [
        'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
    ]

    const onClickCategory = (index) => {
        setActiveTab(index)
    }

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((value, i) =>
                        <li
                            onClick={() => onClickCategory(i)}
                            className={activeTab === i ? 'active' : ''}
                        >
                            {value}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Categories;