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

    const [oldPricesRostov, setOldPricesRostov] = useState<number[]>([...pricesRostov]);
    const [oldPricesTarasov, setOldPricesTarasov] = useState<number[]>([...pricesTarasov]);
    const [oldPricesBarleyRostov, setOldPricesBarleyRostov] = useState<number[]>([...pricesBarleyRostov]);
    const [oldPricesBarleyTarasov, setOldPricesBarleyTarasov] = useState<number[]>([...pricesBarleyTarasov]);
    const [rostovChanges, setRostovChanges] = useState<string[]>(Array(12).fill('same'));
    const [tarasovChanges, setTarasovChanges] = useState<string[]>(Array(12).fill('same'));
    const [rostovBarleyChanges, setRostovBarleyChanges] = useState<string[]>(Array(1).fill('same'));
    const [tarasovBarleyChanges, setTarasovBarleyChanges] = useState<string[]>(Array(1).fill('same'));

    const [selectedDate, setSelectedDate] = useState<string>('');
    const [differencePriceRostov, setDifferencePriceRostov] = useState<string[]>(Array(12).fill('   —'));
    const [differencePriceTarasov, setDifferencePriceTarasov] = useState<string[]>(Array(12).fill('   —'));
    const [differencePriceBarleyRostov, setDifferencePriceBarleyRostov] = useState<string[]>(Array(1).fill('   —'));
    const [differencePriceBarleyTarasov, setDifferencePriceBarleyTarasov] = useState<string[]>(Array(1).fill('   —'));


    useEffect(() => {
        const storageRostov = localStorage.getItem(LOCAL_STORAGE_KEY_ROSTOV);
        const storageTarasov = localStorage.getItem(LOCAL_STORAGE_KEY_TARASOV);
        const storageBarleyRostov = localStorage.getItem(LOCAL_STORAGE_KEY_BARLEY_ROSTOV);
        const storageBarleyTarasov = localStorage.getItem(LOCAL_STORAGE_KEY_BARLEY_TARASOV);

        if (storageRostov) {
          const parsed = JSON.parse(storageRostov);
          setPricesRostov(parsed);
          setOldPricesRostov(parsed);
        }
      
        if (storageTarasov) {
          const parsed = JSON.parse(storageTarasov);
          setPricesTarasov(parsed);
          setOldPricesTarasov(parsed);
        }
      
        if (storageBarleyRostov) {
          const parsed = JSON.parse(storageBarleyRostov);
          setPricesBarleyRostov(parsed);
          setOldPricesBarleyRostov(parsed);
        }
      
        if (storageBarleyTarasov) {
          const parsed = JSON.parse(storageBarleyTarasov);
          setPricesBarleyTarasov(parsed);
          setOldPricesBarleyTarasov(parsed);
        }
      }, []);
      
    const handleSave = () => {
        const newChangesRostov = pricesRostov.map((price: number, i:number ) => {
            if (Number(price) > Number(oldPricesRostov[i])) {
                differencePriceRostov[i] = `+${(Number(price) - Number(oldPricesRostov[i])).toFixed(2)}`;
                return 'up';
            }
            if (Number(price) < Number(oldPricesRostov[i])) {
                differencePriceRostov[i] = `-${Math.abs(Number(price) - Number(oldPricesRostov[i])).toFixed(2)}`;
                return 'down';
            }
            else {
                differencePriceRostov[i] = `   —`;
                return 'same';
            }
        });
    
        const newChangesTarasov = pricesTarasov.map((price:number , i: number) => {
            if (Number(price) > Number(oldPricesTarasov[i])) {
                differencePriceTarasov[i] = `+${(Number(price) - Number(oldPricesTarasov[i])).toFixed(2)}`;
                return 'up';
            } 
            if (Number(price) < Number(oldPricesTarasov[i])) {
                differencePriceTarasov[i] = `-${Math.abs(Number(price) - Number(oldPricesTarasov[i])).toFixed(2)}`;
                return 'down'
            }
            else {
                differencePriceTarasov[i] = `   —`;
                return 'same';
            } 
        });

        const newChangesBarleyRostov = pricesBarleyRostov.map((price: number, i: number) => {
            if(Number(price) > Number(oldPricesBarleyRostov[i])) {
                differencePriceBarleyRostov[i] = `+${(Number(price) - Number(oldPricesBarleyRostov[i])).toFixed(2)}`
                return 'up';
            }
            if(Number(price) < Number(oldPricesBarleyRostov[i])) {
                differencePriceBarleyRostov[i] = `-${(Math.abs(Number(price) - oldPricesBarleyRostov[i])).toFixed(2)}`
                return 'down';
            }
            else {
                differencePriceBarleyRostov[i] = `   —`;
                return 'same';
            }
        });

        const newChangesBarleyTarasov = pricesBarleyTarasov.map((price: number, i: number) => {
            if(Number(price) > Number(oldPricesBarleyTarasov[i])) {
                differencePriceBarleyTarasov[i] = `+${(Number(price) - oldPricesBarleyTarasov[i]).toFixed(2)}`
                return 'up';
            }
            if(Number(price) < Number(oldPricesBarleyTarasov[i])) {
                differencePriceBarleyTarasov[i] = `-${Math.abs(Number(price) - oldPricesBarleyTarasov[i]).toFixed(2)}`
                return 'down';
            }
            else {
                differencePriceBarleyTarasov[i] = `   —`
                return 'some';
            }
            
        });
  
    
        setRostovChanges(newChangesRostov);
        setTarasovChanges(newChangesTarasov);
        setRostovBarleyChanges(newChangesBarleyRostov);
        setTarasovBarleyChanges(newChangesBarleyTarasov);
        setOldPricesRostov([...pricesRostov]);
        setOldPricesTarasov([...pricesTarasov]);
        setOldPricesBarleyRostov([...pricesBarleyRostov]);
        setOldPricesBarleyTarasov([...pricesBarleyTarasov]);
        setDifferencePriceRostov([...differencePriceRostov]);
        setDifferencePriceTarasov([...differencePriceTarasov]);

        localStorage.setItem(LOCAL_STORAGE_KEY_ROSTOV, JSON.stringify(pricesRostov));
        localStorage.setItem(LOCAL_STORAGE_KEY_TARASOV, JSON.stringify(pricesTarasov));
        localStorage.setItem(LOCAL_STORAGE_KEY_BARLEY_ROSTOV, JSON.stringify(pricesBarleyRostov));
        localStorage.setItem(LOCAL_STORAGE_KEY_BARLEY_TARASOV, JSON.stringify(pricesBarleyTarasov));
    }


    return (
     <div>
        <Header selectedDate={selectedDate}/>
        <div className={styles.titleBlock}> 
            <h1 className={styles.title}>Пшеница</h1>
        </div>
        <PriceTable
            pricesRostov={pricesRostov}
            setPricesRostov={setPricesRostov}
            pricesTarasov={pricesTarasov}
            setPricesTarasov={setPricesTarasov}
            rostovChanges={rostovChanges}
            tarasovChanges={tarasovChanges}
            differencePriceRostov={differencePriceRostov}
            differencePriceTarasov={differencePriceTarasov}
            className={styles.priceTable}
        />
        <div className={styles.barley}> 
            <h1 className={styles.title}>Ячмень</h1>
        </div>
        <PriceTableBarley 
            pricesBarleyRostov={pricesBarleyRostov} 
            setPricesBarleyRostov={setPricesBarleyRostov}  
            pricesBarleyTarasov={pricesBarleyTarasov} 
            setPricesBarleyTarasov={setPricesBarleyTarasov}
            rostovBarleyChanges={rostovBarleyChanges}
            tarasovBarleyChanges={tarasovBarleyChanges}
            differencePriceBarleyRostov={differencePriceBarleyRostov}
            differencePriceBarleyTarasov={differencePriceBarleyTarasov}
            className={styles.PriceTableBarley}
        />
        <input
            placeholder='введите дату'
            className={styles.inputDate}
            type='date'
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
        />
        <button className={styles.button} onClick={handleSave}>Сохранить</button>
     </div>

    )
}

export default WheatPricesPage;