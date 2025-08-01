import React from 'react';
import styles from '../PriceTableBarley/PriceTableBarley.module.css'

interface PriceTableProps {
    price: number[],
    setPrices: React.Dispatch<React.SetStateAction<number[]>>;
}

const PriceTableBarley: React.FC<PriceTableProps> = ({prices, setPrices}) => {

    const handleChange = (index: number, value: string) => {
        const newPrices = [...prices];
        newPrices[index] = Number(value);
        setPrices(newPrices);
    }

    return (
        <div className={styles.containerPrice}>
            <div className={styles.priceOne}>
                <div className={styles.h4Block}>
                    <h4 className={styles.h4} >Ростов-на-Дону</h4>
                </div>
                {prices.map((price, index) => (
                    <input
                        key={index}
                        type="number"
                        value={price}
                        onChange={(e) => handleChange(index, e.target.value)}
                        className={styles.input}
                        
                    />          
                ))}
            </div>
            <div className={styles.priceTwo}>
            <div className={styles.h4Block}>
                <h4 className={styles.h4} >Тарасовский ФЛ</h4>
            </div>
                {prices.map((price: number, index) => (
                    <input
                        key={index}
                        type="number"
                        value={price}
                        onChange={(e) => handleChange(index, e.target.value)}
                        className={styles.input}
                    />          
                ))}
            </div>
        </div>
       
    )


}

export default PriceTableBarley;