import React from 'react';
import styles from '../PriceTableBarley/PriceTableBarley.module.css'

interface PriceTableProps {
    pricesBarleyRostov: (number | string)[],
    setPricesBarleyRostov: React.Dispatch<React.SetStateAction<(number | string)[]>>,
    pricesBarleyTarasov: (number | string)[],
    setPricesBarleyTarasov: React.Dispatch<React.SetStateAction<(number | string)[]>>,
    rostovBarleyChanges: string[],
    tarasovBarleyChanges: string[],
    className?: string
}

const PriceTableBarley: React.FC<PriceTableProps> = ({
    pricesBarleyRostov, 
    setPricesBarleyRostov, 
    pricesBarleyTarasov, 
    setPricesBarleyTarasov,
    rostovBarleyChanges,
    tarasovBarleyChanges,
    className
}) => {

    const handleChangeRostov = (index: number, value: string) => {
        const newPrices = [...pricesBarleyRostov];
        newPrices[index] = value === '' ? '' : Number(value);
        setPricesBarleyRostov(newPrices);
    }

    const handleChangeTarasov = (index: number, value: string) => {
        const newPrices = [...pricesBarleyTarasov];
        newPrices[index] = value === '' ? '' : Number(value);
        setPricesBarleyTarasov(newPrices);
    }

    return (
        <div className={styles.containerPrice}>
            <div className={styles.priceOne}>
                <div className={styles.h4Block}>
                    <h4 className={styles.h4} >Ростов-на-Дону</h4>
                </div>
                {pricesBarleyRostov.map((price: number, index: number) => (
                    <input
                        key={index}
                        type="number"
                        value={price}
                        onChange={(e) => handleChangeRostov(index, e.target.value)}
                        className={`${styles.input} ${styles[rostovBarleyChanges[index]]}`}
                        
                    />          
                ))}
            </div>
            <div className={styles.priceTwo}>
            <div className={styles.h4Block}>
                <h4 className={styles.h4} >Тарасовский ФЛ</h4>
            </div>
                {pricesBarleyTarasov.map((price: number, index: number) => (
                    <input
                        key={index}
                        type="number"
                        value={price}
                        onChange={(e) => handleChangeTarasov(index, e.target.value)}
                        className={`${styles.input} ${styles[tarasovBarleyChanges[index]]}`}
                    />          
                ))}
            </div>
        </div>
       
    )


}

export default PriceTableBarley;