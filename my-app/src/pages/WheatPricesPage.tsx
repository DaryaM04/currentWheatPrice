import React, {useState, useEffect} from 'react';
import PriceTable from '../components/PriceTable/PriceTable.tsx';
import PriceTableBarley from '../../src/components/PriceTableBarley/PriceTableBarley.tsx'
import Header from '../components/Header/Header.tsx';
import styles from '../pages/WheatPricesPage.module.css'

const LOCAL_STORAGE_KEY_ROSTOV = 'wheatPricesRostov';
const LOCAL_STORAGE_KEY_TARASOV = 'wheatPricesTarasov';
const LOCAL_STORAGE_KEY_BARLEY_ROSTOV = 'barleyPricesRostov';
const LOCAL_STORAGE_KEY_BARLEY_TARASOV = 'barleyPricesTarasov';


const WheatPricesPage: React.FC = () => {
    const [pricesRostov, setPricesRostov] = useState<number[]>(Array(12).fill(0));
    const [pricesTarasov, setPricesTarasov] = useState<number[]>(Array(12).fill(0));
    const [pricesBarleyRostov, setPricesBarleyRostov] = useState<number[]>(Array(1).fill(0));
    const [pricesBarleyTarasov, setPricesBarleyTarasov] = useState<number[]>(Array(1).fill(0));

    //загрузка из LocalStorage при первой загрузке страницы
    useState(() => {
        const storageRostov = localStorage.getItem(LOCAL_STORAGE_KEY_ROSTOV);
        const storageTarasov = localStorage.getItem(LOCAL_STORAGE_KEY_TARASOV);
        const storageBarleyRostov = localStorage.getItem(LOCAL_STORAGE_KEY_BARLEY_ROSTOV);
        const storageBarleyTarasov = localStorage.getItem(LOCAL_STORAGE_KEY_BARLEY_TARASOV);

        if(storageRostov) {
            setPricesRostov(JSON.parse(storageRostov));
        }

        if(storageTarasov) {
            setPricesTarasov(JSON.parse(storageTarasov))
        }
        if(storageBarleyRostov) {
            setPricesRostov(JSON.parse(storageBarleyRostov));
        }

        if(storageBarleyTarasov) {
            setPricesTarasov(JSON.parse(storageBarleyTarasov))
        }
    }, [])


    return (
     <div>
        <Header/>
        <div className={styles.titleBlock}> 
            <h1 className={styles.title}>Пшеница</h1>
        </div>
        <PriceTable pricesRostov={pricesRostov} setPricesRostov={setPricesRostov} pricesTarasov={pricesTarasov} setPricesTarasov={setPricesTarasov} className={styles.priceTable}/>
        <div className={styles.barley}> 
            <h1 className={styles.title}>Ячмень</h1>
        </div>
        <PriceTableBarley pricesBarleyRostov={pricesBarleyRostov} setPricesBarleyRostov={setPricesBarleyRostov}  pricesBarleyTarasov={pricesBarleyTarasov} setPricesBarleyTarasov={setPricesBarleyTarasov}/>
     </div>

    )
}

export default WheatPricesPage;