import style from "./Table.module.scss";
import { editModal, tableHeader } from "src/share/mock";
import { EditButton, Sort } from "src/components/ui";
import { Modal } from "src/components/blocks";
import { useState } from "react";

const Table = ({ items }: { items: any }) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          {tableHeader.map((header: string) => {
            return header === "Название" ? (
              <th key={header} className={style.sortItem}>
                {header} <Sort />
              </th>
            ) : (
              <th key={header}>{header}</th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {items.map((item: any) => {
          const [active, setActive] = useState(false);
          const data = {
            id: item.id,
            name: item.name,
            description: item.description,
            measurement_units: item.measurement_units,
            code: item.code,
          };
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.measurement_units}</td>
              <td>{item.code}</td>
              <td className={style.edit}>
                <EditButton onEdit={() => setActive(true)} />
              </td>
              {active && (
                <Modal
                  data={data}
                  add={false}
                  title={editModal.title}
                  description={editModal.description}
                  active={active}
                  setActive={setActive}
                />
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
