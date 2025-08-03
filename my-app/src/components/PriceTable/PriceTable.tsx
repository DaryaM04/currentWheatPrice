import React from 'react';
import styles from './PriceTable.module.css'

interface PriceTableProps {
    pricesRostov: (number | string)[];
    setPricesRostov: React.Dispatch<React.SetStateAction<(number | string)[]>>;
    pricesTarasov: (number | string)[];
    setPricesTarasov: React.Dispatch<React.SetStateAction<(number | string)[]>>;
    rostovChanges: string[];         
    tarasovChanges: string[];        
    className?: string;
  }

  const PriceTable: React.FC<PriceTableProps> = ({
    pricesRostov,
    setPricesRostov,
    pricesTarasov,
    setPricesTarasov,
    rostovChanges,           
    tarasovChanges,
    className
  }) => {
        const classWeth = [15.3, 14.5, 14.0, 13.5, 13.0, 12.5, 12.0, 11.5, 11.2, 10.5, 10, 8.5]

        const handleChangeRostov = (index: number, value: string) => {
            const newPrices = [...pricesRostov];
            newPrices[index] = value === '' ? '' : Number(value);
            setPricesRostov(newPrices);
        }

        const handleChangeTarasov = (index: number, value: string) => {
            const newPrice = [...pricesTarasov];
            newPrice[index] = value === '' ? '' : Number(value);
            setPricesTarasov(newPrice);
        }

        const handleChangeBarley = (index: number, value: string) => {
            const newPrice = [...pricesRostov];
            newPrice[index] = value === '' ? '' : Number(value);
            setPricesTarasov(newPrice);
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
                            onChange={(e) => handleChangeBarley(index, e.target.value)}
                            className={styles.inputClass}
                            disabled
                        />          
                    ))}
                </div>
                <div className={styles.containerPriceOneAndTwo}>
                    <div className={styles.priceOne}>
                        <div className={styles.h4Block}>
                            <h4 className={styles.h4} >Ростов-на-Дону</h4>
                        </div>
                        {pricesRostov.map((price, index) => (
                            <input
                                key={index}
                                type="number"
                                value={price}
                                onChange={(e) => handleChangeRostov(index, e.target.value)}
                                className={`${styles.input} ${styles[rostovChanges[index]]}`}
                                
                            />          
                        ))}
                    </div>
                    <div className={styles.priceTwo}>
                        <div className={styles.h4Block}>
                            <h4 className={styles.h4} >Тарасовский ФЛ</h4>
                        </div>
                        {pricesTarasov.map((price: number, index) => (
                            <input
                                key={index}
                                type="number"
                                value={price}
                                onChange={(e) => handleChangeTarasov(index, e.target.value)}
                                className={`${styles.input} ${styles[tarasovChanges[index]]}`}
                            />          
                        ))}
                    </div>
                </div>
            </div>
        )
}

export default PriceTable;