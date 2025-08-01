import React from 'react';
import styles from './PriceTable.module.css'

interface PriceTableProps {
    price: number[],
    setPrices: React.Dispatch<React.SetStateAction<number[]>>;
}

const PriceTable: React.FC<PriceTableProps> = ({prices, setPrices}) => {

    const classWeth = [15.3, 14.5, 14.0, 13.5, 13.0, 12.5, 12.0, 11.5, 11.2, 10.5, 10, 8.5]

    const handleChange = (index: number, value: string) => {
        const newPrices = [...prices];
        newPrices[index] = Number(value);
        setPrices(newPrices);
    }


    return (
        <div className={styles.containerPrice}>
             <div className={styles.class}>
                <div className={styles.h4Block}>
                    <h4  className={styles.h4} >Класс</h4>
                </div>
                {classWeth.map((price, index) => (
                    <input
                        key={index}
                        type="number"
                        value={price}
                        onChange={(e) => handleChange(index, e.target.value)}
                        className={styles.inputClass}
                    />          
                ))}
            </div>
            <div className={styles.containerPriceOneAndTwo}>
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
        </div>
       
    )


}

export default PriceTable;