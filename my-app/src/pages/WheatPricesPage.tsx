import React, {useState, useEffect} from 'react';
import PriceTable from '../components/PriceTable/PriceTable.tsx';
import PriceTableBarley from '../../src/components/PriceTableBarley/PriceTableBarley.tsx'
import Header from '../components/Header/Header.tsx';
import styles from '../pages/WheatPricesPage.module.css'

const LOCAL_STORAGE_KEY = 'wheatPrices';



const WheatPricesPage: React.FC = () => {
    const [prices, setPrices] = useState<number[]>(Array(12).fill(0));
    const [pricesBarley, setPricesBarley] = useState<number[]>(Array(1).fill(0));


    //загрузка из LocalStorage при первой загрузке страницы
    useState(() => {
        const storage = localStorage.getItem(LOCAL_STORAGE_KEY);

        if(storage) {
            setPrices(JSON.parse(storage));
        }
    }, [])


    return (
     <div>
        <Header/>
        <div className={styles.titleBlock}> 
            <h1 className={styles.title}>Пшеница</h1>
        </div>
        <PriceTable prices={prices} setPrices={setPrices} className={styles.priceTable}/>
        <div className={styles.barley}> 
            <h1 className={styles.title}>Ячмень</h1>
        </div>
        <PriceTableBarley prices={pricesBarley} setPrices={setPricesBarley}/>
     </div>

    )
}

export default WheatPricesPage;